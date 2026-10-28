"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { isAuthed, login, logout, trocarSenha } from "@/lib/auth";
import { mudarStatus, type Status } from "@/lib/db";

export async function entrar(_prev: string | undefined, f: FormData) {
  const ok = await login(String(f.get("senha") ?? ""));
  if (!ok) return "Senha incorreta.";
  redirect("/painel");
}

export async function sair() {
  await logout();
  redirect("/painel");
}

const STATUS: Status[] = ["novo", "respondido", "arquivado"];

export async function atualizarStatus(id: number, status: Status) {
  if (!(await isAuthed())) throw new Error("Não autorizado");
  if (!Number.isInteger(id) || !STATUS.includes(status)) throw new Error("Dados inválidos");
  await mudarStatus(id, status);
  revalidatePath("/painel");
}

export type SenhaState = { ok: true } | { ok: false; erro: string } | undefined;

export async function alterarSenha(_prev: SenhaState, f: FormData): Promise<SenhaState> {
  if (!(await isAuthed())) return { ok: false, erro: "Sessão expirada. Entre de novo." };
  const atual = String(f.get("atual") ?? "");
  const nova = String(f.get("nova") ?? "");
  if (nova.length < 8) return { ok: false, erro: "A nova senha precisa ter pelo menos 8 caracteres." };
  if (nova !== String(f.get("confirma") ?? "")) return { ok: false, erro: "A confirmação não bate com a nova senha." };
  if (nova === atual) return { ok: false, erro: "A nova senha precisa ser diferente da atual." };
  try {
    const erro = await trocarSenha(atual, nova);
    return erro ? { ok: false, erro } : { ok: true };
  } catch (e) {
    console.error("[painel] falha ao trocar senha", e);
    return { ok: false, erro: "Não foi possível salvar a nova senha. Tente de novo." };
  }
}
