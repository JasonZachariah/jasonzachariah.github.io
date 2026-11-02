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
              <div className="space-y-16">
                <div className="space-y-4 content-width">
                  <h3>
                    The Ontario Public Service (OPS)  had a gap - there was no easy way to find information about acronyms
                  </h3>
                  <p>
                    When I joined the Ministry of Education, one of the first things I noticed was how much of the
                    language was based in acronyms. Whether in emails, live webpages or documents, making sure acronyms
                    were used properly was a major concern in the OPS, and a large painpoint for new and experienced
                    staff alike.
                  </p>
                  <p>This was especially true in our team in the <strong>Digital Communication branch</strong>, we had a lot of acronyms that were used frequently, but not easily searchable. While there were some in-team solutions,such as personal "vibe-coded" trackers, they only worked for a single user, and could not be easily shared with the team or other departments.</p>
                  <img
                    className="greyborder full"
                    src="/images/rollodex/pastversions.png"
                    alt="Three past solutions for acronym management: an internal list, a vibe-coded tracker and a PDF glossary"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4" id="solution">
              <p className="header">Solution</p>
              <div className="space-y-16">
                <div className="space-y-4 content-width">
                  <h3>
                    Rollodex is a single, searchable directory that standardizes how acronyms are updated and used
                    across the Ministry of Education
                  </h3>
                  <p> Led by the Digital Communication Branch and spearheaded by me, Rollodex is a centralized, searchable directory that standardizes the creation, maintenance, and use of acronyms across the Ministry of Education.  </p>
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
            </div>

            <div className="space-y-4" id="testing">
              <p className="header">Testing</p>
              <div className="space-y-16">
                <div className="space-y-4 content-width">
                  <h3>
                    Before developing, there were three major constraints I had to consider on the scope of the project
                    on my end:
                  </h3>
                  <div >
                    <div className="notes-card">
                      <p className="caption-lg">Focusing on the Ministry of Education, not the entire OPS</p>
                      <p>
                        Since this project focused on the Ministry of Education, I tailored Rollodex specifically to
                        their needs instead of the entire OPS. As a result, only acronyms relevant to the Ministry were
                        included, with expansion to a wider audience planned for the future.
                      </p>
                    </div>
                    <div className="notes-card">
                      <p className="caption-lg">Creating a central source of truth</p>
                      <p>
                        The Rollodex is only as good as the data it contains. To avoid ending up with another
                        out-of-date list in the future, I built an admin dashboard for managing acronyms globally. This
                        allows the CO or the head of each department to manage the acronyms for their respective
                        ministry or division, so the people closest to the acronyms are the ones responsible for them.
                      </p>
                    </div>
                    <div className="notes-card">
                      <p className="caption-lg">What about acronyms only my team uses?</p>
                      <p>
                        Not every acronym belongs in a ministry-wide database. Local acronyms let users save
                        team-specific terms to their own list, so they can still rely on Rollodex without waiting for an
                        admin to approve an entry.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-width">
                  <div className="notes-card">
                    <p className="caption-lg">Testing inside real workdays, not in a Figma file</p>
                    <p>
                      Due to the time con. I put test versions of Rollodex live with Cloudflare Pages, so colleagues
                      could try it in their actual workflows. Real feedback rolled in as people used each variant,
                      letting me quickly fix issues and reshape the design based on their needs.
                    </p>
                    <p>Watching people use it for real surfaced two needs that a static prototype would have missed.</p>
                    <img
                      className="greyborder full"
                      src="/images/rollodex/cloudfare_test.png"
                      alt="Cloudflare deployment serving the live version and two test versions of Rollodex"
                    />
                    <h3> Creating perfec handoffs for developers of the future</h3>
                    <p> As mentioned eariler, this project focused on a small snapshot of the Ministry of Education, but the admin dashboard and the live version of Rollodex are designed to be easily extended to other ministries and divisions. To that end, the next developer who takes over the project will have a clear, well-documented starting point, rather than having to figure everything out from scratch.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4" id="impact">
              <p className="header">Impact</p>
              <div className="space-y-16">
                <div className="space-y-4 content-width">
                  <h3>Creating a product that supports the people who needed it most</h3>
                  <p>The feedback that meant the most came unprompted, in messages from colleagues after launch:</p>
                  <img
                    className="greyborder full"
                    src="/images/rollodex/rollodex_comments.png"
                    alt="Messages from OPS colleagues praising Rollodex after launch"
                  />

                </div>
                <div className="space-y-4 content-width">
                  <h3>What did Rollodex achieve?</h3>

                  <h2>
                    By allowing a gradual transition from the old tool to the new tool, we were able to get honest feedback about how the tool fit into people&apos;s work, not just how it
                    looked. By creating a product that was able to be used by the people who needed it most and adapt to their needs, Rollodex has become a go-to tool for OPS staff.
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
