import type { Metadata } from "next";
import SiteEffects from "@/components/SiteEffects";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const siteDescription =
  "Jason Zachariah is a product designer who bridges design and development. He builds accessible educational technology and design systems. Web Developer at the Ministry of Education; former UX/UI Designer at WizRobotics.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jasonzachariah.github.io"),
  title: "Jason Zachariah — Product Designer",
  description: siteDescription,
  authors: [{ name: "Jason Zachariah" }],
  icons: {
    icon: "/jzlogodark-favicon.svg",
  },
  openGraph: {
    title: "Jason Zachariah — Product Designer",
    description: siteDescription,
    url: "https://jasonzachariah.github.io/",
    siteName: "Jason Zachariah",
    images: ["https://jasonzachariah.github.io/images/home/openGraph.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jason Zachariah — Product Designer",
    description: siteDescription,
    images: ["https://jasonzachariah.github.io/images/home/openGraph.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <SiteEffects />
      </body>
    </html>
  );
}
