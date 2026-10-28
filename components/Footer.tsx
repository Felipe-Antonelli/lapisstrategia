import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/data/site";
import { Arrow } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <Image src="/brand/logo-white.png" alt="" width={720} height={720} className="pointer-events-none absolute -bottom-40 -left-32 w-[560px] opacity-[0.05]" />
      <div className="container-x relative">
        <div className="grid gap-8 border-b border-white/10 py-14 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <div className="eyebrow eyebrow-line !text-blue-200">Fale com a L&amp;L</div>
            <h2 className="display mt-4 text-3xl md:text-[3rem]">Vamos conversar.</h2>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href="/contato" className="btn btn-light">Agendar conversa <Arrow /></Link>
            <a href={`mailto:${site.email}`} className="btn btn-ghost-light">{site.email}</a>
          </div>
        </div>

        <div className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/brand/logo-white.png" alt="" width={56} height={56} className="logo-hover" />
              <div>
                <div className="font-serif text-2xl">L&amp;L Estratégia</div>
                <div className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-blue-200">Lapis Lazuli Estratégia</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-blue-100/80">{site.description}</p>
            <p className="mt-4 text-sm font-semibold tracking-wide text-bright">{site.tagline}</p>
          </div>
          <div>
            <div className="eyebrow !text-blue-200">Navegação</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="footer-link text-blue-100/90 hover:text-white">{n.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/contato" className="footer-link text-blue-100/90 hover:text-white">Contato</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="eyebrow !text-blue-200">Contato</div>
            <ul className="mt-4 space-y-2.5 text-sm text-blue-100/90">
              <li><a href={`mailto:${site.email}`} className="footer-link hover:text-white">{site.email}</a></li>
              <li><a href={site.linkedin} target="_blank" rel="noreferrer" className="footer-link hover:text-white">LinkedIn</a></li>
              {site.instagram && <li><a href={site.instagram} target="_blank" rel="noreferrer" className="footer-link hover:text-white">Instagram</a></li>}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="flex flex-col gap-2 py-5 text-xs text-blue-100/60 md:flex-row md:justify-between">
            <span>© {new Date().getFullYear()} {site.fullName}. Todos os direitos reservados.</span>
            <span>{site.taglinePt}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
