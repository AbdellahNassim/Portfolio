import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "../../context/ActiveSectionContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "../../context/ThemeContext";
const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Abdellah Nassim MERIDJA - Software Engineer",
  description:
    "The personal website of Abdellah Nassim MERIDJA, Computer Systems Engineer and Software Engineer.",
  openGraph: {
    title: "Abdellah Nassim MERIDJA - Software Engineer",
    description:
      "The personal website of Abdellah Nassim MERIDJA, Computer Systems Engineer and Software Engineer.",
    siteName: "Abdellah Nassim MERIDJA - Software Engineer",
    locale: "en-US",
    type: "website",
    url: "https://abdallahnassim.dev/",
    images: [
      "https://abdallahnassim.dev/_next/image?url=%2Fnassim_square.jpg&w=384&q=100"
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 transition-all`}
      >
        <div
          className="bg-[#fbe2e3] dark:bg-[#946263] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
          sm:w-[68.75rem]"
        ></div>
        <div
          className="bg-[#dbd7fb] dark:bg-[#676394] -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
          sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
            <ToastContainer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
