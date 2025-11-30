import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Phone, Mail, MapPin, Clock, Send, Calendar, Users, Bed } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    roomType: "deluxe",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "general",
      message: "",
      checkIn: "",
      checkOut: "",
      guests: "2",
      roomType: "deluxe",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
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
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white"
          >
            Contact & <span className="text-gold italic">Reservations</span>
          </motion.h1>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-navy py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/10">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="block text-white/60 text-sm">Call Us</span>
                <a href="tel:+491234567890" className="text-white hover:text-gold transition-colors">
                  +49 123 456 7890
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/10">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="block text-white/60 text-sm">Email Us</span>
                <a href="mailto:info@germanhotel.com" className="text-white hover:text-gold transition-colors">
                  info@germanhotel.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/10">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="block text-white/60 text-sm">Location</span>
                <span className="text-white">Königsallee 1, Düsseldorf</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/10">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="block text-white/60 text-sm">Reception</span>
                <span className="text-white">24/7 Available</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Booking */}
      <section className="section-padding bg-champagne">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl text-navy mb-6">Send a Message</h2>
              <div className="gold-line w-16 mb-8" />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-navy mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:border-gold transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-navy mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:border-gold transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-navy mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:border-gold transition-colors"
                      placeholder="+49 123 456 7890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-navy mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="reservation">Reservation</option>
                      <option value="event">Event Inquiry</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-navy mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button type="submit" className="btn-luxury flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Quick Booking */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl text-navy mb-6">Quick Booking</h2>
              <div className="gold-line w-16 mb-8" />

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-navy mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gold" />
                        Check In
                      </label>
                      <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-navy mb-2 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gold" />
                        Check Out
                      </label>
                      <input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-navy mb-2 flex items-center gap-2">
                        <Users className="w-4 h-4 text-gold" />
                        Guests
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-gold transition-colors"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-navy mb-2 flex items-center gap-2">
                        <Bed className="w-4 h-4 text-gold" />
                        Room Type
                      </label>
                      <select
                        name="roomType"
                        value={formData.roomType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-gold transition-colors"
                      >
                        <option value="standard">Standard Room</option>
                        <option value="superior">Superior Room</option>
                        <option value="deluxe">Deluxe Room</option>
                        <option value="executive">Executive Room</option>
                        <option value="suite">Luxury Suite</option>
                        <option value="presidential">Presidential Suite</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-navy mb-2">Special Requests</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-gold transition-colors resize-none"
                      placeholder="Any special requirements?"
                    />
                  </div>

                  <button type="submit" className="btn-luxury-dark w-full justify-center">
                    Check Availability
                  </button>
                </form>

                <p className="text-center text-sm text-muted-foreground mt-4">
                  Best rate guaranteed. Free cancellation up to 48h before check-in.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-muted relative">
        <div className="absolute inset-0 bg-navy/10" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.5474088456897!2d6.772841076884716!3d51.22505677179903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c9e03c4a1a7d%3A0x4c9e4a9e4a9e4a9e!2sK%C3%B6nigsallee%2C%20D%C3%BCsseldorf!5e0!3m2!1sen!2sde!4v1629876543210!5m2!1sen!2sde"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="German Hotel Location"
        />
        
        {/* Map Overlay Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute top-8 left-8 bg-white p-6 rounded-lg shadow-xl max-w-xs"
        >
          <h3 className="font-display text-xl text-navy mb-3">German Hotel</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Königsallee 1<br />
            40212 Düsseldorf<br />
            Germany
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold text-sm font-medium hover:underline"
          >
            Get Directions →
          </a>
        </motion.div>
      </section>
    </Layout>
  );
}
