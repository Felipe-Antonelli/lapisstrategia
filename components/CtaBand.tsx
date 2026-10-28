import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./Icons";

export default function CtaBand({
  title = "Vamos conversar sobre o próximo passo da sua empresa?",
  text = "Uma primeira conversa, sem compromisso, para entender o momento do negócio e onde a estratégia pode destravar resultado.",
  cta = "Agendar conversa",
}: {
  title?: string;
  text?: string;
  cta?: string;
}) {
  return (
    <section className="waves-bg glow-tl relative overflow-hidden bg-navy text-white">
      <div className="dots-light absolute left-8 top-8 h-24 w-24 opacity-60" />
      <Image src="/brand/logo-white.png" alt="" width={520} height={520} className="pointer-events-none absolute -right-20 -top-24 w-[420px] opacity-[0.07]" />
      <div className="container-x relative grid items-center gap-8 py-20 md:grid-cols-[1.5fr_1fr] md:py-24">
        <div className="reveal">
          <div className="eyebrow eyebrow-line !text-blue-200">Próximo passo</div>
          <h2 className="display mt-4 text-3xl md:text-[2.8rem]">{title}</h2>
          <p className="mt-4 max-w-xl text-blue-100/85">{text}</p>
        </div>
        <div className="reveal flex flex-wrap gap-3 md:justify-end">
          <Link href="/contato" className="btn btn-light">
            {cta} <Arrow />
          </Link>
          <Link href="/sobre" className="btn btn-ghost-light">
            Conhecer a L&amp;L
          </Link>
        </div>
      </div>
    </section>
  );
}
