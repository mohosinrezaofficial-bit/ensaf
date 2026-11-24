"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const familyLawServices = [
  {
    number: "01",
    title: "Divorce & Separation",
    description:
      "Professional legal guidance through divorce proceedings, separation agreements, and every important decision along the way.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
        <path
          d="M24 7v34M10 14h28M15 14l-8 15h16L15 14Zm18 0-8 15h16L33 14ZM15 35h18M19 41h10"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Child Custody",
    description:
      "Protecting your parental rights while prioritizing your child's wellbeing, stability, and best interests.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
        <circle
          cx="24"
          cy="15"
          r="7"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M10 40c0-8 6-14 14-14s14 6 14 14M17 31l7 6 7-6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Alimony & Support",
    description:
      "Helping clients pursue fair spousal maintenance, child support, and financial arrangements after separation.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
        <circle
          cx="24"
          cy="24"
          r="17"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M29 17c-1.2-1.5-3-2.2-5.2-2.2-3 0-5.2 1.6-5.2 4 0 6.5 11 2.5 11 9 0 2.5-2.4 4.4-5.8 4.4-2.4 0-4.6-.9-5.9-2.5M24 11v26"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Adoption & Guardianship",
    description:
      "Guiding families through adoption procedures, guardianship matters, and the legal steps to build a secure future.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
        <path
          d="M24 40S7 30 7 17a9 9 0 0 1 17-4 9 9 0 0 1 17 4c0 13-17 23-17 23Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 23h14M24 16v14"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Prenuptial Agreements",
    description:
      "Creating clear and thoughtful agreements that help couples establish financial expectations before marriage.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
        <path
          d="M12 6h17l8 8v28H12V6Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M29 6v9h8M18 23h13M18 29h13M18 35h8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Domestic Violence",
    description:
      "Providing confidential legal support and protective legal options for individuals and families facing abuse.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
        <path
          d="M24 5 40 12v11c0 10-7 17-16 21C15 40 8 33 8 23V12l16-7Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M24 16v10M24 32h.02"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function FamilyLaw() {
  return (
    <main className="bg-[#f7f7f5]">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#092622] py-24 lg:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1474552226712-ac0f0961a954"
            alt="Family together"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-[#092622]/80" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="mb-5 font-serif text-xl text-[#bd9568]">
              Compassionate Legal Representation
            </p>

            <h1 className="font-serif text-5xl font-bold leading-[1.12] text-white sm:text-6xl lg:text-[76px]">
              Family Law
              <br />
              <span className="font-normal italic">
                With Care & Commitment
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              Family matters deserve more than legal answers. We provide
              thoughtful guidance, strong representation, and personal support
              through life is most important transitions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex h-14 items-center gap-3 rounded-full bg-[#bd9568] px-9 text-sm font-bold text-white transition hover:bg-white hover:text-[#092622]"
              >
                Book A Consultation
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/about"
                className="inline-flex h-14 items-center rounded-full border border-white/40 px-9 text-sm font-semibold text-white transition hover:bg-white hover:text-[#092622]"
              >
                About Our Firm
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[420px] overflow-hidden sm:h-[560px]">
              <Image
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300"
                alt="Family spending time together"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-7 -right-4 bg-[#304f51] px-8 py-7 text-white sm:-right-7 sm:px-10">
              <p className="font-serif text-4xl">15+</p>
              <p className="mt-1 text-xs uppercase tracking-[2px] text-white/70">
                Years of Experience
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#bd9568]">
              Family Law Practice
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#183d39] sm:text-5xl lg:text-[58px]">
              Protecting What
              <br />
              <span className="italic">Matters Most.</span>
            </h2>

            <p className="mt-7 leading-8 text-[#666d68]">
              Family legal matters can be emotionally challenging and legally
              complex. Our approach combines careful legal strategy with
              genuine understanding of the people and families we represent.
            </p>

            <p className="mt-5 leading-8 text-[#666d68]">
              Whether you are navigating a divorce, resolving a custody
              dispute, or planning for your family future, we work to help
              you understand your options and make informed decisions.
            </p>

            <div className="mt-9 border-l-2 border-[#bd9568] pl-6">
              <p className="font-serif text-xl italic leading-relaxed text-[#304f51]">
                Every family deserves clarity, dignity, and a fair voice
                throughout the legal process.
              </p>
            </div>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[1.5px] text-[#304f51] transition hover:text-[#bd9568]"
            >
              Speak With Our Team
              <span className="text-lg">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">

          <div className="mb-16 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#bd9568]">
                What We Handle
              </p>

              <h2 className="font-serif text-4xl leading-tight text-[#183d39] sm:text-5xl lg:text-[58px]">
                Our Family Law
                <br />
                <span className="italic">Services</span>
              </h2>
            </div>

            <p className="max-w-md leading-7 text-[#737a75]">
              From resolving family disputes to planning for the future, our
              legal services are designed around your family needs.
            </p>
          </div>

          <div className="grid border-l border-t border-[#e6e5df] sm:grid-cols-2 lg:grid-cols-3">
            {familyLawServices.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group border-b border-r border-[#e6e5df] p-8 transition duration-300 hover:bg-[#304f51] sm:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-sm text-[#bd9568]">
                    {service.number}
                  </span>

                  <div className="text-[#bd9568] transition-transform duration-300 group-hover:translate-x-1">
                    {service.icon}
                  </div>
                </div>

                <h3 className="mt-12 font-serif text-2xl text-[#183d39] transition group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-4 min-h-[84px] text-sm leading-7 text-[#777e78] transition group-hover:text-white/70">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[1.5px] text-[#304f51] transition group-hover:text-[#bd9568]"
                >
                  Learn More
                  <span className="text-base">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#bd9568]">
              Why Choose Our Firm
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#183d39] sm:text-5xl lg:text-[58px]">
              Legal Support
              <br />
              <span className="italic">With A Human Touch.</span>
            </h2>

            <p className="mt-7 leading-8 text-[#737a75]">
              We understand that family law is about people, relationships,
              and the future. Our team takes the time to listen, explain your
              legal options, and build a strategy suited to your circumstances.
            </p>

            <div className="mt-10 space-y-7">
              {[
                {
                  title: "Personal Attention",
                  text: "Your concerns receive careful attention and clear communication.",
                },
                {
                  title: "Strategic Representation",
                  text: "We develop practical legal strategies based on your situation.",
                },
                {
                  title: "Confidential Guidance",
                  text: "We treat your family matters with discretion and respect.",
                },
              ].map((item, index) => (
                <div key={item.title} className="flex gap-5">
                  <span className="font-serif text-xl text-[#bd9568]">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="font-serif text-xl text-[#183d39]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#737a75]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[500px] overflow-hidden sm:h-[620px]">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
                alt="Family walking together"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-0 left-0 max-w-[330px] bg-[#304f51] p-8 text-white sm:p-10">
              <p className="font-serif text-3xl leading-tight">
                Your Family.
                <br />
                Your Future.
                <br />
                Our Commitment.
              </p>
              <div className="mt-6 h-[2px] w-16 bg-[#bd9568]" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#092622] py-24 lg:py-28">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1474552226712-ac0f0961a954"
            alt="Family background"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-[#092622]/80" />
        </div>

        <div className="relative mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-10 px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[3px] text-[#bd9568]">
              Here When You Need Us
            </p>

            <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-[58px]">
              Let us Talk About
              <br />
              <span className="italic">Your Next Chapter.</span>
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-white/65">
              Get in touch with our legal team to discuss your family law
              concerns and explore your available options.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex h-14 shrink-0 items-center gap-4 rounded-full bg-[#bd9568] px-9 text-sm font-bold text-white transition hover:bg-white hover:text-[#092622]"
          >
            Schedule A Consultation
            <span className="text-lg">→</span>
          </Link>
        </div>
      </section>

    </main>
  );
}