import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo_ama_fruits.png";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { Linkedin, Facebook, X } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();
  const isMobile = useWindowWidth() < 768;
  const [showPrivacy, setShowPrivacy] = useState(false);

  const navLinks = [
    [t("nav.home"), "home"], [t("nav.about"), "chi-siamo"],
    [t("nav.products"), "prodotti"], [t("nav.services"), "servizi"],
    [t("nav.contact"), "contatti"],
  ];

  const productLinks = [
    "Uva da Tavola", "Ciliegie", "Agrumi", "Fragole", "Frutta Secca",
  ];

  const contactLinks: [string, string][] = [
    ["info@amafruits.it", "mailto:info@amafruits.it"],
    ["+39 345 4126662",   "tel:+393454126662"],
    ["+39 333 5451983",   "tel:+393335451983"],
    ["Frignano (CE)",     "#"],
  ];

  const socials = [
    { label: "Facebook", href: "https://www.facebook.com/share/1L4b79ub3J/?mibextid=wwXIfr", icon: <Facebook size={18} color="white" />, bg: "#1877f2", hoverBg: "#1565d8" },
    { label: "LinkedIn",  href: "https://www.linkedin.com/in/michele-natale-9b9113125",        icon: <Linkedin size={18} color="white" />, bg: "#0a66c2", hoverBg: "#084e96" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <>
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

          {/* NAVIGAZIONE */}
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

          {/* PRODOTTI */}
          <div>
            <h4 style={{ color: "white", fontWeight: 700, fontSize: 12, marginBottom: 16, marginTop: 0, textTransform: "uppercase", letterSpacing: "0.12em" }}>{t("footer.products_title")}</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
              {productLinks.map((label) => (
                <li key={label}>
                  <button onClick={() => scrollTo("prodotti")} style={{ background: "none", border: "none", cursor: "pointer", color: "#6b7280", fontSize: 13, padding: 0, fontFamily: "inherit", textAlign: "left" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#60a5fa")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}>
                    {label}
                  </button>
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
        <div style={{ maxWidth: 1280, margin: "40px auto 0", padding: isMobile ? "16px 20px 12px" : "20px 48px 16px", borderTop: "1px solid #111f3a", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <span style={{ color: "#4b5563", fontSize: 12 }}>© 2026 AMA Fruits S.r.l. — Tutti i diritti riservati</span>
            <button onClick={() => setShowPrivacy(true)}
              style={{ background: "none", border: "none", color: "#60a5fa", fontSize: 12, cursor: "pointer", fontFamily: "inherit", textDecoration: "underline", padding: 0 }}>
              Privacy & Cookie Policy
            </button>
          </div>
          {/* CREDITS */}
          <p style={{ margin: 0, fontSize: 11, color: "#374151" }}>
            Sviluppato da{" "}
            <a href="mailto:raffydio1994@gmail.com" style={{ color: "#60a5fa", textDecoration: "none", fontWeight: 600 }}>
              Raffaele Diomaiuto
            </a>
            {" "}— AI Developer —{" "}
            <a href="tel:+393518688574" style={{ color: "#60a5fa", textDecoration: "none" }}>
              +39 351 8688574
            </a>
          </p>
        </div>
      </footer>

      {/* MODALE PRIVACY */}
      {showPrivacy && (
        <div onClick={() => setShowPrivacy(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, backdropFilter: "blur(4px)" }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "white", borderRadius: 24, maxWidth: 680, width: "100%", maxHeight: "85vh", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 24px 64px rgba(0,0,0,0.3)" }}>

            {/* HEADER MODALE */}
            <div style={{ padding: "28px 32px 20px", borderBottom: "1px solid #f3f4f6", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
              <div>
                <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: "#111827" }}>Privacy & Cookie Policy</h2>
                <p style={{ margin: "4px 0 0", fontSize: 13, color: "#9ca3af" }}>AMA Fruits S.r.l. — Ultimo aggiornamento: Marzo 2026</p>
              </div>
              <button onClick={() => setShowPrivacy(false)} style={{ background: "#f3f4f6", border: "none", borderRadius: "50%", width: 36, height: 36, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <X size={18} color="#6b7280" />
              </button>
            </div>

            {/* CONTENUTO SCROLLABILE */}
            <div style={{ padding: "24px 32px 32px", overflowY: "auto", lineHeight: 1.8, color: "#374151", fontSize: 14 }}>

              <h3 style={{ color: "#1e40af", fontSize: 16, marginBottom: 8 }}>1. Titolare del Trattamento</h3>
              <p>Il titolare del trattamento dei dati personali è <strong>AMA Fruits S.r.l.</strong>, con sede legale in Viale del Tramonto 18, 81030 Frignano Maggiore (CE), P.IVA 04261260618. Per qualsiasi richiesta: <a href="mailto:info@amafruits.it" style={{ color: "#1e40af" }}>info@amafruits.it</a></p>

              <h3 style={{ color: "#1e40af", fontSize: 16, marginBottom: 8, marginTop: 24 }}>2. Dati Raccolti</h3>
              <p>Il presente sito web raccoglie esclusivamente i dati forniti volontariamente dall'utente tramite il modulo di contatto (nome, email, telefono, messaggio). Nessun dato viene raccolto in modo automatico senza consenso esplicito.</p>

              <h3 style={{ color: "#1e40af", fontSize: 16, marginBottom: 8, marginTop: 24 }}>3. Finalità del Trattamento</h3>
              <p>I dati raccolti vengono utilizzati esclusivamente per rispondere alle richieste di informazioni commerciali e per contattare l'utente in merito ai prodotti e servizi offerti da AMA Fruits S.r.l. I dati non vengono ceduti a terzi né utilizzati per finalità di marketing non autorizzato.</p>

              <h3 style={{ color: "#1e40af", fontSize: 16, marginBottom: 8, marginTop: 24 }}>4. Cookie</h3>
              <p>Questo sito utilizza esclusivamente cookie tecnici necessari al corretto funzionamento della navigazione. Non vengono utilizzati cookie di profilazione o di terze parti a scopo pubblicitario.</p>

              <h3 style={{ color: "#1e40af", fontSize: 16, marginBottom: 8, marginTop: 24 }}>5. Diritti dell'Utente</h3>
              <p>In conformità al Regolamento UE 2016/679 (GDPR), l'utente ha diritto di accedere, rettificare, cancellare i propri dati e opporsi al loro trattamento. Per esercitare tali diritti scrivere a <a href="mailto:info@amafruits.it" style={{ color: "#1e40af" }}>info@amafruits.it</a>.</p>

              <h3 style={{ color: "#1e40af", fontSize: 16, marginBottom: 8, marginTop: 24 }}>6. Proprietà Intellettuale</h3>
              <p>Tutti i contenuti presenti su questo sito — testi, immagini, loghi e grafica — sono di proprietà esclusiva di <strong>AMA Fruits S.r.l.</strong> e sono protetti dalla normativa vigente in materia di diritto d'autore. È vietata qualsiasi riproduzione, anche parziale, senza autorizzazione scritta.</p>

              <h3 style={{ color: "#1e40af", fontSize: 16, marginBottom: 8, marginTop: 24 }}>7. Sviluppo del Sito</h3>
              <p>Il presente sito web è stato progettato e sviluppato da <strong>Raffaele Diomaiuto</strong>, AI Developer.<br />
              📧 <a href="mailto:raffydio1994@gmail.com" style={{ color: "#1e40af" }}>raffydio1994@gmail.com</a> — 📞 <a href="tel:+393518688574" style={{ color: "#1e40af" }}>+39 351 8688574</a></p>

              <div style={{ marginTop: 28, padding: "16px 20px", background: "#f8faff", borderRadius: 12, border: "1px solid #dbeafe", fontSize: 13, color: "#6b7280" }}>
                Per qualsiasi chiarimento relativo alla presente policy contattare AMA Fruits S.r.l. ai recapiti indicati nella sezione Contatti del sito.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
