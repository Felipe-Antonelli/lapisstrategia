import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import Ascensao from "@/components/Ascensao";
import { Bulb, Target, Users, Chart, Compass, Shield, Check, Arrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Mentoria Executiva",
  description:
    "Acompanhamento individual para executivos, fundadores e gestores que precisam decidir melhor, liderar times e sustentar resultado.",
  openGraph: { images: ["/og-mentoria.jpg"] },
};

const paraQuem = [
  ["Executivos com mais responsabilidade", "Diretores e C-level que assumiram mais peso e precisam de um interlocutor de confiança."],
  ["Fundadores presos na operação", "Donos que querem sair do dia a dia e liderar pela estratégia."],
  ["Gestores em transição", "Mudança de cargo, de empresa ou de ciclo profissional."],
  ["Quem decide sozinho", "Líderes que sentem que decidem sem contraponto e pagam caro por isso."],
];

const temas = [
  { icon: Compass, title: "Visão e prioridades", text: "Clareza sobre o que importa nos próximos 12 meses e o que deixar de lado." },
  { icon: Target, title: "Decisões críticas", text: "Estrutura para decidir com menos ruído: contratação, investimento, sociedade, produto." },
  { icon: Users, title: "Liderança de times", text: "Delegar de verdade, cobrar com método e formar líderes abaixo de você." },
  { icon: Chart, title: "Gestão por resultado", text: "Metas, indicadores e a rotina semanal que transforma intenção em número." },
  { icon: Shield, title: "Postura executiva", text: "Comunicação com sócios, conselho e time. Presença e consistência." },
  { icon: Bulb, title: "Carreira e propósito", text: "O próximo ciclo profissional, com estratégia e sem ansiedade." },
];

const formato = [
  ["Encontros individuais", "Sessões quinzenais de 60 a 90 minutos, presenciais ou online, com pauta definida.", "Quinzenal"],
  ["Plano de desenvolvimento", "Objetivos claros para o ciclo, com marcos e critérios de sucesso.", "Início do ciclo"],
  ["Sprints de 90 dias", "Cada trimestre tem um foco. Fechamos com balanço e replanejamento.", "Trimestral"],
  ["Apoio entre sessões", "Canal direto para decisões que não podem esperar a próxima reunião.", "Contínuo"],
];

export default function MentoriaPage() {
  return (
    <>
      <PageHero
        dark
        eyebrow="Mentoria Executiva"
        title="Liderança com método. Decisão com clareza."
        text="Um acompanhamento individual, confidencial e orientado a resultado para quem carrega a responsabilidade de decidir."
        cta={{ href: "/contato", label: "Agendar sessão inicial" }}
        image="/brand/mentoria-executiva-3x2.jpg"
        imageAlt="Mentoria Executiva Lapis Lazuli Estratégia"
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Para quem" title="Para quem lidera e não tem com quem pensar alto." />
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {paraQuem.map(([t, d], i) => (
              <div key={t} className="cell-hover reveal relative bg-white p-7">
                <span className="big-num">0{i + 1}</span>
                <div className="icon-badge flex h-10 w-10 items-center justify-center rounded-full bg-mist text-royal"><Check className="h-4 w-4" /></div>
                <h3 className="mt-5 text-lg font-semibold text-navy">{t}</h3>
                <p className="mt-2 text-sm text-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <div className="container-x grid gap-14 md:grid-cols-[1fr_1.2fr]">
          <div className="md:sticky md:top-32 md:self-start">
            <SectionHeading eyebrow="Formato" title="Como funciona a mentoria." text="Ciclos de 6 ou 12 meses, organizados em sprints trimestrais. Sem fórmula pronta: o ritmo se adapta ao seu momento." />
            <div className="reveal mt-8 waves-bg glow-tl relative overflow-hidden bg-navy-deep p-8 text-white">
              <Image src="/brand/logo-white.png" alt="" width={420} height={420} className="pointer-events-none absolute -bottom-16 -right-16 w-[240px] opacity-[0.08]" />
              <div className="eyebrow eyebrow-line !text-blue-200">Compromisso</div>
              <p className="display relative mt-4 text-2xl leading-snug">“Confidencialidade total, pauta sua e um único critério de sucesso: o resultado que você definiu no início do ciclo.”</p>
              <Link href="/contato" className="btn btn-light mt-7">Agendar sessão inicial <Arrow /></Link>
            </div>
          </div>
          <ol className="timeline space-y-2">
            {formato.map(([t, d, tag], i) => (
              <li key={t} className="step-hover reveal grid grid-cols-[2.75rem_1fr] gap-5 py-5">
                <span className="timeline-dot">0{i + 1}</span>
                <div className="pt-1.5">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold text-navy">{t}</h3>
                    <span className="chip !py-1 text-[0.68rem]">{tag}</span>
                  </div>
                  <p className="mt-2 max-w-lg text-muted">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Ascensao />

      <section className="relative overflow-hidden bg-mist py-20 md:py-28">
        <div className="dots-bg absolute inset-y-0 left-0 w-1/3 opacity-40 [mask-image:linear-gradient(to_right,black,transparent)]" />
        <div className="container-x relative">
          <SectionHeading eyebrow="Temas" title="O que trabalhamos." text="A pauta é sua. Estes são os temas que mais aparecem nas mentorias." />
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {temas.map((t, i) => (
              <div key={t.title} className="cell-hover reveal relative bg-white p-7 md:p-8">
                <span className="big-num">0{i + 1}</span>
                <div className="icon-badge flex h-12 w-12 items-center justify-center rounded-full bg-mist text-royal"><t.icon /></div>
                <h3 className="mt-5 text-xl font-semibold text-navy">{t.title}</h3>
                <p className="mt-2 text-muted">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Quer conversar sobre a mentoria?" text="Uma primeira sessão de diagnóstico, sem compromisso, para entender seu momento e definir se faz sentido seguir." cta="Agendar sessão inicial" />
    </>
  );
}
