
const Services = () => {
  const services = [
    {
      title: "Web Design",
      description: "I create modern, responsive websites that work seamlessly across all devices with clean code and attention to detail.",
      color: "bg-purple-600",
      textColor: "text-white",
      icon: "🌐"
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive interfaces that users love. I focus on usability, accessibility, and creating smooth user journeys.",
      color: "bg-white",
      textColor: "text-gray-900",
      icon: "🎨"
    },
    {
      title: "Branding Design",
      description: "Building visual identities that connect with your audience through thoughtful design and consistent brand experiences.",
      color: "bg-white",
      textColor: "text-gray-900",
      icon: "✨"
    },
    {
      title: "Frontend Development",
      description: "Turning designs into fast, interactive web applications using React, TypeScript, and modern development practices.",
      color: "bg-white",
      textColor: "text-gray-900",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What I Do
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I help businesses create digital experiences that work. Here's how I can help you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${service.color} ${service.textColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in group cursor-pointer`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors duration-300">{service.title}</h3>
              </div>
              <p className={`${service.color === 'bg-white' ? 'text-gray-600' : 'text-white/90'} leading-relaxed`}>
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
