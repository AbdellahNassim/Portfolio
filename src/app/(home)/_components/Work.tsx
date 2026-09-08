"use client";

import Image from "next/image";
import { projects } from "../_data";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-[var(--line)]">
      <div className="new-container py-24 md:py-32">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
            01 — Selected work
          </p>
          <h2 className="mt-4 max-w-[16ch] text-4xl tracking-tight sm:text-5xl">
            Products shipped, not just prototyped.
          </h2>
        </Reveal>

        <ul className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-28">
          {projects.map((project, index) => (
            <li key={project.title}>
              <Reveal delay={0.04}>
                <article className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
                  <div
                    className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                  >
                    <div className="overflow-hidden border border-[var(--line)] bg-[var(--bg-elevated)]">
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="h-auto w-full object-cover object-top"
                        sizes="(min-width: 1024px) 55vw, 100vw"
                      />
                    </div>
                  </div>
                  <div
                    className={`flex flex-col lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <p className="font-serif text-sm text-[var(--accent)]">
                      {project.index}
                    </p>
                    <h3 className="mt-3 text-3xl tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-[13px] tracking-[0.08em] text-[var(--muted)]">
                      {project.kicker} · {project.role}
                    </p>
                    <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
                      {project.description}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="border border-[var(--line)] px-2.5 py-1 text-[11px] tracking-[0.12em] text-[var(--muted)]"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-6 text-[13px] tracking-[0.08em]">
                      {project.demoLink ? (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
                        >
                          Live product →
                        </a>
                      ) : null}
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-[var(--fg)] transition-colors hover:text-[var(--accent)]"
                        >
                          Source →
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
