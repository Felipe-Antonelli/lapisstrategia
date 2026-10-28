import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export type Status = "novo" | "respondido" | "arquivado";

export type Contato = {
  id: number;
  created_at: string;
  nome: string;
  email: string;
  empresa: string | null;
  interesse: string;
  mensagem: string;
  status: Status;
};

// Variáveis criadas pela integração Supabase do Vercel Marketplace.
// A service role ignora o RLS: só pode ser usada no servidor.
const url = () => process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = () => process.env.SUPABASE_SERVICE_ROLE_KEY;

export const dbConfigured = () => Boolean(url() && key());

let client: SupabaseClient | null = null;
function db(tabela = "contatos") {
  if (!dbConfigured()) throw new Error("Supabase não configurado");
  client ??= createClient(url()!, key()!, { auth: { persistSession: false, autoRefreshToken: false } });
  return client.from(tabela);
}

// Senha do painel (hash scrypt). Linha única, id = 1. Sem linha = vale ADMIN_PASSWORD.
export async function lerSenhaHash() {
  if (!dbConfigured()) return null;
  const { data, error } = await db("painel_config").select("senha_hash").eq("id", 1).maybeSingle();
  if (error) throw error;
  return (data?.senha_hash as string | undefined) ?? null;
}

export async function salvarSenhaHash(senha_hash: string) {
  const { error } = await db("painel_config").upsert({ id: 1, senha_hash, updated_at: new Date().toISOString() });
  if (error) throw error;
}

export async function criarContato(c: Pick<Contato, "nome" | "email" | "empresa" | "interesse" | "mensagem">) {
  const { error } = await db().insert(c);
  if (error) throw error;
}

export async function listarContatos(status?: Status) {
  const q = db().select("*").order("created_at", { ascending: false });
  const { data, error } = await (status ? q.eq("status", status) : q.neq("status", "arquivado"));
  if (error) throw error;
  return data as Contato[];
}

export async function contarPorStatus() {
  const todos: Status[] = ["novo", "respondido", "arquivado"];
  const counts = await Promise.all(
    todos.map(async (s) => {
      const { count, error } = await db().select("id", { count: "exact", head: true }).eq("status", s);
      if (error) throw error;
      return [s, count ?? 0] as const;
    }),
  );
  return Object.fromEntries(counts) as Record<Status, number>;
}

export async function mudarStatus(id: number, status: Status) {
  const { error } = await db().update({ status }).eq("id", id);
  if (error) throw error;
}
