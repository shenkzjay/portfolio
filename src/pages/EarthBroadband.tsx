import { Link } from "react-router-dom";
import earthBroadbandArchitecture from "../assets/images/earth.png"

export default function EarthBroadband() {
  return (
    <div className="py-12 animate-fade-in">
      <Link to="/" className="text-small text-accent hover:underline mb-8 inline-block">
        &larr; Back to Home
      </Link>

      <h1 className="text-h3 text-light-text-primary dark:text-dark-text-primary mb-2">
        Earth Broadband
      </h1>
      <p className="text-h4 text-light-text-secondary dark:text-dark-text-secondary mb-2">
        Reduced billing errors by 80% for 4,000+ customers.
      </p>
      <div className="flex flex-row text-xs gap-6 mb-12 items-center">
        <p className="text-slate-400 dark:text-slate-500">Broadband</p>
        <p className="text-slate-400 dark:text-slate-500">Billing Automation</p>
        <p className="text-slate-400 dark:text-slate-500">4000+ Customers</p>
      </div>


      {/* Durartion, role, team */}
      <div className="flex flex-row gap-6 border-y border-light-border dark:border-dark-border">
        <div className="flex flex-col justify-center py-4">
          <h3 className="text-h4 text-light-text-primary dark:text-dark-text-primary">Role</h3>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Frontend Engineer</p>
        </div>
        <span className="border-r border-light-border dark:border-dark-border"></span>
        <div className="flex flex-col justify-center py-4">
          <h3 className="text-h4 text-light-text-primary dark:text-dark-text-primary">Duration</h3>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Feb 2021 - August 2024</p>
        </div>
        <span className="border-r border-light-border dark:border-dark-border"></span>
        <div className="flex flex-col justify-center py-4">
          <h3>Team</h3>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">6 Engineers</p>
        </div>
      </div>


      {/* Overview section*/}
      <div className="mt-12 space-y-4 border-b border-light-border dark:border-dark-border pb-12">
        <h2 className="text-h3 text-light-text-primary dark:text-dark-text-primary">Overview</h2>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">EarthBroadband is a UK broadband platform covering customer broadband sign-up, billing, account management, CRM, and internal operations.</p>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">As part of a 6-person development team, I focused on frontend architecture and development across customer-facing and internal applications, including the broadband signup flow, billing experience, authentication, dashboards, and reusable UI components.</p>
      </div>


      {/** Technology highlights */}
      <div className="mt-12">
        <h2 className="text-h3 text-light-text-primary dark:text-dark-text-primary">Technology Highlights</h2>

        <div className="mt-6 flex flex-col gap-1">
          <h3 className="text-sm text-light-text-secondary dark:text-dark-text-secondary font-medium text-light-text-primary dark:text-dark-text-primary">Frontend</h3>
          <div>
            <div className="flex gap-4">
              <p className="text-sm text-slate-400 dark:text-secondary">React</p>
              <span className="text-sm text-slate-400 dark:text-secondary ">-</span>
              <p className="text-sm text-slate-400 dark:text-secondary">Typescript</p>
              <span className="text-sm text-slate-400 dark:text-secondary ">-</span>
              <p className="text-sm text-slate-400 dark:text-secondary">Tailwind CSS</p>
            </div>
          </div>


          <div className="mt-6 flex flex-col gap-1">
            <h3 className="text-sm text-light-text-secondary dark:text-dark-text-secondary font-medium text-light-text-primary dark:text-dark-text-primary">State and Payment</h3>
            <div>
              <div className="flex gap-4">
                <p className="text-sm text-slate-400 dark:text-secondary ">React Query</p>
                <span className="text-sm text-slate-400 dark:text-secondary">-</span>
                <p className="text-sm text-slate-400 dark:text-secondary">GoCardless</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-1">
            <h3 className="text-sm text-light-text-secondary dark:text-dark-text-secondary font-medium text-light-text-primary dark:text-dark-text-primary">UI System</h3>
            <div>
              <div className="flex gap-4">
                <p className="text-sm text-slate-400 dark:text-secondary ">Storybook</p>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/** The challenge */}
      <div className="mt-12 py-12 border-y border-light-border dark:border-dark-border">
        <h2 className="text-h3 text-light-text-primary dark:text-dark-text-primary">The Challenges</h2>

        <div className=" flex flex-col gap-2 pb-12 border-b border-light-border dark:border-dark-border">
          <h3 className="text-h4 font-semibold text-light-text-primary dark:text-dark-text-primary my-6">Broadband Signup</h3>
          <div>
            <h4 className="font-semibold text-small">Problem</h4>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">The broadband signup experience needed to make it easier for new customers to understand available plans and complete their application without unnecessary friction.</p>
          </div>

          <div>
            <h4 className="font-semibold text-small">Solution</h4>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Refactored the frontend signup flow, improving the structure of the journey, form validation, responsive behaviour, and interactions between the different stages.</p>
          </div>

          <div>
            <h4 className="font-semibold text-small">Outcome</h4>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Created a clearer and more consistent path for customers from selecting a broadband plan through to completing their application.</p>
          </div>


        </div>

        <div className="mt-6 flex flex-col gap-2 pt-6">
          <h3 className="text-h4 font-semibold text-light-text-primary dark:text-dark-text-primary">Billing Reliability</h3>
          <div className="flex flex-col mt-6">
            <h4 className="font-semibold text-small">Problem</h4>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Customers were occasionally experiencing duplicate billing, while recurring payments could also appear out of sync with the expected billing date.</p>
            <p className="text-body mt-2 text-light-text-secondary dark:text-dark-text-secondary">The underlying payment process was asynchronous, meaning the frontend could not always assume that a payment had completed immediately after a customer action.</p>
          </div>

          <div className="flex flex-col">
            <h4 className="font-semibold text-small">Solution</h4>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Engineered the billing interfaces around GoCardless recurring payment workflows and used React Query to keep frontend payment state synchronized with backend status.</p>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">This allowed the UI to reflect changes as payment processing progressed rather than relying solely on the customer's initial action.</p>
          </div>

          <div className="flex flex-col">
            <h4 className="font-semibold text-small">Outcome</h4>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Reduced billing errors by over 80%, while providing clearer payment status to customers.</p>
          </div>

        </div>


        <div className="mt-6 flex flex-col gap-2 pt-6">
          <h3 className="text-h4 font-semibold text-light-text-primary dark:text-dark-text-primary">Design System</h3>
          <div className="flex flex-col mt-6">
            <h4 className="font-semibold text-small">Problem</h4>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Multiple applications required consistent UI patterns, while repeatedly building similar components made the frontend harder to maintain.</p>
          </div>

          <div className="flex flex-col">
            <h4 className="font-semibold text-small">Solution</h4>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Developed and maintained a reusable React component system documented with Storybook.</p>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Components could be developed, reviewed, and reused independently across the applications.</p>
          </div>

          <div className="flex flex-col">
            <h4 className="font-semibold text-small">Outcome</h4>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Established a more consistent UI foundation and reduced duplicated frontend implementation across the product.</p>
          </div>

        </div>
      </div>



      {/**Architecture Diagram */}
      <div className=" flex flex-col gap-2 border-y border-light-border dark:border-dark-border py-12">
        <h3 className="text-h3 text-light-text-primary dark:text-dark-text-primary">Architecture</h3>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">The billing experience had to account for the asynchronous nature of GoCardless payment processing.</p>
        {/* Architecture diagram */}
        <div className="my-6">
          <img src={earthBroadbandArchitecture} alt="Architectural diagram of earthbroadband's billing application" className="w-[75%]" />
        </div>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">React Query helped the frontend stay synchronized with payment state as the backend received and processed updates from GoCardless.</p>
      </div>



      {/**Engineering Decisions */}
      <div className="py-12">
        <div className="flex flex-col gap-2 mb-6">
          <h3 className="text-h3 text-light-text-primary dark:text-dark-text-primary">Engineering Decisions</h3>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">The following decisions were made during the development of the application:</p>
        </div>
        <table className="border border-light-border dark:border-dark-border w-full border-collapse border-l-0 border-r-0">
          <thead>
            <tr className="border-b border-light-border dark:border-dark-border">
              <th className="text-left p-4 border-b border-light-border dark:border-dark-border">Decision</th>
              <th className="text-left p-4 border-b border-light-border dark:border-dark-border">Why we chose it</th>
              <th className="text-left p-4 border-b border-light-border dark:border-dark-border">Trade-off</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="border-b border-light-border dark:border-dark-border">
              <td className="p-4 border-b border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Reusable React components</p>
              </td>
              <td className="p-4 border-b border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Reduce duplication and maintain consistency</p>
              </td>
              <td className="p-4 border-b border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Components required clear APIs and ongoing maintenance</p>
              </td>
            </tr>

            <tr className="border-b border-light-border dark:border-dark-border">
              <td className="p-4 border-b border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Storybook</p>
              </td>
              <td className="p-4 border-b border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Develop and document components independently</p>
              </td>
              <td className="p-4 border-b border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Added another workflow to keep synchronized with production</p>
              </td>
            </tr>

            <tr className="border-b border-light-border dark:border-dark-border">
              <td className="p-4 border-b border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">React Query</p>
              </td>
              <td className="p-4 border-b border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Manage cached server state and backend changes</p>
              </td>
              <td className="p-4 border-b border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Added additional state-management patterns</p>
              </td>
            </tr>


            <tr className="border-b border-light-border dark:border-dark-border">
              <td className="p-4 border-b border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">GoCardless</p>
              </td>
              <td className="p-4 border-b border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Support recurring payments</p>
              </td>
              <td className="p-4 border-b border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Payment status depended on asynchronous external events</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      {/**Impact section */}
      <div className="flex flex-col justify-between  border-b border-light-border dark:border-dark-border pb-6">
        <h3 className="text-h3 text-light-text-primary dark:text-dark-text-primary">Impact</h3>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-center py-4">
            <h3 className="text-h4 font-semibold text-slate-500 dark:text-dark-text-primary">4000+</h3>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Customers</p>
          </div>
          <div className="flex flex-col justify-center py-4">
            <h3 className="text-h4 font-semibold text-slate-500 dark:text-dark-text-primary">~2000+</h3>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Daily Users</p>
          </div>
          <div className="flex flex-col justify-center py-4">
            <h3 className="text-h4 font-semibold text-slate-500 dark:text-dark-text-primary">80%+</h3>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Reduction in billing accuracies</p>
          </div>
        </div>
      </div>



      {/** Key Takeaway */}
      <div className="mt-12 flex flex-col gap-2">
        <h3 className="text-h3 text-light-text-primary dark:text-dark-text-primary">Key Takeaway</h3>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">A payment interface cannot simply assume that an action has completed because a customer initiated it.</p>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">The billing work reinforced the importance of treating frontend state as an evolving representation of backend state, particularly when external payment services introduce asynchronous events.</p>

      </div>







    </div>
  );
}
