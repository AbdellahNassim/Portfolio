"use client";
import { motion } from "framer-motion";
type Props = {};

function SectionDivider({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      className="bg-gray-200 dark:bg-slate-800 my-24 h-32 w-1 rounded-full hidden sm:block"
    ></motion.div>
  );
}

export default SectionDivider;
