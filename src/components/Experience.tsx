"use client";
import useActiveSection from "@/hooks/useActiveSection.hook";
import { experiencesData } from "../../lib/data";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
type Props = {};

function Experience({}: Props) {
  const ref = useActiveSection("Experience", 0.1);
  return (
    <section
      ref={ref}
      id="experience"
      className="relative mb-28 max-w-[50rem] text-center  sm:mb-0 scroll-mt-28"
    >
      {/* <div
        className="bg-[#fbe2e3] dark:bg-[#946263] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
          sm:w-[68.75rem]"
      ></div>
      <div
        className="bg-[#d7e9fb] dark:bg-[#676394] -z-10 absolute top-[20rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
          sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
      ></div>
      <div
        className="bg-[#fbe2e3] dark:bg-[#946263] -z-10 absolute top-[40rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
          sm:w-[68.75rem]"
      ></div>
      <div
        className="bg-[#d7e9fb] dark:bg-[#676394] -z-10 absolute top-[60rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
          sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
      ></div> */}
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline animate>
        {experiencesData.map((experience, index) => (
          <VerticalTimelineElement
            visible
            className="vertical-timeline-element--work"
            key={experience.title + index}
            contentStyle={{
              background: "rgba(255,255,255,0.4)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
              border: "1px solid rgba(0,0,0,0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid  #f3f4f6",
            }}
            date={experience.date}
            dateClassName="text-gray-500 dark:text-white mx-2"
            icon={experience.icon}
            iconStyle={{
              background: "white",
              color: "black",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="vertical-timeline-element-title font-semibold capitalize">
              {experience.title}
            </h3>
            <p className="vertical-timeline-element-subtitle font-normal !mt-0">
              {experience.location}
            </p>
            <p className="!mt-0 font-normal text-gray-700 dark:text-gray-300">
              {experience.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
