import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Services from "../components/Services";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <section id="home"><Hero /></section>
      <section id="chi-siamo"><About /></section>
      <section id="prodotti"><Products /></section>
      <section id="servizi"><Services /></section>
      <section id="contatti"><Contact /></section>
    </main>
  );
}
