import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import EdonSimPro from "./pages/EdonSimPro";
import EarthBroadband from "./pages/EarthBroadband";
import InfrastructureMigration from "./pages/InfrastructureMigration";
import N8nAutomations from "./pages/N8nAutomations";
import Writing from "./pages/Writing";
import ArticleDetail from "./pages/ArticleDetail";
import Resume from "./pages/Resume";
import "./App.css";




// const ThemeToggle = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <button
//       className="fixed bottom-4 right-4 z-50 bg-accent text-white px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-medium rounded-badge shadow-medium hover:bg-opacity-90 transition-default cursor-pointer backdrop-blur-sm"
//       onClick={() => setDarkMode(!darkMode)}
//       aria-label="Toggle theme"
//     >
//       {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
//     </button>
//   );
// };

function Home() {
  return (
    <>
      <div className="mt-8 sm:mt-12 md:mt-section-gap">
        <div className="flex flex-col justify-center w-full gap-2 sm:gap-3">
          <h1 className="text-2xl sm:text-3xl md:text-h2 font-bold text-light-text-primary dark:text-dark-text-primary leading-tight">
            Engineering products that people depend on.
          </h1>
          <p className="text-sm sm:text-base md:text-body text-light-text-secondary dark:text-dark-text-secondary max-w-3xl leading-relaxed">
            As a Frontend Engineer with over the past 7 years, I've built scalable SaaS platforms, immersive 3D learning experiences, and deployment infrastructure for startups and public institutions, serving thousands of users.
          </p>
        </div>

        <div className="mt-6 sm:mt-component-gap grid grid-cols-2 sm:grid-cols-4 border-y border-light-border dark:border-dark-border divide-y sm:divide-y-0 divide-light-border dark:divide-dark-border sm:divide-x">
          <div className="flex flex-col justify-between py-3.5 sm:py-4 px-2.5 sm:px-4">
            <h3 className="text-xl sm:text-2xl md:text-h3 font-bold text-light-text-primary dark:text-dark-text-primary">7+</h3>
            <p className="text-xs sm:text-small text-light-text-secondary dark:text-dark-text-secondary mt-1">Years Experience</p>
          </div>
          <div className="flex flex-col justify-between py-3.5 sm:py-4 px-2.5 sm:px-4">
            <h3 className="text-xl sm:text-2xl md:text-h3 font-bold text-light-text-primary dark:text-dark-text-primary">4,000+</h3>
            <p className="text-xs sm:text-small text-light-text-secondary dark:text-dark-text-secondary mt-1">Customers Supported</p>
          </div>
          <div className="flex flex-col justify-between py-3.5 sm:py-4 px-2.5 sm:px-4">
            <h3 className="text-xl sm:text-2xl md:text-h3 font-bold text-light-text-primary dark:text-dark-text-primary">65</h3>
            <p className="text-xs sm:text-small text-light-text-secondary dark:text-dark-text-secondary mt-1">Colleges Deployed</p>
          </div>
          <div className="flex flex-col justify-between py-3.5 sm:py-4 px-2.5 sm:px-4">
            <h3 className="text-xl sm:text-2xl md:text-h3 font-bold text-light-text-primary dark:text-dark-text-primary">80%</h3>
            <p className="text-xs sm:text-small text-light-text-secondary dark:text-dark-text-secondary mt-1">Reduction in billing errors</p>
          </div>
        </div>
      </div>

      <main className="mt-10 sm:mt-section-gap flex flex-col gap-10 sm:section-gap pb-16 sm:pb-16">
        <section>
          <h2 className="text-xl sm:text-2xl md:text-h2 font-semibold text-light-text-primary dark:text-dark-text-primary mb-4 sm:mb-component-gap">Featured work</h2>
          <div className="flex flex-col border-y border-light-border dark:border-dark-border divide-y divide-light-border dark:divide-dark-border">

            <Link to="/case-study/edon-sim-pro" className="group flex flex-col sm:flex-row justify-between gap-3 sm:gap-8 lg:gap-16 py-6 sm:py-8 cursor-pointer transition-default sm:items-center">
              <div className="flex flex-col">
                <h3 className="text-base sm:text-lg md:text-h4 text-light-text-primary font-semibold dark:text-dark-text-primary mb-1 group-hover:text-accent transition-colors">EDON SIM-PRO</h3>
                <div className="flex flex-col">
                  <p className="text-xs sm:text-small text-light-text-secondary dark:text-dark-text-secondary">Interactive 3D simulation-based learning platform deployed across 65 Federal Colleges.</p>
                </div>
              </div>
              <div className="self-start sm:self-center shrink-0 pt-1 sm:pt-0">
                <div className="flex items-center gap-1 text-xs sm:text-small text-light-text-secondary dark:text-dark-text-secondary text-nowrap group-hover:text-accent transition-colors transition-default">
                  <span className="relative">
                    View Case Study
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-accent transition-all transition-default group-hover:w-full"></span>
                  </span>
                  <span className="transition-transform transition-default group-hover:translate-x-1">&rarr;</span>
                </div>
              </div>
            </Link>

            <Link to="/case-study/earth-broadband" className="group flex flex-col sm:flex-row justify-between gap-3 sm:gap-8 lg:gap-16 py-6 sm:py-8 cursor-pointer transition-default sm:items-center">
              <div className="flex flex-col">
                <h3 className="text-base sm:text-lg md:text-h4 text-light-text-primary font-semibold dark:text-dark-text-primary mb-1 group-hover:text-accent transition-colors">EARTH BROADBAND</h3>
                <div className="flex flex-col">
                  <p className="text-xs sm:text-small text-light-text-secondary dark:text-dark-text-secondary">Reduced billing errors by 80% while supporting 4,000+ customers.</p>
                </div>
              </div>
              <div className="self-start sm:self-center shrink-0 pt-1 sm:pt-0">
                <div className="flex items-center gap-1 text-xs sm:text-small text-light-text-secondary dark:text-dark-text-secondary text-nowrap group-hover:text-accent transition-colors transition-default">
                  <span className="relative">
                    View Case Study
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-accent transition-all transition-default group-hover:w-full"></span>
                  </span>
                  <span className="transition-transform transition-default group-hover:translate-x-1">&rarr;</span>
                </div>
              </div>
            </Link>

            <Link to="/case-study/infrastructure-migration" className="group flex flex-col sm:flex-row justify-between gap-3 sm:gap-8 lg:gap-16 py-6 sm:py-8 cursor-pointer transition-default sm:items-center">
              <div className="flex flex-col">
                <h3 className="text-base sm:text-lg md:text-h4 text-light-text-primary font-semibold dark:text-dark-text-primary mb-1 group-hover:text-accent transition-colors">INFRASTRUCTURE MIGRATION</h3>
                <div className="flex flex-col">
                  <p className="text-xs sm:text-small text-light-text-secondary dark:text-dark-text-secondary">Consolidating 65 isolated cloud instances into a centralized VPS architecture to reducing operational costs and simplifying deployment.</p>
                </div>
              </div>
              <div className="self-start sm:self-center shrink-0 pt-1 sm:pt-0">
                <div className="flex items-center gap-1 text-xs sm:text-small text-light-text-secondary dark:text-dark-text-secondary text-nowrap group-hover:text-accent transition-colors transition-default">
                  <span className="relative">
                    View Case Study
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-accent transition-all transition-default group-hover:w-full"></span>
                  </span>
                  <span className="transition-transform transition-default group-hover:translate-x-1">&rarr;</span>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* <section>
          <h2 className="text-xl sm:text-2xl md:text-h2 font-semibold text-light-text-primary dark:text-dark-text-primary mb-4 sm:mb-component-gap">Systems & Infrastructure</h2>
          <div className="flex flex-col border-y border-light-border dark:border-dark-border divide-y divide-light-border dark:divide-dark-border">

            <Link to="/case-study/infrastructure-migration" className="group flex flex-col sm:flex-row justify-between gap-3 sm:gap-8 lg:gap-16 py-6 sm:py-8 cursor-pointer transition-default sm:items-center">
              <div className="flex flex-col">
                <h3 className="text-base sm:text-lg md:text-h4 text-light-text-primary font-semibold dark:text-dark-text-primary mb-1 group-hover:text-accent transition-colors">INFRASTRUCTURE MIGRATION</h3>
                <div className="flex flex-col">
                  <p className="text-xs sm:text-small text-light-text-secondary dark:text-dark-text-secondary">Consolidating 65 isolated cloud instances into a centralized VPS architecture to reducing operational costs and simplifying deployment.</p>
                </div>
              </div>
              <div className="self-start sm:self-center shrink-0 pt-1 sm:pt-0">
                <div className="flex items-center gap-1 text-xs sm:text-small text-light-text-secondary dark:text-dark-text-secondary text-nowrap group-hover:text-accent transition-colors transition-default">
                  <span className="relative">
                    View Case Study
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-accent transition-all transition-default group-hover:w-full"></span>
                  </span>
                  <span className="transition-transform transition-default group-hover:translate-x-1">&rarr;</span>
                </div>
              </div>
            </Link>

            <Link to="/case-study/n8n-automations" className="group flex flex-col sm:flex-row justify-between gap-3 sm:gap-8 lg:gap-16 py-6 sm:py-8 cursor-pointer transition-default sm:items-center">
              <div className="flex flex-col">
                <h3 className="text-base sm:text-lg md:text-h4 text-light-text-primary font-semibold dark:text-dark-text-primary mb-1 group-hover:text-accent transition-colors">N8N AUTOMATIONS</h3>
                <div className="flex flex-col">
                  <p className="text-xs sm:text-small text-light-text-secondary dark:text-dark-text-secondary">Orchestrating automated workflows to generate and qualify high-conversion leads, reducing manual data entry.</p>
                </div>
              </div>
              <div className="self-start sm:self-center shrink-0 pt-1 sm:pt-0">
                <div className="flex items-center gap-1 text-xs sm:text-small text-light-text-secondary dark:text-dark-text-secondary text-nowrap group-hover:text-accent transition-colors transition-default">
                  <span className="relative">
                    View Case Study
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-accent transition-all transition-default group-hover:w-full"></span>
                  </span>
                  <span className="transition-transform transition-default group-hover:translate-x-1">&rarr;</span>
                </div>
              </div>
            </Link>

          </div>
        </section> */}
      </main>
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text-primary dark:text-dark-text-primary">
        <div className="container-default">
          <header className="pt-6 pb-2">
            <nav className="flex flex-col sm:flex-row w-full items-start sm:items-center justify-between gap-4">
              <div>
                <Link to="/" className="hover:text-accent transition-default">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-light-text-primary dark:text-dark-text-primary">Olajide Seun</h3>
                </Link>
              </div>
              <ul className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-small list-none">
                <li>
                  <NavLink
                    to="/writing"
                    className={({ isActive }) =>
                      `cursor-pointer transition-default hover:text-accent ${isActive ? "text-accent font-semibold" : ""
                      }`
                    }
                  >
                    writing
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/resume"
                    className={({ isActive }) =>
                      `cursor-pointer transition-default hover:text-accent ${isActive ? "text-accent font-semibold" : ""
                      }`
                    }
                  >
                    resume
                  </NavLink>
                </li>
                {/* <li>
                  <a className="cursor-pointer hover:text-accent transition-default">contact</a>
                </li> */}
              </ul>
            </nav>
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-study/edon-sim-pro" element={<EdonSimPro />} />
            <Route path="/case-study/earth-broadband" element={<EarthBroadband />} />
            <Route path="/case-study/infrastructure-migration" element={<InfrastructureMigration />} />
            <Route path="/case-study/n8n-automations" element={<N8nAutomations />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/writing/:slug" element={<ArticleDetail />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>

        <footer className="container-default pb-8">
          <div className="flex flex-col  items-start sm:items-center justify-between gap-3">
            <p className="text-light-text-secondary">Have a role or project in mind?</p>
            <p className="text-light-text-primary dark:text-dark-text-primary">Let's work together</p>

            <div className="flex text-base gap-3 sm:gap-6 items-center text-light-text-secondary dark:text-dark-text-secondary">

              <a
                href={`mailto:senksjay@gmail.com`}
                className="hover:text-accent transition-default"
              >
                Send an email
              </a>
              <span className="hidden sm:inline">•</span>
              <a
                href={"https://github.com/shenkzjay"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-default"
              >
                Github
              </a>
              <span className="hidden sm:inline">•</span>
              <a
                href={"https://www.linkedin.com/in/oluwaseunolajide"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-default"
              >
                LinkedIn
              </a>
            </div>
            <p className="text-xs sm:text-small text-light-text-secondary dark:text-dark-text-secondary">
              © 2026 Seun O.
            </p>

          </div>
        </footer>

        {/* <ThemeToggle /> */}
      </div>
    </Router>
  );
}

export default App;
