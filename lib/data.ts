import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import flutflix from "@/public/flutflix.jpg";
import reactMusicPlayer from "@/public/react-music-player.png";
import textToSpeech from "@/public/text-to-speech.png";
import teraboxDownloader from "@/public/terabox-downloader.png";
import bollyFlix from "@/public/bollyflix.png";
import userver from "@/public/userver.jpg";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "FlutFlix",
    description:
      "I've built this Flutter app to utilizes the TMDB API and display information about movies like trending, top rated & upcoming.",
    tags: ["Flutter", "Dart", "TMDB API"],
    imageUrl: flutflix,
    href: "https://github.com/r0ld3x/flutflix",
  },
  {
    title: "React Music Player",
    description:
      "A Music player which play music with all functional features like play, pause, loop etc.",
    tags: ["React", "TypeScript", "Redux", "Tailwind"],
    imageUrl: reactMusicPlayer,
    href: "https://github.com/r0ld3x/react-music-player",
  },
  {
    title: "Text To Speech",
    description: "This webapp will convert text to voice easliy.",
    tags: [
      "React",
      "Next.js",
      "gTTS",
      "Tailwind",
      "Python",
      "flask",
      "SpeechSynthesis",
    ],
    imageUrl: textToSpeech,
    href: "https://github.com/r0ld3x/text-to-speech",
  },
  {
    title: "Terabox Downloader",
    description:
      "This webapp will download downloadable media files from terabox. just paste the url in the input field and click the download button you will get the link.",
    tags: ["React", "Next.js", "Tailwind", "TeraBox private Api"],
    imageUrl: teraboxDownloader,
    href: "https://github.com/r0ld3x/terabox-app",
  },
  {
    title: "BollyFlix",
    description:
      "I've built this webapp the TMDB API to display information about movies like trending, top rated & upcoming or search for any movie. ",
    tags: ["React", "Next.js", "Tailwind", "TMDB API", "Swiper"],
    imageUrl: bollyFlix,
    href: "https://github.com/r0ld3x/bollyflix",
  },
  {
    title: "Userver",
    description:
      "Userver is a advanced telegram userbot which will handle real account easily. It will help you to manage your telegram account easily.",
    tags: ["Python", "telethon", "mongodb", "redis"],
    imageUrl: userver,
    href: "https://github.com/r0ld3x/userver",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Flutter",
  "PHP",
  "React",
  "Next.js",
  "Node.js",
  "Telegram API",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redis",
  "Express",
  "MySQL",
  "Python",
  "Selenium",
] as const;
