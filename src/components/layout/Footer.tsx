import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const footerLinks = {
  explore: [
    { name: "Rooms & Suites", path: "/rooms" },
    { name: "Restaurant", path: "/restaurant" },
    { name: "Bar & Lounge", path: "/bar" },
    { name: "Spa & Wellness", path: "/spa" },
    { name: "Gym & Fitness", path: "/gym" },
  ],
  services: [
    { name: "Events & Conferences", path: "/events" },
    { name: "Wedding Venue", path: "/events/wedding" },
    { name: "Corporate Events", path: "/events/corporate" },
    { name: "Gallery", path: "/gallery" },
    { name: "Virtual Tour", path: "/gallery" },
  ],
  about: [
    { name: "Our Story", path: "/about" },
    { name: "Awards", path: "/about" },
    { name: "Press", path: "/about" },
    { name: "Careers", path: "/contact" },
    { name: "Contact Us", path: "/contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl text-gold mb-4"
            >
              Stay Connected
            </motion.h3>
            <p className="text-white/60 mb-8">
              Subscribe to receive exclusive offers, updates, and luxury travel
              inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors"
              />
              <button className="btn-luxury whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <div className="flex flex-col">
                <span className="font-display text-3xl text-gold tracking-wider">
                  GERMAN
                </span>
                <span className="font-display text-sm text-white/80 tracking-[0.3em]">
                  HOTEL
                </span>
              </div>
            </Link>
            <p className="text-white/60 mb-6 max-w-sm leading-relaxed">
              Experience world-class luxury in the heart of elegance. Where
              every moment becomes an unforgettable memory.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+491234567890"
                className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors"
              >
                <Phone className="w-5 h-5 text-gold" />
                <span>+251 22 112 7320</span>
              </a>
              <a
                href="mailto:info@germanhotel.com"
                className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors"
              >
                <Mail className="w-5 h-5 text-gold" />
                <span>info@germanhotel.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                <span>Main Road, Adama</span>
              </div>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-display text-lg text-gold mb-6">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display text-lg text-gold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path + link.name}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-display text-lg text-gold mb-6">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.path + link.name}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-gold hover:text-gold transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <p className="text-white/40 text-sm text-center">
            © {new Date().getFullYear()} German Hotel. All rights reserved. |
            <Link to="/contact" className="hover:text-gold ml-2">
              Privacy Policy
            </Link>{" "}
            |
            <Link to="/contact" className="hover:text-gold ml-2">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
