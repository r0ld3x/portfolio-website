"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-12 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm an 18-year-old student who's all about{" "}
        <span className="font-semibold">gaming</span>,{" "}
        <span className="font-semibold">coding</span>, and{" "}
        <span className="font-semibold">exploring our beautiful planet</span>.
        I'm learning <span className="font-semibold">Flutter</span> for making
        cross platform apps, love <span className="font-semibold">Python</span>{" "}
        for its versatility, and enjoy using{" "}
        <span className="font-semibold">Next.js</span> for creating dynamic
        websites. I also have a keen interest in space. I'm fascinated by the{" "}
        cosmos, from stars to planets and beyond. Exploring space and learning
        about its mysteries is something that truly excites me.{" "}
        <span className="font-semibold">Spreading Positivity</span> :)
      </p>
    </motion.section>
  );
}
