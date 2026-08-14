import type { PortfolioCategory as Category } from "@/lib/portfolio";
import PortfolioBanner from "./PortfolioBanner";
import PortfolioCard from "./PortfolioCard";

type Props = {
  category: Category;
};

/** One category block: sticky title panel + grid that scrolls over it */
export default function PortfolioCategory({ category }: Props) {
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
        <ul className="pf-grid">
          {category.projects.map((project, i) => (
            <li key={`${category.id}-${project.name}`}>
              <PortfolioCard project={project} index={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
