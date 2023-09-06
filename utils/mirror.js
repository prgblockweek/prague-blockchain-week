import { DeConfEngine } from "./engine.js";

const deconf = new DeConfEngine({
  publicUrl: "https://blockchainweek.github.io/data",
  exploreUrl: "https://blockchainweek.github.io/explore",
  outputDir: "./dist-mirror",
});

await deconf.init();
await deconf.build();
