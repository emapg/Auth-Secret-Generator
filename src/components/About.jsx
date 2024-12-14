import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-white text-gray-800 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p className="text-lg max-w-2xl mx-auto">
          The **Auth Secret Generator** helps you easily generate secure secrets for your Next.js applications. Whether you're building a login system or handling API authentication, this tool ensures you have strong, secure tokens at your fingertips.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
