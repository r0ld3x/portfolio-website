"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

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
      <p className="mt-3">
        At <i className="text-blue-500">18</i>, I am a student residing in
        India, aspiring to become a successful software engineer. Passionate
        about space, I am both an astrophile and a coder. My coding journey
        involves proficiency in{" "}
        <strong className="text-[#FFD43B]">Python</strong>,{" "}
        <strong className="text-cyan-500">Next.js</strong>, and{" "}
        <strong className="text-[#AEB2D5]">PHP</strong>. Currently, I am
        exploring the realms of mobile app development with{" "}
        <strong className="text-[#42A5F5]">Flutter</strong> and{" "}
        <strong className="text-[#61DBFB]">React Native</strong>. The vibrant
        world of technology fuels my curiosity and drive. Beyond coding, the
        cosmos beckons me with its mysteries. From the{" "}
        <i className="text-yellow-500">shimmering stars</i> to the enigmatic
        planets, the vast expanse of space captivates my imagination. Exploring
        the wonders of the universe is not just a fascination; it's a thrilling
        journey that fuels my boundless curiosity.{" "}
        <span className="text-[#FF6347]">Spreading positivity</span> is my
        mission, whether it's through writing code, exploring the wonders of the
        universe, or simply sharing inspiration. In every pursuit, I aim to
        create a ripple effect of positivity and curiosity.
      </p>
    </motion.section>
  );
}
