import Hero from "../components/Hero";
import APropos from "./a-propos/page";
import Services from "./services/page";
import Testimonials from "./Tetsimonial/page";
import Contact from "./contact/page";
import Footer from "../components/Footer";
import MentionsLegales from "./mentions-legales/page";
"./pages/services/page.tsx";

export default function Home() {
  return (
    <main>
      <Hero />
      <APropos />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
}