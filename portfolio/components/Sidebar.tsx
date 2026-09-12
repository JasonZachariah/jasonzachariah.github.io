"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

function toId(label: string) {
  return label.replaceAll(" ", "-").toLowerCase();
}

export default function Sidebar({ anchorLinks }: { anchorLinks: string[] }) {
  const ids = useMemo(() => anchorLinks.map(toId), [anchorLinks]);
  const [activeId, setActiveId] = useState(ids[0] ?? "");
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ top: 0, height: 0, ready: false });
  const idsKey = ids.join("|");

  useEffect(() => {
    const sectionIds = idsKey ? idsKey.split("|") : [];

    function updateActive() {
      const marker = window.innerHeight * 0.28;
      let current = sectionIds[0] ?? "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        if (section.getBoundingClientRect().top <= marker) {
          current = id;
        }
      }

      setActiveId(current);
    }

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [idsKey]);

  useLayoutEffect(() => {
    const link = linkRefs.current[activeId];
    const nav = navRef.current;
    if (!link || !nav) return;

    const navRect = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    setIndicator({
      top: linkRect.top - navRect.top + nav.scrollTop,
      height: linkRect.height,
      ready: true,
    });
  }, [activeId]);

  return (
    <aside
      className="project-sidebar hidden md:h-screen md:sticky md:inset-y-10 md:mt-10 md:left-0 md:flex md:flex-col sidebar-border"
      aria-label="On this page"
    >
      <nav
        ref={navRef}
        className={`sidebar-section-nav${indicator.ready ? " is-indicator-ready" : ""}`}
        aria-label="Page sections"
      >
        <span
          className="sidebar-active-indicator"
          style={{ top: indicator.top, height: indicator.height }}
          aria-hidden="true"
        />
        <ul className="list-none m-0 p-0">
          {anchorLinks.map((link) => {
            const id = toId(link);
            const isActive = id === activeId;

            return (
              <li key={link}>
                <a
                  ref={(el) => {
                    linkRefs.current[id] = el;
                  }}
                  href={`#${id}`}
                  className={`sidebar-link${isActive ? " active" : ""}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
