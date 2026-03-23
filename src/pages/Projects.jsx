function Projects() {
  return (
    <div className="content-page">
      <h2>Key Projects & Impact</h2>

      <div className="project-item">
        <h3>Pricing Technology API: BIN Data Pipeline</h3>

        <p>
          <strong>
            Automated data pipeline to continuously enrich BIN classification data,
            improving pricing accuracy and reducing compliance risk in a payment platform.
          </strong>
        </p>

        <h4>Problem</h4>
        <p>
          Card networks like Visa, Mastercard, and Amex continuously expand and update BIN ranges,
          making card classification a moving target. These classifications expand well beyond 6 digit
          BIN ranges, making most traditional online BIN-checkers obsolete. Outdated or incomplete data can
          lead to incorrect credit/debit classification, creating compliance risks and inaccurate pricing behavior.
          Maintaining accuracy required continuously ingesting fresh BIN data from new sources,
          which was not scalable with manual processes.
        </p>

        <h4>Action</h4>
        <ul>
          <li>Designed an event-driven ingestion pipeline triggered by CSV uploads to AWS S3</li>
          <li>Streamed and parsed large BIN data files (hundreds of thousands of records)</li>
          <li>Mapped BIN range data (low/high ranges) into structured DynamoDB documents</li>
          <li>Implemented logic to insert new BIN ranges and update existing classifications</li>
          <li>Integrated BlockChyp data alongside other providers (TSYS, Elavon, Fiserv)</li>
          <li>Supported a high-precision pricing system evaluating up to 17-digit card ranges</li>
        </ul>

        <h4>Impact</h4>
        <ul>
          <li>Ensured continuous data freshness for card classification</li>
          <li>Improved accuracy of credit vs debit determinations</li>
          <li>Reduced PCI compliance risk related to incorrect surcharging</li>
          <li>Eliminated manual data ingestion and reduced operational overhead</li>
          <li>Increased reliability of the Pricing API across the platform</li>
        </ul>

        <h4>Who It Helped</h4>
        <ul>
          <li><strong>Merchants:</strong> More accurate and compliant transaction pricing</li>
          <li><strong>Support teams:</strong> Fewer classification-related issues</li>
          <li><strong>Engineering:</strong> Reduced maintenance and manual processing</li>
          <li><strong>Business:</strong> Increased trust in pricing logic and reduced risk</li>
        </ul>
      </div>


      <div className="project-item">
        <h3>BlockChyp Gateway Integration</h3>

        <p>
          <strong>
            Integrated a newly acquired payment gateway into existing products by
            building a translation layer that enabled seamless migration from a
            third-party provider, improving reliability and reducing costs.
          </strong>
        </p>

        <h4>Problem</h4>
        <p>
          After acquiring BlockChyp, we needed to integrate the new gateway into our
          existing payment products without disrupting current customers. 
          Our platform was tightly coupled to a legacy third-party
          gateway that was unreliable under load and expensive to maintain. Replacing it
          required maintaining backward compatibility with existing request/response formats
          while transitioning traffic to the new system.
        </p>

        <h4>Action</h4>
        <ul>
          <li>
            Designed and implemented a TypeScript-based translation layer within a proxy
            microservice to intercept and route payment requests
          </li>
          <li>
            Built a shared library to transform request payloads from the legacy gateway
            format into BlockChyp-compatible requests
          </li>
          <li>
            Mapped BlockChyp responses back into the legacy response structure expected by
            existing frontend applications
          </li>
          <li>
            Enabled conditional routing logic to gradually shift traffic between gateways
          </li>
          <li>
            Instrumented logging and Datadog monitoring to track traffic distribution, migration progress,
            and validate successful onboarding of merchants in staged rollout waves
          </li>
          <li>
            Debugged post-migration issues by tracing transactions across systems and analyzing logs
            to quickly identify and resolve account-specific problems
          </li>
          <li>
            Supported end-to-end payment flows including authorization, capture, refund,
            and credit transactions
          </li>
        </ul>

        <h4>Impact</h4>
        <ul>
          <li>
            Enabled controlled, low-risk migration of merchants through staged rollout strategy
          </li>
          <li>
            Improved visibility into system behavior and migration progress through monitoring
          </li>
          <li>
            Reduced time to diagnose and resolve post-migration issues
          </li>
          <li>
            Improved system reliability by reducing dependence on an unstable external provider
          </li>
          <li>
            Reduced operational costs associated with third-party gateway usage
          </li>
        </ul>

        <h4>Who It Helped</h4>
        <ul>
          <li>
            <strong>Customers:</strong> More reliable payment processing with no required changes
            to their existing integrations
          </li>
          <li>
            <strong>Support teams:</strong> Fewer gateway-related incidents and escalations
          </li>
          <li>
            <strong>Engineering:</strong> Greater control over payment infrastructure
          </li>
          <li>
            <strong>Business:</strong> Lower costs and improved scalability of the platform
          </li>
        </ul>
      </div>

      <div className="project-item">
        <h3>CardX Portal: Self-Service Configuration Console</h3>

        <p>
          <strong>
            Built a self-service configuration tool that enabled support teams to safely manage
            merchant settings, reducing engineering dependency while protecting critical pricing
            and processing logic.
          </strong>
        </p>

        <h4>Problem</h4>
        <p>
          As our products evolved, the number of configurable merchant settings
          grew significantly due to enterprise customer needs. These settings were stored in DynamoDB
          and primarily managed through the AWS console, creating a bottleneck where support teams had
          to rely on engineers for even simple configuration updates. While many settings were low-risk,
          others directly impacted pricing and transaction processing, making unrestricted access unsafe.

          The challenge was enabling self-service without introducing risk to critical systems.
        </p>

        <h4>Action</h4>
        <ul>
          <li>
            Designed and built a dynamic self-service interface using a recursive React component
            to render deeply nested configuration data structures
          </li>
          <li>
            Supported multiple data types (booleans, strings, nested objects) without requiring
            custom UI for each individual setting
          </li>
          <li>
            Implemented safeguards to restrict access to sensitive configurations related to pricing
            and transaction processing
          </li>
          <li>
            Enabled safe editing of low-risk settings (e.g., UI customization, supported countries,
            form inputs) by non-engineering teams
          </li>
          <li>
            Designed the solution to minimize engineering overhead while maximizing flexibility
            and scalability as new settings were introduced
          </li>
        </ul>

        <h4>Impact</h4>
        <ul>
          <li>
            Reduced volume of routine configuration requests sent to engineering
          </li>
          <li>
            Empowered support teams to resolve merchant requests faster without escalation
          </li>
          <li>
            Maintained system integrity by preventing unsafe changes to critical settings
          </li>
          <li>
            Improved turnaround time for merchant configuration updates
          </li>
          <li>
            Created a scalable solution that adapted to a growing and increasingly complex
            configuration model
          </li>
        </ul>

        <h4>Who It Helped</h4>
        <ul>
          <li>
            <strong>Support teams:</strong> Enabled self-service configuration without needing engineering
          </li>
          <li>
            <strong>Merchants:</strong> Faster updates and customization of their payment experience
          </li>
          <li>
            <strong>Engineering:</strong> Reduced interruption from repetitive configuration requests
          </li>
          <li>
            <strong>Business:</strong> Improved operational efficiency and response time to enterprise needs
          </li>
        </ul>
      </div>


      <h2 className="personal-projects-heading">Personal Projects</h2>
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