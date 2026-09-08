"use client";

import { services } from "../_data";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-[var(--line)]"
    >
      <div className="new-container py-24 md:py-32">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
            02 — Services
          </p>
          <h2 className="mt-4 max-w-[16ch] text-4xl tracking-tight sm:text-5xl">
            What I am hired to do.
          </h2>
          <p className="mt-6 max-w-[36rem] text-base leading-relaxed text-[var(--muted)]">
            One senior engineer who can own the product surface and the system
            underneath it. AI and blockchain when they are the right tool — not
            as a costume.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-px bg-[var(--line)] sm:grid-cols-2">
          {services.map((service, index) => (
            <li key={service.title} className="bg-[var(--bg)]">
              <Reveal delay={index * 0.05} className="h-full">
                <article className="flex h-full flex-col p-8 md:p-10">
                  <p className="font-serif text-sm text-[var(--accent)]">
                    {service.index}
                  </p>
                  <h3 className="mt-4 text-2xl tracking-tight md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-[var(--muted)]">
                    {service.description}
                  </p>
                  <p className="mt-8 text-[11px] uppercase tracking-[0.18em] text-[var(--fg)]">
                    {service.stack}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
