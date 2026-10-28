"use server";
import { criarContato } from "@/lib/db";

export type EnvioState = { ok: true } | { ok: false; erro: string } | undefined;

const INTERESSES = ["Consultoria Empresarial", "Mentoria Executiva", "Programa Ascensão C-Level", "Ainda não sei, quero conversar"];

const campo = (f: FormData, k: string, max: number) => String(f.get(k) ?? "").trim().slice(0, max);

export async function enviarContato(_prev: EnvioState, f: FormData): Promise<EnvioState> {
  // Campo escondido: humanos não preenchem, robôs sim. Finge sucesso e descarta.
  if (campo(f, "site", 200)) return { ok: true };

  const nome = campo(f, "nome", 120);
  const email = campo(f, "email", 200);
  const empresa = campo(f, "empresa", 160) || null;
  const interesse = INTERESSES.includes(campo(f, "interesse", 80)) ? campo(f, "interesse", 80) : INTERESSES[3];
  const mensagem = campo(f, "mensagem", 5000);

  if (!nome || !mensagem || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, erro: "Confira nome, e-mail e mensagem." };
  }

  try {
    await criarContato({ nome, email, empresa, interesse, mensagem });
    return { ok: true };
  } catch (e) {
    console.error("[contato] falha ao salvar", e);
    return { ok: false, erro: "Não conseguimos enviar agora." };
  }
}
