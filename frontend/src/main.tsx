// File: src/main.tsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}