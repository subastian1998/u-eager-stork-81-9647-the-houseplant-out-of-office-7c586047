import { writeFileSync, mkdirSync } from "node:fs";

const entry =
  "Out of office — I haven't been watered since March. I'm a fern, not a miracle. Back when someone remembers I exist.";

// Gate: the entry must be 1–120 characters of non-whitespace UTF-8 text.
if (entry.length < 1 || entry.length > 120 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} chars, must be 1-120`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
