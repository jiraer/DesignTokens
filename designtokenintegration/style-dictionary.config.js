import StyleDictionary from "style-dictionary";

const sd = new StyleDictionary({
  // Point directly to your raw JSON file
  source: ["tokens.json"],
  platforms: {
    css: {
      // transformGroup 'css' handles dimensions, colors, and shadows
      transformGroup: "css",
      buildPath: "styles/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
          // This keeps the variable names exactly as they are in your JSON
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
});

// Run the build
await sd.buildAllPlatforms();
