import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Clock, Calendar, Phone, Award, Star, ChefHat } from "lucide-react";

const menuCategories = [
  { id: "breakfast", name: "Breakfast", time: "7:00 AM - 10:30 AM" },
  { id: "lunch", name: "Lunch", time: "12:00 PM - 2:30 PM" },
  { id: "dinner", name: "Dinner", time: "6:00 PM - 10:00 PM" },
  { id: "dessert", name: "Desserts", time: "All Day" },
];

const signatureDishes = [
  {
    name: "Wagyu Beef Tenderloin",
    description: "A5 Japanese Wagyu, truffle jus, seasonal vegetables, potato mousseline",
    price: "€95",
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Lobster Thermidor",
    description: "Brittany lobster, cognac cream, gruyère gratin, fine herbs",
    price: "€78",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Tasting Menu",
    description: "8-course journey through seasonal flavors with wine pairing",
    price: "€185",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
  },
];

const wineSelection = [
  { name: "Dom Pérignon 2012", region: "Champagne, France", price: "€320" },
  { name: "Opus One 2019", region: "Napa Valley, USA", price: "€450" },
  { name: "Château Margaux 2015", region: "Bordeaux, France", price: "€580" },
];

export default function Restaurant() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />
        
        <div className="relative text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Star className="w-5 h-5 text-gold" />
            <span className="font-body text-sm uppercase tracking-[0.3em] text-gold">
              Michelin Starred
            </span>
            <Star className="w-5 h-5 text-gold" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white mb-6"
          >
            The Grand <span className="text-gold italic">Restaurant</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-white/80 text-lg mb-8"
          >
            An extraordinary culinary journey where art meets gastronomy, 
            crafted by our award-winning culinary team.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/contact" className="btn-luxury">
              Reserve a Table
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Hours & Info */}
      <section className="bg-navy py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {menuCategories.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <span className="block text-gold font-display text-lg">{cat.name}</span>
                <span className="text-white/60 text-sm">{cat.time}</span>
              </motion.div>
            ))}
          </div>
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
                Culinary Excellence
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-navy mb-6">
                A Symphony of <span className="text-gold italic">Flavors</span>
              </h2>
              <div className="gold-line w-24 mb-8" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Grand Restaurant offers an unparalleled dining experience where traditional 
                techniques meet innovative culinary artistry. Our kitchen sources the finest 
                seasonal ingredients from local farmers and artisans, as well as premium 
                imports from around the world.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Under the direction of Executive Chef Hans Weber, our team creates dishes 
                that delight the senses and tell a story with every bite. The elegant dining 
                room, with its crystal chandeliers and panoramic city views, provides the 
                perfect backdrop for memorable occasions.
              </p>
              
              {/* Awards */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-gold" />
                  <div>
                    <span className="block text-navy font-medium">Michelin Star</span>
                    <span className="text-sm text-muted-foreground">2020-2024</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-gold" />
                  <div>
                    <span className="block text-navy font-medium">World's Best</span>
                    <span className="text-sm text-muted-foreground">Top 100 Restaurants</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80"
                alt="Fine Dining"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-lg shadow-xl">
                <ChefHat className="w-8 h-8 text-navy mb-2" />
                <span className="block text-navy font-display text-lg">Chef Hans Weber</span>
                <span className="text-navy/70 text-sm">Executive Chef</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Chef's Selection"
            title="Signature Dishes"
            description="Discover our most celebrated creations, each a masterpiece of culinary artistry."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureDishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <div className="luxury-card overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="image-overlay-subtle" />
                    <div className="absolute bottom-4 right-4 bg-gold px-4 py-2 rounded">
                      <span className="font-display text-navy">{dish.price}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl text-navy mb-3 group-hover:text-gold transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-muted-foreground">{dish.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wine Selection */}
      <section className="section-padding bg-navy text-white">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Wine Cellar"
            title="Curated Wine Selection"
            description="Our sommelier has assembled an exceptional collection of over 500 labels."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {wineSelection.map((wine, index) => (
              <motion.div
                key={wine.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-gold/30 rounded-lg text-center hover:border-gold transition-colors"
              >
                <h3 className="font-display text-xl text-gold mb-2">{wine.name}</h3>
                <p className="text-white/60 mb-4">{wine.region}</p>
                <span className="font-display text-2xl text-white">{wine.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="section-padding bg-champagne">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl text-navy mb-6"
            >
              Reserve Your Table
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mb-8"
            >
              For reservations, special dietary requirements, or private dining inquiries, 
              please contact our restaurant team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <a href="tel:+491234567891" className="flex items-center justify-center gap-2 text-navy hover:text-gold transition-colors">
                <Phone className="w-5 h-5" />
                <span>+49 123 456 7891</span>
              </a>
              <span className="hidden sm:block text-muted-foreground">|</span>
              <div className="flex items-center justify-center gap-2 text-navy">
                <Clock className="w-5 h-5" />
                <span>Mon - Sun: 7:00 AM - 10:00 PM</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/contact" className="btn-luxury-dark">
                Make a Reservation
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
