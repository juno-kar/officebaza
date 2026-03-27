import { ShoppingCart } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="bg-card rounded-xl border overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative h-40 bg-secondary flex items-center justify-center text-5xl">
        {product.image}
        {product.badge && (
          <span
            className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${
              product.badge === "Sale"
                ? "bg-sale text-sale-foreground"
                : "bg-accent text-accent-foreground"
            }`}
          >
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sm text-foreground leading-tight mb-1.5">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAdd}
            className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 hover:opacity-90 transition-opacity"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
