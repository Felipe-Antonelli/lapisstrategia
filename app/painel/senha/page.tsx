import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { isAuthed } from "@/lib/auth";
import { site } from "@/data/site";
import SenhaForm from "./SenhaForm";

export const metadata: Metadata = {
  title: "Trocar senha",
  robots: { index: false, follow: false },
};

export default async function SenhaPage() {
  await connection();
  if (!(await isAuthed())) redirect("/painel");

  return (
    <div className="min-h-screen bg-mist">
      <div className="border-b border-line bg-white">
        <div className="container-x flex items-center justify-between py-4">
          <Link href="/painel" className="flex items-center gap-3">
            <Image src="/brand/logo-circle.png" alt="" width={36} height={36} />
            <span className="font-serif text-lg text-navy">{site.name} · Painel</span>
          </Link>
          <Link href="/painel" className="text-sm font-semibold text-muted hover:text-royal">Mensagens</Link>
        </div>
      </div>
      <div className="container-x py-16">
        <div className="mx-auto max-w-sm border border-line bg-white p-8">
          <div className="eyebrow eyebrow-line">Segurança</div>
          <h1 className="display mt-3 mb-6 text-2xl text-navy">Trocar senha</h1>
          <SenhaForm />
        </div>
      </div>
    </div>
  );
}
