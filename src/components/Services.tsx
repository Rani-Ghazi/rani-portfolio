
const Services = () => {
  const services = [
    {
      title: "Branding Design",
      description: "I do branding design that helps you connect with your audience through thoughtful visual storytelling and memorable brand experiences.",
      color: "bg-purple-600",
      textColor: "text-white"
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and user-friendly interfaces that provide exceptional user experiences across all devices and platforms.",
      color: "bg-white",
      textColor: "text-gray-900"
    },
    {
      title: "Web Design",
      description: "Designing modern, responsive websites that are both visually stunning and functionally robust for optimal performance.",
      color: "bg-white",
      textColor: "text-gray-900"
    },
    {
      title: "App Design",
      description: "Crafting mobile and desktop applications with focus on usability, accessibility, and seamless user interactions.",
      color: "bg-white",
      textColor: "text-gray-900"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            My Quality Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${service.color} ${service.textColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-8 h-8 rounded-lg ${service.color === 'bg-white' ? 'bg-purple-600' : 'bg-white/20'}`}></div>
                <h3 className="text-xl font-bold">{service.title}</h3>
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
