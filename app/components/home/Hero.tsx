"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const slides = [
  {
    subtitle: "Your Guardian In Law",
    title: (
      <>
        Experienced
        <br />
        Attorneys, Trusted
        <br />
        Results
      </>
    ),
    background:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744",
    alt: "Professional legal services",
  },
  {
    subtitle: "Justice. Integrity. Excellence.",
    title: (
      <>
        Protecting
        <br />
        Your Rights,
        <br />
        Securing Your Future
      </>
    ),
    background:
      "https://images.unsplash.com/photo-1589578527966-fdac0f44566c",
    image:
      "https://images.unsplash.com/photo-1589391886645-d51941baf7fb",
    alt: "Legal consultation",
  },
  {
    subtitle: "Committed To Your Success",
    title: (
      <>
        Strong Legal
        <br />
        Solutions For
        <br />
        Every Challenge
      </>
    ),
    background:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    alt: "Law office and legal documents",
  },
];

const clientImages = [
  "https://i.pravatar.cc/150?img=12",
  "https://i.pravatar.cc/150?img=33",
  "https://i.pravatar.cc/150?img=47",
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <section className="relative min-h-[700px] overflow-hidden bg-[#062522] lg:min-h-[780px]">

      {/* BACKGROUND SLIDER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={currentSlide.background}
            alt="Law background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[#00231f]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00231f]/90 via-[#00231f]/75 to-[#00231f]/80" />
        </motion.div>
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <div className="relative mx-auto flex min-h-[700px] max-w-[1400px] items-center px-6 py-20 lg:min-h-[780px] lg:px-8 lg:py-0">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2 lg:gap-20">

          {/* LEFT CONTENT */}
          <div className="relative z-10">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.6 }}
              >
                <p className="mb-4 font-serif text-xl text-[#bd925e]">
                  {currentSlide.subtitle}
                </p>

                <h1 className="font-serif text-5xl font-bold leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-[76px]">
                  {currentSlide.title}
                </h1>
              </motion.div>
            </AnimatePresence>

            {/* CLIENT REVIEW */}
            <div className="mt-8 flex flex-wrap items-center gap-4">

              <div className="flex -space-x-4">
                {clientImages.map((src, index) => (
                  <div
                    key={src}
                    className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white"
                  >
                    <Image
                      src={src}
                      alt={`Client ${index + 1}`}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div>
                <p className="font-serif text-base font-semibold text-white">
                  We Have 2k+ Happy Clients
                </p>

                <div className="mt-1 flex flex-wrap items-center gap-1">
                  <span className="text-lg tracking-tight text-[#f6a623]">
                    ★★★★★
                  </span>

                  <span className="text-sm font-semibold text-white/60">
                    4.5/5 (35k+ Reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* CONTACT BUTTON */}
            <div className="mt-11">
              <Link
                href="/contact"
                className="inline-flex h-14 items-center gap-3 rounded-full bg-[#bd925e] px-10 text-sm font-bold text-white transition duration-300 hover:bg-white hover:text-[#183d39]"
              >
                Contact Us

                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5 12h14m-6-6 6 6-6 6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

          </div>

          {/* RIGHT IMAGE SLIDER */}
          <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto lg:mr-5">

            {/* GOLD BORDER FRAME */}
            <div className="absolute -right-3 -top-3 h-full w-full rounded-tr-[115px] border-[3px] border-[#bd925e] sm:-right-5 sm:-top-5" />

            <div className="relative z-10 h-[430px] overflow-hidden rounded-tr-[105px] rounded-bl-[105px] border border-white sm:h-[500px] lg:h-[568px]">

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentSlide.image}
                    alt={currentSlide.alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

            </div>

            {/* TRUST BADGE */}
            <div className="absolute -left-5 top-1/2 z-20 flex h-[100px] w-[100px] -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#304f50] shadow-xl sm:-left-12 sm:h-[120px] sm:w-[120px]">

              <div className="flex h-[84px] w-[84px] items-center justify-center rounded-full border border-white/50 sm:h-[100px] sm:w-[100px]">

                <div className="text-center">
                  <p className="text-[10px] font-bold tracking-[4px] text-white">
                    TRUST
                  </p>

                  <svg
                    className="mx-auto my-1 h-8 w-8 text-[#bd925e] sm:h-9 sm:w-9"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M24 4 42 12v12c0 10-8 17-18 21C14 41 6 34 6 24V12L24 4Z"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M24 10v25M12 17h24M17 22l-5 9h10l-5-9Zm14 0-5 9h10l-5-9Z"
                      strokeWidth="1.5"
                    />
                  </svg>

                  <p className="text-[9px] font-bold tracking-[3px] text-white">
                    FOREVER
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* SLIDER CONTROLS */}
        <div className="absolute bottom-8 right-6 z-30 flex items-center gap-4 lg:bottom-auto lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:flex-col">

          {/* PREVIOUS */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition hover:border-[#bd925e] hover:bg-[#bd925e]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="m15 18-6-6 6-6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* DOTS */}
          <div className="flex items-center gap-3 lg:flex-col lg:gap-5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activeSlide === index ? "true" : undefined}
                className={`h-[10px] rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? "w-8 bg-[#bd925e] lg:h-8 lg:w-[10px]"
                    : "w-[10px] bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>

          {/* NEXT */}
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition hover:border-[#bd925e] hover:bg-[#bd925e]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="m9 18 6-6-6-6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

        </div>

      </div>
    </section>
  );
}