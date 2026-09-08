"use client";

import { stack } from "../_data";
import { Reveal } from "./Reveal";

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-24 border-t border-[var(--line)]">
      <div className="new-container py-24 md:py-32">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
            05 — Stack
          </p>
          <h2 className="mt-4 max-w-[14ch] text-4xl tracking-tight sm:text-5xl">
            Tools I actually ship with.
          </h2>
        </Reveal>

        <ul className="mt-16 space-y-8">
          {stack.map((group, index) => (
            <li key={group.group}>
              <Reveal delay={index * 0.04}>
                <div className="grid items-start gap-4 border-t border-[var(--line)] pt-6 sm:grid-cols-[8rem_minmax(0,1fr)]">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                    {group.group}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border border-[var(--line)] px-3 py-1.5 text-sm text-[var(--fg)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
