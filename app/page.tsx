"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Language = "en" | "bn";

const PHONE_HREF = "tel:01616275857";
const socialLinks = [
  { label: "Facebook" },
  { label: "Instagram" },
  { label: "YouTube" },
];

function SocialIcon({ label }: { label: string }) {
  if (label === "Facebook") {
    return (
      <svg
        aria-hidden="true"
        className="size-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14 8.7V6.9c0-.8.5-1 1-1h2V2.4C16.7 2.3 15.6 2 14.3 2c-2.9 0-4.9 1.8-4.9 5v1.7H6.2v3.9h3.2V22h4v-9.4h3.2l.5-3.9H14Z" />
      </svg>
    );
  }

  if (label === "YouTube") {
    return (
      <svg
        aria-hidden="true"
        className="size-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.8 4 12 4 12 4s-3.8 0-6.7.2c-.4.1-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.8v1.7c0 1.8.2 3.6.2 3.6s.2 1.5.8 2.1c.8.8 1.8.8 2.3.9 1.7.2 6.5.2 6.5.2s3.8 0 6.7-.2c.4-.1 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.8.2-3.6v-1.7c0-1.8-.2-3.6-.2-3.6ZM10.1 14.7V8.5l5.8 3.1-5.8 3.1Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        height="16"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
        width="16"
        x="4"
        y="4"
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" fill="currentColor" r="1.2" />
    </svg>
  );
}

const content = {
  en: {
    navItems: ["Home", "About", "Services", "Packages", "Team", "Gallery"],
    appointment: "Book an appointment",
    eyebrow: "Men's Grooming Lounge",
    title: "Wear Your Confidence",
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
    showLess: "Show less",
    startFrom: "Start from",
    close: "Close",
    servicePackagesTitle: "Choose your service",
    services: [
      {
        title: "Classic Haircut",
        text: "Sharp, clean cuts tailored to your face shape and personal style.",
        startFrom: "৳100",
        packages: [
          {
            name: "Basic",
            price: "৳100",
            details:
              "Haircut with clean finishing, powder, brush, and final neck clean.",
          },
          {
            name: "Standard",
            price: "৳150",
            details: "Basic haircut plus shampoo wash and dry finish.",
          },
          {
            name: "Premium",
            price: "৳200",
            details: "Standard haircut plus gel styling and final set.",
          },
        ],
      },
      {
        title: "Straight Razor Shave",
        text: "Hot towel prep with a smooth razor finish for a refined look.",
        startFrom: "৳80",
        packages: [
          {
            name: "Foam Shave",
            price: "৳80",
            details: "Classic foam shave with clean razor finishing.",
          },
          {
            name: "Gel Shave",
            price: "৳120",
            details: "Smooth gel shave for sensitive skin and sharper lines.",
          },
          {
            name: "Hot Towel Shave",
            price: "৳180",
            details: "Hot towel prep, premium shave, aftershave, and moisturizer.",
          },
        ],
      },
      {
        title: "Beard Trim",
        text: "Shape, line, and condition your beard for a polished finish.",
        startFrom: "৳100",
        packages: [
          {
            name: "Basic Beard Shape",
            price: "৳100",
            details: "Beard trim, clean line-up, and brush finish.",
          },
          {
            name: "Standard Beard Trim",
            price: "৳150",
            details: "Shape, razor line-up, and light conditioning.",
          },
          {
            name: "Premium Beard Styling",
            price: "৳220",
            details: "Detailed shaping, razor work, beard oil, and final set.",
          },
        ],
      },
      {
        title: "Hair Styling",
        text: "Modern styling, blow dry, and product guidance for every occasion.",
        startFrom: "৳150",
        packages: [
          {
            name: "Basic Styling",
            price: "৳150",
            details: "Blow dry and simple product styling.",
          },
          {
            name: "Standard Styling",
            price: "৳220",
            details: "Wash, blow dry, brush set, and light product finish.",
          },
          {
            name: "Premium Styling",
            price: "৳300",
            details: "Event-ready styling with gel/wax, volume, and final set.",
          },
        ],
      },
      {
        title: "Colors",
        text: "Fresh hair color, touch-ups, and tone balancing for a clean new look.",
        startFrom: "৳500",
        packages: [
          {
            name: "Root Touch Up",
            price: "৳500",
            details: "Root color touch-up for a clean and even look.",
          },
          {
            name: "Global Hair Color",
            price: "৳1200",
            details: "Full hair color with wash and dry finishing.",
          },
          {
            name: "Highlight / Fashion Color",
            price: "৳1800",
            details: "Selected highlights or fashion shade with tone balancing.",
          },
        ],
      },
      {
        title: "Facial",
        text: "Relaxing facial care that refreshes skin and leaves you feeling clean.",
        startFrom: "৳300",
        packages: [
          {
            name: "Clean Up Facial",
            price: "৳300",
            details: "Cleansing, scrub, steam, and basic face pack.",
          },
          {
            name: "Standard Facial",
            price: "৳500",
            details: "Clean up, massage, mask, and moisturizer.",
          },
          {
            name: "Premium Glow Facial",
            price: "৳800",
            details: "Deep cleansing, massage, premium mask, and glow finish.",
          },
        ],
      },
      {
        title: "Massage",
        text: "Calming head and face massage to release stress and improve comfort.",
        startFrom: "৳200",
        packages: [
          {
            name: "Head Massage",
            price: "৳200",
            details: "Relaxing oil head massage for stress relief.",
          },
          {
            name: "Face Massage",
            price: "৳250",
            details: "Gentle face massage with cream and clean finish.",
          },
          {
            name: "Body Massage",
            price: "৳700",
            details: "Relaxing body massage focused on comfort and relief.",
          },
        ],
      },
      {
        title: "Hair Treatment",
        text: "Nourishing treatment for healthier, smoother, and better-looking hair.",
        startFrom: "৳600",
        packages: [
          {
            name: "Protein Treatment",
            price: "৳600",
            details: "Protein care for stronger and healthier-looking hair.",
          },
          {
            name: "Dandruff Treatment",
            price: "৳800",
            details: "Scalp cleansing and anti-dandruff care treatment.",
          },
          {
            name: "Keratin Smooth Care",
            price: "৳1800",
            details: "Smoothing treatment for frizz control and shine.",
          },
        ],
      },
    ],
    packagesKicker: "Special packages",
    packagesTitle: "Popular grooming bundles",
    packages: [
      {
        title: "Bridal Package",
        price: "৳1500",
        items: ["Haircut", "Hair wash", "Beard cut", "Facial", "Final setting"],
      },
      {
        title: "Smart Grooming Package",
        price: "৳500",
        items: ["Haircut", "Beard cut", "Complimentary facial"],
      },
      {
        title: "Color Style Package",
        price: "৳900",
        items: ["Haircut", "Beard cut", "Hair color", "Beard color"],
      },
    ],
    teamKicker: "Meet our team",
    teamTitle: "Skilled hands behind every fresh look",
    experienceLabel: "Experience",
    ratingLabel: "Rating",
    socialLabel: "Social",
    contactLabel: "Contact",
    team: [
      {
        name: "Gourango",
        role: "Master Stylist",
        note: "Most experienced",
        experience: "26+ years",
        rating: "4.9/5",
        social: "@gourango.salon",
        contact: "+880 1711-000001",
        initials: "G",
      },
      {
        name: "Nitai",
        role: "Senior Barber",
        note: "Classic cut specialist",
        experience: "12+ years",
        rating: "4.8/5",
        social: "@nitai.grooming",
        contact: "+880 1711-000002",
        initials: "N",
      },
      {
        name: "Pranto",
        role: "Junior Stylist",
        note: "Most junior but skilled",
        experience: "3+ years",
        rating: "4.7/5",
        social: "@pranto.styles",
        contact: "+880 1711-000003",
        initials: "P",
      },
    ],
    ctaKicker: "Ready for a fresh look?",
    ctaTitle: "Book your next haircut, shave, or styling session today.",
    callNow: "Call now",
  },
  bn: {
    navItems: ["হোম", "আমাদের সম্পর্কে", "সার্ভিস", "প্যাকেজ", "টিম", "গ্যালারি"],
    appointment: "অ্যাপয়েন্টমেন্ট বুক করুন",
    eyebrow: "প্রিমিয়াম গ্রুমিং স্টুডিও",
    title: "স্টাইলে ফুটে উঠুক আত্মবিশ্বাস",
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
    showLess: "কম দেখুন",
    startFrom: "শুরু",
    close: "বন্ধ করুন",
    servicePackagesTitle: "সার্ভিস প্যাকেজ বেছে নিন",
    services: [
      {
        title: "ক্লাসিক হেয়ারকাট",
        text: "আপনার মুখের গঠন ও ব্যক্তিগত স্টাইল অনুযায়ী ক্লিন এবং শার্প কাট।",
        startFrom: "৳১০০",
        packages: [
          {
            name: "বেসিক",
            price: "৳১০০",
            details:
              "শুধু হেয়ার কাট, ক্লিন ফিনিশিং, পাউডার ও ব্রাশ দিয়ে পরিষ্কার করা।",
          },
          {
            name: "স্ট্যান্ডার্ড",
            price: "৳১৫০",
            details: "বেসিক কাটের সাথে শ্যাম্পু দিয়ে ধুয়ে ড্রাই করে দেওয়া।",
          },
          {
            name: "প্রিমিয়াম",
            price: "৳২০০",
            details:
              "স্ট্যান্ডার্ড সার্ভিসের সাথে চুলে জেল দিয়ে সুন্দরভাবে সেট করা।",
          },
        ],
      },
      {
        title: "স্ট্রেইট রেজর শেভ",
        text: "হট টাওয়েল প্রেপসহ স্মুথ রেজর ফিনিশ, প্রিমিয়াম লুকের জন্য।",
        startFrom: "৳৮০",
        packages: [
          {
            name: "ফোম শেভ",
            price: "৳৮০",
            details: "ক্লাসিক ফোম শেভ এবং ক্লিন রেজর ফিনিশ।",
          },
          {
            name: "জেল শেভ",
            price: "৳১২০",
            details: "সেনসিটিভ স্কিনের জন্য স্মুথ জেল শেভ ও শার্প লাইন।",
          },
          {
            name: "হট টাওয়েল শেভ",
            price: "৳১৮০",
            details: "হট টাওয়েল, প্রিমিয়াম শেভ, আফটারশেভ ও ময়েশ্চারাইজার।",
          },
        ],
      },
      {
        title: "বিয়ার্ড ট্রিম",
        text: "দাড়ি শেপ, লাইন এবং কন্ডিশনিং করে আরও পলিশড ফিনিশ।",
        startFrom: "৳১০০",
        packages: [
          {
            name: "বেসিক বিয়ার্ড শেপ",
            price: "৳১০০",
            details: "দাড়ি ট্রিম, ক্লিন লাইন-আপ এবং ব্রাশ ফিনিশ।",
          },
          {
            name: "স্ট্যান্ডার্ড বিয়ার্ড ট্রিম",
            price: "৳১৫০",
            details: "দাড়ি শেপ, রেজর লাইন-আপ এবং হালকা কন্ডিশনিং।",
          },
          {
            name: "প্রিমিয়াম বিয়ার্ড স্টাইলিং",
            price: "৳২২০",
            details: "ডিটেইল শেপিং, রেজর ওয়ার্ক, বিয়ার্ড অয়েল ও ফাইনাল সেট।",
          },
        ],
      },
      {
        title: "হেয়ার স্টাইলিং",
        text: "মডার্ন স্টাইলিং, ব্লো ড্রাই এবং যেকোনো অনুষ্ঠানের জন্য প্রোডাক্ট গাইড।",
        startFrom: "৳১৫০",
        packages: [
          {
            name: "বেসিক স্টাইলিং",
            price: "৳১৫০",
            details: "ব্লো ড্রাই এবং সাধারণ প্রোডাক্ট স্টাইলিং।",
          },
          {
            name: "স্ট্যান্ডার্ড স্টাইলিং",
            price: "৳২২০",
            details: "ওয়াশ, ব্লো ড্রাই, ব্রাশ সেট এবং হালকা প্রোডাক্ট ফিনিশ।",
          },
          {
            name: "প্রিমিয়াম স্টাইলিং",
            price: "৳৩০০",
            details: "ইভেন্ট-রেডি স্টাইলিং, জেল/ওয়াক্স, ভলিউম ও ফাইনাল সেট।",
          },
        ],
      },
      {
        title: "কালারস",
        text: "নতুন লুকের জন্য হেয়ার কালার, টাচ-আপ এবং টোন ব্যালেন্সিং সার্ভিস।",
        startFrom: "৳৫০০",
        packages: [
          {
            name: "রুট টাচ আপ",
            price: "৳৫০০",
            details: "চুলের গোড়ার কালার টাচ-আপ, ক্লিন ও ইভেন লুকের জন্য।",
          },
          {
            name: "গ্লোবাল হেয়ার কালার",
            price: "৳১২০০",
            details: "পুরো চুলে কালার, ওয়াশ এবং ড্রাই ফিনিশিং।",
          },
          {
            name: "হাইলাইট / ফ্যাশন কালার",
            price: "৳১৮০০",
            details: "সিলেক্টেড হাইলাইট অথবা ফ্যাশন শেড, টোন ব্যালেন্সিংসহ।",
          },
        ],
      },
      {
        title: "ফেসিয়াল",
        text: "স্কিন পরিষ্কার ও ফ্রেশ রাখার জন্য আরামদায়ক ফেসিয়াল কেয়ার।",
        startFrom: "৳৩০০",
        packages: [
          {
            name: "ক্লিন আপ ফেসিয়াল",
            price: "৳৩০০",
            details: "ক্লিনজিং, স্ক্রাব, স্টিম এবং বেসিক ফেস প্যাক।",
          },
          {
            name: "স্ট্যান্ডার্ড ফেসিয়াল",
            price: "৳৫০০",
            details: "ক্লিন আপ, ম্যাসাজ, মাস্ক এবং ময়েশ্চারাইজার।",
          },
          {
            name: "প্রিমিয়াম গ্লো ফেসিয়াল",
            price: "৳৮০০",
            details: "ডিপ ক্লিনজিং, ম্যাসাজ, প্রিমিয়াম মাস্ক ও গ্লো ফিনিশ।",
          },
        ],
      },
      {
        title: "ম্যাসাজ",
        text: "স্ট্রেস কমাতে এবং আরাম দিতে হেড ও ফেস ম্যাসাজ সার্ভিস।",
        startFrom: "৳২০০",
        packages: [
          {
            name: "হেড ম্যাসাজ",
            price: "৳২০০",
            details: "স্ট্রেস রিলিফের জন্য আরামদায়ক অয়েল হেড ম্যাসাজ।",
          },
          {
            name: "ফেস ম্যাসাজ",
            price: "৳২৫০",
            details: "ক্রিম দিয়ে জেন্টল ফেস ম্যাসাজ এবং ক্লিন ফিনিশ।",
          },
          {
            name: "বডি ম্যাসাজ",
            price: "৳৭০০",
            details: "কমফোর্ট ও রিলিফের জন্য রিল্যাক্সিং বডি ম্যাসাজ।",
          },
        ],
      },
      {
        title: "হেয়ার ট্রিটমেন্ট",
        text: "চুলকে আরও স্বাস্থ্যকর, স্মুথ এবং সুন্দর দেখাতে নারিশিং ট্রিটমেন্ট।",
        startFrom: "৳৬০০",
        packages: [
          {
            name: "প্রোটিন ট্রিটমেন্ট",
            price: "৳৬০০",
            details: "চুলকে শক্তিশালী ও স্বাস্থ্যকর দেখাতে প্রোটিন কেয়ার।",
          },
          {
            name: "ড্যানড্রাফ ট্রিটমেন্ট",
            price: "৳৮০০",
            details: "স্ক্যাল্প ক্লিনজিং এবং অ্যান্টি-ড্যানড্রাফ কেয়ার।",
          },
          {
            name: "কেরাটিন স্মুথ কেয়ার",
            price: "৳১৮০০",
            details: "ফ্রিজ কন্ট্রোল এবং শাইনের জন্য স্মুথিং ট্রিটমেন্ট।",
          },
        ],
      },
    ],
    packagesKicker: "স্পেশাল প্যাকেজ",
    packagesTitle: "জনপ্রিয় গ্রুমিং বান্ডেল",
    packages: [
      {
        title: "ব্রাইডাল প্যাকেজ",
        price: "৳১৫০০",
        items: ["হেয়ার কাট", "হেয়ার ওয়াশ", "বিয়ার্ড কাট", "ফেসিয়াল", "ফাইনাল সেটিং"],
      },
      {
        title: "স্মার্ট গ্রুমিং প্যাকেজ",
        price: "৳৫০০",
        items: ["হেয়ার কাট", "বিয়ার্ড কাট", "কমপ্লিমেন্টারি ফেসিয়াল"],
      },
      {
        title: "কালার স্টাইল প্যাকেজ",
        price: "৳৯০০",
        items: ["হেয়ার কাট", "বিয়ার্ড কাট", "হেয়ার কালার", "বিয়ার্ড কালার"],
      },
    ],
    teamKicker: "আমাদের টিম",
    teamTitle: "প্রতিটি ফ্রেশ লুকের পেছনে দক্ষ হাত",
    experienceLabel: "অভিজ্ঞতা",
    ratingLabel: "রেটিং",
    socialLabel: "সোশ্যাল",
    contactLabel: "যোগাযোগ",
    team: [
      {
        name: "Gourango",
        role: "মাস্টার স্টাইলিস্ট",
        note: "সবচেয়ে অভিজ্ঞ",
        experience: "২৬+ বছর",
        rating: "৪.৯/৫",
        social: "@gourango.salon",
        contact: "+880 1711-000001",
        initials: "G",
      },
      {
        name: "Nitai",
        role: "সিনিয়র বারবার",
        note: "ক্লাসিক কাট স্পেশালিস্ট",
        experience: "১২+ বছর",
        rating: "৪.৮/৫",
        social: "@nitai.grooming",
        contact: "+880 1711-000002",
        initials: "N",
      },
      {
        name: "Pranto",
        role: "জুনিয়র স্টাইলিস্ট",
        note: "সবচেয়ে জুনিয়র কিন্তু দক্ষ",
        experience: "৩+ বছর",
        rating: "৪.৭/৫",
        social: "@pranto.styles",
        contact: "+880 1711-000003",
        initials: "P",
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
  { src: "/service-colors.png", focus: "50% 38%" },
  { src: "/service-facial.png", focus: "50% 38%" },
  { src: "/service-massage.png", focus: "50% 48%" },
  { src: "/service-treatment.png", focus: "50% 42%" },
];

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [showAllServices, setShowAllServices] = useState(false);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<
    number | null
  >(null);
  const copy = content[language];
  const displayedServices = showAllServices
    ? copy.services
    : copy.services.slice(0, 4);
  const selectedService =
    selectedServiceIndex === null ? null : copy.services[selectedServiceIndex];

  useEffect(() => {
    if (!selectedService) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedService]);

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
                href={
                  ["#home", "#about", "#service-list", "#packages", "#team", "/gallery"][
                    index
                  ]
                }
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
              href={PHONE_HREF}
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
                href={PHONE_HREF}
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
          <div>
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

            <div className="mt-5 flex flex-wrap items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  aria-label={item.label}
                  className="grid size-11 place-items-center border border-white/10 bg-[#17120f] text-sm font-bold text-[#c48755] transition hover:border-[#c48755] hover:bg-[#c48755] hover:text-[#130e0a]"
                  href="#"
                  key={item.label}
                >
                  <SocialIcon label={item.label} />
                </a>
              ))}
              <a
                className="border border-[#c48755] bg-[#c48755] px-5 py-3 text-sm font-semibold text-[#130e0a] transition hover:bg-[#e0a875]"
                href={PHONE_HREF}
              >
                {copy.appointment}
              </a>
            </div>
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

          <div
            className="mt-20 flex scroll-mt-10 flex-col justify-between gap-6 md:flex-row md:items-end"
            id="service-list"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-[#c48755]">
                {copy.servicesKicker}
              </p>
              <h2 className="mt-4 font-serif text-5xl text-white">
                {copy.servicesTitle}
              </h2>
            </div>
            <button
              className="w-fit border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#c48755] hover:text-[#c48755]"
              onClick={() => setShowAllServices((current) => !current)}
              type="button"
            >
              {showAllServices ? copy.showLess : copy.viewAll}
            </button>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {displayedServices.map((service, index) => (
              <article
                className="group grid cursor-pointer overflow-hidden border border-white/10 bg-[#15110f] transition hover:-translate-y-1 hover:border-[#c48755] focus-within:border-[#c48755] sm:grid-cols-[180px_1fr]"
                key={service.title}
                onClick={() => setSelectedServiceIndex(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedServiceIndex(index);
                  }
                }}
                role="button"
                tabIndex={0}
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
                  <p className="mt-2 text-sm font-semibold text-[#c48755]">
                    {copy.startFrom} {service.startFrom}
                  </p>
                  <p className="mt-5 text-sm leading-6 text-stone-400">
                    {service.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-y border-white/10 bg-[#0d0b0a] px-5 py-20 sm:px-8 lg:px-12"
        id="packages"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.4em] text-[#c48755]">
            {copy.packagesKicker}
          </p>
          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-serif text-5xl leading-tight text-white">
              {copy.packagesTitle}
            </h2>
            <a
              className="w-fit border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#c48755] hover:text-[#c48755]"
              href={PHONE_HREF}
            >
              {copy.appointment}
            </a>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {copy.packages.map((item, index) => (
              <article
                className="group relative overflow-hidden border border-[#c48755] bg-[#1f1712] p-7 shadow-2xl shadow-[#c48755]/10 transition hover:-translate-y-2"
                key={item.title}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#c48755] to-transparent opacity-70" />
                <div className="absolute -right-16 -top-16 size-36 rounded-full bg-[#c48755]/10 blur-2xl transition group-hover:bg-[#c48755]/20" />

                <div className="relative">
                  <div className="flex items-center gap-4">
                    <span className="border border-[#4d3325] bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c48755]">
                      {index === 1 ? "Popular" : "Package"}
                    </span>
                  </div>

                  <h3 className="mt-6 font-serif text-3xl leading-tight text-white">
                    {item.title}
                  </h3>

                  <div className="mt-6 border border-white/10 bg-black/25 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                      Package price
                    </p>
                    <p className="mt-2 font-serif text-5xl text-[#c48755]">
                      {item.price}
                    </p>
                  </div>

                  <ul className="mt-7 space-y-3 text-sm leading-6 text-stone-300">
                    {item.items.map((service) => (
                      <li className="flex gap-3" key={service}>
                        <span className="mt-2 size-1.5 shrink-0 bg-[#c48755]" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12" id="team">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.4em] text-[#c48755]">
            {copy.teamKicker}
          </p>
          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl font-serif text-5xl leading-tight text-white">
              {copy.teamTitle}
            </h2>
            <a
              className="w-fit border border-[#c48755] bg-[#c48755] px-6 py-3 text-sm font-semibold text-[#130e0a] transition hover:bg-[#e0a875]"
              href={PHONE_HREF}
            >
              {copy.appointment}
            </a>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {copy.team.map((member) => (
              <article
                className="group overflow-hidden border border-white/10 bg-[#15110f] transition hover:-translate-y-2 hover:border-[#c48755]"
                key={member.name}
              >
                <div className="relative grid min-h-[260px] place-items-center overflow-hidden bg-[#0d0b0a]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(196,135,85,0.28),transparent_38%),linear-gradient(180deg,transparent,#080706)]" />
                  <div className="relative grid size-32 place-items-center rounded-full border border-[#c48755] bg-black/35 font-serif text-6xl text-[#c48755] shadow-2xl shadow-[#c48755]/10">
                    {member.initials}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 border border-white/10 bg-black/45 p-4 backdrop-blur-md">
                    <p className="font-serif text-3xl text-white">
                      {member.name}
                    </p>
                    <p className="mt-1 text-sm text-[#c48755]">{member.role}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-6 text-stone-400">
                    {member.note}
                  </p>

                  <div className="mt-6 grid gap-3 text-sm">
                    <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                      <span className="text-stone-500">
                        {copy.experienceLabel}
                      </span>
                      <span className="font-semibold text-white">
                        {member.experience}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                      <span className="text-stone-500">{copy.ratingLabel}</span>
                      <span className="font-semibold text-white">
                        {member.rating}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                      <span className="text-stone-500">{copy.socialLabel}</span>
                      <span className="font-semibold text-[#c48755]">
                        {member.social}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-stone-500">
                        {copy.contactLabel}
                      </span>
                      <span className="font-semibold text-white">
                        {member.contact}
                      </span>
                    </div>
                  </div>
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
            href={PHONE_HREF}
          >
            {copy.callNow}
          </a>
        </div>
      </section>

      {selectedService && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/75 px-5 py-8 backdrop-blur-sm"
          onClick={() => setSelectedServiceIndex(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-[#4d3325] bg-[#100d0b] p-6 shadow-2xl shadow-black/50 sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#c48755]">
                  {copy.servicePackagesTitle}
                </p>
                <h2 className="mt-3 font-serif text-4xl text-white">
                  {selectedService.title}
                </h2>
                <p className="mt-3 text-sm font-semibold text-[#c48755]">
                  {copy.startFrom} {selectedService.startFrom}
                </p>
                <p className="mt-4 leading-7 text-stone-400">
                  {selectedService.text}
                </p>
              </div>

              <button
                aria-label={copy.close}
                className="grid size-10 shrink-0 place-items-center border border-white/15 text-xl text-white transition hover:border-[#c48755] hover:text-[#c48755]"
                onClick={() => setSelectedServiceIndex(null)}
                type="button"
              >
                x
              </button>
            </div>

            <div className="mt-8 grid gap-4">
              {selectedService.packages.map((item) => (
                <article
                  className="border border-white/10 bg-[#17120f] p-5 transition hover:border-[#c48755]"
                  key={item.name}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="font-serif text-2xl text-white">
                      {item.name}
                    </h3>
                    <p className="text-lg font-bold text-[#c48755]">
                      {item.price}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-stone-400">
                    {item.details}
                  </p>
                </article>
              ))}
            </div>

            <a
              className="mt-6 inline-flex w-full justify-center bg-[#c48755] px-6 py-4 font-semibold text-[#130e0a] transition hover:bg-[#e0a875]"
              href={PHONE_HREF}
            >
              {copy.appointment}
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
