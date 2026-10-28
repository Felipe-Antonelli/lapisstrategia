"use client";
import { useActionState } from "react";
import Link from "next/link";
import { alterarSenha } from "../actions";

export default function SenhaForm() {
  const [state, action, pending] = useActionState(alterarSenha, undefined);

  if (state?.ok) {
    return (
      <div>
        <p className="text-navy">Senha alterada. Outros aparelhos conectados precisarão entrar de novo com a senha nova.</p>
        <Link href="/painel" className="btn btn-primary mt-6">Voltar às mensagens</Link>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-4">
      <div>
        <label htmlFor="atual">Senha atual</label>
        <input id="atual" name="atual" type="password" required autoComplete="current-password" />
      </div>
      <div>
        <label htmlFor="nova">Nova senha</label>
        <input id="nova" name="nova" type="password" required minLength={8} autoComplete="new-password" />
        <p className="mt-1 text-xs text-muted">Mínimo de 8 caracteres.</p>
      </div>
      <div>
        <label htmlFor="confirma">Confirme a nova senha</label>
        <input id="confirma" name="confirma" type="password" required minLength={8} autoComplete="new-password" />
      </div>
      {state && !state.ok && <p role="alert" className="text-sm text-red-700">{state.erro}</p>}
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={pending} className="btn btn-primary disabled:opacity-60">
          {pending ? "Salvando…" : "Salvar nova senha"}
        </button>
        <Link href="/painel" className="text-sm font-semibold text-muted hover:text-royal">Cancelar</Link>
      </div>
    </form>
  );
}
