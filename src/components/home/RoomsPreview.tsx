import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Coffee, Bath, Tv } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const rooms = [
  {
    id: "luxury-suite",
    name: "Luxury Suite",
    description: "Expansive living spaces with panoramic city views and premium amenities.",
    price: "€450",
    size: "85 m²",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    amenities: [Wifi, Coffee, Bath, Tv],
  },
  {
    id: "executive-room",
    name: "Executive Room",
    description: "Sophisticated comfort designed for the discerning business traveler.",
    price: "€280",
    size: "55 m²",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    amenities: [Wifi, Coffee, Bath, Tv],
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    description: "Elegant accommodations with refined details and modern comforts.",
    price: "€180",
    size: "40 m²",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    amenities: [Wifi, Coffee, Bath, Tv],
  },
];

export default function RoomsPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading
          subtitle="Accommodations"
          title="Rooms & Suites"
          description="Retreat to elegantly appointed rooms where timeless luxury meets contemporary comfort."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group"
            >
              <Link to={`/rooms/${room.id}`} className="block">
                <div className="luxury-card overflow-hidden">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="image-overlay-subtle" />
                    
                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 bg-gold px-4 py-2 rounded">
                      <span className="font-display text-navy">
                        From {room.price}
                        <span className="text-sm">/night</span>
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-display text-2xl text-navy group-hover:text-gold transition-colors">
                        {room.name}
                      </h3>
                      <span className="text-sm text-muted-foreground">{room.size}</span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {room.description}
                    </p>

                    {/* Amenities */}
                    <div className="flex items-center gap-4 mb-4">
                      {room.amenities.map((Icon, i) => (
                        <Icon key={i} className="w-5 h-5 text-gold" />
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-gold font-medium text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
                        View Details <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/rooms" className="btn-luxury-dark">
            View All Rooms
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
