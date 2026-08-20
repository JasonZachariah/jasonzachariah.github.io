import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wiz Parser — Jason Zachariah",
  description: "Wiz Parser case study by Jason Zachariah: a design system and UX overhaul that helps developers build consistent UI for an edtech teaching platform.",
  alternates: { canonical: "https://jasonzachariah.github.io/wizParser" },
  openGraph: {
    title: "Wiz Parser — Jason Zachariah",
    description: "Wiz Parser case study by Jason Zachariah: a design system and UX overhaul that helps developers build consistent UI for an edtech teaching platform.",
    url: "https://jasonzachariah.github.io/wizParser",
    siteName: "Jason Zachariah",
    images: ["https://jasonzachariah.github.io/images/home/openGraph.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wiz Parser — Jason Zachariah",
    description: "Wiz Parser case study by Jason Zachariah: a design system and UX overhaul that helps developers build consistent UI for an edtech teaching platform.",
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
                            <h4 className="break-words"><button type="button" className="sidebar-link" data-section-target="#step2">Challenge</button></h4>
                            <h4 className="break-words"><button type="button" className="sidebar-link" data-section-target="#step3">Solution</button></h4>
                            <h4 className="break-words"><button type="button" className="sidebar-link" data-section-target="#step4">Final Products</button></h4>
                            <h4 className="break-words"><button type="button" className="sidebar-link" data-section-target="#step5">Reflection</button></h4>
                            </nav>
                    </div>
                </div>
            </aside>

            <div id="project-content" className="project-content space-y-8 mt-16 w-full">
                <div className="flex flex-col md:flex-row justify-between w-full items-center">

                    <h2>Wiz Parser</h2>
                    <p>A design system to reduce developer's headaches.</p>

                </div>
                <div className=" child flex justify-center">

                    <video className=" image4 greyborder full" preload="auto" autoPlay loop muted playsInline>
                        <source src="/images/wizparser/header.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="flex justify-between flex-col   md:flex-row full">
                    <div>
                        <p><b>Project Type:</b></p>
                        <p>Client Work (WizRobotics)</p>
                    </div>
                    <div>
                        <p><b>Timeline:</b></p>
                        <p>1 week</p>
                    </div>
                    <div>
                        <p><b>Tools & Skills:</b></p>
                        <p>Figma</p>
                        <p>User Research</p>
                        <p>User Testing</p>
                        <p>JSON File Systems</p>
                    </div>
                    <div>
                        <p><b>Team:</b></p>
                        <p>1 Web Designer (My role)</p>
                        <p>1 Front-end Developer</p>

                    </div>
                </div>
                <div className="space-y-4" id="step1">
                    <h4>Context</h4>
                    <div className="space-y-4 content-width">
                        <h3>A lack of a design system doesn't just impact designers, but developers too.</h3>
                        <p>
                            I was assigned to work with a front-end developer to redesign Wiz Parser - an online
                            interactive teaching platform.The current developer had no system in place for creating new
                            elements, instead "designing"
                            them as they were needed and trying to replicate what was already there.
                        </p>

                        <p>I soon realized that this was more than just a visual redesign, but a core issue on how
                            elemnts were designed and developed.
                        </p>
                    </div>

                </div>
                <img src="/images/wizparser/Inconsistencies.png" alt="Inconsistencies" className="greyborder my-4 full" />

                <div className="space-y-4" id="step2">
                    <h4>Challenge</h4>
                    <div className="space-y-4 ">

                        <div className="important-bg space-y-8">
                            <div className="space-y-4">
                                <p className="caption-lg">HMW statement</p>
                                <h2>How might we create a design system that allows developers to
                                    move
                                    to a whole other way of designing
                                    elements?</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-4 bg-accent-1-muted p-4">
                                    <p className="caption-lg">Poor Handoffs</p>
                                    <p>
                                        There existed no system in place for developers to create new elements, instead
                                        trying to replicate what the previous developer had done with no context.
                                    </p>
                                </div>
                                <div className="space-y-4 bg-accent-2-muted p-4">
                                    <p className="caption-lg">Inconsistent Designs</p>
                                    <p>
                                        Without a proper system for creating elements in Wiz Parser, the platform lacked
                                        consistency, lacking visual and interaction consistency.
                                    </p>
                                </div>
                                <div className="space-y-4 bg-accent-3-muted p-4">
                                    <p className="caption-lg">Time Constraints</p>
                                    <p>
                                        Due to the time constraints of the developers, I had to work quickly and
                                        efficiently
                                        to create a design system that would be easy to use and understand.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">

                        <div className="space-y-4" id="step3">
                            <div className="space-y-4">
                                <h4>Solution</h4>
                                <div className="space-y-4 content-width">
                                    <h3>Perfecting handoff</h3>
                                    <p>
                                        Previously, we had hourly check-ups, which caused a disconnect in the design
                                        process. However, due to our short time span, both the deve and I had to this of
                                        communicating

                                        We switched to Loom, enabling real-time visual updates without interrupting our
                                        workflow.
                                    </p>

                                </div>

                                <img src="/images/wizparser/wizparse_FigmaNotes.png" alt="Final Assets"
                                    className="greyborder my-4 full" />
                            </div>
                            <div className="space-y-4 ">
                                <p> From this, we were able to create a design strategy that would allow for a more
                                    efficient and effective design process:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="blank-bg">
                                        <div className="caption-lg">
                                            Past Development Process
                                        </div>
                                        <div className="space-y-4 h-full">
                                            <p>1. Developer would go and make a new element from scratch without any
                                                context
                                                or guidance.</p>
                                            <div className="header-border"></div>
                                            <p>2. Developers would try to figure out how to implement the element in the
                                                codebase from the previous developer's code.</p>
                                            <div className="header-border"></div>
                                            <p>3. Most of production time would be spent on bug fixing and making sure
                                                the
                                                element is working in the existing code space.</p>
                                            <div className="header-border"></div>
                                            <p>4. The final element would be added, despite not matching the quality of
                                                the rest of the codebase.</p>
                                        </div>
                                    </div>
                                    <div className="solution-bg">
                                        <div className="caption-lg">

                                            New Development Process

                                        </div>
                                        <div className=" space-y-4 h-full">
                                            <p>1. Developers start by looking at the Wiz Parser design system, and see
                                                how
                                                they can use the components to create a new element.</p>
                                            <div className="header-border"></div>
                                            <p>2. Developers have direct comments and instructions in the Figma file to
                                                help
                                                them implement the element in the codebase, outlining typography spacing
                                                and
                                                breakpoints.</p>
                                            <div className="header-border"></div>
                                            <p>3. Developers can easily scale and onboard new team members with the
                                                design system and documentation</p>
                                            <div className="header-border"></div>
                                            <p>4. The final element would be added, matching the quality of the rest of
                                                the codebase- creating a more consistent and maintainable codebase.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Here are some of the details I prepared before handoff:</p>
                            <div className="space-y-4">
                                <div className="space-y-4 content-width">
                                    <h3>Typography</h3>
                                    <p>
                                        Previously, type styles were not defined, which led to elements having no
                                        consistent style. To solve this, a typography guidelines was formed based on the
                                        existing fonts—Montserrat and Shantell Sans—allowing for a consistent style
                                        across all elements.
                                    </p>
                                </div>
                                <img className="greyborder full" src="/images/wizparser/Typography.png" />
                            </div>
                            <div className="header-border"></div>

                            <div className="space-y-4">
                                <div className="space-y-4 content-width">
                                    <h3>Colours</h3>
                                    <p>
                                        The primary and neutral palettes were defined using the Radix color system,
                                        allowing for straightforward integration into the Parser's code that would work
                                        in both light and dark modes. Naming conventions were based on JSON file
                                        systems, allowing easy implementation into the development codebase.
                                    </p>
                                </div>
                                <img className="greyborder full" src="/images/wizparser/DesignTokenBeforeAndAfter.png" />
                            </div>
                            <div className="header-border"></div>

                            <div className="space-y-4">
                                <div className="space-y-4 content-width">
                                    <h3>Spacing</h3>
                                    <p>Developing a consistent style for padding and margins for components was crucial
                                        for consistency across both mobile and desktop screens. These spacings were
                                        based on the 4-point system, allowing for developers to easily refer to when
                                        developing new elements.</p>
                                </div>
                                <img className="greyborder full" src="/images/wizparser/Sizing_Guidlines.png" />
                            </div>
                        </div>

                        <div className="space-y-4" id="step4">
                            <h4>Final Products</h4>
                            <div className="space-y-4 content-width">
                                <h3>A whole new way of designing elements</h3>
                                <p>Here are a few of the deliverables created for the final Wiz Parser:</p>

                            </div>
                            <div className="space-y-4">
                                <img className="greyborder my-4 full" src="/images/wizparser/FinalScreens.png" />
                                <p className="caption-sm">Desktop and Mobile Breakpoints</p>
                            </div>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 full">
                                <div className="space-y-2 ">
                                    <video className="greyborder full" preload="auto" autoPlay loop muted playsInline>
                                        <source src="/images/wizparser/Light_Dark.mp4" type="video/mp4" />
                                    </video>
                                    <p className="caption-sm  ">Light and Dark Mode Toggle</p>
                                </div>

                                <div className="space-y-2 ">
                                    <video className="greyborder full" preload="auto" autoPlay loop muted playsInline>
                                        <source src="/images/wizparser/Drop-Down-Question.mp4" type="video/mp4" />
                                    </video>
                                    <p className="caption-sm  ">Drop-Down Question Interaction</p>
                                </div>

                                <div className="space-y-2 ">
                                    <video className="greyborder full" preload="auto" autoPlay loop muted playsInline>
                                        <source src="/images/wizparser/AI-Chat.mp4" type="video/mp4" />
                                    </video>
                                    <p className="caption-sm  ">AI Chat Functionality</p>
                                </div>

                                <div className="space-y-2 ">
                                    <video className="greyborder full" preload="auto" autoPlay loop muted playsInline>
                                        <source src="/images/wizparser/Copy_Text.mp4" type="video/mp4" />
                                    </video>
                                    <p className="caption-sm  ">Copy Text Feature</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4" id="step5">
                            <h4>Reflection</h4>
                            <p className="content-width">This project was a great learning experience for me. I was able to
                                work with a team to create a design system that would be easy to use and understand.
                                Here are a few of the things I learned:</p>
                            <div className="space-y-4 greyborder p-4 content-width">
                                <p className="caption-lg">1. Design Systems are Powerful</p>
                                <p>
                                    A good design system is more than just a set of guidelines. It's a tool that helps
                                    developers create consistent, efficient, and maintainable code.
                                </p>
                            </div>
                            <div className="space-y-4 greyborder p-4 content-width">
                                <p className="caption-lg">2. Communicate Better, not More</p>
                                <p>
                                    By sitting down with the developers and understanding their workflow, I was able to
                                    fully understand their needs and understand how to design for them. </p>
                            </div>
                            <div className="space-y-4 greyborder p-4 content-width">
                                <p className="caption-lg">3. Iterate Faster</p>
                                <p>
                                    In a small company, every decision counts. By developing a back and forth process
                                    with the developers, I was able
                                    to iterate faster and more efficiently. </p>
                            </div>
                        </div>
                        <div className="header-border mt-16"></div>
                        <div className="flex flex-col md:flex-row justify-between gap-4 mt-16 full">
                            <a href="/octobud" className="pagelink px-2 py-1">
                                <h4 className="whitespace-nowrap">PREVIOUS: </h4>
                                <h3>Octobud</h3>
                            </a>
                            <a href="/wizedos" className="pagelink px-2 py-1">
                                <h4 className="whitespace-nowrap">NEXT: </h4>
                                <h3>WizEdOS</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </>
  );
}
