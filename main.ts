import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "The deploy failed because the rollback script lived in the folder I deleted to make room for the deploy.";

function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeEntry(outDir, line);
