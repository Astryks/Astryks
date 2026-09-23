import type { Metadata } from "next";
import HubPage, { faqJsonLd } from "@/components/HubPage";
import { LIVE_HUB_LINKS, COMING_SOON_HUB_LINKS } from "@/lib/hubLinks";

const TITLE = "Investing for kids — coming soon on Astryks";
const DESCRIPTION =
  "Investing lessons for kids are coming soon on Astryks — not available yet. Today kids can learn real art and music skills and post their work.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://astryks.com/investing-for-kids" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://astryks.com/investing-for-kids",
    siteName: "Astryks",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const FAQS = [
  {
    q: "Can I buy investing lessons for kids on Astryks today?",
    a: "No. Investing for kids is coming soon and is not a live course. You cannot purchase or watch investing lessons on Astryks yet.",
  },
  {
    q: "What can kids learn on Astryks right now?",
    a: "Live subjects today are art and music — expert lessons, trailers, and a community where kids post their own work.",
  },
  {
    q: "Will Astryks teach investing later?",
    a: "It is planned as a future subject. This page exists so families interested in kids’ investing education know it is on the roadmap — not available yet.",
  },
  {
    q: "Where should we start today?",
    a: "Sign up free at https://astryks.com/signup and start with art or music while investing content is in the works.",
  },
];

export default function InvestingForKidsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
      <HubPage
        comingSoon
        comingSoonNote="There is no live investing course to buy or watch on Astryks yet. When it ships, we will update this page. Meanwhile, art and music lessons are available today."
        eyebrow="Coming soon"
        h1="Investing for kids — coming soon (not available yet)"
        lead="We want age-appropriate investing education for families on Astryks someday. It is not live. Today Astryks teaches art and music."
        bullets={[
          "Art and music masterclasses are live now",
          "Kids can post creative work for free",
          "Investing lessons: planned only — do not expect them in the app today",
          "Same free signup — start creating while we build new subjects",
        ]}
        faqs={FAQS}
        related={[
          ...LIVE_HUB_LINKS.slice(0, 4),
          ...COMING_SOON_HUB_LINKS.filter((l) => l.href !== "/investing-for-kids"),
        ]}
      />
    </>
  );
}
