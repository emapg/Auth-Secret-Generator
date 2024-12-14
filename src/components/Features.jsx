import React from "react";
import { FiKey, FiClipboard, FiTrash2 } from "react-icons/fi";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FiKey size={40} className="text-blue-700" />,
    title: "Generate Secure Secrets",
    description: "Create cryptographically strong secrets for secure authentication.",
  },
  {
    icon: <FiClipboard size={40} className="text-green-600" />,
    title: "Copy to Clipboard",
    description: "Easily copy your generated secrets with a single click.",
  },
  {
    icon: <FiTrash2 size={40} className="text-red-600" />,
    title: "Secret History Management",
    description: "Keep track of your generated secrets and clear them when needed.",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-gray-100 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
