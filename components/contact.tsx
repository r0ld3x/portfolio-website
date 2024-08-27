"use client";

import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const inputVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <motion.p
        className="text-gray-700 -mt-6 dark:text-white/80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Please contact me directly at{" "}
        <a
          className="underline text-blue-600 dark:text-blue-400"
          href="mailto:roldexstark@gmail.com"
        >
          roldexstark@gmail.com
        </a>{" "}
        or through this form.
      </motion.p>

      <motion.form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.input
          className="h-14 px-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-200 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none focus:ring-2 focus:ring-blue-500"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          variants={inputVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.textarea
          className="h-52 my-3 rounded-lg border border-gray-300 dark:border-gray-600 p-4 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-200 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none focus:ring-2 focus:ring-blue-500"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          variants={inputVariants}
          initial="hidden"
          animate="visible"
        />
        <SubmitBtn />
      </motion.form>
    </motion.section>
  );
}
