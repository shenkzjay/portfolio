import { Link } from "react-router-dom";
import infra1 from "../assets/images/infra1.png"
import infra2 from "../assets/images/infra2.png"

export default function InfrastructureMigration() {
  return (
    <div className="py-12 animate-fade-in">
      <Link to="/" className="text-small text-accent hover:underline mb-8 inline-block">
        &larr; Back to Home
      </Link>

      <h1 className="text-h3 text-light-text-primary dark:text-dark-text-primary mb-2">
        Infrastructure Migration
      </h1>
      <p className="text-h4 text-light-text-secondary dark:text-dark-text-secondary mb-2">
        65+ school deployments
      </p>
      <p className="text-body text-light-text-secondary dark:text-dark-text-secondary mb-2">
        ~$150/month cost reduction
      </p>

      {/* Overview section*/}
      <div className="mt-12 space-y-4 border-y border-light-border dark:border-dark-border py-12">
        <h2 className="text-h3 text-light-text-primary dark:text-dark-text-primary">Overview</h2>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">The platform supported more than 65 independent school deployments, each running as a separate managed cloud instance.</p>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">As the number of schools grew, maintaining separate infrastructure became increasingly expensive and time-consuming. I designed and implemented a centralized VPS architecture that consolidated the deployments while preserving the separation between individual schools.</p>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">My role covered the infrastructure architecture, VPS setup, Docker, Nginx, DNS, and deployment configuration.</p>
      </div>


      {/** The challenge */}
      <div className="py-12 border-b  border-light-border dark:border-dark-border ">
        <h2 className="text-h3 text-light-text-primary dark:text-dark-text-primary">The Challenge</h2>

        <div className="mt-6 flex flex-col gap-2">
          <h3 className="text-h4 font-semibold text-light-text-primary dark:text-dark-text-primary">Problem</h3>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">The existing infrastructure was based on individually managed cloud instances for each school.</p>
          <p className="mt-2 text-body text-light-text-secondary dark:text-dark-text-secondary">At approximately $200/month, the infrastructure was becoming expensive to maintain as more schools were added. Maintaining the same application across many separate deployments also meant that changes and updates had to be managed repeatedly.</p>

          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">This created two problems:</p>
          <ul className="flex flex-col gap-2 list-disc ml-4">
            <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">Increasing infrastructure costs as the number of schools grew.</li>
            <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">More maintenance overhead from managing the same application across many environments.</li>
          </ul>
        </div>
      </div>

      {/** The Solution */}
      <div className=" py-12">
        <h2 className="text-h3 text-light-text-primary dark:text-dark-text-primary">The Solution</h2>

        <div className="mt-6 flex flex-col gap-2">
          <h3 className="text-h4 font-semibold text-light-text-primary dark:text-dark-text-primary">Centralized Infrastructure</h3>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">I redesigned the deployment architecture around a single VPS capable of hosting all school deployments.</p>
          <p className="  pt-2 text-body text-light-text-secondary dark:text-dark-text-secondary">The new infrastructure uses:</p>
          <div className="flex gap-4 mt-2 ">
            <p className="text-sm text-slate-400 dark:text-secondary font-semibold">Docker</p>
            <span className="text-sm text-slate-400 dark:text-secondary font-semibold">-</span>
            <p className="text-sm text-slate-400 dark:text-secondary font-semibold">Nginx</p>
            <span className="text-sm text-slate-400 dark:text-secondary font-semibold">-</span>
            <p className="text-sm text-slate-400 dark:text-secondary font-semibold">Postgresql</p>
            <span className="text-sm text-slate-400 dark:text-secondary font-semibold">-</span>
            <p className="text-sm text-slate-400 dark:text-secondary font-semibold">VPS</p>
          </div>

          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Nginx handles incoming requests and routes each school's domain to the appropriate deployment, while Docker provides consistent and isolated application environments.</p>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary mt-2">This allowed the infrastructure to scale the number of school deployments without creating a new managed cloud instance for every school.</p>

          <div className="mt-6 grid gap-2">
            <h3 className="text-h4 font-semibold text-light-text-primary dark:text-dark-text-primary">Standard Deployment</h3>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Instead of manually setting up a new server environment for each institution, a new school could be provisioned from the established infrastructure and deployment structure.</p>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">This significantly shortened the time required to provision a new school and bring its website online.</p>

          </div>

          <div className="mt-6 grid gap-2">
            <h3 className="text-h4 font-semibold text-light-text-primary dark:text-dark-text-primary">Centralized Maintenance</h3>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">The architecture also reduced the amount of repeated maintenance required.</p>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Instead of maintaining separate infrastructure for every school, the shared platform could be maintained centrally while individual school deployments remained separated.</p>

          </div>
        </div>
      </div>


      {/**Architecture Diagram */}
      <div className=" flex flex-col gap-2 border-y border-light-border dark:border-dark-border py-12">
        <h3 className="text-h3 text-light-text-primary dark:text-dark-text-primary">Architecture</h3>
        {/* Architecture diagram */}
        <div className="mt-6 border-b border-light-border dark:border-dark-border pb-12">
          <p className="text-h4 text-light-text-primary dark:text-dark-text-primary font-semibold">Before</p>
          <img src={infra2} className="w-[50%] rounded mt-2" alt="" />
        </div>

        <div className="mt-12">
          <p className="text-h4 text-light-text-primary dark:text-dark-text-primary font-semibold">After</p>
          <img src={infra1} className="w-[100%] rounded mt-2" alt="" />
        </div>

        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary mt-6">The centralized architecture allowed Nginx to route requests based on each school's domain while the applications ran within the shared VPS infrastructure.</p>

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
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Centralized VPS</p>
              </td>
              <td className="p-4 border-b border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Reduce infrastructure cost and simplify maintenance</p>
              </td>
              <td className="p-4 border-b border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Increased blast radius; an infrastructure failure could affect multiple schools</p>
              </td>
            </tr>

            <tr className="border-b border-light-border dark:border-dark-border">
              <td className="p-4 border-b border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Nginx reverse proxy</p>
              </td>
              <td className="p-4 border-b border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Route multiple school domains through the centralized infrastructure</p>
              </td>
              <td className="p-4 border-b border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Required additional routing and configuration management</p>
              </td>
            </tr>

            <tr className="border-b border-light-border dark:border-dark-border">
              <td className="p-4 border-b border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Docker</p>
              </td>
              <td className="p-4 border-b border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Provide consistent and repeatable application environments</p>
              </td>
              <td className="p-4 border-b border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Added container management to the deployment process</p>
              </td>
            </tr>
            <tr className="border-b border-light-border dark:border-dark-border">
              <td className="p-4 border-b border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Centralized application maintenance</p>
              </td>
              <td className="p-4 border-b border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Avoid maintaining the same platform independently across every deployment</p>
              </td>
              <td className="p-4 border-b border-light-border dark:border-dark-border">
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Changes to shared components could affect multiple schools and therefore required more careful deployment</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      {/**Outcome */}
      <div className=" flex flex-col gap-6">
        <h3 className="text-h3 text-light-text-primary dark:text-dark-text-primary">Outcome</h3>
        <div>
          <h4 className="text-h4 text-light-text-primary dark:text-dark-text-secondary font-semibold">~$150/month reduction cost in infrastructure</h4>

        </div>

        <div>
          <h4 className="text-h4 text-light-text-primary dark:text-dark-text-secondary font-semibold">65+ school deployments</h4>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">The centralized architecture supports more than 65 school deployments from a single VPS infrastructure.</p>
        </div>
        <div>
          <h4 className="text-h4 text-light-text-primary dark:text-dark-text-secondary font-semibold">Faster provisioning</h4>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Provisioning a new school no longer requires setting up an entirely separate managed cloud instance, significantly reducing the time between creating a deployment and getting the school's website online.</p>
        </div>
        <div>
          <h4 className="text-h4 text-light-text-primary dark:text-dark-text-secondary font-semibold">Reduced maintenance</h4>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Centralizing the infrastructure also reduced repetitive maintenance, particularly around maintaining the underlying application platform and deployment environments.</p>
        </div>
      </div>


      {/** Key Takeaway */}
      <div className="mt-12 flex flex-col gap-2 border-t border-light-border dark:border-dark-border py-12">
        <h3 className="text-h3 text-light-text-primary dark:text-dark-text-primary">Key Takeaway</h3>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">The biggest lesson from the migration was that scaling a platform is not always about adding more infrastructure.</p>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">For this system, the better approach was to standardize and consolidate what was already being deployed repeatedly, reducing both infrastructure cost and operational overhead while still keeping individual school deployments separated.</p>

      </div>
    </div>
  );
}
