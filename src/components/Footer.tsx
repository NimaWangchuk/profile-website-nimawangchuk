
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-darker py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold font-heading">
              Nima<span className="text-portfolio-accent">.</span>
            </a>
            <p className="text-sm text-gray-400 mt-2">
              Creating modern web experiences.
            </p>
          </div>
          
          <nav className="flex flex-wrap gap-6 mb-6 md:mb-0 justify-center">
            <a href="#home" className="text-sm text-gray-400 hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">
              Skills
            </a>
            <a href="#portfolio" className="text-sm text-gray-400 hover:text-white transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Nima Wangchuk. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
