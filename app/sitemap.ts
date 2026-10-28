import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/consultoria-empresarial", "/mentoria-executiva", "/trajetoria", "/sobre", "/contato"].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(),
  }));
}
