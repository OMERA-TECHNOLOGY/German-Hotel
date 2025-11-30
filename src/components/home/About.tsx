import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Users, Calendar, Star } from "lucide-react";

const stats = [
  { icon: Award, value: "50+", label: "Awards Won" },
  { icon: Users, value: "100K+", label: "Happy Guests" },
  { icon: Calendar, value: "25+", label: "Years of Excellence" },
  { icon: Star, value: "5", label: "Star Rating" },
];

export default function About() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] lg:h-auto"
        >
          <img
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80"
            alt="German Hotel Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy/30 lg:to-navy/50" />

          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 bg-gold p-6 rounded-lg shadow-xl"
          >
            <span className="block font-display text-4xl text-navy">25+</span>
            <span className="block text-navy/80 text-sm uppercase tracking-wider">
              Years of Excellence
            </span>
          </motion.div>
        </motion.div>

        {/* Content Side */}
        <div className="bg-navy text-white p-8 lg:p-16 xl:p-24 flex items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block font-body text-sm uppercase tracking-[0.3em] text-gold mb-4"
            >
              About German Hotel
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl leading-tight mb-6"
            >
              A Legacy of{" "}
              <span className="text-gold italic">Unmatched Elegance</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="gold-line w-24 mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/70 leading-relaxed mb-6"
            >
              Since 1998, German Hotel has stood as a beacon of luxury
              hospitality, welcoming distinguished guests from around the world.
              Our commitment to excellence has earned us recognition as one of
              Europe's premier destinations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-white/70 leading-relaxed mb-8"
            >
              Every detail has been thoughtfully curated to create an atmosphere
              of refined sophistication, from our meticulously designed
              interiors to our world-class culinary offerings.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10"
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                  <span className="block font-display text-2xl text-white">
                    {stat.value}
                  </span>
                  <span className="block text-xs text-white/50 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/about" className="btn-luxury">
                Discover Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
