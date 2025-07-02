
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="text-left space-y-8 animate-fade-in">
          <div>
            <p className="text-lg text-purple-600 font-medium mb-2">Hello, I am Gerold</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Web Developer
              <span className="text-purple-600"> +</span>
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-600 mt-2">
              UX Designer
            </h2>
          </div>
          
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            I create stunning and responsive web applications with 5+ years of experience in modern development frameworks and user-centered design principles.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
              Hire Me Now
            </Button>
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
              View Portfolio
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
              <div key={social} className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-purple-50 transition-colors cursor-pointer">
                <div className="w-5 h-5 bg-purple-600 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end animate-scale-in">
          <div className="relative">
            <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-3xl bg-gradient-to-br from-purple-600 to-purple-800 p-1">
              <div className="w-full h-full rounded-3xl bg-gray-900 flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/38b69509-5ac8-43b9-8d6e-6bd21b0213db.png" 
                  alt="Gerold - Web Developer & UX Designer"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce">
              <div className="w-8 h-8 bg-purple-600 rounded-lg"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce delay-1000">
              <div className="w-8 h-8 bg-pink-500 rounded-lg"></div>
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
