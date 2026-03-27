import { useState } from "react";
import { Building2, Users, Heart, Send } from "lucide-react";
import { toast } from "sonner";

const About = () => {
  const [form, setForm] = useState({
    company: "",
    contact: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Заявку на партнерство надіслано! Ми зв'яжемось найближчим часом.");
    setForm({ company: "", contact: "", email: "", message: "" });
  };

  return (
    <div className="container py-10">
      <div className="max-w-3xl mb-16">
        <h1 className="text-3xl font-bold text-foreground mb-6">Про OfficeBaza</h1>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Заснована у 2018 році, OfficeBaza розпочала з простої місії: зробити якісну канцелярію
          та товари для творчості доступними для кожного — не лише для корпоративних покупців. Чи ви
          батько, що готується до навчального року, фрілансер, що облаштовує робоче місце, чи
          компанія, що забезпечує цілу команду — ми подбаємо про вас.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Ми ретельно обираємо продукцію від перевірених брендів та нових виробників, гарантуючи,
          що кожен товар відповідає нашим стандартам якості, цінності та екологічності. Швидка доставка,
          чесні ціни та команда, якій не байдуже — ми будуємо магазин нового типу.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-card border rounded-xl p-5 text-center">
            <div className="bg-secondary rounded-lg p-3 w-fit mx-auto mb-3">
              <Building2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-lg">500+</h3>
            <p className="text-sm text-muted-foreground">Бізнес-партнерів</p>
          </div>
          <div className="bg-card border rounded-xl p-5 text-center">
            <div className="bg-secondary rounded-lg p-3 w-fit mx-auto mb-3">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-lg">50 000+</h3>
            <p className="text-sm text-muted-foreground">Задоволених клієнтів</p>
          </div>
          <div className="bg-card border rounded-xl p-5 text-center">
            <div className="bg-secondary rounded-lg p-3 w-fit mx-auto mb-3">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-lg">2 000+</h3>
            <p className="text-sm text-muted-foreground">Товарів у каталозі</p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold text-foreground mb-2">Станьте партнером</h2>
        <p className="text-muted-foreground text-sm mb-6">
          Цікавлять оптові замовлення, брендування або партнерство як постачальник? Заповніть форму
          нижче, і наша команда зв'яжеться з вами протягом 1–2 робочих днів.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-card border rounded-xl p-6 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">
                Назва компанії
              </label>
              <input
                required
                maxLength={100}
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full bg-background border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none"
                placeholder="Ваша компанія"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1 block">
                Контактна особа
              </label>
              <input
                required
                maxLength={100}
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                className="w-full bg-background border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none"
                placeholder="Ваше ім'я"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">
              Робоча електронна пошта
            </label>
            <input
              required
              type="email"
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-background border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none"
              placeholder="вас@компанія.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">
              Як ми можемо співпрацювати?
            </label>
            <textarea
              required
              maxLength={1000}
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-background border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none resize-none"
              placeholder="Розкажіть про ваші потреби — оптові замовлення, брендування, партнерство як постачальник..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Send className="h-4 w-4" />
            Надіслати заявку
          </button>
        </form>
      </div>
    </div>
  );
};

export default About;
