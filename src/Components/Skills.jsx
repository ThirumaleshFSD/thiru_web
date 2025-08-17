import React from 'react';
import '../App.css';

const Skills = () => {
  const skills = [
    { category: "Programming", items: ["C", "Python", "Java"] },
    { category: "Web Development", items: ["HTML", "CSS", "JavaScript", "React.js", "Express.js", "Node.js", "API handling (Postman)"] },
    { category: "Other Skills", items: ["Cybersecurity basics", "English communication"] }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        
        <div className="skills-container">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3>{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, i) => (
                  <div key={i} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;