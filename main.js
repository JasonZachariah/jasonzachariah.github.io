/** Set by initSidebarScrollIndicator; scrollspy calls this so the dot lines up with the active pill. */
let syncSidebarScrollDot = () => {};

function whenInView(element, callback, { once = true, rootMargin = '0px 0px -20% 0px' } = {}) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        callback(entry.target);
        if (once) observer.disconnect();
      });
    },
    { rootMargin, threshold: 0 }
  );
  observer.observe(element);
  return observer;
}

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

  document.querySelectorAll('.rough-underline').forEach((element) => {
    const ann = annotate(element, {
      type: 'underline',
      multiline: true,
      color: 'var(--accent-color)',
      strokeWidth: 3,
      padding: 5
    });
    whenInView(element, () => ann.show());
  });

  document.querySelectorAll('.rough-highlight').forEach((element) => {
    const ann = annotate(element, {
      type: 'highlight',
      multiline: true,
      color: 'oklch(0.64 0.24 40 / 0.7)',
      strokeWidth: 2,
      padding: 4
    });
    whenInView(element, () => ann.show());
  });

  document.querySelectorAll('.orange-highlight').forEach((element) => {
    const ann = annotate(element, {
      type: 'highlight',
      multiline: true,
      color: 'var(--brand-700)',
      strokeWidth: 3,
      padding: 10,
      radius: 10,
      iterations: 3,
      animationDuration: 2000
    });
    whenInView(element, () => ann.show());
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

function initScrollspy() {
  const sidebarLinks = document.querySelectorAll('.sidebar-border a[href^="#"]');
  if (sidebarLinks.length === 0) return;

  const linkSectionPairs = Array.from(sidebarLinks)
    .map((link) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const section = document.querySelector(href);
        if (section) return { link, section };
      }
      return null;
    })
    .filter(Boolean);
  if (linkSectionPairs.length === 0) return;

  sidebarLinks.forEach((link) => link.classList.add('sidebar-link'));

  const visibility = new Map();

  function setActiveLinkBySection(section) {
    sidebarLinks.forEach((link) => link.classList.remove('active'));
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
    const match = Array.from(sidebarLinks).find((link) => link.getAttribute('href') === `#${id}`);
    if (match) match.classList.add('active');
    syncSidebarScrollDot();
  }

  function pickActiveSection() {
    let bestSection = null;
    let bestScore = -1;

    linkSectionPairs.forEach(({ section }) => {
      const score = visibility.get(section) ?? 0;
      if (score > bestScore) {
        bestScore = score;
        bestSection = section;
      }
    });

    if (bestSection) {
      setActiveLinkBySection(bestSection);
      return;
    }

    if (window.scrollY < 120) {
      setActiveLinkBySection(linkSectionPairs[0]?.section);
      return;
    }

    const nearBottom =
      window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80;
    if (nearBottom) {
      setActiveLinkBySection(linkSectionPairs[linkSectionPairs.length - 1]?.section);
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        visibility.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0);
      });
      pickActiveSection();
    },
    {
      rootMargin: '-42% 0px -42% 0px',
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
    }
  );

  linkSectionPairs.forEach(({ section }) => {
    visibility.set(section, 0);
    observer.observe(section);
  });

  window.addEventListener(
    'scroll',
    () => {
      if (window.scrollY < 120) {
        setActiveLinkBySection(linkSectionPairs[0]?.section);
      } else {
        pickActiveSection();
      }
    },
    { passive: true }
  );

  setActiveLinkBySection(linkSectionPairs[0]?.section);
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

function initMobileNav() {
  document.querySelectorAll('nav.header-border').forEach((nav) => {
    const inner = nav.querySelector(':scope > div');
    if (!inner) return;

    inner.classList.add('nav-bar-inner');

    let links = inner.querySelector('.nav-links');
    if (!links) {
      const legacy = Array.from(inner.children).find(
        (el) => el !== inner.firstElementChild && el.querySelector('h4 a')
      );
      if (!legacy) return;
      legacy.classList.add('nav-links');
      links = legacy;
    }

    if (!links.id) links.id = 'site-nav-menu';

    let toggle = inner.querySelector('.nav-menu-toggle');
    if (!toggle) {
      toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'nav-menu-toggle';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-controls', links.id);
      toggle.setAttribute('aria-label', 'Open menu');
      toggle.innerHTML =
        '<span class="nav-menu-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.75 12.25H13.25M2.75 8.25H13.25M2.75 4.25H13.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
      inner.insertBefore(toggle, links);
    }

    const setMenuOpen = (open) => {
      nav.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      links.setAttribute('aria-hidden', String(!open));
    };

    const closeMenu = () => setMenuOpen(false);

    links.setAttribute('aria-hidden', 'true');
    toggle.addEventListener('click', () => setMenuOpen(!nav.classList.contains('nav-open')));

    links.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
      if (!nav.classList.contains('nav-open')) return;
      if (!nav.contains(event.target)) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  });
}

function init() {
  initMobileNav();
  initRoughNotations();
  initH4LinkRoughHover();
  initScrollspy();
  initSidebarScrollIndicator();
  initMobileVideoAutoplay();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

window.addEventListener('pageshow', (event) => {
  if (event.persisted) init();
});
