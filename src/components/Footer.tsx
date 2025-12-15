
const Footer = () => {
  const openEmail = () => {
    window.open('mailto:developerrani98@gmail.com', '_blank');
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/+96895454284`, '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-48 h-48 bg-purple-500 rounded-full filter blur-2xl animate-pulse-ultra-slow"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-pink-500 rounded-full filter blur-2xl animate-pulse-ultra-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-500 rounded-full filter blur-xl animate-float-ultra-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-ultra-slow">
            <h3 className="text-2xl font-bold text-white mb-6 relative">
              Get In Touch
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse-slow"></div>
            </h3>
            <div className="space-y-4">
              <button 
                onClick={openEmail}
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-all duration-700 hover:scale-105 transform group p-3 rounded-xl hover:bg-white/5"
              >
                <div className="w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                  <img 
                    src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" 
                    alt="Email" 
                    className="w-full h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-500"
                  />
                </div>
                <span className="text-sm sm:text-base">developerrani98@gmail.com</span>
              </button>
              <button 
                onClick={openWhatsApp}
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-all duration-700 hover:scale-105 transform group p-3 rounded-xl hover:bg-white/5"
              >
                <div className="w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/5585/5585856.png" 
                    alt="Phone" 
                    className="w-full h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-500"
                  />
                </div>
                <span className="text-sm sm:text-base">+968 95454284</span>
              </button>
              <div className="flex items-center gap-4 text-gray-300 p-3 rounded-xl hover:bg-white/5 transition-all duration-500">
                <div className="w-6 h-6">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/535/535137.png" 
                    alt="Location" 
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </div>
                <span className="text-sm sm:text-base">Sultanate of Oman</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6 animate-fade-in-ultra-slow" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold text-white mb-6 relative">
              Services
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse-slow"></div>
            </h3>
            <div className="space-y-3">
              {['Web Applications', 'UI/UX Design', 'Branding & Design Systems'].map((service, index) => (
                <div key={service} className="text-gray-300 hover:text-white transition-all duration-700 cursor-pointer hover:scale-105 transform p-2 rounded-lg hover:bg-white/5 text-sm sm:text-base">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-6 animate-fade-in-ultra-slow" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold text-white mb-6 relative">
              Technologies
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse-slow"></div>
            </h3>
            <div className="space-y-3">
              {['Next.js', 'Flutter', 'TypeScript'].map((tech, index) => (
                <div key={tech} className="text-gray-300 hover:text-white transition-all duration-700 cursor-pointer hover:scale-105 transform p-2 rounded-lg hover:bg-white/5 text-sm sm:text-base">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Copyright */}
        <div className="border-t border-gray-700/50 pt-10 text-center animate-fade-in-ultra-slow" style={{ animationDelay: '0.9s' }}>
          <div className="bg-gradient-to-r from-transparent via-white/10 to-transparent h-px w-full mb-6"></div>
          <p className="text-gray-400 hover:text-gray-300 transition-colors duration-700 text-sm sm:text-base">
            © 2025 Rani Ghazi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
