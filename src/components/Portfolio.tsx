import { ExternalLink, Github, Eye, Code, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
      featured: true,
      status: "Live",
      year: "2024"
    },
    {
      title: "Lamsaty",
      category: "Flower Shop Website",
      description: "A beautiful flower shop website featuring Arabic design and layout. Showcases floral arrangements, bouquets, and flower delivery services with elegant visual presentation.",
      image: "/lovable-uploads/50e8a61a-5fdd-47cd-bb30-9cbd2df74664.png",
      tags: ["React", "Arabic UI", "E-commerce", "Responsive Design"],
      liveUrl: "https://lamsaty.netlify.app/",
      githubUrl: null,
      status: "Live",
      year: "2024"
    },
    {
      title: "Foodly",
      category: "Food Delivery App",
      description: "A modern food delivery web application for Oman. Features restaurant browsing, menu management, order tracking, and seamless user experience for food ordering and delivery services.",
      image: "/lovable-uploads/ab7d2b34-8647-4698-a37e-fd2abfb04f72.png",
      tags: ["React", "JavaScript", "Food Delivery", "E-commerce"],
      liveUrl: "https://foodlyoman.netlify.app/",
      githubUrl: null,
      status: "Live",
      year: "2024"
    },
    {
      title: "FitGym",
      category: "Fitness & Health Website",
      description: "A modern gym website with dynamic design, membership plans, trainer profiles, and fitness program showcases. Built with focus on user engagement and motivation.",
      image: "/lovable-uploads/052a6d5f-3a41-403f-9f90-f5672a0e16ed.png",
      tags: ["React", "CSS3", "Responsive Design", "UI/UX"],
      liveUrl: "https://gyym-fiit.vercel.app/",
      githubUrl: null,
      status: "Live",
      year: "2023"
    },
    {
      title: "Oman Properties",
      category: "Real Estate Platform",
      description: "A comprehensive real estate website for Oman properties. Features property listings, search functionality, and detailed property information with modern design.",
      image: "/lovable-uploads/a0b2ceef-e080-4e79-b609-2e5316abc8e3.png",
      tags: ["React", "JavaScript", "Real Estate", "Property Management"],
      liveUrl: "https://omanproperty.netlify.app/",
      githubUrl: null,
      status: "Live",
      year: "2023"
    },
    {
      title: "POS System - Oman",
      category: "Point of Sale System", 
      description: "A comprehensive Point of Sale system designed for businesses in Oman. Features inventory management, sales tracking, and integrated business operations with Arabic language support.",
      image: "/lovable-uploads/3cd4f901-7ded-487a-9c93-af7497521a9e.png",
      tags: ["React", "JavaScript", "Arabic Support", "Business Management"],
      liveUrl: "https://pos-oman.netlify.app/",
      githubUrl: "https://github.com/Rani-Ghazi/pos-oman.git",
      status: "Live",
      year: "2023"
    },
    {
      title: "Netflix Clone",
      category: "Streaming Platform",
      description: "A fully functional Netflix clone with movie browsing, detailed views, and responsive design. Features include movie categorization and smooth navigation.",
      image: "/lovable-uploads/f261ee0a-6017-4c47-ab1a-31b5a06e67fc.png", 
      tags: ["React", "JavaScript", "CSS3", "API Integration"],
      liveUrl: "https://same-k7btvioiaa8-latest.netlify.app/",
      githubUrl: null,
      status: "Live",
      year: "2023"
    },
    {
      title: "Electronic Invoice Manager",
      category: "Business Application",
      description: "A responsive web application designed to streamline invoicing for small businesses in Oman and the Gulf. Features invoice creation, management, and tracking.",
      image: "/lovable-uploads/d54b8c5b-6686-4505-ad5b-20e61cccdd1a.png",
      tags: ["React", "Node.js", "PostgreSQL", "Supabase"],
      liveUrl: "https://invoicemanagerapp.netlify.app/",
      githubUrl: "https://github.com/Rani-Ghazi/Invoice-Manager-App",
      status: "Live",
      year: "2023"
    },
    {
      title: "InviteFlow - Digital Barcode System",
      category: "Event Management",
      description: "A smart digital invitation management system for event organizers in Oman. Create barcoded digital invitations and verify guests instantly using mobile + PDA.",
      image: "/lovable-uploads/0f234bb4-01e6-423d-879d-1a1c6eb0b92a.png",
      tags: ["React", "QR Code", "Firebase", "Mobile-First"],
      liveUrl: "https://inviteflow.netlify.app/",
      githubUrl: "https://github.com/Rani-Ghazi/InviteFlow",
      status: "Live",
      year: "2023"
    }
  ];

  const featuredProject = projects.find(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <section id="portfolio" className="py-16 lg:py-24 xl:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-purple-50/50 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-4 sm:left-20 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-4 sm:right-20 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-purple-600 animate-pulse" />
            <span className="text-purple-700 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform duration-500">
            Featured Work
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills in building modern web applications with cutting-edge technologies.
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-20 lg:mb-28">
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl lg:rounded-[2rem] shadow-2xl hover:shadow-4xl transition-all duration-700 overflow-hidden border border-white/20 hover:scale-[1.01] hover:-translate-y-2">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden order-2 lg:order-1">
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title}
                    className="w-full h-80 lg:h-full min-h-[400px] lg:min-h-[600px] object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-green-500/90 text-white border-0 px-4 py-2 text-sm font-semibold">
                      {featuredProject.status}
                    </Badge>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-6 right-6">
                    <Badge variant="outline" className="bg-white/90 text-slate-700 border-white/50 px-4 py-2 text-sm font-semibold">
                      {featuredProject.year}
                    </Badge>
                  </div>
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/30">
                    <div className="flex gap-4">
                      <Button 
                        onClick={() => window.open(featuredProject.liveUrl, '_blank')}
                        size="lg"
                        className="bg-white/95 hover:bg-white text-purple-700 border-0 hover:scale-110 transition-all duration-300 font-semibold shadow-xl"
                      >
                        <Eye className="w-5 h-5 mr-2" />
                        View Live
                      </Button>
                      {featuredProject.githubUrl && (
                        <Button 
                          onClick={() => window.open(featuredProject.githubUrl, '_blank')}
                          size="lg"
                          variant="outline" 
                          className="bg-white/95 hover:bg-white text-slate-700 border-white/50 hover:scale-110 transition-all duration-300 font-semibold shadow-xl"
                        >
                          <Code className="w-5 h-5 mr-2" />
                          Source
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-8 lg:p-16 flex flex-col justify-center order-1 lg:order-2">
                  <div className="flex items-center gap-3 mb-6">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700 px-4 py-2 text-sm font-semibold uppercase tracking-wider">
                      {featuredProject.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-semibold text-slate-600">Featured</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 group-hover:text-purple-600 transition-colors duration-500">
                    {featuredProject.title}
                  </h3>
                  
                  <p className="text-slate-600 text-lg lg:text-xl mb-8 leading-relaxed">
                    {featuredProject.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {featuredProject.tags.map((tag, index) => (
                      <Badge 
                        key={index}
                        variant="outline"
                        className="bg-slate-50 text-slate-700 border-slate-200 px-4 py-2 text-sm hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200 transition-all duration-300 hover:scale-105"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      onClick={() => window.open(featuredProject.liveUrl, '_blank')}
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl hover:scale-105 transition-all duration-300 font-semibold shadow-lg flex-1 sm:flex-none"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </Button>
                    {featuredProject.githubUrl && (
                      <Button 
                        onClick={() => window.open(featuredProject.githubUrl, '_blank')}
                        size="lg"
                        variant="outline" 
                        className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-purple-300 hover:text-purple-600 rounded-xl hover:scale-105 transition-all duration-300 font-semibold flex-1 sm:flex-none"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        View Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">More Projects</h3>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Explore more projects that demonstrate various technologies and solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {regularProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02] overflow-hidden border border-white/20 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Status and Year Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-green-500/90 text-white border-0 text-xs">
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white/90 text-slate-700 border-white/50 text-xs">
                    {project.year}
                  </Badge>
                </div>
                
                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="bg-white/95 hover:bg-white text-purple-700 border-0 hover:scale-110 transition-all duration-300 font-semibold shadow-lg"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Live
                    </Button>
                    {project.githubUrl && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="bg-white/95 hover:bg-white text-slate-700 border-white/50 hover:scale-110 transition-all duration-300 font-semibold shadow-lg"
                      >
                        <Code className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 lg:p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider">
                    {project.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 text-sm lg:text-base leading-relaxed line-clamp-3 mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="outline"
                      className="bg-slate-50 text-slate-600 border-slate-200 text-xs hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200 transition-all duration-300 hover:scale-105"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="bg-slate-50 text-slate-600 border-slate-200 text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="bg-purple-600 hover:bg-purple-700 text-white flex-1 rounded-lg hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                  {project.githubUrl && (
                    <Button 
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="border-purple-300 text-purple-600 hover:bg-purple-50 hover:border-purple-500 flex-1 rounded-lg hover:scale-105 transition-all duration-300 font-semibold"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 lg:mt-24">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Interested in working together?
            </h3>
            <p className="text-lg lg:text-xl mb-8 opacity-90">
              Let's discuss your next project and bring your ideas to life.
            </p>
            <Button 
              size="lg"
              className="bg-white text-purple-600 hover:bg-slate-50 hover:scale-105 transition-all duration-300 font-semibold shadow-lg"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
