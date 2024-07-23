import CardSection from "@/components/CardSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MovingCards from "@/components/MovingCards";
import StikySection from "@/components/StikySection";
import Testimonials from "@/components/Testimonials";
import UpcomingWebinar from "@/components/UpcomingWebinar";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <CardSection/>
      <StikySection/>
      <MovingCards/>
      <UpcomingWebinar/>
      <Testimonials/>
      <Footer/>
      </main>
    </div>
  );
}
