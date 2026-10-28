"use client";
import { useActionState } from "react";
import { enviarContato } from "@/app/contato/actions";
import { site } from "@/data/site";
import { Arrow } from "./Icons";

export default function ContactForm() {
  const [state, action, pending] = useActionState(enviarContato, undefined);

  if (state?.ok) {
    return (
      <div className="border border-line bg-mist p-8">
        <div className="font-serif text-2xl text-navy">Mensagem enviada.</div>
        <p className="mt-2 text-muted">
          Obrigado! Respondemos em até um dia útil. Se for urgente, escreva para{" "}
          <a className="text-royal underline" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" required maxLength={120} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="empresa">Empresa</label>
          <input id="empresa" name="empresa" maxLength={160} autoComplete="organization" />
        </div>
        <div>
          <label htmlFor="interesse">Interesse</label>
          <select id="interesse" name="interesse" defaultValue="Consultoria Empresarial">
            <option>Consultoria Empresarial</option>
            <option>Mentoria Executiva</option>
            <option>Programa Ascensão C-Level</option>
            <option>Ainda não sei, quero conversar</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="mensagem">Conte um pouco do momento da empresa</label>
        <textarea id="mensagem" name="mensagem" rows={5} required maxLength={5000} placeholder="Qual é o principal desafio hoje?" />
      </div>
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 overflow-hidden">
        <label htmlFor="site">Não preencha</label>
        <input id="site" name="site" tabIndex={-1} autoComplete="off" />
      </div>
      {state && !state.ok && (
        <p role="alert" className="border-l-2 border-red-600 bg-red-50 px-4 py-3 text-sm text-red-800">
          {state.erro} Se preferir, escreva para{" "}
          <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
      <div>
        <button type="submit" disabled={pending} className="btn btn-primary disabled:opacity-60">
          {pending ? "Enviando…" : "Enviar mensagem"} <Arrow />
        </button>
      </div>
    </form>
  );
}
