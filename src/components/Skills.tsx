"use client";
import useActiveSection from "@/hooks/useActiveSection.hook";
import SectionHeading from "./SectionHeading";
import { skillsData } from "../../lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};
function Skills({}: Props) {
  const ref = useActiveSection("Skills", 0.5);
  return (
    <section
      ref={ref}
      id="skills"
      className="relative mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28"
    >
      <div
        className="bg-[#dbd7fb] dark:bg-[#676394] -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
          sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
      ></div>
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex gap-2 flex-wrap justify-center text-lg text-gray-800 dark:text-gray-300">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="bg-white dark:bg-gray-900 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] border flex gap-1 items-center border-black/[0.1] rounded-xl px-5 py-3 h-[4rem]"
            key={skill.name}
          >
            <Image
              src={skill.img}
              width={50}
              height={50}
              alt={skill.name}
              className=" h-full p-1"
            />
            <span className="whitespace-nowrap">{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
