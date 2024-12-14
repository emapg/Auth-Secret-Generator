import React, { useState } from "react";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";
import { FiClipboard, FiTrash2 } from "react-icons/fi";
import { BsCheck } from "react-icons/bs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Features from "./components/Features";
import HowToUse from "./components/HowToUse";

const App = () => {
  const [secret, setSecret] = useState("");
  const [copied, setCopied] = useState(false);
  const [secretLength, setSecretLength] = useState(32);
  const [history, setHistory] = useState([]);

  // Generate a new secret
  const generateSecret = () => {
    const newSecret = nanoid(secretLength);
    setSecret(newSecret);
    setHistory([newSecret, ...history.slice(0, 9)]); // Keep last 10 secrets
    setCopied(false);
  };

  // Copy secret to clipboard
  const copyToClipboard = () => {
    if (secret) {
      navigator.clipboard.writeText(secret);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    }
  };

  // Clear secret history
  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <>
      {/* Main Container */}
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 w-full px-4 sm:w-3/4 md:w-1/2 lg:w-1/3"
        >
          {/* Secret Length Input */}
          <div className="mb-4">
            <label
              htmlFor="secret-length"
              className="block text-gray-300 mb-2 text-sm font-semibold"
            >
              Secret Length: {secretLength}
            </label>
            <input
              id="secret-length"
              type="range"
              min="16"
              max="64"
              value={secretLength}
              onChange={(e) => setSecretLength(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Generate Button */}
          <button
            onClick={generateSecret}
            className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-lg font-semibold transition shadow-lg"
          >
            Generate Secret
          </button>

          {/* Display Secret */}
          {secret && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mt-6 bg-white text-gray-800 rounded-lg shadow-md p-4"
            >
              <label
                htmlFor="generated-secret"
                className="font-semibold text-sm text-gray-600"
              >
                Generated Secret:
              </label>
              <textarea
                id="generated-secret"
                value={secret || ""}
                readOnly
                className="w-full h-24 border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none resize-none"
              ></textarea>
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={copyToClipboard}
                  className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg transition"
                  aria-label="Copy to Clipboard"
                >
                  {copied ? (
                    <>
                      <BsCheck className="mr-2" /> Copied!
                    </>
                  ) : (
                    <>
                      <FiClipboard className="mr-2" /> Copy to Clipboard
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}

          {/* Secret History */}
          {history.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 bg-white text-gray-800 rounded-lg shadow-md p-4"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Secret History</h3>
                <button
                  onClick={clearHistory}
                  className="flex items-center text-red-600 hover:text-red-800"
                  aria-label="Clear History"
                >
                  <FiTrash2 className="mr-2" /> Clear History
                </button>
              </div>
              <ul className="space-y-2 text-sm">
                {history.map((item, index) => (
                  <li
                    key={index}
                    className="bg-gray-100 rounded-lg p-2 flex justify-between items-center"
                  >
                    <span className="truncate">{item}</span>
                    <button
                      onClick={() => navigator.clipboard.writeText(item)}
                      className="text-blue-600 hover:text-blue-800"
                      aria-label={`Copy secret ${index + 1}`}
                    >
                      <FiClipboard />
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.main>
      </div>

      {/* Additional Sections */}
      <About />
      <Features />
      <HowToUse />
      <Footer />
    </>
  );
};

export default App;
