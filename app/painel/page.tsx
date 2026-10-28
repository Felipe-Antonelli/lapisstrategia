import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";
import { authConfigured, isAuthed } from "@/lib/auth";
import { contarPorStatus, dbConfigured, listarContatos, type Contato, type Status } from "@/lib/db";
import { site } from "@/data/site";
import LoginForm from "./LoginForm";
import { atualizarStatus, sair } from "./actions";

export const metadata: Metadata = {
  title: "Painel",
  robots: { index: false, follow: false },
};

const FILTROS: { key: Status | "todos"; label: string }[] = [
  { key: "todos", label: "Abertos" },
  { key: "novo", label: "Novos" },
  { key: "respondido", label: "Respondidos" },
  { key: "arquivado", label: "Arquivados" },
];

const STATUS_STYLE: Record<Status, string> = {
  novo: "bg-royal text-white",
  respondido: "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200",
  arquivado: "bg-mist text-muted ring-1 ring-line",
};

const dataBR = (d: string) =>
  new Date(d).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo", day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-mist">
      <div className="border-b border-line bg-white">
        <div className="container-x flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/brand/logo-circle.png" alt="" width={36} height={36} />
            <span className="font-serif text-lg text-navy">{site.name} · Painel</span>
          </Link>
          <Link href="/" className="text-sm font-semibold text-muted hover:text-royal">Ver site</Link>
        </div>
      </div>
      {children}
    </div>
  );
}

function Aviso({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <Shell>
      <div className="container-x py-16">
        <div className="mx-auto max-w-lg border border-line bg-white p-8">
          <h1 className="display text-2xl text-navy">{titulo}</h1>
          <p className="mt-3 text-muted">{texto}</p>
        </div>
      </div>
    </Shell>
  );
}

export default async function PainelPage({ searchParams }: PageProps<"/painel">) {
  // Lê env e cookie a cada acesso; sem isso o build pré-renderiza a página.
  await connection();

  if (!authConfigured()) {
    return <Aviso titulo="Painel não configurado" texto="Defina a variável ADMIN_PASSWORD no projeto da Vercel e faça um novo deploy." />;
  }

  if (!(await isAuthed())) {
    return (
      <Shell>
        <div className="container-x py-16">
          <div className="mx-auto max-w-sm border border-line bg-white p-8">
            <div className="eyebrow eyebrow-line">Acesso restrito</div>
            <h1 className="display mt-3 mb-6 text-2xl text-navy">Entrar no painel</h1>
            <LoginForm />
          </div>
        </div>
      </Shell>
    );
  }

  if (!dbConfigured()) {
    return <Aviso titulo="Banco de dados não conectado" texto="Conecte o Supabase ao projeto (SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY) e faça um novo deploy." />;
  }

  const { status: raw } = await searchParams;
  const filtro = FILTROS.some((f) => f.key === raw) ? (raw as Status | "todos") : "todos";
  const [contatos, contagem] = await Promise.all([
    listarContatos(filtro === "todos" ? undefined : filtro),
    contarPorStatus(),
  ]);
  const abertos = (contagem.novo ?? 0) + (contagem.respondido ?? 0);

  return (
    <Shell>
      <div className="container-x py-10 md:py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="eyebrow eyebrow-line">Formulário de contato</div>
            <h1 className="display mt-3 text-3xl text-navy md:text-4xl">Mensagens recebidas</h1>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/painel/senha" className="text-sm font-semibold text-muted hover:text-royal">Trocar senha</Link>
            <form action={sair}>
              <button className="text-sm font-semibold text-muted hover:text-royal">Sair</button>
            </form>
          </div>
        </div>

        <nav className="mt-8 flex flex-wrap gap-2">
          {FILTROS.map((f) => {
            const n = f.key === "todos" ? abertos : contagem[f.key] ?? 0;
            const ativo = f.key === filtro;
            return (
              <Link
                key={f.key}
                href={f.key === "todos" ? "/painel" : `/painel?status=${f.key}`}
                className={`flex items-center gap-2 border px-4 py-2 text-sm font-semibold transition-colors ${ativo ? "border-royal bg-royal text-white" : "border-line bg-white text-navy hover:border-royal"}`}
              >
                {f.label}
                <span className={`rounded-full px-2 py-0.5 text-xs ${ativo ? "bg-white/20" : "bg-mist text-muted"}`}>{n}</span>
              </Link>
            );
          })}
        </nav>

        {contatos.length === 0 ? (
          <div className="mt-8 border border-dashed border-line bg-white p-10 text-center text-muted">
            Nenhuma mensagem aqui por enquanto.
          </div>
        ) : (
          <ul className="mt-8 grid gap-4">
            {contatos.map((c) => <Item key={c.id} c={c} />)}
          </ul>
        )}
      </div>
    </Shell>
  );
}

function Item({ c }: { c: Contato }) {
  const assunto = encodeURIComponent(`Re: ${c.interesse} | ${site.name}`);
  const corpo = encodeURIComponent(`Olá, ${c.nome.split(" ")[0]}!\n\n\n\n---\nSua mensagem:\n${c.mensagem}`);
  const botao = "border border-line bg-white px-3 py-2 text-sm font-semibold text-navy transition-colors hover:border-royal hover:text-royal";

  return (
    <li className={`border bg-white p-6 md:p-7 ${c.status === "novo" ? "border-royal/40 shadow-[0_18px_40px_-30px_rgba(7,31,79,0.5)]" : "border-line"}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-lg font-semibold text-navy">{c.nome}</h2>
            <span className={`px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.15em] ${STATUS_STYLE[c.status]}`}>{c.status}</span>
          </div>
          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
            <a href={`mailto:${c.email}`} className="text-royal hover:underline">{c.email}</a>
            {c.empresa && <span>{c.empresa}</span>}
          </div>
        </div>
        <div className="text-right text-sm">
          <div className="chip !py-1 text-[0.68rem]">{c.interesse}</div>
          <div className="mt-2 text-muted">{dataBR(c.created_at)}</div>
        </div>
      </div>

      <p className="mt-5 whitespace-pre-wrap border-l-2 border-line pl-4 leading-relaxed text-ink">{c.mensagem}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        <a href={`mailto:${c.email}?subject=${assunto}&body=${corpo}`} className="btn btn-primary !px-4 !py-2 text-sm">Responder por e-mail</a>
        {c.status !== "respondido" && (
          <form action={atualizarStatus.bind(null, c.id, "respondido")}><button className={botao}>Marcar como respondido</button></form>
        )}
        {c.status !== "novo" && (
          <form action={atualizarStatus.bind(null, c.id, "novo")}><button className={botao}>Marcar como novo</button></form>
        )}
        {c.status !== "arquivado" && (
          <form action={atualizarStatus.bind(null, c.id, "arquivado")}><button className={botao}>Arquivar</button></form>
        )}
      </div>
    </li>
  );
}
