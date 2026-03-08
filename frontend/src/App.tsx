// frontend/src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const AboutPage = () => (
  <main className="pt-32 max-w-4xl mx-auto px-6 pb-24">
    <h1 className="text-4xl font-bold text-gray-900">Chi Siamo</h1>
  </main>
);
const ProductsPage = () => (
  <main className="pt-32 max-w-7xl mx-auto px-6 pb-24">
    <h1 className="text-4xl font-bold text-gray-900">Prodotti</h1>
  </main>
);
const ContactPage = () => (
  <main className="pt-32 max-w-4xl mx-auto px-6 pb-24">
    <h1 className="text-4xl font-bold text-gray-900">Contatti</h1>
  </main>
);

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<AboutPage />} />
        <Route path="/prodotti" element={<ProductsPage />} />
        <Route path="/contatti" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
