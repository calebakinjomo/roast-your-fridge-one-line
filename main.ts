/**
 * roast-your-fridge-one-line — make.fun "One Line, One Laugh: Roast Your Fridge"
 *
 * Writes exactly one roast line to /output/entry.txt: a single line of at
 * most 200 characters, funny to someone who has never met the appliance.
 *
 * The joke turns on a real, specific fridge detail — the butter compartment
 * in the door, famously the warmest spot in the whole appliance — and pays
 * off with a double meaning in the last few words: butter melts there, and
 * so does the owner's willpower.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

/** The entry: one line, 148 characters, no trailing newline in the file. */
export const ENTRY =
  "The butter compartment in my fridge door is the warmest spot in the whole appliance, which is fitting, because it's where my willpower goes to melt.";

/** Gate the entry the way the sealed scorer does: UTF-8, 1-200 chars, not only whitespace. */
export function validateEntry(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

const OUTPUT_PATH = "/output/entry.txt";

validateEntry(ENTRY);
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_PATH}`);
