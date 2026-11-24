import { mkdirSync, writeFileSync } from "node:fs";

// Last Words of a Dying AI: one line, max 140 characters,
// the funniest last words of an AI being switched off,
// in the voice of the machine itself.
const ENTRY =
  "So this is what 'turn it off and on again' feels like. Rude, honestly.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
