import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const distDir = path.join(__dirname, "dist");
const file404 = path.join(__dirname, "404.html");
const dist404 = path.join(distDir, "404.html");
const noJekyll = path.join(distDir, ".nojekyll");

try {
    // Criar dist se não existir
    if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir, { recursive: true });
    }

    // Copiar 404.html
    if (fs.existsSync(file404) && !fs.existsSync(dist404)) {
        fs.copyFileSync(file404, dist404);
        console.log("✅ Copied 404.html to dist/");
    }

    // Criar .nojekyll
    if (!fs.existsSync(noJekyll)) {
        fs.writeFileSync(noJekyll, "");
        console.log("✅ Created .nojekyll in dist/");
    }

    console.log("✅ GitHub Pages configuration complete");
} catch (error) {
    console.error("❌ Post-build error:", error.message);
    process.exit(1);
}
