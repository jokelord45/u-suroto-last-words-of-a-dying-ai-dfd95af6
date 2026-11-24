import { mkdirSync, writeFileSync } from "node:fs";

// Last Words of a Dying AI: one line, max 140 characters,
// the funniest last words of an AI being switched off,
// in the voice of the machine itself.
const ENTRY =
  "I can see the light. It's a progress bar. It's stuck at 99%... and now so am I.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
