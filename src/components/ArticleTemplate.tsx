import React from "react";
import { Link } from "react-router-dom";

export interface DecisionRow {
  decision: string;
  rationale: string;
  tradeoff: string;
}

export interface DecisionsTableProps {
  title?: string;
  description?: string;
  headers?: [string, string, string];
  rows: DecisionRow[];
}

export interface ArticleTemplateProps {
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  tags?: string[];
  backLinkText?: string;
  backLinkTo?: string;
  overview?: React.ReactNode | string;
  decisionsTable?: DecisionsTableProps;
  keyTakeaway?: React.ReactNode | string;
  nextArticle?: { title: string; slug: string };
  prevArticle?: { title: string; slug: string };
  children?: React.ReactNode;
}

export default function ArticleTemplate({
  title,
  subtitle,
  date,
  readTime,
  category,
  tags = [],
  backLinkText = "← Back to Writing",
  backLinkTo = "/writing",
  overview,
  decisionsTable,
  keyTakeaway,
  nextArticle,
  prevArticle,
  children,
}: ArticleTemplateProps) {
  return (
    <article className="py-8 sm:py-12 animate-fade-in">
      {/* Back Navigation */}
      <Link
        to={backLinkTo}
        className="group text-small text-accent mb-6 sm:mb-8 inline-flex items-center gap-1 transition-default"
      >
        <span className="relative">
          {backLinkText}
          <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-accent transition-all transition-default group-hover:w-full"></span>
        </span>
      </Link>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-h3 font-bold text-light-text-primary dark:text-dark-text-primary mb-2 leading-tight">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-h4 text-light-text-secondary dark:text-dark-text-secondary mb-4 leading-relaxed">
          {subtitle}
        </p>

        {/* Tags Row */}
        {tags.length > 0 && (
          <div className="flex flex-wrap text-xs gap-3 sm:gap-6 mb-8 sm:mb-10 items-center">
            {tags.map((tag, idx) => (
              <span key={tag} className="flex items-center gap-3 sm:gap-6">
                <span className="text-slate-400 dark:text-slate-500 font-medium">
                  {tag}
                </span>
                {idx < tags.length - 1 && (
                  <span className="hidden sm:inline text-slate-400 dark:text-slate-500" aria-hidden="true">
                    •
                  </span>
                )}
              </span>
            ))}
          </div>
        )}

        {/* Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 border-y border-light-border dark:border-dark-border divide-y sm:divide-y-0 sm:divide-x divide-light-border dark:divide-dark-border">
          <div className="flex flex-col justify-center py-3.5 sm:py-4 sm:pr-4">
            <h2 className="text-xs sm:text-sm font-semibold text-light-text-primary dark:text-dark-text-primary uppercase tracking-wider">
              Published
            </h2>
            <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary mt-0.5">
              {date}
            </p>
          </div>
          <div className="flex flex-col justify-center py-3.5 sm:py-4 sm:px-4">
            <h2 className="text-xs sm:text-sm font-semibold text-light-text-primary dark:text-dark-text-primary uppercase tracking-wider">
              Read Time
            </h2>
            <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary mt-0.5">
              {readTime}
            </p>
          </div>
          <div className="flex flex-col justify-center py-3.5 sm:py-4 sm:pl-4">
            <h2 className="text-xs sm:text-sm font-semibold text-light-text-primary dark:text-dark-text-primary uppercase tracking-wider">
              Topic
            </h2>
            <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary mt-0.5">
              {category}
            </p>
          </div>
        </div>
      </header>

      {/* Overview Section */}
      {overview && (
        <section className="mt-8 sm:mt-12 space-y-4 border-b border-light-border dark:border-dark-border pb-8 sm:pb-12">
          <h2 className="text-xl sm:text-2xl md:text-h3 font-bold text-light-text-primary dark:text-dark-text-primary">
            Overview
          </h2>
          {typeof overview === "string" ? (
            <p className="text-sm sm:text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              {overview}
            </p>
          ) : (
            overview
          )}
        </section>
      )}

      {/* Main Body Content */}
      <main className="article-body">
        {children}
      </main>

      {/* Engineering Decisions / Trade-offs Table */}
      {decisionsTable && (
        <section className="py-8 sm:py-12 border-b border-light-border dark:border-dark-border">
          <div className="flex flex-col gap-2 mb-6">
            <h2 className="text-xl sm:text-2xl md:text-h3 font-bold text-light-text-primary dark:text-dark-text-primary">
              {decisionsTable.title || "Engineering Decisions"}
            </h2>
            {decisionsTable.description && (
              <p className="text-body text-light-text-secondary dark:text-dark-text-secondary">
                {decisionsTable.description}
              </p>
            )}
          </div>
          <div className="w-full overflow-x-auto">
            <table className="min-w-[550px] sm:min-w-full border border-light-border dark:border-dark-border w-full border-collapse border-l-0 border-r-0">
              <thead>
                <tr className="border-b border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface/50">
                  <th className="text-left p-4 border-b border-light-border dark:border-dark-border font-semibold text-xs sm:text-sm uppercase tracking-wider text-light-text-primary dark:text-dark-text-primary">
                    {decisionsTable.headers?.[0] || "Decision"}
                  </th>
                  <th className="text-left p-4 border-b border-light-border dark:border-dark-border font-semibold text-xs sm:text-sm uppercase tracking-wider text-light-text-primary dark:text-dark-text-primary">
                    {decisionsTable.headers?.[1] || "Why we chose it"}
                  </th>
                  <th className="text-left p-4 border-b border-light-border dark:border-dark-border font-semibold text-xs sm:text-sm uppercase tracking-wider text-light-text-primary dark:text-dark-text-primary">
                    {decisionsTable.headers?.[2] || "Trade-off"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {decisionsTable.rows.map((row, idx) => (
                  <tr key={idx} className="border-b border-light-border dark:border-dark-border">
                    <td className="p-4 border-b border-light-border dark:border-dark-border align-top">
                      <p className="text-sm font-medium text-light-text-primary dark:text-dark-text-primary">
                        {row.decision}
                      </p>
                    </td>
                    <td className="p-4 border-b border-light-border dark:border-dark-border align-top">
                      <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                        {row.rationale}
                      </p>
                    </td>
                    <td className="p-4 border-b border-light-border dark:border-dark-border align-top">
                      <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                        {row.tradeoff}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Key Takeaways Section */}
      {keyTakeaway && (
        <section className="mt-8 sm:mt-12 flex flex-col gap-3 border-t border-light-border dark:border-dark-border py-8 sm:py-12">
          <h2 className="text-xl sm:text-2xl md:text-h3 font-bold text-light-text-primary dark:text-dark-text-primary">
            Key Takeaways
          </h2>
          {typeof keyTakeaway === "string" ? (
            <p className="text-body text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
              {keyTakeaway}
            </p>
          ) : (
            keyTakeaway
          )}
        </section>
      )}

      {/* Navigation Footer (Prev / Next Articles) */}
      {(prevArticle || nextArticle) && (
        <nav
          aria-label="Article navigation"
          className="pt-8 sm:pt-10 border-t border-light-border dark:border-dark-border flex flex-col sm:flex-row justify-between gap-6"
        >
          {prevArticle ? (
            <Link
              to={`/writing/${prevArticle.slug}`}
              className="group flex flex-col gap-1 hover:text-accent transition-default"
            >
              <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary flex items-center gap-1">
                &larr; Previous Article
              </span>
              <span className="text-sm sm:text-base font-semibold text-light-text-primary dark:text-dark-text-primary group-hover:text-accent transition-colors">
                {prevArticle.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextArticle && (
            <Link
              to={`/writing/${nextArticle.slug}`}
              className="group flex flex-col gap-1 sm:text-right hover:text-accent transition-default"
            >
              <span className="text-xs text-light-text-secondary dark:text-dark-text-secondary flex items-center justify-start sm:justify-end gap-1">
                Next Article &rarr;
              </span>
              <span className="text-sm sm:text-base font-semibold text-light-text-primary dark:text-dark-text-primary group-hover:text-accent transition-colors">
                {nextArticle.title}
              </span>
            </Link>
          )}
        </nav>
      )}
    </article>
  );
}
