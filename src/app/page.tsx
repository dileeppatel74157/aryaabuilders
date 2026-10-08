import Navigation from "@/components/Navigation";
import HeroConstruction from "@/components/HeroConstruction";
import About from "@/components/About";
import Process from "@/components/Process";
import ConstructionStory from "@/components/ConstructionStory";
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
        <HeroConstruction />
        <About />
        <Process />
        <ConstructionStory />
        <Services />
        <Craftsmanship />
        <Location />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </GSAPProvider>
  );
}
