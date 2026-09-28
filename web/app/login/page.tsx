import type { Metadata } from "next";
import LoginClient from "./LoginClient";

export const metadata: Metadata = {
  title: "Log In",
  description: "Log in to your Astryks account.",
  alternates: { canonical: "https://astryks.com/login" },
};

export default function Page() {
  return <LoginClient />;
}
