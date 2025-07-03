
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 to-purple-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let's Work Together!
          </h2>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Ready to start your next project? Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div className="text-white animate-fade-in">
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  📧
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:developerrani98@gmail.com" 
                    className="text-purple-200 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    developerrani98@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  📱
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a 
                    href="tel:+96895454284" 
                    className="text-purple-200 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    +968 95454284
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                  📍
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-purple-200">Sultanate of Oman</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl animate-fade-in hover:shadow-3xl transition-shadow duration-500" style={{ animationDelay: '200ms' }}>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <Input placeholder="John" className="rounded-lg hover:border-purple-300 focus:border-purple-500 transition-colors duration-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Doe" className="rounded-lg hover:border-purple-300 focus:border-purple-500 transition-colors duration-300" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input type="email" placeholder="john@example.com" className="rounded-lg hover:border-purple-300 focus:border-purple-500 transition-colors duration-300" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input placeholder="Project Discussion" className="rounded-lg hover:border-purple-300 focus:border-purple-500 transition-colors duration-300" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project..." 
                  className="rounded-lg min-h-[120px] hover:border-purple-300 focus:border-purple-500 transition-colors duration-300"
                />
              </div>
              
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-purple-600/30 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <p className="text-purple-200">
            © 2025 Rani Ghazi. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
