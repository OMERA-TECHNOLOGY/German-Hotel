import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Sparkles, Droplets, Leaf, Clock, Heart, Star } from "lucide-react";

const treatments = [
  {
    icon: Sparkles,
    name: "Signature Massage",
    duration: "90 min",
    price: "€180",
    description: "A customized full-body massage combining techniques from around the world.",
  },
  {
    icon: Droplets,
    name: "Hydrating Facial",
    duration: "60 min",
    price: "€150",
    description: "Luxurious facial treatment with premium skincare for radiant results.",
  },
  {
    icon: Leaf,
    name: "Body Wrap",
    duration: "75 min",
    price: "€160",
    description: "Detoxifying wrap with organic ingredients to nourish and rejuvenate.",
  },
  {
    icon: Heart,
    name: "Couples Retreat",
    duration: "120 min",
    price: "€350",
    description: "Romantic spa experience with side-by-side treatments and champagne.",
  },
];

const packages = [
  {
    name: "Half Day Escape",
    duration: "4 hours",
    price: "€399",
    includes: ["Welcome ritual", "Body scrub", "Full body massage", "Facial", "Light lunch"],
  },
  {
    name: "Full Day Journey",
    duration: "8 hours",
    price: "€699",
    includes: ["All Half Day treatments", "Manicure & pedicure", "Hair treatment", "Three-course dinner"],
  },
  {
    name: "Weekend Wellness",
    duration: "2 days",
    price: "€1,299",
    includes: ["Two Full Day packages", "Overnight stay", "Yoga sessions", "Wellness consultation"],
  },
];

const facilities = [
  { name: "Heated Indoor Pool", image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=600&q=80" },
  { name: "Finnish Sauna", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80" },
  { name: "Steam Room", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80" },
  { name: "Relaxation Lounge", image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=600&q=80" },
];

export default function Spa() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/70" />
        
        <div className="relative text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="w-12 h-px bg-gold" />
            <Leaf className="w-6 h-6 text-gold" />
            <span className="w-12 h-px bg-gold" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white mb-6"
          >
            Serenity <span className="text-gold italic">Spa</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-white/80 text-lg mb-8"
          >
            A tranquil sanctuary where ancient healing traditions meet 
            modern wellness in perfect harmony.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/contact" className="btn-luxury">
              Book Treatment
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-champagne">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block font-body text-sm uppercase tracking-[0.3em] text-gold mb-4">
                Wellness Sanctuary
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-navy mb-6">
                Restore Your <span className="text-gold italic">Balance</span>
              </h2>
              <div className="gold-line w-24 mb-8" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Serenity Spa spans over 2,000 square meters of pure tranquility, 
                featuring 12 treatment rooms, relaxation lounges, and thermal 
                facilities. Our expert therapists combine time-honored techniques 
                with innovative treatments using premium organic products.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you seek deep relaxation, rejuvenation, or holistic wellness, 
                our personalized approach ensures each visit is a transformative journey.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-gold" />
                  <div>
                    <span className="block text-navy font-medium">Open Daily</span>
                    <span className="text-sm text-muted-foreground">7 AM - 10 PM</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-gold" />
                  <div>
                    <span className="block text-navy font-medium">Award Winning</span>
                    <span className="text-sm text-muted-foreground">Best Spa 2024</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {facilities.map((facility, index) => (
                <div key={facility.name} className="relative group overflow-hidden rounded-lg">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white font-display text-sm">
                    {facility.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Treatments"
            title="Signature Experiences"
            description="Discover our most beloved treatments, each designed to nurture body, mind, and spirit."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="luxury-card p-8 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gold/10 group-hover:bg-gold transition-colors">
                  <treatment.icon className="w-8 h-8 text-gold group-hover:text-navy transition-colors" />
                </div>
                <h3 className="font-display text-xl text-navy mb-2">{treatment.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{treatment.description}</p>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <span className="text-gold">{treatment.duration}</span>
                  <span className="text-muted-foreground">|</span>
                  <span className="text-navy font-medium">{treatment.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-navy text-white">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Spa Packages"
            title="Wellness Journeys"
            description="Immerse yourself in complete relaxation with our curated spa experiences."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-gold/30 rounded-lg hover:border-gold transition-colors"
              >
                <h3 className="font-display text-2xl text-gold mb-2">{pkg.name}</h3>
                <p className="text-white/60 mb-4">{pkg.duration}</p>
                <span className="block font-display text-3xl text-white mb-6">{pkg.price}</span>
                <ul className="space-y-2 mb-6">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/70">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-luxury-outline w-full justify-center">
                  Book Package
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Etiquette */}
      <section className="section-padding bg-champagne">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading
            subtitle="Before Your Visit"
            title="Spa Etiquette"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="p-6 bg-white rounded-lg">
              <h3 className="font-display text-xl text-navy mb-4">Preparation</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Arrive 30 minutes before your appointment</li>
                <li>• Avoid heavy meals before treatments</li>
                <li>• Inform us of any health conditions</li>
                <li>• Silence mobile devices in spa areas</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <h3 className="font-display text-xl text-navy mb-4">What's Provided</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Luxury robes and slippers</li>
                <li>• Secure lockers for valuables</li>
                <li>• Complimentary refreshments</li>
                <li>• All spa amenities access</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
