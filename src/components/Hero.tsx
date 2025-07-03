
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/0096895454284`, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background decoration with slower animations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-40 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow animation-delay-4000"></div>
        
        {/* Floating particles with slower animation */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-bounce-gentle animation-delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-pink-500 rounded-full animate-bounce-gentle animation-delay-1400"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-500 rounded-full animate-bounce-gentle animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-6 sm:space-y-8 animate-fade-in-slow order-2 lg:order-1">
          <div>
            <p className="text-base sm:text-lg text-purple-600 font-medium mb-2 animate-fade-in-slow transform hover:scale-105 transition-transform duration-500" style={{ animationDelay: '0.4s' }}>Hello, I am Rani Ghazi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight animate-fade-in-slow hover:text-purple-700 transition-colors duration-700" style={{ animationDelay: '0.8s' }}>
              Software Engineer
              <span className="text-purple-600 animate-pulse-slow"> +</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-purple-600 mt-2 animate-fade-in-slow hover:text-purple-800 transition-colors duration-700" style={{ animationDelay: '1.2s' }}>
              UX Designer
            </h2>
          </div>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-lg leading-relaxed animate-fade-in-slow mx-auto lg:mx-0 transform hover:text-gray-800 transition-colors duration-500" style={{ animationDelay: '1.6s' }}>
            I build high-performance web and mobile applications with clean code, scalable architecture, and user-first design.
            Based in Oman with 5+ years turning ideas into digital reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-slow justify-center lg:justify-start" style={{ animationDelay: '2s' }}>
            <Button 
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-500 hover:scale-105 hover:shadow-2xl transform w-full sm:w-auto animate-bounce-gentle"
            >
              Hire Me Now
            </Button>
            <Button 
              onClick={scrollToPortfolio}
              variant="outline" 
              className="border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-700 hover:text-purple-700 px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-500 hover:scale-105 hover:shadow-2xl transform w-full sm:w-auto"
            >
              View Portfolio
            </Button>
          </div>

          {/* Enhanced Social Links with slower animations */}
          <div className="flex gap-3 sm:gap-4 pt-4 animate-fade-in-slow justify-center lg:justify-start" style={{ animationDelay: '2.4s' }}>
            {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social, index) => (
              <div 
                key={social} 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-purple-50 transition-all duration-500 cursor-pointer hover:scale-110 hover:shadow-2xl animate-fade-in-slow hover:rotate-6 transform"
                style={{ animationDelay: `${2.8 + index * 0.2}s` }}
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full animate-pulse-slow"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Profile Image */}
        <div className="flex justify-center animate-scale-in-slow order-1 lg:order-2" style={{ animationDelay: '1s' }}>
          <div className="relative group">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 p-1 hover:scale-105 transition-all duration-1000 hover:rotate-2 transform shadow-2xl hover:shadow-purple-500/50">
              <div className="w-full h-full rounded-3xl bg-gray-900 flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/38b69509-5ac8-43b9-8d6e-6bd21b0213db.png" 
                  alt="Rani Ghazi - Software Engineer & UX Designer"
                  className="w-full h-full object-cover rounded-3xl transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>
            </div>
            {/* Enhanced floating elements with slower animations */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-white to-purple-100 rounded-2xl shadow-xl flex items-center justify-center animate-bounce-gentle hover:shadow-2xl transition-all duration-500 hover:scale-110 transform">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg animate-pulse-slow"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-white to-pink-100 rounded-2xl shadow-xl flex items-center justify-center animate-bounce-gentle animation-delay-2000 hover:shadow-2xl transition-all duration-500 hover:scale-110 transform">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator with slower animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle cursor-pointer hover:scale-110 transition-transform duration-500" onClick={scrollToPortfolio}>
        <ArrowDown className="w-6 h-6 text-purple-600 hover:text-purple-800 transition-colors duration-500" />
      </div>
    </section>
  );
};

export default Hero;
