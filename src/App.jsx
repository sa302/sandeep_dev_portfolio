import "./App.css";

const skills = [
  { name: "HTML5", description: "Semantic and accessible web structure" },
  { name: "CSS3", description: "Responsive layouts and modern styling" },
  { name: "JavaScript", description: "Interactive functionality and ES6+" },
  { name: "React", description: "Reusable components, props and hooks" },
  { name: "Git", description: "Version control and project management" },
  { name: "GitHub", description: "Code repositories and collaboration" },
];

const projects = [
  {
    name: "SmartStore",
    type: "React E-commerce Application",
    description:
      "A responsive shopping application featuring product listings, search, shopping cart functionality and total price calculation.",
    technologies: "React · JavaScript · CSS",
    live: "https://smart-store-silk.vercel.app/",
    github: "https://github.com/sa302/SmartStore",
  },
  {
    name: "To-Do List",
    type: "JavaScript Application",
    description:
      "A task management application that allows users to add and manage tasks, with data saved in local storage.",
    technologies: "JavaScript · HTML · CSS · LocalStorage",
    live: "https://todo-list-app-xi-lovat.vercel.app/",
    github: "https://github.com/sa302/To-do",
  },
  {
    name: "Weather App",
    type: "JavaScript Application",
    description:
      "A weather application that uses an API to retrieve and display weather information for different locations.",
    technologies: "JavaScript · API · HTML · CSS",
    live: "https://weatherappsandeep.vercel.app/",
    github: "https://github.com/sa302/WeatherApp",
  },
];

function App() {
  return (
    <div>
      <nav className="navbar">
        <a href="#home" className="logo">
          Sandeep<span>.</span>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-content">
            <p className="intro">HELLO, I'M SANDEEP</p>
            <h1>
              Building digital
              <br />
              experiences with
              <br />
              <span>React.</span>
            </h1>
            <p className="description">
              I'm a Frontend Developer passionate about creating modern,
              responsive and user-friendly web applications. I enjoy turning
              ideas into functional digital experiences.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                View My Projects
              </a>
              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-circle">
              <span>&lt; / &gt;</span>
            </div>
            <p>Turning ideas into code.</p>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-heading">
            <p>GET TO KNOW ME</p>
            <h2>About Me</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>I'm a Frontend Developer.</h3>
              <p>
                I'm passionate about building modern and user-friendly web
                applications. I enjoy working with React and JavaScript to turn
                ideas into functional digital experiences.
              </p>
              <p>
                I'm continuously improving my development skills through
                practical projects. I'm looking forward to contributing to a
                development team, learning from experienced developers and
                growing my career in frontend development.
              </p>
            </div>
            <div className="about-highlight">
              <h3>My Approach</h3>
              <p>
                Learn continuously. Build practically. Create meaningful digital
                experiences.
              </p>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-heading">
            <p>WHAT I WORK WITH</p>
            <h2>Technical Skills</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.name}>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-heading">
            <p>MY RECENT WORK</p>
            <h2>Featured Projects</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-top">
                  <span className="project-icon">&lt; / &gt;</span>
                  <span className="project-type">{project.type}</span>
                </div>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-tech">{project.technologies}</p>
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo ↗
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-heading">
            <p>LET'S CONNECT</p>
            <h2>Get In Touch</h2>
          </div>
          <p className="contact-description">
            I'm interested in junior frontend developer opportunities and
            connecting with people in the tech industry.
          </p>
          <div className="contact-buttons">
            <a className="primary-btn" href="mailto:sandyatit38@gmail.com">
              Email Me
            </a>
            <a
              className="secondary-btn"
              href="/Sandeep_Kumari_Front_End_Developer_Resume.pdf"
              download="Sandeep_Kumari_Front_End_Developer_Resume.pdf"
            >
              Download My CV
            </a>
          </div>
          <div className="social-links">
            <a href="https://github.com/sa302" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sandeep-kumari-048999196/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Sandeep. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
