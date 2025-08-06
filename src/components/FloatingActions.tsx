
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, Github, Linkedin } from "lucide-react";

const FloatingActions = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:bg-gray-700" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-600" },
    { icon: Mail, href: "mailto:contact@example.com", label: "Email", color: "hover:bg-red-500" },
    { icon: Phone, href: "tel:+96895454284", label: "Phone", color: "hover:bg-green-500" },
  ];

  const openWhatsApp = () => {
    window.open(`https://wa.me/+96895454284`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Social Links */}
      <div className={`flex flex-col gap-3 mb-4 transition-all duration-500 ${
        isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}>
        {socialLinks.map((social, index) => (
          <Button
            key={social.label}
            onClick={() => window.open(social.href, '_blank')}
            size="icon"
            className={`w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${social.color} animate-slide-right`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <social.icon className="h-5 w-5 text-gray-700" />
          </Button>
        ))}
      </div>

      {/* Main WhatsApp Button */}
      <Button
        onClick={openWhatsApp}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-2xl transition-all duration-300 animate-bounce-gentle hover:scale-110 group"
      >
        <MessageCircle className="h-8 w-8 text-white group-hover:animate-wiggle" />
      </Button>

      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping pointer-events-none"></div>
    </div>
  );
};

export default FloatingActions;
