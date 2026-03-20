function Projects() {
  return (
    <div className="content-page">
      <h2>Projects</h2>

      <div className="project-item">
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

        <p className="project-links">
          <a
            href="https://github.com/lizburkecodes/little-free-finder-frontend"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Code
          </a>{' '}
          /{' '}
          <a
            href="https://github.com/lizburkecodes/little-free-finder-backend"
            target="_blank"
            rel="noreferrer"
          >
            Backend Code
          </a>
        </p>
      </div>
    </div>
  )
}

export default Projects