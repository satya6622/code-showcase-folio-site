
import { motion } from "framer-motion";
import { Code, Rocket, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Me</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 3+ years of experience building scalable web applications. 
            I love turning complex problems into simple, beautiful designs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Code,
              title: "Clean Code",
              description: "Writing maintainable, efficient code that scales"
            },
            {
              icon: Rocket,
              title: "Performance",
              description: "Optimizing applications for speed and user experience"
            },
            {
              icon: Heart,
              title: "Passion",
              description: "Continuously learning and improving my craft"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <item.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-white/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
