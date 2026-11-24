
"use client";

import { motion } from "motion/react";
import Link from "next/link";

const services = [
    {
        slug: "criminal-law",
        title: "Criminal Law",
        description:
            "Defense representations for various criminal charges. Investigations, evidence analysis, and bail applications.",
        icon: (
            <path d="m14 7 3-3 3 3-3 3zM4 20l8-8m-5 5 3 3m-6-1 3-3m6-6 4 4M3 21h18" />
        ),
        decoration: (
            <path d="M50 10L75 35M42 18L67 43M35 25L58 48M22 65H78M30 55L50 45L70 55" />
        ),
    },
    {
        slug: "corporate-law",
        title: "Corporate Law",
        description:
            "Professional legal guidance for businesses, corporate governance, contracts, and commercial disputes.",
        icon: (
            <>
                <rect x="3" y="7" width="18" height="14" rx="2" />
                <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18m-11 0v3h4v-3" />
            </>
        ),
        decoration: (
            <>
                <rect x="15" y="25" width="70" height="48" rx="6" />
                <path d="M15 38h70M40 25v-8h20v8M43 48h14v10H43z" />
            </>
        ),
    },
    {
        slug: "family-law",
        title: "Family Law",
        description:
            "Experienced legal assistance with family disputes, divorce proceedings, child custody, and family matters.",
        icon: (
            <>
                <circle cx="12" cy="7" r="3" />
                <circle cx="5" cy="10" r="2" />
                <circle cx="19" cy="10" r="2" />
                <path d="M5 19v-2a7 7 0 0 1 14 0v2M1 19v-2a4 4 0 0 0 5-4m17 6v-2a4 4 0 0 0-5-4" />
            </>
        ),
        decoration: (
            <>
                <circle cx="50" cy="30" r="12" />
                <circle cx="25" cy="38" r="9" />
                <circle cx="75" cy="38" r="9" />
                <path d="M25 49c-15 0-19 9-19 20h88c0-11-4-20-19-20M50 43v10" />
            </>
        ),
    },
    {
        slug: "real-estate",
        title: "Real Estate Law",
        description:
            "Legal representation for property transactions, ownership disputes, real estate contracts, and property rights.",
        icon: (
            <path d="M12 3v18M5 6h14M5 6l-3 6h6L5 6zm14 0-3 6h6l-3-6zM7 21h10M12 17l-5 4h10z" />
        ),
        decoration: (
            <path d="M10 45 50 12l40 33M20 42v45h60V42M40 87V60h20v27M35 45h30" />
        ),
    },
    {
        slug: "personal-injury",
        title: "Personal Injury Law",
        description:
            "Dedicated legal representation for personal injury claims, accident cases, compensation, and liability disputes.",
        icon: (
            <path d="M8 3v18m8-18v18M5 7h14M5 17h14M8 7l-3 5h6L8 7zm8 0-3 5h6l-3-5z" />
        ),
        decoration: (
            <path d="M25 12v65m-10-65v20a10 10 0 0 0 20 0V12m25 0h20v25H60zM60 37v50m0-35 25 35" />
        ),
    },
    {
        slug: "health-care",
        title: "Health Care Policy",
        description:
            "Legal support for healthcare regulations, medical compliance, patient rights, and healthcare policy matters.",
        icon: (
            <>
                <path d="M12 3 4 7l2 7c1 3 4 5 6 7 2-2 5-4 6-7l2-7-8-4z" />
                <path d="m9 12 2 2 4-4M3 16l4 5 3-2" />
            </>
        ),
        decoration: (
            <>
                <path d="M50 10 80 25 75 55 50 80 25 55 20 25z" />
                <path d="M50 30v25M37 42h26M15 70l25 15 40-20" />
            </>
        ),
    },
];

export default function LegalServices() {
    return (
        <section className="w-full bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="mx-auto max-w-[1298px]">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-12 text-center"
                >
                    <p className="mb-4 font-serif text-xl font-semibold text-[#bd915c]">
                        What We Do
                    </p>

                    <h2 className="font-serif text-4xl font-bold text-[#082522] md:text-5xl">
                        Legal Services We Offer
                    </h2>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

                    {services.map((service, index) => {
                        const isFeatured = index === 1;

                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.12,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                whileHover={{
                                    y: -12,
                                    scale: 1.02,
                                    transition: {
                                        duration: 0.35,
                                        ease: "easeOut",
                                    },
                                }}
                                className={`
                  group relative min-h-[330px] overflow-hidden
                  rounded-[23px] border-b-[6px]
                  px-9 py-10
                  transition-colors duration-500
                  ${isFeatured
                                        ? "border-[#bd915c] bg-[#304f51]"
                                        : "border-transparent bg-[#f5f5f5] hover:border-[#bd915c] hover:bg-[#304f51]"
                                    }
                  hover:shadow-[0_25px_50px_rgba(8,37,34,0.22)]
                `}
                            >

                                {/* Decorative Background */}
                                <motion.svg
                                    initial={{ rotate: 0, scale: 1 }}
                                    whileHover={{ rotate: 12, scale: 1.2 }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    className="
                    absolute -right-5 -top-5
                    h-40 w-40
                    text-[#bd915c] opacity-10
                    transition-opacity duration-500
                    group-hover:opacity-25
                  "
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    viewBox="0 0 100 100"
                                >
                                    {service.decoration}
                                </motion.svg>

                                <div className="relative z-10">

                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{
                                            rotate: 8,
                                            scale: 1.12,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 12,
                                        }}
                                        className={`
                      mb-6 flex h-20 w-20 items-center
                      justify-center rounded-full
                      shadow-sm transition-all duration-500
                      ${isFeatured
                                                ? "bg-[#bd915c]"
                                                : "bg-white group-hover:bg-[#bd915c]"
                                            }
                    `}
                                    >
                                        <svg
                                            className={`
                        h-8 w-8 transition-colors duration-500
                        ${isFeatured
                                                    ? "text-white"
                                                    : "text-[#bd915c] group-hover:text-white"
                                                }
                      `}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                        >
                                            {service.icon}
                                        </svg>
                                    </motion.div>

                                    {/* Title */}
                                    <h3
                                        className={`
                      mb-4 font-serif text-2xl font-bold
                      transition-all duration-500
                      ${isFeatured
                                                ? "text-white"
                                                : "text-[#092622] group-hover:translate-x-1 group-hover:text-white"
                                            }
                    `}
                                    >
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className={`
                      mb-3 text-base leading-[1.7]
                      transition-colors duration-500
                      ${isFeatured
                                                ? "text-white/85"
                                                : "text-[#858585] group-hover:text-white/85"
                                            }
                    `}
                                    >
                                        {service.description}
                                    </p>

                                    {/* Read More */}
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className={`
                      inline-flex items-center gap-2
                      text-sm font-semibold
                      transition-all duration-500
                      hover:gap-4
                      ${isFeatured
                                                ? "text-white hover:text-[#d8b17f]"
                                                : "text-[#092622] group-hover:text-[#d8b17f]"
                                            }
                    `}
                                    >
                                        Read More

                                        <motion.span
                                            className="inline-block text-xl"
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            →
                                        </motion.span>
                                    </Link>

                                </div>
                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}
