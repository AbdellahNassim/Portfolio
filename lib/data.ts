import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import simpleAuth from "../public/projects/SimpleAuth.png";
import flappyBird from "../public/projects/FlappyBirdNeuoEvolution.png";
import studybuddy from "../public/projects/studybud.png";
import inflowblog from "../public/projects/Inflowblog.png";
import flaskChatApp from "../public/projects/FlaskChatApp.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from ESI Algiers",
    location: "Algiers, Algeria",
    description:
      "I graduated after 5 years of Engineering curriculum with a Master's and Engineer degree in Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2022",
  },
  {
    title: "Full-Stack Engineer",
    location: "CodeLabsAcademy, Remote, Algiers",
    description:
      "I worked as a Full-Stack Engineer Part-Time for 7 months. I worked on multiple projects using React, Nuxt.js, TypeScript, Tailwind, Express and MongoDB.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Research & Development Internship",
    location: "La Rochelle University, France",
    description:
      "I worked as a Research Engineer intern for 1 year. I worked on my graduation project around Intent-based networking systems, using React, Golang, Python, TensorFlow and Kubernetes.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2022",
  },
  {
    title: "System's Engineer",
    location: "Namla, Remote, Algiers",
    description:
      "I worked as a System's Engineer for 4 months. I worked on building controller services for the Namla edge platform using Golang and Kubernetes.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Engineer",
    location: "Naseej, Remote, Algiers",
    description:
      "I worked as a Full-Stack Engineer for 8 months. I worked on building the Student Admission Portal as well as Student Engagement Platform using React, React Native, Python Frappe and Azure",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Freelance Engineer",
    location: "Algiers, Algeria",
    description:
      "I'm now a full-stack engineer working as a freelancer. My stack includes React, Next.js, Nest.js, TypeScript, Tailwind, and MongoDB, I also work as a Machine Learning freelancer using Tensorflow and Pytorch. I also work as an Instructor in both Full-Stack Development and Machine Learning. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Flask/SocketIO Chat app",
    description:
      "This is a learning project where I built a real-time chat application using Flask, SocketIO and SQLite. Users can create and join rooms and chat about their interests",
    tags: ["Python", "Flask", "SocketIO", "SQLite"],
    imageUrl: flaskChatApp,
    githubUrl: "https://github.com/AbdellahNassim/flask-socketio-chat",
    demoLink: null,
  },

  {
    title: "Neuroevolutionnary Flappy Bird",
    description:
      "This is a learning project to learn the neat-ai library, the population of flappy bird play the game and evolve to be better at it.",
    tags: ["Python", "Tflearn", "Neat-AI"],
    imageUrl: flappyBird,
    githubUrl: "https://github.com/AbdellahNassim/flappy_bird_neat_ai",
    demoLink: null,
  },
  {
    title: "Inflow Blog",
    description:
      "My personal technical blog around computer science. Users can connect and see my blogs and comment on them. Built with Next.js, Sanity CMS, Firebase, NextAuth and deployed on Vercel",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Sanity",
      "Vercel",
      "Firebase",
      "NextAuth",
    ],
    imageUrl: inflowblog,
    demoLink: "https://inflowblog.vercel.app/",
    githubUrl: null,
  },
  {
    title: "Study buddy App",
    description:
      "A django app for room discussions, users can register and login as well as create rooms, topics, message and chat about their interests.",
    tags: ["Django", "Django Rest Framework", "PostgreSQL"],
    imageUrl: studybuddy,
    githubUrl: "https://github.com/AbdellahNassim/django_studybuddy",
    demoLink: null,
  },
  {
    title: "MERN Simple Auth",
    description:
      "A boilerplate application for developers to use in order to implement Authentication and http-only tokens as well as Authorization, serves as a basis for more advanced projects",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    imageUrl: simpleAuth,
    githubUrl: "https://github.com/AbdellahNassim/express-jwt-auth",
    demoLink: null,
  },
] as const;

export const skillsData = [
  { name: "HTML", img: "/skills/html-1.svg" },
  { name: "CSS", img: "/skills/css-3.svg" },
  { name: "JavaScript", img: "/skills/logo-javascript.svg" },
  { name: "TypeScript", img: "/skills/typescript.svg" },
  { name: "Vue", img: "/skills/vue-9.svg" },
  { name: "Nuxt.js", img: "/skills/nuxt-2.svg" },
  { name: "React", img: "/skills/react-2.svg" },
  { name: "Next.js", img: "/skills/next-js.svg" },
  { name: "Flutter", img: "/skills/flutter.svg" },
  { name: "React Native", img: "/skills/expo-1.svg" },
  { name: "Express", img: "/skills/express-109.svg" },
  { name: "Nest.js", img: "/skills/nestjs.svg" },
  { name: "Flask", img: "/skills/flask.svg" },
  { name: "Socket IO", img: "/skills/socket-io.svg" },
  { name: "Node.js", img: "/skills/nodejs-icon.svg" },
  { name: "Electron.js", img: "/skills/electron-1.svg" },
  { name: "Git", img: "/skills/git-icon.svg" },
  { name: "Tailwind", img: "/skills/tailwindcss.svg" },
  { name: "Prisma", img: "/skills/prisma-3.svg" },
  { name: "MongoDB", img: "/skills/mongodb-icon-1.svg" },
  { name: "Redux", img: "/skills/redux.svg" },
  { name: "GraphQL", img: "/skills/graphql-logo-2.svg" },
  { name: "Apollo", img: "/skills/apollo-graphql-1.svg" },

  { name: "PostgreSQL", img: "/skills/postgresql.svg" },
  { name: "SQLite", img: "/skills/sqlite.svg" },
  { name: "Firebase", img: "/skills/firebase-1.svg" },
  { name: "Python", img: "/skills/python-5.svg" },
  { name: "Django", img: "/skills/django.svg" },
  { name: "Framer Motion", img: "/skills/framer-motion.svg" },
  { name: "Golang", img: "/skills/go-6.svg" },
  { name: "TensorFlow", img: "/skills/tensorflow-2.svg" },
  { name: "Pytorch", img: "/skills/pytorch-2.svg" },
  { name: "AWS", img: "/skills/aws-2.svg" },
  { name: "GCP", img: "/skills/google-cloud-1.svg" },
  { name: "Azure", img: "/skills/azure-2.svg" },
] as const;
