import { useTranslation } from "react-i18next";
import { useWindowWidth } from "../hooks/useWindowWidth";

export default function Services() {
  const { t } = useTranslation();
  const w = useWindowWidth();
  const cols = w < 640 ? 1 : w < 1024 ? 2 : 4;
  const items = t("services.items", { returnObjects: true }) as { icon: string; title: string; desc: string }[];

  return (
    <section style={{ padding: w < 768 ? "64px 0" : "96px 0", background: "linear-gradient(160deg, #0f2a6e 0%, #1e40af 50%, #2563eb 100%)", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 60, overflow: "hidden" }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
          <path d="M0,0 C480,60 960,0 1440,40 L1440,0 Z" fill="#f8faff" />
        </svg>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: w < 768 ? "40px 20px 0" : "40px 48px 0" }}>
        <div style={{ textAlign: "center", marginBottom: w < 768 ? 36 : 56 }}>
          <p style={{ color: "rgba(255,255,255,0.6)", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", margin: "0 0 10px" }}>{t("services.badge")}</p>
          <h2 style={{ fontSize: w < 768 ? "1.6rem" : "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "white", margin: 0 }}>{t("services.title")}</h2>
          <div style={{ width: 48, height: 4, background: "rgba(255,255,255,0.35)", borderRadius: 2, margin: "14px auto 0" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: w < 768 ? 16 : 24 }}>
          {items.map(({ icon, title, desc }) => (
            <div key={title}
              style={{ background: "rgba(255,255,255,0.10)", borderRadius: 18, padding: w < 768 ? "24px 20px" : "36px 28px", color: "white", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.18)", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.20)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.10)"; e.currentTarget.style.transform = "translateY(0)"; }}>
              <div style={{ width: 50, height: 50, background: "rgba(255,255,255,0.18)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 16 }}>{icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: w < 768 ? 15 : 17, margin: "0 0 8px" }}>{title}</h3>
              <p style={{ opacity: 0.8, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, overflow: "hidden" }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
          <path d="M0,30 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
