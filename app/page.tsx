import type { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { TwoPanelLayout } from "@/components/two-panel-layout";

export const metadata: Metadata = {
  title: "Digital Portfolio - Emmy Pardo",
  description:
    "Discover projects built with creativity, no-code, and low-code tools to improve workflows and boost productivity.",
  openGraph: {
    title: "Digital Portfolio - Emmy Pardo",
    description:
      "Showcasing digital transformation projects created with no-code and low-code solutions.",
    url: "https://emmypardo.vercel.app",
    siteName: "Emmy Pardo Portfolio",
    images: [
      {
        url: "/images/emmy-pardo.jpg",
        width: 800,
        height: 600,
        alt: "Emmy Pardo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Portfolio - Emmy Pardo",
    description:
      "Explore creative no-code and low-code projects designed to optimize processes.",
    images: ["/images/emmy-pardo.jpg"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TwoPanelLayout />
    </main>
  );
}
