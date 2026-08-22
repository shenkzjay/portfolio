import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EdonSimPro from "./pages/EdonSimPro";
import EarthBroadband from "./pages/EarthBroadband";
import InfrastructureMigration from "./pages/InfrastructureMigration";
import N8nAutomations from "./pages/N8nAutomations";
import "./App.css";




const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      className="fixed bottom-4 right-4 bg-accent text-white p-3 rounded-badge shadow-medium hover:bg-opacity-90 transition-default"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

function Home() {
  return (
    <>
      <div className="mt-section-gap">
        <div className="flex flex-col justify-center w-full gap-2">
          <h1 className="text-h3 text-light-text-primary dark:text-dark-text-primary">Engineering products that people depend on.</h1>
          <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">As a Frontend Engineer with over the past 7 years, I've built scalable SaaS platforms, immersive 3D learning experiences, and deployment infrastructure for startups and public institutions, serving thousands of users.</p>
        </div>

        <div className="mt-component-gap flex flex-row justify-between border-y border-light-border dark:border-dark-border">
          <div className="flex flex-col justify-between py-4 pl-4">
            <h3 className="text-h4 text-light-text-primary dark:text-dark-text-primary">7+</h3>
            <p className="text-small text-light-text-secondary dark:text-dark-text-secondary">Years Experience</p>
          </div>
          <span className="border-r border-light-border dark:border-dark-border"></span>
          <div className="flex flex-col justify-between py-4 pl-4">
            <h3 className="text-h4 text-light-text-primary dark:text-dark-text-primary">4,000+</h3>
            <p className="text-small text-light-text-secondary dark:text-dark-text-secondary">Customers Supported</p>
          </div>
          <span className="border-r border-light-border dark:border-dark-border"></span>
          <div className="flex flex-col justify-between py-4 pl-4">
            <h3 className="text-h4 text-light-text-primary dark:text-dark-text-primary">65</h3>
            <p className="text-small text-light-text-secondary dark:text-dark-text-secondary">Colleges Deployed</p>
          </div>
          <span className="border-r border-light-border dark:border-dark-border"></span>
          <div className="flex flex-col justify-between py-4 pl-4">
            <h3 className="text-h4 text-light-text-primary dark:text-dark-text-primary">80%</h3>
            <p className="text-small text-light-text-secondary dark:text-dark-text-secondary">Reduction in billing errors</p>
          </div>
        </div>
      </div>

      <main className="mt-section-gap flex flex-col section-gap">
        <section>
          <h2 className="text-h2 text-light-text-primary dark:text-dark-text-primary mb-component-gap">Featured work</h2>
          <div className="flex flex-col border-y border-light-border dark:border-dark-border divide-y divide-light-border dark:divide-dark-border">

            <Link to="/case-study/edon-sim-pro" className="group flex flex-row justify-between gap-20 py-8 cursor-pointer transition-default items-center">
              <div className="flex flex-col">
                <h3 className="text-h4 text-light-text-primary font-semibold dark:text-dark-text-primary mb-1">EDON SIM-PRO</h3>
                <div className="flex flex-col">
                  <p className="text-small text-light-text-secondary dark:text-dark-text-secondary">Interactive 3D simulation-based learning platform deployed across 65 Federal Colleges.</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-small text-light-text-secondary dark:text-dark-text-secondary text-nowrap group-hover:text-accent transition-colors transition-default">
                  <span className="relative">
                    View Case Study
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-accent transition-all transition-default group-hover:w-full"></span>
                  </span>
                  <span className="transition-transform transition-default group-hover:translate-x-1">&rarr;</span>
                </div>
              </div>
            </Link>

            <Link to="/case-study/earth-broadband" className="group flex flex-row justify-between gap-20 py-8 cursor-pointer transition-default items-center">
              <div className="flex flex-col">
                <h3 className="text-h4 text-light-text-primary font-semibold dark:text-dark-text-primary mb-1">EARTH BROADBAND</h3>
                <div className="flex flex-col">
                  <p className="text-small text-light-text-secondary dark:text-dark-text-secondary">Reduced billing errors by 80% while supporting 4,000+ customers.</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-small text-light-text-secondary dark:text-dark-text-secondary text-nowrap group-hover:text-accent transition-colors transition-default">
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

        <section>
          <h2 className="text-h2 text-light-text-primary dark:text-dark-text-primary mb-component-gap">Systems & Infrastructure</h2>
          <div className="flex flex-col border-y border-light-border dark:border-dark-border divide-y divide-light-border dark:divide-dark-border">

            <Link to="/case-study/infrastructure-migration" className="group flex flex-row justify-between gap-20 py-8 cursor-pointer transition-default items-center">
              <div className="flex flex-col">
                <h3 className="text-h4 text-light-text-primary font-semibold dark:text-dark-text-primary mb-1">INFRASTRUCTURE MIGRATION</h3>
                <div className="flex flex-col">
                  <p className="text-small text-light-text-secondary dark:text-dark-text-secondary">Consolidating 65 isolated cloud instances into a centralized VPS architecture to reducing operational costs and simplifying deployment.</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-small text-light-text-secondary dark:text-dark-text-secondary text-nowrap group-hover:text-accent transition-colors transition-default">
                  <span className="relative">
                    View Case Study
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-accent transition-all transition-default group-hover:w-full"></span>
                  </span>
                  <span className="transition-transform transition-default group-hover:translate-x-1">&rarr;</span>
                </div>
              </div>
            </Link>

            <Link to="/case-study/n8n-automations" className="group flex flex-row justify-between gap-20 py-8 cursor-pointer transition-default items-center">
              <div className="flex flex-col">
                <h3 className="text-h4 text-light-text-primary font-semibold dark:text-dark-text-primary mb-1">N8N AUTOMATIONS</h3>
                <div className="flex flex-col">
                  <p className="text-small text-light-text-secondary dark:text-dark-text-secondary">Orchestrating automated workflows to generate and qualify high-conversion leads, reducing manual data entry.</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-small text-light-text-secondary dark:text-dark-text-secondary text-nowrap group-hover:text-accent transition-colors transition-default">
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
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text-primary dark:text-dark-text-primary">
        <div className="container-default">
          <header className="pt-6 ">
            <nav className="flex w-full items-center justify-between">
              <div>
                <Link to="/">
                  <h3>Olajide Seun</h3>
                </Link>
              </div>
              <ul className="flex justify-end list-style-none element-gap">
                <li>
                </li>
                <li>
                  <a className="cursor-pointer hover:text-accent transition-default">writing</a>
                </li>
                <li>
                  <a className="cursor-pointer hover:text-accent transition-default">engineering</a>
                </li>
                <li>
                  <a className="cursor-pointer hover:text-accent transition-default">resume</a>
                </li>
                <li>
                  <a className="cursor-pointer hover:text-accent transition-default">contact</a>
                </li>
              </ul>
            </nav>
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-study/edon-sim-pro" element={<EdonSimPro />} />
            <Route path="/case-study/earth-broadband" element={<EarthBroadband />} />
            <Route path="/case-study/infrastructure-migration" element={<InfrastructureMigration />} />
            <Route path="/case-study/n8n-automations" element={<N8nAutomations />} />
          </Routes>
        </div>

        <ThemeToggle />
      </div>
    </Router>
  );
}

export default App;
