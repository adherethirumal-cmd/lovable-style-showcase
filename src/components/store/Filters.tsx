import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

interface FiltersProps {
  categories: string[];
  activeCategory: string;
  onChangeCategory: (category: string) => void;
  sort: string;
  onSortChange: (sort: string) => void;
}

export function Filters({
  categories,
  activeCategory,
  onChangeCategory,
  sort,
  onSortChange,
}: FiltersProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2 text-foreground">
        <SlidersHorizontal className="h-4 w-4" />
        <h3 className="font-display font-semibold">Filters</h3>
      </div>

      {/* Categories */}
      <div>
        <h4 className="text-sm font-medium text-foreground mb-3">Category</h4>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={activeCategory === "" ? "filterActive" : "filter"}
            size="sm"
            onClick={() => onChangeCategory("")}
          >
            All
          </Button>
          {categories.map((c) => (
            <Button
              key={c}
              variant={activeCategory === c ? "filterActive" : "filter"}
              size="sm"
              onClick={() => onChangeCategory(c)}
            >
              {c}
            </Button>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div>
        <h4 className="text-sm font-medium text-foreground mb-3">Sort By</h4>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full bg-secondary text-foreground border-0 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {/* Promo */}
      <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
        <h4 className="font-display font-semibold text-foreground">Free Shipping</h4>
        <p className="text-xs text-muted-foreground mt-1">
          On all orders over ₹999. Easy returns within 15 days.
        </p>
      </div>
    </div>
  );
}
