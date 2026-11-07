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

          <div id="project-content" className="project-content space-y-12 mt-16 w-full">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between full">
              <h1>Rollodex</h1>
              <h2 className="md:max-w-sm md:text-right">A universal acronym directory for the Ministry of Education</h2>
            </div>
          
            <div className="child flex justify-center">
              <img
                className="image2 greyborder full aspect-16/9 object-contain"
                src="/images/rollodex/rollodex_header.png"
                alt="Rollodex header"
              />
            </div>
            <div className="space-y-4" id="context">
              <p className="header">Context</p>
              <div className="space-y-16">
                <div className="space-y-4 content-width">
                  <p className="quote-lg">
                    The Digital Communication Branch of the Ministry of Education had a gap in the way they managed acronyms, causing silos in information and confusion for staff. Therfore, a solution was needed to standardize how acronyms are updated and used across the branch. 
                  </p>
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
                <p>User Research, Design Engineering, Supabase, React+Vite</p>
              </div>
            </div>

                </div>
              </div>
            </div>
          

            <div className="flex flex-col gap-4" id="solution">
              <p className="header !mb-0">Solution</p>
              <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-4 [&_p]:!mb-0">
                  <h3>
                    Rollodex is a single, searchable directory that standardizes how acronyms are updated and used
                    across the Ministry of Education
                  </h3>
                  <p>
                    I led the project for the Digital Communication Branch. Instead of another list that only one person
                    could maintain, Rollodex is one place to create, look up, and keep acronyms current.
                  </p>
                </div>
                <ImageDetails
                  className="!py-0"
                  title="Find any acronym in seconds"
                  description="Instead of scrolling a dense list, staff can search by acronym, full name, tags or description. Results update instantly and can be sorted, so the answer is usually the first card on the screen."
                  image="/images/rollodex/rollodex_filter.gif"
                />
                <ImageDetails
                  className="!py-0"
                  title="Narrow results to what matters"
                  description="Filters for ministry or division, language, and cloud or local acronyms cut hundreds of results down to a handful. Bookmarks let people keep the acronyms they use every day one click away."
                  image="/images/rollodex/rollodex_options.gif"
                />
                <ImageDetails
                  className="!py-0"
                  title="Context, not just a full name"
                  description="Each acronym has its own page with a definition, division, language and tags. Staff can copy the full name straight into a document, or save the entry as a PDF, replacing the old glossary that was always out of date."
                  image="/images/rollodex/rollodex_download.gif"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4" id="testing">
              <p className="header !mb-0">Testing</p>
              <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-4 [&_p]:!mb-0">
                  <h3>Auditing existing acronyms planners</h3>
                  <p>
                    Looking at existing acronyms planners, I found that most were outdated and inconsistent. Current
                    methods, such as a PDF glossary, an internal list, or a personal tracker, were not easy to search
                    or share, and went stale as soon as the person maintaining them moved on. Many were missing
                    important details like the division or language, core information that was needed to use them in
                    the Communication Branch.
                  </p>
                </div>
                <img
                  className="greyborder full aspect-16/9 object-contain"
                  src="/images/rollodex/pastversions.png"
                  alt="Three past solutions for acronym management: an internal list, a vibe-coded tracker and a PDF glossary"
                />
                <div className="flex flex-col gap-4 [&_p]:!mb-0">
                  <h3>Testing inside real workdays, not in a Figma file</h3>
                  <p>
                    Time was short, so a static prototype would not have told me enough. I put test versions of
                    Rollodex live on Cloudflare Pages and asked colleagues to use them in their actual work. Feedback
                    came in as they did, and I could fix issues and reshape the design between versions.
                  </p>
                </div>
                <img
                  className="greyborder full aspect-16/9 object-contain"
                  src="/images/rollodex/cloudfare_test.png"
                  alt="Cloudflare deployment serving the live version and two test versions of Rollodex"
                />
                <div className="flex flex-col gap-4 [&_p]:!mb-0">
                  <h3>Implementing ODS design system</h3>
                  <p>
                    I implemented the ODS design system to ensure consistency and accessibility across the project.
                  </p>
                </div>
                <div className="flex flex-col gap-4 [&_p]:!mb-0">
                  <h3>Future-proofing for the next developer</h3>
                  <p>
                    The project had to keep going after I left. I wrote documentation at three levels: how to use
                    Rollodex, how to run the admin dashboard, and how to keep developing it.
                  </p>
                  <p>
                    That gave the team a clear handoff, so the next person could pick the work up instead of starting
                    from scratch.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4" id="impact">
              <p className="header !mb-0">Impact</p>
              <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-4 [&_p]:!mb-0">
                  <h3>Built for the people who needed it most</h3>
                  <p>The feedback that meant the most came unprompted, in messages from colleagues after launch:</p>
                </div>
                <img
                  className="greyborder full aspect-16/9 object-contain"
                  src="/images/rollodex/rollodex_comments.png"
                  alt="Messages from OPS colleagues praising Rollodex after launch"
                />
                <div className="flex flex-col gap-4 [&_p]:!mb-0">
                  <h3>What Rollodex changed</h3>
                  <h2>
                    A gradual move from the old lists to Rollodex gave us honest feedback about how it fit into
                    people&apos;s work, not just how it looked. Because the people who needed it could use it, and we
                    could adapt it with them, it became a go-to tool for OPS staff.
                  </h2>
                </div>
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
