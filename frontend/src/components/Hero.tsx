import logo from "../assets/logo_ama_fruits.png";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  const AZZURRO = "#0077b5";

  return (
    <section id="home" style={{
      minHeight: "100vh",
      background: "#ffffff",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: "120px 5% 80px",
      position: "relative", overflow: "hidden", boxSizing: "border-box"
    }}>
      
      <div style={{ marginBottom: "clamp(20px, 4vw, 40px)", position: "relative", zIndex: 1 }}>
        <div style={{
          width: "clamp(140px, 30vw, 220px)", 
          height: "clamp(140px, 30vw, 220px)", 
          borderRadius: "50%",
          background: "#ffffff",
          boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 24px", padding: "clamp(8px, 2vw, 16px)",
        }}>
          <img
            src={logo}
            alt="Amafruits"
            style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }}
          />
        </div>
        <div style={{ color: AZZURRO, fontSize: "clamp(10px, 2vw, 13px)", letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: 700 }}>
          AMAFRUITS S.R.L.
        </div>
      </div>

      <h1 style={{
        fontSize: "clamp(2.2rem, 7vw, 5.5rem)",
        fontWeight: 900, color: AZZURRO,
        textTransform: "uppercase", letterSpacing: "0.05em",
        margin: "0 0 24px", lineHeight: 1.1,
        position: "relative", zIndex: 1,
      }}>
        AMAFRUITS S.R.L.
      </h1>

      <h2 style={{
        fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
        fontWeight: 600, color: "#374151",
        margin: "0 0 20px", position: "relative", zIndex: 1,
      }}>
        {t('hero.subtitle')}
      </h2>

      <p style={{
        fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
        color: "#4b5563", maxWidth: 600,
        lineHeight: 1.8, margin: "0 0 48px",
        position: "relative", zIndex: 1,
      }}>
        {t('hero.desc')}
      </p>

      {/* SOSTITUITO <Link> CON <a> */}
      <a href="#contatti" style={{
        background: AZZURRO,
        color: "white", padding: "clamp(14px, 3vw, 18px) clamp(32px, 6vw, 52px)",
        borderRadius: 50, fontSize: "clamp(13px, 2vw, 15px)", fontWeight: 700,
        textDecoration: "none", letterSpacing: "0.12em",
        textTransform: "uppercase",
        display: "flex", alignItems: "center", gap: 12,
        boxShadow: "0 4px 15px rgba(0, 119, 181, 0.3)",
        transition: "all 0.3s",
        position: "relative", zIndex: 1,
      }}
      onMouseEnter={e => { e.currentTarget.style.background = "#005f92"; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.background = AZZURRO; e.currentTarget.style.transform = "translateY(0)"; }}>
        {t('hero.cta')} <span style={{ fontSize: 18 }}>›</span>
      </a>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "clamp(40px, 8vw, 80px)", overflow: "hidden" }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f9fafb" />
        </svg>
      </div>
    </section>
  );
}