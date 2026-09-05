import { useParams, Link } from "react-router-dom";
import ArticleTemplate from "../components/ArticleTemplate";
import { articles } from "../data/articles";

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();

  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const article = articles[currentIndex];

  if (!article) {
    return (
      <div className="py-12 text-center">
        <Link
          to="/writing"
          className="text-small text-accent hover:underline mb-8 inline-block"
        >
          &larr; Back to Writing
        </Link>
        <h1 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-4">
          Article Not Found
        </h1>
        <p className="text-body text-light-text-secondary dark:text-dark-text-secondary mb-6">
          The article you are looking for does not exist or may have been moved.
        </p>
        <Link
          to="/writing"
          className="px-4 py-2 bg-accent text-white rounded-button text-sm font-medium hover:bg-opacity-90 transition-default"
        >
          Browse all articles
        </Link>
      </div>
    );
  }

  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : undefined;
  const nextArticle =
    currentIndex < articles.length - 1 ? articles[currentIndex + 1] : undefined;

  return (
    <ArticleTemplate
      title={article.title}
      subtitle={article.subtitle}
      date={article.date}
      readTime={article.readTime}
      category={article.category}
      tags={article.tags}
      backLinkText="← Back to Writing"
      backLinkTo="/writing"
      decisionsTable={article.decisionsTable}
      keyTakeaway={article.keyTakeaways}
      prevArticle={
        prevArticle
          ? { title: prevArticle.title, slug: prevArticle.slug }
          : undefined
      }
      nextArticle={
        nextArticle
          ? { title: nextArticle.title, slug: nextArticle.slug }
          : undefined
      }
    >
      {article.sections.map((section, idx) => (
        <section
          key={idx}
          className="py-8 sm:py-12 border-b border-light-border dark:border-dark-border"
        >
          <h2 className="text-xl sm:text-2xl md:text-h3 font-bold text-light-text-primary dark:text-dark-text-primary mb-4 sm:mb-6">
            {section.title}
          </h2>
          {section.content}
        </section>
      ))}
    </ArticleTemplate>
  );
}
