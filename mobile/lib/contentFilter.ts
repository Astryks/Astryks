// Objectionable-content filter (App Store Guideline 1.2: "a method for filtering objectionable
// content"). Deliberately a short, high-confidence list of slurs, sexually explicit terms and
// direct threats/self-harm incitement, matched on whole words only (so "class" or "Scunthorpe"
// never trip it). This is the client-side pre-check for a fast, friendly error; the authoritative
// copy of the same list runs server-side in functions/contentFilter.js, which removes anything
// that slips past (e.g. an edited client), plus image/video moderation in moderatePostMedia.
// Keep this list in sync with web/functions/contentFilter.js.
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

const LEET: Record<string, string> = { "0": "o", "1": "i", "3": "e", "4": "a", "5": "s", "7": "t", "@": "a", "$": "s" };

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[013457@$]/g, (c) => LEET[c])
    .replace(/[^a-z\s]/g, " ")
    .replace(/(.)\1{2,}/g, "$1$1")
    .replace(/\s+/g, " ")
    .trim();
}

const PATTERNS = TERMS.map((t) => new RegExp(`\\b${t.replace(/ /g, "\\s+")}(?:s|es|ed|ing)?\\b`));

// Returns the first matched term, or null when the text looks fine.
export function findObjectionable(text: string | null | undefined): string | null {
  if (!text) return null;
  const n = normalize(text);
  for (let i = 0; i < PATTERNS.length; i++) {
    if (PATTERNS[i].test(n)) return TERMS[i];
  }
  return null;
}

export const OBJECTIONABLE_MESSAGE =
  "That contains language that isn't allowed on Astryks. We have zero tolerance for objectionable content or abusive behavior — please edit it and try again.";
