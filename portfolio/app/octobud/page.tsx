import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Octobud — Jason Zachariah",
  description: "Octobud case study by Jason Zachariah: a code-and-scanner learning device designed for students and teachers in K–12 classrooms.",
  alternates: { canonical: "https://jasonzachariah.github.io/octobud" },
  openGraph: {
    title: "Octobud — Jason Zachariah",
    description: "Octobud case study by Jason Zachariah: a code-and-scanner learning device designed for students and teachers in K–12 classrooms.",
    url: "https://jasonzachariah.github.io/octobud",
    siteName: "Jason Zachariah",
    images: ["https://jasonzachariah.github.io/images/home/openGraph.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Octobud — Jason Zachariah",
    description: "Octobud case study by Jason Zachariah: a code-and-scanner learning device designed for students and teachers in K–12 classrooms.",
    images: ["https://jasonzachariah.github.io/images/home/openGraph.png"],
  },
};

export default function Page() {
  return (
    <>
      
      <main id="main-content" tabIndex={-1} className="transition-main">
        <section className="container project-with-sidebar">
            <aside className="project-sidebar hidden md:h-screen md:sticky md:inset-y-0 md:left-0 md:flex md:flex-col sidebar-border" role="complementary" aria-label="Page sections" aria-controls="project-content">
                <div className="flex flex-col justify-between flex-1 pt-8 ps-2 pe-7 min-w-0">
                    <div className="sidebar-nav-cluster min-w-0">
                        <nav className="sidebar-section-nav flex flex-col gap-4 min-w-0 flex-1" aria-label="On this page">
                        <span className="sidebar-active-indicator" aria-hidden="true"></span>
                        <h4 className="break-words"><button type="button" className="sidebar-link" data-section-target="#step1">Context</button></h4>
                        <h4 className="break-words"><button type="button" className="sidebar-link" data-section-target="#step2">Research</button></h4>
                        <h4 className="break-words"><button type="button" className="sidebar-link" data-section-target="#step3">Solution</button></h4>
                        <h4 className="break-words"><button type="button" className="sidebar-link" data-section-target="#step4">Design Process</button></h4>
                        <h4 className="break-words"><button type="button" className="sidebar-link" data-section-target="#step7">Next Steps</button></h4>
                        </nav>
                    </div>
                </div>
            </aside>

            <div id="project-content" className="project-content space-y-8 mt-16 w-full">
                <div className="flex flex-col md:flex-row justify-between w-full items-center">

                    <h2>Octobud</h2>
                    <p>An adaptable learning device designed for the needs of students and teachers.</p>

                </div>
                <div className=" child flex justify-center">

                    <img className="image3 greyborder my-4" src="/images/home/home-octobudheader.png" id="handbook" />
                </div>
                <div className="flex justify-between flex-col md:flex-row full">
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

                <div className="space-y-4" id="step1">
                    <h4>Context</h4>
                    <div className="space-y-4">
                        <h3>Technology in the classroom divides more than it connects.</h3>

                        <p>
                            With <b>more than 43% of Gen Alpha owning some form of technology before kindergarten</b>,
                            children
                            are
                            increasingly accustomed to using technology in education. However, Chromebooks and iPads
                            often
                            lack tools that support cooperative learning, creating barriers between students and
                            teachers.
                        </p>

                        <p>
                            <b>How do we help students stay focused using technology while also making it flexible and
                            intuitive for teachers?</b>
                        </p>
                    </div>
                </div>

                <div className="space-y-4" id="step2">
                    <h4>Research</h4>

                    <div className="content-width">
                        <p className="caption-lg">
                            P.A.C.T Research
                        </p>

                        <p> I conducted P.A.C.T analysis to understand the pain points of young children and learning
                            technology, and the challenges that teachers face when using technology in the classroom.
                        </p>

                        <p className="caption-lg"> Interviews </p>
                        <p>

                            I interviewed six tutors and teachers who taught children aged 5-15 about their experiences
                            with technology in the classroom.
                        </p>
                        <p className="caption-lg"> Secondary Research </p>
                        <p> To understand long term effects of technology on children's cognitive development, I found
                            finding by accredited journals and articles on long term effects of technology on children's
                            cognitive development.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-4 greyborder p-4">
                            <h3>Children work better when they are engaged</h3>
                            <p>
                                Teachers found students performed better when lessons were gamified using
                                collaborative
                                learning activities.
                            </p>
                        </div>
                        <div className="space-y-4 greyborder p-4">
                            <h3>Tried and true beats expensive and new</h3>
                            <p>
                                Structured lesson plans and reusable templates helped maintain consistency across
                                classrooms.
                            </p>
                        </div>
                        <div className="space-y-4 greyborder p-4">
                            <h3>Online learning creates unavoidable barriers</h3>
                            <p>
                                Online teachers struggled with classroom control since they could not physically
                                monitor
                                device usage.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4 quote">
                        <p className="caption-lg">"I also have
                            to compete with the allure of video games and YouTube. Sometimes students are very
                            obviously
                            doing something else and calling them out will bring them back to task."</p>
                        <p className="caption-sm">-Online Teacher, when asked about the challenges of teaching online.</p>
                    </div>
                </div>

                <p> These pain points also corroborated with secondary research on the use of digital-based
                    learning tools, and the harm that they can have on cognitive development</p>

                <div className="space-y-4 solution-bg quote">
                    <p className="caption-lg">"Skeptics contend that the application's dependence on autoPlay
                        functionalities and
                        uninterrupted video streaming could potentially result in passive consumption, thereby
                        reducing children's capacity to concentrate and actively analyze the content"</p>
                    <p className="caption-sm">-Exploring The Influence of Youtube Kids App on Children's Cognitive Skills.
                        (2023).
                        Journal of Journalism, Media Science & Creative Arts, 3(1), 117-136.</p>

                </div>

                <div className="space-y-4 important-bg" id="step3">
                    <h4>Solution</h4>
                    <div className="space-y-4">
                        <h3>
                            Meet Octobud - a code-and-scanner learning device that gives students and teachers a
                            flexible,
                            gamified learning system for any classroom.
                        </h3>

                        <video className="greyborder" preload="auto" autoPlay loop muted playsInline>
                            <source src="/images/octobud/octobudscancard.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="space-y-4" id="step4">
                    <h4>Design Process</h4>
                    <div className="space-y-4">
                        <h3>Realizing the design</h3>

                        <p>
                            The last 3 weeks of the project were spent on realizing the design, moving from sketches, to low fidelity prototypes, to high fidelity prototypes, and finally to the final design. Due to this time constraint, clarity in the thee princples i gained from the research was crucial in the design process.
                        </p>

                        <img className="greyborder my-4" src="/images/octobud/OctobudVariations.png" />
                        <img className="greyborder my-4" src="/images/octobud/octobud_compare.png" />

                        <iframe width="100%" height="500px"
                            src="https://embed.figma.com/slides/FDwjA4UMSPnze4cK1m7ce7/Untitled?node-id=1-83&embed-host=share"
                            allowFullScreen></iframe>
                    </div>
                </div>

                <div className="space-y-4" id="step7">
                    <h4>Next Steps</h4>
                    <div className="space-y-4">
                        <h3>Connecting to existing platforms</h3>

                        <p>
                            Integrating Octobud with existing educational platforms would improve adoption and
                            reduce
                            errors
                            caused by switching between tools.
                        </p>
                    </div>

                    <h3>Reflection</h3>
                    <div className="space-y-4 greyborder p-4 content-width">
                        <p className="caption-lg">1. Do not reinvent the wheel</p>
                        <p>
                            Shifting focus from aesthetics to usability and user feedback helped ground the final
                            design
                            in
                            real classroom needs.
                        </p>
                    </div>
                </div>
                <div className="header-border mt-16"></div>
                <div className="flex flex-col md:flex-row justify-between gap-4 mt-16 full">
                    <a href="/handbook" className="pagelink px-2 py-1">
                        <h4 className="whitespace-nowrap">PREVIOUS: </h4>
                        <h3>DESNbook</h3>
                    </a>
                    <a href="/wizParser" className="pagelink px-2 py-1">
                        <h4 className="whitespace-nowrap">NEXT: </h4>
                        <h3>Wiz Parser</h3>
                    </a>
                </div>
            </div>
        </section>
    </main>
    </>
  );
}
