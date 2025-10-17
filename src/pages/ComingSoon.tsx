import React from "react";
import { motion } from "framer-motion";

const ComingSoon: React.FC = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 bg-black text-white">
      <div className="text-center max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-light bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent"
        >
          Coming Soon
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-4 text-sm sm:text-base text-white/70"
        >
          This page is under active development. Please check back later.
        </motion.p>
      </div>
    </section>
  );
};

export default ComingSoon;


