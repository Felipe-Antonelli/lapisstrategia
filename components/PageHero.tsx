import Image from "next/image";
import Link from "next/link";
import { Arrow } from "./Icons";

export default function PageHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  dark = false,
  cta,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt?: string;
  dark?: boolean;
  cta?: { href: string; label: string };
}) {
  return (
    <section className={`relative overflow-hidden ${dark ? "bg-navy-deep text-white" : "bg-mist"}`}>
      <div className="container-x relative grid items-center gap-12 py-16 md:grid-cols-[1fr_1fr] md:py-24">
        <div>
          <div className={`eyebrow eyebrow-line ${dark ? "!text-blue-200" : ""}`}>{eyebrow}</div>
          <h1 className={`display mt-5 text-4xl md:text-[3.6rem] ${dark ? "text-white" : "text-navy"}`}>{title}</h1>
          <p className={`mt-6 max-w-lg text-lg leading-relaxed ${dark ? "text-blue-100/85" : "text-muted"}`}>{text}</p>
          {cta && (
            <Link href={cta.href} className={`btn mt-8 ${dark ? "btn-light" : "btn-primary"}`}>
              {cta.label} <Arrow />
            </Link>
          )}
        </div>
        <div className="frame-offset">
          <div className="img-frame relative aspect-[3/2] overflow-hidden">
            <Image src={image} alt={imageAlt ?? ""} fill className="object-cover" priority sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
