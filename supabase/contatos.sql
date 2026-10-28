-- Rodar uma vez no Supabase: SQL Editor > New query > colar e executar.
create table if not exists public.contatos (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  nome text not null,
  email text not null,
  empresa text,
  interesse text not null,
  mensagem text not null,
  status text not null default 'novo' check (status in ('novo', 'respondido', 'arquivado'))
);

create index if not exists contatos_status_created_at_idx on public.contatos (status, created_at desc);

-- RLS ligado e sem políticas: ninguém acessa pela chave pública (anon).
-- O site grava e o painel lê pelo servidor, com a service role.
alter table public.contatos enable row level security;

-- Senha do painel (hash scrypt), trocada pelo próprio painel em /painel/senha.
create table if not exists public.painel_config (
  id int primary key check (id = 1),
  senha_hash text not null,
  updated_at timestamptz not null default now()
);

alter table public.painel_config enable row level security;
