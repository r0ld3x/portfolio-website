"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  href,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useSpring(
    useTransform(scrollYProgress, [0, 1], [0.8, 1]),
    {
      stiffness: 120,
      damping: 20,
    }
  );
  const opacityProgess = useSpring(
    useTransform(scrollYProgress, [0, 1], [0.6, 1]),
    {
      stiffness: 100,
      damping: 20,
    }
  );

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    window.open(href, "_blank");
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <motion.section
        layout
        className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 cursor-pointer"
        onClick={handleClick}
        whileHover={{
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <motion.li
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                }}
                className="dark:bg-black/[0.7] bg-white/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-gray-700 rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </motion.li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          width={180}
          height={200}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl cursor-pointer
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </motion.section>
    </motion.div>
  );
}
