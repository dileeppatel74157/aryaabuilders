import Navigation from "@/components/Navigation";
import ConstructionHero from "@/components/ConstructionHero";
import About from "@/components/About";
import SelectedWork from "@/components/SelectedWork";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Craftsmanship from "@/components/Craftsmanship";
import Location from "@/components/Location";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import GSAPProvider from "@/components/GSAPProvider";

export default function Home() {
  return (
    <GSAPProvider>
      <Navigation />
      <main>
        {/* Section 01: Scroll-Controlled Image-Sequence Hero */}
        <ConstructionHero />

        {/* Section 02: The Idea */}
        <About />

        {/* Section 03: Selected Work */}
        <SelectedWork />

        {/* Section 04: Our Process (VISION -> DESIGN -> BUILD -> FINISH) */}
        <Process />

        {/* Section 05: Services */}
        <Services />

        {/* Section 06: Craftsmanship */}
        <Craftsmanship />

        {/* Section 07: Jabalpur */}
        <Location />

        {/* Section 08: Client Trust & Reviews */}
        <Reviews />

        {/* Section 09: Final Consultation CTA */}
        <CTA />
      </main>
      <Footer />
    </GSAPProvider>
  );
}
