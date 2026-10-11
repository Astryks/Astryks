// Authoritative server-side copy of the objectionable-content filter (App Store Guideline 1.2:
// "a method for filtering objectionable content"). The same list also runs client-side in
// mobile/lib/contentFilter.ts for a fast, friendly pre-check — keep the two lists in sync. Whole-
// word matching only, on a normalized copy of the text (leetspeak folded, repeated letters
// collapsed), so ordinary words never trip it.
const TERMS = [
  // slurs
  "nigger", "nigga", "faggot", "kike", "spic", "chink", "gook", "wetback", "tranny", "coon",
  "retard",
  // sexually explicit
  "porn", "pornography", "blowjob", "handjob", "cumshot", "gangbang", "dildo", "child porn",
  "cp links", "nudes for sale",
  // threats / self-harm incitement
  "kill yourself", "kys", "go die", "i will kill you", "ill kill you", "rape you",
];

const LEET = { 0: "o", 1: "i", 3: "e", 4: "a", 5: "s", 7: "t", "@": "a", $: "s" };

function normalize(text) {
  return String(text)
    .toLowerCase()
    .replace(/[013457@$]/g, (c) => LEET[c])
    .replace(/[^a-z\s]/g, " ")
    .replace(/(.)\1{2,}/g, "$1$1")
    .replace(/\s+/g, " ")
    .trim();
}

const PATTERNS = TERMS.map((t) => new RegExp(`\\b${t.replace(/ /g, "\\s+")}(?:s|es|ed|ing)?\\b`));

// Returns the first matched term, or null when the text looks fine.
function findObjectionable(text) {
  if (!text) return null;
  const n = normalize(text);
  for (let i = 0; i < PATTERNS.length; i++) {
    if (PATTERNS[i].test(n)) return TERMS[i];
  }
  return null;
}

module.exports = { findObjectionable };
