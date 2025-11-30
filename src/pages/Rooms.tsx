import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Wifi,
  Coffee,
  Bath,
  Tv,
  Wind,
  UtensilsCrossed,
  Car,
  Sparkles,
} from "lucide-react";

const roomCategories = [
  { id: "all", name: "All Rooms" },
  { id: "suite", name: "Luxury Suites" },
  { id: "executive", name: "Executive" },
  { id: "deluxe", name: "Deluxe" },
  { id: "standard", name: "Standard" },
];

const rooms = [
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    category: "suite",
    description:
      "The epitome of luxury with panoramic views, private terrace, and butler service.",
    price: "€1,200",
    size: "150 m²",
    beds: "1 King + Living Area",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Private Terrace", "Butler Service", "Jacuzzi", "Office Space"],
  },
  {
    id: "luxury-suite",
    name: "Luxury Suite",
    category: "suite",
    description:
      "Expansive living spaces with stunning city views and premium amenities.",
    price: "€450",
    size: "85 m²",
    beds: "1 King",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Living Room", "Premium Bar", "Rain Shower", "Smart TV"],
  },
  {
    id: "executive-room",
    name: "Executive Room",
    category: "executive",
    description:
      "Sophisticated comfort designed for the discerning business traveler.",
    price: "€280",
    size: "55 m²",
    beds: "1 King or 2 Queens",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Work Desk", "Lounge Access", "Express Laundry", "Mini Bar"],
  },
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    category: "deluxe",
    description:
      "Elegant accommodations with refined details and modern comforts.",
    price: "€180",
    size: "40 m²",
    beds: "1 King or 2 Double",
    image: "../../public/photo_2025-11-30_15-02-17.jpg",
    amenities: ["City View", "Premium Bedding", "Marble Bath", "Nespresso"],
  },
  {
    id: "superior-room",
    name: "Superior Room",
    category: "deluxe",
    description:
      "Comfortable elegance with thoughtful amenities for a perfect stay.",
    price: "€150",
    size: "35 m²",
    beds: "1 Queen or 2 Twin",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
    amenities: ["Garden View", "Smart TV", "Safe", "Mini Fridge"],
  },
  {
    id: "standard-room",
    name: "Standard Room",
    category: "standard",
    description:
      "Essential comfort with all the amenities you need for a pleasant stay.",
    price: "€120",
    size: "28 m²",
    beds: "1 Double or 2 Twin",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
    amenities: ["En-suite Bath", "Flat Screen TV", "Air Conditioning", "Safe"],
  },
];

const allAmenities = [
  { icon: Wifi, name: "High-Speed WiFi" },
  { icon: Coffee, name: "In-Room Dining" },
  { icon: Bath, name: "Luxury Bath" },
  { icon: Tv, name: "Smart TV" },
  { icon: Wind, name: "Climate Control" },
  { icon: UtensilsCrossed, name: "24/7 Service" },
  { icon: Car, name: "Valet Parking" },
  { icon: Sparkles, name: "Daily Housekeeping" },
];

export default function Rooms() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80" />

        <div className="relative text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block font-body text-sm uppercase tracking-[0.3em] text-gold mb-4"
          >
            Accommodations
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white mb-6"
          >
            Rooms & Suites
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-white/80 text-lg"
          >
            Discover refined luxury in every detail of our meticulously designed
            accommodations.
          </motion.p>
        </div>
      </section>

      {/* Amenities Bar */}
      <section className="bg-navy py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {allAmenities.map((amenity, index) => (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 text-white/70"
              >
                <amenity.icon className="w-5 h-5 text-gold" />
                <span className="text-sm">{amenity.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="section-padding bg-champagne">
        <div className="container mx-auto">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {roomCategories.map((category) => (
              <button
                key={category.id}
                className="px-6 py-2 font-body text-sm uppercase tracking-wider border border-navy/20 rounded-full hover:border-gold hover:text-gold transition-colors"
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <Link to={`/rooms/${room.id}`} className="block">
                  <div className="luxury-card overflow-hidden">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="image-overlay-subtle" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-navy/80 backdrop-blur-sm px-3 py-1 rounded text-xs text-gold uppercase tracking-wider">
                        {room.category}
                      </div>

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
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-display text-2xl text-navy group-hover:text-gold transition-colors">
                          {room.name}
                        </h3>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span>{room.size}</span>
                        <span>•</span>
                        <span>{room.beds}</span>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                        {room.description}
                      </p>

                      {/* Amenities Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {room.amenities.slice(0, 3).map((amenity) => (
                          <span
                            key={amenity}
                            className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded"
                          >
                            {amenity}
                          </span>
                        ))}
                        {room.amenities.length > 3 && (
                          <span className="px-2 py-1 bg-gold/10 text-xs text-gold rounded">
                            +{room.amenities.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* CTA */}
                      <div className="pt-4 border-t border-border">
                        <span className="text-gold font-medium text-sm uppercase tracking-wider">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="section-padding bg-navy text-white">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Special Offers"
            title="Exclusive Packages"
            description="Enhance your stay with our curated experiences and special packages."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Romance Package",
                description:
                  "Champagne, rose petals, couples spa treatment, and candlelit dinner.",
                price: "From €599",
              },
              {
                title: "Business Elite",
                description:
                  "Executive suite, airport transfer, lounge access, and meeting room.",
                price: "From €399",
              },
              {
                title: "Weekend Escape",
                description:
                  "2 nights deluxe room, breakfast, spa access, and late checkout.",
                price: "From €299",
              },
            ].map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-gold/30 rounded-lg hover:border-gold transition-colors group"
              >
                <h3 className="font-display text-2xl text-gold mb-4">
                  {offer.title}
                </h3>
                <p className="text-white/70 mb-6">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl text-white">
                    {offer.price}
                  </span>
                  <Link
                    to="/contact"
                    className="text-gold text-sm uppercase tracking-wider hover:underline"
                  >
                    Book Now →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
