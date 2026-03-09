import { useTranslation } from "react-i18next";
import { useWindowWidth } from "../hooks/useWindowWidth";

export default function Contact() {
  const { t } = useTranslation();
  const isMobile = useWindowWidth() < 768;

  const contacts = [
    { icon: "✉️", val: "info@amafruits.it",                    href: "mailto:info@amafruits.it" },
    { icon: "📍", val: "Viale del Tramonto 18, 81030 Frignano (CE)", href: "#" },
    { icon: "👤", val: `Amministratore-
      Michele Natale +393454126662`,      href: "tel:+393454126662" },
    { icon: "👤", val: `adetto vendite e acquisti - 
      Gioele Natale — +39 333 5451983`,       href: "tel:+393335451983" },
    { icon: "👤", val: `Amministrazione - 
      Mariateresa Natale — +39 348 6434534`,       href: "tel:+393486434534" },
    { icon: "👤", val: `adetto vendite e acquisti- 
      Nicola Natale — +39 334 3126274 `,       href: "tel:+393343126274 " },
  ];

  return (
    <section style={{ padding: isMobile ? "64px 0" : "96px 0", background: "white" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px" }}>

        {/* HEADER */}
        <p style={{ color: "#1e40af", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", margin: "0 0 12px" }}>
          {t("contact.badge")}
        </p>
        <h2 style={{ fontSize: isMobile ? "1.8rem" : "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "#111827", margin: "0 0 14px" }}>
          {t("contact.title")}
        </h2>
        <div style={{ width: 48, height: 4, background: "#1e40af", borderRadius: 2, marginBottom: 24 }} />
        <p style={{ color: "#6b7280", lineHeight: 1.85, margin: "0 0 40px", fontSize: isMobile ? 14 : 15 }}>
          {t("contact.description")}
        </p>

        {/* CONTATTI */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {contacts.map(({ icon, val, href }) => (
            <a key={val} href={href} style={{ display: "flex", alignItems: "center", gap: 16, textDecoration: "none" }}>
              <div style={{ width: 52, height: 52, background: "#eff6ff", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0, border: "1px solid #dbeafe" }}>
                {icon}
              </div>
              <span style={{ color: "#374151", fontSize: isMobile ? 14 : 16, fontWeight: 500 }}>{val}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
