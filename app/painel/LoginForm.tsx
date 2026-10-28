"use client";
import { useActionState } from "react";
import { entrar } from "./actions";

export default function LoginForm() {
  const [erro, action, pending] = useActionState(entrar, undefined);
  return (
    <form action={action} className="grid gap-4">
      <div>
        <label htmlFor="senha">Senha</label>
        <input id="senha" name="senha" type="password" required autoFocus autoComplete="current-password" />
      </div>
      {erro && <p role="alert" className="text-sm text-red-700">{erro}</p>}
      <button type="submit" disabled={pending} className="btn btn-primary disabled:opacity-60">
        {pending ? "Entrando…" : "Entrar"}
      </button>
    </form>
  );
}
