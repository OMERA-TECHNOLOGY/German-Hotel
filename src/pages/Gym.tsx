import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Dumbbell, Heart, Users, Clock, Award, Flame, Waves, PersonStanding } from "lucide-react";

const equipment = [
  { icon: Dumbbell, name: "Free Weights", description: "Full range of dumbbells, barbells, and kettlebells" },
  { icon: Heart, name: "Cardio Zone", description: "Treadmills, bikes, ellipticals, and rowing machines" },
  { icon: Flame, name: "Functional Training", description: "TRX, battle ropes, and plyometric equipment" },
  { icon: Waves, name: "Lap Pool", description: "25-meter heated pool for swimming and aqua fitness" },
];

const classes = [
  { name: "Yoga Flow", time: "7:00 AM", instructor: "Maria S.", level: "All Levels" },
  { name: "HIIT Training", time: "8:00 AM", instructor: "Thomas K.", level: "Intermediate" },
  { name: "Pilates", time: "10:00 AM", instructor: "Elena V.", level: "All Levels" },
  { name: "Spin Class", time: "12:00 PM", instructor: "Marcus L.", level: "Advanced" },
  { name: "Aqua Aerobics", time: "2:00 PM", instructor: "Sarah M.", level: "All Levels" },
  { name: "Boxing", time: "5:00 PM", instructor: "Viktor R.", level: "Intermediate" },
];

const trainers = [
  {
    name: "Thomas König",
    specialty: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=400&q=80",
    certifications: ["NSCA-CPT", "CSCS", "CrossFit L2"],
  },
  {
    name: "Maria Schmidt",
    specialty: "Yoga & Mindfulness",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=400&q=80",
    certifications: ["RYT-500", "Meditation Coach"],
  },
  {
    name: "Viktor Richter",
    specialty: "Combat Sports & HIIT",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400&q=80",
    certifications: ["ACE-CPT", "Boxing Coach", "Krav Maga"],
  },
];

const memberships = [
  {
    name: "Day Pass",
    price: "€35",
    period: "per day",
    features: ["Full gym access", "Pool access", "Locker & towels", "1 group class"],
  },
  {
    name: "Weekly",
    price: "€150",
    period: "per week",
    features: ["All Day Pass benefits", "Unlimited classes", "Sauna access", "Fitness assessment"],
  },
  {
    name: "Monthly",
    price: "€450",
    period: "per month",
    features: ["All Weekly benefits", "2 PT sessions", "Nutrition consultation", "Priority booking"],
  },
];

export default function Gym() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />
        
        <div className="relative text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="w-12 h-px bg-gold" />
            <Dumbbell className="w-6 h-6 text-gold" />
            <span className="w-12 h-px bg-gold" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white mb-6"
          >
            Fitness <span className="text-gold italic">Center</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-white/80 text-lg mb-8"
          >
            State-of-the-art equipment, expert trainers, and world-class facilities 
            to elevate your fitness journey.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-gold"
          >
            <Clock className="w-5 h-5" />
            <span>Open 24/7 for Hotel Guests</span>
          </motion.div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="section-padding bg-champagne">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Facilities"
            title="Premium Equipment"
            description="Our 1,500 sqm fitness center features the latest Technogym and Life Fitness equipment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="luxury-card p-8 text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gold/10 group-hover:bg-gold transition-colors">
                  <item.icon className="w-8 h-8 text-gold group-hover:text-navy transition-colors" />
                </div>
                <h3 className="font-display text-xl text-navy mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Schedule */}
      <section className="section-padding bg-navy text-white">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Group Fitness"
            title="Class Schedule"
            description="Join our energizing group classes led by certified instructors."
            light
          />

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-4 text-gold font-display">Class</th>
                  <th className="text-left py-4 px-4 text-gold font-display">Time</th>
                  <th className="text-left py-4 px-4 text-gold font-display">Instructor</th>
                  <th className="text-left py-4 px-4 text-gold font-display">Level</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((cls, index) => (
                  <motion.tr
                    key={cls.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-4 font-medium">{cls.name}</td>
                    <td className="py-4 px-4 text-white/70">{cls.time}</td>
                    <td className="py-4 px-4 text-white/70">{cls.instructor}</td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 bg-gold/20 text-gold text-sm rounded-full">
                        {cls.level}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Expert Team"
            title="Personal Trainers"
            description="Work one-on-one with our certified fitness professionals."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="luxury-card overflow-hidden group"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="image-overlay" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-navy mb-1">{trainer.name}</h3>
                  <p className="text-gold mb-4">{trainer.specialty}</p>
                  <div className="flex flex-wrap gap-2">
                    {trainer.certifications.map((cert) => (
                      <span key={cert} className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="section-padding bg-champagne">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Memberships"
            title="Fitness Plans"
            description="Choose the plan that fits your fitness goals."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {memberships.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-lg ${
                  index === 2 
                    ? "bg-navy text-white" 
                    : "bg-white border border-border"
                }`}
              >
                <h3 className={`font-display text-xl mb-2 ${index === 2 ? "text-gold" : "text-navy"}`}>
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className={`font-display text-4xl ${index === 2 ? "text-white" : "text-navy"}`}>
                    {plan.price}
                  </span>
                  <span className={index === 2 ? "text-white/60" : "text-muted-foreground"}>
                    {" "}{plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex items-center gap-2 ${
                      index === 2 ? "text-white/80" : "text-muted-foreground"
                    }`}>
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={index === 2 ? "btn-luxury w-full justify-center" : "btn-luxury-dark w-full justify-center"}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
