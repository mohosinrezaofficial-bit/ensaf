
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const pages = [
  { name: "About Us", href: "/about" },
  { name: "Our Blog", href: "/blog" },
  { name: "Our Team", href: "/team" },
  { name: "Contact Us", href: "/contact" },
  { name: "Pricing Plans", href: "/pricing" },
  { name: "Testimonials", href: "/testimonials" },
];

const services = [
  { name: "Real Estate Law", href: "/services/real-estate" },
  { name: "Personal Injury", href: "/services/personal-injury" },
  { name: "Corporate Law", href: "/services/corporate-law" },
  { name: "Criminal Law", href: "/services/criminal-law" },
  { name: "Health Care", href: "/services/health-care" },
  { name: "Family Law", href: "/services/family-law" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim()) {
      setStatus("Please enter your email address.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Subscription failed.");
      }

      setStatus("Thank you! Your subscription was successful.");
      setEmail("");
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="w-full">

      {/* ================= NEWSLETTER ================= */}

      <section className="grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT NEWSLETTER */}
        <div className="relative flex min-h-[220px] flex-col justify-center overflow-hidden bg-[#304f51] px-6 py-14 md:px-12 lg:pl-[max(calc((100vw-1330px)/2),48px)]">

          {/* DECORATIVE GAVEL */}
          <div className="absolute left-0 top-0 opacity-[0.09]">
            <svg
              className="h-48 w-64 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 200 150"
            >
              <path d="m30 80 55-50 18 20-55 50zM80 25l15-15 20 20-15 15zM40 110h100M55 120h75M70 130h45" />
            </svg>
          </div>

          <div className="relative z-10">
            <p className="mb-4 font-serif text-lg font-bold text-white">
              Newsletter
            </p>

            <h2 className="max-w-[500px] font-serif text-3xl font-bold text-white md:text-4xl">
              Sign Up To Get Latest Update
            </h2>
          </div>
        </div>

        {/* RIGHT NEWSLETTER FORM */}
        <div
          className="relative flex min-h-[220px] items-center bg-cover bg-center px-6 py-14 md:px-12"
          style={{
            backgroundImage: "url('/images/newsletter-bg.jpg')",
          }}
        >

          <div className="absolute inset-0 bg-[#071d19]/75" />

          <div className="relative z-10 mx-auto w-full max-w-[620px]">

            <form
              onSubmit={handleSubscribe}
              className="flex w-full items-center rounded-full border border-white/30 bg-white/10 p-1"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Your email address"
                autoComplete="email"
                required
                disabled={loading}
                className="w-full min-w-0 bg-transparent px-5 py-4 text-sm text-white outline-none placeholder:text-white/80 disabled:opacity-60"
              />

              <button
                type="submit"
                disabled={loading}
                className="shrink-0 rounded-full bg-[#bd9568] px-5 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#a77b49] disabled:cursor-not-allowed disabled:opacity-60 sm:px-9"
              >
                {loading ? "Sending..." : "Subscribe Now"}
                {!loading && <span className="ml-2">→</span>}
              </button>
            </form>

            {status && (
              <p
                role="status"
                aria-live="polite"
                className="mt-3 px-4 text-sm text-white"
              >
                {status}
              </p>
            )}

          </div>
        </div>

      </section>

      {/* ================= MAIN FOOTER ================= */}

      <section className="bg-[#001e1a] py-16 text-white md:py-20">

        <div className="mx-auto max-w-[1330px] px-6">

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[0.85fr_1fr_1.8fr_1.5fr] lg:gap-12">

            {/* PAGES */}
            <div className="lg:border-r lg:border-white/10">

              <h3 className="mb-6 font-serif text-xl font-bold">
                Pages
              </h3>

              <ul className="space-y-4 text-[15px] text-[#a9b8c1]">

                {pages.map((page) => (
                  <li key={page.name}>
                    <Link
                      href={page.href}
                      className="transition duration-300 hover:text-[#bd9568]"
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}

              </ul>
            </div>

            {/* SERVICES */}
            <div className="lg:border-r lg:border-white/10">

              <h3 className="mb-6 font-serif text-xl font-bold">
                Our Services
              </h3>

              <ul className="space-y-4 text-[15px] text-[#a9b8c1]">

                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="transition duration-300 hover:text-[#bd9568]"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}

              </ul>
            </div>

            {/* COMPANY INFORMATION */}
            <div className="text-center lg:border-r lg:border-white/10 lg:px-8">

              {/* LOGO */}
              <Link
                href="/"
                className="mb-6 inline-flex flex-col items-center"
              >

                <svg
                  className="h-16 w-16 text-[#bd9568]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  viewBox="0 0 80 80"
                >
                  <path d="M40 5 68 18 63 52 40 70 17 52 12 18z" />
                  <path d="M25 29h30M40 18v32M25 29l-8 13h16zM55 29l-8 13h16zM25 51h30" />
                  <path d="M31 57h18" />
                </svg>

                <span className="font-serif text-2xl tracking-wider">
                  ENSAF
                </span>

                <span className="text-[8px] tracking-[4px] text-[#bd9568]">
                  JUSTICE & LAW
                </span>

              </Link>

              <p className="mb-7 text-[15px] leading-7 text-[#a9b8c1]">
                Ensaf is a Saudi Arabian law firm founded in 1982.
                They offer a wide range of legal services, including
                corporate law and commercial law.
              </p>

              {/* SOCIAL LINKS */}
              <div className="flex justify-center gap-2">

                <SocialLink href="https://facebook.com" label="Facebook">
                  <FacebookIcon />
                </SocialLink>

                <SocialLink href="https://twitter.com" label="Twitter">
                  <TwitterIcon />
                </SocialLink>

                <SocialLink href="https://linkedin.com" label="LinkedIn">
                  <LinkedinIcon />
                </SocialLink>

                <SocialLink href="https://whatsapp.com" label="WhatsApp">
                  <WhatsAppIcon />
                </SocialLink>

              </div>
            </div>

            {/* CONTACT INFORMATION */}
            <div className="lg:pl-7">

              {/* LOCATION */}
              <ContactItem title="Location">
                <LocationIcon />
                <address className="not-italic text-[15px] leading-7 text-[#a9b8c1]">
                  371 7th Ave, New York, NY
                  <br />
                  10001
                </address>
              </ContactItem>

              {/* PHONE */}
              <ContactItem title="Phone">
                <PhoneIcon />
                <div className="text-[15px] leading-7 text-[#a9b8c1]">
                  <a href="tel:+15264855467" className="block transition hover:text-[#bd9568]">
                    +152-6485-5467
                  </a>
                  <a href="tel:+15264855467" className="block transition hover:text-[#bd9568]">
                    +152-6485-5467
                  </a>
                </div>
              </ContactItem>

              {/* EMAIL */}
              <ContactItem title="Email">
                <MailIcon />
                <div className="text-[15px] leading-7 text-[#a9b8c1]">
                  <a href="mailto:info@ensaf.com" className="block transition hover:text-[#bd9568]">
                    info@ensaf.com
                  </a>
                  <a href="mailto:info@ensaf.com" className="block transition hover:text-[#bd9568]">
                    info@ensaf.com
                  </a>
                </div>
              </ContactItem>

            </div>

          </div>
        </div>
      </section>

      {/* ================= COPYRIGHT ================= */}

      <div className="bg-[#304f51] px-5 py-6 text-center">

        <p className="text-sm text-white sm:text-base">
          Copyright © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-[#bd9568]">
            Ensaf.
          </span>{" "}
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#153631] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#bd9568]"
    >
      {children}
    </a>
  );
}

function ContactItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex items-center gap-4 last:mb-0">

      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#153631] text-[#bd9568]">
        {children && (
          <span className="flex h-6 w-6 items-center justify-center">
            {/* Contact icon is supplied as the first child */}
            {Array.isArray(children) ? children[0] : null}
          </span>
        )}
      </div>

      <div>
        <h3 className="mb-1 font-serif text-xl font-bold">
          {title}
        </h3>

        {Array.isArray(children) ? children[1] : children}
      </div>

    </div>
  );
}

/* ================= ICONS ================= */

function LocationIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 3.2 2 2 0 0 1 4.1 1h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 8.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 7L2 7" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
      <path d="M22 5.9a8 8 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.7 1 4.2 4.2 0 0 0-7.2 3.8 12 12 0 0 1-8.7-4.4 4.2 4.2 0 0 0 1.3 5.6 4.2 4.2 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4 4 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.5 8.5 0 0 1 1 18.8a12 12 0 0 0 18.5-10.1v-.6A8.5 8.5 0 0 0 22 5.9" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
      <path d="M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM3 9h4v12H3zm7 0h4v1.7a4.3 4.3 0 0 1 3.8-2c3.8 0 4.2 2.5 4.2 5.7V21h-4v-5.8c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1V21h-4z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 0 0-8.7 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.3-.6-1.5-.7s-.4-.1-.5.1-.6.7-.7.9-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7.1 7.1 0 0 1-1.3-1.6c-.1-.2 0-.3.1-.5l.4-.4.2-.4c.1-.2 0-.3 0-.5l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3s-.8.8-.8 1.9.8 2.2.9 2.4a9 9 0 0 0 3.5 3.1c.5.2.9.4 1.2.4.5.2 1 .2 1.3.1.4-.1 1.3-.5 1.5-1s.2-.9.2-1-.1-.2-.3-.3z" />
    </svg>
  );
}
