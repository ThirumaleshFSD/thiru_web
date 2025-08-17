import React from 'react';
import '../App.css';

const Experience = () => {
  const experiences = [
    {
      title: "MERN Stack Web Developer Intern",
      company: "Code Alpha",
      period: "June–Aug 2025",
      location: "Online",
      responsibilities: [
        "Built user-facing features using MERN stack",
        "Designed RESTful APIs and worked on responsive UI with React.js",
        "Managed databases with MongoDB, used Git for version control"
      ]
    },
    {
      title: "Cybersecurity Intern",
      company: "Cisco Networking Academy",
      period: "June–Aug 2025",
      location: "Online",
      responsibilities: [
        "Analyzed network traffic, identified threats, and performed vulnerability assessments",
        "Participated in incident response drills and policy development",
        "Hands-on experience with firewalls, IDS, and SIEM tools"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-title">
          <h2>Work Experience</h2>
        </div>
        
        <div className="experience-container">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3>{exp.title}</h3>
                <div className="experience-meta">
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                  <span className="location">{exp.location}</span>
                </div>
              </div>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;