import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo_ama_fruits.png";
import { useWindowWidth } from "../hooks/useWindowWidth";

export default function Hero() {
  const { t } = useTranslation();
  const isMobile = useWindowWidth() < 768;

  return (
    <section style={{
      minHeight: "100vh", background: "white",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      textAlign: "center",
      padding: isMobile ? "100px 20px 60px" : "120px 24px 80px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: "-10%", right: "-5%", width: isMobile ? 250 : 500, height: isMobile ? 250 : 500, borderRadius: "50%", background: "radial-gradient(circle, #dbeafe 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-5%", left: "-5%", width: isMobile ? 200 : 400, height: isMobile ? 200 : 400, borderRadius: "50%", background: "radial-gradient(circle, #eff6ff 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ marginBottom: 32, position: "relative", zIndex: 1 }}>
        <div style={{
          width: isMobile ? 110 : 148, height: isMobile ? 110 : 148,
          borderRadius: "50%", background: "white",
          boxShadow: "0 8px 48px rgba(30,64,175,0.15)",
          border: "3px solid #dbeafe",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 14px", padding: 8,
        }}>
          <img src={logo} alt="Amafruits" style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }} />
        </div>
        <div style={{ color: "#93c5fd", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 600 }}>
          {t("hero.badge")}
        </div>
      </div>

      <h1 style={{
        fontSize: isMobile ? "2rem" : "clamp(2.4rem, 6vw, 5rem)",
        fontWeight: 900, color: "#1e40af",
        textTransform: "uppercase", letterSpacing: "0.04em",
        margin: "0 0 16px", lineHeight: 1.15,
        position: "relative", zIndex: 1,
      }}>
        {t("hero.title")}
      </h1>

      <h2 style={{
        fontSize: isMobile ? "0.95rem" : "clamp(1rem, 2.5vw, 1.4rem)",
        fontWeight: 600, color: "#2563eb",
        margin: "0 0 16px", position: "relative", zIndex: 1,
        padding: isMobile ? "0 8px" : 0,
      }}>
        {t("hero.subtitle")}
      </h2>

      <div style={{ width: 60, height: 4, background: "linear-gradient(90deg, #1e40af, #60a5fa)", borderRadius: 2, margin: "0 auto 20px", position: "relative", zIndex: 1 }} />

      <p style={{
        fontSize: isMobile ? "0.9rem" : "1.05rem",
        color: "#6b7280", maxWidth: 560, lineHeight: 1.85,
        margin: "0 0 40px", position: "relative", zIndex: 1,
        padding: isMobile ? "0 4px" : 0,
      }}>
        {t("hero.description")}
      </p>

      <Link to="/contatti" style={{
        background: "linear-gradient(135deg, #1e40af, #2563eb)", color: "white",
        padding: isMobile ? "15px 36px" : "18px 52px",
        borderRadius: 50, fontSize: isMobile ? "13px" : "15px", fontWeight: 700,
        textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase",
        display: "flex", alignItems: "center", gap: 10,
        boxShadow: "0 6px 24px rgba(30,64,175,0.35)",
        position: "relative", zIndex: 1, transition: "all 0.3s",
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(30,64,175,0.45)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(30,64,175,0.35)"; }}>
        {t("hero.cta")} <span style={{ fontSize: 18 }}>›</span>
      </Link>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, overflow: "hidden" }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f8faff" />
        </svg>
      </div>
    </section>
  );
}
