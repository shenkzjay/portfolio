import { Link } from "react-router-dom";
import smartBoard from "../assets/images/smart.jpeg";
import smartBoard2 from "../assets/images/smart-board1.jpeg"
import annotationVideo from "../assets/vids/3dvid.mp4"
import edonArchitecture from "../assets/images/architecture.png"

export default function EdonSimPro() {
  return (
    <div className="py-12 animate-fade-in">
      <Link to="/" className="group text-small text-accent transition-default mb-8 inline-block">
        <span className="relative">
          &larr; Back to Home
          <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-accent transition-all transition-default group-hover:w-full"></span>
        </span>
      </Link>

      <h1 className="text-h3 text-light-text-primary dark:text-dark-text-primary mb-2">
        EDON SIM-PRO
      </h1>
      <p className="text-h4 text-light-text-secondary dark:text-dark-text-secondary mb-2">
        Interactive 3D simulation-based learning platform.
      </p>
      <div className="flex flex-row text-xs gap-6 mb-12 items-center">
        <p className="text-slate-400 dark:text-slate-500">Education</p>
        <p className="text-slate-400 dark:text-slate-500">3D Learning</p>
        <p className="text-slate-400 dark:text-slate-500">65 Institutions</p>
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
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Sept 2024 - Present</p>
        </div>
        <span className="border-r border-light-border dark:border-dark-border"></span>
        <div className="flex flex-col justify-center py-4">
          <h3>Team</h3>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">5 Engineers</p>
        </div>
      </div>

      {/* Overview section*/}
      <div className="mt-12 space-y-4 border-b border-light-border dark:border-dark-border pb-12">
        <h2 className="text-h3 text-light-text-primary dark:text-dark-text-primary">Overview</h2>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">EDON SIM-PRO is an interactive learning platform designed to improve classroom learning through immersive 3D simulations.</p>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">The project combines browser-based learning, interactive 3D models, classroom smartboards, and centralized deployment to deliver a consistent experience across more than 65 Federal Government Colleges in Nigeria.</p>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Beyond building the frontend experience, the project also involved redesigning the deployment architecture to simplify maintenance and significantly reduce infrastructure costs.</p>
      </div>

      <div className="flex border-b border-light-border dark:border-dark-border pb-12">
        <img src={smartBoard} className="w-[100%] rounded border border-light-border dark:border-dark-border" alt="" />
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
        </div>



        <div className="mt-6 flex flex-col gap-1">
          <h3 className="text-sm text-light-text-secondary dark:text-dark-text-secondary font-medium text-light-text-primary dark:text-dark-text-primary">3D</h3>
          <div>
            <div className="flex gap-4">
              <p className="text-sm text-slate-400 dark:text-secondary ">Sketchfab Viewer API</p>
            </div>
          </div>
        </div>


        <div className="mt-6 flex flex-col gap-1">
          <h3 className="text-sm text-light-text-secondary dark:text-dark-text-secondary font-medium text-light-text-primary dark:text-dark-text-primary">Platform</h3>
          <div>
            <div className="flex gap-4">
              <p className="text-sm text-slate-400 dark:text-secondary ">REST APIs</p>
              <span className="text-sm text-slate-400 dark:text-secondary ">-</span>
              <p className="text-sm text-slate-400 dark:text-secondary ">Role-Based Access Control (RBAC)</p>
            </div>
          </div>
        </div>


        <div className="mt-6 flex flex-col gap-1">
          <h3 className="text-sm text-light-text-secondary dark:text-dark-text-secondary font-medium text-light-text-primary dark:text-dark-text-primary">Infrastructure</h3>
          <div>
            <div className="flex gap-4">
              <p className="text-sm text-slate-400 dark:text-secondary ">Docker</p>
              <span className="text-sm text-slate-400 dark:text-secondary ">-</span>
              <p className="text-sm text-slate-400 dark:text-secondary ">Nginx</p>
              <span className="text-sm text-slate-400 dark:text-secondary ">-</span>
              <p className="text-sm text-slate-400 dark:text-secondary ">Linux</p>
              <span className="text-sm text-slate-400 dark:text-secondary ">-</span>
              <p className="text-sm text-slate-400 dark:text-secondary ">VPS</p>
            </div>
          </div>

        </div>
      </div>


      {/** The challenge */}
      <div className="mt-12 py-12 border-y border-light-border dark:border-dark-border">
        <h2 className="text-h3 text-light-text-primary dark:text-dark-text-primary">The Challenge</h2>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary mt-1">The project presented two major engineering challenges.</p>

        <div className="mt-6 flex flex-col gap-2 border-b border-light-border dark:border-dark-border pb-12">
          <h3 className="text-h4 font-semibold text-light-text-primary dark:text-dark-text-primary">Challenge 01</h3>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Deliver immersive browser-based learning experiences that remained simple enough for students and teachers to use inside classrooms.</p>
          <p className="mt-2 text-body text-light-text-secondary dark:text-dark-text-secondary">Students needed to:</p>
          <ul className="flex flex-col gap-2 list-disc ml-4">
            <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">rotate models</li>
            <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">zoom models naturally</li>
            <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">interact with contextual annotations</li>
            <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">move through lesson without techical friction</li>
          </ul>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">while maintaining consistent performance across classroom hardware.</p>

        </div>

        <div className="mt-6 flex flex-col gap-2 pt-6">
          <h3 className="text-h4 font-semibold text-light-text-primary dark:text-dark-text-primary">Challenge 02</h3>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">The original deployment architecture was becoming expensive to maintain.</p>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Each institution previously operated as an independent deployment running on managed cloud infrastructure.</p>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Maintaining dozens of isolated deployments increased operational complexity, software update time and monthly hosting costs.</p>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">The objective became creating a centralized architecture capable of serving every institution from a single infrastructure while preserving institution-specific experiences.</p>

        </div>
      </div>

      {/** My role */}

      <div className="mt-12 flex flex-col gap-2">
        <h3 className="text-h3 text-light-text-primary dark:text-dark-text-primary">My Role</h3>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">I was responsible for the frontend implementation and collaborated closely with the engineering team throughout delivery.</p>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary mt-2">My responsibilities included:</p>
        <ul className="flex flex-col gap-2 list-disc ml-4">
          <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">Building the frontend application using React and TypeScript</li>
          <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">Integrating Sketchfab 3D experiences into the learning platform</li>
          <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">Designing intuitive learning flows around interactive annotations</li>
          <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">Adapting the interface for large-format classroom smartboards.</li>
          <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">Implementing tenant-aware routing to keep annotation navigation within the active institution</li>
          <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">Contributing to the redesign of the deployment architecture supporting all participating institutions</li>
        </ul>
      </div>


      {/** Solution */}
      <div className="mt-12 py-12 border-t border-light-border dark:border-dark-border">
        <h2 className="text-h3 text-light-text-primary dark:text-dark-text-primary">Solution</h2>

        <div className="mt-6 flex flex-col gap-2 border-b border-light-border dark:border-dark-border pb-12">
          <h3 className="text-h4 font-semibold text-light-text-primary dark:text-dark-text-primary">Interactive Learning</h3>
          <div className="mt-6">
            <h4 className="font-semibold text-small">Problem</h4>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Students needed a way to interact with 3D models in the browser.</p>
          </div>

          <div>
            <h4 className="font-semibold text-small">Solution</h4>
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Rather than treating 3D models as standalone visual assets, we integrated Sketchfab models directly into the learning experience.</p>
          </div>

          <div>
            <h4 className="font-semibold text-small">Outcome</h4>
            <p className=" text-body text-light-text-secondary dark:text-dark-text-secondary">Students could:</p>
            <ul className="flex flex-col gap-2 list-disc ml-4">
              <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">rotate models freely</li>
              <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">zoom into specific components</li>
              <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">select contextual annotations</li>
              <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">navigate supporting educational content</li>
            </ul>
          </div>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">This created a more engaging learning experience than traditional static diagrams while keeping the interface familiar for classroom use..</p>
        </div>


        <div className="flex border-b border-light-border dark:border-dark-border pb-12">
          <img src={smartBoard2} className="w-[100%] rounded border border-light-border dark:border-dark-border" alt="" />
        </div>

      </div>

      <div className=" flex flex-col gap-2 pb-12 border-b border-light-border dark:border-dark-border">
        <h3 className="text-h4 font-semibold text-light-text-primary dark:text-dark-text-primary mb-6">Smartboard Experience</h3>
        <div>
          <h4 className="font-semibold text-small">Problem</h4>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">The platform needed to work reliably in classroom environments, including large-format touch displays and dedicated classroom hardware.</p>
        </div>

        <div>
          <h4 className="font-semibold text-small">Solution</h4>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Adapted the interface for large touch displays by simplifying navigation, improving visibility, and making interactions comfortable during classroom demonstrations. Configured kiosk-mode environments to provide a consistent, locked-down experience across institutions.</p>
        </div>

        <div>
          <h4 className="font-semibold text-small">Outcome</h4>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Delivered a consistent classroom experience across institutions, with the application optimized for dedicated smartboard hardware and touch-based learning.</p>
        </div>


      </div>

      <div className="mt-6 flex flex-col gap-2 pt-6 pb-12 border-b border-light-border dark:border-dark-border">
        <h3 className="text-h4 font-semibold text-light-text-primary dark:text-dark-text-primary mb-6">Solving Cross-School Annotation Routing</h3>

        <div>
          <h4 className="font-semibold text-small">Problem</h4>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">The same Sketchfab models were shared across multiple school deployments, causing annotation links to potentially navigate users into another school's environment.</p>
        </div>

        <div>
          <h4 className="font-semibold text-small">Solution</h4>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Implemented tenant-aware routing for annotation links so navigation remained scoped to the active institution while allowing the same 3D learning assets to be reused across deployments.</p>
        </div>

        <div>
          <h4 className="font-semibold text-small">Outcome</h4>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Prevented cross-school navigation while maintaining a shared library of 3D learning assets across the platform.</p>
        </div>

        <div className="flex pt-12">
          <video className="w-[100%] rounded border border-light-border dark:border-dark-border" src={annotationVideo} controls loop></video>
        </div>
      </div>


      <div className="mt-6 flex flex-col gap-2 pt-6 pb-12">
        <h3 className="text-h4 font-semibold text-light-text-primary dark:text-dark-text-primary">Infrastructure Redesign</h3>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Alongside the frontend work, the engineering team redesigned how the platform was deployed.</p>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Instead of maintaining independent cloud deployments for every institution, we consolidated the platform into a centralized VPS architecture.</p>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">This reduced operational overhead, simplified software updates and provided a consistent deployment pipeline for every participating school.</p>

      </div>



      {/**Architecture Diagram */}
      <div className=" flex flex-col gap-2 border-y border-light-border dark:border-dark-border py-12">
        <h3 className="text-h3 text-light-text-primary dark:text-dark-text-primary">Architecture</h3>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">The frontend application communicates with a centralized backend API. The application also embeds Sketchfab 3D models directly into the interface. The backend API handles tenant-specific data and ensures that annotation links remain within the correct institutional context, even when using shared 3D assets. The frontend and backend run on a single VPS, simplifying deployment and maintenance for all participating institutions.</p>
        {/* Architecture diagram */}
        <div className="mt-6">
          <img src={edonArchitecture} className="w-[100%] rounded border border-light-border dark:border-dark-border" alt="" />
        </div>

      </div>

      {/**Engineering Decisions */}
      <div className="py-12">
        <div className="flex flex-col gap-2 mb-6">
          <h3 className="text-h3 text-light-text-primary dark:text-dark-text-primary">Engineering Decisions</h3>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">The following decisions were made during the development of the application:</p>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="min-w-[550px] sm:min-w-full border border-light-border dark:border-dark-border w-full border-collapse border-l-0 border-r-0">
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
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Sketchfab Viewer Api</p>
                </td>
                <td className="p-4 border-b border-light-border dark:border-dark-border">
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Deliver interactive 3D experiences quickly using existing educational assets</p>
                </td>
                <td className="p-4 border-b border-light-border dark:border-dark-border">
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Less rendering flexibility than building every experience from scratch</p>
                </td>
              </tr>

              <tr className="border-b border-light-border dark:border-dark-border">
                <td className="p-4 border-b border-light-border dark:border-dark-border">
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Centralized VPS Deployment</p>
                </td>
                <td className="p-4 border-b border-light-border dark:border-dark-border">
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Simplified maintenance and reduced infrastructure costs</p>
                </td>
                <td className="p-4 border-b border-light-border dark:border-dark-border">
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Larger deployment blast radius requiring careful staging and rollback planning</p>
                </td>
              </tr>

              <tr className="border-b border-light-border dark:border-dark-border">
                <td className="p-4 border-b border-light-border dark:border-dark-border">
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Shared Learning Assets</p>
                </td>
                <td className="p-4 border-b border-light-border dark:border-dark-border">
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Easier content updates across every institution</p>
                </td>
                <td className="p-4 border-b border-light-border dark:border-dark-border">
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Required tenant-aware routing to prevent cross-school navigation</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      {/**Business Impact */}
      <div className="mt-6 flex flex-col gap-2 border-b border-light-border dark:border-dark-border pb-12">
        <h3 className="text-h3 text-light-text-primary dark:text-dark-text-primary">Business Impact</h3>
        <ul className="flex flex-col gap-2 list-disc ml-4">
          <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">Deployed across 65+ Federal Government Colleges</li>
          <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">Reduced infrastructure costs through centralized deployment</li>
          <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">Simplified software updates across all institutions</li>
          <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">Delivered immersive browser-based learning experiences</li>
          <li className="text-body text-light-text-secondary dark:text-dark-text-secondary">Standardized classroom environments using customized smartboards </li>
        </ul>

      </div>


      {/** Key Takeaway */}
      <div className="mt-12 flex flex-col gap-2">
        <h3 className="text-h3 text-light-text-primary dark:text-dark-text-primary">Key Takeaway</h3>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">This project reinforced that frontend engineering extends beyond building interfaces.</p>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Routing, deployment strategy and platform consistency all directly influenced how maintainable and scalable the product became.</p>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">Designing the user experience and supporting the operational reality of serving dozens of institutions were equally important to the project's success.</p>

      </div>

    </div >
  );
}
