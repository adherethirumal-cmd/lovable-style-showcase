import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Women</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Men</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Sale</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">About</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Subscribe for exclusive offers and new arrivals.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-secondary border-0 rounded-lg px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="font-display text-xl font-semibold text-foreground">Lovable</div>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-primary fill-primary" /> © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
