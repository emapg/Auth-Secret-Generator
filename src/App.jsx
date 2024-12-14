import React, { useState } from "react";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";
import { FiClipboard, FiClipboardCheck, FiTrash2 } from "react-icons/fi";

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
    navigator.clipboard.writeText(secret);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  // Clear secret history
  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mt-10 text-center"
      >
        <h1 className="text-4xl font-bold">Next.js Auth Secret Generator</h1>
        <p className="text-lg mt-2 text-gray-200">
          Generate secure secrets for your Next.js apps effortlessly.
        </p>
      </motion.header>

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-10 w-full px-4 md:w-1/2 lg:w-1/3"
      >
        {/* Secret Length Input */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-2 text-sm font-semibold">
            Secret Length: {secretLength}
          </label>
          <input
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
            <label className="font-semibold text-sm text-gray-600">
              Generated Secret:
            </label>
            <textarea
              value={secret}
              readOnly
              className="w-full h-24 border border-gray-300 rounded-lg p-2 mt-2 focus:outline-none resize-none"
            ></textarea>
            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={copyToClipboard}
                className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg transition"
              >
                {copied ? (
                  <>
                    <FiClipboardCheck className="mr-2" /> Copied!
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
                  >
                    <FiClipboard />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.main>

      {/* Footer */}
      <footer className="mt-auto mb-6 text-gray-300 text-sm">
        Built with ❤️ using React, Framer Motion, and Tailwind CSS
      </footer>
    </div>
  );
};

export default App;
