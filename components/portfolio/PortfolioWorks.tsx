import { PORTFOLIO_CATEGORIES } from "@/lib/portfolio";
import PortfolioCategory from "./PortfolioCategory";

/** Works index — Taj Studio below-hero portfolio sections */
export default function PortfolioWorks() {
  return (
    <div className="pf" id="works">
      {PORTFOLIO_CATEGORIES.map((category) => (
        <PortfolioCategory key={category.id} category={category} />
      ))}
    </div>
  );
}
