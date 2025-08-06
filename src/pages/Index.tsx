
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(147, 51, 234)"
        gradientBackgroundEnd="rgb(236, 72, 153)"
        firstColor="147, 51, 234"
        secondColor="236, 72, 153"
        thirdColor="168, 85, 247"
        fourthColor="249, 168, 212"
        fifthColor="196, 181, 253"
        pointerColor="139, 69, 19"
        containerClassName="fixed inset-0 opacity-30"
        interactive={true}
      />
      <div className="relative z-10">
        <Hero />
        <Services />
        <Portfolio />
        <Skills />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
