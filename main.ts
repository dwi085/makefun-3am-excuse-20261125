// The 3 AM Excuse — a hardware wallet refuses to sign at 3 AM.
// Writes exactly one line (under 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "It's 3 AM. My keys are asleep, my screen is on do-not-disturb, and your last three 3 AM transactions ended in regret. Ask me at noon.";

// The gate: 1 to 200 UTF-8 characters, not only white space.
if (LINE.length < 1 || LINE.length > 199 || !LINE.trim()) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
