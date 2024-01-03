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
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

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
      boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
    },
  };

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  };

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      controls.start("visible", { autoplay: true });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <motion.ul
        className="flex flex-wrap justify-center gap-2 text-lg text-gray-800"
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
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            custom={index}
            whileHover={{
              scale: 1.05,
              rotate: 5,
              backgroundColor: "#4CAF50",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              whileHover={pulseAnimation}
              className="w-full h-full text-black dark:text-white/80"
            >
              {skill}
            </motion.div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
