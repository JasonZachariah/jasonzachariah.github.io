import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
export const metadata: Metadata = {
  title: "DESNbook — Jason Zachariah",
  description: "DESNbook case study by Jason Zachariah: an all-in-one dashboard concept that helps design students plan degrees, track requirements, and build schedules.",
  alternates: { canonical: "https://jasonzachariah.github.io/handbook" },
  openGraph: {
    title: "DESNbook — Jason Zachariah",
    description: "DESNbook case study by Jason Zachariah: an all-in-one dashboard concept that helps design students plan degrees, track requirements, and build schedules.",
    url: "https://jasonzachariah.github.io/handbook",
    siteName: "Jason Zachariah",
    images: ["https://jasonzachariah.github.io/images/home/openGraph.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DESNbook — Jason Zachariah",
    description: "DESNbook case study by Jason Zachariah: an all-in-one dashboard concept that helps design students plan degrees, track requirements, and build schedules.",
    images: ["https://jasonzachariah.github.io/images/home/openGraph.png"],
  },
};

export default function Page() {
  return (
    <>
<main id="main-content" tabIndex={-1} className="transition-main">

        <section className="container project-with-sidebar">
                 <Sidebar anchorLinks={["Context", "Initial Research", "Ideation Process", "User Feedback", "Next Steps"]} />
          

            <div id="project-content" className="project-content space-y-8 mt-16 w-full">
                <div className="flex flex-col md:flex-row justify-between w-full items-center">

                    <h2>DESNbook</h2>
                    <p>Concept for an all-in-one dashboard that allows design students to plan their degrees.</p>

                </div>
                <div className=" child flex justify-center greyborder">
                    <video className="image1 greyborder full" preload="auto" autoPlay loop muted playsInline>
                        <source src="/images/handbook/addandfilterfinal.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="flex justify-between flex-col   md:flex-row full">
                    <div>
                        <p><b>Project Type:</b></p>
                        <p>Personal Project</p>
                    </div>
                    <div>
                        <p><b>Timeline:</b></p>
                        <p>9 weeks (April-June 2025)</p>
                    </div>
                    <div>
                        <p><b>Tools & Skills:</b></p>
                        <p>Figma</p>
                        <p>Jitter</p>
                        <p>User Research</p>
                        <p>User Testing</p>
                    </div>
                    <div>
                        <p><b>Team:</b></p>
                        <p>1 Designer (My role)</p>
                    </div>
                </div>
                <div className="space-y-4" id="context">
                    <h4>Context</h4>
                    <div className="space-y-4 content-width">
                        <h3>Planning out courses for the DESN program is a hassle, leading to students to feel
                            frustrated
                            and overwhelmed when planning their degrees.</h3>

                        <p>
                            As a design student in the DESN program, one area I dreaded was planning my courses -
                            especially
                            in my first year.
                            The DESN Program is a <span className="rough-highlight">120-credit program</span> that requires students to plan out their courses to
                            fit
                            the requirements. However, the resources used to help students require students to reference
                            multiple sources of information.

                        </p>
                    </div>
                    <div className="space-y-4 quote">
                        <p className="caption-lg">"I had to pick my 2nd year courses and having to map out my picks for the
                            next 2 years over and over by hand to make sure I wasn't missing anything..."</p>
                        <p className="caption-sm">-DESN Student, when asked about course planning challenges.</p>
                        </div>

                </div>
               
                <div className="space-y-4" id="initial-research">
                    <h4>Initial Research</h4>
                    <div className="space-y-4 content-width">
                        <h3>To understand the pain points of degree planning, I surveyed <b>15 current DESN students</b>.</h3>
                        <p>
                            This helped me understand their experiences when planning their degrees. I asked a mix of
                            qualitative and quantitative questions to pinpoint what made course planning difficult.
                        </p>
                        <p>
                            Based on these interviews, here are the major pain points identified:
                        </p>

                    </div>
                    <div className="grid grid-col-1 md:grid-cols-3 gap-4 text-center">
                        <div className="space-y-4 greyborder p-4">
                            <h2 className="important-text" style={{ justifyContent: "center" }}>25%</h2>
                            <p className="caption-sm">
                                rely on third-party tools (Notion, Excel, etc.)
                            </p>
                        </div>
                        <div className="space-y-4 greyborder p-4">
                            <h2 className="important-text" style={{ justifyContent: "center" }}><b>53%</b></h2>
                            <p className="caption-sm">
                                had trouble keeping track of course requirements
                            </p>
                        </div>
                        <div className="space-y-4 greyborder p-4">
                            <h2 className="important-text" style={{ justifyContent: "center" }}><b>46%</b></h2>
                            <p className="caption-sm">
                                wished for more support when planning their degree.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="important-bg space-y-8">
                    
                    <div className="space-y-4">
                        <h4>HMW STATEMENT</h4>
                        <h2>How do we make the process of planning out DESN student requirements a simplified,
                            single experience?
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-4 greyborder p-4">
                            <p className="caption-lg">Confusion over course requirements</p>
                            <p>
                                The current design handbook lacks support for showing how courses affect degree, leaving students lost when planning their degrees.
                            </p>
                        </div>
                        <div className="space-y-4 greyborder p-4">
                            <p className="caption-lg">Planning your degree is tedious</p>
                            <p>
                                The current process requires students to use multiple disconnected platforms to follow degree requirements, leading to a workflow prone to errors
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space-y-4 ">
                    <div className="content-width">
                        <h3>Competitor Analysis</h3>
                        <p>
                            I analyzed the three most common tools design students use to plan their degrees, focusing
                            on
                            their strengths and weaknesses. While each app had one or two strong core features, none
                            supported the full journey needed. This reinforced survey feedback about the frustration of
                            switching between multiple platforms.
                        </p>
                    </div>
                    <img className="greyborder child md:col-span-2 my-4 full" src="/images/handbook/competitor.png" />
                </div>

                <div className="solution-bg space-y-4">
                    <h4>Solution</h4>
                    <div className="space-y-4">
                        <h3>One dashboard for all your course planning needs</h3>
                        <p>
                            A live digital planner that tracks DESN requirements, allowing students to manage course
                            planning, view potential schedules, and address any issues in one place.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4>Final Product</h4>
                        <div className="space-y-4">
                            <div className="space-y-4">
                                <div>
                                    <video className="greyborder full" preload="auto" autoPlay loop muted playsInline>
                                        <source src="/images/handbook/finalprereq.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="space-y-4">
                                    <h3>Clearer Course Requirements</h3>
                                    <p>An organized way to view course requirements, as well as how they affect your
                                        degree progress.</p>
                                </div>
                            </div>
                            <div className="header-border"></div>

                            <div className="space-y-4">
                                <div>
                                    <video className="greyborder full" preload="auto" autoPlay loop muted playsInline>
                                        <source src="/images/handbook/VSBfinal.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="space-y-4">
                                    <h3>Adaptive Schedule Builder</h3>
                                    <p>Allows users to visualize potential schedules,
                                        with simple toggle buttons to add/remove courses from their timetable.
                                    </p>
                                </div>
                            </div>
                            <div className="header-border"></div>

                            <div className="space-y-4">
                                <div>
                                    <video className="greyborder full" preload="auto" autoPlay loop muted playsInline>
                                        <source src="/images/handbook/sidebarfinal.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="space-y-4">
                                    <h3>Resolve course issues with one click.</h3>
                                    <p>Instead of manually figuring out issues within course, DESNbook displays, as well
                                        as
                                        offer solutions to correct, scheduling errors or conflict in your schedule,
                                        conveniently
                                        in the sidebar of the dashboard</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4" id="ideation-process">
                    <h4>Ideation Process</h4>

                    <div className="space-y-4 content-width">
                        <h3>Re-evaluating the User Journey</h3>
                        <p>
                            The current design journey is comprised of three separate flows- one for checking degree
                            requirements, one for checking availability of courses, and one for plotting their
                            timetables.
                            This split-up system creates potential for miscommunication and a chance for students to
                            fail to
                            maintain degree requirements.

                        </p>
                        <p>
                            To fix this, the new flow should allow for students to easily change between each flow,
                            allowing
                            for a single experience and prevent user error.

                        </p>
                        <p>
                            After finalizing this new system, I could now start designing the mid-fidelity screens.

                        </p>
                    </div>
                    <div className="gap-4 my-4">
                        <img className="greyborder " src="/images/handbook/currentjourney.png" />
                        <img className="greyborder " src="/images/handbook/revisedjourney.png" />
                    </div>
                </div>

                <div className="space-y-4" id="user-feedback">
                    <h4>User Feedback</h4>
                    <div className="space-y-4 content-width">
                        <h3>Mid-Fidelity to Hi-Fidelity</h3>
                        <p>
                            Based on my research, I developed a mid-fidelity prototype that addressed the revised user
                            journey, consolidating all major flows into a single dashboard. The dashboard used a central
                            sidebar system to allow users to navigate between their different flows, and
                        </p>
                    </div>
                    <img className="greyborder my-4 full" src="/images/handbook/Wireframes.png" />

                    <div className="space-y-4">
                        <p>
                            To test the prototype, I asked <b>three design students who hadn't used the app</b> to:
                        </p>
                        <ol>
                            <li>
                                <h3><b>Add a course to their first-year schedule.</b></h3>
                            </li>
                            <li>
                                <h3><b>Check which credits they still needed.</b></h3>
                            </li>
                            <li>
                                <h3><b>Create a timetable for one year.</b></h3>
                            </li>
                        </ol>
                        <p>
                            Since these three flows were most important to students, my goal was to make them as simple
                            and
                            intuitive as possible.
                        </p>
                        <p>Here are the insights gained from this testing:</p>
                    </div>

                    <div className="space-y-4">
                        <h4>Design Changes</h4>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <h3>Course Card Design</h3>
                                    <p>
                                        User testing showed that course cards lacked clarity and essential details, such
                                        as when a
                                        course was offered. Based on feedback, I redesigned the cards with clearer
                                        organization and
                                        added labels to show which requirements each course fulfills.
                                    </p>
                                </div>
                                <div>
                                    <img className="greyborder full" src="/images/handbook/desnbookcard.png" />
                                </div>
                            </div>
                            <div className="header-border"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <h3>Suggestion Sidebar</h3>
                                    <p>
                                        Users wanted the sidebar to be more functional. Early versions displayed only
                                        credit totals
                                        without actionable suggestions. The improved version includes recommendations
                                        and quick
                                        fixes students can apply with one click.
                                    </p>
                                </div>
                                <div>
                                    <img className="greyborder full" src="/images/handbook/sidebarimage.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4" id="next-steps">
                    <h4>Next Steps</h4>
                    <div className="space-y-4 content-width">
                        <h3>Connection to Existing Platforms</h3>
                        <p>
                            Since users wouldn't transition to a new platform immediately, a sync function with existing
                            systems would improve productivity. Making DESNbook the central hub for planning would speed
                            up
                            workflows and reduce human error when cross-referencing resources.
                        </p>
                    </div>

                    <h3>Reflection</h3>
                    <div className="space-y-4 greyborder p-4 content-width">
                        <p className="caption-lg">1. Don't Reinvent the Wheel</p>
                        <p>
                            My early designs focused on aesthetics rather than usability.
                        </p>
                    </div>
                    <div className="space-y-4 greyborder p-4 content-width">
                        <p className="caption-lg">2. Data with Human Empathy</p>
                        <p>
                            By prioritizing user journeys
                            and
                            incorporating feedback from real students, the final product helps students to navigate
                        </p>
                    </div>

                </div>
                <div className="header-border mt-16"></div>
                <div className="flex flex-col md:flex-row justify-between gap-4 mt-16 full">
                    <a href="/wizedos" className="pagelink px-2 py-1">
                        <h4 className="whitespace-nowrap">PREVIOUS: </h4>
                        <h3>WizEdOS</h3>
                    </a>
                    <a href="/octobud" className="pagelink px-2 py-1">
                        <h4 className="whitespace-nowrap">NEXT: </h4>
                        <h3>Octobud</h3>
                    </a>
                </div>
            </div>
        </section>
    </main>
    </>
  );
}
