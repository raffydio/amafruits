import { useTranslation } from "react-i18next";
import { Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();
  const AZZURRO = "#0077b5";

  // Aggiornati i percorsi con gli ID (#)
  const columns = [
    { title: t('footer.col_company'), links: [[t('nav.about'), "#chi-siamo"], [t('nav.services'), "#servizi"]] },
    { title: t('footer.col_products'), links: [[t('products.items.agrumi'), "#prodotti"], [t('products.items.rossi'), "#prodotti"]] },
    { title: t('footer.col_contact'), links: [[t('nav.contact'), "#contatti"], ["Dove Siamo", "#contatti"]] },
  ];

  return (
    <footer style={{ background: "#ffffff", color: "#4b5563", paddingTop: "clamp(40px, 8vw, 72px)", borderTop: "1px solid #f0f0f0" }}>
      
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 48 }}>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ color: AZZURRO, fontWeight: 800, fontSize: 24, letterSpacing: "-0.01em" }}>
            ama<span style={{ color: AZZURRO }}>fruits</span>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.8, margin: 0, maxWidth: 320, color: "#6b7280" }}>
            {t('footer.desc')}
          </p>
          
          <div style={{ marginTop: 8 }}>
            <p style={{ color: AZZURRO, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>
              {t('footer.follow_us')}
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href="https://www.facebook.com/share/1L4b79ub3J/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
                style={{ width: 40, height: 40, borderRadius: 12, background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", color: AZZURRO, transition: "all 0.3s", textDecoration: "none" }}
                onMouseEnter={e => { e.currentTarget.style.background = AZZURRO; e.currentTarget.style.color = "white"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#f3f4f6"; e.currentTarget.style.color = AZZURRO; e.currentTarget.style.transform = "translateY(0)"; }}>
                <Facebook size={20} strokeWidth={2} />
              </a>
              <a href="https://www.linkedin.com/in/michele-natale-9b9113125/" target="_blank" rel="noopener noreferrer"
                style={{ width: 40, height: 40, borderRadius: 12, background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", color: AZZURRO, transition: "all 0.3s", textDecoration: "none" }}
                onMouseEnter={e => { e.currentTarget.style.background = AZZURRO; e.currentTarget.style.color = "white"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#f3f4f6"; e.currentTarget.style.color = AZZURRO; e.currentTarget.style.transform = "translateY(0)"; }}>
                <Linkedin size={20} strokeWidth={2} />
              </a>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "#f9fafb", display: "flex", alignItems: "center", justifyContent: "center", color: "#d1d5db", cursor: "default" }}>
                <Instagram size={20} strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>
        
        {columns.map(({ title, links }) => (
          <div key={title}>
            <h4 style={{ color: AZZURRO, fontWeight: 700, fontSize: 14, marginBottom: 24, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {title}
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {links.map(([label, to]) => (
                <li key={label}>
                  <a href={to} style={{ color: "#4b5563", textDecoration: "none", fontSize: 14, fontWeight: 500, transition: "all 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.color = AZZURRO; e.currentTarget.style.paddingLeft = "4px"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "#4b5563"; e.currentTarget.style.paddingLeft = "0px"; }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 1280, margin: "64px auto 0", padding: "24px", borderTop: "1px solid #f0f0f0", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
        <p style={{ margin: 0, fontSize: 13, color: "#9ca3af", fontWeight: 500 }}>
          © {new Date().getFullYear()} Amafruits S.R.L. — P.IVA 12345678901
        </p>
        <div style={{ display: "flex", gap: 24, fontSize: 13, color: "#9ca3af", fontWeight: 500 }}>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }} onMouseEnter={e => e.currentTarget.style.color = AZZURRO} onMouseLeave={e => e.currentTarget.style.color = "#9ca3af"}>Privacy Policy</a>
          <a href="#" style={{ color: "inherit", textDecoration: "none" }} onMouseEnter={e => e.currentTarget.style.color = AZZURRO} onMouseLeave={e => e.currentTarget.style.color = "#9ca3af"}>Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}