"use client";
import useActiveSection from "@/hooks/useActiveSection.hook";
import SectionHeading from "./SectionHeading";

import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "react-toastify";

import SubmitBtn from "./SubmitBtn";
type Props = {};

function Contact({}: Props) {
  const ref = useActiveSection("Contact", 0.5);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      viewport={{ once: true }}
      ref={ref}
      id="contact"
      className="relative pb-28 max-w-[50rem] text-center scroll-mt-28 w-[min(100%,38rem)]"
    >
      <div
        className="bg-[#e2e9fb] dark:bg-[#676394] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
          sm:w-[68.75rem]"
      ></div>
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 dark:text-gray-300">
        Please contact me directly at{" "}
        <a
          href="mailto:abdallah.nassim.meridja@gmail.com"
          className="font-bold"
        >
          abdallah.nassim.meridja@gmail.com
        </a>{" "}
        or through the following form.
      </p>
      <form
        action={async (formData: FormData) => {
          try {
            await sendEmail(formData);
            toast.success(
              "Message sent successfully, we will get back to you ASAP 😊"
            );
          } catch (err) {
            toast.error((err as Error).message);
          }
        }}
        className="mt-10 gap-2 flex flex-col"
      >
        <input
          className="h-14 rounded-lg border-2 p-2 border-black/[0.1] hover:border-black transition dark:bg-slate-900"
          type="email"
          required
          maxLength={500}
          placeholder="Email"
          name="senderEmail"
        />
        <textarea
          className="rounded-lg border-2 p-2 border-black/[0.1] hover:border-black transition dark:bg-slate-900"
          name="message"
          required
          maxLength={5000}
          placeholder="Write your message here..."
          id="message"
          rows={10}
        ></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

export default Contact;
