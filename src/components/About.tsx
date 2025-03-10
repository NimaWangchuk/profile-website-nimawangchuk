
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-portfolio-darker">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-full h-[450px] bg-gray-700 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Nima Wangchuk" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 border-8 border-portfolio-accent rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="section-title">About Me</h2>
            <p className="mb-6">
              I am a passionate Frontend Developer and UX Designer with over 5 years of 
              experience creating engaging digital experiences. My journey in web development 
              started when I was in college, and I've been hooked ever since.
            </p>
            <p className="mb-6">
              I specialize in building modern, responsive websites using the latest technologies 
              like React, TypeScript, and Tailwind CSS. I'm committed to creating intuitive, 
              user-friendly interfaces that help businesses connect with their audience.
            </p>
            <p className="mb-8">
              When I'm not coding, you can find me hiking in the mountains, reading books on 
              design principles, or exploring new coffee shops in my city. I believe in 
              continuous learning and always stay updated with the latest industry trends.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <ul className="space-y-3">
                  <li>
                    <p className="font-medium text-white">Bachelor in Computer Science</p>
                    <p className="text-sm text-gray-400">Stanford University, 2016-2020</p>
                  </li>
                  <li>
                    <p className="font-medium text-white">UX Design Certification</p>
                    <p className="text-sm text-gray-400">Google, 2021</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Experience</h3>
                <ul className="space-y-3">
                  <li>
                    <p className="font-medium text-white">Frontend Developer</p>
                    <p className="text-sm text-gray-400">TechStart Inc, 2020-Present</p>
                  </li>
                  <li>
                    <p className="font-medium text-white">UX Designer</p>
                    <p className="text-sm text-gray-400">DesignHub, 2018-2020</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
