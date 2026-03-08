import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useWindowWidth } from "../hooks/useWindowWidth";

const emojis = ["🍊","🍓","🥭","🍑","🍎","🍇"];

export default function Products() {
  const { t } = useTranslation();
  const w = useWindowWidth();
  const cols = w < 640 ? 1 : w < 1024 ? 2 : 3;
  const items = t("products.items", { returnObjects: true }) as { name: string; desc: string; cat: string }[];

  return (
    <section style={{ padding: w < 768 ? "64px 0" : "96px 0", background: "#f8faff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: w < 768 ? "0 20px" : "0 48px" }}>
        <div style={{ textAlign: "center", marginBottom: w < 768 ? 40 : 64 }}>
          <p style={{ color: "#1e40af", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", margin: "0 0 12px" }}>{t("products.badge")}</p>
          <h2 style={{ fontSize: w < 768 ? "1.6rem" : "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "#111827", margin: "0 0 16px" }}>{t("products.title")}</h2>
          <div style={{ width: 48, height: 4, background: "#1e40af", borderRadius: 2, margin: "0 auto 16px" }} />
          <p style={{ color: "#6b7280", maxWidth: 500, margin: "0 auto", fontSize: w < 768 ? 14 : 15 }}>{t("products.description")}</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: w < 768 ? 16 : 28 }}>
          {items.map((p, i) => (
            <div key={i}
              style={{ background: "white", borderRadius: 18, padding: w < 768 ? "24px 20px" : "36px 32px", boxShadow: "0 1px 12px rgba(30,64,175,0.07)", transition: "all 0.3s", borderTop: "4px solid transparent" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 36px rgba(30,64,175,0.14)"; e.currentTarget.style.borderTopColor = "#1e40af"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 1px 12px rgba(30,64,175,0.07)"; e.currentTarget.style.borderTopColor = "transparent"; }}>
              <span style={{ fontSize: w < 768 ? 38 : 52 }}>{emojis[i]}</span>
              <div style={{ margin: "10px 0 6px" }}>
                <span style={{ background: "#eff6ff", color: "#1e40af", fontSize: 11, fontWeight: 700, padding: "3px 12px", borderRadius: 50 }}>{p.cat}</span>
              </div>
              <h3 style={{ fontSize: w < 768 ? 16 : 19, fontWeight: 700, color: "#111827", margin: "10px 0 6px" }}>{p.name}</h3>
              <p style={{ color: "#9ca3af", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: w < 768 ? 36 : 56 }}>
          <Link to="/prodotti" style={{ background: "linear-gradient(135deg, #1e40af, #2563eb)", color: "white", padding: w < 768 ? "13px 32px" : "16px 44px", borderRadius: 50, fontWeight: 700, textDecoration: "none", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", boxShadow: "0 6px 20px rgba(30,64,175,0.35)", display: "inline-block" }}>
            {t("products.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
