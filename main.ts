// Make the AI Judge Laugh: Developer Excuses — r3 (final round)
// Writes one funny single-line developer excuse to entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The excuse is a fixed, deterministic string: no randomness, no network,
// no input files. One sentence, 88 characters, punch lands on the last word.
const ENTRY =
  "The hotfix worked in staging because staging has no users, no data, and no consequences.";

if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.includes("\n") ||
  ENTRY.includes("\r") ||
  ENTRY.trim().length === 0
) {
  throw new Error(
    "Invalid ENTRY: must be 1-200 characters, exactly one line, and not only whitespace.",
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${resolve(outDir, "entry.txt")} (repo: ${repoRoot})`);
