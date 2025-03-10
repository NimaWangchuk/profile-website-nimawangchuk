
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-portfolio-darker opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-portfolio-dark/60 via-portfolio-dark/40 to-portfolio-dark"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-start space-y-6 max-w-3xl animate-fade-in">
          <p className="text-portfolio-accent font-medium">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Nima Wangchuk
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300">
            Frontend Developer & UX Designer
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            I create beautiful, responsive websites with modern technologies
            that help businesses achieve their goals.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#portfolio" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToAbout} 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDownCircle size={36} className="text-portfolio-accent" />
      </button>
    </section>
  );
};

export default Hero;
