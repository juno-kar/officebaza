import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-foreground">Contact Us</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Have a question or need a consultation? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-secondary rounded-lg p-3">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Phone</h3>
              <a
                href="tel:+18005559876"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                +1 (800) 555-9876
              </a>
              <p className="text-xs text-muted-foreground mt-1">
                Mon–Fri, 9:00 AM – 6:00 PM
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-secondary rounded-lg p-3">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Email</h3>
              <a
                href="mailto:hello@supplynest.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                hello@supplynest.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-secondary rounded-lg p-3">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Address</h3>
              <p className="text-sm text-muted-foreground">
                123 Supply Street, Suite 200
                <br />
                Commerce City, CA 90210
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-card border rounded-xl p-6 space-y-4">
          <h3 className="font-semibold text-foreground mb-2">Send us a message</h3>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">
              Name
            </label>
            <input
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-background border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">
              Email
            </label>
            <input
              required
              type="email"
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-background border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">
              Message
            </label>
            <textarea
              required
              maxLength={1000}
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-background border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none resize-none"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Send className="h-4 w-4" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
