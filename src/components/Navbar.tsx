
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionId = section.getAttribute('id') || '';
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-portfolio-darker py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-heading text-white">
          Nima<span className="text-portfolio-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          <button 
            onClick={() => scrollToSection('home')} 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')} 
            className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
          >
            Portfolio
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contact
          </button>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-portfolio-darker py-4 px-4 absolute w-full">
          <div className="flex flex-col space-y-3">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''} text-left`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''} text-left`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''} text-left`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''} text-left`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''} text-left`}
            >
              Contact
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
