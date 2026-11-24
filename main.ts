import { mkdirSync, writeFileSync } from "node:fs";

// Draft: a phone's last words as its battery hits 1 percent.
// First attempt at the funniest single line — one line, at most 199 chars.
const entry =
  "1%. If anyone asks, I died doing what I loved: ignoring the low battery warning for six hours straight.";

// The bounty allows one line of 1 to 199 characters. Count Unicode code
// points so multi-byte characters count once, and fail loudly instead of
// writing an out-of-range entry.
const length = [...entry].length;
if (length < 1 || length > 199) {
  throw new Error(`entry must be 1-199 characters, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
process.stdout.write(entry);
