import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Astryks — Learn Music & Art from Real Working Professionals",
  description:
    "Learn real skills from real working professionals. 10 minutes of free lesson preview, no card required. Post your own work and grow with the community, always free.",
  alternates: { canonical: "https://astryks.com" },
};

export default function Page() {
  return <HomeClient />;
}
