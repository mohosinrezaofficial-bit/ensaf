"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#304f51] px-5 py-20">
      {/* Decorative Elements */}
      <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full border border-white/10" />
      <div className="absolute -bottom-40 -left-40 h-[550px] w-[550px] rounded-full border border-white/10" />

      <div className="absolute left-[10%] top-[15%] h-20 w-20 border border-[#d0a16c]/30" />
      <div className="absolute bottom-[15%] right-[12%] h-28 w-28 border border-[#d0a16c]/30" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto w-full max-w-[850px] text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[4px] text-[#d0a16c]">
          Page Not Found
        </p>

        <h1 className="mt-5 font-serif text-[120px] font-medium leading-none text-white sm:text-[180px] md:text-[230px]">
          404
        </h1>

        <div className="mx-auto mt-2 h-[2px] w-20 bg-[#d0a16c]" />

        <h2 className="mt-8 font-serif text-3xl text-white sm:text-4xl md:text-5xl">
          Looks Like You have Taken
          <span className="block italic text-[#d0a16c]">
            A Wrong Turn.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-[520px] text-sm leading-8 text-white/70 md:text-base">
          The page you are looking for may have been moved, removed, or
          no longer exists. Dont worry, lets get you back on the right path.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="flex w-full items-center justify-center gap-3 bg-[#d0a16c] px-9 py-5 text-xs font-bold uppercase tracking-[2px] text-white transition hover:bg-white hover:text-[#304f51] sm:w-auto"
          >
            <span>←</span>
            Back To Homepage
          </Link>

          <Link
            href="/contact"
            className="flex w-full items-center justify-center border border-white/40 px-9 py-5 text-xs font-bold uppercase tracking-[2px] text-white transition hover:border-[#d0a16c] hover:text-[#d0a16c] sm:w-auto"
          >
            Contact Us
            <span className="ml-3">↗</span>
          </Link>
        </div>

        <p className="mt-16 text-[11px] uppercase tracking-[3px] text-white/40">
          Professional Legal Services · Trusted Representation
        </p>
      </motion.div>
    </main>
  );
}