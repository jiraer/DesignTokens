// css2tokens-studio.mjs
import fs from "fs";
import path from "path";

// Path to your global.css
const inputCssFile = path.resolve(
  "C:/Users/Admin/Desktop/DesignTokens/designtokenintegration/app/globals.css",
);
const outputJsonFile = path.resolve(
  "C:/Users/Admin/Desktop/DesignTokens/designtokenintegration/tokens.json",
);

// Helper: convert oklch(...) to HSL/HEX
function oklchToHex(oklch) {
  try {
    const match = oklch.match(/oklch\(([^)]+)\)/);
    if (!match) return oklch;

    const [l, c, h] = match[1].split(/\s+/).map(Number);
    // Approximate conversion to HSL (Tokens Studio can read HSL)
    const hDeg = h;
    const s = Math.min(c * 100, 100);
    const lPercent = Math.min(l * 100, 100);
    // Convert HSL to hex using simple formula
    const hsl = `hsl(${hDeg.toFixed(0)}, ${s.toFixed(0)}%, ${lPercent.toFixed(0)}%)`;
    return hsl;
  } catch {
    return oklch;
  }
}

// Read CSS
const cssContent = fs.readFileSync(inputCssFile, "utf-8");

// Extract CSS variables
const varRegex = /--([a-z0-9-]+):\s*([^;]+);/gi;
const tokens = {};
let match;

while ((match = varRegex.exec(cssContent)) !== null) {
  const [_, name, value] = match;
  let tokenValue = value.trim();
  let type = "string";

  if (tokenValue.startsWith("oklch")) {
    tokenValue = oklchToHex(tokenValue);
    type = "color";
  } else if (
    tokenValue.endsWith("px") ||
    tokenValue.endsWith("rem") ||
    tokenValue.endsWith("em")
  ) {
    type = "dimension";
  } else if (tokenValue.includes("var(--font")) {
    type = "fontFamily";
  } else if (tokenValue.includes("shadow")) {
    type = "shadow";
  } else if (tokenValue.startsWith("#") || tokenValue.startsWith("hsl")) {
    type = "color";
  }

  tokens[name] = {
    type,
    value: tokenValue,
  };
}

// Write JSON
fs.writeFileSync(outputJsonFile, JSON.stringify(tokens, null, 2), "utf-8");
console.log(`✅ Tokens Studio JSON generated at ${outputJsonFile}`);
