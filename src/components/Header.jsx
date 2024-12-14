import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-700 text-white p-4 shadow-lg sticky top-0 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Auth Secret Generator</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="hover:underline">About</a>
          </li>
          <li>
            <a href="#features" className="hover:underline">Features</a>
          </li>
          <li>
            <a href="#how-to-use" className="hover:underline">How to Use</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
