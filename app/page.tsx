import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { Arrow, Chart, Compass, Gears, Check } from "@/components/Icons";

const pilares = [
  {
    icon: Compass,
    title: "Strategy",
    pt: "Estratégia",
    text: "Clareza sobre onde competir, como vencer e o que deixar de fazer. Uma direção que a liderança inteira consegue explicar em uma frase.",
  },
  {
    icon: Gears,
    title: "Execution",
    pt: "Execução",
    text: "Metas, rotinas e responsáveis. O plano vira agenda semanal, com indicadores que mostram se estamos no caminho ou não.",
  },
  {
    icon: Chart,
    title: "Growth",
    pt: "Crescimento",
    text: "Receita, margem e escala com previsibilidade. Crescimento que a estrutura aguenta e o caixa sustenta.",
  },
];

const etapas = [
  { title: "Diagnóstico", text: "Entendemos números, pessoas e mercado antes de qualquer recomendação. Sem achismo.", tag: "Semanas 1 a 4" },
  { title: "Estratégia", text: "Definimos prioridades, escolhas e metas com a liderança. Poucas apostas, bem escolhidas.", tag: "Workshop com a liderança" },
  { title: "Execução", text: "Acompanhamos a implementação lado a lado, com ritmo de gestão e decisões rápidas.", tag: "Rotina mensal" },
  { title: "Crescimento", text: "Medimos resultado, ajustamos o rumo e consolidamos o que funcionou como rotina.", tag: "Ciclo contínuo" },
];

const insights = [
  {
    tag: "Estratégia",
    title: "Por que a maioria dos planejamentos estratégicos morre em fevereiro",
    text: "Planos sem dono, sem ritmo e sem indicador viram apresentação de arquivo. O que diferencia os que sobrevivem ao primeiro trimestre.",
  },
  {
    tag: "Liderança",
    title: "O executivo que decide sozinho está decidindo devagar",
    text: "Como estruturar o ciclo de decisão da liderança para ganhar velocidade sem perder qualidade.",
  },
  {
    tag: "Crescimento",
    title: "Crescer 30% sem quebrar a operação",
    text: "Os três gargalos que aparecem antes da escala e como antecipá-los em vez de apagar incêndio.",
  },
];

const frentes = [
  {
    n: "01",
    href: "/consultoria-empresarial",
    img: "/brand/consultoria-icon.jpg",
    eyebrow: "Para empresas",
    title: "Consultoria Empresarial",
    text: "Planejamento estratégico, gestão, finanças e comercial. Diagnóstico honesto, plano priorizado e acompanhamento da execução.",
    items: ["Planejamento estratégico", "Gestão e processos", "Finanças e crescimento", "Comercial e go-to-market"],
    cta: "Conhecer a consultoria",
  },
  {
    n: "02",
    href: "/mentoria-executiva",
    img: "/brand/mentoria-executiva-3x2.jpg",
    eyebrow: "Para líderes",
    title: "Mentoria Executiva",
    text: "Acompanhamento individual para executivos, fundadores e gestores que precisam decidir melhor, liderar times e sustentar resultado.",
    items: ["Encontros individuais", "Plano de desenvolvimento", "Sprints de 90 dias", "Programa Ascensão C-Level"],
    cta: "Conhecer a mentoria",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="absolute inset-y-0 right-0 w-full md:w-[56%]">
          <Image
            src="/brand/lapis-1.jpg"
            alt="Pedra de lápis-lazúli"
            fill
            priority
            className="object-cover object-[60%_center] opacity-60 md:opacity-100 md:[mask-image:linear-gradient(to_right,transparent,black_28%)]"
            sizes="(min-width: 768px) 56vw, 100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent md:hidden" />
        <div className="container-x relative flex min-h-[78vh] flex-col justify-between py-16 md:min-h-[86vh] md:py-24">
          <div className="max-w-2xl">
            <div className="eyebrow eyebrow-line !text-blue-200">Consultoria estratégica &amp; mentoria executiva</div>
            <h1 className="display mt-7 text-[2.9rem] leading-[1.02] sm:text-6xl md:text-[5rem]">
              Estratégia que sai do papel e vira resultado.
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-blue-100/85 md:text-xl">
              Ajudamos empresas e líderes a tomar decisões melhores, executar com disciplina e crescer com consistência.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contato" className="btn btn-light">
                Agendar conversa <Arrow />
              </Link>
              <Link href="/consultoria-empresarial" className="btn btn-ghost-light">
                O que fazemos
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-px border-t border-white/15 pt-6 sm:grid-cols-3 md:max-w-3xl">
            {[
              ["Strategy.", "Direção clara, escolhas explícitas."],
              ["Execution.", "Plano que vira rotina e número."],
              ["Growth.", "Crescimento que a estrutura sustenta."],
            ].map(([t, d]) => (
              <div key={t} className="py-2 sm:pr-8">
                <div className="text-lg font-extrabold tracking-tight">{t.replace(".", "")}<span className="text-bright">.</span></div>
                <div className="mt-1 text-sm text-blue-100/75">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DECLARAÇÃO */}
      <section className="bg-white">
        <div className="container-x grid gap-10 py-20 md:grid-cols-[1fr_2fr] md:py-28">
          <div className="reveal">
            <div className="eyebrow eyebrow-line">A L&amp;L Estratégia</div>
            <div className="mt-5 flex items-center gap-4">
              <Image src="/brand/logo-circle.png" alt="" width={64} height={64} className="logo-hover" />
              <div>
                <div className="font-serif text-xl text-navy">Lapis Lazuli Estratégia</div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">Strategy. Execution. Growth.</div>
              </div>
            </div>
          </div>
          <div className="reveal">
            <p className="display text-2xl leading-snug text-navy md:text-[2.4rem]">
              Não entregamos apresentação. Entregamos um plano priorizado, uma rotina de gestão que funciona e acompanhamento até o resultado aparecer.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <Link href="/consultoria-empresarial" className="link-arrow">Consultoria Empresarial <Arrow /></Link>
              <Link href="/mentoria-executiva" className="link-arrow">Mentoria Executiva <Arrow /></Link>
              <Link href="/sobre" className="link-arrow">Sobre a L&amp;L <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* FRENTES */}
      <section className="bg-mist py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="O que fazemos"
              title="Duas frentes, um mesmo objetivo: resultado."
              text="Atuamos na empresa e na liderança. Estratégia boa com executivo sobrecarregado não anda. Executivo preparado sem estratégia clara gira em falso."
            />
            <Link href="/contato" className="link-arrow reveal mb-2">Qual é a certa para mim? <Arrow /></Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {frentes.map((f) => (
              <Link key={f.n} href={f.href} className="card-hover reveal group block border bg-white">
                <div className="img-zoom relative aspect-[16/10] overflow-hidden bg-navy-deep">
                  <Image src={f.img} alt={f.title} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                  <div className="grad-overlay absolute inset-0" />
                  <span className="absolute left-6 top-5 font-serif text-5xl text-white/90">{f.n}</span>
                  <div className="absolute bottom-5 left-6 right-6">
                    <div className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-blue-200">{f.eyebrow}</div>
                    <h3 className="display mt-1 text-3xl !text-white md:text-[2.2rem]">{f.title}</h3>
                  </div>
                </div>
                <div className="p-7 md:p-9">
                  <p className="text-muted">{f.text}</p>
                  <ul className="mt-5 grid gap-2 text-sm text-ink sm:grid-cols-2">
                    {f.items.map((i) => (
                      <li key={i} className="flex items-center gap-2"><Check className="h-4 w-4 text-royal" />{i}</li>
                    ))}
                  </ul>
                  <span className="link-arrow mt-7">{f.cta} <Arrow /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section className="bg-white">
        <div className="container-x py-16 md:py-20">
          <div className="frame-offset reveal">
            <div className="img-frame relative aspect-[1600/639] w-full overflow-hidden shadow-[0_30px_60px_-40px_rgba(3,21,63,0.6)]">
              <Image src="/brand/banner-strategy.jpg" alt="Strategy. Execution. Growth. Lapis Lazuli Estratégia" fill className="object-cover" sizes="100vw" />
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="waves-bg glow-tl relative overflow-hidden bg-navy-deep text-white">
        <Image src="/brand/logo-white.png" alt="" width={720} height={720} className="pointer-events-none absolute -right-28 -top-28 w-[520px] opacity-[0.06]" />
        <div className="container-x relative py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading light eyebrow="Nosso jeito" title="Strategy. Execution. Growth." text="Três palavras que resumem como trabalhamos e a ordem em que as coisas acontecem." />
            <div className="reveal hidden text-right md:block">
              <div className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-blue-200">Em português</div>
              <div className="mt-1 font-serif text-2xl">Estratégia. Execução. Crescimento.</div>
            </div>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-[16.6%] right-[16.6%] top-7 hidden h-px bg-gradient-to-r from-royal via-bright to-royal md:block" />
            <div className="grid gap-6 md:grid-cols-3">
              {pilares.map((p, i) => (
                <div key={p.title} className="cell-dark reveal relative border border-white/10 bg-navy-deep/60 p-8 backdrop-blur md:p-10">
                  <span className="big-num">0{i + 1}</span>
                  <div className="icon-badge relative flex h-14 w-14 items-center justify-center rounded-full bg-royal text-white ring-8 ring-navy-deep">
                    <p.icon />
                  </div>
                  <h3 className="mt-7 text-3xl font-extrabold tracking-tight md:text-[2.2rem]">
                    {p.title}<span className="text-bright">.</span>
                  </h3>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">{p.pt}</div>
                  <p className="mt-4 leading-relaxed text-blue-100/85">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 md:grid-cols-[1fr_1.3fr]">
          <div className="md:sticky md:top-32 md:self-start">
            <SectionHeading eyebrow="Como trabalhamos" title="Um método simples, aplicado com rigor." text="Cada projeto e cada mentoria seguem o mesmo caminho. O que muda é a profundidade e o ritmo." />
            <div className="reveal mt-8 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4 md:grid-cols-2">
              {[["1", "objetivo"], ["2", "frentes"], ["3", "pilares"], ["4", "etapas"]].map(([n, l]) => (
                <div key={l} className="cell-hover bg-white p-5">
                  <div className="font-serif text-4xl text-royal">{n}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <ol className="timeline space-y-2">
            {etapas.map((e, i) => (
              <li key={e.title} className="step-hover reveal grid grid-cols-[2.75rem_1fr] gap-5 py-5">
                <span className="timeline-dot">0{i + 1}</span>
                <div className="pt-1.5">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold text-navy">{e.title}</h3>
                    <span className="chip !py-1 text-[0.68rem]">{e.tag}</span>
                  </div>
                  <p className="mt-2 max-w-lg text-muted">{e.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* POR QUE LAPIS LAZULI */}
      <section className="bg-mist">
        <div className="container-x grid items-center gap-12 py-20 md:grid-cols-[0.85fr_1.15fr] md:py-28">
          <div className="frame-offset reveal">
            <div className="img-frame relative aspect-[3/4] overflow-hidden">
              <Image src="/brand/lapis-2.jpg" alt="Pedra de lápis-lazúli" fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" />
            </div>
          </div>
          <div className="reveal">
            <div className="eyebrow eyebrow-line">Por que Lapis Lazuli</div>
            <blockquote className="display mt-5 text-3xl leading-tight text-navy md:text-[2.6rem]">
              “A pedra da clareza dá nome à nossa forma de pensar: enxergar com nitidez, decidir com segurança, agir com propósito.”
            </blockquote>
            <p className="mt-6 leading-relaxed text-muted">
              Por séculos, o lápis-lazúli foi símbolo de sabedoria, verdade e visão. É isso que buscamos entregar a cada cliente. Somos a L&amp;L Estratégia: trabalhamos perto, falamos claro e medimos tudo.
            </p>
            <Link href="/sobre" className="link-arrow mt-7">Conhecer a L&amp;L <Arrow /></Link>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Insights" title="Ideias que usamos no dia a dia com os clientes." />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="card-hover reveal relative flex min-h-[380px] flex-col justify-end overflow-hidden border bg-navy-deep text-white md:col-span-2">
              <div className="img-zoom absolute inset-0">
                <Image src="/brand/lapis-1.jpg" alt="" fill className="object-cover object-[center_30%] opacity-70" sizes="(min-width: 768px) 66vw, 100vw" />
              </div>
              <div className="grad-overlay absolute inset-0" />
              <div className="relative p-8 md:p-10">
                <div className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-blue-200">{insights[0].tag} · Destaque</div>
                <h3 className="display mt-3 max-w-xl text-3xl !text-white md:text-[2.4rem]">{insights[0].title}</h3>
                <p className="mt-3 max-w-xl text-blue-100/85">{insights[0].text}</p>
                <Link href="/contato" className="link-arrow mt-6 !text-white">Conversar sobre isso <Arrow /></Link>
              </div>
            </article>
            <div className="grid gap-6">
              {insights.slice(1).map((i) => (
                <article key={i.title} className="cell-hover reveal flex flex-col border border-line bg-white p-7">
                  <div className="eyebrow">{i.tag}</div>
                  <h3 className="display mt-3 text-2xl text-navy">{i.title}</h3>
                  <p className="mt-3 flex-1 text-muted">{i.text}</p>
                  <Link href="/contato" className="link-arrow mt-5 text-sm">Conversar sobre isso <Arrow /></Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
