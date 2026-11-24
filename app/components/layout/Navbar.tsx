
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavItem = {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
};

const navLinks: NavItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
    children: [
      { name: "Our Story", href: "/about" },
      { name: "Our Attorneys", href: "/attorneys" },
      { name: "Our Team", href: "/team" },
    ],
  },
  {
    name: "Service",
    href: "/services",
    children: [
      { name: "Family Law", href: "/services/family-law" },
      { name: "Criminal Law", href: "/services/criminal-law" },
      { name: "Business Law", href: "/services/business-law" },
      { name: "Real Estate Law", href: "/services/real-estate" },
    ],
  },
  {
    name: "Pages",
    href: "/pages",
    children: [
      { name: "Our Attorneys", href: "/attorneys" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "Pricing", href: "/pricing" },
      { name: "FAQ", href: "/faq" },
    ],
  },
  
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const headerRef = useRef<HTMLElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
        setMobileOpen(false);
        setSearchOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menus with Escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setSearchOpen(false);
        setActiveDropdown(null);
        setMobileDropdown(null);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen) {
      searchRef.current?.focus();
    }
  }, [searchOpen]);

  const closeMenus = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown((current) => (current === name ? null : name));
  };

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdown((current) => (current === name ? null : name));
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full bg-white shadow-sm"
    >
      {/* ================= TOP BAR ================= */}

      <div className="hidden min-h-[49px] bg-[#304f50] lg:flex">

        {/* LOGO SPACE */}
        <div className="w-[300px] shrink-0 bg-[#fff7ef]" />

        {/* CONTACT INFORMATION */}
        <div className="flex flex-1 items-center justify-between gap-4 px-6 xl:px-12">

          <div className="flex items-center gap-4 text-[13px] font-medium text-white xl:gap-5">

            <a
              href="tel:+15264855467"
              className="flex items-center gap-2 transition hover:text-[#c49a67]"
            >
              <PhoneIcon />
              + 152-6485-5467
            </a>

            <span className="h-5 w-px bg-white/40" />

            <a
              href="mailto:info@ensaf.com"
              className="flex items-center gap-2 transition hover:text-[#c49a67]"
            >
              <MailIcon />
              info@ensaf.com
            </a>

            <span className="h-5 w-px bg-white/40" />

            <div className="flex items-center gap-2">
              <LocationIcon />
              371 7th Ave, New York, NY 10001
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-5 text-white">

            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="transition hover:text-[#c49a67]">
              <FacebookIcon />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="transition hover:text-[#c49a67]">
              <TwitterIcon />
            </a>

            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="transition hover:text-[#c49a67]">
              <YoutubeIcon />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-[#c49a67]">
              <LinkedinIcon />
            </a>

          </div>
        </div>
      </div>

      {/* ================= MAIN NAVIGATION ================= */}

      <div className="relative flex min-h-[85px] w-full items-center lg:min-h-[102px]">

        {/* LOGO */}
        <div className="flex h-[85px] w-[190px] shrink-0 items-center justify-center bg-[#fff7ef] sm:w-[240px] lg:h-[102px] lg:w-[300px]">

          <Link
            href="/"
            onClick={closeMenus}
            className="flex items-center gap-2"
          >

            <svg
              className="h-[45px] w-[45px] text-[#304f50] sm:h-[55px] sm:w-[55px]"
              viewBox="0 0 64 64"
              fill="none"
            >
              <path
                d="M32 3 55 13v15c0 15-10 25-23 32C19 53 9 43 9 28V13L32 3Z"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <path
                d="M32 7v44M12 17l20-9 20 9"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M19 23h26M15 26h34"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M32 17 26 27h12l-6-10Z"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <path
                d="M15 30h34M22 34h20M25 42h14M29 46h6"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <text
                x="32"
                y="14"
                textAnchor="middle"
                fontSize="4"
                fill="currentColor"
              >
                JUSTICE
              </text>
            </svg>

            <div className="flex flex-col">
              <span className="text-[28px] font-bold leading-[34px] tracking-wide text-[#102f30] sm:text-[34px]">
                ENSAF
              </span>
              <span className="text-center text-[8px] tracking-[5px] text-[#304f50]">
                JUSTICE LAW
              </span>
            </div>

          </Link>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden flex-1 items-center justify-center gap-4 px-5 xl:gap-8 lg:flex">

          {navLinks.map((item) => (
            <div key={item.name} className="relative">

              {item.children ? (
                <>
                  <button
                    type="button"
                    onClick={() => toggleDropdown(item.name)}
                    aria-expanded={activeDropdown === item.name}
                    className={`flex items-center gap-1 whitespace-nowrap py-4 text-[15px] font-semibold transition hover:text-[#bd925e] xl:text-[16px] ${
                      activeDropdown === item.name
                        ? "text-[#bd925e]"
                        : "text-[#101010]"
                    }`}
                  >
                    {item.name}

                    <ChevronIcon
                      className={`transition-transform duration-300 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* DROPDOWN */}
                  <div
                    className={`absolute left-0 top-full z-50 min-w-[220px] rounded-sm bg-white py-3 shadow-xl transition-all duration-200 ${
                      activeDropdown === item.name
                        ? "visible translate-y-0 opacity-100"
                        : "invisible translate-y-3 opacity-0"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={closeMenus}
                        className="block border-b border-gray-100 px-6 py-3 text-[14px] font-medium text-[#333] transition last:border-0 hover:bg-[#fff7ef] hover:pl-8 hover:text-[#bd925e]"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={closeMenus}
                  className="whitespace-nowrap py-4 text-[15px] font-semibold text-[#101010] transition hover:text-[#bd925e] xl:text-[16px]"
                >
                  {item.name}
                </Link>
              )}

            </div>
          ))}

        </nav>

        {/* RIGHT ACTIONS */}
        <div className="ml-auto flex shrink-0 items-center gap-2 px-3 sm:gap-4 sm:px-5 lg:mr-5 lg:gap-4 lg:px-0 xl:mr-10">

          {/* SEARCH BUTTON */}
          <button
            type="button"
            aria-label="Open search"
            aria-expanded={searchOpen}
            onClick={() => {
              setSearchOpen(!searchOpen);
              setActiveDropdown(null);
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e1e1e1] text-[#0c292a] transition duration-300 hover:bg-[#304f50] hover:text-white sm:h-[52px] sm:w-[52px] lg:h-[56px] lg:w-[56px]"
          >
            {searchOpen ? <CloseIcon /> : <SearchIcon />}
          </button>

          {/* CONSULTATION BUTTON */}
          <Link
            href="/contact"
            className="hidden h-[52px] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#bd925e] px-6 text-[13px] font-bold text-white transition duration-300 hover:bg-[#304f50] xl:px-9 sm:flex lg:h-[56px]"
          >
            Free Consultation
            <ArrowIcon />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setSearchOpen(false);
              setActiveDropdown(null);
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e1e1e1] text-[#0c292a] transition hover:bg-[#304f50] hover:text-white sm:h-[52px] sm:w-[52px] lg:h-[56px] lg:w-[56px]"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

        </div>

        {/* ================= SEARCH PANEL ================= */}

        <div
          className={`absolute left-0 top-full z-50 w-full border-t border-gray-100 bg-white px-5 py-5 shadow-xl transition-all duration-300 ${
            searchOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-3 opacity-0"
          }`}
        >
          <form
            action="/search"
            method="GET"
            className="mx-auto flex max-w-[800px] gap-3"
          >
            <input
              ref={searchRef}
              type="search"
              name="q"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for legal services, articles..."
              aria-label="Search website"
              className="h-[52px] min-w-0 flex-1 rounded-sm border border-gray-200 px-5 text-sm text-gray-800 outline-none transition focus:border-[#bd925e]"
            />

            <button
              type="submit"
              disabled={!searchQuery.trim()}
              className="flex h-[52px] items-center justify-center gap-2 rounded-sm bg-[#304f50] px-6 text-sm font-bold text-white transition hover:bg-[#bd925e] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <SearchIcon />
              Search
            </button>
          </form>
        </div>

        {/* ================= MOBILE NAVIGATION ================= */}

        <div
          className={`absolute left-0 top-full z-40 w-full overflow-y-auto border-t border-gray-100 bg-white shadow-xl transition-all duration-300 lg:hidden ${
            mobileOpen
              ? "visible max-h-[calc(100vh-85px)] opacity-100"
              : "invisible max-h-0 opacity-0"
          }`}
        >
          <nav className="px-5 py-3">

            {navLinks.map((item) => (
              <div key={item.name} className="border-b border-gray-100">

                <div className="flex items-center justify-between">

                  <Link
                    href={item.href}
                    onClick={closeMenus}
                    className="flex-1 py-4 text-[15px] font-semibold text-[#101010] transition hover:text-[#bd925e]"
                  >
                    {item.name}
                  </Link>

                  {item.children && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.name} submenu`}
                      aria-expanded={mobileDropdown === item.name}
                      onClick={() => toggleMobileDropdown(item.name)}
                      className="flex h-10 w-10 items-center justify-center text-[#304f50] hover:text-[#bd925e]"
                    >
                      <ChevronIcon
                        className={`transition-transform duration-300 ${
                          mobileDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}

                </div>

                {/* MOBILE SUBMENU */}
                {item.children && (
                  <div
                    className={`grid transition-all duration-300 ${
                      mobileDropdown === item.name
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">

                      <div className="mb-3 ml-3 border-l-2 border-[#bd925e]">

                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={closeMenus}
                            className="block px-5 py-3 text-[14px] text-gray-600 transition hover:text-[#bd925e]"
                          >
                            {child.name}
                          </Link>
                        ))}

                      </div>
                    </div>
                  </div>
                )}

              </div>
            ))}

            {/* MOBILE CONSULTATION */}
            <Link
              href="/contact"
              onClick={closeMenus}
              className="mt-5 flex h-[52px] items-center justify-center gap-2 rounded-full bg-[#bd925e] text-sm font-bold text-white transition hover:bg-[#304f50]"
            >
              Free Consultation
              <ArrowIcon />
            </Link>

            {/* MOBILE CONTACT INFO */}
            <div className="mt-6 space-y-4 pb-5 text-sm text-gray-600">

              <a href="tel:+15264855467" className="flex items-center gap-3">
                <PhoneIcon />
                + 152-6485-5467
              </a>

              <a href="mailto:info@ensaf.com" className="flex items-center gap-3">
                <MailIcon />
                info@ensaf.com
              </a>

              <div className="flex items-center gap-3">
                <LocationIcon />
                371 7th Ave, New York, NY 10001
              </div>

            </div>

          </nav>
        </div>

      </div>
    </header>
  );
}

/* ================= SVG ICONS ================= */

function PhoneIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3l2 5-3 2a16 16 0 007 7l2-3 5 2v3a2 2 0 01-2 2C10 21 3 14 3 5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="14" rx="1" strokeWidth="2" />
      <path d="m3 7 9 6 9-6" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1116 0z" />
      <circle cx="12" cy="10" r="2.5" strokeWidth="2" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="10.8" cy="10.8" r="6.8" strokeWidth="2" />
      <path d="m16 16 5 5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="m6 6 12 12M18 6 6 18" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M5 12h14m-6-6 6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={`h-4 w-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="m6 9 6 6 6-6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 5.9c-.7.3-1.5.5-2.3.6a4 4 0 001.8-2.2 8 8 0 01-2.5 1 4 4 0 00-6.9 3.7 11.4 11.4 0 01-8.3-4.2 4 4 0 001.2 5.3 4 4 0 01-1.8-.5v.1a4 4 0 003.2 3.9 4 4 0 01-1.8.1 4 4 0 003.7 2.8A8 8 0 013 18.2a11.3 11.3 0 006.2 1.8c7.4 0 11.5-6.1 11.5-11.5v-.5A8 8 0 0022 5.9z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23 7a3 3 0 00-2-2C19 4.5 12 4.5 12 4.5S5 4.5 3 5a3 3 0 00-2 2 31 31 0 000 10 3 3 0 002 2c2 .5 9 .5 9 .5s7 0 9-.5a3 3 0 002-2 31 31 0 000-10zM10 15.5v-7l6 3.5z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M5 3a2 2 0 110 4 2 2 0 010-4zM3 9h4v12H3zm6 0h4v1.7c.6-1.1 1.7-2 3.7-2 3.6 0 4.3 2.4 4.3 5.5V21h-4v-6c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3V21H9z" />
    </svg>
  );
}
