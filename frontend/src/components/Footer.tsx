import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo_ama_fruits.png";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();
  const isMobile = useWindowWidth() < 768;

  const navLinks: [string, string][] = [
    [t("nav.home"), "#home"], [t("nav.about"), "#chi-siamo"],
    [t("nav.products"), "#prodotti"], [t("nav.services"), "#servizi"],
    [t("nav.contact"), "#contatti"],
  ];

  const productLinks: [string, string][] = [
    ["Uva da Tavola", "#prodotti"], ["Ciliegie", "#prodotti"],
    ["Agrumi", "#prodotti"], ["Fragole", "#prodotti"],
    ["Frutta Secca", "#prodotti"],
  ];

  const contactLinks: [string, string][] = [
    ["info@amafruits.it",      "mailto:info@amafruits.it"],
    ["+39 345 4126662",        "tel:+393454126662"],
    ["+39 333 5451983",        "tel:+393335451983"],
    ["+39 348 6434534",        "tel:393486434534"],
    ["Frignano (CE)", "#contatti"],
  ];

  const socials = [
    { label: "Facebook", href: "https://www.facebook.com/share/1L4b79ub3J/?mibextid=wwXIfr", icon: <Facebook size={18} color="white" />, bg: "#1877f2", hoverBg: "#1565d8" },
    { label: "LinkedIn",  href: "https://www.linkedin.com/in/michele-natale-9b9113125",        icon: <Linkedin size={18} color="white" />, bg: "#0a66c2", hoverBg: "#084e96" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.replace("#", ""));
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#0a1628", color: "#6b7280", paddingTop: 56 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px", display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "2.5fr 1fr 1fr 1fr", gap: isMobile ? 32 : 48 }}>

        <div style={{ gridColumn: isMobile ? "1 / -1" : "auto", display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 52, height: 52, borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center", padding: 4, flexShrink: 0 }}>
              <img src={logo} alt="Ama Fruits" style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }} />
            </div>
            <div>
              <div style={{ color: "white", fontWeight: 800, fontSize: 17 }}>AMA FRUITS</div>
              <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#374151" }}>S.R.L.</div>
            </div>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.8, margin: 0, maxWidth: 300 }}>{t("footer.desc")}</p>
          <div>
            <p style={{ color: "white", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px" }}>{t("footer.follow")}</p>
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map(({ label, href, icon, bg, hoverBg }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
                  style={{ width: 42, height: 42, background: bg, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "background 0.2s, transform 0.2s", boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
                  onMouseEnter={e => { e.currentTarget.style.background = hoverBg; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = bg; e.currentTarget.style.transform = "translateY(0)"; }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h4 style={{ color: "white", fontWeight: 700, fontSize: 12, marginBottom: 16, marginTop: 0, textTransform: "uppercase", letterSpacing: "0.12em" }}>{t("footer.nav_title")}</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
            {navLinks.map(([label, id]) => (
              <li key={label}>
                <button onClick={() => scrollTo(id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#6b7280", fontSize: 13, padding: 0, fontFamily: "inherit", textAlign: "left" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#60a5fa")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}>
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ color: "white", fontWeight: 700, fontSize: 12, marginBottom: 16, marginTop: 0, textTransform: "uppercase", letterSpacing: "0.12em" }}>{t("footer.products_title")}</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
            {productLinks.map(([label, id]) => (
              <li key={label}>
                <button onClick={() => scrollTo(id)} style={{ background: "none", border: "none", cursor: "pointer", color: "#6b7280", fontSize: 13, padding: 0, fontFamily: "inherit", textAlign: "left" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#60a5fa")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}>
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ color: "white", fontWeight: 700, fontSize: 12, marginBottom: 16, marginTop: 0, textTransform: "uppercase", letterSpacing: "0.12em" }}>{t("footer.contact_title")}</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
            {contactLinks.map(([label, href]) => (
              <li key={label}>
                <a href={href} style={{ color: "#6b7280", textDecoration: "none", fontSize: 13 }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#60a5fa")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "40px auto 0", padding: isMobile ? "20px" : "20px 48px", borderTop: "1px solid #111f3a", display: "flex", justifyContent: "center", alignItems: "center", fontSize: 12 }}>
        <span style={{ color: "#4b5563", fontSize: 12, textAlign: "center" }}>
          © 2026 AMA Fruits S.r.l. — Tutti i diritti riservati
        </span>
      </div>
    </footer>
  );
}
