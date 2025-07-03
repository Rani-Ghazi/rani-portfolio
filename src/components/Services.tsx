
const Services = () => {
  const services = [
    {
      title: "Web Design",
      description: "I create modern, responsive websites that work seamlessly across all devices with clean code and attention to detail.",
      color: "bg-gradient-to-br from-purple-600 to-purple-800",
      textColor: "text-white",
      icon: "🌐",
      hoverColor: "hover:from-purple-700 hover:to-purple-900"
    },
    {
      title: "Branding Design", 
      description: "Building visual identities that connect with your audience through thoughtful design and consistent brand experiences.",
      color: "bg-gradient-to-br from-white to-purple-50",
      textColor: "text-gray-900",
      icon: "✨",
      hoverColor: "hover:from-purple-50 hover:to-purple-100"
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive interfaces that users love. I focus on usability, accessibility, and creating smooth user journeys.",
      color: "bg-gradient-to-br from-white to-pink-50",
      textColor: "text-gray-900",
      icon: "🎨",
      hoverColor: "hover:from-pink-50 hover:to-pink-100"
    },
    {
      title: "Frontend Development",
      description: "Turning designs into fast, interactive web applications using React, TypeScript, and modern development practices.",
      color: "bg-gradient-to-br from-white to-blue-50",
      textColor: "text-gray-900",
      icon: "⚡",
      hoverColor: "hover:from-blue-50 hover:to-blue-100"
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-300 rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-pink-300 rounded-full filter blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 hover:text-purple-700 transition-colors duration-500 transform hover:scale-105">
            What I Do
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 hover:text-gray-800 transition-colors duration-300">
            I help businesses create digital experiences that work. Here's how I can help you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${service.color} ${service.textColor} ${service.hoverColor} p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-110 hover:-translate-y-4 animate-fade-in group cursor-pointer transform hover:rotate-3`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl sm:text-3xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 transform">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold group-hover:text-purple-600 transition-colors duration-300">{service.title}</h3>
              </div>
              <p className={`${service.color.includes('white') ? 'text-gray-600 group-hover:text-gray-800' : 'text-white/90 group-hover:text-white'} leading-relaxed text-sm sm:text-base transition-colors duration-300`}>
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
