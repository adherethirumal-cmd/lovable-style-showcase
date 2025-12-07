import { Search, ShoppingBag, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface NavbarProps {
  onOpenCart: () => void;
  cartCount: number;
  onSearch: (query: string) => void;
  search: string;
}

export function Navbar({ onOpenCart, cartCount, onSearch, search }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Nav */}
          <div className="flex items-center gap-8">
            <div className="font-display text-2xl font-semibold tracking-tight text-foreground">
              Lovable
            </div>
            <nav className="hidden md:flex gap-6">
              <Button variant="nav">Women</Button>
              <Button variant="nav">Men</Button>
              <Button variant="nav">Kids</Button>
              <Button variant="nav" className="text-primary font-medium">
                Sale
              </Button>
            </nav>
          </div>

          {/* Search */}
          <div className="hidden sm:block flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={search}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-secondary border-0 rounded-full pl-10 pr-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="cart"
              onClick={onOpenCart}
              className="relative gap-2"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground rounded-full text-xs min-w-[20px] h-5 flex items-center justify-center font-medium animate-scale-in">
                  {cartCount}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="sm:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-secondary border-0 rounded-full pl-10 pr-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2 animate-fade-in">
            <Button variant="ghost" className="justify-start">Women</Button>
            <Button variant="ghost" className="justify-start">Men</Button>
            <Button variant="ghost" className="justify-start">Kids</Button>
            <Button variant="ghost" className="justify-start text-primary">Sale</Button>
          </nav>
        )}
      </div>
    </header>
  );
}
