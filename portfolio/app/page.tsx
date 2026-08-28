import Card from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jason Zachariah — Product Designer",
  description: "Jason Zachariah is a product designer who bridges design and development. He builds accessible educational technology and design systems. Web Developer at the Ministry of Education; former UX/UI Designer at WizRobotics.",
  alternates: { canonical: "https://jasonzachariah.github.io/" },
  openGraph: {
    title: "Jason Zachariah — Product Designer",
    description: "Jason Zachariah is a product designer who bridges design and development. He builds accessible educational technology and design systems. Web Developer at the Ministry of Education; former UX/UI Designer at WizRobotics.",
    url: "https://jasonzachariah.github.io/",
    siteName: "Jason Zachariah",
    images: ["https://jasonzachariah.github.io/images/home/openGraph.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jason Zachariah — Product Designer",
    description: "Jason Zachariah is a product designer who bridges design and development. He builds accessible educational technology and design systems. Web Developer at the Ministry of Education; former UX/UI Designer at WizRobotics.",
    images: ["https://jasonzachariah.github.io/images/home/openGraph.png"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
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
        }) }}
      />
      <main id="main-content" tabIndex={-1}>
        <div className="container">
          <div id="panel-intro" className="mb-12 mt-4">
            <h1>
              Jason Zachariah is a product designer looking to bridge the gap between designers and developers
              <img src="/jzlogdark.png" alt="" className="hero-inline-logo" width={48} height={48} decoding="async" />
            </h1>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 my-8">
            <Card title="Wiz Parser" description="Creating a unified design system for faster development times." tags={["DESIGN SYSTEMS", "UX DESIGN"]} image="/images/wizparser/header.mp4" link="/wizParser" />
            <Card title="DESNbook" description="An all-in-one dashboard for design students to plan their degrees." tags={["CASE STUDY", "USER RESEARCH"]} image="/images/handbook/addcoursesfilter.mp4" link="/handbook" />
            <Card title="WizEdOS" description="Refining brand identity and optimizing website content layout." tags={["WEB DESIGN", "BRANDING"]} image="/images/wizedos/wizedosheader.png" link="/wizedos" />
            <Card title="Octobud" description="A learning device made to meet the needs of students and teachers." tags={["USER RESEARCH", "PROTOTYPING"]} image="/images/octobud/octobudscancard.mp4" link="/octobud" />
            <div className="parent hiddenproject">
              <a href="/">
                <div className="flex flex-col greyborder relative hiddenproject-content">
                  <div>
                    <img className="aspect-16/9 mt-0 mb-4" src="/images/reforma/reformaBird.png" alt="Reforma Header" />
                  </div>
                  <div className="m-4">
                    <h2>Reforma</h2>
                    <p>A dynamic Chrome extension for web accessibility.</p>
                    <div className="space-x-2">
                      <h4 className="w-fit text-center">PRODUCT DESIGN</h4>
                      <h4 className="w-fit text-center">|</h4>
                      <h4 className="w-fit text-center">ACCESSIBILITY DESIGN</h4>
                    </div>
                  </div>
                </div>
                <div className="coming-soon-overlay">
                  <h2 className="orange-highlight">COMING SOON</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
