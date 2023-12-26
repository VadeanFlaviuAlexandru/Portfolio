"use client";

import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SectionHeading from "../generic-components/section-heading";
import SubmitBtn from "../generic-components/submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="font-mulish mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me ☕</SectionHeading>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white
          dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all
          dark:outline-none placeholder:text-black"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80
           dark:focus:bg-opacity-100 transition-all dark:outline-none placeholder:text-black"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>

      <p className="text-black mt-10 dark:text-white">
        If there's a problem, you can{" "}
        <span
          className="font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text
         text-transparent"
        >
          contact me directly
        </span>{" "}
        at <br />
        <a className="underline" href="mailto:vadean.flaviu.alex@gmail.com">
          vadean.flaviu.alex@gmail.com
        </a>{" "}
        or{" "}
        <a className="underline" href="tel:+40 0757-371-684">
          +40 0757-371-684
        </a>{" "}
      </p>
    </motion.section>
  );
}
