import React from 'react';
import '../App.css';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal website showcasing skills, projects, and background with a clean, responsive UI.",
      technologies: ["React", "CSS", "JavaScript"]
    },
    {
      title: "IoT-Based Home Automation & Prototyping",
      description: "Developed Arduino-based smart lighting and LED control systems, showcasing skills in hardware and circuit design.",
      technologies: ["Arduino", "C++", "Electronics"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;