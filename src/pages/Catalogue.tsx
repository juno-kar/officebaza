import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products, categories, type Category } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { X, ShoppingCart } from "lucide-react";

const Catalogue = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get("category") as Category) || "Усі";
  const [activeCategory, setActiveCategory] = useState<Category>(initialCategory);
  const [cartOpen, setCartOpen] = useState(false);
  const { items, removeItem, clearCart } = useCart();

  const filtered =
    activeCategory === "Усі"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const cartTotal = items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    if (cat === "Усі") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Каталог</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Переглядайте наш повний асортимент офісних та творчих товарів
          </p>
        </div>
        <button
          onClick={() => setCartOpen(!cartOpen)}
          className="relative bg-primary text-primary-foreground px-4 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <ShoppingCart className="h-4 w-4" />
          Кошик
          {cartCount > 0 && (
            <span className="bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {cartOpen && (
        <div className="bg-card border rounded-xl p-5 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Ваш кошик</h3>
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs text-muted-foreground hover:text-sale"
              >
                Очистити все
              </button>
            )}
          </div>
          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground">Ваш кошик порожній.</p>
          ) : (
            <>
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center justify-between py-2 border-b last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <img src={item.product.image} alt={item.product.name} className="w-10 h-10 rounded object-cover" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {item.product.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        К-сть: {item.quantity} × {item.product.price} ₴
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-foreground">
                      {(item.product.price * item.quantity)} ₴
                    </span>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-muted-foreground hover:text-sale"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between mt-4 pt-3 border-t">
                <span className="font-semibold text-foreground">Разом:</span>
                <span className="text-lg font-bold text-primary">
                  {cartTotal} ₴
                </span>
              </div>
            </>
          )}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          Товарів у цій категорії не знайдено.
        </p>
      )}
    </div>
  );
};

export default Catalogue;
