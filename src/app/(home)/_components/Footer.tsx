import { profile, socials } from "../_data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="new-container flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] tracking-[0.08em] text-[var(--muted)]">
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
        </ul>
      </div>
    </footer>
  );
}
