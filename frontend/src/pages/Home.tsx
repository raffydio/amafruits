// frontend/src/pages/Home.tsx
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Services from "../components/Services";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <Services />
      <Contact />
    </main>
  );
}
