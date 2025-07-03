
const Footer = () => {
  const openEmail = () => {
    window.open('mailto:developerrani98@gmail.com', '_blank');
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/0096895454284`, '_blank');
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full filter blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500 rounded-full filter blur-xl animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div className="space-y-4 animate-fade-in-slow">
            <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <button 
                onClick={openEmail}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-500 hover:scale-105 transform group"
              >
                <span className="text-purple-400 group-hover:rotate-12 transition-transform duration-500">📧</span>
                <span>developerrani98@gmail.com</span>
              </button>
              <button 
                onClick={openWhatsApp}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-500 hover:scale-105 transform group"
              >
                <span className="text-green-400 group-hover:rotate-12 transition-transform duration-500">📱</span>
                <span>+968 95454284</span>
              </button>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="text-blue-400">📍</span>
                <span>Sultanate of Oman</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 animate-fade-in-slow" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold text-white mb-4">Services</h3>
            <div className="space-y-2">
              {['Web Applications', 'Mobile Apps', 'UI/UX Design', 'E-commerce Solutions'].map((service, index) => (
                <div key={service} className="text-gray-300 hover:text-white transition-colors duration-500 cursor-pointer hover:scale-105 transform">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-4 animate-fade-in-slow" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>
            <div className="space-y-2">
              {['React', 'Next.js', 'React Native', 'Flutter'].map((tech, index) => (
                <div key={tech} className="text-gray-300 hover:text-white transition-colors duration-500 cursor-pointer hover:scale-105 transform">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center animate-fade-in-slow" style={{ animationDelay: '0.6s' }}>
          <p className="text-gray-400 hover:text-gray-300 transition-colors duration-500">
            © 2025 Rani Ghazi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
