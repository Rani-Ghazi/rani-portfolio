
const Skills = () => {
  const skills = [
    { 
      name: "React", 
      icon: "https://img.icons8.com/?size=100&id=122637&format=png&color=000000", 
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-white",
      hoverBg: "hover:bg-blue-50",
      shadowColor: "shadow-blue-200",
      hoverShadow: "hover:shadow-blue-300",
      borderColor: "border-blue-100 hover:border-blue-200",
      textColor: "text-blue-600"
    },
    { 
      name: "Flutter", 
      icon: "https://img.icons8.com/?size=100&id=pCvIfmctRaY8&format=png&color=000000", 
      color: "from-indigo-400 to-indigo-600",
      bgColor: "bg-white",
      hoverBg: "hover:bg-indigo-50",
      shadowColor: "shadow-indigo-200",
      hoverShadow: "hover:shadow-indigo-300",
      borderColor: "border-indigo-100 hover:border-indigo-200",
      textColor: "text-indigo-600"
    },
    { 
      name: "Next.js", 
      icon: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000", 
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-white",
      hoverBg: "hover:bg-gray-50",
      shadowColor: "shadow-gray-200",
      hoverShadow: "hover:shadow-gray-300",
      borderColor: "border-gray-100 hover:border-gray-200",
      textColor: "text-gray-700"
    },
    { 
      name: "TypeScript", 
      icon: "https://img.icons8.com/?size=100&id=vMqgHSToxrJR&format=png&color=000000", 
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-white",
      hoverBg: "hover:bg-blue-50",
      shadowColor: "shadow-blue-200",
      hoverShadow: "hover:shadow-blue-300",
      borderColor: "border-blue-100 hover:border-blue-200",
      textColor: "text-blue-600"
    },
    { 
      name: "Node.js", 
      icon: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000", 
      color: "from-green-400 to-green-600",
      bgColor: "bg-white",
      hoverBg: "hover:bg-green-50",
      shadowColor: "shadow-green-200",
      hoverShadow: "hover:shadow-green-300",
      borderColor: "border-green-100 hover:border-green-200",
      textColor: "text-green-600"
    },
    { 
      name: "Supabase", 
      icon: "https://img.icons8.com/?size=100&id=sH0rW2TvYdr9&format=png&color=000000", 
      color: "from-emerald-400 to-emerald-600",
      bgColor: "bg-white",
      hoverBg: "hover:bg-emerald-50",
      shadowColor: "shadow-emerald-200",
      hoverShadow: "hover:shadow-emerald-300",
      borderColor: "border-emerald-100 hover:border-emerald-200",
      textColor: "text-emerald-600"
    },
    { 
      name: "PostgreSQL", 
      icon: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000", 
      color: "from-indigo-500 to-indigo-700",
      bgColor: "bg-white",
      hoverBg: "hover:bg-indigo-50",
      shadowColor: "shadow-indigo-200",
      hoverShadow: "hover:shadow-indigo-300",
      borderColor: "border-indigo-100 hover:border-indigo-200",
      textColor: "text-indigo-600"
    },
    { 
      name: "Figma", 
      icon: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000", 
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-white",
      hoverBg: "hover:bg-pink-50",
      shadowColor: "shadow-pink-200",
      hoverShadow: "hover:shadow-pink-300",
      borderColor: "border-pink-100 hover:border-pink-200",
      textColor: "text-pink-600"
    },
    { 
      name: "Tailwind CSS", 
      icon: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000", 
      color: "from-cyan-400 to-cyan-600",
      bgColor: "bg-white",
      hoverBg: "hover:bg-cyan-50",
      shadowColor: "shadow-cyan-200",
      hoverShadow: "hover:shadow-cyan-300",
      borderColor: "border-cyan-100 hover:border-cyan-200",
      textColor: "text-cyan-600"
    },
    { 
      name: "Firebase", 
      icon: "https://img.icons8.com/?size=100&id=62452&format=png&color=000000", 
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-white",
      hoverBg: "hover:bg-orange-50",
      shadowColor: "shadow-orange-200",
      hoverShadow: "hover:shadow-orange-300",
      borderColor: "border-orange-100 hover:border-orange-200",
      textColor: "text-orange-600"
    },
    { 
      name: "Docker", 
      icon: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000", 
      color: "from-sky-400 to-sky-600",
      bgColor: "bg-white",
      hoverBg: "hover:bg-sky-50",
      shadowColor: "shadow-sky-200",
      hoverShadow: "hover:shadow-sky-300",
      borderColor: "border-sky-100 hover:border-sky-200",
      textColor: "text-sky-600"
    },
    { 
      name: "Git", 
      icon: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000", 
      color: "from-red-400 to-red-600",
      bgColor: "bg-white",
      hoverBg: "hover:bg-red-50",
      shadowColor: "shadow-red-200",
      hoverShadow: "hover:shadow-red-300",
      borderColor: "border-red-100 hover:border-red-200",
      textColor: "text-red-600"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-gray-50/50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-ultra-slow">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-50 rounded-full border border-purple-100">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-purple-700 uppercase tracking-wide">Tech Stack</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Technologies
            </span>
            <br />
            <span className="text-gray-800">I Use</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Building modern applications with cutting-edge tools and frameworks
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={`group relative ${skill.bgColor} ${skill.hoverBg} p-6 rounded-2xl ${skill.shadowColor} shadow-lg ${skill.hoverShadow} hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-ultra-slow cursor-pointer border-2 ${skill.borderColor} backdrop-blur-sm`}
              style={{ animationDelay: `${index * 80}ms` }}
            >              
              <div className="flex flex-col items-center text-center space-y-3">
                {/* Icon container */}
                <div className="relative">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 transform group-hover:scale-110 flex items-center justify-center border border-gray-100">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                {/* Skill name */}
                <h3 className={`text-sm sm:text-base font-semibold text-gray-800 group-hover:${skill.textColor} transition-colors duration-300`}>
                  {skill.name}
                </h3>
                
                {/* Skill level indicator */}
                <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                  <div 
                    className={`bg-gradient-to-r ${skill.color} h-full rounded-full transition-all duration-700 transform origin-left scale-x-0 group-hover:scale-x-100`}
                  ></div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-2xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-16 animate-fade-in-ultra-slow" style={{ animationDelay: '1s' }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/70 rounded-full shadow-sm border border-gray-100 backdrop-blur-sm">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 150}ms` }}
                ></div>
              ))}
            </div>
            <span className="text-gray-600 font-medium text-sm">Continuously learning and evolving</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
