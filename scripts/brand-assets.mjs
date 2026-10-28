// Gera variantes do logo (transparente, navy, branco) e a imagem da Mentoria Executiva
// a partir das artes enviadas pelo cliente em public/brand.
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const SRC = "public/brand/logo-circle.jpg";
const BOX = { left: 41, top: 41, width: 418, height: 418 }; // círculo azul dentro do jpg 500x500
const S = BOX.width;
const NAVY = [7, 31, 79];
const ROYAL = [4, 76, 172];

// máscara circular (255 dentro, 0 fora)
const circleMask = await sharp(
  Buffer.from(`<svg width="${S}" height="${S}"><circle cx="${S / 2}" cy="${S / 2}" r="${S / 2 - 1}" fill="#fff"/></svg>`)
).raw().toColourspace("b-w").toBuffer();

// traço do logo: pixels brancos dentro do círculo
const gray = await sharp(SRC).extract(BOX).grayscale().raw().toBuffer();

function build(fill, opaqueBg) {
  const out = Buffer.alloc(S * S * 4);
  for (let i = 0; i < S * S; i++) {
    const inside = circleMask[i] > 128;
    const stroke = Math.max(0, Math.min(255, (gray[i] - 90) * 2)); // limpa o jpg
    if (opaqueBg) {
      const a = inside ? 255 : 0;
      const t = stroke / 255;
      out[i * 4] = Math.round(opaqueBg[0] * (1 - t) + 255 * t);
      out[i * 4 + 1] = Math.round(opaqueBg[1] * (1 - t) + 255 * t);
      out[i * 4 + 2] = Math.round(opaqueBg[2] * (1 - t) + 255 * t);
      out[i * 4 + 3] = a;
    } else {
      out[i * 4] = fill[0]; out[i * 4 + 1] = fill[1]; out[i * 4 + 2] = fill[2];
      out[i * 4 + 3] = inside ? stroke : 0;
    }
  }
  return sharp(out, { raw: { width: S, height: S, channels: 4 } }).png();
}

await build(null, ROYAL).toFile("public/brand/logo-circle.png");        // azul com traço branco, fundo transparente fora do círculo
await build(NAVY).toFile("public/brand/logo-navy.png");                 // traço navy, transparente
await build([255, 255, 255]).toFile("public/brand/logo-white.png");     // traço branco, transparente
await build(null, ROYAL).resize(64, 64).toFile("app/icon.png");
await build(null, ROYAL).resize(180, 180).toFile("app/apple-icon.png");

// ---------- Imagem Mentoria Executiva (mesma linguagem do banner Strategy/Execution/Growth) ----------
const W = 1600, H = 640;
const dots = (x0, y0, cols, rows, gap) => {
  let s = "";
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++)
    s += `<circle cx="${x0 + c * gap}" cy="${y0 + r * gap}" r="2" fill="#2f7bff" opacity="0.55"/>`;
  return s;
};
const waves = () => {
  let s = "";
  for (let i = 0; i < 14; i++) {
    const y = 470 + i * 9;
    s += `<path d="M-50 ${y + 60} C 300 ${y - 90}, 600 ${y + 120}, 1000 ${y - 10} S 1500 ${y + 40}, 1700 ${y - 30}" fill="none" stroke="#3b86ff" stroke-width="1.2" opacity="${0.12 + i * 0.03}"/>`;
  }
  return s;
};
const logoNavy = await sharp("public/brand/logo-navy.png").resize(300, 300).png().toBuffer();
const bg = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#03153f"/><stop offset="0.55" stop-color="#062368"/><stop offset="1" stop-color="#0a3a9a"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.08" cy="0.05" r="0.35"><stop offset="0" stop-color="#1e5fd6" stop-opacity="0.55"/><stop offset="1" stop-color="#1e5fd6" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${waves()}
  ${dots(80, 240, 7, 7, 14)}
  ${dots(1010, 210, 7, 7, 14)}
  <circle cx="1370" cy="320" r="255" fill="#0b3fa0" opacity="0.9"/>
  <circle cx="1370" cy="320" r="242" fill="#f4f7ff"/>
</svg>`);

// texto: renderizado via pango (sharp text)
const line = (text, size, color, weight = "bold") =>
  sharp({ text: { text: `<span foreground="${color}" font_weight="${weight}">${text}</span>`, font: "Arial", width: 900, height: size, rgba: true, dpi: Math.round(size * 72 / 96 * 1.33) } }).png().toBuffer();

const composed = sharp(bg)
  .composite([
    { input: logoNavy, left: 1220, top: 150 },
    { input: Buffer.from(`<svg width="700" height="260">
        <text x="0" y="62" font-family="Arial, Helvetica, sans-serif" font-size="30" letter-spacing="9" fill="#9dbcff" font-weight="600">LAPIS LAZULI ESTRATÉGIA</text>
        <text x="0" y="150" font-family="Arial, Helvetica, sans-serif" font-size="82" font-weight="800" fill="#ffffff">MENTORIA</text>
        <text x="0" y="240" font-family="Arial, Helvetica, sans-serif" font-size="82" font-weight="800" fill="#ffffff">EXECUTIVA<tspan fill="#2f7bff">.</tspan></text>
      </svg>`), left: 150, top: 150 },
    { input: Buffer.from(`<svg width="760" height="120">
        <line x1="0" y1="8" x2="420" y2="8" stroke="#2f7bff" stroke-width="2"/>
        <text x="0" y="52" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#dbe6ff">Liderança com método. Decisão com clareza.</text>
        <text x="0" y="90" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#dbe6ff">Resultado com consistência.</text>
      </svg>`), left: 150, top: 420 },
  ]);
await composed.clone().jpeg({ quality: 92 }).toFile("public/brand/mentoria-executiva.jpg");
await composed.clone().resize(1200, 630, { fit: "cover" }).jpeg({ quality: 88 }).toFile("public/og-mentoria.jpg");
console.log("ok");

// ---------- Variante 3:2 da Mentoria (hero da página interna) ----------
{
  const W2 = 1200, H2 = 800;
  const logoNavy2 = await sharp("public/brand/logo-navy.png").resize(260, 260).png().toBuffer();
  const bg2 = Buffer.from(`
<svg width="${W2}" height="${H2}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#03153f"/><stop offset="0.55" stop-color="#062368"/><stop offset="1" stop-color="#0a3a9a"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.08" cy="0.05" r="0.4"><stop offset="0" stop-color="#1e5fd6" stop-opacity="0.55"/><stop offset="1" stop-color="#1e5fd6" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${W2}" height="${H2}" fill="url(#g)"/>
  <rect width="${W2}" height="${H2}" fill="url(#glow)"/>
  ${(() => { let s = ""; for (let i = 0; i < 14; i++) { const y = 600 + i * 9; s += `<path d="M-50 ${y + 60} C 250 ${y - 90}, 500 ${y + 120}, 800 ${y - 10} S 1100 ${y + 40}, 1300 ${y - 30}" fill="none" stroke="#3b86ff" stroke-width="1.2" opacity="${0.12 + i * 0.03}"/>`; } return s; })()}
  ${dots(70, 90, 7, 7, 14)}
  ${dots(1030, 120, 7, 7, 14)}
  <circle cx="900" cy="560" r="215" fill="#0b3fa0" opacity="0.9"/>
  <circle cx="900" cy="560" r="204" fill="#f4f7ff"/>
</svg>`);
  await sharp(bg2)
    .composite([
      { input: logoNavy2, left: 770, top: 430 },
      { input: Buffer.from(`<svg width="700" height="260">
          <text x="0" y="52" font-family="Arial, Helvetica, sans-serif" font-size="24" letter-spacing="8" fill="#9dbcff" font-weight="600">LAPIS LAZULI ESTRATÉGIA</text>
          <text x="0" y="140" font-family="Arial, Helvetica, sans-serif" font-size="76" font-weight="800" fill="#ffffff">MENTORIA</text>
          <text x="0" y="225" font-family="Arial, Helvetica, sans-serif" font-size="76" font-weight="800" fill="#ffffff">EXECUTIVA<tspan fill="#2f7bff">.</tspan></text>
        </svg>`), left: 90, top: 110 },
      { input: Buffer.from(`<svg width="560" height="110">
          <line x1="0" y1="8" x2="360" y2="8" stroke="#2f7bff" stroke-width="2"/>
          <text x="0" y="50" font-family="Arial, Helvetica, sans-serif" font-size="23" fill="#dbe6ff">Liderança com método.</text>
          <text x="0" y="86" font-family="Arial, Helvetica, sans-serif" font-size="23" fill="#dbe6ff">Decisão com clareza.</text>
        </svg>`), left: 90, top: 380 },
    ])
    .jpeg({ quality: 92 })
    .toFile("public/brand/mentoria-executiva-3x2.jpg");
  console.log("ok 3x2");
}
