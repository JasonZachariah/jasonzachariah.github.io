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
        dangerouslySetInnerHTML={{ __html: "{\n      \"@context\": \"https://schema.org\",\n      \"@type\": \"Person\",\n      \"name\": \"Jason Zachariah\",\n      \"url\": \"https://jasonzachariah.github.io/\",\n      \"jobTitle\": \"Product Designer\",\n      \"description\": \"Product designer with 3+ years in design and coding education. Bridges design and development to build accessible educational technology, design systems, and thoughtful experiences for emergent tech including AI.\",\n      \"email\": \"mailto:jasontzachariah@gmail.com\",\n      \"sameAs\": [\n        \"https://www.linkedin.com/in/jasontzachariah/\",\n        \"https://www.instagram.com/jasonz.design/\"\n      ],\n      \"worksFor\": {\n        \"@type\": \"Organization\",\n        \"name\": \"Ministry of Education\"\n      },\n      \"knowsAbout\": [\n        \"Product Design\",\n        \"UX/UI Design\",\n        \"Design Systems\",\n        \"Educational Technology\",\n        \"Accessibility\",\n        \"Front-end Development\"\n      ]\n    }" }}
      />
      <main id="main-content" tabIndex={-1}>
        <div className="container">
            <div id="panel-intro" className="mb-12 mt-4">
                <h1>Jason Zachariah is a product designer looking to bridge the gap between designers and developers
                    <img src="/jzlogdark.png" alt="" className="hero-inline-logo" width="48" height="48"
                        decoding="async" /></h1>
            </div>

<Card title="Wiz Parser" description="Creating a unified design system for faster development times." tags={["DESIGN SYSTEMS", "UX DESIGN"]} image="/images/wizparser/header.mp4" link="/wizParser" />
<Card title="DESNbook" description="An all-in-one dashboard for design students to plan their degrees." tags={["CASE STUDY", "USER RESEARCH"]} image="/images/handbook/addcoursesfilter.mp4" link="/handbook" />
<Card title="WizEdOS" description="Refining brand identity and optimizing website content layout." tags={["WEB DESIGN", "BRANDING"]} image="/images/wizedos/wizedosheader.png" link="/wizedos" />
<Card title="Octobud" description="A learning device made to meet the needs of students and teachers." tags={["USER RESEARCH", "PROTOTYPING"]} image="/images/octobud/octobudscancard.mp4" link="/octobud" />
<Card title="Reforma" description="A dynamic Chrome extension for web accessibility." tags={["PRODUCT DESIGN", "ACCESSIBILITY DESIGN"]} image="/images/reforma/reformaBird.png" link="/reforma" />

        </div>

    </main>
    </>
  );
}
