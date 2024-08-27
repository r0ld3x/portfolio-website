"use client";

import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import SectionHeading from "./section-heading";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      ease: "easeOut",
    },
  }),
  hidden: {
    opacity: 0,
    y: 20,
    rotate: -10,
    skewY: -5,
    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    skewY: 0,
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
  },
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 0.8,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      controls.start("visible");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[60rem] mx-auto scroll-mt-28 text-center sm:mb-40 px-4"
    >
      <SectionHeading>My Skills</SectionHeading>
      <motion.ul
        className="flex flex-wrap justify-center gap-4 text-lg text-gray-800 dark:text-white/80"
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-gradient-to-r from-green-400 to-blue-500 shadow-lg rounded-xl px-6 py-4 text-white dark:from-blue-600 dark:to-indigo-700 transform transition-all ease-in-out duration-300 hover:scale-105 hover:shadow-2xl dark:bg-opacity-80"
            key={index}
            variants={fadeInAnimationVariants}
            custom={index}
            whileHover={{
              scale: 1.1,
              rotate: 3,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div whileHover={pulseAnimation}>{skill}</motion.div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
