import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EdonSimPro from "./pages/EdonSimPro";
import EarthBroadband from "./pages/EarthBroadband";
import InfrastructureMigration from "./pages/InfrastructureMigration";
import N8nAutomations from "./pages/N8nAutomations";
import "./App.css";

// Design System Components
const Button = ({
  children,
  variant = "primary",
  onClick,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  onClick?: () => void;
}) => {
  const baseClasses =
    "px-6 py-3 rounded-button font-medium transition-default focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50";
  const variants = {
    primary: "bg-accent text-white hover:bg-opacity-90",
    secondary:
      "bg-light-surface dark:bg-dark-surface text-light-text-primary dark:text-dark-text-primary border border-light-border dark:border-dark-border hover:bg-opacity-80",
    ghost: "text-accent hover:bg-accent hover:text-white",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

const Card = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <div className="bg-light-surface dark:bg-dark-surface rounded-card p-6 shadow-small transition-default hover:shadow-medium">
      <h3 className="text-h3 text-light-text-primary dark:text-dark-text-primary mb-4">{title}</h3>
      <div className="text-body text-light-text-secondary dark:text-dark-text-secondary">
        {children}
      </div>
    </div>
  );
};

const TypographyExample = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-hero text-light-text-primary dark:text-dark-text-primary">
        Hero Heading
      </h1>
      <h2 className="text-h1 text-light-text-primary dark:text-dark-text-primary">H1 Heading</h2>
      <h3 className="text-h2 text-light-text-primary dark:text-dark-text-primary">H2 Heading</h3>
      <h4 className="text-h3 text-light-text-primary dark:text-dark-text-primary">H3 Heading</h4>
      <p className="text-body text-light-text-primary dark:text-dark-text-primary">
        Body text - Default content with proper line height and spacing.
      </p>
      <p className="text-small text-light-text-secondary dark:text-dark-text-secondary">
        Small text - Metadata and supporting text.
      </p>
      <code className="text-code bg-light-surface dark:bg-dark-surface p-2 rounded-input">
        Code snippet
      </code>
    </div>
  );
};

const LayoutExample = () => {
  return (
    <div className="container-default section-padding">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <Card title="Main Content">
            <p>This is the main content area using a 12-column grid system with 24px column gap.</p>
            <div className="mt-4 space-x-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-4">
          <Card title="Sidebar">
            <p>Sidebar content with proper spacing and layout.</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

const ColorPalette = () => {
  const colors = [
    { name: "Accent", value: "accent" },
    { name: "Success", value: "success" },
    { name: "Warning", value: "warning" },
    { name: "Error", value: "error" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {colors.map((color) => (
        <div key={color.name} className="space-y-2">
          <div className={`h-20 w-full rounded-input bg-${color.value}`}></div>
          <p className="text-small text-center">{color.name}</p>
        </div>
      ))}
    </div>
  );
};

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
