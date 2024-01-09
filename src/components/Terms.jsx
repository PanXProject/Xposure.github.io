import { useState } from "react";
import { motion } from "framer-motion";

export const Terms = () => {
  // ... other code

  return (
    <section
      className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16 pt-20"
      id="tos"
    >
      <div className="w-full lg:w-1/2 mb-12 lg:mb-0 flex-col">
        {/* ... removed elements */}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className=" text-white text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold tracking-wide text-center mt-16">
            Terms of Service
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="text-customGrayText text-base lg:text-lg xl:text-xl sm:text-base px-4 lg:px-24 mt-8">
            {/* Your privacy policy text here */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};