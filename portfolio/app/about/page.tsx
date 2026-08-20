import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About â€” Jason Zachariah",
  description: "About Jason Zachariah: product designer with 3+ years in design and coding education. He designs thoughtful ways for emergent technology, including AI, to fit everyday life. Experience at Ministry of Education, WizRobotics, York ESports, and NVISION.",
  alternates: { canonical: "https://jasonzachariah.github.io/about" },
  openGraph: {
    title: "About â€” Jason Zachariah",
    description: "About Jason Zachariah: product designer with 3+ years in design and coding education. He designs thoughtful ways for emergent technology, including AI, to fit everyday life. Experience at Ministry of Education, WizRobotics, York ESports, and NVISION.",
    url: "https://jasonzachariah.github.io/about",
    siteName: "Jason Zachariah",
    images: ["https://jasonzachariah.github.io/images/home/openGraph.png"],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About â€” Jason Zachariah",
    description: "About Jason Zachariah: product designer with 3+ years in design and coding education. He designs thoughtful ways for emergent technology, including AI, to fit everyday life. Experience at Ministry of Education, WizRobotics, York ESports, and NVISION.",
    images: ["https://jasonzachariah.github.io/images/home/openGraph.png"],
  },
};

export default function Page() {
  return (
    <>
<main id="main-content" tabIndex={-1} className="my-20">
        <section className="container ">
            <div className="mx-auto md:mx-48 max-w-6xl py-24 ">
                <article className="w-full">
                    <h1>Hi, it's me, <span className="rough-underline">Jason&nbsp;Zachariah!</span></h1>
                   

                  
                    <div className="pt-4">
                        <h4>My Philosophy</h4>
                        <p>
                            Working as a product designer and after-school coding teacher for <b>3 years</b> now, I have watched
                            how technologies have evolved over time and how they impact the next generation. With the rise of
                            emergent technology, including AI, we often move too quickly without considering long-term effects.
                            My approach is not to dissuade these technologies from existing, but to design thoughtful ways for
                            them to fit into everyday life.
                        </p>
                        <div className="work-exp pt-4">
                            <h4>My Experience</h4>
                            <div className="work-exp-row header-border">
                                <h3>Web Developer @ Ministry of Education</h3>
                                <h4 className="work-exp-date">May 2026â€“Present</h4>
                            </div>
                            <div className="work-exp-row header-border">
                                <h3>UX/UI Designer @ WizRobotics</h3>
                                <h4 className="work-exp-date">Jul 2025â€“May 2026</h4>
                            </div>
                            <div className="work-exp-row header-border">
                                <h3>Graphic Designer @ York ESports</h3>
                                <h4 className="work-exp-date">Sep 2024â€“Jun 2025</h4>
                            </div>
                            <div className="work-exp-row header-border">
                                <h3>Design Intern @ NVISION</h3>
                                <h4 className="work-exp-date">Jan 2022â€“Jun 2022</h4>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    </main>
    </>
  );
}
