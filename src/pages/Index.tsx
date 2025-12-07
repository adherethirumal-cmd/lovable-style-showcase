import { useState, useMemo } from "react";
import { Navbar } from "@/components/store/Navbar";
import { ProductCard } from "@/components/store/ProductCard";
import { Filters } from "@/components/store/Filters";
import { CartDrawer } from "@/components/store/CartDrawer";
import { Footer } from "@/components/store/Footer";
import { SAMPLE_PRODUCTS, Product } from "@/data/products";
import { Package } from "lucide-react";

interface CartItem extends Product {
  qty: number;
}

const Index = () => {
  const [products] = useState(SAMPLE_PRODUCTS);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("featured");
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))),
    [products]
  );

  const filtered = useMemo(() => {
    let out = products.filter((p) => {
      const q = search.trim().toLowerCase();
      if (q && !`${p.title} ${p.brand} ${p.category}`.toLowerCase().includes(q))
        return false;
      if (category && p.category !== category) return false;
      return true;
    });

    if (sort === "price-asc") out = [...out].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") out = [...out].sort((a, b) => b.price - a.price);
    else if (sort === "rating") out = [...out].sort((a, b) => b.rating - a.rating);

    return out;
  }, [products, search, category, sort]);

  function addToCart(p: Product) {
    setCartItems((prev) => {
      const idx = prev.findIndex((x) => x.id === p.id);
      if (idx === -1) return [...prev, { ...p, qty: 1 }];
      const copy = [...prev];
      copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 };
      return copy;
    });
    setCartOpen(true);
  }

  function removeFromCart(id: string) {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  }

  function updateCartQty(id: string, qty: number) {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        onOpenCart={() => setCartOpen(true)}
        cartCount={cartItems.reduce((s, it) => s + it.qty, 0)}
        onSearch={setSearch}
        search={search}
      />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-secondary to-muted overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-xl animate-fade-in">
            <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">
              New Collection
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Discover Your{" "}
              <span className="text-primary">Perfect Style</span>
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Explore our curated collection of premium clothing designed for
              comfort and elegance.
            </p>
            <button className="mt-6 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all shadow-soft hover:shadow-elevated">
              Shop Now
            </button>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          <div className="absolute top-10 right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-40 w-60 h-60 bg-primary/20 rounded-full blur-3xl" />
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-card rounded-xl p-5 shadow-soft sticky top-24">
              <Filters
                categories={categories}
                activeCategory={category}
                onChangeCategory={setCategory}
                sort={sort}
                onSortChange={setSort}
              />
            </div>
          </aside>

          {/* Products */}
          <section className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                {category || "All Products"}
              </h2>
              <span className="text-sm text-muted-foreground">
                {filtered.length} items
              </span>
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filtered.map((p, idx) => (
                  <div
                    key={p.id}
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <ProductCard product={p} onAdd={addToCart} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Package className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  No products found
                </h3>
                <p className="text-muted-foreground mt-1">
                  Try adjusting your filters or search terms
                </p>
              </div>
            )}
          </section>
        </div>
      </main>

      <CartDrawer
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onUpdateQty={updateCartQty}
      />

      <Footer />
    </div>
  );
};

export default Index;
