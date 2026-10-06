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
      <div className="container py-12">
        <div
          id="random-row"
          data-supabase-url={process.env.NEXT_PUBLIC_SUPABASE_URL}
          data-supabase-key={process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}
          data-table="APItest"
        />
      </div>
      <Script src="/sketches/randomRow.js" strategy="afterInteractive" />
    </main>
  );
}
