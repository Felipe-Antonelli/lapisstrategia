"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-navy-deep text-white md:block">
        <div className="container-x flex h-9 items-center justify-between text-[0.7rem] font-semibold uppercase tracking-[0.2em]">
          <span className="text-blue-200">{site.tagline}</span>
          <div className="flex gap-6 text-blue-100/80">
            <a href={`mailto:${site.email}`} className="normal-case tracking-normal hover:text-white">{site.email}</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className={`border-b bg-white/95 backdrop-blur transition-shadow ${scrolled ? "border-line shadow-[0_10px_30px_-20px_rgba(7,31,79,0.35)]" : "border-transparent"}`}>
        <div className="container-x flex h-[76px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label={site.fullName}>
            <Image src="/brand/logo-circle.png" alt="" width={44} height={44} priority className="logo-hover" />
            <span className="leading-tight">
              <span className="block font-serif text-[1.35rem] tracking-tight text-navy">L&amp;L Estratégia</span>
              <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-royal">Lapis Lazuli</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                data-active={path === n.href}
                className={`nav-link text-[0.95rem] font-medium transition hover:text-royal ${path === n.href ? "text-royal" : "text-ink"}`}
              >
                {n.label}
              </Link>
            ))}
            <Link href="/contato" className="btn btn-primary !px-5 !py-2.5">
              Fale conosco
            </Link>
          </nav>

          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className={`h-0.5 w-6 bg-navy transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-navy transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-navy transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {open && (
          <div className="border-t border-line bg-white md:hidden">
            <div className="container-x flex flex-col py-3">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className="border-b border-line py-3.5 text-base font-medium">
                  {n.label}
                </Link>
              ))}
              <Link href="/contato" className="btn btn-primary mt-4">
                Fale conosco
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
