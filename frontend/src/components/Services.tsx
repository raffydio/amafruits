import { Truck, Leaf, ShieldCheck, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();
  const AZZURRO = "#0077b5";

  const services = [
    { icon: <Truck size={28} color="white" />, title: t('services.s1_title'), desc: t('services.s1_desc') },
    { icon: <Leaf size={28} color="white" />, title: t('services.s2_title'), desc: t('services.s2_desc') },
    { icon: <ShieldCheck size={28} color="white" />, title: t('services.s3_title'), desc: t('services.s3_desc') },
    { icon: <Phone size={28} color="white" />, title: t('services.s4_title'), desc: t('services.s4_desc') }
  ];

  return (
    <section style={{ background: "#ffffff", padding: "clamp(120px, 10vw, 160px) 24px", color: AZZURRO, boxSizing: "border-box", width: "100%", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: "clamp(40px, 8vw, 72px)" }}>
          <h3 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", color: AZZURRO, opacity: 0.8, marginBottom: 16 }}>{t('services.badge')}</h3>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: AZZURRO, margin: 0 }}>{t('services.title')}</h2>
          <div style={{ width: 40, height: 3, background: AZZURRO, margin: "24px auto 0", borderRadius: 2, opacity: 0.6 }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, width: "100%" }}>
          {services.map((s, i) => (
            <div key={i} style={{ background: "#ffffff", border: "1px solid #f0f0f0", borderRadius: 24, padding: "40px 32px", boxShadow: "0 4px 20px rgba(0,0,0,0.04)", boxSizing: "border-box", width: "100%" }}>
              <div style={{ width: 64, height: 64, borderRadius: 18, background: AZZURRO, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28 }}>{s.icon}</div>
              <h4 style={{ fontSize: 22, fontWeight: 700, color: AZZURRO, marginBottom: 16 }}>{s.title}</h4>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#4b5563", margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}