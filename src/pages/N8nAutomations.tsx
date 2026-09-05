import { Link } from "react-router-dom";

export default function N8nAutomations() {
  return (
    <div className="py-12 animate-fade-in">
      <Link to="/" className="group text-small text-accent transition-default mb-8 inline-block">
        <span className="relative">
          &larr; Back to Home
          <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-accent transition-all transition-default group-hover:w-full"></span>
        </span>
      </Link>

      <h1 className="text-h3 text-light-text-primary dark:text-dark-text-primary mb-2">
        n8n Customer Support Automation
      </h1>
      <p className="text-h4 text-light-text-secondary dark:text-dark-text-secondary mb-2">
        Automation Engineering
      </p>
      <div className="flex flex-row text-xs gap-6 mb-12 items-center">
        <p className="text-slate-400 dark:text-slate-500">Email</p>
        <span className="text-slate-400 dark:text-slate-500">→</span>
        <p className="text-slate-400 dark:text-slate-500">CRM</p>
        <span className="text-slate-400 dark:text-slate-500">→</span>
        <p className="text-slate-400 dark:text-slate-500">Google sheets</p>
      </div>


      {/* Overview section*/}
      <div className="mt-12 space-y-4 border-y border-light-border dark:border-dark-border py-12">
        <h2 className="text-h3 text-light-text-primary dark:text-dark-text-primary">Overview</h2>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Customer support requests were arriving through email, making it difficult to consistently identify, categorize, and track customer issues.</p>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">I built an automated workflow using n8n that processes incoming customer emails, identifies relevant issues, and records them across the company's internal systems.</p>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">The workflow started with Google Sheets as the initial tracking system and was later extended to integrate with the company's custom CRM.</p>
      </div>



      {/** The challenge */}
      <div className="py-12 border-b  border-light-border dark:border-dark-border ">
        <h2 className="text-h3 text-light-text-primary dark:text-dark-text-primary">The Challenge</h2>

        <div className="mt-6 flex flex-col gap-2">
          <h3 className="text-h4 font-semibold text-light-text-primary dark:text-dark-text-primary">Problem</h3>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Customer issues could easily get buried within email threads.</p>
          <p className="mt-2 text-body text-light-text-secondary dark:text-dark-text-secondary">Support staff had to manually search through emails to find relevant customer complaints, determine what each issue was about, and track whether the case had been resolved.</p>

          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">This created several problems:</p>
          <ul className="flex flex-col gap-2 list-disc ml-4">
            <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">Customer complaints could be missed.</li>
            <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">Finding previous conversations took time.</li>
            <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">Resolved and unresolved cases were harder to track.</li>
            <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">Repetitive manual categorization took time.</li>
            <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">It was easier for customer issues to be handled inconsistently.</li>
          </ul>
        </div>
      </div>


      {/** The Solution */}
      <div className=" py-12">
        <h2 className="text-h3 text-light-text-primary dark:text-dark-text-primary">The Solution</h2>

        <div className="mt-6 flex flex-col gap-2">
          <h3 className="text-h4 font-semibold text-light-text-primary dark:text-dark-text-primary">Automated Email Processing</h3>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">I built an n8n workflow that triggers whenever a customer email is received.</p>
          <p className="  pt-2 text-body text-light-text-secondary dark:text-dark-text-secondary">The workflow examines information from the email, including:</p>
          <ul className="flex flex-col gap-2 list-disc ml-4">
            <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">Subject</li>
            <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">Email content</li>
            <li className="text-body text-light-text-secondary dark:text-dark-text-secondary"> Relevant keywords</li>
          </ul>

          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Based on the detected keywords, the workflow categorizes the issue and applies the appropriate label.</p>

          <div className="mt-6 grid gap-2">
            <h3 className="text-h4 font-semibold text-light-text-primary dark:text-dark-text-primary">CRM Integration</h3>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">The workflow then sends the categorized issue to the company's internal CRM, where the customer's case can be tagged and tracked.</p>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">This turned the email inbox from the primary place for managing complaints into an automated entry point for the support workflow.</p>

          </div>

          <div className="mt-6 grid gap-2">
            <h3 className="text-h4 font-semibold text-light-text-primary dark:text-dark-text-primary">Google Sheets Backup</h3>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">The workflow also records each processed case in Google Sheets, including the date and timestamp.</p>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">This initially served as the main tracking mechanism before the CRM integration was added and continues to provide a simple record of processed cases.</p>

          </div>
        </div>
      </div>


      <div className=" flex flex-col gap-2 border-y border-light-border dark:border-dark-border py-12">
        <h3 className="text-h3 text-light-text-primary dark:text-dark-text-primary">Architecture</h3>
        {/* Architecture diagram */}
        <div className="mt-6 border-b border-light-border dark:border-dark-border pb-12">
          <p className="text-h4 text-light-text-primary dark:text-dark-text-primary font-semibold">Before</p>
        </div>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary mt-6">The workflow runs per incoming customer email, so each relevant message can be processed automatically without requiring someone to manually enter it into the tracking systems.</p>

      </div>


      {/**Outcome */}
      <div className=" flex flex-col gap-6">
        <h3 className="text-h3 text-light-text-primary dark:text-dark-text-primary">Outcomes</h3>
        <div>
          <h4 className="text-h4 text-light-text-primary dark:text-dark-text-secondary font-semibold">Fewer missed complaints</h4>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Customer issues are automatically captured and categorized instead of relying entirely on someone noticing them in an email thread.</p>

        </div>

        <div>
          <h4 className="text-h4 text-light-text-primary dark:text-dark-text-secondary font-semibold">Easier case tracking</h4>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">CRM tags make it easier to identify and follow customer issues through their resolution.</p>
        </div>
        <div>
          <h4 className="text-h4 text-light-text-primary dark:text-dark-text-secondary font-semibold">Less repetitive work</h4>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Support staff can identify relevant customer cases more quickly, improving the time between receiving an issue and responding to it.</p>
        </div>
        <div>
          <h4 className="text-h4 text-light-text-primary dark:text-dark-text-secondary font-semibold">Progressive automation</h4>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">The workflow evolved from a simple email → Google Sheets process into an email → n8n → CRM + Google Sheets workflow, allowing the automation to grow as the team's needs changed.</p>
        </div>
      </div>


      {/** Key Takeaway */}
      <div className="mt-12 flex flex-col gap-2 border-t border-light-border dark:border-dark-border py-12">
        <h3 className="text-h3 text-light-text-primary dark:text-dark-text-primary">Key Takeaway</h3>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Automation doesn't always need to replace an entire process.</p>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">In this case, the useful starting point was simply capturing and organizing information that was already arriving through email. Once that workflow was reliable, it could be extended to the CRM and other systems.</p>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">The result was a small automation that removed repetitive work while making customer issues easier to track.</p>
      </div>

    </div>
  );
}
