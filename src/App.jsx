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
        <p>Passionate about web development and data science.</p>
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
      <section id="projects" className="projects-section">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I’ve built using modern technologies 
          in full-stack development and machine learning.
        </p>

        <div className="projects-container">

          {/* Project 1 */}
          <div className="project-card">
            <h3>🛒 Mini E-commerce Platform</h3>
            <p>
              A full-stack e-commerce application built using 
              <strong> React.js </strong> for the frontend and 
              <strong> Django REST Framework </strong> for the backend.
              Includes authentication, product listing, cart system,
              and API integration.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>Django</span>
              <span>REST API</span>
            </div>

            <a
              href="https://github.com/Aastha5799/mini_e-commerce_web_app.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              🔗 View Code
            </a>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h3>📰 Fake News Detection System</h3>
            <p>
              A machine learning model that detects fake news using 
              NLP techniques. Implemented data preprocessing, 
              TF-IDF vectorization, and classification models 
              to improve prediction accuracy.
            </p>

            <div className="tech-stack">
              <span>Python</span>
              <span>Scikit-Learn</span>
              <span>NLP</span>
            </div>

            <a
              href="https://github.com/Aastha5799/Fake_news_detection_datascience.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              🔗 View Code
            </a>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <h3>✅ To-Do List Application</h3>
            <p>
              A task management application built with Django. 
              Supports CRUD operations, authentication, 
              and database integration with a clean UI.
            </p>

            <div className="tech-stack">
              <span>Django</span>
              <span>SQLite</span>
              <span>CRUD</span>
            </div>

            <a
              href="https://github.com/Aastha5799/TO-DO-LIST_DJANGO_PROJECT.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              🔗 View Code
            </a>
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