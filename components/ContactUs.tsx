"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  IoCarSport,
  IoCall,
  IoMail,
  IoLocation,
  IoTime,
  IoSend,
  IoCheckmarkCircle,
  IoGlobe,
  IoLogoWhatsapp,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io5";
import { Button } from "@/components/ui/button";

// Dynamic import for the map component to avoid SSR issues
const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center rounded-3xl">
      <div className="text-center">
        <IoLocation className="text-6xl text-slate-400 mx-auto mb-4" />
        <p className="text-slate-600 text-lg font-medium">Loading Map...</p>
      </div>
    </div>
  ),
});

const CONTACT_METHODS = [
  {
    icon: IoCall,
    title: "Phone",
    description: "Call us directly",
    value: "+30 123 456 7890",
    action: "tel:+301234567890",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: IoMail,
    title: "Email",
    description: "Send us a message",
    value: "info@petrasrental.gr",
    action: "mailto:info@petrasrental.gr",
    color: "from-blue-500 to-primary",
  },
  {
    icon: IoLogoWhatsapp,
    title: "WhatsApp",
    description: "Chat with us",
    value: "+30 123 456 7890",
    action: "https://wa.me/301234567890",
    color: "from-green-600 to-teal-600",
  },
  {
    icon: IoLocation,
    title: "Visit Us",
    description: "Find our office",
    value: "Heraklion, Crete, Greece",
    action: "#location",
    color: "from-red-500 to-rose-600",
  },
] as const;

const BUSINESS_HOURS = [
  {
    day: "Monday - Friday",
    hours: "8:00 AM - 8:00 PM",
  },
  {
    day: "Saturday",
    hours: "9:00 AM - 6:00 PM",
  },
  {
    day: "Sunday",
    hours: "10:00 AM - 4:00 PM",
  },
] as const;

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 mt-12">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[#256bae]/5"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-[#256bae]/10 backdrop-blur-xl border border-primary/20 text-primary px-6 py-3 rounded-2xl text-sm font-semibold mb-8 shadow-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-[#256bae]/20 rounded-lg flex items-center justify-center">
                <IoMail className="text-primary text-sm" />
              </div>
              <span>Get in Touch</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="text-slate-900">Contact </span>
              <span className="bg-gradient-to-r from-primary via-[#256bae] to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                Petras Rental
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Ready to explore Crete? Get in touch with our friendly team for personalized service, instant quotes, and
              expert advice on your perfect vehicle.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {CONTACT_METHODS.map((method, index) => (
              <a key={index} href={method.action} className="group block">
                <div className="bg-white/95 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                  ></div>

                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative`}
                  >
                    <method.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{method.title}</h3>
                  <p className="text-sm text-slate-600 mb-3">{method.description}</p>
                  <p className="text-sm font-semibold text-primary">{method.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white/95 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold mb-6">
                  <span className="text-slate-900">Send us a </span>
                  <span className="bg-gradient-to-r from-primary via-[#256bae] to-indigo-600 bg-clip-text text-transparent">
                    Message
                  </span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="+30 123 456 7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a subject</option>
                        <option value="rental-inquiry">Rental Inquiry</option>
                        <option value="booking-modification">Booking Modification</option>
                        <option value="customer-support">Customer Support</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your rental needs, travel dates, or any questions you have..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-[#256bae] hover:from-primary/90 hover:to-[#256bae]/90 text-white py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <IoSend className="text-lg" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information & Business Hours */}
            <div className="space-y-8">
              {/* Office Information */}
              <div className="bg-white/95 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">
                  <span className="text-slate-900">Office </span>
                  <span className="bg-gradient-to-r from-primary via-[#256bae] to-indigo-600 bg-clip-text text-transparent">
                    Information
                  </span>
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-[#256bae]/20 rounded-xl flex items-center justify-center">
                      <IoLocation className="text-primary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Address</h4>
                      <p className="text-slate-600">
                        123 Main Street
                        <br />
                        Heraklion 71202
                        <br />
                        Crete, Greece
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl flex items-center justify-center">
                      <IoCall className="text-green-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">24/7 Support</h4>
                      <p className="text-slate-600">
                        +30 123 456 7890
                        <br />
                        Emergency: +30 987 654 3210
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-xl flex items-center justify-center">
                      <IoMail className="text-primary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                      <p className="text-slate-600">
                        info@petrasrental.gr
                        <br />
                        support@petrasrental.gr
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white/95 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">
                  <span className="text-slate-900">Business </span>
                  <span className="bg-gradient-to-r from-primary via-[#256bae] to-indigo-600 bg-clip-text text-transparent">
                    Hours
                  </span>
                </h3>

                <div className="space-y-4">
                  {BUSINESS_HOURS.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-slate-100 last:border-b-0"
                    >
                      <span className="font-medium text-slate-900">{schedule.day}</span>
                      <span className="text-slate-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <div className="flex items-center gap-3">
                    <IoTime className="text-primary text-xl" />
                    <div>
                      <p className="font-semibold text-slate-900">Emergency Support</p>
                      <p className="text-sm text-slate-600">24/7 roadside assistance available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-slate-900">Find </span>
              <span className="bg-gradient-to-r from-primary via-[#256bae] to-indigo-600 bg-clip-text text-transparent">
                Our Office
              </span>
            </h2>
            <p className="text-lg text-slate-600">
              Located in the heart of Heraklion, easily accessible from the airport and city center.
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-xl border border-white/60 rounded-3xl overflow-hidden shadow-xl">
            <MapComponent />
          </div>
        </div>
      </section>
    </div>
  );
}
