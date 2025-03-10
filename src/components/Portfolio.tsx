
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'A fully responsive e-commerce platform built with React and Node.js.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 2,
      title: 'Portfolio Design',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'A minimalist portfolio design for photographers and visual artists.',
      technologies: ['Figma', 'Adobe XD', 'Illustrator'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 3,
      title: 'Task Management App',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'A task management application with drag-and-drop functionality.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 4,
      title: 'Restaurant Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      description: 'A modern website for a local restaurant with online ordering.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 5,
      title: 'Mobile App UI',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'UI/UX design for a fitness tracking mobile application.',
      technologies: ['Figma', 'Sketch', 'Prototyping'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'A weather dashboard that displays current and forecasted weather data.',
      technologies: ['React', 'TypeScript', 'Weather API'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-portfolio-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">My Portfolio</h2>
          <p className="max-w-2xl mx-auto mt-6">
            Here are some of my recent projects. Each one was carefully crafted to meet specific client needs and solve real-world problems.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              className={`px-4 py-2 rounded-full ${activeFilter === 'all' ? 'bg-portfolio-accent text-white' : 'bg-portfolio-dark text-gray-300'}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${activeFilter === 'web' ? 'bg-portfolio-accent text-white' : 'bg-portfolio-dark text-gray-300'}`}
              onClick={() => setActiveFilter('web')}
            >
              Web Development
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${activeFilter === 'design' ? 'bg-portfolio-accent text-white' : 'bg-portfolio-dark text-gray-300'}`}
              onClick={() => setActiveFilter('design')}
            >
              Design
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${activeFilter === 'app' ? 'bg-portfolio-accent text-white' : 'bg-portfolio-dark text-gray-300'}`}
              onClick={() => setActiveFilter('app')}
            >
              Applications
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-card group">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-portfolio-accent/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-portfolio-accent p-3 rounded-full hover:bg-gray-200 transition-colors"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-portfolio-accent p-3 rounded-full hover:bg-gray-200 transition-colors"
                      aria-label={`View GitHub repository of ${project.title}`}
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-portfolio-dark text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
