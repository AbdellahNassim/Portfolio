import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Abdellah Nassim Meridja — Product Engineer",
  description:
    "Senior product engineer. I ship production software for founders and teams — web, backend, and systems, with AI and blockchain when the product needs it.",
  openGraph: {
    title: "Abdellah Nassim Meridja — Product Engineer",
    description:
      "Senior product engineer. I ship production software for founders and teams — web, backend, and systems, with AI and blockchain when the product needs it.",
    siteName: "Abdellah Nassim Meridja — Product Engineer",
    locale: "en-US",
    type: "website",
    url: "https://abdallahnassim.dev/",
    images: [
      "https://abdallahnassim.dev/_next/image?url=%2Fnassim_square.jpg&w=384&q=100",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative antialiased">
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
