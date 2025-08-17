
import profile from '../assets/my profile pic.png';
import '../App.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I am Thirumalesh from Kurnool, currently pursuing B.Tech in Electronics and Communication Engineering. 
              I am deeply interested in learning new technologies, building websites, and exploring AI. 
              My career goals include starting a startup, innovating impactful solutions, and working at Google.
            </p>
            
            <h3>Educational Background</h3>
            <ul>
              <li>
                <strong>B.Tech in ECE</strong> - Madanapalle Institute of Technology and Sciences, Graduation Year: 2027
              </li>
            </ul>
          </div>
          
          <div className="about-image">
            <img src={profile} alt="Thirumalesh" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;