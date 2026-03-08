// File: src/components/Contact.tsx
import { useTranslation } from "react-i18next";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const { t } = useTranslation();
  const AZZURRO = "#0077b5";

  return (
    <section id="contatti" style={{ padding: "clamp(80px, 10vw, 140px) 24px", background: "#f9fafb", boxSizing: "border-box", width: "100%" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
        
        <p style={{ color: AZZURRO, fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px" }}>
          {t('contact.badge')}
        </p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "#111827", margin: "0 0 48px" }}>
          {t('contact.title')}
        </h2>

        {/* Griglia Contatti Diretti */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          
          {/* Email */}
          <a href="mailto:info@amafruits.it" style={{ textDecoration: "none", background: "white", padding: 32, borderRadius: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, transition: "transform 0.3s" }} onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"} onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(0, 119, 181, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: AZZURRO }}>
              <Mail size={28} />
            </div>
            <div>
              <h3 style={{ margin: "0 0 8px", color: "#111827", fontSize: 18 }}>Email</h3>
              <p style={{ margin: 0, color: "#4b5563", fontWeight: 500 }}>info@amafruits.it</p>
            </div>
          </a>

          {/* Telefono */}
          <a href="tel:+39xxxxxxx" style={{ textDecoration: "none", background: "white", padding: 32, borderRadius: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, transition: "transform 0.3s" }} onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"} onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(0, 119, 181, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: AZZURRO }}>
              <Phone size={28} />
            </div>
            <div>
              <h3 style={{ margin: "0 0 8px", color: "#111827", fontSize: 18 }}>{t('contact.phone')}</h3>
              <p style={{ margin: 0, color: "#4b5563", fontWeight: 500 }}>+39 000 000 0000</p>
            </div>
          </a>

          {/* Indirizzo */}
          <div style={{ background: "white", padding: 32, borderRadius: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(0, 119, 181, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: AZZURRO }}>
              <MapPin size={28} />
            </div>
            <div>
              <h3 style={{ margin: "0 0 8px", color: "#111827", fontSize: 18 }}>Sede Operativa</h3>
              <p style={{ margin: 0, color: "#4b5563", fontWeight: 500 }}>Viale del Tramonto, 16-18<br/>81030 Frignano (CE)</p>
            </div>
          </div>

        </div>

        {/* Pulsante LinkedIn */}
        <div style={{ marginTop: 48 }}>
          <a href="https://www.linkedin.com/in/michele-natale-9b9113125/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 12, background: AZZURRO, color: "white", padding: "16px 32px", borderRadius: 50, textDecoration: "none", fontWeight: 700, fontSize: 15, boxShadow: "0 4px 15px rgba(0, 119, 181, 0.3)" }}>
            <Linkedin size={20} />
            Connettiti su LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}