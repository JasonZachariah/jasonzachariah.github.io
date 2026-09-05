import type { Metadata } from "next";
import BentoGrid from "@/components/BentoGrid";

export const metadata: Metadata = {
  title: "Archive — Jason Zachariah",
  description:
    "Visual archive of work by Jason Zachariah, a product designer focused on accessible educational technology, design systems, and UX for edtech products.",
  alternates: { canonical: "https://jasonzachariah.github.io/archive" },
};

const archiveMedia = [
  "/images/archive/markhamfairgif.gif",
  "/images/archive/Somethingforeverythingif.gif",
  "/images/archive/swap gif.gif",
  "/images/archive/SkulltoHuman.gif",
  "/images/archive/saylchair.gif",
  "/images/archive/oldaniamtionslogo.gif",
  "/images/archive/p5jsgif.gif",
  "/images/archive/p5cooltriangles.gif",
  "/images/archive/mySketch (4).gif",
  "/images/archive/Blender Animated copy.mp4",
];

export default function Archive() {
  return (
    <main id="main-content" tabIndex={-1}>
      <div className="container py-12 space-y-8">
        <div>
          <h1>Archive</h1>
          <p>Old scraps from the past.</p>
        </div>
        <BentoGrid images={archiveMedia} />
      </div>
    </main>
  );
}
