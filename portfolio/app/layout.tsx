import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const overpass = Overpass({
  subsets: ["latin"],
  variable: "--font-overpass",
  display: "swap",
});

const ppSansRounded = localFont({
  src: [
    {
      path: "../public/fonts/PPPangramSansRounded-NarrowSemibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/PPPangramSansRounded-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/PPPangramSansRounded-Bold.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-pp-sans-rounded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jason Zachariah",
  icons: {
    icon: "/jzlogodark-favicon.svg",
  },
  description:
    "Jason Zachariah is a product designer who bridges design and development. He builds accessible educational technology and design systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${overpass.variable} ${ppSansRounded.variable}`}>
      <body className={overpass.className} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
