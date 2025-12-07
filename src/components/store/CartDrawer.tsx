import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatPrice, Product } from "@/data/products";

interface CartItem extends Product {
  qty: number;
}

interface CartDrawerProps {
  open: boolean;
  items: CartItem[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, qty: number) => void;
}

export function CartDrawer({ open, items, onClose, onRemove, onUpdateQty }: CartDrawerProps) {
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const itemCount = items.reduce((s, it) => s + it.qty, 0);

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-card shadow-elevated z-50 transform transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <h3 className="font-display font-semibold text-lg text-foreground">Your Cart</h3>
            {itemCount > 0 && (
              <span className="bg-secondary text-secondary-foreground text-xs font-medium px-2 py-0.5 rounded-full">
                {itemCount} items
              </span>
            )}
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Items */}
        <div className="p-5 space-y-4 overflow-auto" style={{ maxHeight: "calc(100% - 200px)" }}>
          {items.length === 0 && (
            <div className="text-center py-12">
              <ShoppingBag className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">Your cart is empty</p>
              <Button variant="outline" className="mt-4" onClick={onClose}>
                Continue Shopping
              </Button>
            </div>
          )}
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-3 bg-secondary/50 rounded-xl animate-fade-in"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-24 object-cover rounded-lg"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm text-foreground truncate">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.color}</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onUpdateQty(item.id, Math.max(0, item.qty - 1))}
                      className="w-7 h-7 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">{item.qty}</span>
                    <button
                      onClick={() => onUpdateQty(item.id, item.qty + 1)}
                      className="w-7 h-7 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <div className="font-semibold text-foreground">{formatPrice(item.price * item.qty)}</div>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-muted-foreground hover:text-destructive transition-colors self-start"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-border bg-card">
            <div className="flex justify-between items-center mb-4">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-display text-xl font-semibold text-foreground">
                {formatPrice(subtotal)}
              </span>
            </div>
            <Button className="w-full" size="lg">
              Proceed to Checkout
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-3">
              Free shipping on orders over ₹999
            </p>
          </div>
        )}
      </div>
    </>
  );
}
