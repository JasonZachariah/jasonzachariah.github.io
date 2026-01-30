import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Initialize rough-notation via dynamic import so GitHub Pages still works if CDN is slow
async function initRoughNotations() {
  let annotate;
  try {
    const rough = await import('rough-notation');
    annotate = rough.annotate;
  } catch (err) {
    console.warn('rough-notation could not load:', err);
    return;
  }
  if (!annotate) return;

  // Underlines – triggered on scroll
  document.querySelectorAll('.rough-underline').forEach(element => {
    const a1 = annotate(element, { type: 'underline', multiline: true, color: 'var(--accent-color)', strokeWidth: 3, padding: 5 });
    ScrollTrigger.create({ trigger: element, start: 'top 80%', onEnter: () => a1.show(), once: true });
  });

  // Highlight (e.g. handbook .rough-highlight)
  document.querySelectorAll('.rough-highlight').forEach(element => {
    const a = annotate(element, { type: 'highlight', multiline: true, color: 'var(--accent-color)', strokeWidth: 2, padding: 4 });
    ScrollTrigger.create({ trigger: element, start: 'top 80%', onEnter: () => a.show(), once: true });
  });

  // Coming soon orange highlight
  document.querySelectorAll('.orange-highlight').forEach(element => {
    const a2 = annotate(element, { type: 'highlight', multiline: true, color: 'var(--accent-color)', strokeWidth: 3, padding: 10, radius: 10, iterations: 3, animationDuration: 2000 });
    ScrollTrigger.create({ trigger: element, start: 'top 80%', onEnter: () => a2.show(), once: true });
  });
}

// Scrollspy for sidebar navigation
// GSAP-based scrollspy
function gsapScrollspy() {
  const sidebarLinks = document.querySelectorAll('.sidebar-border a[href^="#"]');
  if (sidebarLinks.length === 0) return;

  // Map sidebar links to section targets
  const linkSectionPairs = Array.from(sidebarLinks).map(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      const section = document.querySelector(href);
      if (section) return { link, section };
    }
    return null;
  }).filter(Boolean);
  if (linkSectionPairs.length === 0) return;

  // Add sidebar-link class to all sidebar links for styling
  sidebarLinks.forEach(link => link.classList.add('sidebar-link'));

  // Remove 'active' from all; add to correct link
  function setActiveLinkBySection(section) {
    sidebarLinks.forEach(link => link.classList.remove('active'));
    if (!section) {
      if (window.scrollY < 100) {
        sidebarLinks[0].classList.add('active');
      }
      return;
    }
    const id = section.getAttribute('id');
    if (!id) return;
    const match = Array.from(sidebarLinks).find(link => link.getAttribute('href') === `#${id}`);
    if (match) match.classList.add('active');
  }

  // Setup GSAP ScrollTriggers for each section
  linkSectionPairs.forEach(({ link, section }, i) => {
    // Get previous and next section, for logic at edges
    const prevSection = linkSectionPairs[i - 1]?.section;
    const nextSection = linkSectionPairs[i + 1]?.section;

    // Each trigger will activate the corresponding link as active
    ScrollTrigger.create({
      trigger: section,
      start: "top center-=50",
      end: "bottom center-=50",
      onEnter: () => setActiveLinkBySection(section),
      onEnterBack: () => setActiveLinkBySection(section),
      onLeave: () => {
        // If scrolling down and leaving, activate next section if there is one
        if (nextSection) setActiveLinkBySection(nextSection);
        else setActiveLinkBySection(null); // None active at bottom
      },
      onLeaveBack: () => {
        // If scrolling up and leaving, activate prev section if there is one
        if (prevSection) setActiveLinkBySection(prevSection);
        else setActiveLinkBySection(null); // None active at top
      }
    });
  });

  // Fallback for when at the very top of the page
  ScrollTrigger.create({
    start: 0,
    end: 0,
    onEnter: () => {
      if (window.scrollY < 120) {
        setActiveLinkBySection(linkSectionPairs[0]?.section);
      }
    }
  });

  // Initial state
  setTimeout(() => {
    let foundActive = false;
    linkSectionPairs.forEach(({ section }) => {
      const rect = section.getBoundingClientRect();
      if (!foundActive && rect.top < window.innerHeight / 2 && rect.bottom > 0) {
        setActiveLinkBySection(section);
        foundActive = true;
      }
    });
    if (!foundActive) setActiveLinkBySection(linkSectionPairs[0]?.section);
  }, 0);
}

// Initialize everything when DOM is ready
function init() {
  initRoughNotations();
  gsapScrollspy();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

//draggable cards
