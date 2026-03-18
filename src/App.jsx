import './App.css'

function App() {
  return (
    <div className="page">
      <main className="card">
        <h1>Liz Burke</h1>
        <p className="intro">
          Full-stack software engineer with 4+ years of experience building 
          and scaling cloud-native applications in the payments industry.
        </p>

        <section>
          <h2>About</h2>
          <p>
            I build secure, scalable software across frontend and backend systems,
            with experience in React, Vue, Node.js, and AWS Lambda. My background includes 
            merchant-facing tools, payment platforms, internal tooling, testing,
            debugging, and cross-functional collaboration.
          </p>
        </section>

        <section>
          <h2>Projects</h2>
          <ul>
            <li>Little Free Finder — full-stack web app for discovering and managing community "free libraries"</li>
            <li>Project name coming soon</li>
            <li>Project name coming soon</li>
          </ul>
        </section>

        <section>
          <h2>Links</h2>
          <ul>
            <li>
              <a href="https://github.com/lizburkecodes" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/liz-burke-chi/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App