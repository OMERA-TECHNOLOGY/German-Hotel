import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { 
  Wifi, Coffee, Bath, Tv, Wind, Car, Sparkles, Phone, 
  ChevronLeft, ChevronRight, Check, Calendar, Users, Bed
} from "lucide-react";
import { useState } from "react";

const roomsData = {
  "presidential-suite": {
    name: "Presidential Suite",
    tagline: "The Pinnacle of Luxury",
    description: "Experience unparalleled grandeur in our Presidential Suite, where every detail has been crafted for the most discerning guests. Spanning an impressive 150 square meters, this magnificent suite offers panoramic city views, a private terrace, and dedicated butler service.",
    longDescription: "The Presidential Suite represents the ultimate expression of luxury hospitality. Upon entering, you're greeted by a grand foyer leading to an expansive living area adorned with hand-selected artwork and designer furnishings. The suite features a master bedroom with a custom-designed king bed, walk-in closet, and a spa-like bathroom with a freestanding soaking tub and rain shower. A separate dining room accommodates intimate dinners or business meetings, while the private terrace offers an outdoor lounge area with breathtaking views.",
    price: "€1,200",
    size: "150 m²",
    beds: "1 California King + Sofa Bed",
    maxGuests: 4,
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Private Terrace with City Views",
      "Dedicated Butler Service",
      "Jacuzzi & Steam Shower",
      "Separate Living & Dining Areas",
      "Private Bar with Premium Selection",
      "Executive Office Space",
      "Bang & Olufsen Entertainment System",
      "Walk-in Closet with Safe",
    ],
    features: [
      { icon: Wifi, text: "Complimentary High-Speed WiFi" },
      { icon: Coffee, text: "Nespresso Machine & Premium Tea" },
      { icon: Bath, text: "Marble Bathroom with Jacuzzi" },
      { icon: Tv, text: "85\" Smart TV with Netflix" },
      { icon: Wind, text: "Individual Climate Control" },
      { icon: Car, text: "Complimentary Airport Transfer" },
      { icon: Sparkles, text: "Twice Daily Housekeeping" },
      { icon: Phone, text: "24/7 Personal Concierge" },
    ],
  },
  "luxury-suite": {
    name: "Luxury Suite",
    tagline: "Spacious Elegance",
    description: "Our Luxury Suite offers an exceptional retreat with expansive living spaces, stunning city views, and an array of premium amenities designed for the sophisticated traveler.",
    longDescription: "The Luxury Suite seamlessly blends contemporary design with timeless elegance. The open-plan layout features a comfortable living area that flows into a dining space, perfect for entertaining or relaxing. Floor-to-ceiling windows flood the space with natural light and offer spectacular views. The bedroom sanctuary features a plush king bed with premium linens, while the marble bathroom includes a deep soaking tub and separate rain shower.",
    price: "€450",
    size: "85 m²",
    beds: "1 King",
    maxGuests: 2,
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Separate Living Room",
      "Premium Mini Bar",
      "Rain Shower & Soaking Tub",
      "Work Desk with Ergonomic Chair",
      "Premium Toiletries",
      "Pillow Menu",
      "In-Room Safe",
      "Blackout Curtains",
    ],
    features: [
      { icon: Wifi, text: "Complimentary High-Speed WiFi" },
      { icon: Coffee, text: "Nespresso Machine" },
      { icon: Bath, text: "Luxury Bathroom" },
      { icon: Tv, text: "55\" Smart TV" },
      { icon: Wind, text: "Climate Control" },
      { icon: Car, text: "Valet Parking Available" },
      { icon: Sparkles, text: "Daily Housekeeping" },
      { icon: Phone, text: "24/7 Room Service" },
    ],
  },
  "executive-room": {
    name: "Executive Room",
    tagline: "Business Meets Comfort",
    description: "Designed for the discerning business traveler, our Executive Room combines sophisticated comfort with essential amenities for productivity.",
    longDescription: "The Executive Room offers the perfect balance of work and relaxation. A dedicated workspace with ergonomic seating and complimentary high-speed internet ensures productivity, while plush bedding and a luxurious bathroom provide the comfort you need to recharge. Enjoy exclusive access to our Executive Lounge with complimentary refreshments and meeting facilities.",
    price: "€280",
    size: "55 m²",
    beds: "1 King or 2 Queens",
    maxGuests: 2,
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Executive Lounge Access",
      "Dedicated Work Desk",
      "Express Laundry Service",
      "Mini Bar",
      "Premium Coffee Machine",
      "Iron & Ironing Board",
      "Bathrobe & Slippers",
      "Complimentary Newspaper",
    ],
    features: [
      { icon: Wifi, text: "High-Speed WiFi" },
      { icon: Coffee, text: "Coffee & Tea Facilities" },
      { icon: Bath, text: "Rain Shower" },
      { icon: Tv, text: "50\" Smart TV" },
      { icon: Wind, text: "Climate Control" },
      { icon: Car, text: "Parking Available" },
      { icon: Sparkles, text: "Daily Housekeeping" },
      { icon: Phone, text: "24/7 Room Service" },
    ],
  },
  "deluxe-room": {
    name: "Deluxe Room",
    tagline: "Refined Comfort",
    description: "Our Deluxe Room offers elegant accommodations with thoughtful details and modern comforts for an exceptional stay.",
    longDescription: "The Deluxe Room provides a sanctuary of style and comfort. Thoughtfully designed interiors feature warm tones and premium materials, while large windows offer pleasant views of the city or gardens. The room includes a comfortable king bed or two double beds, a marble bathroom with premium amenities, and all the facilities needed for a memorable stay.",
    price: "€180",
    size: "40 m²",
    beds: "1 King or 2 Double",
    maxGuests: 2,
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "City or Garden View",
      "Premium Bedding",
      "Marble Bathroom",
      "Nespresso Machine",
      "Mini Fridge",
      "In-Room Safe",
      "Work Desk",
      "Complimentary Water",
    ],
    features: [
      { icon: Wifi, text: "Complimentary WiFi" },
      { icon: Coffee, text: "Coffee Facilities" },
      { icon: Bath, text: "Premium Bath" },
      { icon: Tv, text: "Smart TV" },
      { icon: Wind, text: "Air Conditioning" },
      { icon: Sparkles, text: "Daily Housekeeping" },
      { icon: Phone, text: "Room Service" },
    ],
  },
  "superior-room": {
    name: "Superior Room",
    tagline: "Classic Elegance",
    description: "Comfortable elegance with thoughtful amenities for a perfect stay in our Superior Room.",
    longDescription: "The Superior Room offers a comfortable retreat with classic design elements and modern amenities. Enjoy views of our beautiful gardens, relax on premium bedding, and take advantage of all the facilities that make German Hotel special. Perfect for both business and leisure travelers seeking quality accommodation.",
    price: "€150",
    size: "35 m²",
    beds: "1 Queen or 2 Twin",
    maxGuests: 2,
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Garden View",
      "Smart TV",
      "In-Room Safe",
      "Mini Fridge",
      "Work Desk",
      "Tea & Coffee",
      "Blackout Curtains",
      "Premium Toiletries",
    ],
    features: [
      { icon: Wifi, text: "WiFi Included" },
      { icon: Coffee, text: "Tea & Coffee" },
      { icon: Bath, text: "En-suite Bath" },
      { icon: Tv, text: "Smart TV" },
      { icon: Wind, text: "Air Conditioning" },
      { icon: Sparkles, text: "Daily Housekeeping" },
    ],
  },
  "standard-room": {
    name: "Standard Room",
    tagline: "Essential Comfort",
    description: "All the essentials for a comfortable stay at German Hotel in our well-appointed Standard Room.",
    longDescription: "Our Standard Room provides everything you need for a pleasant stay. While compact, the room has been thoughtfully designed to maximize comfort and functionality. Enjoy a restful night's sleep, modern amenities, and access to all hotel facilities including our restaurant, spa, and fitness center.",
    price: "€120",
    size: "28 m²",
    beds: "1 Double or 2 Twin",
    maxGuests: 2,
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "En-suite Bathroom",
      "Flat Screen TV",
      "Air Conditioning",
      "In-Room Safe",
      "Work Desk",
      "Complimentary Toiletries",
    ],
    features: [
      { icon: Wifi, text: "WiFi" },
      { icon: Bath, text: "Private Bath" },
      { icon: Tv, text: "TV" },
      { icon: Wind, text: "A/C" },
      { icon: Sparkles, text: "Housekeeping" },
    ],
  },
};

export default function RoomDetail() {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  
  const room = roomsData[id as keyof typeof roomsData];

  if (!room) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl text-navy mb-4">Room Not Found</h1>
            <Link to="/rooms" className="text-gold hover:underline">
              ← Back to Rooms
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % room.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + room.images.length) % room.images.length);

  return (
    <Layout>
      {/* Hero Gallery */}
      <section className="relative h-[70vh] min-h-[600px]">
        <motion.img
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={room.images[currentImage]}
          alt={room.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/30" />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-gold hover:text-navy transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-gold hover:text-navy transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Thumbnails */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {room.images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-16 h-12 rounded overflow-hidden border-2 transition-all ${
                index === currentImage ? "border-gold" : "border-white/30"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Back Link */}
        <Link
          to="/rooms"
          className="absolute top-24 left-6 flex items-center gap-2 text-white/80 hover:text-gold transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Rooms</span>
        </Link>
      </section>

      {/* Room Info */}
      <section className="section-padding bg-champagne">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block font-body text-sm uppercase tracking-[0.3em] text-gold mb-2"
              >
                {room.tagline}
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl md:text-5xl text-navy mb-6"
              >
                {room.name}
              </motion.h1>

              <div className="gold-line w-24 mb-8" />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed mb-6"
              >
                {room.description}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground leading-relaxed mb-8"
              >
                {room.longDescription}
              </motion.p>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
              >
                {room.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <feature.icon className="w-5 h-5 text-gold" />
                    <span className="text-sm text-navy">{feature.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* Amenities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="font-display text-2xl text-navy mb-6">Room Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-gold" />
                      <span className="text-muted-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="sticky top-32 bg-white p-8 rounded-lg shadow-xl"
              >
                <div className="text-center mb-6">
                  <span className="font-display text-4xl text-navy">{room.price}</span>
                  <span className="text-muted-foreground">/night</span>
                </div>

                <div className="gold-line w-full mb-6" />

                {/* Room Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Bed className="w-5 h-5" />
                      <span>Bed</span>
                    </div>
                    <span className="text-navy font-medium">{room.beds}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-5 h-5" />
                      <span>Guests</span>
                    </div>
                    <span className="text-navy font-medium">Up to {room.maxGuests}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-5 h-5" />
                      <span>Size</span>
                    </div>
                    <span className="text-navy font-medium">{room.size}</span>
                  </div>
                </div>

                {/* Book Button */}
                <Link to="/contact" className="btn-luxury w-full justify-center mb-4">
                  Book This Room
                </Link>

                <p className="text-center text-sm text-muted-foreground">
                  Best rate guaranteed. Free cancellation.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
