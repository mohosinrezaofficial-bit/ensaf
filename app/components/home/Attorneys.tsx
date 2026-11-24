
"use client";

import { useRef } from "react";
import { motion } from "motion/react";

const attorneys = [
    {
        name: "Sarah Rahman",
        role: "Senior Attorney",
        image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=700&auto=format&fit=crop&q=85",
    },
    {
        name: "Smith Miller",
        role: "Corporate Lawyer",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&auto=format&fit=crop&q=85",
    },
    {
        name: "Samira Dsuza",
        role: "Family Law Attorney",
        image:
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=700&auto=format&fit=crop&q=85",
    },
    {
        name: "Michel Peterson",
        role: "Chief Justice",
        image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&auto=format&fit=crop&q=85",
    },
];

export default function Attorneys() {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        carouselRef.current?.scrollBy({
            left: direction === "right" ? 333 : -333,
            behavior: "smooth",
        });
    };

    return (
        <section className="relative w-full min-h-[620px] overflow-hidden bg-[#092522]">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1920&q=85')",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#061d19]/90" />

            <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1320px] flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:gap-14 lg:px-0">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full shrink-0 text-center lg:w-[390px] lg:text-left"
                >
                    <p className="mb-4 font-serif text-xl text-[#c39762]">
                        Our Attorneys
                    </p>

                    <h2 className="mb-10 font-serif text-4xl font-bold leading-[1.22] text-white sm:text-5xl lg:text-[52px]">
                        Dedicated
                        <br className="hidden lg:block" />
                        Lawyers,
                        <br className="hidden lg:block" />
                        Proven Results
                    </h2>

                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.06, y: -3 }}
                        whileTap={{ scale: 0.96 }}
                        className="inline-flex items-center gap-2 rounded-full bg-[#bd925f] px-10 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#a87b49]"
                    >
                        More Attorney
                        <span className="text-lg">→</span>
                    </motion.a>
                </motion.div>

                {/* ATTORNEY CAROUSEL */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full min-w-0 lg:flex-1"
                >

                    {/* PREVIOUS BUTTON */}
                    <motion.button
                        type="button"
                        onClick={() => scroll("left")}
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute -left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#bd925f] shadow-lg transition-colors hover:bg-[#bd925f] hover:text-white lg:-left-7 lg:h-14 lg:w-14"
                        aria-label="Previous attorneys"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M19 12H5m7 7-7-7 7-7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </motion.button>

                    {/* CARDS */}
                    <div
                        ref={carouselRef}
                        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {attorneys.map((attorney, index) => (
                            <motion.div
                                key={attorney.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.12,
                                }}
                                whileHover={{ y: -10, scale: 1.025 }}
                                className="group w-[280px] shrink-0 snap-start overflow-hidden rounded-[25px] border-b-[6px] border-[#bd925f] bg-[#304f51] shadow-lg sm:w-[307px]"
                            >

                                {/* IMAGE */}
                                <div className="relative h-[283px] overflow-hidden">
                                    <motion.img
                                        src={attorney.image}
                                        alt={attorney.name}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.7 }}
                                        className="h-full w-full rounded-b-[25px] object-cover"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#092522]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </div>

                                {/* CONTENT */}
                                <div className="px-4 py-6 text-center">
                                    <h3 className="mb-2 font-serif text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#d8b17f]">
                                        {attorney.name}
                                    </h3>

                                    <p className="text-sm text-white/80">
                                        {attorney.role}
                                    </p>
                                </div>

                            </motion.div>
                        ))}
                    </div>

                    {/* NEXT BUTTON */}
                    <motion.button
                        type="button"
                        onClick={() => scroll("right")}
                        whileHover={{ scale: 1.12 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute -right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#bd925f] shadow-lg transition-colors hover:bg-[#bd925f] hover:text-white lg:-right-7 lg:h-14 lg:w-14"
                        aria-label="Next attorneys"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M5 12h14m-7-7 7 7-7 7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </motion.button>

                </motion.div>
            </div>
        </section>
    );
}
