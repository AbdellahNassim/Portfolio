"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, socials } from "../_data";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="new-container grid items-end gap-16 pb-24 pt-16 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:gap-12 md:pb-32 md:pt-24">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]"
        >
          Product engineer · Algiers / Remote
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.05 }}
          className="mt-6 max-w-[14ch] text-[2.75rem] leading-[1.08] tracking-tight text-[var(--fg)] sm:text-6xl md:text-[4.25rem]"
        >
          I ship <em className="italic text-[var(--accent)]">production</em>{" "}
          software for founders and teams.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.12 }}
          className="mt-8 max-w-[38rem] text-base leading-relaxed text-[var(--muted)] sm:text-lg"
        >
          Full-stack product engineer. Web products, backends, and systems that
          scale — with AI and blockchain when the product needs it.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.18 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center bg-[var(--accent)] px-6 py-3 text-[13px] tracking-[0.08em] text-[var(--bg)] transition-colors hover:bg-[var(--accent-hover)]"
          >
            Start a project
          </a>
          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center border border-[var(--line)] px-6 py-3 text-[13px] tracking-[0.08em] text-[var(--fg)] transition-colors hover:border-[var(--fg)]"
          >
            Download CV
          </a>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[13px] tracking-[0.08em] text-[var(--muted)]"
        >
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-[var(--accent)]"
              >
                {social.name}
              </a>
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.figure
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.15 }}
        className="relative mx-auto w-full max-w-sm md:mx-0 md:justify-self-end"
      >
        <div className="overflow-hidden border border-[var(--line)]">
          <Image
            src={profile.photo}
            alt={`${profile.name} portrait`}
            width={640}
            height={640}
            priority
            quality={95}
            className="aspect-[4/5] w-full object-cover grayscale-[20%]"
          />
        </div>
        <figcaption className="mt-4 flex items-baseline justify-between gap-4 text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
          <span>{profile.name}</span>
          <span className="text-[var(--accent)]">{profile.role}</span>
        </figcaption>
      </motion.figure>
    </section>
  );
}
