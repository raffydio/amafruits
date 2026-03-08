import { useTranslation } from "react-i18next";

export default function Products() {
  const { t } = useTranslation();
  
  const products = [
    { id: 1, name: t('products.items.agrumi'),   desc: t('products.items.agrumi_d'),   emoji: "🍊", cat: t('products.seasonal') },
    { id: 2, name: t('products.items.rossi'),    desc: t('products.items.rossi_d'),    emoji: "🍓", cat: t('products.premium')  },
    { id: 3, name: t('products.items.esotica'),  desc: t('products.items.esotica_d'),  emoji: "🥭", cat: t('products.import')   },
    { id: 4, name: t('products.items.stagione'), desc: t('products.items.stagione_d'), emoji: "🧺", cat: t('products.locale')   },
    { id: 5, name: t('products.items.mele'),     desc: t('products.items.mele_d'),     emoji: "🍎", cat: t('products.bio')      },
    { id: 6, name: t('products.items.uva'),      desc: t('products.items.uva_d'),      emoji: "🍇", cat: t('products.seasonal') },
  ];

  return (
    <section style={{ padding: "96px 0", background: "#f9fafb" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ color: "#e85c5c", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12 }}>{t('products.badge')}</p>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#111827", margin: 0 }}>{t('products.title')}</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          {products.map((p) => (
            <div key={p.id} style={{ background: "white", borderRadius: 20, padding: 32, boxShadow: "0 2px 10px rgba(0,0,0,0.06)", transition: "all 0.3s" }}>
              <span style={{ fontSize: 48 }}>{p.emoji}</span>
              <div style={{ marginTop: 12 }}>
                <span style={{ background: "#fff5f5", color: "#e85c5c", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 50 }}>{p.cat}</span>
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1a1a1a", margin: "12px 0 6px" }}>{p.name}</h3>
              <p style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
