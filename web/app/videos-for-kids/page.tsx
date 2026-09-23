import type { Metadata } from "next";
import HubPage, { faqJsonLd } from "@/components/HubPage";
import { LIVE_HUB_LINKS } from "@/lib/hubLinks";

const TITLE = "Learning videos for kids — art & music lessons";
const DESCRIPTION =
  "Expert art and music lesson videos and trailers for kids on Astryks — masterclass-style previews, not a YouTube clone. Free to join.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://astryks.com/videos-for-kids" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://astryks.com/videos-for-kids",
    siteName: "Astryks",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const FAQS = [
  {
    q: "What kinds of videos does Astryks have for kids?",
    a: "Astryks offers expert-led art and music lesson videos and short trailer/preview videos — masterclass-style teaching, not an open video feed or YouTube clone.",
  },
  {
    q: "Can kids watch before subscribing?",
    a: "Yes. There is a 10-minute free preview across real lessons, no card required. Trailers help you see the style of teaching.",
  },
  {
    q: "Are the videos made for kids and families?",
    a: "Yes. Content is built for kids learning creative skills, with a community where families can post work safely alongside lessons.",
  },
  {
    q: "How do I watch?",
    a: "Sign up at https://astryks.com/signup, open Learn after signing in, and start with the free preview.",
  },
];

export default function VideosForKidsHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
      <HubPage
        eyebrow="Kids learning videos"
        h1="Videos for kids who want to learn art and music — not endless scroll"
        lead="Short trailers and full expert lessons on Astryks teach kids real creative skills. This is structured learning video, not a random video site."
        bullets={[
          "Masterclass-style art and music lessons from professionals",
          "Trailer / preview videos so you can see teaching before you commit",
          "10-minute free preview of real lessons — no card required",
          "After watching, kids can make something and post it on Astryks",
        ]}
        faqs={FAQS}
        related={LIVE_HUB_LINKS.filter((l) => l.href !== "/videos-for-kids")}
      />
    </>
  );
}
