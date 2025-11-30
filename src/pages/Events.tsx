import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Heart,
  Briefcase,
  PartyPopper,
  Users,
  Monitor,
  Mic,
  UtensilsCrossed,
  Music,
} from "lucide-react";

const eventTypes = [
  {
    id: "wedding",
    icon: Heart,
    name: "Weddings",
    description: "Create the wedding of your dreams in our magnificent venues.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
    capacity: "Up to 300 guests",
    features: [
      "Grand Ballroom",
      "Outdoor Garden",
      "Bridal Suite",
      "Customized Menus",
    ],
  },
  {
    id: "corporate",
    icon: Briefcase,
    name: "Corporate Events",
    description:
      "Impress clients and inspire teams in our professional spaces.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    capacity: "Up to 200 guests",
    features: [
      "Conference Rooms",
      "AV Equipment",
      "Business Center",
      "Catering",
    ],
  },
  {
    id: "celebrations",
    icon: PartyPopper,
    name: "Private Celebrations",
    description: "Celebrate life's milestones in style and elegance.",
    image: "../../public/504189505_3036264959862009_483520191979593457_n.jpg",
    capacity: "Up to 150 guests",
    features: [
      "Private Dining",
      "Entertainment",
      "Custom Themes",
      "Bartenders",
    ],
  },
];

const venues = [
  {
    name: "Grand Ballroom",
    size: "600 m²",
    capacity: "300 guests",
    style: "Elegant & Versatile",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Crystal Room",
    size: "200 m²",
    capacity: "100 guests",
    style: "Intimate & Sophisticated",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Rooftop Terrace",
    size: "400 m²",
    capacity: "150 guests",
    style: "Open-Air & Scenic",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Executive Boardroom",
    size: "80 m²",
    capacity: "20 guests",
    style: "Professional & Private",
    image: "../../public/30531504_961700080651851_4006167939760783360_n.jpg",
  },
];

const services = [
  {
    icon: UtensilsCrossed,
    name: "Gourmet Catering",
    description: "Customized menus by our award-winning chefs",
  },
  {
    icon: Music,
    name: "Entertainment",
    description: "Live bands, DJs, and performance artists",
  },
  {
    icon: Monitor,
    name: "AV Technology",
    description: "State-of-the-art sound and visual systems",
  },
  {
    icon: Users,
    name: "Event Planning",
    description: "Dedicated coordinators for seamless execution",
  },
];

export default function Events() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />

        <div className="relative text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block font-body text-sm uppercase tracking-[0.3em] text-gold mb-4"
          >
            Unforgettable Celebrations
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white mb-6"
          >
            Events & <span className="text-gold italic">Conferences</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-white/80 text-lg mb-8"
          >
            From intimate gatherings to grand celebrations, our versatile venues
            and expert team create extraordinary events.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/contact" className="btn-luxury">
              Plan Your Event
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-padding bg-champagne">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Our Expertise"
            title="Event Categories"
            description="We specialize in creating memorable experiences for every occasion."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="luxury-card overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="image-overlay" />
                  <div className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center rounded-full bg-gold">
                    <event.icon className="w-6 h-6 text-navy" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-navy mb-2">
                    {event.name}
                  </h3>
                  <p className="text-gold text-sm mb-3">{event.capacity}</p>
                  <p className="text-muted-foreground mb-4">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-muted text-xs text-muted-foreground rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/events/${event.id}`}
                    className="text-gold font-medium text-sm uppercase tracking-wider hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Spaces"
            title="Our Venues"
            description="Discover our collection of stunning event spaces."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {venues.map((venue, index) => (
              <motion.div
                key={venue.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl text-white mb-2">
                    {venue.name}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-white/70 text-sm">
                    <span>{venue.size}</span>
                    <span>•</span>
                    <span>{venue.capacity}</span>
                    <span>•</span>
                    <span>{venue.style}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-navy text-white">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Full Service"
            title="Event Services"
            description="Everything you need for a flawless event."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 border border-gold/30 rounded-lg hover:border-gold transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gold/10">
                  <service.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-xl text-white mb-2">
                  {service.name}
                </h3>
                <p className="text-white/60">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-champagne">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl text-navy mb-6"
          >
            Let's Create Something{" "}
            <span className="text-gold italic">Extraordinary</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-8"
          >
            Our dedicated events team is ready to bring your vision to life.
            Contact us to begin planning your perfect event.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/contact" className="btn-luxury-dark">
              Request Proposal
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
