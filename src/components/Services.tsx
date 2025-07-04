
const Services = () => {
  const services = [
    {
      title: "Web Applications",
      description: "I build custom web apps that are fast, scalable, and tailored to your business logic — not cookie-cutter templates.",
      color: "bg-gradient-to-br from-purple-600 to-purple-800",
      textColor: "text-white",
      icon: "https://img.icons8.com/?size=100&id=111139&format=png&color=000000",
      hoverColor: "hover:from-purple-700 hover:to-purple-900"
    },
    {
      title: "UI/UX Design", 
      description: "I design clean, user-focused interfaces that are easy to use, aligned with your goals, and backed by real UX principles.",
      color: "bg-gradient-to-br from-white to-purple-50",
      textColor: "text-gray-900",
      icon: "https://cdn-icons-png.flaticon.com/512/17109/17109631.png",
      hoverColor: "hover:from-purple-50 hover:to-purple-100",
      borderColor: "border-purple-200"
    },
    {
      title: "Mobile Apps",
      description: "I develop cross-platform mobile apps using React Native, optimized for performance, usability, and smooth user flows.",
      color: "bg-gradient-to-br from-white to-pink-50",
      textColor: "text-gray-900",
      icon: "https://cdn-icons-png.flaticon.com/512/3437/3437364.png",
      hoverColor: "hover:from-pink-50 hover:to-pink-100",
      borderColor: "border-pink-200"
    },
    {
      title: "Branding & Design Systems",
      description: "I create cohesive visual identities and component libraries that scale with your product and team.",
      color: "bg-gradient-to-br from-white to-blue-50",
      textColor: "text-gray-900",
      icon: "https://cdn-icons-png.flaticon.com/512/10237/10237810.png",
      hoverColor: "hover:from-blue-50 hover:to-blue-100",
      borderColor: "border-blue-200"
    },
    {
      title: "Dashboards & Analytics Tools",
      description: "I build data-driven platforms with real-time dashboards, charts, and insights to help teams make smarter decisions.",
      color: "bg-gradient-to-br from-white to-green-50",
      textColor: "text-gray-900",
      icon: "https://cdn-icons-png.flaticon.com/512/8323/8323511.png",
      hoverColor: "hover:from-green-50 hover:to-green-100",
      borderColor: "border-green-200"
    },
    {
      title: "E-commerce Solutions",
      description: "I deliver end-to-end e-commerce systems with payment integration, inventory tracking, and user account flows.",
      color: "bg-gradient-to-br from-white to-yellow-50",
      textColor: "text-gray-900",
      icon: "https://cdn-icons-png.flaticon.com/512/3176/3176363.png",
      hoverColor: "hover:from-yellow-50 hover:to-yellow-100",
      borderColor: "border-yellow-200"
    }
  ];

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-16 right-16 w-48 h-48 bg-purple-300 rounded-full filter blur-2xl animate-pulse-ultra-slow"></div>
        <div className="absolute bottom-16 left-16 w-56 h-56 bg-pink-300 rounded-full filter blur-2xl animate-pulse-ultra-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-300 rounded-full filter blur-xl animate-float-ultra-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in-ultra-slow">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 hover:text-purple-700 transition-colors duration-700 transform hover:scale-105">
            What I Do
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 rounded-full animate-pulse-slow"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 hover:text-gray-800 transition-colors duration-500 leading-relaxed">
            I help businesses create digital experiences that work. Here's how I can help you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${service.color} ${service.textColor} ${service.hoverColor} p-8 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-1000 hover:scale-105 hover:-translate-y-3 animate-fade-in-ultra-slow group cursor-pointer transform hover:rotate-1 ${service.borderColor ? `border ${service.borderColor}` : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 transform p-2 rounded-2xl ${service.color.includes('white') ? 'bg-white shadow-lg' : 'bg-white/20'}`}>
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold group-hover:text-purple-600 transition-colors duration-500">{service.title}</h3>
              </div>
              <p className={`${service.color.includes('white') ? 'text-gray-600 group-hover:text-gray-800' : 'text-white/90 group-hover:text-white'} leading-relaxed text-base sm:text-lg transition-colors duration-500`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
