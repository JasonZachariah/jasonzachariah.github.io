import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jason Zachariah",
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
      <body>{children}</body>
    </html>
  );
}
