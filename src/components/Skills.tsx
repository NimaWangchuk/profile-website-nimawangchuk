
import React from 'react';
import { Code, Laptop, PenTool, FileCode, Lightbulb, Database } from 'lucide-react';

const Skills = () => {
  const skills = [
    { 
      id: 1, 
      title: 'Web Development', 
      icon: <Code size={32} className="text-portfolio-accent" />,
      description: 'Building responsive and modern websites using HTML, CSS, and JavaScript.'
    },
    { 
      id: 2, 
      title: 'React & TypeScript', 
      icon: <FileCode size={32} className="text-portfolio-accent" />,
      description: 'Creating robust web applications with React and TypeScript.'
    },
    { 
      id: 3, 
      title: 'UI/UX Design', 
      icon: <PenTool size={32} className="text-portfolio-accent" />,
      description: 'Designing intuitive and beautiful user interfaces and experiences.'
    },
    { 
      id: 4, 
      title: 'Responsive Design', 
      icon: <Laptop size={32} className="text-portfolio-accent" />,
      description: 'Ensuring websites look great on all devices, from mobile to desktop.'
    },
    { 
      id: 5, 
      title: 'Creative Problem Solving', 
      icon: <Lightbulb size={32} className="text-portfolio-accent" />,
      description: 'Finding elegant solutions to complex problems.'
    },
    { 
      id: 6, 
      title: 'Backend Integration', 
      icon: <Database size={32} className="text-portfolio-accent" />,
      description: 'Connecting frontend applications with backend services and APIs.'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">My Skills</h2>
          <p className="max-w-2xl mx-auto mt-6">
            Here are some of the key skills and technologies I specialize in. I'm constantly learning and adding new tools to my repertoire.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-item">
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-medium mb-2">{skill.title}</h3>
              <p className="text-center text-gray-400 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Proficiencies</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl mb-4 font-medium text-portfolio-accent">Frontend</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  <span>HTML5 & CSS3</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  <span>JavaScript (ES6+)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  <span>React.js</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  <span>TypeScript</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  <span>Tailwind CSS</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl mb-4 font-medium text-portfolio-accent">Design</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  <span>Figma</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  <span>Adobe XD</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  <span>Photoshop</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  <span>Illustrator</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  <span>Wireframing</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl mb-4 font-medium text-portfolio-accent">Backend</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  <span>Node.js</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  <span>Express</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  <span>RESTful APIs</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  <span>MongoDB</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  <span>Firebase</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl mb-4 font-medium text-portfolio-accent">Tools</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  <span>Git & GitHub</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  <span>VS Code</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  <span>npm/yarn</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  <span>Webpack</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-2"></span>
                  <span>Vercel/Netlify</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
