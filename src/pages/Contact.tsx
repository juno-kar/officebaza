import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock, MessageCircle, Headphones } from "lucide-react";
import contactImg from "@/assets/contact-team.jpg";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Повідомлення надіслано! Ми зв'яжемось з вами найближчим часом.");
    setForm({ name: "", email: "", message: "" });
  };

  const contactCards = [
    {
      icon: Phone,
      title: "Телефон",
      content: (
        <a href="tel:+380441234567" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          +38 (044) 123-45-67
        </a>
      ),
      sub: "Пн–Пт, 9:00 – 18:00",
    },
    {
      icon: Mail,
      title: "Електронна пошта",
      content: (
        <a href="mailto:info@officebaza.ua" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          info@officebaza.ua
        </a>
      ),
      sub: "Відповідаємо протягом 2 годин",
    },
    {
      icon: MapPin,
      title: "Адреса",
      content: (
        <p className="text-sm text-muted-foreground">
          вул. Хрещатик, 22, оф. 305<br />м. Київ, 01001
        </p>
      ),
      sub: "Відвідайте наш шоурум",
    },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-primary text-primary-foreground overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />
        </div>
        <div className="container py-14 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl font-bold mb-3">Зв'яжіться з нами</h1>
            <p className="text-lg opacity-85 leading-relaxed">
              Маєте запитання, потребуєте консультації або хочете зробити оптове замовлення?
              Ми завжди раді допомогти!
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats Banner */}
      <div className="bg-secondary border-b">
        <div className="container py-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Clock, label: "Відповідь протягом 2 годин", desc: "У робочий час" },
              { icon: Headphones, label: "Підтримка 24/7", desc: "Для корпоративних клієнтів" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl bg-card border hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              >
                <div className="bg-primary/10 rounded-lg p-2.5 shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Contact Cards */}
          <div className="space-y-4">
            {contactCards.map((card, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 p-5 rounded-xl border cursor-pointer transition-all duration-300 ${
                  activeCard === i
                    ? "bg-primary/5 border-primary shadow-md scale-[1.02]"
                    : "bg-card hover:bg-secondary/50 hover:shadow-sm"
                }`}
                onClick={() => setActiveCard(activeCard === i ? null : i)}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`rounded-lg p-3 transition-colors duration-300 ${
                  activeCard === i ? "bg-primary text-primary-foreground" : "bg-secondary"
                }`}>
                  <card.icon className={`h-5 w-5 transition-colors duration-300 ${
                    activeCard === i ? "text-primary-foreground" : "text-primary"
                  }`} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{card.title}</h3>
                  {card.content}
                  <p className="text-xs text-muted-foreground mt-1">{card.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card border rounded-xl p-6 space-y-4 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold text-foreground mb-2">Надішліть нам повідомлення</h3>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Ім'я</label>
              <input
                required maxLength={100} value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-background border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none transition-shadow duration-200 hover:shadow-sm"
                placeholder="Ваше ім'я"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Електронна пошта</label>
              <input
                required type="email" maxLength={255} value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-background border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none transition-shadow duration-200 hover:shadow-sm"
                placeholder="ваша@пошта.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Повідомлення</label>
              <textarea
                required maxLength={1000} rows={4} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-background border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none resize-none transition-shadow duration-200 hover:shadow-sm"
                placeholder="Чим ми можемо допомогти?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
            >
              <Send className="h-4 w-4" />
              Надіслати
            </button>
          </form>

          {/* Image */}
          <div className="hidden md:block rounded-xl overflow-hidden shadow-lg border">
            <img src={contactImg} alt="Команда підтримки OfficeBaza" width={640} height={512} loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
