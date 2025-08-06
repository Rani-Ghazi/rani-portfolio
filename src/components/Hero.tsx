
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { ArrowDown, Sparkles, Code, Palette } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/+96895454284`, '_blank');
  };

  // Preload the image for faster loading
  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/699ac11f-7151-4af4-be7d-ee02c80da982.png";
    img.onload = () => setImageLoaded(true);
  }, []);

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Enhanced Background decoration with mouse parallax */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-4 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float transition-transform duration-1000"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float-slow transition-transform duration-1000"
          style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-bounce-gentle transition-transform duration-1000"
          style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
        ></div>
        
        {/* Enhanced floating particles with different animations */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-500 rounded-full animate-bounce-gentle opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-pink-500 rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-500 rounded-full animate-wiggle opacity-60"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-float-slow opacity-60"></div>
        <div className="absolute top-1/2 left-1/6 w-5 h-5 bg-indigo-400 rounded-full animate-bounce-gentle opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/5 w-3 h-3 bg-rose-400 rounded-full animate-float opacity-60"></div>
        
        {/* Additional interactive elements */}
        <Sparkles className="absolute top-1/5 left-1/5 w-6 h-6 text-purple-400 animate-pulse opacity-70" />
        <Code className="absolute bottom-1/5 left-1/3 w-8 h-8 text-blue-500 animate-bounce-gentle opacity-60" />
        <Palette className="absolute top-1/3 right-1/5 w-7 h-7 text-pink-500 animate-wiggle opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        {/* Enhanced Text Content with staggered animations */}
        <div className="text-center lg:text-left space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1">
          <div className="animate-slide-left">
            <p className="text-base sm:text-lg lg:text-xl text-purple-600 font-semibold mb-2 sm:mb-3 hover:scale-105 transition-all duration-700 animate-bounce-gentle">
              Hello, I am Rani Ghazi
            </p>
            <div className="space-y-2 sm:space-y-3">
              <TextEffect
                per="word"
                preset="slide"
                delay={0.8}
                as="h1"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight hover:text-purple-700 transition-all duration-700 transform hover:scale-105 cursor-default"
              >
                Software Engineer
              </TextEffect>
              <TextEffect
                per="word"
                preset="blur"
                delay={1.2}
                as="h2"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-purple-600 hover:text-purple-800 transition-all duration-700 transform hover:scale-105 cursor-default"
              >
                + UX Designer
              </TextEffect>
            </div>
          </div>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed animate-slide-up mx-auto lg:mx-0 transform hover:text-gray-800 transition-all duration-500 hover:scale-105 px-4 lg:px-0 cursor-default">
            I build high-performance web and mobile applications with clean code, scalable architecture, and user-first design.
            Based in Oman with 5+ years turning ideas into digital reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-slide-up justify-center lg:justify-start px-4 lg:px-0" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-semibold transition-all duration-700 hover:scale-110 hover:shadow-2xl transform w-full sm:w-auto shadow-lg hover:shadow-purple-500/50 hover:rotate-2 text-sm sm:text-base animate-pulse-glow group"
            >
              <span className="group-hover:animate-wiggle">Let's Work Together</span>
            </Button>
            <Button 
              onClick={scrollToPortfolio}
              variant="outline" 
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-700 hover:text-purple-700 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-semibold transition-all duration-700 hover:scale-110 hover:shadow-2xl transform w-full sm:w-auto shadow-lg hover:-rotate-2 text-sm sm:text-base group"
            >
              <span className="group-hover:animate-shake">View Portfolio</span>
            </Button>
          </div>

          {/* Enhanced Social Links with hover animations */}
          <div className="flex gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 animate-slide-up justify-center lg:justify-start" style={{ animationDelay: '0.6s' }}>
            {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social, index) => (
              <div 
                key={social} 
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-purple-50 transition-all duration-700 cursor-pointer hover:scale-125 hover:shadow-2xl transform border border-purple-100 animate-zoom-in hover:rotate-12 group"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full animate-pulse group-hover:animate-bounce-gentle"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Profile Image with interactive elements */}
        <div className="flex justify-center animate-zoom-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
          <div className="relative group">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-3xl bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 p-1.5 hover:scale-105 transition-all duration-1000 hover:rotate-2 transform shadow-2xl hover:shadow-purple-500/50 animate-pulse-glow">
              <div className="w-full h-full rounded-3xl bg-gray-900 flex items-center justify-center overflow-hidden relative">
                {/* Loading placeholder */}
                {!imageLoaded && (
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                
                {/* Optimized image */}
                <img 
                  src="/lovable-uploads/699ac11f-7151-4af4-be7d-ee02c80da982.png" 
                  alt="Rani Ghazi - Software Engineer & UX Designer"
                  className={`w-full h-full object-cover rounded-3xl transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="eager"
                  fetchPriority="high"
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
            </div>
            
            {/* Enhanced floating elements with different animations */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-white to-purple-100 rounded-2xl shadow-2xl flex items-center justify-center animate-float hover:shadow-3xl transition-all duration-700 hover:scale-110 transform border border-purple-200 hover:rotate-12 group">
              <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl animate-pulse group-hover:animate-wiggle"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 lg:-bottom-8 lg:-left-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-white to-pink-100 rounded-2xl shadow-2xl flex items-center justify-center animate-bounce-gentle hover:shadow-3xl transition-all duration-700 hover:scale-110 transform border border-pink-200 hover:-rotate-12 group">
              <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl animate-pulse group-hover:animate-bounce-gentle"></div>
            </div>
            
            {/* Additional floating elements for more dynamic feel */}
            <div className="absolute -top-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full animate-float-slow opacity-70 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-rose-300 to-pink-400 rounded-full animate-bounce-gentle opacity-70 hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator with animation */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-gentle cursor-pointer hover:scale-125 transition-all duration-700 group z-20" onClick={scrollToPortfolio}>
        <div className="bg-white rounded-full p-2 sm:p-3 shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-purple-100 flex items-center justify-center group-hover:bg-purple-50 animate-pulse-glow">
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 group-hover:text-purple-800 transition-all duration-500 group-hover:scale-110 animate-bounce-gentle group-hover:animate-wiggle" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
