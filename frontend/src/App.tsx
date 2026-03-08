import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const AboutPage    = () => <main style={{ paddingTop: 120, maxWidth: 1280, margin: "0 auto", padding: "120px 48px 96px" }}><h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#111827" }}>Chi Siamo</h1></main>;
const ProductsPage = () => <main style={{ paddingTop: 120, maxWidth: 1280, margin: "0 auto", padding: "120px 48px 96px" }}><h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#111827" }}>Prodotti</h1></main>;
const ServicesPage = () => <main style={{ paddingTop: 120, maxWidth: 1280, margin: "0 auto", padding: "120px 48px 96px" }}><h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#111827" }}>Servizi</h1></main>;
const WherePage    = () => <main style={{ paddingTop: 120, maxWidth: 1280, margin: "0 auto", padding: "120px 48px 96px" }}><h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#111827" }}>Dove Siamo</h1></main>;
const ContactPage  = () => <main style={{ paddingTop: 120, maxWidth: 1280, margin: "0 auto", padding: "120px 48px 96px" }}><h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#111827" }}>Contatti</h1></main>;

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/chi-siamo"  element={<AboutPage />} />
        <Route path="/prodotti"   element={<ProductsPage />} />
        <Route path="/servizi"    element={<ServicesPage />} />
        <Route path="/dove-siamo" element={<WherePage />} />
        <Route path="/contatti"   element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
