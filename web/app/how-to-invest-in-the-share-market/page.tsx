import type { Metadata } from "next";
import HubPage, { faqJsonLd } from "@/components/HubPage";
import { LIVE_HUB_LINKS, COMING_SOON_HUB_LINKS } from "@/lib/hubLinks";

const TITLE = "How to invest in the share market — kids edtech coming soon";
const DESCRIPTION =
  "Share-market lessons for kids are coming soon on Astryks (AU interest page). Not a live course — no share-market classes to buy today. Learn art & music now.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://astryks.com/how-to-invest-in-the-share-market" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://astryks.com/how-to-invest-in-the-share-market",
    siteName: "Astryks",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const FAQS = [
  {
    q: "Does Astryks teach how to invest in the share market?",
    a: "Not yet. A share-market / investing course for kids is coming soon and is not available. Astryks does not offer live share-market lessons today.",
  },
  {
    q: "Can parents buy a share-market course here?",
    a: "No. There is nothing to purchase for share-market or investing education on Astryks at this time.",
  },
  {
    q: "Is this financial or investment advice?",
    a: "No. This is an educational interest page about a planned future subject. It is not advice about shares, ASX investing, or any financial product.",
  },
  {
    q: "What should kids do on Astryks meanwhile?",
    a: "Learn art and music with expert lessons and post their creative work. Sign up at https://astryks.com/signup.",
  },
];

export default function ShareMarketHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
      <HubPage
        comingSoon
        comingSoonNote="Astryks does not offer a live share-market course yet — coming soon only. You cannot buy or watch investing-in-shares lessons here today. Kids can learn art and music on Astryks right now."
        eyebrow="Coming soon · Australia"
        h1="How to invest in the share market — coming soon for kids (not live)"
        lead="Curious about teaching kids the basics of shares someday? We’re interested too — but this subject is not in the lesson library yet."
        bullets={[
          "No ASX / share-market course available to watch or buy today",
          "Not financial advice — roadmap interest page only",
          "Live today: art and music edtech for kids and families",
          "Free signup while new subjects are planned",
        ]}
        faqs={FAQS}
        related={[
          ...LIVE_HUB_LINKS.slice(0, 4),
          ...COMING_SOON_HUB_LINKS.filter((l) => l.href !== "/how-to-invest-in-the-share-market"),
        ]}
      />
    </>
  );
}
