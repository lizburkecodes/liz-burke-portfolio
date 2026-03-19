import './App.css'

function App() {
  return (
    <div className="page">
      <aside className="side-panel left-panel">
        <img src="/headshot.jpg" alt="Liz Burke" className="headshot" />
        <h1>Liz Burke</h1>
        <p className="intro">
          Full-stack software engineer with 4+ years of experience building payment systems and merchant-facing tools. I specialize in React, Node.js, and solving complex product and integration challenges.
        </p>
      </aside>

      <main className="card">
        <section>
          <h2>About</h2>
          <p>
            I build secure, scalable software across frontend and backend systems, with a focus on usability,
            reliability, and practical business needs.
            My background includes merchant-facing tools, payment platforms, internal tooling, testing,
            debugging, and cross-functional collaboration.
          </p>
        </section>

        <section>
          <h2>What I've Worked On</h2>
          <div className="project">
            <ul className="experience-list">
              <li>Merchant-facing payment and account management tools used by businesses</li>
              <li>Frontend features in React and Vue for customer-facing applications</li>
              <li>Backend services and APIs in Node.js</li>
              <li>Internal tools to improve support workflows and reduce manual effort</li>
              <li>Comprehensive test suites covering frontend and backend systems in production environments</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Skills</h2>
          <div className="skills">
            <span>React</span>
            <span>Vue</span>
            <span>Node.js</span>
            <span>TypeScript</span>
            <span>JavaScript</span>
            <span>AWS (Lambda, S3, SQS)</span>
            <span>MongoDB</span>
            <span>DynamoDB</span>
            <span>SQL</span>
            <span>REST APIs</span>
            <span>Jest</span>
            <span>Cypress</span>
            <span>Git</span>
          </div>
        </section>

        <section>
          <h2>Personal Projects</h2>

          <div className="project">
            <h3>Little Free Finder</h3>

            <p>
              Full-stack web application for discovering and managing community free libraries.
              Users can search by keyword, location, or GPS radius, create and manage their own
              libraries, and add or edit products within them.
            </p>

            <p>
              Built authentication with JWT and refresh tokens, image uploads and suggestions,
              geolocation-based search, and paginated browsing.
            </p>
            <p className="tech">
              Frontend: React • Backend: Node.js, Express • Database: MongoDB
            </p>
            <div className="project-links">
              <a
                href="https://github.com/lizburkecodes/little-free-finder-frontend"
                target="_blank"
                rel="noreferrer"
                className="project-button secondary"
              >
                Frontend Code
              </a>

              <a
                href="https://github.com/lizburkecodes/little-free-finder-backend"
                target="_blank"
                rel="noreferrer"
                className="project-button secondary"
              >
                Backend Code
              </a>
            </div>
          </div>
        </section>
      </main>

      <aside className="side-panel right-panel">
        <section className="contact-panel">
          <h2>Contact</h2>

          <p>
            Feel free to reach out if you'd like to work together or chat about opportunities.
          </p>

          <div className="contact-links">
            <a href="mailto:liz.burke.chi@gmail.com" className="project-button">
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/liz-burke-chi/"
              target="_blank"
              rel="noreferrer"
              className="project-button secondary"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </aside>
    </div>
  )
}

export default App