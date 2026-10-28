"use client";
import { usePathname } from "next/navigation";

// Cabeçalho e rodapé do site não aparecem no painel.
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return usePathname().startsWith("/painel") ? null : children;
}
