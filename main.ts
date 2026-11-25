// Fridge Roast: One Line, Biggest Laugh
// Writes a single original roast of a smart fridge (at most 200 characters)
// to /output/entry.txt for the make.fun judge.
//
// The joke's beats: the fridge's "smart" firmware update breaks the one job
// that matters (making ice) while it keeps doing the useless one (texting
// about the milk). No midnight-snack crack — the update is the roast.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My smart fridge installed a firmware update, rebooted for twenty minutes, and forgot how to make ice — but it still texts me when the milk expires, like a weatherman in a flood.";

const MAX_CHARS = 200;

if (ROAST.length < 1 || ROAST.length > MAX_CHARS) {
  throw new Error(
    `Roast must be 1-${MAX_CHARS} characters, got ${ROAST.length}.`
  );
}
if (ROAST.trim().length === 0) {
  throw new Error("Roast must not be only whitespace.");
}
if (/[\r\n]/.test(ROAST)) {
  throw new Error("Roast must be a single line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST + "\n", "utf8");
console.log(ROAST);
console.log(`(${ROAST.length} characters)`);
