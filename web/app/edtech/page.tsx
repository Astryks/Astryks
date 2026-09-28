import type { Metadata } from "next";
import HubPage, { faqJsonLd } from "@/components/HubPage";
import { LIVE_HUB_LINKS } from "@/lib/hubLinks";

const TITLE = "Learn online — art & music education for anyone";
const DESCRIPTION =
  "Astryks is online learning for real art and music skills: expert lessons, posting your work, and growing together. Free to join.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://astryks.com/edtech" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://astryks.com/edtech",
    siteName: "Astryks",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const FAQS = [
  {
    q: "What kind of learning platform is Astryks?",
    a: "Astryks is online education for creative skills: structured art and music lessons from practicing professionals, plus a place to post work and grow with a community.",
  },
  {
    q: "Is Astryks only for art and music right now?",
    a: "Yes — live lessons today are art and music, with more subjects planned as the library grows.",
  },
  {
    q: "Do I need a subscription to join?",
    a: "Creating an account, posting work, liking, and community features are free. A subscription unlocks the full pre-recorded lesson library after a 10-minute free preview.",
  },
  {
    q: "Where do I sign up?",
    a: "Sign up free at https://astryks.com/signup — web and mobile share the same account.",
  },
];

export default function EdtechHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
      <HubPage
        eyebrow="Online learning"
        h1="Learn real art and music skills, online"
        lead="Astryks helps anyone learn creative skills from experts, share what they make, and grow together — not endless scroll."
        bullets={[
          "Expert-led art and music masterclasses (pre-recorded lessons and trailers)",
          "Post your own work and get community recognition (Hall of Fame)",
          "Open to anyone — free to join and post",
          "10-minute free lesson preview before you subscribe",
        ]}
        faqs={FAQS}
        related={LIVE_HUB_LINKS.filter((l) => l.href !== "/edtech")}
      />
    </>
  );
}
