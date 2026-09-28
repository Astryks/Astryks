import type { Metadata } from "next";
import SupportClient from "./SupportClient";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with your Astryks account, subscription, or lesson progress — contact support or browse frequently asked questions.",
  alternates: { canonical: "https://astryks.com/support" },
};

export default function Page() {
  return <SupportClient />;
}
