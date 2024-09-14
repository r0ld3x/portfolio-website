"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const wordVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-12 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial="hidden"
      animate="visible"
      variants={textVariants}
      whileHover={{ scale: 1.02 }}
      // whileTap={{ scale: 0.98 }}
      style={{
        opacity: 1,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      viewport={{ once: true }}
    >
      <SectionHeading>About Me</SectionHeading>
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-lg leading-relaxed text-zinc-300">
          <span className="text-blue-500 font-medium">At 19,</span> my coding
          journey began as a fun experiment when I was 16, and now it has
          evolved into my passion and profession. Currently in{" "}
          <span className="font-semibold">12th grade</span>, I’m constantly
          learning new technologies and working to improve myself, my studies,
          and my code every day. I started coding in{" "}
          <span className="text-blue-500 font-medium">2016</span>, and three
          years later, expanded into full-stack development, including Python.
        </p>
        <p className="text-lg leading-relaxed text-zinc-300 mt-4">
          Beyond coding, I’m an{" "}
          <span className="font-semibold">astrophile</span> and{" "}
          <span className="font-semibold">bibliophile</span>, always aiming to
          be a better human being. I’m dedicated to continually honing my
          skills, pushing my limits, and becoming better than I was before. I
          will keep striving to improve myself for a prosperous and bright
          future, focusing on personal growth, productivity, and especially my
          coding skills.
        </p>
      </div>

      {/* <motion.p
        className="mt-6 text-lg leading-relaxed sm:text-xl md:text-2xl max-w-3xl mx-auto px-4"
        variants={textVariants}
      >
        At 19, my coding journey began as a fun experiment when I was 16, and
        now it has evolved into my passion and profession. Currently in 12th
        grade, I’m constantly learning new technologies and working to improve
        myself, my studies, and my code every day. I started coding in 2016, and
        three years later, expanded into full-stack development, including
        Python. Beyond coding, I’m an astrophile and bibliophile, always aiming
        to be a better human being. I’m dedicated to continually honing my
        skills, pushing my limits, and becoming better than I was before. I will
        keep striving to improve myself for a prosperous and bright future,
        focusing on personal growth, productivity, and especially my coding
        skills.
      </motion.p> */}
    </motion.section>
  );
}
