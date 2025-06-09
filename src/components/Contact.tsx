
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Touch</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Let's discuss your next project or potential opportunities
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "your.email@example.com" },
                  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                  { icon: MapPin, label: "Location", value: "San Francisco, CA" }
                ].map((item) => (
                  <div key={item.label} className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-400/20 rounded-full">
                      <item.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">{item.label}</p>
                      <p className="text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
