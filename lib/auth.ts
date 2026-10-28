import "server-only";
import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { lerSenhaHash, salvarSenhaHash } from "./db";

// Acesso ao painel: uma senha só. Depois da primeira troca pelo painel ela fica
// no Supabase (hash scrypt); até lá vale ADMIN_PASSWORD, definida na Vercel.
// O cookie guarda um HMAC da credencial atual: trocar a senha derruba as sessões abertas.
const COOKIE = "painel_sessao";
const MAX_AGE = 60 * 60 * 24 * 30;

const envPassword = () => process.env.ADMIN_PASSWORD ?? "";
const secret = () => process.env.SUPABASE_JWT_SECRET ?? envPassword();

function safeEqual(a: string | Buffer, b: string | Buffer) {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  return ba.length === bb.length && timingSafeEqual(ba, bb);
}

function hashSenha(senha: string) {
  const salt = randomBytes(16).toString("hex");
  return `scrypt$${salt}$${scryptSync(senha, salt, 64).toString("hex")}`;
}

function confereHash(senha: string, guardado: string) {
  const [, salt, hash] = guardado.split("$");
  return Boolean(salt && hash) && safeEqual(scryptSync(senha, salt, 64), Buffer.from(hash, "hex"));
}

async function credencial() {
  return (await lerSenhaHash()) ?? (envPassword() ? `env$${envPassword()}` : null);
}

const token = (cred: string) => createHmac("sha256", secret()).update(`painel-ll-estrategia:${cred}`).digest("hex");

async function senhaConfere(senha: string) {
  const cred = await credencial();
  if (!cred) return null;
  const ok = cred.startsWith("scrypt$") ? confereHash(senha, cred) : safeEqual(senha, envPassword());
  return ok ? cred : null;
}

async function abrirSessao(cred: string) {
  (await cookies()).set(COOKIE, token(cred), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/painel",
    maxAge: MAX_AGE,
  });
}

export const authConfigured = () => envPassword().length > 0;

export async function isAuthed() {
  const v = (await cookies()).get(COOKIE)?.value;
  if (!v) return false;
  const cred = await credencial();
  return Boolean(cred && safeEqual(v, token(cred)));
}

export async function login(senha: string) {
  const cred = await senhaConfere(senha);
  if (!cred) return false;
  await abrirSessao(cred);
  return true;
}

export async function logout() {
  (await cookies()).delete({ name: COOKIE, path: "/painel" });
}

export async function trocarSenha(atual: string, nova: string) {
  if (!(await senhaConfere(atual))) return "Senha atual incorreta.";
  const novoHash = hashSenha(nova);
  await salvarSenhaHash(novoHash);
  await abrirSessao(novoHash);
  return null;
}
