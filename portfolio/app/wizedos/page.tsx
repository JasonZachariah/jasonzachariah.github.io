import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WizEdOS — Jason Zachariah",
  description: "WizEdOS case study by Jason Zachariah: UX/UI redesign of the WizEdOS educational platform, including user flows and interface design.",
  alternates: { canonical: "https://jasonzachariah.github.io/wizedos" },
  openGraph: {
    title: "WizEdOS — Jason Zachariah",
    description: "WizEdOS case study by Jason Zachariah: UX/UI redesign of the WizEdOS educational platform, including user flows and interface design.",
    url: "https://jasonzachariah.github.io/wizedos",
    siteName: "Jason Zachariah",
    images: ["https://jasonzachariah.github.io/images/home/openGraph.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WizEdOS — Jason Zachariah",
    description: "WizEdOS case study by Jason Zachariah: UX/UI redesign of the WizEdOS educational platform, including user flows and interface design.",
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
                        <h4 className="break-words"><button type="button" className="sidebar-link" data-section-target="#step2">Initial Notes</button></h4>
                        <h4 className="break-words"><button type="button" className="sidebar-link" data-section-target="#step3">Creating the Flows</button></h4>
                        <h4 className="break-words"><button type="button" className="sidebar-link" data-section-target="#step7">Reflection</button></h4>
                        </nav>
                    </div>
                </div>
            </aside>

            <div id="project-content" className="project-content space-y-8 mt-16 w-full">
                <div className="flex flex-col md:flex-row justify-between w-full items-center">

                    <h2>WizEdOS</h2>
                    <p>A redesign for the WizEdOS platform</p>

                </div>
                <div className=" child flex justify-center">

                    <video className=" image2 greyborder full" preload="auto" autoPlay loop muted playsInline>
                        <source src="/images/wizedos/Header.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="flex justify-between flex-col   md:flex-row full">
                    <div>
                        <p><b>Project Type:</b></p>
                        <p>Client Work (WizRobotics)</p>
                    </div>
                    <div>
                        <p><b>Timeline:</b></p>
                        <p>2 weeks</p>
                    </div>
                    <div>
                        <p><b>Tools & Skills:</b></p>
                        <p>Figma</p>
                        <p>Jitter</p>
                        <p>Webflow</p>
                    </div>
                    <div>
                        <p><b>Team:</b></p>
                        <p>Web Designer (My role)</p>
                    </div>
                </div>
                <div className="space-y-4" id="step1">
                    <h4>Context</h4>
                    <div className="space-y-4 content-width">
                        <h3>WizEdOS had a problem- their website failed to communicate the value of their service.</h3>

                        <p>
                            During my time at WizRobotics, I had the opportunity to create a new direction for
                            <span><a className="underlinelink" href="https://www.wizedos.com/">WizEdOS, an all-in-one
                                    learning
                                    platform for STEM educators.</a></span> Initially, when discussing the project's
                            scope,
                            the client believed that only a simple visual refresh with a few minor website edits was
                            needed.
                            However, after analyzing the site and discussing long-term goals for the service, it became
                            clear
                            that there was a major disconnect between the existing design and the changes truly
                            necessary.
                        </p>
                    </div>
                </div>

                <div className="space-y-4" id="step2">
                    <h4>Initial Notes</h4>
                    <div className="space-y-4 content-width">
                        <h3>So, what were the issues with the old WizEdOS system?</h3>

                        <p>After reviewing the initial website with the client, these were the main pain points that
                            emerged:</p>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-4 greyborder p-4">
                            <p className="caption-lg">Inconsistent Branding</p>
                            <p>
                                Many images on the website were random stock illustrations that failed to communicate
                                the company's services. As a result, the site felt disjointed and gave off an unprofessional
                                impression.
                            </p>
                        </div>
                        <div className="space-y-4 greyborder p-4">
                            <p className="caption-lg">Confusing Page Setup</p>
                            <p>
                                Important sections such as the booking form were placed in hard-to-access areas, making
                                it difficult for users to locate key actions quickly.
                            </p>
                        </div>
                    </div>

                    <p>
                        With a clear understanding of what needed improvement, I began the research and development
                        phase.
                    </p>
                </div>

                <div className="space-y-4" id="step3">
                    <h4>Creating the Flows</h4>
                    <div className="space-y-4 content-width">
                        <h3>Treat the website layout like a conversation</h3>

                        <p>
                            To get a clearer idea of how to structure the website that would satisfy the client, I had
                            them
                            "pitch" me the WizEdOS service as if I were another business
                            . Using this method, I was able to identify natural ways to group content, taking notes on
                            major
                            points and structuring them based on how the client explained the platform.
                        </p>

                        <p>
                            This process allowed us to find what aspects of the website needed to be added, and how we
                            should organize them by pages.
                        </p>

                        <p> From this, we identified two main user flows for the WizEdOS website:
                            to encourage companies to book a meeting, and second, to showcase the four sub-services
                            of WizEdOS.</p>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img className="greyborder child col-span-3 my-4 full" style={{ width: "100%" }}
                            src="/images/wizedos/InformationArchitecture.png" />
                    </div>

                    <div className="space-y-4">
                        <p>
                            For the first flow, this was achieved by adding a CTA button in both the hero section and
                            the
                            navigation bar. This opened a pop-up modal, allowing users to access the booking flow easily
                            without it disrupting the users flow like it did before
                        </p>

                    </div>
                    <img className="greyborder my-4 full" src="/images/wizedos/HeroSection.png" />

                    <video className="greyborder full" preload="auto" autoPlay loop muted playsInline>
                        <source src="/images/wizedos/WireFrame_to_Final.mp4" type="video/mp4" />
                    </video>

                    <img className="greyborder my-4 full" src="/images/wizedos/Styleguide.png" />

                </div>

                <div className="space-y-4" id="step7">
                    <h4>Reflection</h4>
                    <div className="space-y-4 greyborder p-4 content-width">
                        <p className="caption-lg">1. Work with your client, not against them</p>
                        <p>
                            Maintaining transparency and involving the client in design decisions helped minimize revisions later and ensured we were aligned on the final deliverables.
                        </p>
                    </div>
                    <div className="space-y-4 greyborder p-4 content-width">
                        <p className="caption-lg">2. Seeing the Big Picture</p>
                        <p>
                            Adapting the existing brand identity to a flexible design system helped create a cohesive and consistent brand. This helped the client understand the value of the design system and how it would benefit the company in the long run.
                        </p>
                    </div>
                </div>
                <div className="header-border mt-16"></div>
                <div className="flex flex-col md:flex-row justify-between gap-4 mt-16 full">
                    <a href="/wizParser" className="pagelink px-2 py-1">
                        <h4 className="whitespace-nowrap">PREVIOUS: </h4>
                        <h3>Wiz Parser</h3>
                    </a>
                    <a href="/handbook" className="pagelink px-2 py-1">
                        <h4 className="whitespace-nowrap">NEXT: </h4>
                        <h3>DESNbook</h3>
                    </a>
                </div>
            </div>
        </section>
    </main>
    </>
  );
}
