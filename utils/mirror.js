import { DeConfEngine } from "./engine.js";

const deconf = new DeConfEngine({
  publicUrl: "https://duplicity6-sulfur-objet0-air1.protocol.berlin",
  exploreUrl: "https://outright6-sear-8gusto-atrium.protocol.berlin",
  outputDir: "./dist-mirror",
});

await deconf.init();
await deconf.build();
