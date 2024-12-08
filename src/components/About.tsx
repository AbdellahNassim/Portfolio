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
        I am a <span className="font-bold">Computer Systems Engineer</span> with
        a passion for technology and innovation. With over{" "}
        <span className="font-bold">4 years of experience</span> in Full Stack
        Web development using the MERN Stack, Next.js and Nest.js, I have honed
        my skills in creating robust and dynamic web applications. Beyond web
        development, I am also a
        <span className="font-bold"> Machine Learning Engineer </span> and{" "}
        <span className="font-bold">Blockchain Engineer</span>, delving into the
        exciting world of artificial intelligence & blockchain. My enthusiasm
        extends to emerging technologies, particularly the intersection of
        Blockchain and AI, where I find endless possibilities for the future.
      </p>
      <p className="text-md sm:text-lg">
        As a versatile professional, I am{" "}
        <span className=" font-bold">open to freelance work</span> in a wide
        range of areas, including Web Development, Mobile Development, System
        Development, Desktop Development, AI development as well as Blockchain
        and Web3 development. Whether you need a stunning website, a
        cutting-edge mobile app, or a custom software solution, I am here to
        bring your ideas to life. Additionally, I share my knowledge and
        insights as a blogger, contributing technology-related content to my
        personal blog,{" "}
        <a
          href="https://inflowblog.vercel.app"
          target="_blank"
          rel="noreferer noopenner"
          className="font-bold cursor-pointer hover:underline hover:text-gray-700 transition "
        >
          Inflow blog
        </a>{" "}
        Join me on this journey of exploration and innovation in the tech world.
      </p>
    </motion.section>
  );
}

export default About;
