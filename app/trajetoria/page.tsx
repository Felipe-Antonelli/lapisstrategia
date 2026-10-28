import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { Arrow, Chart, Compass, Gears, Target, Users } from "@/components/Icons";
import { founder, site } from "@/data/site";

export const metadata: Metadata = {
  title: `${founder.shortName} | Trajetória`,
  description:
    "James Willian de Paula é executivo, consultor empresarial e mentor, com mais de 15 anos de experiência em estratégia, gestão e transformação organizacional.",
};

// Texto enviado pelo James (resumo executivo). O último parágrafo chegou cortado
// em "gestão por indicador…": completar quando ele mandar o texto inteiro.
const competencias = [
  { icon: Compass, title: "Estratégia empresarial" },
  { icon: Chart, title: "Performance financeira e comercial" },
  { icon: Gears, title: "Excelência operacional" },
  { icon: Target, title: "Gestão por indicadores" },
];

const portas = [
  {
    eyebrow: "Consultoria Empresarial",
    title: "Quero melhorar os resultados da minha empresa",
    text: "Estratégia, indicadores, processos e rotina de gestão para transformar planejamento em resultado.",
    cta: "Conhecer a consultoria",
    href: "/consultoria-empresarial",
  },
  {
    eyebrow: "Mentoria Executiva",
    title: "Sou CEO e quero elevar minha performance",
    text: "Um parceiro de pensamento para decisões difíceis, prioridades claras e liderança de alto desempenho.",
    cta: "Conhecer a mentoria",
    href: "/mentoria-executiva",
  },
  {
    eyebrow: "Programa Ascensão C-Level",
    title: "Quero me preparar para a liderança",
    text: "Seis semanas de diagnóstico, plano de ação e reposicionamento para acelerar sua jornada rumo ao C-Level.",
    cta: "Conhecer o programa",
    href: "/mentoria-executiva#ascensao",
  },
];

const conexoes = ["Planejamento", "Pessoas", "Processos", "Resultados"];

export default function TrajetoriaPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep text-white">
        <div className="dots-bg absolute inset-y-0 right-0 w-1/2 opacity-20 [mask-image:linear-gradient(to_left,black,transparent)]" />
        <div className="container-x relative grid items-center gap-12 py-16 md:grid-cols-[1.25fr_1fr] md:py-24">
          <div>
            <div className="eyebrow eyebrow-line !text-blue-200">Trajetória</div>
            {/* No celular a foto fica ao lado do nome; no desktop, na coluna da direita. */}
            <div className="relative float-right ml-4 mt-6 w-28 sm:w-36 md:hidden">
              <div className="aspect-[4/5] overflow-hidden ring-1 ring-white/20">
                <Image src={founder.photo} alt={founder.name} width={288} height={360} priority className="h-full w-full object-cover object-top" />
              </div>
            </div>
            <h1 className="display mt-6 text-[2.6rem] leading-[1.04] md:text-[4rem]">{founder.name}</h1>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">{founder.role}</p>
            <p className="display clear-both mt-8 max-w-xl text-2xl leading-snug text-blue-50 md:clear-none md:text-[1.9rem]">
              Estratégia, liderança e execução para transformar potencial em resultado.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={founder.linkedin} target="_blank" rel="noreferrer" className="btn btn-light">
                Ver perfil no LinkedIn <Arrow />
              </a>
              <Link href="/contato" className="btn btn-ghost-light">
                Falar com o James
              </Link>
            </div>
          </div>
          <div className="frame-offset hidden w-full md:block md:max-w-md md:justify-self-end">
            <div className="img-frame relative aspect-[930/1087] w-full overflow-hidden">
              <Image src={founder.photo} alt={founder.name} fill priority className="object-cover" sizes="(min-width: 768px) 40vw, 0px" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 md:grid-cols-[1fr_2fr]">
          <div className="reveal md:sticky md:top-32 md:self-start">
            <div className="eyebrow eyebrow-line">Resumo executivo</div>
            <div className="mt-6 border border-line">
              <div className="cell-hover bg-white p-6">
                <div className="font-serif text-6xl leading-none text-royal">15+</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">anos de experiência em estratégia, gestão e transformação organizacional</div>
              </div>
            </div>
            <div className="mt-6 flex flex-col items-start gap-3">
              <a href={founder.linkedin} target="_blank" rel="noreferrer" className="link-arrow">
                linkedin.com/in/jamesdepaula <Arrow />
              </a>
              <a href={founder.instagram} target="_blank" rel="noreferrer" className="link-arrow">
                @jameswilliandepaula <Arrow />
              </a>
            </div>
          </div>
          <div className="reveal space-y-6 text-lg leading-relaxed text-muted">
            <p className="display text-2xl leading-snug text-navy md:text-[2rem]">
              James Willian de Paula é executivo, consultor empresarial e mentor, com mais de 15 anos de experiência em estratégia, gestão e transformação organizacional, atuando na conexão entre planejamento, pessoas, processos e resultados.
            </p>
            <p>
              Ao longo de sua trajetória, desenvolveu uma abordagem orientada a transformar estratégia em execução: identificar as alavancas que realmente movem o negócio, estruturar indicadores e processos, melhorar a tomada de decisão e direcionar pessoas e recursos para aquilo que gera resultado.
            </p>
            <p>
              Sua atuação combina estratégia empresarial, performance financeira e comercial, excelência operacional e gestão por indicadores.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-x">
          <SectionHeading eyebrow="Por onde começar" title="Qual é o seu momento?" text="Uma mesma trajetória, três caminhos diferentes. Escolha o que mais se parece com você." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {portas.map((p, i) => (
              <Link key={p.href} href={p.href} className="card-hover reveal group flex flex-col border bg-white p-8 md:p-9">
                <span className="font-serif text-5xl leading-none text-royal/25">0{i + 1}</span>
                <div className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-royal">{p.eyebrow}</div>
                <h3 className="display mt-2 text-2xl text-navy md:text-[1.7rem]">&ldquo;{p.title}&rdquo;</h3>
                <p className="mt-4 flex-1 leading-relaxed text-muted">{p.text}</p>
                <span className="link-arrow mt-7">{p.cta} <Arrow /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-mist py-20 md:py-28">
        <div className="dots-bg absolute inset-y-0 right-0 w-1/3 opacity-40 [mask-image:linear-gradient(to_left,black,transparent)]" />
        <div className="container-x relative">
          <SectionHeading eyebrow="Atuação" title="Onde estratégia vira execução." text="Quatro frentes que se combinam em cada projeto de consultoria e em cada mentoria." />
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {competencias.map((c, i) => (
              <div key={c.title} className="cell-hover reveal relative bg-white p-7 md:p-8">
                <span className="big-num">0{i + 1}</span>
                <div className="icon-badge flex h-12 w-12 items-center justify-center rounded-full bg-mist text-royal"><c.icon /></div>
                <h3 className="mt-5 text-xl font-semibold text-navy">{c.title}</h3>
              </div>
            ))}
          </div>

          <div className="reveal mt-12 grid items-center gap-6 border border-line bg-white p-8 md:grid-cols-[auto_1fr] md:p-10">
            <div className="flex items-center gap-3 text-royal">
              <Users />
              <span className="eyebrow">A conexão entre</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-serif text-2xl text-navy md:text-3xl">
              {conexoes.map((c, i) => (
                <span key={c} className="flex items-center gap-5">
                  {c}
                  {i < conexoes.length - 1 && <span className="h-1.5 w-1.5 rounded-full bg-bright" />}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="reveal">
            <div className="eyebrow eyebrow-line">Hoje</div>
            <h2 className="display mt-4 text-3xl text-navy md:text-[2.6rem]">À frente da {site.fullName}.</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              James lidera a consultoria empresarial e conduz pessoalmente a Mentoria Executiva e o Programa Ascensão C-Level.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
              <Link href="/consultoria-empresarial" className="link-arrow">Consultoria Empresarial <Arrow /></Link>
              <Link href="/mentoria-executiva" className="link-arrow">Mentoria Executiva <Arrow /></Link>
              <Link href="/mentoria-executiva#ascensao" className="link-arrow">Programa Ascensão C-Level <Arrow /></Link>
            </div>
          </div>
          <a href={founder.linkedin} target="_blank" rel="noreferrer" className="card-hover reveal block border bg-white p-8">
            <div className="eyebrow">LinkedIn</div>
            <h3 className="display mt-3 text-2xl text-navy">Acompanhe a trajetória completa no perfil do James.</h3>
            <span className="link-arrow mt-6">Abrir perfil <Arrow /></span>
          </a>
        </div>
      </section>

      <CtaBand title="Quer conversar com o James?" text="Uma primeira conversa, sem compromisso, para entender o seu momento ou o da sua empresa." />
    </>
  );
}
