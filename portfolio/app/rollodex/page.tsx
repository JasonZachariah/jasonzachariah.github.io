import ImageDetails from "@/components/ImageDetails";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rollodex | Jason Zachariah",
  description:
    "Rollodex case study by Jason Zachariah: a universal acronym directory for the Ministry of Education and Ontario Public Service.",
  alternates: { canonical: "https://jasonzachariah.github.io/rollodex" },
  openGraph: {
    title: "Rollodex | Jason Zachariah",
    description:
      "Rollodex case study by Jason Zachariah: a universal acronym directory for the Ministry of Education and Ontario Public Service.",
    url: "https://jasonzachariah.github.io/rollodex",
    siteName: "Jason Zachariah",
    images: ["https://jasonzachariah.github.io/images/home/openGraph.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rollodex | Jason Zachariah",
    description:
      "Rollodex case study by Jason Zachariah: a universal acronym directory for the Ministry of Education and Ontario Public Service.",
    images: ["https://jasonzachariah.github.io/images/home/openGraph.png"],
  },
};

export default function Page() {
  return (
    <>
      <main id="main-content" tabIndex={-1} className="transition-main">
        <section className="container project-with-sidebar">
          <Sidebar anchorLinks={["Context", "Solution", "Testing", "Impact"]} />

          <div id="project-content" className="project-content space-y-8 mt-16 w-full">
            <h1>Rollodex</h1>
            <h2>A universal acronym directory for the Ministry of Education</h2>

            <div className="child flex justify-center">
              <img
                className="image2 greyborder full"
                src="/images/rollodex/rollodex_header.png"
                alt="Rollodex header"
              />
            </div>

            <div className="flex justify-between flex-col md:flex-row full">
              <div>
                <p>
                  <b>Project Type:</b>
                </p>
                <p>Client Work (Ministry of Education)</p>
              </div>
              <div>
                <p>
                  <b>Timeline:</b>
                </p>
                <p>9 weeks (June 2026 - August 2026)</p>
              </div>
              <div>
                <p>
                  <b>Tools & Skills:</b>
                </p>
                <p>User Research</p>
                <p>Design Engineering</p>
                <p>Supabase</p>
                <p>React+Vite</p>
              </div>
              <div>
                <p>
                  <b>Team:</b>
                </p>
                <p>Web Designer (My role)</p>
              </div>
            </div>

            <div className="space-y-4" id="context">
              <p className="header">Context</p>
              <div className="space-y-4 content-width">
                <h3>
The  Ontario Public Service (OPS) is full of acronyms, but
                  there was no single place to find information about them
                </h3>
                <p>
                  When I joined the Ministry of Education, one of the first things I noticed was how much of the
                  language was based in acronyms. Whether in emails, live webpages or documents, making sure acronyms were used properly was a major concer in the OPS, and a large painpoint for new and experienced staff alike.
                </p>
                <p>
                  While there existed makeup solutions, none of the provided resoucres fully help solve the problem, and ended up causing more problems than they solved. Therfore, I decided to design and build a new solution.
                </p>
                <img
                  className="greyborder my-4 full"
                  src="/images/rollodex/pastversions.png"
                  alt="Three past solutions for acronym management: an internal list, a vibe-coded tracker and a PDF glossary"
                />
                <p>
                  The real gap was not the lack of a list. It was the lack of a source of truth that was easy to search,
                  secure, and could be maintained by the people who actually use the acronyms.
                </p>
              </div>
            </div>

            <div className="space-y-4" id="solution">
              <p className="header">Solution</p>
              <div className="space-y-4 content-width">
                <h3>
                  Rollodex is a single, searchable directory that standardizes how acronyms are updated and used across the Ministry of Education
                </h3>
              
              </div>
              <ImageDetails
                title="Find any acronym in seconds"
                description="Instead of scrolling a dense list, staff can search by acronym, full name, tags or description. Results update instantly and can be sorted, so the answer is usually the first card on the screen."
                image="/images/rollodex/rollodex_filter.gif"
              />
              <ImageDetails
                title="Narrow results to what matters"
                description="Filters for ministry or division, language, and cloud or local acronyms cut hundreds of results down to a handful. Bookmarks let people keep the acronyms they use every day one click away."
                image="/images/rollodex/rollodex_options.gif"
              />
              <ImageDetails
                title="Context, not just a full name"
                description="Each acronym has its own page with a definition, division, language and tags. Staff can copy the full name straight into a document, or save the entry as a PDF, replacing the old glossary that was always out of date."
                image="/images/rollodex/rollodex_download.gif"
              />
            </div>

            <div className="space-y-4" id="testing">
              <p className="header">Testing</p>
              <div className="space-y-4 content-width">
                <h3>Focusing on the Ministry of Education, not the entire OPS</h3>
                <p>
                  Since I was working with the Ministry of Education, I was able to focus on the needs of the Ministry of Health, rather than the entire OPS. This allowed me to focus on the needs of the users, and to design a product that is specific to the Ministry of Education. This however came with the tradeoff that any acronyms that were not specific to the Ministry of Education were not included in the product, for example an acronym that was used in the Ontario Public Service, but not the Ministry of Education. This was a tradeoff that I was willing to make, as I felt that it was more important to focus on the needs of the Ministry of Education for a beta launch, before expanding to the entire OPS
                </p>
              </div>
              <div className="space-y-4 content-width">
                <h3>Testing inside real workdays, not in a Figma file</h3>
                <p>
                  Due to the time constraints of the project being less than 10 weeks, I was unable to conduct traditional user testing. Instead, I deployed test versions of Rollodex with Cloudflare Pages, in order for users to test the product in their daily routines. Each design variant had its own test link, which let colleagues use Rollodex in their daily routines while I fixed issues and refined the design between rounds.
                  This allowed me to get real feedback from users about the product, and to refine the design based on their needs. This did come with its own challenges, as I had to ensure that the test versions were stable and working enough to allow users to use the product in their daily routines.
                </p>
                
                <h3>Testing inside real workdays, not in a Figma file</h3>
                <p>
                  Due to the time constraints of the project being less than 10 weeks, I was unable to conduct traditional user testing. Instead, I deployed test versions of Rollodex with Cloudflare Pages, in order for users to test the product in their daily routines. Each design variant had its own test link, which let colleagues use Rollodex in their daily routines while I fixed issues and refined the design between rounds.
                  This allowed me to get real feedback from users about the product, and to refine the design based on their needs. This did come with its own challenges, as I had to ensure that the test versions were stable and working enough to allow users to use the product in their daily routines.
                </p>
                <img
                  className="greyborder my-4 full"
                  src="/images/rollodex/cloudfare_test.png"
                  alt="Cloudflare deployment serving the live version and two test versions of Rollodex"
                />
                <p>Watching people use it for real surfaced two needs that a static prototype would have missed.</p>
              </div>
              <div className="space-y-4 content-width">
                <h3>Creating a central source of truth</h3>
                <p>
                 The Rollodex is only as good as the data it contains. To avoid ending up with another out-of-date list in the future,
                  I built an admin dashboard for managing acronyms globally. This allows the CO or the head of each department to manage the acronyms for their respective ministry or division, so the people closest to the acronyms are the ones responsible for them.
                </p>
              </div>
              <div className="space-y-4 content-width">
                <h3>What about acronyms only my team uses?</h3>
                <p>
                  Not every acronym belongs in a ministry-wide database. Local acronyms let users save team-specific
                  terms to their own list, so they can still rely on Rollodex without waiting for an admin to approve an
                  entry.
                </p>
              </div>
            </div>

            <div className="space-y-4" id="impact">
              <p className="header">Impact</p>
              <div className="space-y-4 content-width">
                <h3>Creating a product that supports the people who needed it most</h3>
                <p>
                
                </p>
                <p>
                  The feedback that meant the most came unprompted, in messages from colleagues after launch:
                </p>
                <img
                  className="greyborder my-4 full"
                  src="/images/rollodex/rollodex_comments.png"
                  alt="Messages from OPS colleagues praising Rollodex after launch"
                />
                <blockquote className="border-l-4 pl-4 italic">
                  &ldquo;Thanks for creating this. I plan to use it all the time.&rdquo;
                </blockquote>
              </div>
              <div className="space-y-4 content-width">
                <h3>What I learned</h3>
                <p>
                  Designing inside the codebase changed how I think about testing. Shipping real, working versions early
                  gave me honest feedback about how the tool fit into people&apos;s work, not just how it looked. It also
                  meant the product was maintainable from day one, which was the problem every past solution had failed
                  to solve.
                </p>
              </div>
            </div>

            <div className="header-border mt-16"></div>
            <div className="flex flex-col md:flex-row justify-between gap-4 mt-16 full">
              <a href="/wizParser" className="pagelink px-2 py-1">
                <p className="header whitespace-nowrap">PREVIOUS: </p>
                <h3>Wiz Parser</h3>
              </a>
              <a href="/handbook" className="pagelink px-2 py-1">
                <p className="header whitespace-nowrap">NEXT: </p>
                <h3>DESNbook</h3>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
