
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-6 sm:space-y-8 animate-fade-in order-2 lg:order-1">
          <div>
            <p className="text-base sm:text-lg text-purple-600 font-medium mb-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>Hello, I am Rani Ghazi</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Software Engineer
              <span className="text-purple-600"> +</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-purple-600 mt-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              UX Designer
            </h2>
          </div>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-lg leading-relaxed animate-fade-in mx-auto lg:mx-0" style={{ animationDelay: '0.8s' }}>
            I build clean, functional web applications and design intuitive user experiences. 
            Based in Oman with 5+ years turning ideas into digital reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in justify-center lg:justify-start" style={{ animationDelay: '1s' }}>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto">
              Hire Me Now
            </Button>
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto">
              View Portfolio
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 sm:gap-4 pt-4 animate-fade-in justify-center lg:justify-start" style={{ animationDelay: '1.2s' }}>
            {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social, index) => (
              <div 
                key={social} 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-purple-50 transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${1.4 + index * 0.1}s` }}
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-purple-600 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center animate-scale-in order-1 lg:order-2" style={{ animationDelay: '0.5s' }}>
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-purple-600 to-purple-800 p-1 hover:scale-105 transition-transform duration-500">
              <div className="w-full h-full rounded-3xl bg-gray-900 flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/38b69509-5ac8-43b9-8d6e-6bd21b0213db.png" 
                  alt="Rani Ghazi - Software Engineer & UX Designer"
                  className="w-full h-full object-cover rounded-3xl transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce hover:shadow-xl transition-shadow duration-300">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-600 rounded-lg"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce delay-1000 hover:shadow-xl transition-shadow duration-300">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-500 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-purple-600" />
      </div>
    </section>
  );
};

export default Hero;
