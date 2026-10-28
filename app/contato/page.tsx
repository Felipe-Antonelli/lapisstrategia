import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a L&L Estratégia sobre consultoria empresarial ou mentoria executiva.",
};

export default function ContatoPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="dots-bg absolute inset-y-0 left-0 w-1/3 opacity-40 [mask-image:linear-gradient(to_right,black,transparent)]" />
      <div className="container-x relative grid gap-14 py-16 md:grid-cols-[1fr_1.3fr] md:py-24">
        <div>
          <div className="eyebrow eyebrow-line">Contato</div>
          <h1 className="display mt-5 text-4xl text-navy md:text-[3.4rem]">Vamos <span className="italic-accent">conversar</span>.</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Conte o momento da empresa ou da sua carreira. Respondemos em até um dia útil com uma proposta de conversa inicial.
          </p>
          <div className="reveal mt-10 grid gap-px border border-line bg-line">
            <a className="cell-hover flex items-center justify-between bg-white p-5" href={`mailto:${site.email}`}>
              <span>
                <span className="eyebrow">E-mail</span>
                <span className="mt-1 block text-lg font-semibold text-navy">{site.email}</span>
              </span>
              <Arrow className="h-5 w-5 text-royal" />
            </a>
            <div className="cell-hover flex items-center justify-between bg-white p-5">
              <span>
                <span className="eyebrow">Redes</span>
                <span className="mt-1 flex gap-4 text-lg font-semibold text-navy">
                  <a className="hover:text-royal" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                  {site.instagram && <a className="hover:text-royal" href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>}
                </span>
              </span>
            </div>
          </div>
          <div className="reveal waves-bg glow-tl relative mt-6 overflow-hidden bg-navy-deep p-6 text-white">
            <Image src="/brand/logo-white.png" alt="" width={300} height={300} className="pointer-events-none absolute -bottom-10 -right-10 w-[160px] opacity-[0.1]" />
            <div className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-blue-200">{site.tagline}</div>
            <p className="display relative mt-2 text-xl">Uma primeira conversa de 30 minutos, sem compromisso.</p>
          </div>
        </div>
        <div className="card-hover reveal border bg-white p-6 shadow-[0_30px_60px_-40px_rgba(3,21,63,0.4)] md:p-10">
          <div className="eyebrow eyebrow-line">Formulário</div>
          <h2 className="display mt-3 mb-8 text-2xl text-navy">Conte o seu momento</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
