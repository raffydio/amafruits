import { useTranslation } from "react-i18next";
import { useWindowWidth } from "../hooks/useWindowWidth";

export default function About() {
  const { t } = useTranslation();
  const isMobile = useWindowWidth() < 768;
  const points = t("about.points", { returnObjects: true }) as string[];

  return (
    <section style={{ padding: isMobile ? "64px 0" : "96px 0", background: "white" }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px",
        display: "flex", flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? 48 : 80, alignItems: isMobile ? "stretch" : "center",
      }}>
        <div style={{ position: "relative", flex: 1 }}>
          <div style={{ background: "linear-gradient(135deg, #eff6ff, #dbeafe)", borderRadius: 24, height: isMobile ? 260 : 440, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #bfdbfe" }}>
            <span style={{ fontSize: isMobile ? 80 : 130 }}>🌿</span>
          </div>
          <div style={{ position: "absolute", bottom: isMobile ? -20 : -28, right: isMobile ? 12 : -28, background: "linear-gradient(135deg, #1e40af, #2563eb)", borderRadius: 16, padding: isMobile ? "16px 20px" : "28px 32px", color: "white", boxShadow: "0 12px 40px rgba(30,64,175,0.4)" }}>
            <p style={{ fontSize: isMobile ? 28 : 42, fontWeight: 800, margin: 0, lineHeight: 1 }}>20+</p>
            <p style={{ fontSize: 11, opacity: 0.9, margin: "4px 0 0" }}>{t("about.years")}</p>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 18, marginTop: isMobile ? 16 : 0 }}>
          <p style={{ color: "#1e40af", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", margin: 0 }}>{t("about.badge")}</p>
          <h2 style={{ fontSize: isMobile ? "1.6rem" : "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "#111827", margin: 0, lineHeight: 1.25 }}>{t("about.title")}</h2>
          <div style={{ width: 48, height: 4, background: "#1e40af", borderRadius: 2 }} />
          <p style={{ color: "#6b7280", lineHeight: 1.85, margin: 0, fontSize: isMobile ? 14 : 15 }}>{t("about.description")}</p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {points.map((p, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, color: "#374151", fontSize: isMobile ? 14 : 15 }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#eff6ff", border: "2px solid #1e40af", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#1e40af", fontSize: 11, fontWeight: 700 }}>✓</span>
                </div>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
