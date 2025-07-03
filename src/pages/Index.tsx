
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 overflow-x-hidden">
      <Hero />
      <Services />
      <Portfolio />
      <Skills />
    </div>
  );
};

export default Index;
