import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Trading Dashboard",
      category: "Web Application",
      description: "A comprehensive trading platform with real-time analytics, portfolio management, and advanced charting capabilities.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      tags: ["React", "TypeScript", "Chart.js", "WebSocket"],
      featured: true
    },
    {
      title: "E-commerce Platform",
      category: "Full Stack",
      description: "Modern e-commerce solution with payment integration, inventory management, and customer analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Mobile Banking App",
      category: "Mobile App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tags: ["React Native", "Redux", "Node.js", "PostgreSQL"]
    },
    {
      title: "Brand Identity System",
      category: "Design System",
      description: "Complete brand identity and design system for a modern tech startup with component library.",
      image: "https://images.unsplash.com/photo-1558655146-364adaf25c78?w=600&h=400&fit=crop",
      tags: ["Figma", "Design Tokens", "React", "Storybook"]
    },
    {
      title: "AI-Powered Analytics",
      category: "Machine Learning",
      description: "Intelligent analytics dashboard using machine learning for predictive insights and data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Python", "TensorFlow", "React", "D3.js"]
    },
    {
      title: "Social Media Manager",
      category: "SaaS Platform",
      description: "All-in-one social media management platform with scheduling, analytics, and team collaboration.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      tags: ["Vue.js", "Laravel", "Redis", "AWS"]
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Recent Work
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Some projects I've worked on recently. Each one taught me something new.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-12 sm:mb-16">
          {projects.filter(project => project.featured).map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden animate-fade-in hover:scale-[1.02]"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden order-1 lg:order-1">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 sm:h-80 lg:h-full min-h-[300px] lg:min-h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                    <span className="bg-purple-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium animate-pulse">
                      Featured Project
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-2">
                  <div className="mb-3 sm:mb-4">
                    <span className="text-purple-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-purple-600 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-purple-100 text-purple-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-purple-200 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg w-full sm:w-auto">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg w-full sm:w-auto">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.filter(project => !project.featured).map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="mb-2">
                  <span className="text-purple-600 font-semibold text-xs uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-3 sm:mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors duration-300">
                      +{project.tags.length - 3}
                    </span>
                  )}
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
