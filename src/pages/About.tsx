import { useState } from "react";
import { Building2, Users, Heart, Send, Award, TrendingUp, ShieldCheck, Truck } from "lucide-react";
import aboutImg from "@/assets/about-office.jpg";
import { toast } from "sonner";

const stats = [
  { icon: Building2, value: "500+", label: "Бізнес-партнерів" },
  { icon: Users, value: "50 000+", label: "Задоволених клієнтів" },
  { icon: Heart, value: "2 000+", label: "Товарів у каталозі" },
];

const values = [
  { icon: Award, title: "Якість", desc: "Тільки перевірена продукція від надійних виробників" },
  { icon: TrendingUp, title: "Чесні ціни", desc: "Оптимальне співвідношення ціни та якості" },
  { icon: ShieldCheck, title: "Гарантія", desc: "Повернення або обмін протягом 14 днів" },
  { icon: Truck, title: "Швидка доставка", desc: "По всій Україні за 1–3 робочі дні" },
];

const About = () => {
  const [form, setForm] = useState({ company: "", contact: "", email: "", message: "" });
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Заявку на партнерство надіслано! Ми зв'яжемось найближчим часом.");
    setForm({ company: "", contact: "", email: "", message: "" });
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-primary text-primary-foreground overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-accent rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent rounded-full translate-y-1/3 translate-x-1/4 blur-2xl" />
        </div>
        <div className="container py-16 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">З 2018 року</p>
            <h1 className="text-4xl font-bold mb-4">Про OfficeBaza</h1>
            <p className="text-lg opacity-85 leading-relaxed">
              Ми робимо якісну канцелярію та товари для творчості доступними для кожного — від
              батьків до великих компаній.
            </p>
          </div>
        </div>
      </div>

      {/* Values Banner */}
      <div className="bg-secondary border-b">
        <div className="container py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {values.map((v, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 p-3 rounded-xl bg-card border transition-all duration-300 cursor-default ${
                  hoveredValue === i ? "shadow-md -translate-y-1 border-primary/30" : "hover:shadow-sm"
                }`}
                onMouseEnter={() => setHoveredValue(i)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <div className={`rounded-lg p-2 shrink-0 transition-colors duration-300 ${
                  hoveredValue === i ? "bg-primary text-primary-foreground" : "bg-primary/10"
                }`}>
                  <v.icon className={`h-4 w-4 transition-colors duration-300 ${
                    hoveredValue === i ? "text-primary-foreground" : "text-primary"
                  }`} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-tight">{v.title}</p>
                  <p className="text-xs text-muted-foreground hidden sm:block">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-10">
        {/* Story */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-14 animate-fade-in">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Заснована у 2018 році, OfficeBaza розпочала з простої місії: зробити якісну канцелярію
              та товари для творчості доступними для кожного — не лише для корпоративних покупців. Чи ви
              батько, що готується до навчального року, фрілансер, що облаштовує робоче місце, чи
              компанія, що забезпечує цілу команду — ми подбаємо про вас.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ми ретельно обираємо продукцію від перевірених брендів та нових виробників, гарантуючи,
              що кожен товар відповідає нашим стандартам якості, цінності та екологічності. Швидка доставка,
              чесні ціни та команда, якій не байдуже — ми будуємо магазин нового типу.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border">
            <img src={aboutImg} alt="Канцелярське приладдя OfficeBaza" width={640} height={512} loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`bg-card border rounded-xl p-5 text-center transition-all duration-300 cursor-default ${
                  hoveredStat === i ? "shadow-lg -translate-y-1 border-primary/30 scale-[1.03]" : "hover:shadow-sm"
                }`}
                onMouseEnter={() => setHoveredStat(i)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className={`rounded-lg p-3 w-fit mx-auto mb-3 transition-colors duration-300 ${
                  hoveredStat === i ? "bg-primary" : "bg-secondary"
                }`}>
                  <s.icon className={`h-6 w-6 transition-colors duration-300 ${
                    hoveredStat === i ? "text-primary-foreground" : "text-primary"
                  }`} />
                </div>
                <h3 className="font-semibold text-foreground text-lg">{s.value}</h3>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership */}
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-foreground mb-2">Станьте партнером</h2>
          <p className="text-muted-foreground text-sm mb-6">
            Цікавлять оптові замовлення, брендування або партнерство як постачальник? Заповніть форму
            нижче, і наша команда зв'яжеться з вами протягом 1–2 робочих днів.
          </p>

          <form onSubmit={handleSubmit} className="bg-card border rounded-xl p-6 space-y-4 hover:shadow-lg transition-shadow duration-300">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Назва компанії</label>
                <input
                  required maxLength={100} value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-background border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none transition-shadow duration-200 hover:shadow-sm"
                  placeholder="Ваша компанія"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Контактна особа</label>
                <input
                  required maxLength={100} value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  className="w-full bg-background border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none transition-shadow duration-200 hover:shadow-sm"
                  placeholder="Ваше ім'я"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Робоча електронна пошта</label>
              <input
                required type="email" maxLength={255} value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-background border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none transition-shadow duration-200 hover:shadow-sm"
                placeholder="вас@компанія.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">Як ми можемо співпрацювати?</label>
              <textarea
                required maxLength={1000} rows={4} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-background border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none resize-none transition-shadow duration-200 hover:shadow-sm"
                placeholder="Розкажіть про ваші потреби — оптові замовлення, брендування, партнерство як постачальник..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
            >
              <Send className="h-4 w-4" />
              Надіслати заявку
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
