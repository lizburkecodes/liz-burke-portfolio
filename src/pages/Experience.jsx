function Experience() {
  return (
    <div className="content-page">
      <h2>Experience</h2>

      <h3>Software Engineer — Stax Payments</h3>

      <ul>
        <li>
          Built merchant-facing features used to configure payment behavior and account settings
          for enterprise clients
        </li>
        <li>
          Partnered with internal support teams to investigate issues and resolve
          merchant-impacting problems
        </li>
        <li>
          Developed backend services in Node.js and AWS Lambda to support payment processing
          and pricing logic across merchant systems
        </li>
        <li>
          Managed settlement and configuration data using DynamoDB and Amazon S3 to support
          processing and reporting workflows
        </li>
        <li>
          Created and maintained automated test coverage with Jest and Cypress to ensure
          feature reliability and reduce regressions
        </li>
        <li>
          Handled production and on-call support using Datadog, Sentry, and OpsGenie,
          investigating and resolving incidents across payment systems
        </li>
        <li>
          Owned biweekly production deployments for CardX by Stax, communicating releases
          and monitoring system stability post-deployment
        </li>
      </ul>

      <h3>Key Projects & Impact</h3>

      <div className="project-item">
        <h4>CardX Portal: Self Service Console</h4>
        <p>
          Built a self-service configuration interface that allowed support teams to update
          merchant account settings stored in DynamoDB. Used a recursive React component to
          safely render configuration options while restricting developer-only settings,
          reducing routine requests to engineering teams.
        </p>
      </div>

      <div className="project-item">
        <h4>Pricing Technology API: BIN Data Pipeline</h4>
        <p>
          Built a pipeline to ingest and process bank settlement BIN data, aggregating card
          and product information across ranges and reconciling inconsistencies that affected
          how transactions were classified in the Pricing API.
        </p>
      </div>

      <div className="project-item">
        <h4>BlockChyp Gateway Integration</h4>
        <p>
          Integration of BlockChyp payment gateway into CardX by Stax. Mapped 
          request/response data between systems and implemented end-to-end payment 
          transaction flows, debugging issues to ensure reliable processing.
        </p>
      </div>

      <h3>Skills</h3>
      <p>
        React, Vue, Node.js, TypeScript, JavaScript, AWS (Lambda, S3, SQS), MongoDB,
        DynamoDB, SQL, REST APIs, Jest, Cypress, Git
      </p>
    </div>
  )
}

export default Experience