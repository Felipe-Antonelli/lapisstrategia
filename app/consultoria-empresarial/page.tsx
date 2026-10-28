import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { Chart, Compass, Gears, Shield, Target, Users, Check, Arrow } from "@/components/Icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consultoria Empresarial",
  description:
    "Planejamento estratégico, gestão, finanças e comercial. Diagnóstico honesto, plano priorizado e acompanhamento da execução para empresas que querem crescer com consistência.",
  openGraph: { images: ["/brand/consultoria-icon.jpg"] },
};

const frentes = [
  { icon: Compass, title: "Planejamento estratégico", text: "Direção, prioridades e metas de 1 a 3 anos, desdobradas em planos de ação com dono e prazo." },
  { icon: Gears, title: "Gestão e processos", text: "Rotinas de gestão, indicadores e processos críticos desenhados para a empresa rodar sem depender do dono." },
  { icon: Chart, title: "Finanças e crescimento", text: "Margem, precificação, fluxo de caixa e modelo de crescimento que o negócio sustenta." },
  { icon: Target, title: "Comercial e go-to-market", text: "Posicionamento, estrutura comercial, funil e metas de vendas alinhadas com a capacidade de entrega." },
  { icon: Users, title: "Pessoas e organização", text: "Estrutura, papéis, metas por área e o ritual de gestão que faz o time executar." },
  { icon: Shield, title: "Governança", text: "Decisões, fóruns e regras claras para empresas familiares, sociedades e negócios em transição." },
];

const paraQuem = [
  ["Cresceu, a gestão não acompanhou", "Empresas de pequeno e médio porte que sentem que o jeito de gerir ficou pequeno para o tamanho do negócio."],
  ["Negócio familiar em transição", "Profissionalização, sucessão ou entrada de nova geração na liderança."],
  ["Plano que precisa sair do papel", "Empresas que precisam de um plano estratégico executável, não de um documento bonito."],
  ["Quer um olhar de fora", "Lideranças que querem um olhar externo, direto e sem interesse em vender horas."],
];

const etapas = [
  ["Diagnóstico", "Entrevistas com a liderança, análise de números e leitura do mercado. Em poucas semanas, um retrato honesto.", "Semanas 1 a 4"],
  ["Estratégia", "Workshop com a liderança para definir escolhas, prioridades e metas. Saímos com um plano de uma página.", "Workshop"],
  ["Execução", "Desdobramos o plano em ações e implantamos a rotina de gestão. Acompanhamos mês a mês.", "Rotina mensal"],
  ["Crescimento", "Medimos, ajustamos e consolidamos. O que funcionou vira processo da casa.", "Ciclo contínuo"],
];

const entregaveis = [
  "Diagnóstico completo do negócio (mercado, finanças, operação, comercial e pessoas)",
  "Plano estratégico com prioridades, metas e indicadores",
  "Planos de ação por área com responsáveis e prazos",
  "Rotina de gestão implantada (reuniões, painéis e rituais)",
  "Acompanhamento mensal da execução com a liderança",
];

export default function ConsultoriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Consultoria Empresarial"
        title="Estratégia, execução e crescimento para a sua empresa."
        text="Não entregamos apresentação. Entregamos um plano priorizado, uma rotina de gestão que funciona e acompanhamento até o resultado aparecer."
        image="/brand/consultoria-icon.jpg"
        imageAlt="Consultoria Empresarial: estratégia, execução e crescimento"
        cta={{ href: "/contato", label: "Agendar diagnóstico" }}
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Para quem" title="Feita para quem precisa de decisão, não de diagnóstico eterno." />
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

      <section className="relative overflow-hidden bg-mist py-20 md:py-28">
        <div className="dots-bg absolute inset-y-0 right-0 w-1/3 opacity-40 [mask-image:linear-gradient(to_left,black,transparent)]" />
        <div className="container-x relative">
          <SectionHeading eyebrow="Frentes de atuação" title="Onde atuamos." text="Cada projeto combina as frentes que o momento da empresa pede. Nunca todas ao mesmo tempo." />
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {frentes.map((f, i) => (
              <div key={f.title} className="cell-hover reveal relative bg-white p-7 md:p-8">
                <span className="big-num">0{i + 1}</span>
                <div className="icon-badge flex h-12 w-12 items-center justify-center rounded-full bg-mist text-royal"><f.icon /></div>
                <h3 className="mt-5 text-xl font-semibold text-navy">{f.title}</h3>
                <p className="mt-2 text-muted">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 md:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading eyebrow="Como funciona" title="Do diagnóstico ao resultado, em quatro passos." />
            <ol className="timeline mt-10 space-y-2">
              {etapas.map(([t, d, tag], i) => (
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
          <div className="reveal md:sticky md:top-32 md:self-start">
            <div className="waves-bg glow-tl relative overflow-hidden bg-navy-deep p-8 text-white md:p-10">
              <Image src="/brand/logo-white.png" alt="" width={420} height={420} className="pointer-events-none absolute -bottom-16 -right-16 w-[260px] opacity-[0.08]" />
              <div className="eyebrow eyebrow-line !text-blue-200">O que você recebe</div>
              <h3 className="display mt-4 text-3xl">Entregáveis</h3>
              <ul className="relative mt-6 space-y-3">
                {entregaveis.map((e) => (
                  <li key={e} className="check-row flex gap-3 border-b border-white/10 pb-3 text-blue-100/90 hover:!text-white">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-bright" />
                    {e}
                  </li>
                ))}
              </ul>
              <Link href="/contato" className="btn btn-light mt-8">Agendar diagnóstico <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Quer saber se a consultoria faz sentido para a sua empresa?" text="Uma conversa inicial de 30 minutos. Você conta o momento do negócio, nós dizemos com franqueza se podemos ajudar." />
    </>
  );
}
