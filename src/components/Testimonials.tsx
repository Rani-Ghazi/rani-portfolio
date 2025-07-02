
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b105?w=100&h=100&fit=crop&crop=face",
      content: "Gerold delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise are outstanding."
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateCorp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Working with Gerold was a fantastic experience. He transformed our complex requirements into a beautiful, user-friendly application."
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, CreativeSpace",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "The mobile app Gerold developed for us has significantly improved our user engagement. His UX design skills are remarkable."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            My Client's Stories
          </h2>
          <p className="text-lg text-gray-600">
            What my clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-purple-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{testimonial.content}</p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 text-yellow-400">⭐</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
