import { useState, useRef, useEffect } from "react";
import { X, Sparkles } from "lucide-react";

const PromoBanner = () => {
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const h = visible && ref.current ? ref.current.offsetHeight : 0;
      document.documentElement.style.setProperty("--promo-height", `${h}px`);
    };
    update();
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      document.documentElement.style.setProperty("--promo-height", "0px");
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div ref={ref} className="bg-primary text-primary-foreground relative sticky top-0 z-[60]">
      <div className="container flex items-center justify-center gap-2 py-2.5 text-sm font-medium">
        <Sparkles className="h-4 w-4 text-accent" />
        <span>
          🔥 <strong>Весняний розпродаж!</strong> Знижки до 30% на канцелярію та паперову продукцію —{" "}
          <a href="/catalogue" className="underline underline-offset-2 hover:opacity-80">
            Переглянути
          </a>
        </span>
        <Sparkles className="h-4 w-4 text-accent" />
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
          aria-label="Закрити банер"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
