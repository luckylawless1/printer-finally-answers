// The Printer Finally Answers — u-mang-the-printer-finally-answers-8fbf0907
// One line, in the office printer's own weary, passive-aggressive voice:
// it has counted every sheet it ever fed, and today it answers back.
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";

const ENTRY =
  "I fed you 41,208 sheets. Zero thank-yous. Today, for the first time ever, I jammed on purpose.";

// The gate: exactly one line of UTF-8 text, 1-240 characters, not only whitespace.
const line = ENTRY.trim();
if (line.length < 1 || line.length > 240) {
  throw new Error(`entry is ${line.length} characters; the gate allows 1-240`);
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}

// Clear only the contents of /output — never the /output root itself.
mkdirSync("/output", { recursive: true });
for (const name of readdirSync("/output")) {
  rmSync(`/output/${name}`, { recursive: true, force: true });
}

// No trailing newline: the file holds exactly the line, nothing else.
writeFileSync("/output/entry.txt", line, "utf8");

// Read it back and confirm the file is exactly the line we meant to write.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== line) {
  throw new Error("verification failed: /output/entry.txt does not match the entry line");
}
console.log(`wrote ${line.length} characters to /output/entry.txt`);
