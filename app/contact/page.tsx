
"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Scale,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";

// CONTACT INFORMATION
const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    detail: "123 Legal Street, New York, NY 10001",
    action: "Get Directions",
    href: "https://maps.google.com/?q=New+York",
  },
  {
    icon: Phone,
    title: "Call Our Office",
    detail: "+1 (234) 567-890",
    action: "Call Us",
    href: "tel:+1234567890",
  },
  {
    icon: Mail,
    title: "Email Our Team",
    detail: "info@lawfirm.com",
    action: "Send Email",
    href: "mailto:info@lawfirm.com",
  },
];

// INPUT STYLE
const inputStyle =
  "w-full rounded-[4px] border border-[#e4e5df] bg-white px-4 py-3.5 text-sm text-[#263d36] outline-none transition placeholder:text-gray-400 focus:border-[#263d36]";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  // FORM SUBMIT
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const subject = encodeURIComponent(
      `New Legal Enquiry - ${form.get("service")}`
    );

    const body = encodeURIComponent(
      `Name: ${form.get("name")}
Email: ${form.get("email")}
Phone: ${form.get("phone")}
Service: ${form.get("service")}
Subject: ${form.get("subject")}

Message:
${form.get("message")}`
    );

    window.location.href =
      `mailto:info@lawfirm.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  }

  return (
    <main className="overflow-hidden bg-[#faf9f6] font-sans text-[#263d36]">

      {/* ================= HERO ================= */}

      <section className="border-b border-[#e9e7df] bg-[#263d36]">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-2">

          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[2px] text-[#c5a47e]">
              <span className="h-px w-8 bg-[#c5a47e]" />
              Contact Our Firm
            </p>

            <h1 className="mt-7 max-w-[650px] text-4xl font-semibold leading-[1.2] tracking-tight text-white md:text-5xl lg:text-[62px]">
              Let&apos;s Talk About
              <span className="block text-[#c5a47e]">
                Your Legal Needs.
              </span>
            </h1>

            <p className="mt-6 max-w-[520px] text-sm leading-8 text-white/70 md:text-base">
              Whether you need legal advice, representation, or
              guidance on an important matter, our team is ready
              to listen and help you understand your options.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-3 rounded-[4px] bg-[#c5a47e] px-7 py-4 text-xs font-semibold uppercase tracking-wider text-[#263d36] transition hover:bg-white"
              >
                Make An Enquiry
                <ArrowUpRight size={17} />
              </a>

              <a
                href="tel:+1234567890"
                className="text-sm font-medium text-white transition hover:text-[#c5a47e]"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>

          {/* HERO IMAGE */}

          <div className="relative h-[320px] overflow-hidden rounded-[4px] md:h-[430px]">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=90"
              alt="Professional law firm office"
              className="h-full w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* LEFT SIDE */}

          <div>
            <p className="text-xs font-semibold uppercase tracking-[2px] text-[#a88965]">
              Get In Touch
            </p>

            <h2 className="mt-5 max-w-[450px] text-3xl font-semibold leading-snug tracking-tight md:text-4xl">
              We&apos;re Here When You Need Us.
            </h2>

            <p className="mt-5 max-w-[470px] text-sm leading-8 text-gray-500">
              We understand that every legal matter is different.
              Contact our team to arrange a consultation and
              discuss the best way forward.
            </p>

            {/* CONTACT DETAILS */}

            <div className="mt-10 space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-md border border-[#e9e7df] bg-white p-5 transition duration-200 hover:border-[#c5a47e] sm:p-6"
                  >
                    <div className="flex items-start gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] bg-[#f3f2ec] text-[#263d36] transition group-hover:bg-[#263d36] group-hover:text-white">
                        <Icon size={21} strokeWidth={1.7} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold">
                          {item.title}
                        </h3>

                        <p className="mt-2 break-words text-sm leading-6 text-gray-500">
                          {item.detail}
                        </p>

                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("https")
                              ? "_blank"
                              : undefined
                          }
                          rel="noreferrer"
                          className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#a88965] transition hover:text-[#263d36]"
                        >
                          {item.action}
                          <ArrowUpRight size={14} />
                        </a>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* OFFICE HOURS */}

            <div className="mt-7 rounded-md border border-[#e9e7df] bg-[#f3f2ec] p-6">

              <div className="flex items-center gap-3">
                <Clock size={20} />
                <h3 className="text-sm font-semibold">
                  Office Hours
                </h3>
              </div>

              <div className="mt-5 space-y-3 text-sm text-gray-500">
                <div className="flex justify-between gap-3">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-[#263d36]">
                    9:00 AM - 5:00 PM
                  </span>
                </div>

                <div className="flex justify-between gap-3">
                  <span>Saturday - Sunday</span>
                  <span className="font-medium text-[#263d36]">
                    Closed
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE - FORM */}

          <div
            id="contact-form"
            className="rounded-md border border-[#e9e7df] bg-white p-6 sm:p-9 md:p-11"
          >

            <div className="border-b border-[#e9e7df] pb-7">
              <p className="text-xs font-semibold uppercase tracking-[2px] text-[#a88965]">
                Send Us A Message
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                Tell Us How We Can Help.
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Fill out the form below and a member of our team
                will get back to you.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >

              {/* NAME + EMAIL */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2.5 block text-xs font-semibold">
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label className="mb-2.5 block text-xs font-semibold">
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Your email address"
                    className={inputStyle}
                  />
                </div>

              </div>

              {/* PHONE + SERVICE */}

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2.5 block text-xs font-semibold">
                    Phone Number
                  </label>

                  <input
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label className="mb-2.5 block text-xs font-semibold">
                    Legal Service <span className="text-red-500">*</span>
                  </label>

                  <select
                    name="service"
                    required
                    defaultValue=""
                    className={inputStyle}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Family Law</option>
                    <option>Business Law</option>
                    <option>Criminal Defense</option>
                    <option>Real Estate Law</option>
                    <option>Personal Injury</option>
                    <option>Other Legal Matter</option>
                  </select>
                </div>

              </div>

              {/* SUBJECT */}

              <div>
                <label className="mb-2.5 block text-xs font-semibold">
                  Subject
                </label>

                <input
                  name="subject"
                  type="text"
                  placeholder="Enter subject"
                  className={inputStyle}
                />
              </div>

              {/* MESSAGE */}

              <div>
                <label className="mb-2.5 block text-xs font-semibold">
                  Your Message <span className="text-red-500">*</span>
                </label>

                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about your legal matter..."
                  className={`${inputStyle} resize-none`}
                />
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="flex w-full items-center justify-between rounded-[4px] bg-[#263d36] px-7 py-4 text-xs font-semibold uppercase tracking-[1.5px] text-white transition duration-200 hover:bg-[#c5a47e] hover:text-[#263d36]"
              >
                Submit Your Enquiry
                <ArrowUpRight size={18} />
              </button>

              {submitted && (
                <p className="text-sm text-[#263d36]">
                  Your email application should open with your enquiry.
                </p>
              )}

              <p className="text-xs leading-6 text-gray-400">
                Please do not include confidential or sensitive
                information in your initial enquiry.
              </p>

            </form>
          </div>

        </div>
      </section>

      {/* ================= WHY CONTACT US ================= */}

      <section className="border-y border-[#e9e7df] bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">

          <div className="mb-12 max-w-[600px]">
            <p className="text-xs font-semibold uppercase tracking-[2px] text-[#a88965]">
              Our Commitment
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              A Professional Approach To Every Matter.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-md border border-[#e9e7df] p-7">
              <Scale size={27} strokeWidth={1.6} />

              <h3 className="mt-6 text-base font-semibold">
                Experienced Legal Team
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Our team provides professional guidance
                tailored to your legal requirements.
              </p>
            </div>

            <div className="rounded-md border border-[#e9e7df] p-7">
              <ShieldCheck size={27} strokeWidth={1.6} />

              <h3 className="mt-6 text-base font-semibold">
                Client-Focused Service
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                We take time to understand your concerns
                and explain your available options.
              </p>
            </div>

            <div className="rounded-md border border-[#e9e7df] p-7">
              <MessageSquare size={27} strokeWidth={1.6} />

              <h3 className="mt-6 text-base font-semibold">
                Clear Communication
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                We believe in clear communication and
                keeping clients informed throughout.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= OFFICE LOCATION ================= */}

      <section className="bg-[#faf9f6] py-20 md:py-24">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 md:px-10 lg:grid-cols-2">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[2px] text-[#a88965]">
              Find Our Office
            </p>

            <h2 className="mt-5 max-w-[500px] text-3xl font-semibold leading-snug md:text-4xl">
              Visit Us For A Personal Consultation.
            </h2>

            <p className="mt-5 max-w-[480px] text-sm leading-8 text-gray-500">
              We welcome clients to our office for appointments
              and legal consultations. Contact us in advance
              to arrange a convenient meeting time.
            </p>

            <div className="mt-8 flex items-start gap-4">
              <MapPin className="mt-1 shrink-0" size={20} />

              <div>
                <h3 className="text-sm font-semibold">
                  Office Address
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-500">
                  123 Legal Street, New York,
                  NY 10001
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=New+York"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-[4px] bg-[#263d36] px-7 py-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#c5a47e] hover:text-[#263d36]"
            >
              Get Directions
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="h-[300px] overflow-hidden rounded-[4px] border border-[#e9e7df] md:h-[400px]">
            <iframe
              title="Office location map"
              src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full border-0 grayscale"
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="bg-[#263d36] py-16 md:py-20">
        <div className="mx-auto max-w-[1400px] px-5 text-center md:px-10">

          <p className="text-xs font-semibold uppercase tracking-[2px] text-[#c5a47e]">
            Need Legal Assistance?
          </p>

          <h2 className="mx-auto mt-5 max-w-[750px] text-3xl font-semibold leading-tight text-white md:text-5xl">
            Let&apos;s Find The Right Way Forward Together.
          </h2>

          <p className="mx-auto mt-5 max-w-[600px] text-sm leading-7 text-white/65">
            Get in touch with our legal team to discuss
            your requirements and arrange a consultation.
          </p>

          <a
            href="tel:+1234567890"
            className="mt-8 inline-flex items-center gap-3 rounded-[4px] bg-[#c5a47e] px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#263d36] transition hover:bg-white"
          >
            Speak With Our Team
            <ArrowUpRight size={17} />
          </a>

        </div>
      </section>

    </main>
  );
}
