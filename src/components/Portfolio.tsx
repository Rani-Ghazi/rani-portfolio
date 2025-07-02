
const Portfolio = () => {
  const projects = [
    {
      title: "Trading Dashboard",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      bgColor: "bg-gray-900"
    },
    {
      title: "E-commerce Platform",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      bgColor: "bg-white"
    },
    {
      title: "Mobile Banking App",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      bgColor: "bg-blue-900"
    },
    {
      title: "Brand Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1558655146-364adaf25c78?w=600&h=400&fit=crop",
      bgColor: "bg-gray-800"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            My Recent Works
          </h2>
          <p className="text-lg text-gray-600">
            Showcasing some of my latest projects and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className={`${project.bgColor} aspect-[4/3] p-8 flex items-center justify-center`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-purple-300 text-sm font-medium mb-1">{project.category}</p>
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
