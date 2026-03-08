import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo_ama_fruits.png";
import { useWindowWidth } from "../hooks/useWindowWidth";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const isMobile = useWindowWidth() < 768;
  const { t, i18n } = useTranslation();

  const langs = [
    { code: "it", label: "IT", flag: "🇮🇹" },
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "es", label: "ES", flag: "🇪🇸" },
  ];

  const currentLang = langs.find(l => l.code === i18n.language) || langs[0];

  const links = [
    { label: t("nav.home"),     to: "/" },
    { label: t("nav.about"),    to: "/chi-siamo" },
    { label: t("nav.products"), to: "/prodotti" },
    { label: t("nav.services"), to: "/servizi" },
    { label: t("nav.where"),    to: "/dove-siamo" },
    { label: t("nav.contact"),  to: "/contatti" },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <nav style={{
      position: "fixed", top: 0, width: "100%", zIndex: 100,
      background: "rgba(255,255,255,0.98)",
      boxShadow: scrolled ? "0 2px 24px rgba(30,64,175,0.10)" : "0 1px 8px rgba(0,0,0,0.06)",
      backdropFilter: "blur(10px)",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "0 20px",
        display: "flex", alignItems: "center",
        justifyContent: "space-between", height: 68,
      }}>
        {/* LOGO */}
        <Link to="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <img src={logo} alt="Amafruits" style={{ height: 48, width: "auto", objectFit: "contain" }} />
        </Link>

        {/* DESKTOP LINKS */}
        {!isMobile && (
          <ul style={{ display: "flex", alignItems: "center", gap: 24, listStyle: "none", margin: 0, padding: 0 }}>
            {links.map(({ label, to }) => (
              <li key={to}>
                <Link to={to} style={{
                  textDecoration: "none", fontSize: 13, fontWeight: 500,
                  color: location.pathname === to ? "#1e40af" : "#374151",
                  borderBottom: location.pathname === to ? "2px solid #1e40af" : "2px solid transparent",
                  paddingBottom: 3, transition: "all 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#1e40af")}
                onMouseLeave={e => (e.currentTarget.style.color = location.pathname === to ? "#1e40af" : "#374151")}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* RIGHT: lingua + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* SELETTORE LINGUA */}
          <div style={{ position: "relative" }}>
            <button onClick={() => setLangOpen(!langOpen)} style={{
              display: "flex", alignItems: "center", gap: 6,
              background: "#eff6ff", border: "1.5px solid #dbeafe",
              borderRadius: 20, padding: "6px 12px", cursor: "pointer",
              fontSize: 12, fontWeight: 600, color: "#1e40af",
            }}>
              <span>{currentLang.flag}</span>
              <span>{currentLang.label}</span>
              <span style={{ fontSize: 10 }}>▾</span>
            </button>

            {langOpen && (
              <div style={{
                position: "absolute", top: "calc(100% + 8px)", right: 0,
                background: "white", borderRadius: 12, padding: 8,
                boxShadow: "0 8px 24px rgba(30,64,175,0.15)",
                border: "1px solid #dbeafe", minWidth: 110, zIndex: 200,
              }}>
                {langs.map(({ code, label, flag }) => (
                  <button key={code} onClick={() => { i18n.changeLanguage(code); setLangOpen(false); }}
                    style={{
                      display: "flex", alignItems: "center", gap: 8, width: "100%",
                      padding: "8px 12px", background: i18n.language === code ? "#eff6ff" : "transparent",
                      border: "none", borderRadius: 8, cursor: "pointer",
                      fontSize: 13, fontWeight: i18n.language === code ? 700 : 400,
                      color: i18n.language === code ? "#1e40af" : "#374151",
                    }}>
                    <span>{flag}</span><span>{label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {isMobile && (
            <button onClick={() => setOpen(!open)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex" }}>
              {open ? <X size={24} color="#1e40af" /> : <Menu size={24} color="#1e40af" />}
            </button>
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobile && open && (
        <div style={{
          background: "white", borderTop: "1px solid #e0e7ff",
          padding: "16px 20px 24px", display: "flex", flexDirection: "column", gap: 4,
          boxShadow: "0 8px 24px rgba(30,64,175,0.10)",
        }}>
          {links.map(({ label, to }) => (
            <Link key={to} to={to} onClick={() => setOpen(false)} style={{
              color: location.pathname === to ? "#1e40af" : "#374151",
              textDecoration: "none", fontWeight: 500, fontSize: 15,
              padding: "12px 12px", borderBottom: "1px solid #f3f4f6",
              background: location.pathname === to ? "#eff6ff" : "transparent",
              borderRadius: 8,
            }}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
