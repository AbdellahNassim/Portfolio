"use client";

import { about, experience } from "../_data";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-[var(--line)]">
      <div className="new-container py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
              04 — About
            </p>
            <h2 className="mt-4 text-4xl tracking-tight sm:text-5xl">
              {about.lead}
            </h2>
            <p className="mt-8 text-base leading-relaxed text-[var(--muted)]">
              {about.body}
            </p>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.08}>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
              Experience
            </p>
            <ul className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {experience.map((item) => (
                <li
                  key={`${item.org}-${item.date}`}
                  className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline"
                >
                  <div>
                    <p className="text-[var(--fg)]">
                      {item.role}
                      <span className="text-[var(--muted)]"> — {item.org}</span>
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                      {item.summary}
                    </p>
                  </div>
                  <p className="text-[12px] tracking-[0.08em] text-[var(--muted)] sm:text-right">
                    {item.date}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
