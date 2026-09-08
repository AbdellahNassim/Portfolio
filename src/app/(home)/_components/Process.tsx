"use client";

import { processSteps } from "../_data";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-24 border-t border-[var(--line)]"
    >
      <div className="new-container py-24 md:py-32">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
            03 — Process
          </p>
          <h2 className="mt-4 max-w-[14ch] text-4xl tracking-tight sm:text-5xl">
            How we work together.
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 0.06}>
                <p className="font-serif text-sm text-[var(--accent)]">
                  {step.index}
                </p>
                <h3 className="mt-4 border-t border-[var(--line)] pt-4 text-2xl tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
