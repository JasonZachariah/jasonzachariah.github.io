import ImageDetails from "@/components/ImageDetails";
import Notes from "@/components/Notes";
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

          <div id="project-content" className="project-content mt-8 flex w-full flex-col gap-8">
            <div className="flex flex-col gap-2 full">
              <h1>Rollodex</h1>
              <h2>A universal acronym directory for the Ministry of Education</h2>
            </div>
          
            <div className="flex flex-col gap-4" id="context">
              <p className="header !mb-0">Context</p>
              <div className="flex flex-col gap-4 content-width">
                <p className="quote-lg">
                  The Communication Branch of the Ministry of Education had a gap in the way they managed acronyms, causing silos in information and confusion for staff. A solution was needed to standardize how acronyms are updated and used across the branch.
                </p>
              </div>
            </div>
            <div className="child flex flex-col gap-4">
              <img
                className="image2 greyborder full aspect-16/9 object-contain"
                src="/images/rollodex/rollodex_header.png"
                alt="Rollodex header"
              />
              <div className="flex flex-col gap-4 md:flex-row md:justify-between full [&_p]:!mb-0">
                <div>
                  <p>
                    <b>Team:</b>
                  </p>
                  <p>Digital Communication Branch (Ministry of Education)</p>
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
              <div className="role-note">
                <p className="header !mb-0">Role</p>
                <p>
                  I was in charge of the design and development of the early Rollodex, including supplementary services such as an admin dashboard and handoff documentation.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4" id="solution">
              <p className="header !mb-0">Solution</p>
              <div className="flex flex-col gap-8">
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
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 [&_p]:!mb-0">
                  <h3>Auditing existing acronym planners</h3>
                  <p>
                  Before diving into solution, we looked at pre-existing solutions that existed in the ministry, such as a PDF glossary, an internal list, or personal "vibe coded" trackers. From these, we began to identify the major issues and pain points that we needed to address, both from a user experience and a saftey standpoint.
                  </p>
                </div>
            
                <img
                  className="greyborder full aspect-16/9 object-contain"
                  src="/images/rollodex/pastversions.png"
                  alt="Three past solutions for acronym management: an internal list, a vibe-coded tracker and a PDF glossary"
                />
                <p> From these, we broke the major issues into 3 major pain points:</p>
                <Notes
                  items={[
                    "Existing methods lacked a way to stay up to date and accurate",
                    "Information was scattered across multiple sources, making it difficult to find and use",
                    "Personal trackers lacked security and could be leaked to unauthorized users",
                  ]}
                />  

                <h3> Creating a secure platform that allowed for updates to be made</h3>
                <p> One of the major point with existing systems of acronym management was that they were not updatable. Vibecode trackers esepcailly had a lot of security concerns, as the databases could be shared b sharing a link, without any password protection.   </p>

                <img src="/images/rollodex/rollodex_safety.png" alt="Safety features of Rollodex" />
                <p>To mitigate this, an admin panel was created, allowing for the updating of the database by managers who could not only add new acronyms, but also edit and delete existing ones.This allowed for both the Rollodex and Admin t be password protected, meaning that only authorized users could access the system. </p> 
                <img src="/images/rollodex/rollodex_admindiagram.png" alt="Diagram of the admin panel and how it works" />
<h3>Creating a filtering strategy</h3>
                <p> One strategy that was used to test the filtering capabities ws a quick co-design sessions, where I gather members of the branch acronyms, and test out how they personally "filtered" for acronyms they needed to use in their work </p>
<img src="/images/rollodex/rollodex_codesign.png" alt="Co-design session with branch acronyms" />
                <p>From this, we were able to break down the filtering capabilities into 3 major catagories: ministry/branch, language, and the name of the acronym. We also added a "bookmark" feature, so users could keep the acronyms they use most often one click away.</p>
                
                   <div className="flex flex-col gap-4 [&_p]:!mb-0">
                  <h3>Testing inside real workdays, not in a Figma file</h3>
                  <p>
                   Due to time contrstiarts, and the worry of the project being "left in the dust" by the next person, I decided to put test versions of
                    Rollodex live on Cloudflare Pages and ask colleagues to use them in their day to day work. This allowed us to get feedback as they did, and we could use that feedback to shape the design between versions.
                  </p>
                </div>
                <img
                  className="greyborder full aspect-16/9 object-contain"
                  src="/images/rollodex/cloudfare_test.png"
                  alt="Cloudflare deployment serving the live version and two test versions of Rollodex"
                />
                <div className="flex flex-col gap-4 [&_p]:!mb-0">
                  <h3>Creating a system that allowed for updates to be made</h3>
                  <p>
                One of the major point with existing systems of acronym management was that they were not updatable. Vibecode trackers esepcailly had a lot of security concerns, as the databases could be shared b sharing a link, without any password protection.   </p>
                
                <p>To mitigate this, an admin panel was created, allowing for the updating of the database by managers who could not only add new acronyms, but also edit and delete existing ones.     this allowed for both the Rollodex and Admin t be password protected, meaning that only authorized users could access the system. </p> 
                              <h3>Creating a system that allowed for updates to be made</h3>
                 <p>
                One of the major point with existing systems of acronym management was that they were not updatable. Vibecode trackers esepcailly had a lot of security concerns, as the databases could be shared b sharing a link, without any password protection.   </p>
                
                <p>To mitigate this, an admin panel was created, allowing for the updating of the database by managers who could not only add new acronyms, but also edit and delete existing ones.     this allowed for both the Rollodex and Admin t be password protected, meaning that only authorized users could access the system. </p> 
                              <h3>Future-proofing for the next developer</h3>
                 <p>
                Since I only had the 2 months to work on the project, I wrote documentation at three levels: how to use
                Rollodex, how to run the admin dashboard, and how to keep developing it. This gave the team a clear handoff, so the next person could pick the work up instead of starting
                from scratch.
              </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4" id="impact">
              <p className="header !mb-0">Impact</p>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 [&_p]:!mb-0">
                  <h3>Built for the people who needed it most</h3>
                  <p>The feedback that meant the most came unprompted, in messages from colleagues after launch:</p>
                </div>
                <img
                  className="greyborder full aspect-16/9 object-contain"
                  src="/images/rollodex/rollodex_comments.png"
                  alt="Messages from OPS colleagues praising Rollodex after launch"
                />
                <div className="flex flex-col gap-4 [&_h2]:!mb-0">
                  <h3>What Rollodex changed</h3>
                  <h2>
                    A gradual move from the old lists to Rollodex gave us honest feedback about how it fit into
                    people&apos;s work, not just how it looked. Because the people who needed it could use it, and we
                    could adapt it with them, it became a go-to tool for OPS staff.
                  </h2>
                </div>
              </div>
            </div>

            <div className="header-border"></div>
            <div className="flex flex-col md:flex-row justify-between gap-4 full">
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
