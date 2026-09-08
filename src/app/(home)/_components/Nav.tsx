"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, profile } from "../_data";

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur-md">
      <div className="new-container flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="font-serif text-lg tracking-tight text-[var(--fg)]"
        >
          {profile.shortName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              className="text-[13px] tracking-[0.08em] text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-[var(--accent)] px-4 py-2 text-[13px] tracking-[0.08em] text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-[var(--bg)]"
          >
            Start a project
          </a>
        </nav>

        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span
            className={`absolute h-px w-5 bg-[var(--fg)] transition ${open ? "translate-y-0 rotate-45" : "-translate-y-1.5"}`}
          />
          <span
            className={`absolute h-px w-5 bg-[var(--fg)] transition ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`absolute h-px w-5 bg-[var(--fg)] transition ${open ? "translate-y-0 -rotate-45" : "translate-y-1.5"}`}
          />
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-[var(--line)] bg-[var(--bg)] md:hidden"
          aria-label="Mobile"
        >
          <div className="new-container flex flex-col gap-1 py-6">
            {navLinks.map((link) => (
              <a
                key={link.hash}
                href={link.hash}
                onClick={() => setOpen(false)}
                className="py-3 font-serif text-2xl text-[var(--fg)]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-fit border border-[var(--accent)] px-4 py-2 text-[13px] tracking-[0.08em] text-[var(--accent)]"
            >
              Start a project
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
