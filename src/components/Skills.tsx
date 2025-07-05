
const Skills = () => {
  const skills = [
    { 
      name: "React", 
      icon: "https://img.icons8.com/?size=100&id=122637&format=png&color=000000", 
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      hoverBg: "hover:from-blue-100 hover:to-cyan-100",
      shadowColor: "shadow-blue-500/20",
      hoverShadow: "hover:shadow-blue-500/40"
    },
    { 
      name: "Flutter", 
      icon: "https://img.icons8.com/?size=100&id=pCvIfmctRaY8&format=png&color=000000", 
      color: "from-blue-600 to-indigo-600",
      bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
      hoverBg: "hover:from-indigo-100 hover:to-blue-100",
      shadowColor: "shadow-indigo-500/20",
      hoverShadow: "hover:shadow-indigo-500/40"
    },
    { 
      name: "Next.js", 
      icon: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000", 
      color: "from-gray-700 to-gray-900",
      bgColor: "bg-gradient-to-br from-gray-50 to-slate-100",
      hoverBg: "hover:from-gray-100 hover:to-slate-200",
      shadowColor: "shadow-gray-500/20",
      hoverShadow: "hover:shadow-gray-500/40"
    },
    { 
      name: "TypeScript", 
      icon: "https://img.icons8.com/?size=100&id=vMqgHSToxrJR&format=png&color=000000", 
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      hoverBg: "hover:from-blue-100 hover:to-indigo-100",
      shadowColor: "shadow-blue-500/20",
      hoverShadow: "hover:shadow-blue-500/40"
    },
    { 
      name: "Node.js", 
      icon: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000", 
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      hoverBg: "hover:from-green-100 hover:to-emerald-100",
      shadowColor: "shadow-green-500/20",
      hoverShadow: "hover:shadow-green-500/40"
    },
    { 
      name: "Supabase", 
      icon: "https://img.icons8.com/?size=100&id=sH0rW2TvYdr9&format=png&color=000000", 
      color: "from-green-600 to-teal-600",
      bgColor: "bg-gradient-to-br from-teal-50 to-green-50",
      hoverBg: "hover:from-teal-100 hover:to-green-100",
      shadowColor: "shadow-teal-500/20",
      hoverShadow: "hover:shadow-teal-500/40"
    },
    { 
      name: "PostgreSQL", 
      icon: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000", 
      color: "from-blue-700 to-indigo-800",
      bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
      hoverBg: "hover:from-indigo-100 hover:to-blue-100",
      shadowColor: "shadow-indigo-500/20",
      hoverShadow: "hover:shadow-indigo-500/40"
    },
    { 
      name: "Figma", 
      icon: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000", 
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
      hoverBg: "hover:from-pink-100 hover:to-rose-100",
      shadowColor: "shadow-pink-500/20",
      hoverShadow: "hover:shadow-pink-500/40"
    },
    { 
      name: "Tailwind CSS", 
      icon: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000", 
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50",
      hoverBg: "hover:from-cyan-100 hover:to-blue-100",
      shadowColor: "shadow-cyan-500/20",
      hoverShadow: "hover:shadow-cyan-500/40"
    },
    { 
      name: "Firebase", 
      icon: "https://img.icons8.com/?size=100&id=62452&format=png&color=000000", 
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-yellow-50",
      hoverBg: "hover:from-orange-100 hover:to-yellow-100",
      shadowColor: "shadow-orange-500/20",
      hoverShadow: "hover:shadow-orange-500/40"
    },
    { 
      name: "Docker", 
      icon: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000", 
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50",
      hoverBg: "hover:from-cyan-100 hover:to-blue-100",
      shadowColor: "shadow-cyan-500/20",
      hoverShadow: "hover:shadow-cyan-500/40"
    },
    { 
      name: "Git", 
      icon: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000", 
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      hoverBg: "hover:from-orange-100 hover:to-red-100",
      shadowColor: "shadow-orange-500/20",
      hoverShadow: "hover:shadow-orange-500/40"
    }
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-purple-50/50 to-blue-50/30 relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-300/60 to-pink-300/60 rounded-full filter blur-3xl animate-pulse-ultra-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-300/60 to-cyan-300/60 rounded-full filter blur-3xl animate-pulse-ultra-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-green-300/60 to-teal-300/60 rounded-full filter blur-2xl animate-float-ultra-slow"></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-1/4 right-1/4 w-24 h-24 border border-purple-200 rounded-lg rotate-45 animate-float-ultra-slow opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-blue-200 rounded-full animate-bounce-ultra-gentle opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 sm:mb-24 animate-fade-in-ultra-slow">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/80 rounded-full shadow-lg backdrop-blur-sm border border-purple-100">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">My Technology Stack</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-pulse-ultra-slow">
              Cutting-Edge
            </span>
            <br />
            <span className="text-gray-800">Technologies</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Mastering modern tools to build exceptional digital experiences that scale and perform
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={`group relative ${skill.bgColor} ${skill.hoverBg} p-8 sm:p-10 rounded-3xl ${skill.shadowColor} shadow-xl ${skill.hoverShadow} hover:shadow-2xl transition-all duration-1000 hover:scale-110 hover:-translate-y-4 animate-fade-in-ultra-slow cursor-pointer transform hover:rotate-1 border border-white/50 backdrop-blur-sm overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover overlay effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl`}></div>
              
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                {/* Icon container */}
                <div className="relative">
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-700 transform group-hover:scale-110 group-hover:rotate-6 flex items-center justify-center relative overflow-hidden`}>
                    {/* Icon background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}></div>
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Floating particles around icon */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce-ultra-gentle transition-opacity duration-500"></div>
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-float-ultra-slow transition-opacity duration-700"></div>
                </div>
                
                {/* Skill name */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-500">
                  {skill.name}
                </h3>
                
                {/* Progress bar */}
                <div className="w-full">
                  <div className="bg-gray-200/50 h-2 rounded-full overflow-hidden">
                    <div className={`bg-gradient-to-r ${skill.color} h-full rounded-full transition-all duration-1000 transform origin-left scale-x-0 group-hover:scale-x-100`}></div>
                  </div>
                </div>
                
                {/* Expertise level indicator */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color} opacity-30 group-hover:opacity-100 transition-all duration-500`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 text-center animate-fade-in-ultra-slow" style={{ animationDelay: '1.5s' }}>
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/60 rounded-full shadow-lg backdrop-blur-sm border border-purple-100">
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse-ultra-slow"
                  style={{ animationDelay: `${i * 200}ms` }}
                ></div>
              ))}
            </div>
            <span className="text-gray-600 font-medium">Always learning, always growing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
