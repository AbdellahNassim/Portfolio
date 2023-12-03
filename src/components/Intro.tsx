"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import useActiveSection from "@/hooks/useActiveSection.hook";
import { useContext } from "react";
import { ActiveSectionContext } from "../../context/ActiveSectionContext";
type Props = {};

function Intro({}: Props) {
  const ref = useActiveSection("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } =
    useContext(ActiveSectionContext)!;
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring" }}
          >
            <Image
              width={300}
              height={300}
              className="rounded-full w-32 h-32 object-cover shadow-md border-[0.35rem] border-white"
              src="/nassim_square.jpg"
              alt="Nassim Profile"
              priority
              quality="100"
            />
          </motion.div>
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.5,
            }}
            className="text-4xl absolute bottom-0 right-0"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl mb-10 mt-4 px-4 font-medium !leading-[1.5] sm:text-3xl"
      >
        <span className="text-4xl sm:text-6xl font-regular">Hi,</span>{" "}
        <span className="font-bold">I'm Abdellah Nassim MERIDJA</span>, Computer
        Systems Engineer, I'm also an experienced{" "}
        <span className="font-bold">Full Stack Developer </span>
        with <span className="font-bold">6 years</span> of experience and{" "}
        <span className="font-bold">Machine Learning Engineer</span>. Interested
        in the intersection between <i>AI</i> and <i>Blockchain</i>.{" "}
        <span>Let's get in touch.</span>
      </motion.h1>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row justify-center gap-2 px-4 font-medium text-lg"
      >
        <div className="flex justify-center text-xs lg:text-lg gap-2">
          <Link
            href="#contact"
            title="Contact Nassim"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
            className="group outline-none focus:scale-110 hover:scale-110 active:scale-105 transition hover:bg-gray-950 bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
          >
            Contact me{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{" "}
          </Link>
          <a
            href="/CV.pdf"
            title="Download Nassim's CV"
            download={true}
            className="border border-black/10 cursor-pointer outline-none focus:scale-110 hover:scale-110 active:scale-105 transition hover:bg-gray-50 bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full"
          >
            Download CV <HiDownload />
          </a>
        </div>

        <div className="flex gap-2 justify-center">
          <a
            href="https://www.linkedin.com/in/meridja-nassim/"
            target="_blank"
            title="Nassim's Linkedin"
            rel="noreferer noopener"
            className="border hover:text-gray-950 border-black/10 cursor-pointer outline-none focus:scale-110 hover:scale-110 active:scale-105 transition hover:bg-gray-50 bg-white text-gray-900 p-4 flex items-center gap-2 rounded-full"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/AbdellahNassim"
            target="_blank"
            title="Nassim's Github"
            rel="noreferer noopener"
            className="border hover:text-gray-950 border-black/10 cursor-pointer outline-none focus:scale-110 hover:scale-110 active:scale-105 transition hover:bg-gray-50 bg-white text-gray-900 p-4 flex items-center gap-2 rounded-full"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01049fd4f1e6d37279"
            target="_blank"
            title="Nassim's Upwork"
            rel="noreferer noopener"
            className="border hover:text-gray-950 border-black/10 cursor-pointer outline-none focus:scale-110 hover:scale-110 active:scale-105 transition hover:bg-gray-50 bg-white text-gray-900 p-4 flex items-center gap-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703a2.707 2.707 0 0 1-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366c-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.551 2.551 0 0 1-2.547 2.548a2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303c2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109c3 0 5.439-2.452 5.439-5.45c0-3-2.439-5.439-5.439-5.439z"
              />
            </svg>
          </a>
          <a
            href="https://inflowblog.vercel.app/"
            target="_blank"
            title="Nassim's Blog - Inflow Blog"
            rel="noreferer noopener"
            className="border hover:text-gray-950 border-black/10 cursor-pointer outline-none focus:scale-110 hover:scale-110 active:scale-105 transition hover:bg-gray-50 bg-white text-gray-900 p-4 flex items-center gap-2 rounded-full"
          >
            <Image src="/inflow.png" width={18} height={18} alt="inflow" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Intro;
