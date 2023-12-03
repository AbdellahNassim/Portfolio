"use client";
import React, { useRef } from "react";
import { projectsData } from "../../lib/data";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
type Props = {
  project: (typeof projectsData)[number];
};

function ProjectCard({ project }: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollXProgress, scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.article
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group rounded-lg bg-gray-100 max-w-[42rem] border hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 transition border-black/5 overflow-hidden lg:pe-8 relative lg:min-h-[20rem]"
    >
      <div className="pt-4 pb-8 px-5 lg:pl-10 lg:pr-2 lg:pt-10 lg:max-w-[50%] flex flex-col h-full group-even:lg:ms-[19rem]">
        <h3 className="text-2xl font-semibold dark:text-gray-300">
          {project.title}
        </h3>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-200">
          {project.description}
        </p>
        <ul className="flex gap-2 items-center justify-center flex-wrap mt-2 lg:mt-auto">
          {project.tags.map((tag) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        className="hidden lg:block hover:-translate-y-5 lg:absolute lg:top-8 lg:group-hover:-translate-x-5 lg:group-hover:-rotate-[5deg] lg:group-even:group-hover:rotate-[5deg] lg:group-hover:scale-105 lg:group-even:group-hover:translate-x-5 transition lg:-right-40 rounded-t-lg lg:w-[28.25rem] lg:h-[28.25rem] w-full  shadow-lg lg:group-even:right-[initial] lg:group-even:-left-[10rem]"
        src={project.imageUrl}
        alt={project.title}
        width={500}
        height={500}
        quality={100}
      />
    </motion.article>
  );
}

export default ProjectCard;
