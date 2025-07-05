
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Digital Marketing Agency",
      category: "Web Application", 
      description: "A modern digital marketing agency website with clean design, service showcases, and client engagement features. Built with responsive design and smooth user experience.",
      image: "/lovable-uploads/8dc4d000-b49a-4ae6-9f10-3914d34eda4e.png",
      tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://digital-marketing-agency-psi.vercel.app/",
      githubUrl: null,
      featured: true
    },
    {
      title: "Netflix Clone",
      category: "Streaming Platform",
      description: "A fully functional Netflix clone with movie browsing, detailed views, and responsive design. Features include movie categorization and smooth navigation.",
      image: "/lovable-uploads/f261ee0a-6017-4c47-ab1a-31b5a06e67fc.png", 
      tags: ["React", "JavaScript", "CSS3", "API Integration"],
      liveUrl: "https://same-k7btvioiaa8-latest.netlify.app/",
      githubUrl: null
    },
    {
      title: "Electronic Invoice Manager",
      category: "Business Application",
      description: "A responsive web application designed to streamline invoicing for small businesses in Oman and the Gulf. Features invoice creation, management, and tracking.",
      image: "/lovable-uploads/d54b8c5b-6686-4505-ad5b-20e61cccdd1a.png",
      tags: ["React", "Node.js", "PostgreSQL", "Supabase"],
      liveUrl: "https://invoicemanagerapp.netlify.app/",
      githubUrl: "https://github.com/Rani-Ghazi/Invoice-Manager-App"
    },
    {
      title: "InviteFlow - Digital Barcode System",
      category: "Event Management",
      description: "A smart digital invitation management system for event organizers in Oman. Create barcoded digital invitations and verify guests instantly using mobile + PDA.",
      image: "/lovable-uploads/0f234bb4-01e6-423d-879d-1a1c6eb0b92a.png",
      tags: ["React", "QR Code", "Firebase", "Mobile-First"],
      liveUrl: "https://inviteflow.netlify.app/",
      githubUrl: "https://github.com/Rani-Ghazi/InviteFlow"
    }
  ];

  return (
    <section id="portfolio" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full filter blur-3xl animate-pulse-ultra-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full filter blur-3xl animate-pulse-ultra-slow animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in-ultra-slow">
          <div className="inline-block p-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl mb-6 animate-float-ultra-slow">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent hover:scale-105 transition-transform duration-700">
              Recent Work
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed hover:text-gray-800 transition-colors duration-500">
            Some projects I've worked on recently. Each one taught me something new and solved real business problems.
          </p>
        </div>

        {/* Enhanced Featured Project */}
        <div className="mb-16 sm:mb-20">
          {projects.filter(project => project.featured).map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl shadow-2xl hover:shadow-4xl transition-all duration-1000 overflow-hidden animate-fade-in-ultra-slow hover:scale-[1.02] transform hover:-translate-y-4"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden order-1 lg:order-1">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-72 sm:h-96 lg:h-full min-h-[350px] lg:min-h-[500px] object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/50 transition-all duration-700"></div>
                  <div className="absolute top-6 sm:top-8 left-6 sm:left-8">
                    <span className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold animate-pulse-ultra-slow hover:scale-110 transition-transform duration-500 shadow-lg">
                      ⭐ Featured Project
                    </span>
                  </div>
                </div>
                <div className="p-8 sm:p-10 lg:p-16 flex flex-col justify-center order-2 lg:order-2">
                  <div className="mb-4 sm:mb-6">
                    <span className="text-purple-600 font-bold text-sm sm:text-base uppercase tracking-wider hover:text-purple-800 transition-colors duration-500 bg-purple-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 group-hover:text-purple-600 transition-colors duration-500 hover:scale-105 transform leading-tight">{project.title}</h3>
                  <p className="text-gray-600 text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed group-hover:text-gray-800 transition-colors duration-500">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-8 sm:mb-10">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-semibold hover:from-purple-200 hover:to-purple-300 hover:scale-110 transition-all duration-500 transform cursor-pointer shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <Button 
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl hover:scale-110 transition-all duration-500 hover:shadow-2xl transform w-full sm:w-auto text-base py-3 px-6"
                    >
                      <ExternalLink className="w-5 h-5 mr-3" />
                      Live Demo
                    </Button>
                    {project.githubUrl && (
                      <Button 
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        variant="outline" 
                        className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-purple-300 hover:text-purple-600 rounded-xl hover:scale-110 transition-all duration-500 hover:shadow-lg transform w-full sm:w-auto text-base py-3 px-6"
                      >
                        <Github className="w-5 h-5 mr-3" />
                        View Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10">
          {projects.filter(project => !project.featured).map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-1000 hover:-translate-y-8 hover:scale-105 overflow-hidden animate-fade-in-ultra-slow cursor-pointer transform hover:rotate-1 border border-gray-100"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-125 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-75 group-hover:scale-100">
                  <div className="flex gap-4">
                    <Button 
                      size="sm" 
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="bg-white/20 backdrop-blur-md text-white border-white/30 hover:bg-white/40 hover:scale-125 transition-all duration-500 transform hover:rotate-12 shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    {project.githubUrl && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="bg-white/20 backdrop-blur-md text-white border-white/30 hover:bg-white/40 hover:scale-125 transition-all duration-500 transform hover:-rotate-12 shadow-lg"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="mb-3">
                  <span className="text-purple-600 font-bold text-xs uppercase tracking-wider hover:text-purple-800 transition-colors duration-500 bg-purple-50 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-purple-600 transition-colors duration-500 hover:scale-105 transform leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3 mb-4 sm:mb-6 group-hover:text-gray-800 transition-colors duration-500">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold hover:bg-purple-100 hover:text-purple-700 hover:scale-110 transition-all duration-500 transform cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold hover:bg-purple-100 hover:text-purple-700 hover:scale-110 transition-all duration-500 transform cursor-pointer">
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
