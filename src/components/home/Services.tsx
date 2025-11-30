import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Bed,
  Utensils,
  Wine,
  Dumbbell,
  Sparkles,
  Calendar,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const services = [
  {
    icon: Bed,
    title: "Rooms & Suites",
    description:
      "Luxuriously appointed accommodations with stunning views and premium amenities.",
    path: "/rooms",
    image: "../../public/photo_2025-11-30_15-02-06.jpg",
  },
  {
    icon: Utensils,
    title: "Fine Dining",
    description:
      "Exquisite culinary experiences crafted by world-renowned chefs.",
    path: "/restaurant",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Wine,
    title: "Bar & Lounge",
    description:
      "Sophisticated atmosphere with premium cocktails and live entertainment.",
    path: "/bar",
    image: "../../public/504228620_3036264849862020_9005698980285329747_n.jpg",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art equipment with personal training services.",
    path: "/gym",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Sparkles,
    title: "Spa & Wellness",
    description:
      "Rejuvenating treatments in a tranquil sanctuary of relaxation.",
    path: "/spa",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Calendar,
    title: "Events",
    description:
      "Magnificent venues for weddings, conferences, and celebrations.",
    path: "/events",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-champagne">
      <div className="container mx-auto">
        <SectionHeading
          subtitle="Our Services"
          title="World-Class Amenities"
          description="Discover an unparalleled collection of services designed to elevate your stay to extraordinary heights."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link to={service.path} className="group block">
                <div className="luxury-card h-full">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />

                    {/* Icon */}
                    <div className="absolute bottom-4 left-4 w-14 h-14 flex items-center justify-center rounded-full bg-gold/90 backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-navy" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-2xl text-navy mb-3 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-gold font-medium text-sm uppercase tracking-wider">
                      Explore
                      <motion.span
                        className="inline-block"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        →
                      </motion.span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
