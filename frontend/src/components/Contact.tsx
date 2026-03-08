import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useWindowWidth } from "../hooks/useWindowWidth";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const isMobile = useWindowWidth() < 768;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {}
    setSent(true);
  };

  const inputStyle = {
    width: "100%", border: "1.5px solid #e5e7eb", borderRadius: 12,
    padding: "13px 16px", fontSize: 14, outline: "none",
    boxSizing: "border-box" as const, transition: "border-color 0.2s", fontFamily: "inherit"
  };

  const contacts = [
    { icon: "✉️", val: t("contact.email_val") },
    { icon: "📍", val: t("contact.address") },
    { icon: "👤", val: `Michele Natale — ${t("contact.phone_michele")}` },
    { icon: "👤", val: `Gioele Natale — ${t("contact.phone_gioele")}` },
  ];

  return (
    <section style={{ padding: isMobile ? "64px 0" : "96px 0", background: "white" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: isMobile ? "0 20px" : "0 48px", display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 40 : 80 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
          <div>
            <p style={{ color: "#1e40af", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", margin: "0 0 10px" }}>{t("contact.badge")}</p>
            <h2 style={{ fontSize: isMobile ? "1.6rem" : "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "#111827", margin: "0 0 14px" }}>{t("contact.title")}</h2>
            <div style={{ width: 48, height: 4, background: "#1e40af", borderRadius: 2 }} />
          </div>
          <p style={{ color: "#6b7280", lineHeight: 1.85, margin: 0, fontSize: isMobile ? 14 : 15 }}>{t("contact.description")}</p>
          {contacts.map(({ icon, val }) => (
            <div key={val} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 44, height: 44, background: "#eff6ff", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{icon}</div>
              <span style={{ color: "#374151", fontSize: isMobile ? 13 : 14 }}>{val}</span>
            </div>
          ))}
          <a href="https://www.amafruits.it" target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}>
            <div style={{ width: 44, height: 44, background: "#eff6ff", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>🌐</div>
            <span style={{ color: "#1e40af", fontSize: isMobile ? 13 : 14, fontWeight: 500 }}>www.amafruits.it</span>
          </a>
        </div>

        <div style={{ flex: 1, background: "#f8faff", borderRadius: 24, padding: isMobile ? "28px 20px" : "44px", border: "1px solid #dbeafe" }}>
          {sent ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 300, gap: 16, textAlign: "center" }}>
              <span style={{ fontSize: 60 }}>✅</span>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: "#111827", margin: 0 }}>{t("contact.success_title")}</h3>
              <p style={{ color: "#9ca3af", margin: 0 }}>{t("contact.success_desc")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { field: "name",  type: "text",  ph: t("contact.name"),  req: true },
                { field: "email", type: "email", ph: t("contact.email"), req: true },
                { field: "phone", type: "text",  ph: t("contact.phone"), req: false },
              ].map(({ field, type, ph, req }) => (
                <input key={field} type={type} placeholder={ph} required={req}
                  style={inputStyle}
                  value={form[field as keyof typeof form]}
                  onChange={e => setForm({ ...form, [field]: e.target.value })}
                  onFocus={e => (e.target.style.borderColor = "#1e40af")}
                  onBlur={e => (e.target.style.borderColor = "#e5e7eb")}
                />
              ))}
              <textarea rows={5} placeholder={t("contact.message")} required
                style={{ ...inputStyle, resize: "none" }}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                onFocus={e => (e.target.style.borderColor = "#1e40af")}
                onBlur={e => (e.target.style.borderColor = "#e5e7eb")}
              />
              <button type="submit" style={{ background: "linear-gradient(135deg, #1e40af, #2563eb)", color: "white", border: "none", padding: "15px", borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 15px rgba(30,64,175,0.3)", fontFamily: "inherit" }}>
                {t("contact.submit")}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
