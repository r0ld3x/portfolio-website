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
      whileTap={{ scale: 0.98 }}
      style={{
        opacity: 1,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      viewport={{ once: true }}
    >
      <SectionHeading>About Me</SectionHeading>
      <motion.p
        className="mt-6 text-lg leading-relaxed sm:text-xl md:text-2xl max-w-3xl mx-auto px-4"
        variants={textVariants}
      >
        Hi, I'm Roldex Stark, a 19-year-old software engineering student from
        India. Passionate about technology and space, I constantly strive to
        expand my knowledge. My skill set includes{" "}
        <motion.strong
          className="text-[#FFD43B] font-semibold"
          variants={wordVariants}
        >
          Python
        </motion.strong>{" "}
        and{" "}
        <motion.strong
          className="text-cyan-500 font-semibold"
          variants={wordVariants}
        >
          JavaScript
        </motion.strong>
        , and I'm currently exploring{" "}
        <motion.strong
          className="text-[#61DBFB] font-semibold"
          variants={wordVariants}
        >
          React Native
        </motion.strong>{" "}
        and{" "}
        <motion.strong
          className="text-[#61DBFB] font-semibold"
          variants={wordVariants}
        >
          Full Stack Development
        </motion.strong>
        . My curiosity takes me from the{" "}
        <motion.i
          className="text-yellow-500 font-semibold"
          variants={wordVariants}
        >
          stars
        </motion.i>{" "}
        to the{" "}
        <motion.i
          className="text-yellow-500 font-semibold"
          variants={wordVariants}
        >
          planets
        </motion.i>{" "}
        , fueling my passion for discovery. Through my work and my journey in
        the cosmos, I aim to spread positivity and inspire others.
      </motion.p>
    </motion.section>
  );
}
