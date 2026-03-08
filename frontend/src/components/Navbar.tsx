import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo_ama_fruits.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 850);
  const { t, i18n } = useTranslation();
  const AZZURRO = "#0077b5";

  const navLinks = [
    { label: t('nav.home'), to: "#home" },
    { label: t('nav.about'), to: "#chi-siamo" },
    { label: t('nav.products'), to: "#prodotti" },
    { label: t('nav.services'), to: "#servizi" },
    { label: t('nav.contact'), to: "#contatti" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 850);
      if (window.innerWidth >= 850) setOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, width: "100%", zIndex: 9999,
      background: "#ffffff",
      boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.08)" : "none",
      transition: "all 0.3s",
      padding: scrolled ? "10px 0" : "16px 0",
      borderBottom: `1px solid ${scrolled ? "#f0f0f0" : "transparent"}`,
      boxSizing: "border-box"
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", boxSizing: "border-box" }}>
        
        <a href="#home" onClick={(e) => scrollToSection(e, "#home")} style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <img src={logo} alt="Logo" style={{ width: isMobile ? 50 : 75, height: isMobile ? 50 : 75, objectFit: "contain" }} />
          <span style={{ fontWeight: 900, fontSize: isMobile ? 20 : 24, color: AZZURRO, letterSpacing: "0.02em" }}>AMAFRUITS</span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {!isMobile ? (
            <>
              <ul style={{ listStyle: "none", display: "flex", gap: 24, margin: 0, padding: 0 }}>
                {navLinks.map(({ label, to }) => (
                  <li key={to}>
                    <a href={to} onClick={(e) => scrollToSection(e, to)} style={{ textDecoration: "none", fontSize: 13, fontWeight: 700, color: "#374151", textTransform: "uppercase", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = AZZURRO} onMouseLeave={e => e.currentTarget.style.color = "#374151"}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", alignItems: "center", gap: 6, borderLeft: "1px solid #eee", paddingLeft: 20 }}>
                <span>🌐</span>
                <select value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)} style={{ border: "none", background: "transparent", cursor: "pointer", fontSize: 13, fontWeight: 700, color: AZZURRO, outline: "none" }}>
                  <option value="it">IT</option><option value="en">EN</option><option value="es">ES</option>
                </select>
              </div>
            </>
          ) : (
            <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", color: AZZURRO, padding: 0 }}>
              {open ? <X size={32} /> : <Menu size={32} />}
            </button>
          )}
        </div>
      </div>

      {isMobile && open && (
        <div style={{ position: "absolute", top: "100%", left: 0, width: "100%", height: "100vh", background: "#ffffff", padding: "32px 24px", display: "flex", flexDirection: "column", gap: 24, borderTop: "1px solid #f0f0f0", boxSizing: "border-box", overflowY: "auto" }}>
          {navLinks.map(({ label, to }) => (
            <a key={to} href={to} onClick={(e) => scrollToSection(e, to)} style={{ textDecoration: "none", color: "#374151", fontWeight: 800, textTransform: "uppercase", fontSize: 18, paddingBottom: 16, borderBottom: "1px solid #f9fafb", display: "block", width: "100%" }}>
              {label}
            </a>
          ))}
          <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 16, width: "100%", boxSizing: "border-box" }}>
            <span style={{ fontSize: 22 }}>🌐</span>
            <select value={i18n.language} onChange={(e) => { i18n.changeLanguage(e.target.value); setOpen(false); }} style={{ border: "1px solid #eee", background: "#f9fafb", padding: "12px 16px", borderRadius: 8, fontSize: 16, fontWeight: 700, color: AZZURRO, width: "100%", boxSizing: "border-box", appearance: "none" }}>
              <option value="it">Italiano (IT)</option><option value="en">English (EN)</option><option value="es">Español (ES)</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
}