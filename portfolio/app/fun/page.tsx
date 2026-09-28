import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Fun | Jason Zachariah",
  description: "Generative sketches and experiments by Jason Zachariah.",
  alternates: { canonical: "https://jasonzachariah.github.io/fun" },
};

export default function FunPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <div className="container py-12 space-y-8">
        <div>
          <h1>Fun</h1>
          <p>Speak to drive the sketch. Press S to export.</p>
        </div>
        <div
          id="fun-sketch-copy"
          className="fun-sketch flex w-full justify-center overflow-hidden"
          aria-label="Speech-driven Riso sketch"
        />
      </div>
      <Script src="/sketches/funSketchCopy.js" strategy="afterInteractive" />
    </main>
  );
}
