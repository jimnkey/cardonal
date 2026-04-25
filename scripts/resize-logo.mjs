import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const imagesDir = path.join(publicDir, "images");

const source = path.join(imagesDir, "cc_logo_orig.png");

const sizes = [
  { name: "logo.png",             width: 200,  height: 200,  fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } },
  { name: "logo-sm.png",          width: 100,  height: 100,  fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } },
  { name: "favicon.png",          width: 32,   height: 32,   fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } },
  { name: "apple-touch-icon.png", width: 180,  height: 180,  fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } },
  { name: "og-logo.png",          width: 1200, height: 630,  fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } },
];

console.log(`Reading source: ${source}\n`);

for (const s of sizes) {
  const output = path.join(s.name === "favicon.png" ? publicDir : imagesDir, s.name);
  await sharp(source)
    .resize(s.width, s.height, { fit: s.fit, background: s.background })
    .png()
    .toFile(output);
  console.log(`✓ ${s.name}  →  ${s.width}x${s.height}  (${output})`);
}

console.log("\nDone! All logo variants generated.");
