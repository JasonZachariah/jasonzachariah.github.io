import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
