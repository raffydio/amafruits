import { Check, Leaf, MapPin, Mail, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const AZZURRO = "#0077b5";

  const features = [ t('about.feat1'), t('about.feat2'), t('about.feat3'), t('about.feat4') ];

  return (
    <section id="chi-siamo" style={{ padding: "clamp(120px, 10vw, 160px) 24px", background: "#ffffff", boxSizing: "border-box", width: "100%", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "clamp(40px, 8vw, 80px)", width: "100%" }}>
        
        <div style={{ flex: "1 1 300px", position: "relative", width: "100%" }}>
          <div style={{ background: "#e6f2f8", borderRadius: 32, padding: "clamp(40px, 10vw, 80px)", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", boxSizing: "border-box" }}>
            <Leaf size={120} color={AZZURRO} strokeWidth={1.5} />
          </div>
          <div style={{ position: "absolute", bottom: -20, right: 0, background: AZZURRO, color: "white", padding: "clamp(16px, 4vw, 32px)", borderRadius: 24, textAlign: "center" }}>
            <div style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, lineHeight: 1 }}>40+</div>
            <div style={{ fontSize: "clamp(10px, 1.5vw, 12px)", fontWeight: 700, textTransform: "uppercase", marginTop: 8 }}>{t('about.years')}</div>
          </div>
        </div>

        <div style={{ flex: "1 1 300px", width: "100%" }}>
          <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", color: AZZURRO, marginBottom: 16 }}>{t('about.badge')}</h3>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#111827", margin: "0 0 24px", lineHeight: 1.2 }}>{t('about.title')}</h2>
          <div style={{ width: 40, height: 3, background: AZZURRO, marginBottom: 32, borderRadius: 2 }} />
          
          <div style={{ fontSize: "clamp(15px, 2vw, 16px)", lineHeight: 1.8, color: "#4b5563", marginBottom: 40, display: "flex", flexDirection: "column", gap: 16 }}>
            <p style={{ margin: 0 }}>{t('about.p1')}</p>
            <p style={{ margin: 0 }}>{t('about.p2')}</p>
            <p style={{ margin: 0 }}>{t('about.p3')}</p>
            <p style={{ margin: 0 }}>{t('about.p4')}</p>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px 0", display: "flex", flexDirection: "column", gap: 16 }}>
            {features.map((feat, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: 16, fontSize: "clamp(14px, 2vw, 15px)", color: "#374151", fontWeight: 600 }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(0, 119, 181, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Check size={14} color={AZZURRO} strokeWidth={3} />
                </div>
                <span style={{ flex: 1 }}>{feat}</span>
              </li>
            ))}
          </ul>

          <div style={{ background: "#f9fafb", border: "1px solid #f0f0f0", borderRadius: 16, padding: 24, width: "100%", boxSizing: "border-box" }}>
            <h4 style={{ margin: "0 0 16px 0", color: AZZURRO, fontSize: 16, fontWeight: 800 }}>{t('about.company_data')}</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 14, color: "#4b5563" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <Building2 size={20} color={AZZURRO} style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ lineHeight: 1.5, wordBreak: "break-word" }}><strong>AMAFRUITS SRL</strong><br/>P.IVA: 042 612 606 18<br/>Capitale sociale: 20.000€ int. vers.<br/>B.N.D.O.O. - 0121933</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <MapPin size={20} color={AZZURRO} style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ lineHeight: 1.5, wordBreak: "break-word" }}>Viale del Tramonto, 16-18<br/>81030 Frignano (CE)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Mail size={20} color={AZZURRO} style={{ flexShrink: 0 }} />
                <a href="mailto:info@amafruits.it" style={{ color: AZZURRO, textDecoration: "none", fontWeight: 600, wordBreak: "break-word" }}>info@amafruits.it</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}