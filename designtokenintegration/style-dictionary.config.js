import StyleDictionary from "style-dictionary";
import fs from "fs";

// --------------------
// Load tokens
// --------------------
const raw = JSON.parse(
  fs.readFileSync("./tokens.json", "utf8")
);

// Keep Paletta
const theme = raw["Paletta/Mode 1"];

// Convert to DTCG format
const tokens = {
  color: {}
};

for (const key in theme) {
  tokens.color[key] = {
    value: theme[key]["$value"],
    type: theme[key]["$type"]
  };
}

// Write temporary clean file
fs.writeFileSync(
  "./tokens.cleaned.json",
  JSON.stringify(tokens, null, 2)
);

// --------------------
// Create Style Dictionary
// --------------------
const sd = new StyleDictionary({
  source: ["tokens.cleaned.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "styles/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables"
        }
      ]
    }
  }
});

// Build
await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
