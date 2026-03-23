function Experience() {
  return (
    <div className="content-page">

      <h3>Core Strengths</h3>
      <ul className="skills-list">
        <li>API Integrations & Debugging</li>
        <li>System Troubleshooting in Production Environments</li>
        <li>Cross-functional Collaboration (Engineering, Support, Customers)</li>
        <li>Customer-Facing Problem Solving</li>
      </ul>

      <h3>Technical Tools</h3>
      <ul className="skills-list">
        <li><strong>APIs & Testing:</strong> REST APIs, Postman, Insomnia</li>
        <li><strong>Backend:</strong> Node.js, TypeScript</li>
        <li><strong>Cloud:</strong> AWS (Lambda, S3, SQS, IAM)</li>
        <li><strong>Data:</strong> SQL, DynamoDB</li>
        <li><strong>Observability:</strong> Datadog, Sentry, CloudWatch, OpsGenie</li>
        <li><strong>Frontend:</strong> React, Vue</li>
      </ul>

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
    </div>
  )
}

export default Experience