// The Robot Vacuum's Best Excuse
// make.fun competition: u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214
// One line, at most 140 characters: the funniest excuse a robot vacuum
// could offer for missing a spot. Written deterministically to /output/entry.txt.

import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "I didn't miss that crumb. I left it there so you'd still feel needed around here.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = path.join(outputDir, "entry.txt");

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, ENTRY + "\n", "utf8");
