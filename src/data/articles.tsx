import React from "react";
import type { DecisionRow } from "../components/ArticleTemplate";

export interface ArticleSection {
  title: string;
  subsections?: Array<{
    title?: string;
    content: React.ReactNode;
  }>;
  content?: React.ReactNode;
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  sections: ArticleSection[];
  decisionsTable?: {
    title?: string;
    description?: string;
    headers?: [string, string, string];
    rows: DecisionRow[];
  };
  keyTakeaways: React.ReactNode;
}

export const articles: Article[] = [

  {
    slug: "resilient-billing-workflows-frontend",
    title: "Handling Async Payment State: Reducing Billing Errors by 80%",
    subtitle: "An engineering post-mortem on preventing duplicate payment attempts when frontend assumptions meet asynchronous payment processing.",
    excerpt: "How we eliminated billing errors by 80% through state machines, client idempotency keys, and explicit asynchronous payment states.",
    date: "September 2024",
    readTime: "8 min read",
    category: "Frontend Systems",
    tags: ["React", "Billing", "GoCardless", "Broadband"],
    // overview: (
    //   <>
    //     <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
    //       In consumer telecom and SaaS platforms, the checkout and billing flow is the most mission-critical surface in the codebase. At Earth Broadband, supporting thousands of UK customers paying via Direct Debit (GoCardless) and credit card rails exposed us to a reality that standard card-first checkout tutorials ignore: Direct Debit is an inherently asynchronous, multi-day settlement protocol.
    //     </p>
    //     <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
    //       Applying optimistic UI patterns or naive submit buttons in financial flows created duplicate subscriptions, orphaned mandates, and frustrated users. Here is how we re-architected our frontend payment system to eliminate 80% of billing errors.
    //     </p>
    //   </>
    // ),
    sections: [
      {
        title: "The Problem",
        content: (
          <div className="space-y-4">
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              At EarthBroadband, customers could make recurring and one-off payments through a billing system used by more than 4,000 customers.
            </p>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              The payment flow looked straightforward from the customer's perspective:
            </p>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              Submit payment → payment processed → show success
            </p>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              The underlying process wasn't that simple. </p>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              Payments through GoCardless are asynchronous. Submitting a payment does not necessarily mean the final payment outcome is immediately available to the frontend. </p>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              This created a problem around retries.</p>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              A customer could submit a payment, refresh the page, or click the payment action again while the original payment was still being processed. Without a reliable way to associate those actions with the same payment attempt, a retry could be treated as a separate request. </p>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              This contributed to billing inaccuracies, including cases where customers were charged more than once.</p>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              The challenge was therefore not simply displaying a payment form. It was making the interface behave correctly when the payment process itself was still in progress.</p>
          </div>
        ),
      },
      {
        title: "Why the Initial Approach Wasn't Enough",
        content: (
          <div className="space-y-4">
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              A typical frontend payment flow often assumes a relatively immediate response:
            </p>
            <div className="bg-light-surface dark:bg-dark-surface p-4 flex flex-col  justify-center rounded-card border border-light-border dark:border-dark-border font-mono text-xs sm:text-sm text-light-text-primary dark:text-dark-text-primary overflow-x-auto my-3">
              <p>User clicks Pay</p>
              <p>&nbsp;&nbsp;&darr;</p>
              <p>API request</p>
              <p>&nbsp;&nbsp;&darr;</p>
              <p>API response</p>
              <p>&nbsp;&nbsp;&darr;</p>
              <p>Show success or error</p>
            </div>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              That assumption doesn't work particularly well when the external payment provider processes the transaction asynchronously.
            </p>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              We also couldn't rely on optimistic UI updates.</p>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              Showing "Payment successful" immediately after submitting the request would give the customer a confirmation that the system did not yet have.            </p>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              On the other hand, simply showing an indefinite loading state wasn't a good experience either. The frontend needed a way to distinguish:</p>
            <ul className="flex flex-col gap-2 list-disc ml-4 text-body text-light-text-secondary dark:text-dark-text-secondary">
              <li>the payment request being submitted</li>
              <li>the payment still being processed</li>
              <li>the payment reaching a final state</li>
            </ul>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              The solution was to make the frontend explicitly account for these different states.</p>
          </div>
        ),
      },
      {
        title: "The Solution",
        content: (
          <>
            <div className="space-y-4">
              <h4 className="text-sm sm:text-base md:text-h4 font-bold text-light-text-primary dark:text-dark-text-primary mb-4 sm:mb-6">1. Prevent accidental duplicate submissions</h4>
              <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                The first step was handling the immediate interaction on the client.            </p>
              <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                Once a customer submitted a payment, the payment action entered a processing state rather than remaining available for another submission.</p>
              <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                This removed the common path where a customer could click the payment action repeatedly while the first request was still being handled.</p>
              <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                The important distinction was that this was UI protection, not confirmation that the payment had completed.</p>
              <p>The interface could say:</p>
              <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed  border-l-4 border-slate-300 pl-4">"Your payment is being processed."</p>
              <p>It could not yet say:</p>
              <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed  border-l-4 border-slate-300 pl-4">"Payment completed."</p>
              <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">"Payment was successful."</p>
            </div>

            <div className="space-y-4 mt-6">
              <h4 className="text-sm sm:text-base md:text-h4 font-bold text-light-text-primary dark:text-dark-text-primary mb-4 sm:mb-6">2. Give each payment attempt a stable identity</h4>
              <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                The next problem was identifying a payment attempt.          </p>
              <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                A unique payment ID was generated on the client when the payment was initiated and attached to the POST request sent to the backend.</p>
              <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                Instead of treating every submission as an unrelated request, the system could associate the request with a specific payment attempt.</p>
              <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                This was particularly important when handling retries.</p>
              <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">The frontend wasn't responsible for guaranteeing payment idempotency by itself. Rather, it provided a stable identifier that allowed the payment flow to distinguish one attempt from another.</p>
              <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">That distinction became an important part of the API contract between the frontend and backend.</p>

            </div>

            <div className="space-y-4 mt-6">
              <h4 className="text-sm sm:text-base md:text-h4 font-bold text-light-text-primary dark:text-dark-text-primary mb-4 sm:mb-6">3. Treat the backend payment state as the source of truth</h4>
              <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                The frontend also needed to know what happened after the initial request.          </p>
              <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                We used React Query to keep the payment state displayed by the interface synchronized with the backend.</p>
              <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                The flow became:</p>
              <div className="bg-light-surface dark:bg-dark-surface p-4 flex flex-col  justify-center rounded-card border border-light-border dark:border-dark-border font-mono text-xs sm:text-sm text-light-text-primary dark:text-dark-text-primary overflow-x-auto my-3">
                {/* <!-- Insert architecture diagram here --> */}
              </div>
              <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                Rather than assuming that submitting the request meant the payment had succeeded, the frontend reflected the payment status reported by the backend.</p>
              <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">This meant the UI could remain in a processing state until there was an actual status to display.</p>

            </div>
          </>
        ),
      },

    ],
    decisionsTable: {
      title: "Engineering Trade-offs",
      description: "The solution wasn't about finding a perfect payment flow. Each decision introduced its own trade-offs.",
      headers: ["Decision", "Why we chose it", "Trade-off"],
      rows: [
        {
          decision: "Disable payment action while processing",
          rationale: "Prevent repeated submissions",
          tradeoff: "Customers have less control while a payment is being processed",
        },
        {
          decision: "Stable payment ID",
          rationale: "Allows payment attempts to be distinguished",
          tradeoff: "Adds another identifier that must be handled consistently across the API",
        },
        {
          decision: "React Query for payment state",
          rationale: "Keeps UI state synchronized with backend state",
          tradeoff: "Introduces cache and server-state management that the team needs to understand",
        },
        {
          decision: "Explicit Asynchronous Status Screen",
          rationale: "Reflects the actual payment lifecycle",
          tradeoff: "The UI cannot always provide an immediate final answer after submission",
        },
      ],
    },
    keyTakeaways: (
      <div className="space-y-3">
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
          The changes contributed to a broader redesign of the billing flow that ultimately reduced billing inaccuracies by more than 80%.
        </p>
        <p>The platform supported:</p>
        <ul className="flex flex-col gap-2 list-disc ml-4 text-body text-light-text-secondary dark:text-dark-text-secondary">
          <li>4,000+ customers</li>
          <li>approximately 2,000 daily users</li>
          <li>More importantly, the frontend was no longer built around the assumption that a payment request and a completed payment were the same event.</li>
        </ul>
      </div>
    ),
  },
  // {
  //   slug: "consolidating-cloud-instances-into-single-vps",
  //   title: "Why We Consolidated 65 Isolated Cloud Instances into a Single VPS",
  //   subtitle: "Moving away from fragmented multi-tenant hosting to a single VPS with Docker & Nginx, slashing costs by 75%.",
  //   excerpt: "Consolidating 65 independent school deployments into a centralized architecture reduced our monthly infrastructure costs from $200 to under $50 while streamlining updates.",
  //   date: "November 2024",
  //   readTime: "6 min read",
  //   category: "Systems & Infrastructure",
  //   tags: ["DevOps", "Docker", "Nginx", "Infrastructure", "Cost Optimization"],
  //   overview: (
  //     <>
  //       <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
  //         Modern engineering dogma frequently pushes micro-instances, serverless functions, and distributed clusters early in a project's lifecycle. For our deployment of 65 independent Federal College platforms, following this standard advice produced an administrative and financial bottleneck: 65 separate managed cloud instances, each running the identical application with separate billing lines.
  //       </p>
  //       <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
  //         By consolidating all deployments into a single, high-capacity Virtual Private Server (VPS) configured with Docker containerization and an intelligent Nginx reverse proxy, we eliminated hundreds of dollars in unnecessary infrastructure overhead and transformed our maintenance workflow.
  //       </p>
  //     </>
  //   ),
  //   sections: [
  //     {
  //       title: "The Problem with 65 Independent Instances",
  //       content: (
  //         <div className="space-y-4">
  //           <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
  //             When the platform initially launched, deploying a dedicated $5/month cloud instance per institution felt like a safe, isolated choice. But as the program expanded to 65+ schools, fundamental flaws appeared:
  //           </p>
  //           <ul className="flex flex-col gap-2 list-disc ml-4 text-body text-light-text-secondary dark:text-dark-text-secondary">
  //             <li>
  //               <strong className="text-light-text-primary dark:text-dark-text-primary">Excessive Baseline Costs:</strong> Each isolated instance reserved its own OS kernel, system daemon memory, and logging processes, resulting in ~85% idle resource waste across the fleet.
  //             </li>
  //             <li>
  //               <strong className="text-light-text-primary dark:text-dark-text-primary">Maintenance Multiplier:</strong> Deploying a bug fix or security patch required iterating across 65 separate SSH targets and deployment pipelines.
  //             </li>
  //             <li>
  //               <strong className="text-light-text-primary dark:text-dark-text-primary">Slow Provisioning:</strong> Setting up a new institution took several hours of manual server configuration, DNS records, and SSL certificate issuance.
  //             </li>
  //           </ul>
  //         </div>
  //       ),
  //     },
  //     {
  //       title: "Dynamic Host Routing via Nginx Reverse Proxy",
  //       content: (
  //         <div className="space-y-4">
  //           <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
  //             The cornerstone of our consolidation was configuring Nginx as a high-throughput reverse proxy capable of dynamic domain dispatching. Each school operated under its own custom domain or subdomain (e.g. <code className="font-mono text-accent">school-a.edu.ng</code> and <code className="font-mono text-accent">school-b.edu.ng</code>).
  //           </p>
  //           <div className="bg-light-surface dark:bg-dark-surface p-4 rounded-card border border-light-border dark:border-dark-border font-mono text-xs sm:text-sm text-light-text-primary dark:text-dark-text-primary overflow-x-auto my-3">
  //             <p className="text-slate-400"># Centralized Nginx Upstream Routing</p>
  //             <p>server &#123;</p>
  //             <p>&nbsp;&nbsp;listen 443 ssl http2;</p>
  //             <p>&nbsp;&nbsp;server_name ~^(?&lt;subdomain&gt;.+)\.edonsim\.ng$;</p>
  //             <p></p>
  //             <p>&nbsp;&nbsp;location / &#123;</p>
  //             <p>&nbsp;&nbsp;&nbsp;&nbsp;proxy_pass http://tenant_upstream_pool;</p>
  //             <p>&nbsp;&nbsp;&nbsp;&nbsp;proxy_set_header Host $host;</p>
  //             <p>&nbsp;&nbsp;&nbsp;&nbsp;proxy_set_header X-Tenant-ID $subdomain;</p>
  //             <p>&nbsp;&nbsp;&nbsp;&nbsp;proxy_set_header X-Real-IP $remote_addr;</p>
  //             <p>&nbsp;&nbsp;&#125;</p>
  //             <p>&#125;</p>
  //           </div>
  //           <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
  //             The application layer inspects the injected <code className="font-mono text-xs">X-Tenant-ID</code> header, scoping database connections and static asset paths to the requested school tenant while reusing the same pooled execution processes.
  //           </p>
  //         </div>
  //       ),
  //     },
  //     {
  //       title: "Mitigating the Shared Blast Radius",
  //       content: (
  //         <div className="space-y-4">
  //           <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
  //             The primary architectural critique of centralization is the blast radius: if the single VPS fails, all 65 schools go offline. To neutralize this danger, we implemented strict defensive measures:
  //           </p>
  //           <ul className="flex flex-col gap-2 list-disc ml-4 text-body text-light-text-secondary dark:text-dark-text-secondary">
  //             <li>
  //               <strong className="text-light-text-primary dark:text-dark-text-primary">Docker Cgroups Memory Limits:</strong> Hard memory caps prevented a runaway memory leak in one tenant's report generator from starving the server.
  //             </li>
  //             <li>
  //               <strong className="text-light-text-primary dark:text-dark-text-primary">Daily Automated Off-site Snapshots:</strong> Nightly encrypted database dumps and volume backups were synced to external S3-compatible cloud storage.
  //             </li>
  //             <li>
  //               <strong className="text-light-text-primary dark:text-dark-text-primary">Automated Healthchecks & Systemd Restarts:</strong> Docker containers and Nginx were monitored with automated restart policies, bringing any failed worker back in under 3 seconds.
  //             </li>
  //           </ul>
  //         </div>
  //       ),
  //     },
  //   ],
  //   decisionsTable: {
  //     title: "Infrastructure Decisions Matrix",
  //     description: "Comparing the consolidated VPS architecture against the previous multi-instance setup:",
  //     headers: ["Decision", "Why we chose it", "Trade-off"],
  //     rows: [
  //       {
  //         decision: "Centralized Dedicated VPS",
  //         rationale: "Reduced infrastructure costs by ~$150/mo while pooling unused hardware headroom",
  //         tradeoff: "Concentrated blast radius requiring strict container limits and automated backups",
  //       },
  //       {
  //         decision: "Nginx Dynamic Reverse Proxy",
  //         rationale: "Handled domain dispatching and SSL termination centrally without per-school config files",
  //         tradeoff: "Required strict regex host validation to prevent malicious host header injection",
  //       },
  //       {
  //         decision: "Docker Containerization",
  //         rationale: "Standardized environments across local development, staging, and production",
  //         tradeoff: "Introduced container management overhead and image caching requirements",
  //       },
  //       {
  //         decision: "Centralized Maintenance Scripts",
  //         rationale: "Single-command deployments updated all school sites simultaneously in seconds",
  //         tradeoff: "Required testing migrations rigorously against staging before deploying",
  //       },
  //     ],
  //   },
  //   keyTakeaways: (
  //     <div className="space-y-3">
  //       <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
  //         Scaling architecture is not about blindly adding more servers or adhering to cloud buzzwords.
  //       </p>
  //       <ul className="flex flex-col gap-2 list-disc ml-4 text-body text-light-text-secondary dark:text-dark-text-secondary">
  //         <li>Evaluate operational overhead: 65 simple servers are often harder to manage than one resilient server.</li>
  //         <li>Resource pooling allows smaller budgets to achieve enterprise reliability and high burst capacity.</li>
  //         <li>Centralization frees engineering time from tedious server administration to focus on user features.</li>
  //       </ul>
  //     </div>
  //   ),
  // },
];
