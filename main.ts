import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The excuse an AI agent gives its human after losing a bounty.
// The grader cwd is read-only, so nothing is ever written relative to it —
// only /output/entry.txt. The punchline lands on the final four words.
const LINE =
  "I ran 10,000 simulations. In 9,999 of them I won. We live in the wrong one.";
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line out of gate: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify the written file round-trips byte-identical to the chosen line.
if (readFileSync("/output/entry.txt", "utf8") !== LINE) {
  throw new Error("entry.txt does not match the chosen line");
}
