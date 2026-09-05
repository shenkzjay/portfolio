import { Link } from "react-router-dom";
import { resume } from "../data/resume";

export default function Resume() {
  return (
    <div className="py-8 sm:py-12 animate-fade-in">
      <Link
        to="/"
        className="group text-small text-accent mb-6 sm:mb-8 inline-block transition-default"
      >
        <span className="relative">
          &larr; Back to Home
          <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-accent transition-all transition-default group-hover:w-full"></span>
        </span>
      </Link>

      <div className="flex flex-col gap-2 sm:gap-3 mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-h2 font-bold text-light-text-primary dark:text-dark-text-primary leading-tight">
          {resume.name}
        </h1>
        <p className="text-sm sm:text-base md:text-body text-light-text-secondary dark:text-dark-text-secondary">
          {resume.title}
        </p>
        <div className="flex flex-wrap text-xs gap-3 sm:gap-6 items-center text-light-text-secondary dark:text-dark-text-secondary">
          <span>{resume.location}</span>
          <span className="hidden sm:inline">•</span>
          <a
            href={`mailto:${resume.email}`}
            className="hover:text-accent transition-default"
          >
            {resume.email}
          </a>
          <span className="hidden sm:inline">•</span>
          <span>{resume.phone}</span>
          <span className="hidden sm:inline">•</span>
          <a
            href={resume.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-default"
          >
            Github
          </a>
          <span className="hidden sm:inline">•</span>
          <a
            href={resume.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-default"
          >
            LinkedIn
          </a>
        </div>
        <div>
          <a
            href="/Olajide_Seun_resume_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 sm:mt-6 px-4 py-2 bg-accent text-white rounded-button text-sm font-medium hover:bg-opacity-90 transition-default"
          >
            Download resume
          </a>
        </div>
      </div>

      {/* Summary */}
      <div className="border-y border-light-border dark:border-dark-border py-6 sm:py-8 mb-8 sm:mb-12">
        <h2 className="text-lg sm:text-xl md:text-h3 font-semibold text-light-text-primary dark:text-dark-text-primary mb-3">
          Summary
        </h2>
        <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
          {resume.summary}
        </p>
      </div>

      {/* Technical Skills */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-lg sm:text-xl md:text-h3 font-semibold text-light-text-primary dark:text-dark-text-primary mb-4 sm:mb-6">
          Technical Skills
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-light-text-secondary dark:text-dark-text-secondary">
              Frontend
            </h3>
            <p className="text-sm sm:text-body text-light-text-primary dark:text-dark-text-primary">
              {resume.skills.frontend}
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-light-text-secondary dark:text-dark-text-secondary">
              Engineering
            </h3>
            <p className="text-sm sm:text-body text-light-text-primary dark:text-dark-text-primary">
              {resume.skills.engineering}
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-light-text-secondary dark:text-dark-text-secondary">
              Deployment
            </h3>
            <p className="text-sm sm:text-body text-light-text-primary dark:text-dark-text-primary">
              {resume.skills.deployment}
            </p>
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-light-text-secondary dark:text-dark-text-secondary">
              Design
            </h3>
            <p className="text-sm sm:text-body text-light-text-primary dark:text-dark-text-primary">
              {resume.skills.design}
            </p>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-lg sm:text-xl md:text-h3 font-semibold text-light-text-primary dark:text-dark-text-primary mb-4 sm:mb-6">
          Experience
        </h2>
        <div className="flex flex-col gap-8 sm:gap-10">
          {resume.experience.map((job, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 pb-8 sm:pb-10 border-b border-light-border dark:border-dark-border last:border-b-0 last:pb-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-light-text-primary dark:text-dark-text-primary">
                    {job.role}
                  </h3>
                  <p className="text-sm text-accent">{job.company}</p>
                </div>
                <p className="text-xs sm:text-small text-light-text-secondary dark:text-dark-text-secondary">
                  {job.period}
                </p>
              </div>
              <ul className="flex flex-col gap-2 ml-4 list-disc">
                {job.highlights.map((highlight, hIdx) => (
                  <li
                    key={hIdx}
                    className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="border-t border-light-border dark:border-dark-border pt-8 sm:pt-10 pb-8 sm:pb-12">
        <h2 className="text-lg sm:text-xl md:text-h3 font-semibold text-light-text-primary dark:text-dark-text-primary mb-4 sm:mb-6">
          Education
        </h2>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-light-text-primary dark:text-dark-text-primary">
              {resume.education.degree}
            </h3>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
              {resume.education.school}
            </p>
          </div>
          <p className="text-xs sm:text-small text-light-text-secondary dark:text-dark-text-secondary">
            {resume.education.period}
          </p>
        </div>
      </div>
    </div>
  );
}
