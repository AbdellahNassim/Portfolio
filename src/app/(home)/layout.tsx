import type { Metadata } from "next";
import { Nav } from "./_components/Nav";
import { Footer } from "./_components/Footer";
import { RouteClass } from "./_components/RouteClass";

export const metadata: Metadata = {
  title: "Abdellah Nassim Meridja — Product Engineer",
  description:
    "Senior product engineer. I ship production software for founders and teams — web, backend, and systems, with AI and blockchain when the product needs it.",
};

export default function NewLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="new-root">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap"
      />
      <RouteClass name="new-route" />
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
