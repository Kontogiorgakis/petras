"use client";

import Image from "next/image";
import { IoCarSport, IoShield, IoStar, IoHeart, IoTrophy, IoGlobe, IoCall, IoMail, IoLocation } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const COMPANY_VALUES = [
  {
    icon: IoShield,
    title: "Trust & Reliability",
    description: "We build lasting relationships through honest service and dependable vehicles that you can count on.",
    color: "from-blue-500 to-primary",
  },
  {
    icon: IoHeart,
    title: "Customer First",
    description:
      "Your satisfaction is our priority. We go above and beyond to ensure every rental experience exceeds expectations.",
    color: "from-red-500 to-rose-600",
  },
  {
    icon: IoStar,
    title: "Quality Excellence",
    description:
      "From our premium fleet to our professional service, we maintain the highest standards in everything we do.",
    color: "from-yellow-500 to-amber-600",
  },
  {
    icon: IoGlobe,
    title: "Local Expertise",
    description: "As a local Crete business, we know the island inside out and provide personalized recommendations.",
    color: "from-green-500 to-emerald-600",
  },
] as const;

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Petros Nikolakis",
    role: "Founder & CEO",
    image: "/home/sitia.jpg", // Using placeholder
    description:
      "With over 15 years in the automotive industry, Petros founded Petras Rental with a vision to provide exceptional car rental services in Crete.",
  },
  {
    id: 2,
    name: "Maria Petrakis",
    role: "Operations Manager",
    image: "/home/sitia.jpg", // Using placeholder
    description:
      "Maria ensures our operations run smoothly and our customers receive the best possible service experience.",
  },
  {
    id: 3,
    name: "Yannis Kouris",
    role: "Fleet Manager",
    image: "/home/sitia.jpg", // Using placeholder
    description:
      "Yannis oversees our premium fleet, ensuring every vehicle meets our high standards for safety and quality.",
  },
  {
    id: 4,
    name: "Sophia Dalianis",
    role: "Customer Relations",
    image: "/home/sitia.jpg", // Using placeholder
    description: "Sophia is dedicated to making sure every customer has an unforgettable experience exploring Crete.",
  },
] as const;

const COMPANY_STATS = [
  {
    number: "15+",
    label: "Years of Experience",
    description: "Serving customers since 2008",
    gradient: "from-primary to-[#256bae]",
  },
  {
    number: "5000+",
    label: "Happy Customers",
    description: "Satisfied travelers each year",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    number: "50+",
    label: "Premium Vehicles",
    description: "Modern, well-maintained fleet",
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    number: "24/7",
    label: "Customer Support",
    description: "Always here when you need us",
    gradient: "from-violet-600 to-purple-600",
  },
] as const;

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 mt-12">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[#256bae]/5"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-[#256bae]/10 backdrop-blur-xl border border-primary/20 text-primary px-6 py-3 rounded-2xl text-sm font-semibold mb-8 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-[#256bae]/20 rounded-lg flex items-center justify-center">
                  <IoCarSport className="text-primary text-sm" />
                </div>
                <span>About Petras Rental</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="text-slate-900">Your Trusted </span>
                <span className="bg-gradient-to-r from-primary via-[#256bae] to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                  Car Rental Partner
                </span>
                <span className="text-slate-900"> in Crete</span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
                For over 15 years, Petras Rental has been the premier choice for travelers exploring the beautiful
                island of Crete. We combine local expertise with premium vehicles to create unforgettable journeys.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-primary to-[#256bae] hover:from-primary/90 hover:to-[#256bae]/90 text-white px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <IoCall className="mr-2" />
                  Contact Us
                </Button>
                <Button
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/5 px-8 py-3 rounded-2xl"
                >
                  View Our Fleet
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                <Image src="/home/sitia.jpg" alt="Beautiful Crete landscape" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 shadow-xl shadow-primary/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-[#256bae]/20 rounded-xl flex items-center justify-center">
                    <IoTrophy className="text-primary text-xl" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-primary to-[#256bae] bg-clip-text text-transparent">
                      5000+
                    </div>
                    <div className="text-sm text-slate-600">Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              <span className="text-slate-900">Our </span>
              <span className="bg-gradient-to-r from-primary via-[#256bae] to-indigo-600 bg-clip-text text-transparent">
                Story
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-12">
              Founded in 2008 by Petros Nikolakis, Petras Rental started with a simple mission: to help visitors
              discover the authentic beauty of Crete through reliable, comfortable transportation. What began as a small
              family business with just five vehicles has grown into one of the island&apos;s most trusted car rental
              services.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Today, we&apos;re proud to offer a diverse fleet of over 50 premium vehicles, from compact city cars to
              spacious SUVs, all maintained to the highest standards. Our local expertise and commitment to exceptional
              service have made us the preferred choice for thousands of travelers seeking to explore Crete&apos;s
              stunning landscapes, historic sites, and hidden gems.
            </p>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[#256bae]/5"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              <span className="text-slate-900">Our </span>
              <span className="bg-gradient-to-r from-primary via-[#256bae] to-indigo-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              These core principles guide everything we do and shape every interaction with our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_VALUES.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white/95 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center h-full relative overflow-hidden">
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                  ></div>

                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative`}
                  >
                    <value.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed relative">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              <span className="text-slate-900">Meet Our </span>
              <span className="bg-gradient-to-r from-primary via-[#256bae] to-indigo-600 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The passionate professionals behind Petras Rental, dedicated to making your Crete experience
              extraordinary.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="group">
                <div className="bg-white/95 backdrop-blur-xl border border-white/60 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-[#256bae]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6 relative">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[#256bae]/5"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
              <span className="text-slate-900">By the </span>
              <span className="bg-gradient-to-r from-primary via-[#256bae] to-indigo-600 bg-clip-text text-transparent">
                Numbers
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence is reflected in these achievements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_STATS.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white/95 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center relative overflow-hidden">
                  {/* Animated gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <div
                    className={`text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent relative`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-slate-700 mb-2 relative">{stat.label}</div>
                  <div className="text-sm text-slate-600 relative">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary via-[#256bae] to-indigo-700 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Ready to Explore Crete?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Get in touch with our friendly team to book your perfect vehicle and start planning your Crete
                adventure.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center justify-center gap-3 text-blue-100">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <IoCall className="text-2xl text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <div className="text-sm">+30 123 456 7890</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 text-blue-100">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <IoMail className="text-2xl text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-sm">info@petrasrental.gr</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 text-blue-100">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <IoLocation className="text-2xl text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Location</div>
                    <div className="text-sm">Heraklion, Crete</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-white text-primary hover:bg-blue-50 px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <IoCall className="mr-2" />
                  Call Now
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-2xl backdrop-blur-sm"
                >
                  <IoMail className="mr-2" />
                  Send Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
