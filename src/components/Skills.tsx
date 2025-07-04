
const Skills = () => {
  const skills = [
    { 
      name: "React", 
      icon: "https://img.icons8.com/?size=100&id=122637&format=png&color=000000", 
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      hoverBg: "hover:bg-blue-100"
    },
    { 
      name: "Flutter", 
      icon: "https://img.icons8.com/?size=100&id=pCvIfmctRaY8&format=png&color=000000", 
      color: "from-blue-600 to-indigo-600",
      bgColor: "bg-indigo-50",
      hoverBg: "hover:bg-indigo-100"
    },
    { 
      name: "Next.js", 
      icon: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000", 
      color: "from-gray-700 to-gray-900",
      bgColor: "bg-gray-50",
      hoverBg: "hover:bg-gray-100"
    },
    { 
      name: "TypeScript", 
      icon: "https://img.icons8.com/?size=100&id=vMqgHSToxrJR&format=png&color=000000", 
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-50",
      hoverBg: "hover:bg-blue-100"
    },
    { 
      name: "Node.js", 
      icon: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000", 
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      hoverBg: "hover:bg-green-100"
    },
    { 
      name: "Supabase", 
      icon: "https://img.icons8.com/?size=100&id=sH0rW2TvYdr9&format=png&color=000000", 
      color: "from-green-600 to-teal-600",
      bgColor: "bg-teal-50",
      hoverBg: "hover:bg-teal-100"
    },
    { 
      name: "PostgreSQL", 
      icon: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000", 
      color: "from-blue-700 to-indigo-800",
      bgColor: "bg-indigo-50",
      hoverBg: "hover:bg-indigo-100"
    },
    { 
      name: "Figma", 
      icon: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000", 
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      hoverBg: "hover:bg-pink-100"
    },
    { 
      name: "Tailwind CSS", 
      icon: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000", 
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-cyan-50",
      hoverBg: "hover:bg-cyan-100"
    },
    { 
      name: "Firebase", 
      icon: "https://img.icons8.com/?size=100&id=62452&format=png&color=000000", 
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-orange-50",
      hoverBg: "hover:bg-orange-100"
    },
    { 
      name: "Docker", 
      icon: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000", 
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-cyan-50",
      hoverBg: "hover:bg-cyan-100"
    },
    { 
      name: "Git", 
      icon: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000", 
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      hoverBg: "hover:bg-orange-100"
    }
  ];

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full filter blur-3xl animate-pulse-ultra-slow"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full filter blur-3xl animate-pulse-ultra-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-green-300 to-teal-300 rounded-full filter blur-2xl animate-float-ultra-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in-ultra-slow">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 hover:text-purple-700 transition-colors duration-700 transform hover:scale-105">
            My Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 rounded-full animate-pulse-slow"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 hover:text-gray-800 transition-colors duration-500 leading-relaxed">
            Tools and technologies I use to build exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={`${skill.bgColor} ${skill.hoverBg} p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-1000 hover:scale-105 hover:-translate-y-3 animate-fade-in-ultra-slow group cursor-pointer transform hover:rotate-1 border border-white/50`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 transform relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-full h-full object-contain relative z-10"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-500">
                  {skill.name}
                </h3>
              </div>
              <div className="mt-6">
                <div className={`bg-gradient-to-r ${skill.color} h-1 rounded-full opacity-60 group-hover:opacity-100 transition-all duration-700 transform origin-left scale-x-100 group-hover:animate-pulse-slow`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
