
import Image from "next/image";
import Link from "next/link";

const clientImages = [
  "https://i.pravatar.cc/150?img=12",
  "https://i.pravatar.cc/150?img=33",
  "https://i.pravatar.cc/150?img=47",
];

export default function Hero() {
  return (
    <section className="relative min-h-[700px] overflow-hidden bg-[#062522] lg:min-h-[780px]">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
          alt="Law background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#00231f]/90" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#00231f]/90 via-[#00231f]/75 to-[#00231f]/80" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative mx-auto flex min-h-[700px] max-w-[1400px] items-center px-6 py-20 lg:min-h-[780px] lg:px-8 lg:py-0">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2 lg:gap-20">

          {/* LEFT CONTENT */}
          <div className="relative z-10">

            {/* SUBTITLE */}
            <p className="mb-4 font-serif text-xl text-[#bd925e]">
              Your Guardian In Law
            </p>

            {/* HEADING */}
            <h1 className="font-serif text-5xl font-bold leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-[76px]">
              Experienced
              <br />
              Attorneys, Trusted
              <br />
              Results
            </h1>

            {/* CLIENT REVIEW */}
            <div className="mt-8 flex flex-wrap items-center gap-4">

              {/* CLIENT AVATARS */}
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

              {/* REVIEW TEXT */}
              <div>
                <p className="font-serif text-base font-semibold text-white">
                  We Have To 2k+ Happy Client
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

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto lg:mr-5">

            {/* GOLD BORDER FRAME */}
            <div className="absolute -right-3 -top-3 h-full w-full rounded-tr-[115px] border-[3px] border-[#bd925e] sm:-right-5 sm:-top-5" />

            {/* MAIN IMAGE */}
            <div className="relative z-10 h-[430px] overflow-hidden rounded-tr-[105px] rounded-bl-[105px] border border-white sm:h-[500px] lg:h-[568px]">

              <Image
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744"
                alt="Justice and legal services"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
              />

            </div>

            {/* CIRCULAR TRUST BADGE */}
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

        {/* SLIDER DOTS */}
        <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col gap-5 lg:flex">

          <span className="h-[10px] w-[10px] rounded-full bg-white" />

          <span className="h-[10px] w-[10px] rounded-full bg-[#bd925e]" />

          <span className="h-[10px] w-[10px] rounded-full bg-white" />

        </div>

      </div>
    </section>
  );
}
