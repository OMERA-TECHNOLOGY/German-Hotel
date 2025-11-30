import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Award, Users, Globe, Heart, Star, Building } from "lucide-react";

const timeline = [
  { year: "1998", title: "The Beginning", description: "German Hotel opens its doors, establishing a new standard in luxury hospitality." },
  { year: "2005", title: "First Michelin Star", description: "Our restaurant receives its first Michelin star recognition." },
  { year: "2010", title: "Spa Expansion", description: "Opening of the award-winning Serenity Spa & Wellness Center." },
  { year: "2015", title: "Global Recognition", description: "Named among the World's Top 100 Hotels by Travel + Leisure." },
  { year: "2020", title: "Sustainability Focus", description: "Achieved carbon-neutral certification and eco-luxury status." },
  { year: "2024", title: "Continuing Excellence", description: "Celebrating 25+ years of unparalleled hospitality." },
];

const awards = [
  { icon: Star, name: "Michelin Star", year: "2020-2024", org: "Michelin Guide" },
  { icon: Globe, name: "World's Best", year: "2023", org: "Travel + Leisure" },
  { icon: Heart, name: "Best Spa", year: "2024", org: "World Spa Awards" },
  { icon: Building, name: "Historic Hotel", year: "2022", org: "European Heritage" },
];

const leadership = [
  {
    name: "Friedrich Müller",
    role: "General Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    bio: "With over 30 years in luxury hospitality, Friedrich leads German Hotel with passion and precision.",
  },
  {
    name: "Anna Schneider",
    role: "Director of Guest Experience",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    bio: "Anna ensures every guest receives personalized service that exceeds expectations.",
  },
  {
    name: "Hans Weber",
    role: "Executive Chef",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "A culinary artist whose innovative cuisine has earned international acclaim.",
  },
];

const values = [
  { icon: Heart, title: "Passion", description: "We are passionate about creating extraordinary experiences for every guest." },
  { icon: Star, title: "Excellence", description: "We pursue perfection in every detail, from service to amenities." },
  { icon: Users, title: "Warmth", description: "We treat every guest as family, with genuine care and attention." },
  { icon: Globe, title: "Sustainability", description: "We are committed to preserving our environment for future generations." },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />
        
        <div className="relative text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block font-body text-sm uppercase tracking-[0.3em] text-gold mb-4"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white mb-6"
          >
            About <span className="text-gold italic">German Hotel</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-white/80 text-lg"
          >
            A legacy of excellence spanning over 25 years of unparalleled luxury hospitality.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-champagne">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block font-body text-sm uppercase tracking-[0.3em] text-gold mb-4">
                Since 1998
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-navy mb-6">
                A Legacy of <span className="text-gold italic">Timeless Elegance</span>
              </h2>
              <div className="gold-line w-24 mb-8" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                German Hotel was founded with a singular vision: to create a sanctuary where 
                guests could experience the finest in luxury hospitality. From our elegant 
                façade to our meticulously appointed interiors, every element reflects our 
                unwavering commitment to excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Over the decades, we have welcomed royalty, celebrities, and discerning 
                travelers from around the world. Each has discovered what makes German Hotel 
                truly exceptional – not just our world-class facilities, but the warmth, 
                attention to detail, and genuine care that define every interaction.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, as we celebrate over 25 years of hospitality excellence, we remain 
                dedicated to our founding principles while continuously innovating to exceed 
                the expectations of our guests.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80"
                alt="German Hotel History"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-navy p-6 rounded-lg shadow-xl">
                <span className="block font-display text-4xl text-gold">25+</span>
                <span className="text-white/70 text-sm">Years of Excellence</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-navy text-white">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Our Journey"
            title="Milestones"
            description="Key moments that have shaped our legacy."
            light
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/30 hidden lg:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-left" : "lg:text-right"}`}>
                    <span className="text-gold font-display text-2xl">{item.year}</span>
                    <h3 className="font-display text-xl text-white mt-2 mb-3">{item.title}</h3>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-gold relative z-10 hidden lg:block" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Our Philosophy"
            title="Core Values"
            description="The principles that guide everything we do."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gold/10">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-xl text-navy mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section-padding bg-champagne">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Recognition"
            title="Awards & Accolades"
            description="Our commitment to excellence has been recognized worldwide."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="luxury-card p-8 text-center"
              >
                <award.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="font-display text-xl text-navy mb-1">{award.name}</h3>
                <p className="text-gold mb-2">{award.year}</p>
                <p className="text-muted-foreground text-sm">{award.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Our Team"
            title="Leadership"
            description="Meet the dedicated professionals behind German Hotel."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="luxury-card overflow-hidden group"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="image-overlay" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-navy mb-1">{person.name}</h3>
                  <p className="text-gold mb-4">{person.role}</p>
                  <p className="text-muted-foreground text-sm">{person.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl mb-6"
          >
            Experience the <span className="text-gold italic">German Hotel</span> Difference
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 mb-8"
          >
            We invite you to discover why German Hotel remains the choice of 
            discerning travelers worldwide.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/contact" className="btn-luxury">
              Book Your Stay
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
