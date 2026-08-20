export function initSiteEffects() {
let syncSidebarActiveIndicator = () => {};

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





function navigateToProjectSection(targetSelector) {
  const section = document.querySelector(targetSelector);
  if (!section) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  section.scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    block: 'start'
  });
  if (history.pushState) {
    history.pushState(null, '', targetSelector);
  } else {
    window.location.hash = targetSelector.slice(1);
  }
}

function initSidebarSectionButtons() {
  const sectionButtons = document.querySelectorAll(
    '.project-sidebar button.sidebar-link[data-section-target]'
  );
  sectionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.sectionTarget;
      if (target) {
        navigateToProjectSection(target);
        syncSidebarActiveIndicator(button);
      }
    });
  });
}

function initSidebarRovingTabindex() {
  const aside = document.querySelector('.project-sidebar[role="complementary"]');
  if (!aside) return;

  const nav = aside.querySelector('.sidebar-section-nav');
  if (!nav) return;

  const sectionButtons = Array.from(
    nav.querySelectorAll('button.sidebar-link[data-section-target]')
  );
  if (sectionButtons.length === 0) return;

  let focusedIndex = 0;

  function setRovingTabindex(index) {
    sectionButtons.forEach((button, i) => {
      button.tabIndex = i === index ? 0 : -1;
    });
    focusedIndex = index;
  }

  setRovingTabindex(0);

  sectionButtons.forEach((button, index) => {
    button.addEventListener('focus', () => setRovingTabindex(index));
  });

  nav.addEventListener('keydown', (event) => {
    let nextIndex = focusedIndex;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        nextIndex = Math.min(sectionButtons.length - 1, focusedIndex + 1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        nextIndex = Math.max(0, focusedIndex - 1);
        break;
      case 'Home':
        event.preventDefault();
        nextIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        nextIndex = sectionButtons.length - 1;
        break;
      default:
        return;
    }

    if (nextIndex !== focusedIndex) {
      sectionButtons[nextIndex].focus();
    }
  });
}

function initScrollspy() {
  const sidebarButtons = document.querySelectorAll(
    '.project-sidebar button.sidebar-link[data-section-target]'
  );
  if (sidebarButtons.length === 0) return;

  const linkSectionPairs = Array.from(sidebarButtons)
    .map((button) => {
      const target = button.dataset.sectionTarget;
      if (target && target.startsWith('#')) {
        const section = document.querySelector(target);
        if (section) return { button, section };
      }
      return null;
    })
    .filter(Boolean);
  if (linkSectionPairs.length === 0) return;

  const visibility = new Map();

  function setActiveButtonBySection(section) {
    sidebarButtons.forEach((button) => {
      button.classList.remove('active');
      button.removeAttribute('aria-current');
    });
    if (!section) {
      if (window.scrollY < 100 && sidebarButtons[0]) {
        sidebarButtons[0].classList.add('active');
        sidebarButtons[0].setAttribute('aria-current', 'true');
        syncSidebarActiveIndicator(sidebarButtons[0]);
      }
      return;
    }
    const id = section.getAttribute('id');
    if (!id) {
      return;
    }
    const match = Array.from(sidebarButtons).find(
      (button) => button.dataset.sectionTarget === `#${id}`
    );
    if (match) {
      match.classList.add('active');
      match.setAttribute('aria-current', 'true');
      syncSidebarActiveIndicator(match);
    }
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
      setActiveButtonBySection(bestSection);
      return;
    }

    if (window.scrollY < 120) {
      setActiveButtonBySection(linkSectionPairs[0]?.section);
      return;
    }

    const nearBottom =
      window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80;
    if (nearBottom) {
      setActiveButtonBySection(linkSectionPairs[linkSectionPairs.length - 1]?.section);
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
        setActiveButtonBySection(linkSectionPairs[0]?.section);
      } else {
        pickActiveSection();
      }
    },
    { passive: true }
  );

  setActiveButtonBySection(linkSectionPairs[0]?.section);
}

function initSidebarActiveIndicator() {
  const nav = document.querySelector('.sidebar-section-nav');
  const indicator = nav?.querySelector('.sidebar-active-indicator');
  if (!nav || !indicator) return;

  let layoutPrimed = false;

  syncSidebarActiveIndicator = function syncIndicator(link) {
    const active =
      link ||
      nav.querySelector('.sidebar-link.active, .sidebar-link[aria-current="true"]');
    if (!active) {
      indicator.style.opacity = '0';
      return;
    }

    const navRect = nav.getBoundingClientRect();
    const linkRect = active.getBoundingClientRect();
    const fontSize = parseFloat(getComputedStyle(active).fontSize) || 16;
    const inset = fontSize * 0.3;
    const top = linkRect.top - navRect.top + inset;
    const height = Math.max(0, linkRect.height - inset * 2);

    if (!layoutPrimed) {
      indicator.classList.add('sidebar-active-indicator--no-motion');
    }

    indicator.style.opacity = '1';
    indicator.style.top = `${top}px`;
    indicator.style.height = `${height}px`;
    nav.classList.add('is-indicator-ready');

    if (!layoutPrimed) {
      layoutPrimed = true;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          indicator.classList.remove('sidebar-active-indicator--no-motion');
        });
      });
    }
  };

  syncSidebarActiveIndicator();
  window.addEventListener('resize', () => syncSidebarActiveIndicator(), { passive: true });
  window.addEventListener('load', () => syncSidebarActiveIndicator(), { passive: true });
}

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



function init() {
  initSidebarSectionButtons();
  initSidebarRovingTabindex();
  initSidebarActiveIndicator();
  initScrollspy();
  initMobileVideoAutoplay();
}

  init();
}
