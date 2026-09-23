import type { Metadata } from "next";
import HubPage, { faqJsonLd } from "@/components/HubPage";
import { LIVE_HUB_LINKS, COMING_SOON_HUB_LINKS } from "@/lib/hubLinks";

const TITLE = "Finance for kids — coming soon on Astryks";
const DESCRIPTION =
  "Finance education for kids is coming soon on Astryks — not a live course yet. Kids can learn art and music on Astryks today.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://astryks.com/finance-for-kids" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://astryks.com/finance-for-kids",
    siteName: "Astryks",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const FAQS = [
  {
    q: "Does Astryks offer finance courses for kids today?",
    a: "No. Finance for kids is coming soon and is not available to buy or watch yet.",
  },
  {
    q: "What is live on Astryks instead?",
    a: "Real art and music skills — expert lesson videos, free community posting, and family-friendly creative learning.",
  },
  {
    q: "Is this financial advice?",
    a: "No. This page is only an interest / roadmap hub. Astryks does not provide financial advice, and there is no finance course live yet.",
  },
  {
    q: "How do we use Astryks now?",
    a: "Create a free account at https://astryks.com/signup and explore art and music.",
  },
];

export default function FinanceForKidsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
      <HubPage
        comingSoon
        comingSoonNote="Finance lessons for kids are not available on Astryks yet. Nothing to purchase for this subject. Art and music are the live subjects today."
        eyebrow="Coming soon"
        h1="Finance for kids — coming soon (not a live course)"
        lead="Families ask about kids’ finance education. We may add it later. Right now Astryks is edtech for art and music — not money lessons."
        bullets={[
          "No finance or money course to unlock in the app today",
          "Art and music lessons from professionals are live",
          "Free to join, post creative work, and try a lesson preview",
          "Check back here when finance content ships",
        ]}
        faqs={FAQS}
        related={[
          ...LIVE_HUB_LINKS.slice(0, 4),
          ...COMING_SOON_HUB_LINKS.filter((l) => l.href !== "/finance-for-kids"),
        ]}
      />
    </>
  );
}
