import React from "react";
import "./styles.css";          // CSS inside src folder
import profileImg from "./assets/aas.jpg"; // import profile image

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-container">
          <div className="logo">AM</div>
          <h1>Aastha Mainali</h1>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact" className="btn">Contact Me</a></li>
        </ul>
      </nav>

      {/* Hero */}
      
      <header className="hero" id="home">
        <img src={profileImg} alt="Aastha Mainali" className="profile-img" />
        <h1>Hello, I'm <span>Aastha Mainali</span></h1>
        <p>Computer Engineering Student</p>
        <p>Frontend Developer & Data Science Enthusiast</p>
        <a href="#contact" className="btn">Contact Me</a>
      </header>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
          <p>
            I am a Computer Engineering student at <strong> Himalaya Engineering College</strong>. I have a strong interest in web development 
            and enjoy building clean, responsive, and user-friendly interfaces. My technical skills 
            include <strong>HTML, CSS, JavaScript, and React</strong>, along with basic knowledge of  
            <strong> Python</strong>. I am particularly interested in the field of 
            <strong> Data Science and Machine Learning</strong> and enjoy exploring how data and 
            technology can be used to solve real-world problems. I am a motivated learner who is 
            always eager to improve skills, explore new technologies, and grow as a developer.
          </p>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Python</span>
          <span>Data Science</span>
          <span>React</span>
          <span>Django</span>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <h3>Mini ecommerce Website</h3>
            <p>A simple and responsive mini ecommerce website built with React as frontend and Django as backend components.</p>
          </div>
          <div className="project-card">
            <h3>False news detection</h3>
            <p>A machine learning project to detect false news- data science.</p>
          </div>
          <div className="project-card">
            <h3>To-do List</h3>
            <p>A simple and responsive to-do list application built with Django.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-page">
        <h2>Contact</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="6" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Aastha Mainali</p>
      </footer>
    </>
  );
}

export default App;