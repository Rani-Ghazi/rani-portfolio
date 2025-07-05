
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
    window.open(`https://wa.me/+96895454284`, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Enhanced Background decoration with improved animations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse-ultra-slow"></div>
        <div className="absolute top-40 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse-ultra-slow animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse-ultra-slow animation-delay-4000"></div>
        
        {/* Enhanced floating particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-500 rounded-full animate-bounce-ultra-gentle animation-delay-1000 opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-pink-500 rounded-full animate-bounce-ultra-gentle animation-delay-1400 opacity-60"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-500 rounded-full animate-bounce-ultra-gentle animation-delay-2000 opacity-60"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-float-ultra-slow animation-delay-3000 opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Enhanced Text Content */}
        <div className="text-center lg:text-left space-y-8 sm:space-y-10 animate-fade-in-ultra-slow order-2 lg:order-1">
          <div>
            <p className="text-lg sm:text-xl text-purple-600 font-semibold mb-3 animate-fade-in-ultra-slow transform hover:scale-105 transition-transform duration-700" style={{ animationDelay: '0.5s' }}>
              Hello, I am Rani Ghazi
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight animate-fade-in-ultra-slow hover:text-purple-700 transition-colors duration-700" style={{ animationDelay: '0.8s' }}>
              Software Engineer
              <span className="text-purple-600 animate-pulse-ultra-slow"> +</span>
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-purple-600 mt-3 animate-fade-in-ultra-slow hover:text-purple-800 transition-colors duration-700" style={{ animationDelay: '1.2s' }}>
              UX Designer
            </h2>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed animate-fade-in-ultra-slow mx-auto lg:mx-0 transform hover:text-gray-800 transition-colors duration-500" style={{ animationDelay: '1.6s' }}>
            I build high-performance web and mobile applications with clean code, scalable architecture, and user-first design.
            Based in Oman with 5+ years turning ideas into digital reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-ultra-slow justify-center lg:justify-start" style={{ animationDelay: '2s' }}>
            <Button 
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 sm:px-10 py-4 rounded-full font-semibold transition-all duration-700 hover:scale-110 hover:shadow-2xl transform w-full sm:w-auto animate-bounce-ultra-gentle shadow-lg hover:shadow-purple-500/50"
            >
              Let's Work Together
            </Button>
            <Button 
              onClick={scrollToPortfolio}
              variant="outline" 
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-700 hover:text-purple-700 px-8 sm:px-10 py-4 rounded-full font-semibold transition-all duration-700 hover:scale-110 hover:shadow-2xl transform w-full sm:w-auto shadow-lg"
            >
              View Portfolio
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex gap-4 sm:gap-6 pt-6 animate-fade-in-ultra-slow justify-center lg:justify-start" style={{ animationDelay: '2.4s' }}>
            {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social, index) => (
              <div 
                key={social} 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-purple-50 transition-all duration-700 cursor-pointer hover:scale-125 hover:shadow-2xl animate-fade-in-ultra-slow hover:rotate-12 transform border border-purple-100"
                style={{ animationDelay: `${2.8 + index * 0.2}s` }}
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full animate-pulse-ultra-slow"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Profile Image */}
        <div className="flex justify-center animate-scale-in-ultra-slow order-1 lg:order-2" style={{ animationDelay: '1s' }}>
          <div className="relative group">
            <div className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-3xl bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 p-1.5 hover:scale-105 transition-all duration-1000 hover:rotate-2 transform shadow-2xl hover:shadow-purple-500/50 animate-glow-ultra-slow">
              <div className="w-full h-full rounded-3xl bg-gray-900 flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/699ac11f-7151-4af4-be7d-ee02c80da982.png" 
                  alt="Rani Ghazi - Software Engineer & UX Designer"
                  className="w-full h-full object-cover rounded-3xl transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>
            </div>
            {/* Enhanced floating elements */}
            <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-white to-purple-100 rounded-2xl shadow-2xl flex items-center justify-center animate-bounce-ultra-gentle hover:shadow-3xl transition-all duration-700 hover:scale-110 transform border border-purple-200">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl animate-pulse-ultra-slow"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-white to-pink-100 rounded-2xl shadow-2xl flex items-center justify-center animate-bounce-ultra-gentle animation-delay-2000 hover:shadow-3xl transition-all duration-700 hover:scale-110 transform border border-pink-200">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl animate-pulse-ultra-slow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator - Fixed centering on mobile */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-ultra-gentle cursor-pointer hover:scale-125 transition-transform duration-700 group" onClick={scrollToPortfolio}>
        <div className="bg-white rounded-full p-3 shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-purple-100 flex items-center justify-center">
          <ArrowDown className="w-6 h-6 text-purple-600 group-hover:text-purple-800 transition-colors duration-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
