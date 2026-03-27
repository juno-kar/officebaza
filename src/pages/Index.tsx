import { Link } from "react-router-dom";
import { ArrowRight, Star, Truck, Shield, Tag } from "lucide-react";
import heroImage from "@/assets/hero-office.jpg";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const featuredProducts = products.filter((p) => p.badge);

const perks = [
  { icon: Truck, title: "Безкоштовна доставка", desc: "При замовленні від 1500 ₴" },
  { icon: Shield, title: "Гарантія якості", desc: "Тільки перевірені бренди" },
  { icon: Tag, title: "Найкращі ціни", desc: "Гарантія найнижчої ціни" },
  { icon: Star, title: "Бонуси лояльності", desc: "Бали за кожну покупку" },
];

const categoryCards = [
  { name: "Канцелярія", emoji: "✏️", color: "bg-secondary" },
  { name: "Паперова продукція", emoji: "📄", color: "bg-secondary" },
  { name: "Товари для дому", emoji: "🏠", color: "bg-secondary" },
  { name: "Шкільне приладдя", emoji: "🎒", color: "bg-secondary" },
  { name: "Творчість", emoji: "🎨", color: "bg-secondary" },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Преміум канцелярське приладдя"
            className="w-full h-full object-cover"
            width={1920}
            height={800}
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container py-24 md:py-36">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-card mb-4 leading-tight">
              Все для офісу, класу та дому
            </h1>
            <p className="text-lg text-card/80 mb-8">
              Преміум канцелярія, паперова продукція та товари для дому — все в одному місці. Якість, якій довіряють, ціни, які радують.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/catalogue"
                className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                До каталогу <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="bg-card/20 text-card border border-card/30 px-6 py-3 rounded-lg font-semibold hover:bg-card/30 transition-colors"
              >
                Про нас
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="border-b bg-card">
        <div className="container py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {perks.map((perk) => (
            <div key={perk.title} className="flex items-center gap-3">
              <div className="bg-secondary rounded-lg p-2.5">
                <perk.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{perk.title}</p>
                <p className="text-xs text-muted-foreground">{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container py-16">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
          Каталог за категоріями
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categoryCards.map((cat) => (
            <Link
              key={cat.name}
              to={`/catalogue?category=${encodeURIComponent(cat.name)}`}
              className={`${cat.color} rounded-xl p-6 text-center hover:shadow-md transition-shadow group`}
            >
              <span className="text-3xl block mb-2">{cat.emoji}</span>
              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-card border-y">
        <div className="container py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">Найкращі пропозиції</h2>
            <Link
              to="/catalogue"
              className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
            >
              Переглянути всі <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">
          Потрібні товари оптом?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Ми пропонуємо спеціальні ціни для бізнесу, шкіл та організацій. Зв'яжіться з нами для індивідуальної пропозиції.
        </p>
        <Link
          to="/about"
          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          Стати партнером <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
};

export default Index;
