import { useState } from "react";
import { X, Sparkles } from "lucide-react";

const PromoBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-primary text-primary-foreground relative">
      <div className="container flex items-center justify-center gap-2 py-2.5 text-sm font-medium">
        <Sparkles className="h-4 w-4 text-accent" />
        <span>
          🔥 <strong>Spring Sale!</strong> Up to 30% off stationery & paper products —{" "}
          <a href="/catalogue" className="underline underline-offset-2 hover:opacity-80">
            Shop now
          </a>
        </span>
        <Sparkles className="h-4 w-4 text-accent" />
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
