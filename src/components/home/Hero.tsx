import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/50 via-transparent to-navy/50" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
      <div className="absolute top-1/3 right-8 w-px h-32 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex flex-col items-center justify-center text-center">
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="w-12 h-px bg-gold" />
          <span className="font-body text-sm uppercase tracking-[0.4em] text-gold">
            Welcome to Excellence
          </span>
          <span className="w-12 h-px bg-gold" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6"
        >
          <span className="block">Experience</span>
          <span className="block text-gold italic">Timeless Luxury</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="max-w-2xl text-lg md:text-xl text-white/80 mb-10 leading-relaxed"
        >
          Discover the pinnacle of hospitality at German Hotel, where refined
          elegance meets exceptional service in every detail of your stay.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <Link to="/rooms" className="btn-luxury">
            Explore Rooms
          </Link>
          <Link
            to="/contact"
            className="btn-luxury-outline text-white border-white/50 hover:border-gold hover:text-gold"
          >
            Book Your Stay
          </Link>
        </motion.div>

        {/* Virtual Tour Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 flex items-center gap-3 text-white/70 hover:text-gold transition-colors group"
        >
          <span className="w-12 h-12 flex items-center justify-center rounded-full border border-white/30 group-hover:border-gold group-hover:bg-gold/10 transition-all">
            <Play className="w-5 h-5 ml-1" />
          </span>
          <span className="font-body text-sm uppercase tracking-wider">
            Virtual Tour
          </span>
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs uppercase tracking-wider text-white/50">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-gold" />
        </motion.div>
      </motion.div>

      {/* Side Info */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex items-center gap-4 text-white/60"
        >
          <div className="text-right">
            <span className="block text-xs uppercase tracking-wider">
              Five Star
            </span>
            <span className="block text-xs uppercase tracking-wider">
              Luxury Hotel
            </span>
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-gold text-lg">
                ★
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
