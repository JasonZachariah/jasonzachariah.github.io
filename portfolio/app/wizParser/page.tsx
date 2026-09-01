import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WizEdOS — Jason Zachariah",
  description: "WizEdOS case study by Jason Zachariah: UX/UI redesign of the WizEdOS educational platform, including user flows and interface design.",
  alternates: { canonical: "https://jasonzachariah.github.io/wizedos" },
  openGraph: {
    title: "WizEdOS — Jason Zachariah",
    description: "WizEdOS case study by Jason Zachariah: UX/UI redesign of the WizEdOS educational platform, including user flows and interface design.",
    url: "https://jasonzachariah.github.io/wizedos",
    siteName: "Jason Zachariah",
    images: ["https://jasonzachariah.github.io/images/home/openGraph.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WizEdOS — Jason Zachariah",
    description: "WizEdOS case study by Jason Zachariah: UX/UI redesign of the WizEdOS educational platform, including user flows and interface design.",
    images: ["https://jasonzachariah.github.io/images/home/openGraph.png"],
  },
};

export default function Page() {
    return (
        <div>
            <h1>WizParser</h1>
        </div>
    );
}