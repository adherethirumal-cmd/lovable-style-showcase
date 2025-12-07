import { Star, Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product, formatPrice } from "@/data/products";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

export function ProductCard({ product, onAdd }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  return (
    <div
      className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-md">
            -{discount}%
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 w-8 h-8 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform hover:scale-110"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${
              isLiked ? "fill-primary text-primary" : "text-muted-foreground"
            }`}
          />
        </button>

        {/* Quick Add */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/80 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            onClick={() => onAdd(product)}
            className="w-full gap-2"
            size="sm"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Details */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
              {product.brand}
            </p>
            <h3 className="font-medium text-sm mt-1 truncate text-foreground">
              {product.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {product.color}
            </p>
          </div>
          <div className="text-right shrink-0">
            <div className="font-semibold text-foreground">
              {formatPrice(product.price)}
            </div>
            <div className="text-xs text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </div>
          </div>
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mt-3">
          <Star className="h-3.5 w-3.5 fill-primary text-primary" />
          <span className="text-xs font-medium text-foreground">{product.rating}</span>
          <span className="text-xs text-muted-foreground">• Free Delivery</span>
        </div>
      </div>
    </div>
  );
}
