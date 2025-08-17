import React from 'react';
import '../App.css';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Full-stack development including front-end (HTML, CSS, JS, React) and back-end (Node.js, Express). Can deliver from simple landing pages to complex web applications."
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
        </div>
        
        <div className="services-container">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;