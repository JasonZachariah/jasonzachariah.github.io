"use client";

import { useEffect, useId, useState } from "react";

const links = [
  { href: "./", label: "Projects" },
  { href: "./archive", label: "Archive" },
  { href: "./about", label: "About" },
  {
    href: "https://drive.google.com/file/d/1dYPKVENDlAFRUzEPWyE4Pw8uElywU83K/view?usp=sharing",
    label: "Resume",
    external: true,
  },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    function onResize() {
      if (window.matchMedia("(min-width: 768px)").matches) setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <nav
      className={`site-header container ${open ? " nav-open" : ""}`}
      aria-label="Primary"
    >
      <div className="nav-bar-inner flex w-full items-center justify-between py-4">
        <a href="./" className="flex items-center gap-4" aria-label="Home">
          <span className="site-logo" aria-hidden="true" />
          <p style={{ fontFamily: "var(--font-pp-sans-rounded)" }}>Jason Zachariah</p>
        </a>

        <button
          type="button"
          className="nav-menu-toggle"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav-menu-icon" aria-hidden="true">
            {open ? (
              <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </span>
        </button>

        <div id={menuId} className="nav-links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="pagelink"
              {...("external" in link && link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
