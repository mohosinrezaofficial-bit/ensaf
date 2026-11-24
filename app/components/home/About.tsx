
import Image from "next/image";
import Link from "next/link";

const aboutImages = [
  {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=85",
    alt: "Justice balance scale",
  },
  {
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=85",
    alt: "Professional legal team",
  },
  {
    src: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=85",
    alt: "Law books and legal office",
  },
];

const features = [
  "Committed to excellence in legal practice.",
  "Act with honesty and uphold ethical principles.",
  "Road Test Preparation with 98% success",
  "Meeting clients' needs is our priority.",
];

function TrustBadge() {
  return (
    <div className="absolute left-1/2 top-1/2 z-20 flex h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-[#304f50] shadow-lg sm:h-[120px] sm:w-[120px]">
      <div className="flex h-[92px] w-[92px] flex-col items-center justify-center rounded-full border border-white/50 sm:h-[100px] sm:w-[100px]">
        <span className="text-[10px] font-bold tracking-[4px] text-white">
          TRUST
        </span>

        <svg
          viewBox="0 0 48 48"
          className="my-1 h-9 w-9 text-[#bd925e]"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M24 3 43 12v12c0 11-8 18-19 21C13 42 5 35 5 24V12L24 3Z"
            strokeWidth="1.7"
          />
          <path
            d="M24 10v26M12 18h24M15 22l-5 10h10l-5-10Zm18 0-5 10h10l-5-10Z"
            strokeWidth="1.5"
          />
        </svg>

        <span className="text-[9px] font-bold tracking-[3px] text-white">
          FOREVER
        </span>
      </div>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <svg
        className="h-[17px] w-[17px] shrink-0 text-[#092b27]"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16Zm3.7-10.3a1 1 0 00-1.4-1.4L9 9.6 7.7 8.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4Z"
          clipRule="evenodd"
        />
      </svg>

      <p className="text-[15px] font-medium text-[#102f2c] sm:text-[17px]">
        {text}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#f7f7f7]"
    >
      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-20 lg:px-8 lg:py-24">

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-[70px]">

          {/* LEFT IMAGE COLLAGE */}
          <div className="relative mx-auto w-full max-w-[720px]">

            {/* OUTER DECORATIVE BORDER */}
            <div className="absolute -left-3 -top-3 h-[85%] w-[45%] rounded-tl-[90px] border-l border-t border-[#304f50] sm:-left-6 sm:-top-6" />

            <div className="relative grid grid-cols-2 gap-4 sm:gap-6">

              {/* IMAGE 1 */}
              <div className="relative mt-0 h-[400px] overflow-hidden rounded-tl-[90px] rounded-br-[90px] sm:h-[575px]">
                <Image
                  src={aboutImages[0].src}
                  alt={aboutImages[0].alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 350px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* RIGHT IMAGES */}
              <div className="flex flex-col gap-4 sm:gap-6">

                {/* IMAGE 2 */}
                <div className="relative h-[190px] overflow-hidden rounded-tl-[65px] rounded-tr-[65px] rounded-br-[65px] sm:h-[275px] sm:rounded-tl-[95px] sm:rounded-tr-[95px] sm:rounded-br-[95px]">
                  <Image
                    src={aboutImages[1].src}
                    alt={aboutImages[1].alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 350px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* IMAGE 3 */}
                <div className="relative h-[190px] overflow-hidden rounded-tr-[65px] rounded-br-[65px] rounded-bl-[65px] sm:h-[275px] sm:rounded-tr-[95px] sm:rounded-br-[95px] sm:rounded-bl-[95px]">
                  <Image
                    src={aboutImages[2].src}
                    alt={aboutImages[2].alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 350px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

              </div>
            </div>

            {/* CENTER TRUST BADGE */}
            <TrustBadge />
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative z-10">

            {/* SUBTITLE */}
            <p className="mb-5 text-xl font-medium text-[#bd925e]">
              About Us
            </p>

            {/* HEADING */}
            <h2 className="mb-5 text-4xl font-bold leading-[1.08] text-[#092b27] sm:text-5xl lg:text-[56px]">
              A Legacy Of Legal
              <br className="hidden sm:block" />
              Excellence
            </h2>

            {/* DESCRIPTION */}
            <p className="max-w-[530px] text-[15px] leading-[28px] text-[#888888] sm:text-[16px]">
              Our team of experienced attorneys has a diverse range of
              expertise, covering a wide spectrum of legal areas. We specialize
              in corporate law, family law.
            </p>

            {/* FEATURES */}
            <div className="mt-7 space-y-4">
              {features.map((feature) => (
                <FeatureItem key={feature} text={feature} />
              ))}
            </div>

            {/* BUTTON */}
            <div className="mt-11">
              <Link
                href="/about"
                className="inline-flex h-[56px] items-center gap-3 rounded-full bg-[#bd925e] px-10 text-sm font-bold text-white transition-all duration-300 hover:bg-[#304f50]"
              >
                More About

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

        </div>
      </div>

      {/* DECORATIVE BACKGROUND IMAGES */}

      {/* LEFT DECORATION */}
      <div className="pointer-events-none absolute -left-5 bottom-0 hidden opacity-[0.08] lg:block">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=80"
          alt=""
          width={250}
          height={350}
          className="w-[250px] object-cover"
        />
      </div>

      {/* TOP RIGHT DECORATION */}
      <div className="pointer-events-none absolute right-10 top-12 hidden opacity-[0.08] lg:block">
        <Image
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=400&q=80"
          alt=""
          width={180}
          height={180}
          className="w-[180px] object-cover"
        />
      </div>

      {/* BOTTOM RIGHT DECORATION */}
      <div className="pointer-events-none absolute -bottom-20 right-0 hidden opacity-20 lg:block">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80"
          alt=""
          width={300}
          height={350}
          className="w-[300px] object-cover"
        />
      </div>
    </section>
  );
}
