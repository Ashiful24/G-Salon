"use client";

import Image from "next/image";
import { useState } from "react";

type Language = "en" | "bn";

const content = {
  en: {
    navItems: ["Home", "About", "Services", "Pricing", "Team", "Gallery"],
    appointment: "Book an appointment",
    eyebrow: "Premium grooming studio",
    title: "Elevate Your Style",
    intro:
      "Modern cuts, signature shaves, and calm care in a black and gold space designed for comfort, confidence, and everyday polish.",
    bookButton: "Book appointment",
    servicesButton: "View services",
    imageKicker: "Since 2000",
    imageTitle: "Sharp looks daily",
    stats: [
      { value: "10000+", label: "Satisfied Clients" },
      { value: "4.8/5", label: "Ratings" },
      { value: "26+", label: "Years of Experience" },
    ],
    aboutKicker: "Who we are",
    aboutTitle: "Gourango Salon at your service since 2000",
    aboutText:
      "We blend classic barbering with modern salon comfort. Every appointment starts with a quick consultation, then our stylists shape the service around your hair, lifestyle, and personality.",
    hours: [
      ["MON", "10:00 AM - 10:00 PM"],
      ["TUE", "10:00 AM - 10:00 PM"],
      ["WED", "10:00 AM - 10:00 PM"],
      ["THU", "10:00 AM - 10:00 PM"],
      ["FRI", "10:00 AM - 10:00 PM"],
      ["SAT", "10:00 AM - 10:00 PM"],
      ["SUN", "10:00 AM - 10:00 PM"],
    ],
    differenceKicker: "What makes us different?",
    differenceTitle: "Detail, comfort, and consistent style.",
    differenceText:
      "From consultation to final mirror check, our team keeps every service calm, precise, and easy to book.",
    featureText:
      "Premium care with clean finishing and a client-first experience.",
    features: [
      "Personalized Consultation",
      "Attention to Detail",
      "Premium Products",
      "Skilled Vision",
      "Friendly Atmosphere",
      "Customer Satisfaction",
    ],
    servicesKicker: "Our amazing services",
    servicesTitle: "Grooming for every occasion",
    viewAll: "View all services",
    services: [
      {
        title: "Classic Haircut",
        text: "Sharp, clean cuts tailored to your face shape and personal style.",
      },
      {
        title: "Straight Razor Shave",
        text: "Hot towel prep with a smooth razor finish for a refined look.",
      },
      {
        title: "Beard Trim",
        text: "Shape, line, and condition your beard for a polished finish.",
      },
      {
        title: "Hair Styling",
        text: "Modern styling, blow dry, and product guidance for every occasion.",
      },
    ],
    ctaKicker: "Ready for a fresh look?",
    ctaTitle: "Book your next haircut, shave, or styling session today.",
    callNow: "Call now",
  },
  bn: {
    navItems: ["হোম", "আমাদের সম্পর্কে", "সার্ভিস", "মূল্য", "টিম", "গ্যালারি"],
    appointment: "অ্যাপয়েন্টমেন্ট বুক করুন",
    eyebrow: "প্রিমিয়াম গ্রুমিং স্টুডিও",
    title: "আপনার স্টাইলকে আরও উন্নত করুন",
    intro:
      "মডার্ন হেয়ার কাট, সিগনেচার শেভ এবং আরামদায়ক যত্ন, সবকিছুই কালো ও গোল্ড প্রিমিয়াম পরিবেশে।",
    bookButton: "অ্যাপয়েন্টমেন্ট বুক করুন",
    servicesButton: "সার্ভিস দেখুন",
    imageKicker: "২০০০ সাল থেকে",
    imageTitle: "প্রতিদিন নিখুঁত লুক",
    stats: [
      { value: "১০০০০+", label: "সন্তুষ্ট ক্লায়েন্ট" },
      { value: "৪.৮/৫", label: "রেটিংস" },
      { value: "২৬+", label: "বছরের অভিজ্ঞতা" },
    ],
    aboutKicker: "আমরা কারা",
    aboutTitle: "২০০০ সাল থেকে আপনার সেবায় Gourango Salon",
    aboutText:
      "আমরা ক্লাসিক বারবারিং-এর সাথে আধুনিক সেলুন কমফোর্ট মিলিয়ে কাজ করি। প্রতিটি অ্যাপয়েন্টমেন্ট শুরু হয় ছোট কনসালটেশন দিয়ে, তারপর আপনার চুল, লাইফস্টাইল এবং ব্যক্তিত্ব অনুযায়ী সার্ভিস দেওয়া হয়।",
    hours: [
      ["সোম", "সকাল ১০টা - রাত ১০টা"],
      ["মঙ্গল", "সকাল ১০টা - রাত ১০টা"],
      ["বুধ", "সকাল ১০টা - রাত ১০টা"],
      ["বৃহস্পতি", "সকাল ১০টা - রাত ১০টা"],
      ["শুক্র", "সকাল ১০টা - রাত ১০টা"],
      ["শনি", "সকাল ১০টা - রাত ১০টা"],
      ["রবি", "সকাল ১০টা - রাত ১০টা"],
    ],
    differenceKicker: "আমাদের বিশেষত্ব কী?",
    differenceTitle: "ডিটেইল, কমফোর্ট এবং ধারাবাহিক স্টাইল।",
    differenceText:
      "কনসালটেশন থেকে শেষ মিরর চেক পর্যন্ত, আমাদের টিম প্রতিটি সার্ভিস শান্ত, নিখুঁত এবং সহজ করে তোলে।",
    featureText:
      "নিখুঁত ফিনিশিং এবং ক্লায়েন্ট-ফার্স্ট অভিজ্ঞতার সাথে প্রিমিয়াম যত্ন।",
    features: [
      "পার্সোনাল কনসালটেশন",
      "ডিটেইলে মনোযোগ",
      "প্রিমিয়াম প্রোডাক্ট",
      "দক্ষ স্টাইলিং ভিশন",
      "বন্ধুসুলভ পরিবেশ",
      "কাস্টমার সন্তুষ্টি",
    ],
    servicesKicker: "আমাদের অসাধারণ সার্ভিস",
    servicesTitle: "প্রতিটি উপলক্ষের জন্য গ্রুমিং",
    viewAll: "সব সার্ভিস দেখুন",
    services: [
      {
        title: "ক্লাসিক হেয়ারকাট",
        text: "আপনার মুখের গঠন ও ব্যক্তিগত স্টাইল অনুযায়ী ক্লিন এবং শার্প কাট।",
      },
      {
        title: "স্ট্রেইট রেজর শেভ",
        text: "হট টাওয়েল প্রেপসহ স্মুথ রেজর ফিনিশ, প্রিমিয়াম লুকের জন্য।",
      },
      {
        title: "বিয়ার্ড ট্রিম",
        text: "দাড়ি শেপ, লাইন এবং কন্ডিশনিং করে আরও পলিশড ফিনিশ।",
      },
      {
        title: "হেয়ার স্টাইলিং",
        text: "মডার্ন স্টাইলিং, ব্লো ড্রাই এবং যেকোনো অনুষ্ঠানের জন্য প্রোডাক্ট গাইড।",
      },
    ],
    ctaKicker: "নতুন লুকের জন্য প্রস্তুত?",
    ctaTitle: "আজই আপনার পরবর্তী হেয়ারকাট, শেভ বা স্টাইলিং সেশন বুক করুন।",
    callNow: "এখনই কল করুন",
  },
};

const serviceImages = [
  { src: "/service-classic.png", focus: "45% 24%" },
  { src: "/service-shave.png", focus: "48% 55%" },
  { src: "/service-trim.png", focus: "50% 22%" },
  { src: "/service-style.png", focus: "35% 35%" },
];

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const copy = content[language];

  return (
    <main className="min-h-screen overflow-hidden bg-[#080706] text-[#f5eee6]">
      <section className="relative isolate px-5 py-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(196,135,85,0.24),transparent_34%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,#11100f_0%,#080706_68%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(#f5eee6_1px,transparent_1px),linear-gradient(90deg,#f5eee6_1px,transparent_1px)] [background-size:72px_72px]" />

        <header className="mx-auto flex max-w-7xl items-center justify-between border border-white/10 bg-black/35 px-5 py-4 backdrop-blur-xl">
          <a href="#" className="leading-none">
            <p className="font-serif text-2xl text-[#f5eee6]">
              Gourango Salon
            </p>
            <p className="text-[10px] uppercase tracking-[0.55em] text-[#c48755]">
              Premium
            </p>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {copy.navItems.map((item, index) => (
              <a
                className="px-4 py-3 text-sm text-stone-300 transition hover:bg-white/10 hover:text-white"
                href={`#${["home", "about", "services", "pricing", "team", "gallery"][index]}`}
                key={item}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex border border-white/10 bg-black/35 p-1">
              {(["en", "bn"] as const).map((item) => (
                <button
                  aria-pressed={language === item}
                  className={`px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                    language === item
                      ? "bg-[#c48755] text-[#130e0a]"
                      : "text-stone-300 hover:text-white"
                  }`}
                  key={item}
                  onClick={() => setLanguage(item)}
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>

            <a
              className="hidden bg-[#c48755] px-5 py-3 text-sm font-semibold text-[#130e0a] transition hover:bg-[#e0a875] sm:inline-flex"
              href="#appointment"
            >
              {copy.appointment}
            </a>
          </div>
        </header>

        <div className="mx-auto grid max-w-7xl gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm uppercase tracking-[0.45em] text-[#c48755]">
              {copy.eyebrow}
            </p>
            <h1 className="font-serif text-6xl leading-[0.92] tracking-[-0.05em] text-white sm:text-7xl lg:text-8xl">
              {copy.title}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-stone-300">
              {copy.intro}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                className="border border-[#c48755] bg-[#c48755] px-7 py-4 text-center font-semibold text-[#130e0a] transition hover:bg-[#e0a875]"
                href="#appointment"
              >
                {copy.bookButton}
              </a>
              <a
                className="border border-white/15 px-7 py-4 text-center font-semibold text-white transition hover:border-[#c48755] hover:text-[#c48755]"
                href="#services"
              >
                {copy.servicesButton}
              </a>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-[1fr_170px]">
            <div className="relative min-h-[420px] overflow-hidden border border-white/10 bg-stone-950">
              <Image
                alt="Black and white view of Gourango Salon chairs"
                className="object-cover grayscale contrast-110"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                src="/gourango-salon-hero.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 border border-white/10 bg-black/55 p-5 backdrop-blur-md">
                <p className="text-sm uppercase tracking-[0.35em] text-[#c48755]">
                  {copy.imageKicker}
                </p>
                <p className="mt-2 font-serif text-3xl">{copy.imageTitle}</p>
              </div>
            </div>

            <div className="grid gap-5">
              {copy.stats.map((stat) => (
                <div
                  className="border border-white/10 bg-[#17120f]/90 p-6"
                  key={stat.label}
                >
                  <p className="font-serif text-4xl text-[#f5eee6]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-stone-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-y border-white/10 bg-[#0d0b0a] px-5 py-16 sm:px-8 lg:px-12"
        id="about"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden border border-white/10">
            <Image
              alt="Client getting a haircut at Gourango Salon"
              className="object-cover grayscale"
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              src="/gourango-about.png"
            />
            <div className="absolute inset-0 bg-black/25" />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#c48755]">
              {copy.aboutKicker}
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-5xl leading-tight text-white sm:text-6xl">
              {copy.aboutTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
              {copy.aboutText}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
              {copy.hours.map(([day, time]) => (
                <div
                  className="border border-[#4d3325] bg-[#17120f] p-4"
                  key={day}
                >
                  <p className="font-serif text-2xl text-white">{day}</p>
                  <p className="mt-2 text-xs text-stone-400">{time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12" id="services">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-[#c48755]">
                {copy.differenceKicker}
              </p>
              <h2 className="mt-4 font-serif text-5xl leading-tight text-white">
                {copy.differenceTitle}
              </h2>
              <p className="mt-5 leading-8 text-stone-400">
                {copy.differenceText}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
              {copy.features.map((feature, index) => (
                <div
                  className={`border border-white/10 p-7 ${
                    index % 2 === 0 ? "bg-[#1a1411]" : "bg-[#0f0d0c]"
                  }`}
                  key={feature}
                >
                  <p className="font-serif text-2xl text-white">{feature}</p>
                  <p className="mt-4 text-sm leading-6 text-stone-400">
                    {copy.featureText}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-[#c48755]">
                {copy.servicesKicker}
              </p>
              <h2 className="mt-4 font-serif text-5xl text-white">
                {copy.servicesTitle}
              </h2>
            </div>
            <a
              className="w-fit border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#c48755] hover:text-[#c48755]"
              href="#pricing"
            >
              {copy.viewAll}
            </a>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {copy.services.map((service, index) => (
              <article
                className="group grid overflow-hidden border border-white/10 bg-[#15110f] transition hover:border-[#c48755] sm:grid-cols-[180px_1fr]"
                key={service.title}
              >
                <div className="relative min-h-[300px] overflow-hidden bg-stone-950 sm:min-h-full">
                  <Image
                    alt={`${service.title} service at Gourango Salon`}
                    className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    fill
                    sizes="(min-width: 1024px) 180px, 100vw"
                    src={serviceImages[index].src}
                    style={{ objectPosition: serviceImages[index].focus }}
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-2xl text-white">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-stone-400">
                    {service.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-12" id="appointment">
        <div className="mx-auto max-w-7xl border border-[#4d3325] bg-[#17120f] p-8 text-center sm:p-12">
          <p className="text-sm uppercase tracking-[0.4em] text-[#c48755]">
            {copy.ctaKicker}
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-5xl leading-tight text-white">
            {copy.ctaTitle}
          </h2>
          <a
            className="mt-8 inline-flex bg-[#c48755] px-8 py-4 font-semibold text-[#130e0a] transition hover:bg-[#e0a875]"
            href="tel:+8801700000000"
          >
            {copy.callNow}
          </a>
        </div>
      </section>
    </main>
  );
}
