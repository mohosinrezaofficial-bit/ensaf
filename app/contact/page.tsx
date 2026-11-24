"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";

const contactInfo = [
  {
    number: "01",
    title: "Visit Our Office",
    detail: "123 Legal Street, New York, NY 10001",
    link: "https://maps.google.com/?q=123+Legal+Street+New+York",
    label: "Get Directions",
  },
  {
    number: "02",
    title: "Call Our Office",
    detail: "+1 (234) 567-890",
    link: "tel:+1234567890",
    label: "Call Us",
  },
  {
    number: "03",
    title: "Email Our Team",
    detail: "info@lawfirm.com",
    link: "mailto:info@lawfirm.com",
    label: "Send Email",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mailto = `mailto:info@lawfirm.com?subject=${encodeURIComponent(
      form.subject || "New Consultation Request"
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    )}`;

    window.location.href = mailto;
  };

  return (
    <main className="overflow-hidden bg-white text-[#252525]">

      {/* HERO */}
      <section className="relative bg-[#304f51]">
        <div className="mx-auto grid min-h-[430px] max-w-[1400px] items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#d0a16c]">
              Contact Us
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-[1.12] text-white md:text-6xl lg:text-[72px]">
              Lets Start a
              <span className="block italic text-[#d0a16c]">
                Conversation.
              </span>
            </h1>

            <p className="mt-7 max-w-[500px] text-base leading-8 text-white/75">
              Every legal matter starts with a conversation. Tell us
              what you are facing, and our team will help you understand
              your options and the next steps.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] sm:h-[380px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=90"
              alt="Professional law office"
              fill
              priority
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* CONTACT INTRO */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[3px] text-[#bd9568]">
                Get In Touch
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#304f51] md:text-5xl">
                We are Here When You Need Us.
              </h2>

              <p className="mt-6 leading-8 text-gray-500">
                Whether you need legal advice, representation, or simply
                want to discuss your situation, we are ready to listen.
                Reach out using the contact details below or send us a
                message.
              </p>

              <div className="mt-12 space-y-9">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 }}
                    className="flex gap-5 border-b border-gray-200 pb-8"
                  >
                    <span className="font-serif text-2xl text-[#bd9568]">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="font-serif text-xl text-[#304f51]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-gray-500">
                        {item.detail}
                      </p>

                      <a
                        href={item.link}
                        target={
                          item.link.startsWith("https") ? "_blank" : undefined
                        }
                        rel={
                          item.link.startsWith("https")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="mt-3 inline-block text-xs font-bold uppercase tracking-[1.5px] text-[#bd9568] transition hover:text-[#304f51]"
                      >
                        {item.label} ↗
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-[#f6f6f3] p-7 md:p-12"
            >
              <p className="text-xs font-semibold uppercase tracking-[3px] text-[#bd9568]">
                Send Us a Message
              </p>

              <h2 className="mt-4 font-serif text-3xl text-[#304f51] md:text-4xl">
                Tell Us About Your Legal Needs.
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                Fill out the form below. Our team will get back to you
                as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="mt-9 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-3 block text-xs font-bold uppercase tracking-wider text-[#304f51]"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Your full name"
                      className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#bd9568]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-3 block text-xs font-bold uppercase tracking-wider text-[#304f51]"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="Your email address"
                      className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#bd9568]"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-xs font-bold uppercase tracking-wider text-[#304f51]"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="Your phone number"
                      className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#bd9568]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-3 block text-xs font-bold uppercase tracking-wider text-[#304f51]"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      required
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm text-gray-500 outline-none focus:border-[#bd9568]"
                    >
                      <option value="">Select a subject</option>
                      <option value="Business Law">Business Law</option>
                      <option value="Family Law">Family Law</option>
                      <option value="Criminal Defense">Criminal Defense</option>
                      <option value="Real Estate Law">Real Estate Law</option>
                      <option value="Personal Injury">Personal Injury</option>
                      <option value="Other Legal Matter">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block text-xs font-bold uppercase tracking-wider text-[#304f51]"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us briefly about your legal matter..."
                    className="w-full resize-none border-b border-gray-300 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#bd9568]"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-between bg-[#304f51] px-7 py-5 text-xs font-bold uppercase tracking-[2px] text-white transition hover:bg-[#bd9568]"
                >
                  Send Your Message
                  <span className="text-lg">↗</span>
                </button>

                <p className="text-xs leading-6 text-gray-400">
                  Please do not include confidential or sensitive
                  information in this initial inquiry.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OFFICE IMAGE */}
      <section className="bg-[#f5f5f2] py-20">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#bd9568]">
              Our Office
            </p>

            <h2 className="mt-5 font-serif text-4xl text-[#304f51] md:text-5xl">
              A Place for Clear Conversations.
            </h2>

            <p className="mt-6 max-w-[500px] leading-8 text-gray-500">
              We welcome you to meet our team, discuss your concerns
              and explore the legal options available to you.
            </p>

            <a
              href="https://maps.google.com/?q=123+Legal+Street+New+York"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-4 border-b border-[#bd9568] pb-3 text-xs font-bold uppercase tracking-[2px] text-[#304f51] hover:text-[#bd9568]"
            >
              Find Our Office <span>↗</span>
            </a>
          </div>

          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=90"
              alt="Law firm office interior"
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#304f51] py-20 md:py-24">
        <div className="mx-auto max-w-[900px] px-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[3px] text-[#d0a16c]">
            We are Ready to Listen
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-white md:text-6xl">
            The Right Advice Can
            <span className="block italic text-[#d0a16c]">
              Make All the Difference.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[600px] leading-8 text-white/70">
            Take the first step toward resolving your legal matter.
            Speak with our team today.
          </p>

          <a
            href="tel:+1234567890"
            className="mt-9 inline-block bg-[#d0a16c] px-10 py-5 text-xs font-bold uppercase tracking-[2px] text-white transition hover:bg-white hover:text-[#304f51]"
          >
            Call Our Office
          </a>
        </div>
      </section>
    </main>
  );
}