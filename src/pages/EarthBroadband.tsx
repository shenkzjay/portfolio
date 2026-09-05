import { Link } from "react-router-dom";
import earthBroadbandArchitecture from "../assets/images/billing.png"
import broadband1 from "../assets/images/broadband1.jpg"
import broadband2 from "../assets/images/broadband2.jpg"
import broadband3 from "../assets/images/broadband3.jpg"
import n8n from "../assets/images/n8n.png"

export default function EarthBroadband() {
  return (
    <div className="py-8 sm:py-12 animate-fade-in">
      <Link to="/" className="group text-small text-accent transition-default mb-6 sm:mb-8 inline-block">
        <span className="relative">
          &larr; Back to Home
          <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-accent transition-all transition-default group-hover:w-full"></span>
        </span>
      </Link>

      <h1 className="text-2xl sm:text-3xl md:text-h3 font-bold text-light-text-primary dark:text-dark-text-primary mb-2">
        Earth Broadband
      </h1>
      <p className="text-base sm:text-lg md:text-h4 text-light-text-secondary dark:text-dark-text-secondary mb-3">
        Reduced billing errors by 80% for 4,000+ customers.
      </p>
      <div className="flex flex-wrap text-xs gap-3 sm:gap-6 mb-8 sm:mb-12 items-center">
        <p className="text-slate-400 dark:text-slate-500">Broadband</p>
        <span className="hidden sm:inline text-slate-400 dark:text-slate-500">•</span>
        <p className="text-slate-400 dark:text-slate-500">Billing Automation</p>
        <span className="hidden sm:inline text-slate-400 dark:text-slate-500">•</span>
        <p className="text-slate-400 dark:text-slate-500">4000+ Customers</p>
      </div>

      {/* Duration, role, team */}
      <div className="grid grid-cols-1 sm:grid-cols-3 border-y border-light-border dark:border-dark-border divide-y sm:divide-y-0 sm:divide-x divide-light-border dark:divide-dark-border">
        <div className="flex flex-col justify-center py-3.5 sm:py-4 sm:pr-4">
          <h3 className="text-xs sm:text-sm font-semibold text-light-text-primary dark:text-dark-text-primary uppercase tracking-wider">Role</h3>
          <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary mt-0.5">Frontend Engineer</p>
        </div>
        <div className="flex flex-col justify-center py-3.5 sm:py-4 sm:px-4">
          <h3 className="text-xs sm:text-sm font-semibold text-light-text-primary dark:text-dark-text-primary uppercase tracking-wider">Duration</h3>
          <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary mt-0.5">Feb 2021 - August 2024</p>
        </div>
        <div className="flex flex-col justify-center py-3.5 sm:py-4 sm:pl-4">
          <h3 className="text-xs sm:text-sm font-semibold text-light-text-primary dark:text-dark-text-primary uppercase tracking-wider">Team</h3>
          <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary mt-0.5">6 Engineers</p>
        </div>
      </div>

      {/* Overview section*/}
      <div className="mt-8 sm:mt-12 space-y-4 border-b border-light-border dark:border-dark-border pb-8 sm:pb-12">
        <h2 className="text-xl sm:text-2xl md:text-h3 font-bold text-light-text-primary dark:text-dark-text-primary">Overview</h2>
        <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">EarthBroadband is a UK broadband platform covering customer broadband sign-up, billing, account management, CRM, and internal operations.</p>
        <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">As part of a 6-person development team, I focused on frontend architecture and development across customer-facing and internal applications, including the broadband signup flow, billing experience, authentication, dashboards, and reusable UI components.</p>
      </div>

      <div className="flex flex-col gap-4 sm:gap-6 border-b border-light-border dark:border-dark-border py-8 sm:pb-12">
        <div>
          <img src={broadband1} alt="Architectural diagram of earthbroadband's billing application" className="w-full h-auto rounded border border-light-border dark:border-dark-border object-cover" />
        </div>
        <div className="flex flex-row gap-4 sm:gap-6 overflow-hidden">
          <img src={broadband3} alt="Broadband application interface" className="w-1/2 h-96 object-contain rounded border border-light-border dark:border-dark-border" />
          <img src={broadband2} alt="Broadband application interface" className="w-1/2 h-96 object-contain rounded border border-light-border dark:border-dark-border" />
        </div>
      </div>


      {/** Technology highlights */}
      <div className="mt-8 sm:mt-12">
        <h2 className="text-xl sm:text-2xl md:text-h3 font-bold text-light-text-primary dark:text-dark-text-primary">Technology Highlights</h2>

        <div className="mt-4 sm:mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-light-text-secondary dark:text-dark-text-secondary">Frontend</h3>
            <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
              <p className="text-xs sm:text-sm text-slate-500 dark:text-secondary">React</p>
              <span className="text-xs sm:text-sm text-slate-400 dark:text-secondary">-</span>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-secondary">Typescript</p>
              <span className="text-xs sm:text-sm text-slate-400 dark:text-secondary">-</span>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-secondary">Tailwind CSS</p>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-light-text-secondary dark:text-dark-text-secondary">State and Payment</h3>
            <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
              <p className="text-xs sm:text-sm text-slate-500 dark:text-secondary">React Query</p>
              <span className="text-xs sm:text-sm text-slate-400 dark:text-secondary">-</span>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-secondary">GoCardless</p>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-light-text-secondary dark:text-dark-text-secondary">UI System</h3>
            <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
              <p className="text-xs sm:text-sm text-slate-500 dark:text-secondary">Storybook</p>
            </div>
          </div>
        </div>
      </div>

      {/** The challenge */}
      <div className="mt-8 sm:mt-12 py-8 sm:py-12 border-y border-light-border dark:border-dark-border">
        <h2 className="text-xl sm:text-2xl md:text-h3 font-bold text-light-text-primary dark:text-dark-text-primary">The Challenges</h2>

        <div className="flex flex-col gap-4 pb-8 sm:pb-12 border-b border-light-border dark:border-dark-border">
          <h3 className="text-lg sm:text-xl md:text-h4 font-semibold text-light-text-primary dark:text-dark-text-primary my-4 sm:my-6">Broadband Signup</h3>
          <div className="flex flex-col gap-1.5">
            <h4 className="font-semibold text-small">Problem</h4>
            <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">The broadband signup experience needed to make it easier for new customers to understand available plans and complete their application without unnecessary friction.</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="font-semibold text-small">Solution</h4>
            <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">Refactored the frontend signup flow to create a clearer progression between each stage, improving form validation, responsive behaviour, and interactions between the different steps.</p>
            <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">The flow was structured so customers could move through plan selection, application details, and submission with clearer feedback at each stage.</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <h4 className="font-semibold text-small">Outcome</h4>
            <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">Created a more consistent signup experience from selecting a broadband plan through to completing an application.</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 pt-6 ">
          <h3 className="text-lg sm:text-xl md:text-h4 font-semibold text-light-text-primary dark:text-dark-text-primary">Billing Reliability</h3>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col mt-4 sm:mt-6 gap-2">
              <h4 className="font-semibold text-small">Problem</h4>
              <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">Customers could occasionally trigger duplicate payments by retrying a payment before the result of their initial request had been reflected in the interface.</p>
              <p className="text-sm sm:text-body mt-2 text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">Because payment processing was asynchronous, the frontend could not immediately determine whether the first request had completed, failed, or was still being processed. From the customer's perspective, the lack of immediate feedback made a retry appear safe, while the payment system could process both requests independently.</p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-small">Solution</h4>
              <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">I introduced a client-generated payment identifier for each payment attempt and included it with the payment request. This gave each attempt a unique reference that could be used to prevent the same payment action from being treated as a new request when a customer retried.</p>
              <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">I also updated the payment UI, by disabling the payment action after submission to better represent the request's processing state, reducing the likelihood of customers repeatedly submitting the same payment.</p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-small">Outcome</h4>
              <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">Reduced duplicate billing errors by over 80%, while providing clearer payment status to customers.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 pt-12 border-t border-light-border dark:border-dark-border">
          <h3 className="text-lg sm:text-xl md:text-h4 font-semibold text-light-text-primary dark:text-dark-text-primary">Design System</h3>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col mt-4 sm:mt-6 gap-2">
              <h4 className="font-semibold text-small">Problem</h4>
              <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">Multiple applications required consistent UI patterns, while repeatedly building similar components made the frontend harder to maintain.</p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-small">Solution</h4>
              <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">Developed and maintained a reusable React component system documented with Storybook.</p>
              <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">Components could be developed, reviewed, and reused independently across the applications.</p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-small">Outcome</h4>
              <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">Established a more consistent UI foundation and reduced duplicated frontend implementation across the product.</p>
            </div>
          </div>
        </div>
      </div>

      {/**Architecture Diagram */}
      <div className="flex flex-col gap-2 border-y border-light-border dark:border-dark-border py-8 sm:py-12">
        <h3 className="text-xl sm:text-2xl md:text-h3 font-bold text-light-text-primary dark:text-dark-text-primary">Architecture</h3>
        <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">The billing experience had to account for the asynchronous nature of GoCardless payment processing.</p>
        {/* Architecture diagram */}
        <div className="my-4 sm:my-6">
          <img src={earthBroadbandArchitecture} alt="Architectural diagram of earthbroadband's billing application" className="w-full h-auto rounded border border-light-border dark:border-dark-border" />
        </div>
        <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">React Query helped the frontend stay synchronized with payment state as the backend received and processed updates from GoCardless.</p>
      </div>

      {/* Automation of workflows*/}
      <div className="flex flex-col gap-2 border-b border-light-border dark:border-dark-border py-8 sm:py-12">
        <h3 className="text-lg sm:text-xl md:text-h4 font-semibold text-light-text-primary dark:text-dark-text-primary">Operational Automation</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col mt-4 sm:mt-6 gap-2">
            <h4 className="font-semibold text-small">Problem</h4>
            <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">Openreach sent a high volume of emails to the EarthBroadband mailbox, including broadband installation updates, engineer appointment details, and unrelated communications. Important appointment information could easily get buried, while manually notifying customers added unnecessary operational work.</p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-small">Solution</h4>
            <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">Built an automated workflow using n8n to identify relevant Openreach appointment emails and extract the customer's details, including their name, address, and appointment date.</p>
            <p>The workflow then automatically:</p>
            <ul className="flex flex-col gap-2 list-disc ml-4">
              <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">Generates a personalized appointment email for the customer.</li>
              <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">Sends an SMS notification through the ClickSend API.</li>
              <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">Records the workflow activity for operational visibility.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-small">Outcome</h4>
            <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">Automated the customer notification process, reducing manual coordination and ensuring customers received their Openreach engineer appointment details by email and SMS without requiring staff to manually process each appointment email.</p>
          </div>
        </div>
      </div>

      <div className="w-full pt-12 mx-auto">
        <img src={n8n} alt="Broadband application interface" className="w-[65%] mx-auto" />
      </div>

      {/**Engineering Decisions */}
      <div className="py-8 sm:py-12">
        <div className="flex flex-col gap-2 mb-6">
          <h3 className="text-xl sm:text-2xl md:text-h3 font-bold text-light-text-primary dark:text-dark-text-primary">Engineering Decisions</h3>
          <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary">The following decisions were made during the development of the application:</p>
        </div>
        <div className="w-full overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="min-w-[550px] sm:min-w-full border border-light-border dark:border-dark-border w-full border-collapse border-l-0 border-r-0">
            <thead>
              <tr className="border-b border-light-border dark:border-dark-border">
                <th className="text-left p-3 sm:p-4 border-b border-light-border dark:border-dark-border font-semibold text-xs sm:text-sm text-light-text-primary dark:text-dark-text-primary">Decision</th>
                <th className="text-left p-3 sm:p-4 border-b border-light-border dark:border-dark-border font-semibold text-xs sm:text-sm text-light-text-primary dark:text-dark-text-primary">Why we chose it</th>
                <th className="text-left p-3 sm:p-4 border-b border-light-border dark:border-dark-border font-semibold text-xs sm:text-sm text-light-text-primary dark:text-dark-text-primary">Trade-off</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-light-border dark:border-dark-border">
                <td className="p-3 sm:p-4 border-b border-light-border dark:border-dark-border">
                  <p className="text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary font-medium">Reusable React components</p>
                </td>
                <td className="p-3 sm:p-4 border-b border-light-border dark:border-dark-border">
                  <p className="text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary">Reduce duplication and maintain consistency</p>
                </td>
                <td className="p-3 sm:p-4 border-b border-light-border dark:border-dark-border">
                  <p className="text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary">Components required clear APIs and ongoing maintenance</p>
                </td>
              </tr>

              <tr className="border-b border-light-border dark:border-dark-border">
                <td className="p-3 sm:p-4 border-b border-light-border dark:border-dark-border">
                  <p className="text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary font-medium">Storybook</p>
                </td>
                <td className="p-3 sm:p-4 border-b border-light-border dark:border-dark-border">
                  <p className="text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary">Develop and document components independently</p>
                </td>
                <td className="p-3 sm:p-4 border-b border-light-border dark:border-dark-border">
                  <p className="text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary">Added another workflow to keep synchronized with production</p>
                </td>
              </tr>

              <tr className="border-b border-light-border dark:border-dark-border">
                <td className="p-3 sm:p-4 border-b border-light-border dark:border-dark-border">
                  <p className="text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary font-medium">React Query</p>
                </td>
                <td className="p-3 sm:p-4 border-b border-light-border dark:border-dark-border">
                  <p className="text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary">Manage cached server state and backend changes</p>
                </td>
                <td className="p-3 sm:p-4 border-b border-light-border dark:border-dark-border">
                  <p className="text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary">Added additional state-management patterns</p>
                </td>
              </tr>

              <tr className="border-b border-light-border dark:border-dark-border">
                <td className="p-3 sm:p-4 border-b border-light-border dark:border-dark-border">
                  <p className="text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary font-medium">GoCardless</p>
                </td>
                <td className="p-3 sm:p-4 border-b border-light-border dark:border-dark-border">
                  <p className="text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary">Support recurring payments</p>
                </td>
                <td className="p-3 sm:p-4 border-b border-light-border dark:border-dark-border">
                  <p className="text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary">Payment status depended on asynchronous external events</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/**Impact section */}
      <div className="flex flex-col justify-between border-b border-light-border dark:border-dark-border pb-6 sm:pb-8">
        <h3 className="text-xl sm:text-2xl md:text-h3 font-bold text-light-text-primary dark:text-dark-text-primary mb-4">Impact</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-light-border dark:divide-dark-border">
          <div className="flex flex-col justify-center py-2 sm:py-4 sm:pr-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">4000+</h3>
            <p className="text-xs sm:text-small text-light-text-secondary dark:text-dark-text-secondary mt-1">Customers</p>
          </div>
          <div className="flex flex-col justify-center pt-3 sm:pt-0 sm:py-4 sm:px-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">~2000+</h3>
            <p className="text-xs sm:text-small text-light-text-secondary dark:text-dark-text-secondary mt-1">Daily Users</p>
          </div>
          <div className="flex flex-col justify-center pt-3 sm:pt-0 sm:py-4 sm:pl-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-light-text-primary dark:text-dark-text-primary">80%+</h3>
            <p className="text-xs sm:text-small text-light-text-secondary dark:text-dark-text-secondary mt-1">Reduction in billing inaccuracies</p>
          </div>
        </div>
      </div>

      {/** Key Takeaway */}
      <div className="mt-8 sm:mt-12 flex flex-col gap-2 pb-12">
        <h3 className="text-xl sm:text-2xl md:text-h3 font-bold text-light-text-primary dark:text-dark-text-primary">Key Takeaway</h3>
        <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">A payment interface cannot simply assume that an action has completed because a customer initiated it.</p>
        <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">The billing work reinforced the importance of treating frontend state as an evolving representation of backend state, particularly when external payment services introduce asynchronous events.</p>
      </div>
    </div>
  );
}
