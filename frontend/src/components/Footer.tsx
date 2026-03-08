import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo_ama_fruits.png";
import { useWindowWidth } from "../hooks/useWindowWidth";

export default function Footer() {
  const { t } = useTranslation();
  const isMobile = useWindowWidth() < 768;

  const navLinks: [string, string][] = [
    [t("nav.home"), "/"], [t("nav.about"), "/chi-siamo"],
    [t("nav.products"), "/prodotti"], [t("nav.services"), "/servizi"],
    [t("nav.where"), "/dove-siamo"], [t("nav.contact"), "/contatti"],
  ];

  const productLinks: [string, string][] = [
    ["Uva da Tavola", "/prodotti"], ["Ciliegie", "/prodotti"],
    ["Agrumi", "/prodotti"], ["Fragole", "/prodotti"],
    ["Frutta Secca", "/prodotti"],
  ];

  const contactLinks: [string, string][] = [
    ["info@amafruits.it", "mailto:info@amafruits.it"],
    ["+39 345 4126662", "tel:+393454126662"],
    ["+39 333 5451983", "tel:+393335451983"],
    ["Frignano Maggiore (CE)", "#"],
  ];

  const socials = [
    { icon: "📘", label: "Facebook",  href: "https://www.facebook.com/people/Ama-Fruits/61566343979897/" },
    { icon: "📸", label: "Instagram", href: "https://www.instagram.com/amafruits_srl/" },
    { icon: "💼", label: "LinkedIn",  href: "https://www.linkedin.com/in/michele-natale-2b030333a/" },
  ];

  return (
    <footer style={{ background: "#0a1628", color: "#6b7280", paddingTop: 56 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px", display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "2.5fr 1fr 1fr 1fr", gap: isMobile ? 32 : 48 }}>

        {/* BRAND */}
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

          {/* SOCIAL */}
          <div>
            <p style={{ color: "white", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px" }}>{t("footer.follow")}</p>
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map(({ icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  title={label}
                  style={{ width: 40, height: 40, background: "#111f3a", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, textDecoration: "none", border: "1px solid #1e3a6e", transition: "background 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#1e3a8a")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#111f3a")}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* NAVIGAZIONE */}
        <div>
          <h4 style={{ color: "white", fontWeight: 700, fontSize: 12, marginBottom: 16, marginTop: 0, textTransform: "uppercase", letterSpacing: "0.12em" }}>{t("footer.nav_title")}</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
            {navLinks.map(([label, to]) => (
              <li key={label}>
                <Link to={to} style={{ color: "#6b7280", textDecoration: "none", fontSize: 13 }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#60a5fa")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* PRODOTTI */}
        <div>
          <h4 style={{ color: "white", fontWeight: 700, fontSize: 12, marginBottom: 16, marginTop: 0, textTransform: "uppercase", letterSpacing: "0.12em" }}>{t("footer.products_title")}</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
            {productLinks.map(([label, to]) => (
              <li key={label}>
                <Link to={to} style={{ color: "#6b7280", textDecoration: "none", fontSize: 13 }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#60a5fa")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTATTI */}
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

      {/* BOTTOM BAR */}
      <div style={{ maxWidth: 1280, margin: "40px auto 0", padding: isMobile ? "20px" : "20px 48px", borderTop: "1px solid #111f3a", display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: 12, fontSize: 12 }}>
        <p style={{ margin: 0 }}>{t("footer.vat")}</p>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {[[t("footer.privacy"),"#"],[t("footer.cookie"),"#"],[t("footer.legal"),"#"]].map(([label, to]) => (
            <Link key={label} to={to} style={{ color: "#4b5563", textDecoration: "none", fontSize: 12 }}>{label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
