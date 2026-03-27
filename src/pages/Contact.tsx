import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Повідомлення надіслано! Ми зв'яжемось з вами найближчим часом.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-foreground">Контакти</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Маєте запитання або потребуєте консультації? Ми раді допомогти.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-secondary rounded-lg p-3">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Телефон</h3>
              <a
                href="tel:+380441234567"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                +38 (044) 123-45-67
              </a>
              <p className="text-xs text-muted-foreground mt-1">
                Пн–Пт, 9:00 – 18:00
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-secondary rounded-lg p-3">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Електронна пошта</h3>
              <a
                href="mailto:info@officebaza.ua"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                info@officebaza.ua
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-secondary rounded-lg p-3">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Адреса</h3>
              <p className="text-sm text-muted-foreground">
                вул. Хрещатик, 22, оф. 305
                <br />
                м. Київ, 01001
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-card border rounded-xl p-6 space-y-4">
          <h3 className="font-semibold text-foreground mb-2">Надішліть нам повідомлення</h3>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">
              Ім'я
            </label>
            <input
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-background border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none"
              placeholder="Ваше ім'я"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">
              Електронна пошта
            </label>
            <input
              required
              type="email"
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-background border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none"
              placeholder="ваша@пошта.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">
              Повідомлення
            </label>
            <textarea
              required
              maxLength={1000}
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-background border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none resize-none"
              placeholder="Чим ми можемо допомогти?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Send className="h-4 w-4" />
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
