"use client";

import { useState } from "react";
import Image from "next/image";
import { IoCall, IoMail, IoLocation, IoTime, IoSend, IoLogoWhatsapp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const CONTACT_METHODS = [
  {
    icon: IoCall,
    key: "mobile",
    action: "tel:+306936685610",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: IoCall,
    key: "landline",
    action: "tel:+302843024849",
    color: "from-blue-500 to-primary",
  },
  {
    icon: IoLogoWhatsapp,
    key: "messaging",
    action: "https://wa.me/306936685610",
    color: "from-green-600 to-teal-600",
  },
  {
    icon: IoMail,
    key: "email",
    action: "mailto:info@petras-rentals.gr",
    color: "from-purple-500 to-indigo-600",
  },
] as const;

export default function ContactUs() {
  const t = useTranslations("contactUs");

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
    alert(t("form.success"));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 mt-12 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[#256bae]/5"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-[#256bae]/10 backdrop-blur-xl border border-primary/20 text-primary px-6 py-3 rounded-2xl text-sm font-semibold mb-8 shadow-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-[#256bae]/20 rounded-lg flex items-center justify-center">
                <IoMail className="text-primary text-sm" />
              </div>
              <span>{t("hero.badge.title")}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="text-slate-900">{t("hero.title.main")}</span>
              <span className="bg-gradient-to-r from-primary via-[#256bae] to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                {t("hero.title.highlight")}
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">{t("hero.description")}</p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 w-full">
            {CONTACT_METHODS.map((method, index) => (
              <a key={index} href={method.action} className="group block h-full">
                <div className="bg-white/95 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center relative overflow-hidden h-full flex flex-col justify-between">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                  ></div>

                  <div className="flex-1 flex flex-col justify-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative`}
                    >
                      <method.icon className="text-white text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{t(`methods.${method.key}.title`)}</h3>
                    <p className="text-sm text-slate-600 mb-3">{t(`methods.${method.key}.description`)}</p>
                    <p className="text-sm font-semibold text-primary">{t(`methods.${method.key}.value`)}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 w-full">
            {/* Contact Form */}
            <div>
              <div className="bg-white/95 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold mb-6">
                  <span className="text-slate-900">{t("form.title.main")}</span>
                  <span className="bg-gradient-to-r from-primary via-[#256bae] to-indigo-600 bg-clip-text text-transparent">
                    {t("form.title.highlight")}
                  </span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        {t("form.fields.name.label")}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder={t("form.fields.name.placeholder")}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        {t("form.fields.email.label")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder={t("form.fields.email.placeholder")}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        {t("form.fields.phone.label")}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder={t("form.fields.phone.placeholder")}
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                        {t("form.fields.subject.label")}
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder={t("form.fields.subject.placeholder")}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      {t("form.fields.message.label")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                      placeholder={t("form.fields.message.placeholder")}
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
                        <span>{t("form.button.sending")}</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <IoSend className="text-lg" />
                        <span>{t("form.button.send")}</span>
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
                  <span className="text-slate-900">{t("office.title.main")}</span>
                  <span className="bg-gradient-to-r from-primary via-[#256bae] to-indigo-600 bg-clip-text text-transparent">
                    {t("office.title.highlight")}
                  </span>
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-[#256bae]/20 rounded-xl flex items-center justify-center">
                      <IoLocation className="text-primary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{t("office.address.title")}</h4>
                      <p className="text-slate-600 whitespace-pre-line">{t("office.address.value")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl flex items-center justify-center">
                      <IoCall className="text-green-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{t("office.phones.title")}</h4>
                      <p className="text-slate-600">
                        {t("office.phones.mobile")}
                        <br />
                        {t("office.phones.landline")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-xl flex items-center justify-center">
                      <IoMail className="text-primary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{t("office.email.title")}</h4>
                      <p className="text-slate-600">{t("office.email.value")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white/95 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">
                  <span className="text-slate-900">{t("hours.title.main")}</span>
                  <span className="bg-gradient-to-r from-primary via-[#256bae] to-indigo-600 bg-clip-text text-transparent">
                    {t("hours.title.highlight")}
                  </span>
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="font-medium text-slate-900">{t("hours.schedule.days")}</span>
                    <span className="text-slate-600">{t("hours.schedule.hours")}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="font-medium text-slate-900">{t("hours.schedule.everyday")}</span>
                    <span className="text-slate-600">{t("hours.schedule.dailyService")}</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <div className="flex items-center gap-3">
                    <IoTime className="text-primary text-xl" />
                    <div>
                      <p className="font-semibold text-slate-900">{t("hours.notice.title")}</p>
                      <p className="text-sm text-slate-600">{t("hours.notice.description")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-slate-900">{t("map.title.main")}</span>
              <span className="bg-gradient-to-r from-primary via-[#256bae] to-indigo-600 bg-clip-text text-transparent">
                {t("map.title.highlight")}
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">{t("map.description")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8 w-full">
            {/* Building Image */}
            <Card className="shadow-xl border-0 overflow-hidden bg-white/95 backdrop-blur-xl w-full">
              <div className="relative h-64 sm:h-80 lg:h-96 w-full">
                <Image src="/about/store.jpg" alt="Petras Rental Office Building" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{t("map.building.title")}</h3>
                  <p className="text-sm sm:text-base text-white/90">{t("map.building.address")}</p>
                </div>
              </div>
            </Card>

            {/* Interactive Map */}
            <Card className="shadow-xl border-0 overflow-hidden bg-white/95 backdrop-blur-xl w-full max-w-full">
              <div className="h-64 sm:h-80 lg:h-96 bg-slate-100 w-full max-w-full overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6394.5713578!2d26.1297401!3d35.1953265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f11.5!3m3!1m2!1s0x1490ed919ebba6c3:0xfb7b7db08facbe7c!2s!5e0!3m2!1sen!2sgr!4v1640000000000!5m2!1sen!2sgr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, width: "100%", height: "100%", maxWidth: "100%" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Petras Rental Office Location"
                  className="w-full h-full block"
                />
              </div>
            </Card>
          </div>

          {/* Enhanced Location Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
            <Card className="bg-white/95 backdrop-blur-xl border border-white/60 p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-[#256bae]/20 rounded-xl flex items-center justify-center">
                  <IoLocation className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{t("map.info.address.title")}</h4>
                  <p className="text-sm text-slate-600">{t("map.info.address.description")}</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Papandreou+Andrea+10,+Sitia+72300,+Lassithi,+Crete"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-primary transition-colors group"
              >
                <p className="group-hover:underline whitespace-pre-line">{t("office.address.value")}</p>
              </a>
            </Card>

            <Card className="bg-white/95 backdrop-blur-xl border border-white/60 p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl flex items-center justify-center">
                  <IoCall className="text-green-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{t("map.info.contact.title")}</h4>
                  <p className="text-sm text-slate-600">{t("map.info.contact.description")}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+306936685610"
                  className="text-slate-700 hover:text-green-600 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="group-hover:underline">{t("methods.mobile.value")}</span>
                  <span className="text-xs text-slate-500">{t("map.info.contact.mobile")}</span>
                </a>
                <a
                  href="tel:+302843024849"
                  className="text-slate-700 hover:text-green-600 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="group-hover:underline">{t("methods.landline.value")}</span>
                  <span className="text-xs text-slate-500">{t("map.info.contact.landline")}</span>
                </a>
              </div>
            </Card>

            <Card className="bg-white/95 backdrop-blur-xl border border-white/60 p-6 shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-xl flex items-center justify-center">
                  <IoTime className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{t("map.info.hours.title")}</h4>
                  <p className="text-sm text-slate-600">{t("map.info.hours.description")}</p>
                </div>
              </div>
              <p className="text-slate-700 whitespace-pre-line">{t("map.info.hours.schedule")}</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
