import { motion } from "framer-motion";
import type { IScrollReveal } from "../@types";

export default function ScrollReveal({ children }: IScrollReveal) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
