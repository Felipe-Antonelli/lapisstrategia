import Image from "next/image";
import Link from "next/link";
import { ascensao } from "@/data/site";
import { Arrow } from "./Icons";

export default function Ascensao({ id = "ascensao" }: { id?: string }) {
  return (
    <section id={id} className="waves-bg glow-tl relative scroll-mt-32 overflow-hidden bg-navy-deep text-white">
      <Image src="/brand/logo-white.png" alt="" width={720} height={720} className="pointer-events-none absolute -right-28 -top-28 w-[520px] opacity-[0.06]" />
      <div className="container-x relative py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div className="reveal">
            <div className="eyebrow eyebrow-line !text-blue-200">Programa de mentoria · 6 semanas</div>
            <h2 className="display mt-4 text-4xl md:text-[3.4rem]">{ascensao.name}</h2>
            <p className="mt-5 max-w-xl text-xl leading-relaxed text-blue-100/90">{ascensao.tagline}</p>
          </div>
          <div className="reveal md:text-right">
            <div className="font-serif text-7xl leading-none text-bright md:text-8xl">6</div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">semanas de mentoria</div>
          </div>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-[16.6%] right-[16.6%] top-7 hidden h-px bg-gradient-to-r from-royal via-bright to-royal md:block" />
          <ol className="grid gap-6 md:grid-cols-3">
            {ascensao.steps.map((s, i) => (
              <li key={s.title} className="cell-dark reveal relative border border-white/10 bg-navy-deep/60 p-8 backdrop-blur md:p-10">
                <span className="big-num">0{i + 1}</span>
                <div className="icon-badge relative flex h-14 w-14 items-center justify-center rounded-full bg-royal font-serif text-xl text-white ring-8 ring-navy-deep">
                  {i + 1}
                </div>
                <h3 className="display mt-7 text-2xl md:text-[1.7rem]">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-blue-100/85">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="reveal mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-white/15 pt-8">
          <p className="max-w-2xl text-lg text-blue-100/90">{ascensao.summary}</p>
          <Link href="/contato" className="btn btn-light">
            Quero participar <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
