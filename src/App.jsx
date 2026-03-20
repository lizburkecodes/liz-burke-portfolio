import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="site">
      <header className="top-bar">
        <div className="brand">
          <h1>Liz Burke</h1>
          <p className="tagline">FULL-STACK SOFTWARE ENGINEER</p>
        </div>

        <nav className="site-nav">
          <Link to="/about">About</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <a
            href="https://liz-burke-chi.medium.com/"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
        </nav>
      </header>

      <div className="site-shell">
        <main className="content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App