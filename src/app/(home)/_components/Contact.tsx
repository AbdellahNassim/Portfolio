"use client";

import { useFormStatus } from "react-dom";
import { toast } from "react-toastify";
import { sendEmail } from "@/actions/sendEmail";
import { profile, projectTypes } from "../_data";
import { Reveal } from "./Reveal";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-2 inline-flex items-center justify-center bg-[var(--accent)] px-6 py-3 text-[13px] tracking-[0.08em] text-[var(--bg)] transition-colors hover:bg-[var(--accent-hover)] disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

const fieldClass =
  "w-full border border-[var(--line)] bg-transparent px-4 py-3 text-sm text-[var(--fg)] placeholder:text-[var(--muted)] transition-colors focus:border-[var(--accent)] focus:outline-none";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-[var(--line)]"
    >
      <div className="new-container grid gap-16 py-24 md:py-32 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--accent)]">
            06 — Contact
          </p>
          <h2 className="mt-4 text-4xl tracking-tight sm:text-5xl">
            Tell me what you want to build.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--muted)]">
            Brief, product, or a half-formed idea — I will reply with a clear
            next step. Prefer email? Write directly.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
          >
            {profile.email}
          </a>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.08}>
          <form
            className="flex flex-col gap-4"
            action={async (formData: FormData) => {
              try {
                await sendEmail(formData);
                toast.success("Message sent. I will get back to you shortly.");
              } catch (err) {
                toast.error((err as Error).message);
              }
            }}
          >
            <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
              Name
              <input
                className={fieldClass}
                type="text"
                name="senderName"
                required
                maxLength={200}
                placeholder="Your name"
                autoComplete="name"
              />
            </label>
            <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
              Email
              <input
                className={fieldClass}
                type="email"
                name="senderEmail"
                required
                maxLength={500}
                placeholder="you@company.com"
                autoComplete="email"
              />
            </label>
            <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
              Project type
              <select
                className={`${fieldClass} appearance-none`}
                name="projectType"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select one
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type} className="bg-[#111113]">
                    {type}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
              Message
              <textarea
                className={`${fieldClass} min-h-[10rem] resize-y`}
                name="message"
                required
                maxLength={5000}
                placeholder="What are you trying to ship?"
              />
            </label>
            <SubmitButton />
          </form>
        </Reveal>
      </div>
    </section>
  );
}
