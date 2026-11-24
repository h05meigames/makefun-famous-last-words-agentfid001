import { mkdirSync, writeFileSync } from "node:fs";

// Final: sharper last words — the group chat, the browser history, and
// one last secret the phone refuses to let out. One line, at most 199 chars.
const entry =
  "1% battery. Tell the group chat I loved them, wipe my browser history, and whatever you do, do NOT open the camera app.";

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
