import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Music, Clock, Star, GlassWater } from "lucide-react";

const signatureCocktails = [
  {
    name: "Golden Hour",
    description: "Aged bourbon, honey, gold flakes, champagne foam",
    price: "€24",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Midnight Velvet",
    description: "Premium vodka, blackberry, elderflower, activated charcoal",
    price: "€22",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Berlin Nights",
    description: "Gin, cucumber, basil, prosecco, edible flowers",
    price: "€20",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Smoky Manhattan",
    description: "Rye whiskey, sweet vermouth, bitters, cherry smoke",
    price: "€26",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=600&q=80",
  },
];

const spirits = [
  { category: "Whiskey", items: ["Macallan 18", "Yamazaki 12", "Pappy Van Winkle"] },
  { category: "Cognac", items: ["Louis XIII", "Hennessy XO", "Rémy Martin VSOP"] },
  { category: "Champagne", items: ["Dom Pérignon", "Krug Grande Cuvée", "Veuve Clicquot"] },
];

const events = [
  { day: "Thursday", event: "Jazz Night", time: "8 PM - 12 AM" },
  { day: "Friday", event: "DJ Session", time: "9 PM - 2 AM" },
  { day: "Saturday", event: "Live Band", time: "8 PM - 1 AM" },
];

export default function Bar() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/90" />
        
        <div className="relative text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="w-12 h-px bg-gold" />
            <GlassWater className="w-6 h-6 text-gold" />
            <span className="w-12 h-px bg-gold" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white mb-6"
          >
            The <span className="text-gold italic">Velvet</span> Lounge
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-white/80 text-lg mb-8"
          >
            An intimate sanctuary of refined spirits, artisanal cocktails, 
            and sophisticated nightlife experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-gold"
          >
            <Clock className="w-5 h-5" />
            <span>Open Daily: 5 PM - 2 AM</span>
          </motion.div>
        </div>
      </section>

      {/* Signature Cocktails */}
      <section className="section-padding bg-charcoal">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Craft Cocktails"
            title="Signature Creations"
            description="Our award-winning mixologists create liquid masterpieces using the finest ingredients."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {signatureCocktails.map((cocktail, index) => (
              <motion.div
                key={cocktail.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={cocktail.image}
                    alt={cocktail.name}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display text-xl text-white group-hover:text-gold transition-colors">
                        {cocktail.name}
                      </h3>
                      <span className="text-gold font-display">{cocktail.price}</span>
                    </div>
                    <p className="text-white/60 text-sm">{cocktail.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Spirits */}
      <section className="section-padding bg-navy-light">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block font-body text-sm uppercase tracking-[0.3em] text-gold mb-4">
                Premium Collection
              </span>
              <h2 className="font-display text-4xl text-white mb-6">
                World-Class <span className="text-gold italic">Spirits</span>
              </h2>
              <div className="gold-line w-24 mb-8" />
              <p className="text-white/70 leading-relaxed mb-8">
                Our bar houses one of the most extensive collections of rare and 
                premium spirits in the region. From centuries-old cognacs to limited 
                edition whiskeys, each bottle has been carefully curated for the 
                discerning connoisseur.
              </p>

              {spirits.map((spirit, index) => (
                <div key={spirit.category} className="mb-6">
                  <h3 className="text-gold font-display text-lg mb-2">{spirit.category}</h3>
                  <p className="text-white/60">{spirit.items.join(" • ")}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80"
                alt="Premium Bar"
                className="rounded-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold p-6 rounded-lg">
                <span className="block font-display text-4xl text-navy">500+</span>
                <span className="text-navy/70 text-sm">Premium Labels</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Entertainment */}
      <section className="section-padding bg-charcoal">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Entertainment"
            title="Live Music Nights"
            description="Experience unforgettable evenings with world-class performers."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {events.map((event, index) => (
              <motion.div
                key={event.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 border border-gold/30 rounded-lg hover:border-gold transition-colors"
              >
                <Music className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-display text-2xl text-white mb-2">{event.day}</h3>
                <p className="text-gold mb-1">{event.event}</p>
                <p className="text-white/60 text-sm">{event.time}</p>
              </motion.div>
            ))}
          </div>

          {/* VIP Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 p-8 md:p-12 rounded-lg border border-gold/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-6 h-6 text-gold" />
                  <span className="font-body text-sm uppercase tracking-[0.3em] text-gold">
                    VIP Experience
                  </span>
                </div>
                <h3 className="font-display text-3xl text-white mb-4">
                  Private Lounge & Events
                </h3>
                <p className="text-white/70 mb-6">
                  Reserve our exclusive VIP area for private parties, corporate events, 
                  or intimate gatherings. Includes dedicated service, premium bottle 
                  selections, and personalized cocktail menus.
                </p>
                <Link to="/contact" className="btn-luxury">
                  Inquire Now
                </Link>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&w=600&q=80"
                  alt="VIP Lounge"
                  className="rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
