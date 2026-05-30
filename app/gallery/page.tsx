"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const tabs = ["Images", "Shorts", "Video"] as const;
const PHONE_HREF = "tel:01616275857";

const galleryImages = [
  { src: "/gourango-salon-hero.png", title: "Salon Chairs" },
  { src: "/gourango-about.png", title: "Client Styling" },
  { src: "/service-classic.png", title: "Classic Haircut" },
  { src: "/service-shave.png", title: "Razor Shave" },
  { src: "/service-trim.png", title: "Beard Trim" },
  { src: "/service-style.png", title: "Hair Styling" },
  { src: "/service-colors.png", title: "Colors" },
  { src: "/service-facial.png", title: "Facial" },
  { src: "/service-massage.png", title: "Massage" },
  { src: "/service-treatment.png", title: "Hair Treatment" },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Images");

  return (
    <main className="min-h-screen bg-[#080706] px-5 py-6 text-[#f5eee6] sm:px-8 lg:px-12">
      <section className="relative mx-auto max-w-7xl overflow-hidden border border-white/10 bg-[#0d0b0a] p-6 sm:p-10">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,rgba(196,135,85,0.2),transparent_35%)]" />

        <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#c48755]">
              Gourango Salon
            </p>
            <h1 className="mt-4 font-serif text-6xl leading-tight text-white">
              Gallery
            </h1>
            <p className="mt-4 max-w-2xl leading-7 text-stone-400">
              Explore our salon photos, short clips, and videos. More media will
              be added soon.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              className="w-fit bg-[#c48755] px-6 py-3 text-sm font-semibold text-[#130e0a] transition hover:bg-[#e0a875]"
              href={PHONE_HREF}
            >
              Book an appointment
            </a>
            <Link
              className="w-fit border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#c48755] hover:text-[#c48755]"
              href="/"
            >
              Back to home
            </Link>
          </div>
        </div>

        <div className="relative z-10 mt-10 flex flex-wrap gap-8 border-b border-white/10">
          {tabs.map((tab) => (
            <button
              className={`pb-4 text-base transition ${
                activeTab === tab
                  ? "border-b-2 border-[#c48755] font-bold text-white"
                  : "border-b-2 border-transparent font-normal text-stone-400 hover:text-[#c48755]"
              }`}
              key={tab}
              onClick={() => setActiveTab(tab)}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl py-10">
        {activeTab === "Images" ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <article
                className="group overflow-hidden border border-white/10 bg-[#15110f] transition hover:-translate-y-1 hover:border-[#c48755]"
                key={image.src}
              >
                <div className="relative min-h-[320px] overflow-hidden bg-stone-950">
                  <Image
                    alt={`${image.title} at Gourango Salon`}
                    className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    src={image.src}
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-serif text-2xl text-white">
                    {image.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid min-h-[360px] place-items-center border border-white/10 bg-[#15110f] p-10 text-center">
            <div>
              <p className="font-serif text-4xl text-white">
                {activeTab} coming soon
              </p>
              <p className="mt-4 text-stone-400">
                This section is empty for now. New media will be uploaded later.
              </p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
