import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Calendar,
  Users,
  Bed,
  Navigation,
  ExternalLink,
  Map,
  Satellite,
} from "lucide-react";
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
  const [mapType, setMapType] = useState<"roadmap" | "satellite">("roadmap");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description:
        "Thank you for contacting us. We'll respond within 24 hours.",
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getMapUrl = () => {
    const baseUrl =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.579299039066!2d39.26050970000001!3d8.5401585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b21de626fc2e1%3A0x53ebfbdd9c51c033!2sGerman%20Hotel!5e0!3m2!1sen!2set!4v1764535028839!5m2!1sen!2set";

    if (mapType === "satellite") {
      return baseUrl + "&maptype=satellite";
    }
    return baseUrl;
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
                <a
                  href="tel:+491234567890"
                  className="text-white hover:text-gold transition-colors"
                >
                  +251 22 112 7320
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
                <a
                  href="mailto:info@germanhotel.com"
                  className="text-white hover:text-gold transition-colors"
                >
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
                <span className="text-white">Main Road, Adama</span>
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
              <h2 className="font-display text-3xl text-navy mb-6">
                Send a Message
              </h2>
              <div className="gold-line w-16 mb-8" />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-navy mb-2">
                      Full Name *
                    </label>
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
                    <label className="block text-sm text-navy mb-2">
                      Email *
                    </label>
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
                    <label className="block text-sm text-navy mb-2">
                      Phone
                    </label>
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
                    <label className="block text-sm text-navy mb-2">
                      Subject
                    </label>
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
                  <label className="block text-sm text-navy mb-2">
                    Message *
                  </label>
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

                <button
                  type="submit"
                  className="btn-luxury flex items-center gap-2"
                >
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
              <h2 className="font-display text-3xl text-navy mb-6">
                Quick Booking
              </h2>
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
                    <label className="block text-sm text-navy mb-2">
                      Special Requests
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:border-gold transition-colors resize-none"
                      placeholder="Any special requirements?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-luxury-dark w-full justify-center"
                  >
                    Check Availability
                  </button>
                </form>

                <p className="text-center text-sm text-muted-foreground mt-4">
                  Best rate guaranteed. Free cancellation up to 48h before
                  check-in.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="relative bg-navy">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Location Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 bg-white p-8 lg:p-12"
            >
              <h2 className="font-display text-3xl text-navy mb-6">Visit Us</h2>
              <div className="gold-line w-16 mb-8" />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/10 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      Main Road, Adama
                      <br />
                      Oromia, Ethiopia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/10 flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Hours</h3>
                    <p className="text-muted-foreground">
                      Reception: 24/7
                      <br />
                      Restaurant: 6:00 AM - 11:00 PM
                      <br />
                      Spa: 8:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gold/10 flex-shrink-0">
                    <Navigation className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Directions</h3>
                    <p className="text-muted-foreground mb-3">
                      Located in the heart of Adama, easily accessible from the
                      main highway.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="https://maps.google.com/maps?q=German+Hotel+Adama"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-luxury flex items-center justify-center gap-2 text-sm px-4 py-2"
                      >
                        <Navigation className="w-4 h-4" />
                        Get Directions
                      </a>
                      <a
                        href="https://maps.app.goo.gl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline flex items-center justify-center gap-2 text-sm px-4 py-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Open Maps
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h4 className="font-semibold text-navy mb-3">Parking</h4>
                  <p className="text-sm text-muted-foreground">
                    Complimentary valet parking available for all hotel guests.
                    Secure underground parking with 24/7 surveillance.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 h-96 lg:h-auto relative"
            >
              {/* Map Type Controls */}
              <div className="absolute top-4 right-4 z-20 flex gap-2 bg-white/90 backdrop-blur-sm rounded-lg p-1 shadow-lg">
                <button
                  onClick={() => setMapType("roadmap")}
                  className={`p-2 rounded-md transition-all ${
                    mapType === "roadmap"
                      ? "bg-gold text-white"
                      : "text-navy hover:bg-gray-100"
                  }`}
                  title="Map View"
                >
                  <Map className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setMapType("satellite")}
                  className={`p-2 rounded-md transition-all ${
                    mapType === "satellite"
                      ? "bg-gold text-white"
                      : "text-navy hover:bg-gray-100"
                  }`}
                  title="Satellite View"
                >
                  <Satellite className="w-4 h-4" />
                </button>
              </div>

              {/* Location Indicator - Positioned absolutely but doesn't interfere with map */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-2xl"
                >
                  <MapPin className="w-5 h-5 text-white fill-current" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="absolute top-0 left-0 w-12 h-12 border-2 border-gold rounded-full animate-ping pointer-events-none"
                />
              </div>

              {/* Clean Map - No overlays blocking interaction */}
              <iframe
                src={getMapUrl()}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter:
                    mapType === "satellite"
                      ? "none"
                      : "sepia(0.1) hue-rotate(180deg) saturate(1.1) contrast(1.05)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="German Hotel Location"
                className="relative z-0"
              />

              {/* Map Attribution */}
              <div className="absolute bottom-2 left-2 z-20">
                <p className="text-xs text-white/70 bg-black/30 px-2 py-1 rounded">
                  Powered by Google Maps
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
