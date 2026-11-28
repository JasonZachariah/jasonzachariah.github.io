import Card from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jason Zachariah Product Designer",
  description: "Jason Zachariah is a product designer who bridges design and development. He builds accessible educational technology and design systems. Web Developer at the Ministry of Education; former UX/UI Designer at WizRobotics.",
  alternates: { canonical: "https://jasonzachariah.github.io/" },
  openGraph: {
    title: "Jason Zachariah Product Designer",
    description: "Jason Zachariah is a product designer who bridges design and development. He builds accessible educational technology and design systems. Web Developer at the Ministry of Education; former UX/UI Designer at WizRobotics.",
    url: "https://jasonzachariah.github.io/",
    siteName: "Jason Zachariah",
    images: ["https://jasonzachariah.github.io/images/home/openGraph.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jason Zachariah Product Designer",
    description: "Jason Zachariah is a product designer who bridges design and development. He builds accessible educational technology and design systems. Web Developer at the Ministry of Education; former UX/UI Designer at WizRobotics.",
    images: ["https://jasonzachariah.github.io/images/home/openGraph.png"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Jason Zachariah",
            url: "https://jasonzachariah.github.io/",
            jobTitle: "Product Designer",
            description: "Product designer with 3+ years in design and coding education. Bridges design and development to build accessible educational technology, design systems, and thoughtful experiences for emergent tech including AI.",
            email: "mailto:jasontzachariah@gmail.com",
            sameAs: [
              "https://www.linkedin.com/in/jasontzachariah/",
              "https://www.instagram.com/jasonz.design/",
            ],
            worksFor: { "@type": "Organization", name: "Ministry of Education" },
            knowsAbout: [
              "Product Design",
              "UX/UI Design",
              "Design Systems",
              "Educational Technology",
              "Accessibility",
              "Front-end Development",
            ],
          })
        }}
      />
      <main id="main-content" tabIndex={-1}>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
          <div id="panel-intro" className="mb-12 mt-4 flex flex-col gap-4 md:sticky md:top-4 md:self-start">
            <p className="header">Previous Web Developer @ <a href="https://www.ontario.ca/page/ministry-education" className="pagelink" target="_blank" rel="noopener noreferrer">Ministry of Education</a></p>
            <h1>
              Jason Zachariah is a product designer looking to bridge the gap between designers and developers
              <img src="/jzlogdark.png" alt="" className="hero-inline-logo" width={48} height={48} decoding="async" />
            </h1>
            <div className="flex  gap-4">
              <p className="header">Socials:</p>
              <a href="https://github.com/JasonZachariah" target="_blank" rel="noopener noreferrer" className="pagelink">GitHub</a>
              <a href="https://www.instagram.com/jasonz.design/" target="_blank" rel="noopener noreferrer" className="pagelink">Instagram</a>
              <a href="https://www.linkedin.com/in/jasontzachariah/" target="_blank" rel="noopener noreferrer" className="pagelink">LinkedIn</a>
            </div>
            <div className="pt-4">
              <p className="header">My Philosophy</p>
              <p>
                Working as a product designer and after-school coding teacher for <b>3 years</b> now, I have watched
                how technologies have evolved over time and how they impact the next generation. With the rise of
                emergent technology, including AI, we often move too quickly without considering long-term effects.
                My approach is not to dissuade these technologies from existing, but to design thoughtful ways for
                them to fit into everyday life.
              </p>
              <div className="work-exp pt-4">
                <p className="header">My Experience</p>
                <div className="work-exp-row header-border">
                  <h3>Web Developer @ Ministry of Education</h3>
                  <h4 className="work-exp-date">May 2026–Present</h4>
                </div>
                <div className="work-exp-row header-border">
                  <h3>UX/UI Designer @ WizRobotics</h3>
                  <h4 className="work-exp-date">Jul 2025–May 2026</h4>
                </div>
                <div className="work-exp-row header-border">
                  <h3>Graphic Designer @ York ESports</h3>
                  <h4 className="work-exp-date">Sep 2024–Jun 2025</h4>
                </div>
                <div className="work-exp-row header-border">
                  <h3>Design Intern @ NVISION</h3>
                  <h4 className="work-exp-date">Jan 2022–Jun 2022</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-1 gap-4 my-8">
               <Card title="Creating a universal acronym directory for the Ministry of Education" description="" tags={["MINISTRY OF EDUCATION", "2026"]} image="/images/rollodex/rollodex_header.png" link="/rollodex" />
            <Card title="A unified design system for faster development times for AI" description="" tags={["WIZROBOTICS", "2025"]} image="/images/wizparser/Header.gif" link="/wizParser" />
            <Card title="An all-in-one dashboard for design students to plan their degrees." description="" tags={["PERSONAL PROJECT", "2025"]} image="/images/handbook/addcoursesfilter.mp4" link="/handbook" />
            {/* <Card title="Refining brand identity to optimize website content layout." description="" tags={["WIZROBOTICS", "2025"]} image="/images/wizedos/wizedosheader.png" link="/wizedos" /> */}
          </div>
        </div>
      </main>
    </>
  )
}
