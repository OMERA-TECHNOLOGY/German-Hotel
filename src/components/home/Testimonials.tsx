import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alexander von Müller",
    role: "Business Executive",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    text: "An extraordinary experience from start to finish. The attention to detail and level of service exceeded all expectations. German Hotel has redefined what luxury hospitality means to me.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sofia Andersson",
    role: "Travel Journalist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    text: "Having visited countless luxury hotels worldwide, German Hotel stands in a class of its own. The seamless blend of classic elegance and modern sophistication is truly remarkable.",
    rating: 5,
  },
  {
    id: 3,
    name: "James Chen",
    role: "CEO, Chen Industries",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    text: "The perfect sanctuary for both business and leisure. The spa services are world-class, and the restaurant offers an unforgettable culinary journey. Simply outstanding.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-navy/90" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-gold/20 rounded-full animate-rotate-slow" />
      <div className="absolute bottom-20 right-20 w-48 h-48 border border-gold/10 rounded-full animate-rotate-slow" />

      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block font-body text-sm uppercase tracking-[0.3em] text-gold mb-4"
          >
            Guest Experiences
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-white mb-12"
          >
            Words from Our <span className="text-gold italic">Distinguished Guests</span>
          </motion.h2>

          {/* Quote Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Quote className="w-16 h-16 text-gold/30 mx-auto" />
          </motion.div>

          {/* Testimonial Content */}
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <span key={i} className="text-gold text-xl">★</span>
                  ))}
                </div>

                {/* Text */}
                <p className="font-display text-xl md:text-2xl text-white/90 leading-relaxed mb-8 italic">
                  "{testimonials[current].text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gold"
                  />
                  <div className="text-left">
                    <span className="block font-display text-lg text-white">
                      {testimonials[current].name}
                    </span>
                    <span className="block text-gold/80 text-sm">
                      {testimonials[current].role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-gold hover:text-gold transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "w-8 bg-gold" : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-gold hover:text-gold transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
