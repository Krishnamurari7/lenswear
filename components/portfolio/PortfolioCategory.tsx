import type { PortfolioCategory as Category } from "@/lib/portfolio";
import PortfolioBanner from "./PortfolioBanner";
import PortfolioCard from "./PortfolioCard";

type Props = {
  category: Category;
};

/** One category: banner + mixed image/video grid (max 6 items) */
export default function PortfolioCategory({ category }: Props) {
  const items = category.projects.slice(0, 6);

  return (
    <section
      className="pf-cat"
      id={category.id}
      aria-labelledby={`${category.id}-title`}
    >
      <PortfolioBanner
        title={category.title}
        image={category.banner}
        titleId={`${category.id}-title`}
      />
      <div className="pf-grid-wrap">
        {items.length > 0 && (
          <ul className="pf-grid">
            {items.map((project) => (
              <li key={`${category.id}-${project.name}`}>
                <PortfolioCard
                  project={project}
                  isVideo={Boolean(project.video)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
