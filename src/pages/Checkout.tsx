import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, Package, CreditCard } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import usePageTitle from "@/hooks/usePageTitle";

const deliveryMethods = [
  { id: "nova_poshta", label: "Нова Пошта", price: 0, note: "Безкоштовно від 1500 ₴" },
  { id: "ukrposhta", label: "Укрпошта", price: 45, note: "3–5 робочих днів" },
  { id: "pickup", label: "Самовивіз", price: 0, note: "м. Київ, вул. Хрещатик, 22" },
];

const Checkout = () => {
  usePageTitle("Оформлення замовлення");
  const { items, removeItem, clearCart, addItem } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [delivery, setDelivery] = useState("nova_poshta");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    notes: "",
  });

  const subtotal = items.reduce((s, i) => s + i.product.price * i.quantity, 0);
  const deliveryPrice = deliveryMethods.find((d) => d.id === delivery)?.price ?? 0;
  const freeDelivery = delivery === "nova_poshta" && subtotal >= 1500;
  const totalDelivery = freeDelivery ? 0 : deliveryPrice;
  const total = subtotal + totalDelivery;

  const decreaseQty = (productId: string) => {
    const item = items.find((i) => i.product.id === productId);
    if (item && item.quantity === 1) {
      removeItem(productId);
    } else if (item) {
      // We need a decreaseItem — for now remove and re-add with qty-1
      removeItem(productId);
      for (let k = 0; k < item.quantity - 1; k++) {
        addItem(item.product);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      toast.error("Кошик порожній!");
      return;
    }
    setLoading(true);
    try {
      const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert({
          customer_name: form.name,
          customer_email: form.email,
          customer_phone: form.phone,
          city: form.city,
          address: form.address,
          delivery_method: delivery,
          total_amount: total,
          notes: form.notes || null,
        })
        .select("id")
        .single();

      if (orderError) throw orderError;

      const orderItems = items.map((i) => ({
        order_id: order.id,
        product_id: i.product.id,
        product_name: i.product.name,
        quantity: i.quantity,
        price: i.product.price,
      }));

      const { error: itemsError } = await supabase.from("order_items").insert(orderItems);
      if (itemsError) throw itemsError;

      clearCart();
      toast.success("Замовлення оформлено! Ми зв'яжемось з вами найближчим часом.");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Помилка оформлення замовлення. Спробуйте ще раз.");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center">
        <ShoppingCart className="h-16 w-16 text-muted-foreground/40 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-foreground mb-2">Кошик порожній</h1>
        <p className="text-muted-foreground mb-6">Додайте товари з каталогу, щоб оформити замовлення.</p>
        <Link
          to="/catalogue"
          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <ArrowLeft className="h-4 w-4" /> До каталогу
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-primary text-primary-foreground">
        <div className="container py-10">
          <h1 className="text-3xl font-bold">Оформлення замовлення</h1>
          <p className="opacity-80 mt-1">Заповніть дані для доставки</p>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form — 3 cols */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
            {/* Contact */}
            <div className="bg-card border rounded-xl p-6 space-y-4">
              <h2 className="font-semibold text-foreground flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" /> Контактні дані
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Ім'я *</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-background border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Ваше ім'я"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Телефон *</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-background border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none"
                    placeholder="+380..."
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Email *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-background border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none"
                  placeholder="ваша@пошта.com"
                />
              </div>
            </div>

            {/* Delivery */}
            <div className="bg-card border rounded-xl p-6 space-y-4">
              <h2 className="font-semibold text-foreground flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" /> Доставка
              </h2>
              <div className="space-y-2">
                {deliveryMethods.map((m) => (
                  <label
                    key={m.id}
                    className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                      delivery === m.id ? "border-primary bg-primary/5" : "hover:bg-secondary/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="delivery"
                      value={m.id}
                      checked={delivery === m.id}
                      onChange={() => setDelivery(m.id)}
                      className="accent-primary"
                    />
                    <div className="flex-1">
                      <span className="text-sm font-medium text-foreground">{m.label}</span>
                      <span className="text-xs text-muted-foreground ml-2">{m.note}</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {m.price === 0 ? "Безкоштовно" : `${m.price} ₴`}
                    </span>
                  </label>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Місто *</label>
                  <input
                    required
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full bg-background border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Київ"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Адреса / відділення *</label>
                  <input
                    required
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full bg-background border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Відділення №5 або вул. ..."
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Коментар до замовлення</label>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  rows={2}
                  className="w-full bg-background border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none resize-none"
                  placeholder="Побажання до замовлення..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-50"
            >
              {loading ? "Оформлення..." : "Підтвердити замовлення"}
            </button>
          </form>

          {/* Cart summary — 2 cols */}
          <div className="lg:col-span-2">
            <div className="bg-card border rounded-xl p-6 sticky top-32">
              <h2 className="font-semibold text-foreground mb-4">Ваше замовлення ({items.length})</h2>
              <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-lg object-cover bg-secondary flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{item.product.name}</p>
                      <p className="text-sm text-primary font-semibold">{item.product.price} ₴</p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          type="button"
                          onClick={() => decreaseQty(item.product.id)}
                          className="p-1 rounded hover:bg-secondary transition-colors"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => addItem(item.product)}
                          className="p-1 rounded hover:bg-secondary transition-colors"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeItem(item.product.id)}
                          className="ml-auto p-1 text-destructive hover:bg-destructive/10 rounded transition-colors"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t mt-4 pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Товари</span>
                  <span>{subtotal} ₴</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Доставка</span>
                  <span>{totalDelivery === 0 ? "Безкоштовно" : `${totalDelivery} ₴`}</span>
                </div>
                <div className="flex justify-between text-foreground font-bold text-base pt-2 border-t">
                  <span>Разом</span>
                  <span>{total} ₴</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
