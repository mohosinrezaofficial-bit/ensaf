"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const stats = [
  { number: "25+", label: "Years of Experience" },
  { number: "1,200+", label: "Cases Completed" },
  { number: "98%", label: "Client Satisfaction" },
];

const values = [
  {
    number: "01",
    title: "Experience",
    description:
      "Years of practical legal experience allow us to approach every matter with clarity, confidence and a deep understanding of the law.",
  },
  {
    number: "02",
    title: "Commitment",
    description:
      "We take the time to understand every client's situation and remain committed to protecting their interests at every stage.",
  },
  {
    number: "03",
    title: "Integrity",
    description:
      "Honest advice, clear communication and professional responsibility are at the heart of everything we do.",
  },
];

export default function About() {
  return (
    <main className="overflow-hidden bg-white text-[#252525]">

      {/* PAGE HERO */}
      <section className="relative bg-[#304f51]">
        <div className="mx-auto grid min-h-[500px] max-w-[1400px] items-center gap-10 px-5 py-20 lg:grid-cols-2 lg:px-10 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[3px] text-[#d0a16c]">
              About Our Firm
            </p>

            <h1 className="max-w-[650px] font-serif text-5xl leading-[1.12] text-white md:text-6xl lg:text-[72px]">
              Built on Trust.
              <span className="block text-[#d0a16c]">
                Driven by Justice.
              </span>
            </h1>

            <p className="mt-7 max-w-[510px] text-base leading-8 text-white/75">
              We believe great legal representation begins with
              understanding people. Our firm combines experience,
              dedication and personal attention to help clients move
              forward with confidence.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-5 border-b border-[#d0a16c] pb-3 text-sm font-semibold uppercase tracking-[1.5px] text-white transition hover:text-[#d0a16c]"
            >
               Talk About Your Case
              <span className="text-xl">↗</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[350px] sm:h-[430px] lg:h-[460px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=90"
              alt="Professional legal library"
              fill
              priority
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#bd9568]">
              Who We Are
            </p>

            <h2 className="mt-5 max-w-[450px] font-serif text-4xl leading-tight text-[#304f51] md:text-5xl">
              More Than Legal Advice. A Partner You Can Trust.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-[#555]">
              Legal matters are rarely just about paperwork or procedures.
              They involve  lives, businesses, families and
              futures. We understand the responsibility that comes with
              representing our clients.
            </p>

            <p className="mt-6 text-base leading-8 text-gray-500">
              Our approach is simple. We listen carefully, explain your
              options clearly and build a practical legal strategy around
              your circumstances. From the first conversation to the final
              resolution, we believe every client deserves attention,
              respect and dedicated representation.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
              <div>
                <p className="font-serif text-4xl text-[#304f51]">25+</p>
                <p className="mt-2 text-sm text-gray-500">
                  Years of legal experience
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl text-[#304f51]">15+</p>
                <p className="mt-2 text-sm text-gray-500">
                  Dedicated professionals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE AND STORY */}
      <section className="bg-[#f5f5f2] py-20 md:py-28">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[420px] md:h-[560px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=90"
              alt="Modern professional office"
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#bd9568]">
              Our Approach
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#304f51] md:text-5xl">
              Personal Attention.
              <span className="block italic text-[#bd9568]">
                Professional Results.
              </span>
            </h2>

            <p className="mt-7 leading-8 text-gray-600">
              Every legal challenge is different. That is why we never
              believe in a one-size-fits-all solution. We take a thoughtful
              and practical approach to understanding the details of your
              case before recommending the right course of action.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Our clients work directly with professionals who understand
              their concerns, communicate openly and focus on achieving
              the best possible outcome.
            </p>

            <Link
              href="/services"
              className="mt-9 inline-flex items-center gap-4 bg-[#304f51] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#bd9568]"
            >
              Explore Our Services
              <span>↗</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#304f51] py-16 md:py-20">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 sm:grid-cols-3 lg:px-10">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center sm:border-r sm:border-white/20 last:border-0"
            >
              <h3 className="font-serif text-5xl text-[#d0a16c] md:text-6xl">
                {item.number}
              </h3>
              <p className="mt-4 text-xs font-medium uppercase tracking-[2px] text-white/75">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="max-w-[650px]">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#bd9568]">
              What Matters to Us
            </p>

            <h2 className="mt-5 font-serif text-4xl text-[#304f51] md:text-5xl">
              The Principles Behind Everything We Do.
            </h2>
          </div>

          <div className="mt-14 grid gap-10 border-t border-gray-200 pt-10 md:grid-cols-3 md:gap-12">
            {values.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="group"
              >
                <span className="font-serif text-4xl text-[#bd9568]">
                  {item.number}
                </span>

                <h3 className="mt-7 font-serif text-3xl text-[#304f51] transition group-hover:text-[#bd9568]">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-8 text-gray-500">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL WIDTH IMAGE */}
      <section className="relative h-[350px] md:h-[480px]">
        <Image
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1800&q=90"
          alt="Law books and legal office"
          fill
          unoptimized
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#092622]/65" />

        <div className="relative mx-auto flex h-full max-w-[1400px] items-center px-5 lg:px-10">
          <div className="max-w-[750px]">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#d0a16c]">
              Our Commitment
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-white md:text-6xl">
              Every Client Deserves to Be Heard.
            </h2>

            <p className="mt-6 max-w-[580px] leading-8 text-white/75">
              We are here to provide clarity when things feel uncertain
              and confidence when the decisions matter most.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-10">
          <div className="max-w-[700px]">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#bd9568]">
              Start a Conversation
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#304f51] md:text-5xl">
              Let Us Help You Find the Right Way Forward.
            </h2>
          </div>

          <Link
            href="/contact"
            className="shrink-0 bg-[#304f51] px-9 py-5 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#bd9568]"
          >
            Book a Consultation ↗
          </Link>
        </div>
      </section>

    </main>
  );
}