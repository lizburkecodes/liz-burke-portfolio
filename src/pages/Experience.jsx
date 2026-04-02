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
          Investigated and resolved production issues impacting payment processing and merchant workflows, 
          working closely with internal support teams and stakeholders
        </li>
        <li>
          Debugged API integrations by tracing request/response flows across services and validating data 
          in distributed systems
        </li>
        <li>
          Handled on-call production support using Datadog, Sentry, and OpsGenie, triaging incidents and 
          identifying root causes across payment systems
        </li>
        <li>
          Built backend services in Node.js and AWS Lambda to support payment processing and pricing logic 
          across merchant systems
        </li>
        <li>
          Managed settlement and configuration data using DynamoDB and Amazon S3 to support processing and 
          reporting workflows
        </li>
        <li>
          Created and maintained automated test coverage with Jest and Cypress to improve system reliability 
          and reduce regressions
        </li>
        <li>
          Owned biweekly production deployments for CardX by Stax, communicating releases and monitoring system 
          stability post-deployment
        </li>
        <li>
          Built internal tools and workflows to support troubleshooting and reduce time to resolution for 
          support teams
        </li>
      </ul>
    </div>
  )
}

export default Experience