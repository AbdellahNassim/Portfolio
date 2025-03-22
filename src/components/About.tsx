"use client";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { ActiveSectionContext } from "../../context/ActiveSectionContext";
import useActiveSection from "@/hooks/useActiveSection.hook";
type Props = {};

function About({}: Props) {
  const ref = useActiveSection("About", 0.75);
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      id="about"
      transition={{ delay: 0.175 }}
      className="relative mb-28 scroll-mt-28 sm:mb-0 max-w-[50rem] sm:mt-28 text-center text-xl leading-8 border-white border-opacity-20 bg-white dark:bg-opacity-5 bg-opacity-20 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] p-10 rounded-lg"
    >
      {/* <div
        className="bg-[#fbe2e3] dark:bg-[#946263] -z-10 absolute top-[10rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
          sm:w-[68.75rem]"
      ></div> */}

      <SectionHeading>About Me</SectionHeading>
      <p className="text-md sm:text-lg mb-3">
        I am a <span className="font-bold">Software Engineer</span> specializing
        in Full Stack Development, AI, and Blockchain. With expertise in{" "}
        <span className="font-bold">Next.js, Nest.js, and Golang</span>, I build
        production-grade applications that merge efficiency with scalability. My
        work extends beyond traditional development into the realm of{" "}
        <span className="font-bold">AI-driven cybersecurity</span> and
        decentralized systems, where I explore innovative solutions at the
        intersection of trust and intelligence.
      </p>
      <p className="text-md sm:text-lg">
        As a <span className="font-bold">freelance consultant</span>, I offer
        services in Web, Mobile, System, and Blockchain Development, bringing
        ideas to life through cutting-edge technology. I also share insights
        through content creation, guiding developers and tech enthusiasts. Let&apos;s
        shape the future together.
      </p>
    </motion.section>
  );
}

export default About;
