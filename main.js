import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** Set by initSidebarScrollDot; scrollspy calls this so the dot lines up with the active pill. */
let syncSidebarScrollDot = () => {};

// Initialize rough-notation via dynamic import so GitHub Pages still works if CDN is slow
// Only on home and about pages
async function initRoughNotations() {
  const path = (window.location.pathname || '/').replace(/\/$/, '') || '/';
  const isHome = path === '' || path === '/' || path === '/index.html';
  const isAbout = path === '/about' || path === '/about.html';
  if (!isHome && !isAbout) return;

  let annotate;
  try {
    const rough = await import('rough-notation');
    annotate = rough.annotate;
  } catch (err) {
    console.warn('rough-notation could not load:', err);
    return;
  }
  if (!annotate) return;

  // Underlines – scroll-triggered
  document.querySelectorAll('.rough-underline').forEach((element) => {
    const a1 = annotate(element, {
      type: 'underline',
      multiline: true,
      color: 'var(--accent-color)',
      strokeWidth: 3,
      padding: 5
    });
    ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      onEnter: () => a1.show(),
      once: true
    });
  });

  // Highlight (e.g. handbook .rough-highlight)
  document.querySelectorAll('.rough-highlight').forEach(element => {
    const a = annotate(element, {
      type: 'highlight',
      multiline: true,
      // Semi-transparent accent for softer highlight
      color: 'oklch(0.64 0.24 40 / 0.7)',
      strokeWidth: 2,
      padding: 4
    });
    ScrollTrigger.create({ trigger: element, start: 'top 80%', onEnter: () => a.show(), once: true });
  });

  // Coming soon orange highlight
  document.querySelectorAll('.orange-highlight').forEach(element => {
    const a2 = annotate(element, { type: 'highlight', multiline: true, color: 'var(--accent-color)', strokeWidth: 3, padding: 10, radius: 10, iterations: 3, animationDuration: 2000 });
    ScrollTrigger.create({ trigger: element, start: 'top 80%', onEnter: () => a2.show(), once: true });
  });
}

// Rough underline on hover/focus (nav, footer). Sidebar section links use CSS only (pill active state).
async function initH4LinkRoughHover() {
  let annotate;
  try {
    const rough = await import('rough-notation');
    annotate = rough.annotate;
  } catch (err) {
    console.warn('rough-notation (link hover) could not load:', err);
    return;
  }
  if (!annotate) return;

  function attachRoughUnderline(link, { useFocus } = { useFocus: true }) {
    let ann = null;
    const show = () => {
      if (!ann) {
        ann = annotate(link, {
          type: 'underline',
          multiline: true,
          color: 'var(--brand-900)',
          strokeWidth: 2,
          padding: 4,
          iterations: 1,
          animationDuration: 220
        });
      }
      ann.show();
    };
    const hide = () => {
      if (ann) ann.hide();
    };
    link.addEventListener('mouseenter', show);
    link.addEventListener('mouseleave', hide);
    if (useFocus) {
      link.addEventListener('focus', show);
      link.addEventListener('blur', hide);
    }
  }

  document.querySelectorAll('nav h4 a, footer .footer-social-list .footer-social-link').forEach((link) => {
    attachRoughUnderline(link, { useFocus: true });
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
      syncSidebarScrollDot();
      return;
    }
    const id = section.getAttribute('id');
    if (!id) {
      syncSidebarScrollDot();
      return;
    }
    const match = Array.from(sidebarLinks).find(link => link.getAttribute('href') === `#${id}`);
    if (match) match.classList.add('active');
    syncSidebarScrollDot();
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

/** Orange dot on the track; vertical position follows the active sidebar pill (scrollspy). */
function initSidebarScrollIndicator() {
  const indicator = document.querySelector('.sidebar-scroll-indicator');
  const dot = indicator?.querySelector('.sidebar-scroll-dot');
  if (!indicator || !dot) return;

  const mq = window.matchMedia('(min-width: 768px)');
  let dotLayoutPrimed = false;

  syncSidebarScrollDot = function syncDot() {
    if (!mq.matches) return;
    const active = document.querySelector('.project-sidebar a.sidebar-link.active');
    const cluster = document.querySelector('.sidebar-nav-cluster');
    const sectionLinks = cluster?.querySelectorAll('a.sidebar-link[href^="#"]');
    let link = active;
    if (!link && sectionLinks?.length) {
      // Scrollspy clears .active past last section / above first; park dot on a sensible pill
      link = window.scrollY < 120 ? sectionLinks[0] : sectionLinks[sectionLinks.length - 1];
    }
    if (!link) return;

    const ir = indicator.getBoundingClientRect();
    const lr = link.getBoundingClientRect();
    const center = lr.top + lr.height / 2 - ir.top;
    const half = 5;
    const clamped = Math.min(Math.max(half, center), ir.height - half);

    const skipTransition = !dotLayoutPrimed;
    if (skipTransition) {
      dot.classList.add('sidebar-scroll-dot--no-motion');
    }
    dot.style.top = `${clamped}px`;
    if (skipTransition) {
      dotLayoutPrimed = true;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          dot.classList.remove('sidebar-scroll-dot--no-motion');
        });
      });
    }
  };

  syncSidebarScrollDot();
  mq.addEventListener('change', syncSidebarScrollDot);
  window.addEventListener('resize', syncSidebarScrollDot, { passive: true });
  window.addEventListener('load', syncSidebarScrollDot, { passive: true });
  ScrollTrigger.addEventListener('refresh', syncSidebarScrollDot);
  window.addEventListener(
    'scroll',
    () => {
      requestAnimationFrame(syncSidebarScrollDot);
    },
    { passive: true }
  );
}

/** Muted inline autoplay on mobile (iOS often needs .play() + playsInline). */
function initMobileVideoAutoplay() {
  const wired = new WeakSet();
  let observer = null;

  const tryPlay = (video) => {
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  };

  const wireVideo = (video) => {
    if (wired.has(video)) return;
    wired.add(video);

    if (!video.hasAttribute('autoplay')) {
      video.setAttribute('autoplay', '');
    }

    tryPlay(video);
    video.addEventListener('loadeddata', () => tryPlay(video), { once: true });

    if (observer) observer.observe(video);
  };

  const wireAll = (root = document) => {
    root.querySelectorAll('video').forEach(wireVideo);
  };

  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) tryPlay(target);
          else target.pause();
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px 10% 0px' }
    );
  }

  wireAll();

  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeName === 'VIDEO') wireVideo(node);
        else if (node.querySelectorAll) wireAll(node);
      });
    });
  });
  mutationObserver.observe(document.body, { childList: true, subtree: true });

  document.addEventListener(
    'touchstart',
    () => document.querySelectorAll('video').forEach(tryPlay),
    { once: true, passive: true }
  );
}

// Initialize everything when DOM is ready
function init() {
  initRoughNotations();
  initH4LinkRoughHover();
  gsapScrollspy();
  initSidebarScrollIndicator();
  initMobileVideoAutoplay();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

//draggable cards
