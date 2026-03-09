import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useWindowWidth } from "../hooks/useWindowWidth";
import carciofi from "../assets/carciofi.webp";
import ciliegie from "../assets/ciliegie.webp";
import fragola from "../assets/fragola.webp";
import uva from "../assets/uva.webp";

const vetrina = [
  { img: fragola,  key: "fragole",  name: "Fragole",       cat: "Premium",  desc: "Fragole rosse e dolci, selezionate a mano.",                  detail: "Le fragole Premium AMA Fruits sono raccolte a mano ogni mattina e refrigerate immediatamente per mantenere freschezza e dolcezza. Disponibili in diversi calibri per la GDO e il mercato all'ingrosso." },
  { img: carciofi, key: "carciofi", name: "Carciofi",       cat: "Verdura",  desc: "Carciofi freschi tipici della tradizione italiana.",          detail: "I carciofi AMA Fruits sono coltivati secondo la tradizione italiana. Varietà romanesco e spinoso, ideali per la ristorazione e la distribuzione specializzata." },
  { img: uva,      key: "uva",      name: "Uva da Tavola",  cat: "Frutta",   desc: "Selezione di varietà pregiate, dolci e croccanti.",           detail: "Offriamo varietà bianche e rosse, con e senza semi, ideali per la grande distribuzione e i mercati internazionali. Raccolta al punto ottimale di maturazione." },
  { img: ciliegie, key: "ciliegie", name: "Ciliegie",        cat: "Frutta",   desc: "Ciliegie fresche di prima qualità, varietà multiple.",        detail: "Le nostre ciliegie sono selezionate a mano tra le migliori varietà italiane. Calibrate e confezionate con cura per preservarne la freschezza." },
];

const altriProdotti = [
  "🍊 Agrumi — Arance, limoni, mandarini freschi e profumati",
  "🍑 Pesche, Nettarine, Albicocche e Prugne — Frutta estiva raccolta al punto giusto",
  "🌿 Asparagi — Teneri e dal sapore intenso, verdi e bianchi",
  "🥬 Verdure di stagione — Selezione fresca dai migliori produttori locali",
  "🌰 Frutta Secca — Castagne, noci e nocciole di alta qualità",
];

// Carosello: aggiungi le tue foto qui quando sono pronte
const caroselloFoto: { src: string; label: string }[] = [
  // { src: tua_foto, label: "Descrizione" },
];

export default function Products() {
  const { t } = useTranslation();
  const w = useWindowWidth();
  const cols = w < 640 ? 1 : w < 1024 ? 2 : 2;
  const [selected, setSelected] = useState<typeof vetrina[0] | null>(null);
  const [slide, setSlide] = useState(0);

  const prev = () => setSlide(s => (s === 0 ? caroselloFoto.length - 1 : s - 1));
  const next = () => setSlide(s => (s === caroselloFoto.length - 1 ? 0 : s + 1));

  return (
    <section style={{ padding: w < 768 ? "64px 0" : "96px 0", background: "#f8faff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: w < 768 ? "0 20px" : "0 48px" }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: w < 768 ? 40 : 64 }}>
          <p style={{ color: "#1e40af", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.2em", margin: "0 0 12px" }}>
            {t("products.badge")}
          </p>
          <h2 style={{ fontSize: w < 768 ? "1.6rem" : "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "#111827", margin: "0 0 16px" }}>
            {t("products.title")}
          </h2>
          <div style={{ width: 48, height: 4, background: "#1e40af", borderRadius: 2, margin: "0 auto 16px" }} />
          <p style={{ color: "#6b7280", maxWidth: 500, margin: "0 auto", fontSize: w < 768 ? 14 : 15 }}>
            {t("products.description")}
          </p>
        </div>

        {/* VETRINA 4 PRODOTTI */}
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: w < 768 ? 16 : 28, marginBottom: w < 768 ? 48 : 72 }}>
          {vetrina.map((p) => (
            <div key={p.key}
              style={{ background: "white", borderRadius: 18, overflow: "hidden", boxShadow: "0 1px 12px rgba(30,64,175,0.07)", transition: "all 0.3s", borderTop: "4px solid transparent" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 36px rgba(30,64,175,0.14)"; e.currentTarget.style.borderTopColor = "#1e40af"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 1px 12px rgba(30,64,175,0.07)"; e.currentTarget.style.borderTopColor = "transparent"; }}>
              <div style={{ height: w < 768 ? 160 : 220, overflow: "hidden" }}>
                <img src={p.img} alt={p.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
              <div style={{ padding: w < 768 ? "16px" : "20px 24px 24px" }}>
                <span style={{ background: "#eff6ff", color: "#1e40af", fontSize: 11, fontWeight: 700, padding: "3px 12px", borderRadius: 50 }}>{p.cat}</span>
                <h3 style={{ fontSize: w < 768 ? 16 : 18, fontWeight: 700, color: "#111827", margin: "10px 0 6px" }}>{p.name}</h3>
                <p style={{ color: "#9ca3af", fontSize: 13, lineHeight: 1.6, margin: "0 0 16px" }}>{p.desc}</p>
                <button onClick={() => setSelected(p)}
                  style={{ background: "none", border: "1.5px solid #1e40af", color: "#1e40af", borderRadius: 50, padding: "8px 20px", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#1e40af"; e.currentTarget.style.color = "white"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#1e40af"; }}>
                  Scopri di più →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ALTRI PRODOTTI — TESTO */}
        <div style={{ background: "white", borderRadius: 20, padding: w < 768 ? "28px 20px" : "40px 48px", marginBottom: w < 768 ? 48 : 72, boxShadow: "0 1px 12px rgba(30,64,175,0.06)", border: "1px solid #dbeafe" }}>
          <h3 style={{ fontSize: w < 768 ? 18 : 22, fontWeight: 800, color: "#111827", margin: "0 0 8px" }}>
            E tanti altri prodotti...
          </h3>
          <p style={{ color: "#6b7280", fontSize: 14, margin: "0 0 24px" }}>
            La nostra gamma si amplia continuamente seguendo la stagionalità e le richieste dei mercati.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {altriProdotti.map((p, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: w < 768 ? 14 : 15, color: "#374151", borderBottom: i < altriProdotti.length - 1 ? "1px solid #f3f4f6" : "none", paddingBottom: i < altriProdotti.length - 1 ? 14 : 0 }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{p.split(" ")[0]}</span>
                <span>{p.split(" ").slice(1).join(" ")}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CAROSELLO FOTO */}
        <div style={{ textAlign: "center", marginBottom: w < 768 ? 36 : 48 }}>
          <h3 style={{ fontSize: w < 768 ? 18 : 22, fontWeight: 800, color: "#111827", margin: "0 0 8px" }}>
            I nostri prodotti in immagini
          </h3>
          <p style={{ color: "#6b7280", fontSize: 14, margin: "0 0 28px" }}>Galleria fotografica dei nostri prodotti freschi</p>

          {caroselloFoto.length > 0 ? (
            <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
              <div style={{ borderRadius: 20, overflow: "hidden", height: w < 768 ? 220 : 420, boxShadow: "0 8px 32px rgba(30,64,175,0.12)" }}>
                <img src={caroselloFoto[slide].src} alt={caroselloFoto[slide].label}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <p style={{ color: "#6b7280", fontSize: 13, marginTop: 12 }}>{caroselloFoto[slide].label}</p>
              <button onClick={prev} style={{ position: "absolute", left: -20, top: "45%", transform: "translateY(-50%)", width: 44, height: 44, borderRadius: "50%", background: "white", border: "none", boxShadow: "0 4px 16px rgba(0,0,0,0.12)", cursor: "pointer", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
              <button onClick={next} style={{ position: "absolute", right: -20, top: "45%", transform: "translateY(-50%)", width: 44, height: 44, borderRadius: "50%", background: "white", border: "none", boxShadow: "0 4px 16px rgba(0,0,0,0.12)", cursor: "pointer", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
              <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16 }}>
                {caroselloFoto.map((_, i) => (
                  <button key={i} onClick={() => setSlide(i)} style={{ width: i === slide ? 24 : 8, height: 8, borderRadius: 4, background: i === slide ? "#1e40af" : "#dbeafe", border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
                ))}
              </div>
            </div>
          ) : (
            // PLACEHOLDER — sparirà quando aggiungi le foto
            <div style={{ maxWidth: 800, margin: "0 auto", background: "linear-gradient(135deg, #eff6ff, #dbeafe)", borderRadius: 20, height: w < 768 ? 180 : 320, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, border: "2px dashed #93c5fd" }}>
              <span style={{ fontSize: 48 }}>📸</span>
              <p style={{ color: "#1e40af", fontWeight: 700, margin: 0 }}>Galleria in arrivo</p>
              <p style={{ color: "#6b7280", fontSize: 13, margin: 0 }}>Carica le foto webp negli asset e aggiungile al carosello</p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: w < 768 ? 16 : 32 }}>
          <a href="mailto:info@amafruits.it" style={{
            background: "linear-gradient(135deg, #1e40af, #2563eb)", color: "white",
            padding: w < 768 ? "13px 32px" : "16px 44px", borderRadius: 50,
            fontWeight: 700, textDecoration: "none", fontSize: 13,
            letterSpacing: "0.08em", textTransform: "uppercase",
            boxShadow: "0 6px 20px rgba(30,64,175,0.35)", display: "inline-block",
          }}>
            {t("products.cta")}
          </a>
        </div>
      </div>

      {/* MODALE */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, backdropFilter: "blur(4px)" }}>
          <div onClick={e => e.stopPropagation()} style={{ background: "white", borderRadius: 24, overflow: "hidden", maxWidth: 560, width: "100%", boxShadow: "0 24px 64px rgba(0,0,0,0.25)" }}>
            <div style={{ height: 240, overflow: "hidden" }}>
              <img src={selected.img} alt={selected.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ padding: 32 }}>
              <span style={{ background: "#eff6ff", color: "#1e40af", fontSize: 11, fontWeight: 700, padding: "3px 12px", borderRadius: 50 }}>{selected.cat}</span>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#111827", margin: "12px 0 12px" }}>{selected.name}</h3>
              <p style={{ color: "#6b7280", lineHeight: 1.8, fontSize: 15, margin: "0 0 24px" }}>{selected.detail}</p>
              <div style={{ display: "flex", gap: 12 }}>
                <a href="mailto:info@amafruits.it" style={{ background: "linear-gradient(135deg, #1e40af, #2563eb)", color: "white", padding: "12px 28px", borderRadius: 50, fontWeight: 700, textDecoration: "none", fontSize: 13 }}>Richiedi Info</a>
                <button onClick={() => setSelected(null)} style={{ background: "#f3f4f6", border: "none", color: "#6b7280", padding: "12px 24px", borderRadius: 50, fontWeight: 600, cursor: "pointer", fontSize: 13, fontFamily: "inherit" }}>Chiudi</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
