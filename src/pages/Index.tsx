import { useState } from "react";
import Icon from "@/components/ui/icon";

const PRODUCTS = [
  {
    id: 1,
    name: "Vaporesso XROS 4",
    category: "pod",
    price: 2490,
    oldPrice: 3200,
    tag: "HOT",
    description: "Pod-система 1200 мАч, mesh-катушка, 2 мл",
    image: "https://cdn.poehali.dev/projects/cd0f878d-a017-44b8-8994-4fa16cb30734/files/d4d90fda-f18a-471a-987d-0323dccf082f.jpg",
    rating: 4.9,
    reviews: 128,
    nicotine: null,
  },
  {
    id: 2,
    name: "SMOK Nord 5",
    category: "pod",
    price: 3190,
    oldPrice: null,
    tag: "NEW",
    description: "Pod-система 2000 мАч, двойная катушка",
    image: "https://cdn.poehali.dev/projects/cd0f878d-a017-44b8-8994-4fa16cb30734/files/d4d90fda-f18a-471a-987d-0323dccf082f.jpg",
    rating: 4.7,
    reviews: 54,
    nicotine: null,
  },
  {
    id: 3,
    name: "Brusko Minican 4",
    category: "pod",
    price: 1490,
    oldPrice: 1890,
    tag: null,
    description: "Компактный pod, 900 мАч, заменяемый картридж",
    image: "https://cdn.poehali.dev/projects/cd0f878d-a017-44b8-8994-4fa16cb30734/files/d4d90fda-f18a-471a-987d-0323dccf082f.jpg",
    rating: 4.6,
    reviews: 89,
    nicotine: null,
  },
  {
    id: 4,
    name: "Набор «Тропик» 30мл",
    category: "liquid",
    price: 590,
    oldPrice: null,
    tag: "NEW",
    description: "Манго + личи + маракуйя, 20мг соль",
    image: "https://cdn.poehali.dev/projects/cd0f878d-a017-44b8-8994-4fa16cb30734/files/cae91314-d8fc-41d5-b3bc-593a56383116.jpg",
    rating: 4.8,
    reviews: 211,
    nicotine: "20мг",
  },
  {
    id: 5,
    name: "ICE Berry Mix 30мл",
    category: "liquid",
    price: 490,
    oldPrice: 650,
    tag: "HOT",
    description: "Ягодный микс с ледяным эффектом, 50мг",
    image: "https://cdn.poehali.dev/projects/cd0f878d-a017-44b8-8994-4fa16cb30734/files/cae91314-d8fc-41d5-b3bc-593a56383116.jpg",
    rating: 4.9,
    reviews: 347,
    nicotine: "50мг",
  },
  {
    id: 6,
    name: "Creamy Peach 60мл",
    category: "liquid",
    price: 790,
    oldPrice: null,
    tag: null,
    description: "Персиковый крем, 3мг, VG70/PG30",
    image: "https://cdn.poehali.dev/projects/cd0f878d-a017-44b8-8994-4fa16cb30734/files/cae91314-d8fc-41d5-b3bc-593a56383116.jpg",
    rating: 4.5,
    reviews: 66,
    nicotine: "3мг",
  },
  {
    id: 7,
    name: "HQD Cuvie Plus",
    category: "disposable",
    price: 490,
    oldPrice: null,
    tag: "HOT",
    description: "1200 затяжек, 5% никотин, 12 вкусов",
    image: "https://cdn.poehali.dev/projects/cd0f878d-a017-44b8-8994-4fa16cb30734/files/b0a04bdf-7a52-446c-8ba8-28e85c61e196.jpg",
    rating: 4.4,
    reviews: 503,
    nicotine: "50мг",
  },
  {
    id: 8,
    name: "ELFBAR BC5000",
    category: "disposable",
    price: 890,
    oldPrice: 1100,
    tag: "NEW",
    description: "5000 затяжек, аккумулятор 650 мАч, USB-C",
    image: "https://cdn.poehali.dev/projects/cd0f878d-a017-44b8-8994-4fa16cb30734/files/b0a04bdf-7a52-446c-8ba8-28e85c61e196.jpg",
    rating: 4.8,
    reviews: 890,
    nicotine: "50мг",
  },
  {
    id: 9,
    name: "Lost Mary MO5000",
    category: "disposable",
    price: 990,
    oldPrice: null,
    tag: null,
    description: "5000 затяжек, mesh-катушка, 16 вкусов",
    image: "https://cdn.poehali.dev/projects/cd0f878d-a017-44b8-8994-4fa16cb30734/files/b0a04bdf-7a52-446c-8ba8-28e85c61e196.jpg",
    rating: 4.7,
    reviews: 412,
    nicotine: "50мг",
  },
];

const CATEGORIES = [
  { id: "all", label: "ВСЕ" },
  { id: "pod", label: "ПОДЫ" },
  { id: "disposable", label: "ОДНОРАЗКИ" },
  { id: "liquid", label: "ЖИДКОСТИ" },
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [addedIds, setAddedIds] = useState<number[]>([]);

  const filtered = PRODUCTS.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleAddToCart = (id: number) => {
    setCartCount((c) => c + 1);
    setAddedIds((prev) => [...prev, id]);
    setTimeout(() => setAddedIds((prev) => prev.filter((x) => x !== id)), 1200);
  };

  return (
    <div className="min-h-screen noise-bg" style={{ background: "var(--dark-bg)" }}>
      {/* HEADER */}
      <header className="sticky top-0 z-50" style={{ background: "rgba(13,13,13,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid #1a1a1a" }}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md flex items-center justify-center animate-pulse-berry" style={{ background: "rgba(255,45,85,0.12)", border: "1px solid #ff2d55" }}>
              <span style={{ fontSize: "18px" }}>🍓</span>
            </div>
            <div>
              <div className="font-bold tracking-widest neon-text text-xl" style={{ fontFamily: "Oswald, sans-serif" }}>
                TORE VAPE
              </div>
              <div className="text-xs" style={{ color: "#555", fontFamily: "Oswald, sans-serif", letterSpacing: "0.15em" }}>
                SHOP
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-sm hidden md:flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: "#111", border: "1px solid #222" }}>
            <Icon name="Search" size={15} style={{ color: "#555" }} />
            <input
              type="text"
              placeholder="Поиск товаров..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none text-sm w-full"
              style={{ color: "#ccc", fontFamily: "Rubik, sans-serif" }}
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 text-sm btn-outline-neon px-4 py-2 rounded-lg">
              <Icon name="Phone" size={14} />
              <span>8 (800) 000-00-00</span>
            </button>
            <button
              className="relative flex items-center gap-2 btn-neon px-4 py-2 rounded-lg text-sm"
              style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.06em" }}
            >
              <Icon name="ShoppingCart" size={16} />
              <span>КОРЗИНА</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "#ff0055", color: "white" }}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ borderBottom: "1px solid #1a1a1a" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "var(--neon-green)" }} />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl" style={{ background: "var(--neon-purple)" }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs mb-6" style={{ background: "rgba(0,255,102,0.08)", border: "1px solid rgba(0,255,102,0.25)", color: "var(--neon-green)", fontFamily: "Oswald, sans-serif", letterSpacing: "0.1em" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse-neon inline-block" style={{ background: "var(--neon-green)" }} />
              ДОСТАВКА ПО ВСЕЙ РОССИИ
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-none mb-4" style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "-0.01em" }}>
              <span style={{ color: "#fff" }}>ТВОЙ</span>
              <br />
              <span className="neon-text">ВЕЙП</span>
              <br />
              <span style={{ color: "#fff" }}>МАГАЗИН</span>
            </h1>
            <p className="text-base mb-8" style={{ color: "#777", fontFamily: "Rubik, sans-serif", lineHeight: 1.6 }}>
              Оригинальные устройства, жидкости и одноразки.<br />
              Более 500 позиций в наличии.
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              <button
                className="btn-neon px-8 py-3 rounded-lg text-base"
                onClick={() => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })}
              >
                СМОТРЕТЬ КАТАЛОГ
              </button>
              <div className="flex items-center gap-6">
                {[
                  { val: "500+", label: "товаров" },
                  { val: "4.9★", label: "рейтинг" },
                  { val: "24ч", label: "доставка" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-lg font-bold neon-text" style={{ fontFamily: "Oswald, sans-serif" }}>{s.val}</div>
                    <div className="text-xs" style={{ color: "#555" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold glitch-line pb-2" style={{ fontFamily: "Oswald, sans-serif", color: "#fff" }}>
              КАТАЛОГ
            </h2>
            <p className="text-sm mt-2" style={{ color: "#555" }}>
              {filtered.length} товаров
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`filter-chip px-4 py-2 rounded-lg text-sm ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Search */}
        <div className="flex md:hidden items-center gap-2 px-3 py-2 rounded-lg mb-6" style={{ background: "#111", border: "1px solid #222" }}>
          <Icon name="Search" size={15} style={{ color: "#555" }} />
          <input
            type="text"
            placeholder="Поиск..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent outline-none text-sm w-full"
            style={{ color: "#ccc" }}
          />
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24" style={{ color: "#444" }}>
            <Icon name="SearchX" size={48} className="mx-auto mb-4 opacity-30" />
            <p style={{ fontFamily: "Oswald, sans-serif", fontSize: "1.2rem", letterSpacing: "0.1em" }}>НИЧЕГО НЕ НАЙДЕНО</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((product, i) => {
              const isAdded = addedIds.includes(product.id);
              return (
                <div
                  key={product.id}
                  className="product-card rounded-xl overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${i * 0.06}s`, animationFillMode: "both" }}
                >
                  <div className="relative overflow-hidden" style={{ height: "200px", background: "#0a0a0a" }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover opacity-85 transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(13,13,13,0.8) 0%, transparent 50%)" }} />
                    {product.tag && (
                      <div className="absolute top-3 left-3">
                        {product.tag === "HOT" ? (
                          <span className="tag-hot">🔥 HOT</span>
                        ) : (
                          <span className="tag-new">✦ NEW</span>
                        )}
                      </div>
                    )}
                    {product.nicotine && (
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-xs" style={{ background: "rgba(0,0,0,0.7)", border: "1px solid #333", color: "#aaa", fontFamily: "Oswald, sans-serif", letterSpacing: "0.05em" }}>
                        {product.nicotine}
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-base leading-tight mb-1" style={{ color: "#f0f0f0", fontFamily: "Oswald, sans-serif", letterSpacing: "0.02em" }}>
                      {product.name}
                    </h3>
                    <p className="text-xs mb-3" style={{ color: "#666" }}>
                      {product.description}
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs" style={{ color: "#ffbb00" }}>{"★".repeat(Math.round(product.rating))}</span>
                      <span className="text-xs" style={{ color: "#555" }}>{product.rating} ({product.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl font-bold neon-text" style={{ fontFamily: "Oswald, sans-serif" }}>
                          {product.price.toLocaleString("ru-RU")} ₽
                        </span>
                        {product.oldPrice && (
                          <span className="text-sm ml-2 line-through" style={{ color: "#444" }}>
                            {product.oldPrice.toLocaleString("ru-RU")} ₽
                          </span>
                        )}
                      </div>
                      <button
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs transition-all duration-300 ${isAdded ? "btn-neon" : "btn-outline-neon"}`}
                        onClick={() => handleAddToCart(product.id)}
                      >
                        <Icon name={isAdded ? "Check" : "ShoppingCart"} size={13} />
                        <span>{isAdded ? "ДОБАВЛЕН" : "В КОРЗИНУ"}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* PROMO BANNER */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="rounded-2xl p-8 relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(0,255,102,0.08), rgba(170,68,255,0.08))", border: "1px solid rgba(0,255,102,0.15)" }}>
          <div className="absolute right-0 top-0 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: "var(--neon-green)", transform: "translate(30%, -30%)" }} />
          <div className="relative">
            <div className="text-xs mb-2 neon-text" style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.2em" }}>СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "Oswald, sans-serif", color: "#fff" }}>
              СКИДКА 10% НА ПЕРВЫЙ ЗАКАЗ
            </h3>
            <p className="text-sm mb-6" style={{ color: "#666" }}>
              Введите промокод при оформлении заказа
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="px-6 py-3 rounded-lg text-lg font-bold tracking-widest" style={{ background: "rgba(0,255,102,0.1)", border: "1px dashed rgba(0,255,102,0.4)", color: "var(--neon-green)", fontFamily: "Oswald, sans-serif" }}>
                TORE10
              </div>
              <button className="btn-neon px-6 py-3 rounded-lg text-sm">
                ПРИМЕНИТЬ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #1a1a1a", background: "#0a0a0a" }}>
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="text-xl font-bold neon-text mb-1" style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.1em" }}>TORE VAPE</div>
              <p className="text-sm" style={{ color: "#444" }}>Магазин электронных сигарет</p>
              <p className="text-xs mt-2" style={{ color: "#333" }}>
                Продажа только лицам 18+ лет
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-2">
              {["Каталог", "Доставка", "Оплата", "Контакты", "О магазине", "Возврат"].map((link) => (
                <button key={link} className="text-left hover:text-white transition-colors text-sm" style={{ color: "#555", fontFamily: "Rubik, sans-serif" }}>
                  {link}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm" style={{ color: "#555" }}>
                <Icon name="Phone" size={14} style={{ color: "var(--neon-green)" }} />
                8 (800) 000-00-00
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "#555" }}>
                <Icon name="Mail" size={14} style={{ color: "var(--neon-green)" }} />
                info@torevape.ru
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "#555" }}>
                <Icon name="Clock" size={14} style={{ color: "var(--neon-green)" }} />
                10:00 — 22:00
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 text-center text-xs" style={{ color: "#2a2a2a", borderTop: "1px solid #111" }}>
            © 2024 TORE VAPE. Все права защищены. Курение вредит вашему здоровью.
          </div>
        </div>
      </footer>
    </div>
  );
}