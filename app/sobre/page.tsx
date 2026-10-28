import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";
import { Bulb, Shield, Target, Users } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Sobre",
  description: "A L&L Estratégia (Lapis Lazuli Estratégia) une consultoria empresarial e mentoria executiva com um método simples: estratégia, execução e crescimento.",
};

const valores = [
  { icon: Bulb, t: "Clareza", d: "Falamos a língua do dono e do executivo. Sem jargão, sem slide de 80 páginas." },
  { icon: Users, t: "Proximidade", d: "Trabalhamos dentro da empresa, com a liderança, e não de fora olhando relatório." },
  { icon: Target, t: "Rigor", d: "Número antes de opinião. Meta antes de plano. Rotina antes de resultado." },
  { icon: Shield, t: "Responsabilidade", d: "Só assumimos o que acreditamos entregar. E entregamos o que assumimos." },
];

export default function SobrePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-mist">
        <div className="dots-bg absolute inset-y-0 right-0 w-1/2 opacity-40 [mask-image:linear-gradient(to_left,black,transparent)]" />
        <div className="container-x relative grid items-center gap-12 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
          <div>
            <div className="eyebrow eyebrow-line">Sobre a L&amp;L</div>
            <h1 className="display mt-5 text-4xl text-navy md:text-[3.6rem]">Estratégia com os pés no chão e os olhos no <span className="italic-accent">resultado</span>.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              A {site.fullName} nasceu para preencher um espaço entre a grande consultoria, cara e distante, e o consultor de plantão, que não acompanha a execução. Estamos no meio: método de grande casa, atuação próxima e compromisso com o número.
            </p>
          </div>
          <div className="frame-offset">
            <div className="img-frame relative aspect-[3/4] max-h-[520px] overflow-hidden">
              <Image src="/brand/lapis-2.jpg" alt="Pedra de lápis-lazúli" fill className="object-cover" priority sizes="(min-width: 768px) 40vw, 100vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 md:grid-cols-2">
          <SectionHeading eyebrow="O nome" title="Por que Lapis Lazuli." />
          <div className="reveal space-y-5 text-lg leading-relaxed text-muted">
            <p>
              O lápis-lazúli é a pedra azul profunda que, por milênios, foi associada à sabedoria, à verdade e à visão clara. Faraós, artistas do Renascimento e navegadores a usaram como símbolo de conhecimento e direção.
            </p>
            <p>
              É exatamente o que uma empresa precisa quando decide o próximo passo: enxergar com nitidez, escolher com segurança e seguir com consistência. Esse é o nosso trabalho.
            </p>
            <p className="display text-2xl text-navy">{site.tagline}</p>
            <p><Link href="/trajetoria" className="link-arrow">Conheça a trajetória do James de Paula</Link></p>
          </div>
        </div>
      </section>

      <section className="waves-bg glow-tl relative overflow-hidden bg-navy-deep py-20 text-white md:py-28">
        <Image src="/brand/logo-white.png" alt="" width={720} height={720} className="pointer-events-none absolute -right-28 -top-28 w-[520px] opacity-[0.06]" />
        <div className="container-x relative">
          <SectionHeading light eyebrow="Como trabalhamos" title="Quatro compromissos com cada cliente." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((v, i) => (
              <div key={v.t} className="cell-dark reveal relative border border-white/10 bg-navy-deep/60 p-8 backdrop-blur">
                <span className="big-num">0{i + 1}</span>
                <div className="icon-badge relative flex h-12 w-12 items-center justify-center rounded-full bg-royal text-white"><v.icon /></div>
                <h3 className="display mt-6 text-2xl">{v.t}</h3>
                <p className="mt-3 text-blue-100/85">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="frame-offset reveal">
            <div className="img-frame relative aspect-[1600/639] w-full overflow-hidden shadow-[0_30px_60px_-40px_rgba(3,21,63,0.6)]">
              <Image src="/brand/banner-strategy.jpg" alt="Strategy. Execution. Growth." fill className="object-cover" sizes="100vw" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
