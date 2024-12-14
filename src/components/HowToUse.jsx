import React from "react";
import { motion } from "framer-motion";
import { FiSettings, FiClipboard, FiKey } from "react-icons/fi";

const steps = [
  {
    icon: <FiSettings size={40} className="text-purple-600" />,
    title: "Step 1",
    description: "Set the desired secret length using the slider.",
  },
  {
    icon: <FiKey size={40} className="text-blue-600" />,
    title: "Step 2",
    description: "Click on 'Generate Secret' to create a new token.",
  },
  {
    icon: <FiClipboard size={40} className="text-green-600" />,
    title: "Step 3",
    description: "Copy the generated secret to your clipboard and use it in your app.",
  },
];

const HowToUse = () => {
  return (
    <section id="how-to-use" className="bg-white py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8">How to Use</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowToUse;
