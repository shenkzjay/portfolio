import { useState } from "react";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";

export default function Writing() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  return (
    <div className="py-8 sm:py-12 animate-fade-in">
      {/* Back to Home */}
      <Link
        to="/"
        className="group text-small text-accent mb-6 sm:mb-8 inline-block transition-default"
      >
        <span className="relative">
          &larr; Back to Home
          <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-accent transition-all transition-default group-hover:w-full"></span>
        </span>
      </Link>

      {/* Hero Section */}
      <div className="flex flex-col gap-2 sm:gap-3 mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-h2 font-bold text-light-text-primary dark:text-dark-text-primary leading-tight">
          Writing
        </h1>
        <p className="text-sm sm:text-base md:text-body text-light-text-secondary dark:text-dark-text-secondary max-w-3xl leading-relaxed">
          Essays, architectural breakdowns, and engineering notes on 3D web graphics, scalable frontend systems, resilient billing pipelines, and lessons learned from production.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 text-xs rounded-badge transition-default cursor-pointer font-medium ${
                isActive
                  ? "bg-accent text-white"
                  : "bg-light-surface dark:bg-dark-surface text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary border border-light-border dark:border-dark-border"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Articles List */}
      <main className="flex flex-col pb-16 sm:pb-24">
        <div className="flex flex-col border-y border-light-border dark:border-dark-border divide-y divide-light-border dark:border-dark-border">
          {filteredArticles.map((article) => (
            <Link
              key={article.slug}
              to={`/writing/${article.slug}`}
              className="group flex flex-col sm:flex-row justify-between gap-3 sm:gap-8 lg:gap-16 py-6 sm:py-8 cursor-pointer transition-default sm:items-center"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2 sm:gap-3 mb-1.5 text-xs text-light-text-secondary dark:text-dark-text-secondary">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span className="text-accent font-medium">{article.category}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                <h2 className="text-base sm:text-lg md:text-h4 text-light-text-primary font-semibold dark:text-dark-text-primary mb-1.5 group-hover:text-accent transition-colors leading-snug">
                  {article.title}
                </h2>

                <p className="text-xs sm:text-small text-light-text-secondary dark:text-dark-text-secondary leading-relaxed max-w-2xl">
                  {article.excerpt}
                </p>
              </div>

              <div className="self-start sm:self-center shrink-0 pt-1 sm:pt-0">
                <div className="flex items-center gap-1 text-xs sm:text-small text-light-text-secondary dark:text-dark-text-secondary text-nowrap group-hover:text-accent transition-colors transition-default">
                  <span className="relative">
                    Read Article
                    <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-accent transition-all transition-default group-hover:w-full"></span>
                  </span>
                  <span className="transition-transform transition-default group-hover:translate-x-1">
                    &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
