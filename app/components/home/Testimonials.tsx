
"use client";

import { useRef } from "react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Teresa Hamilton",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=85",
    review:
      "I had been facing challenges with family law for months until I discovered abc. They not only resolved my issues effectively but also guided me on how to avoid similar problems in the future. Their team is highly skilled, patient, and always prioritizes customer satisfaction. I truly appreciate their support and would highly recommend them to others.",
  },
  {
    name: "Monks Millar",
    role: "Business Consultant",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=85",
    review:
      "I was struggling with family law for months before I found abc. They not only provided me with the solution I needed, but they also educated me on how to prevent the issue from happening again. Their team is incredibly knowledgeable and patient, and they always go the extra mile to ensure customer satisfaction. I am so grateful for their help and would recommend them to anyone.",
  },
  {
    name: "Sophia Williams",
    role: "Marketing Specialist",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=85",
    review:
      "The team provided outstanding legal guidance throughout our case. They were professional, transparent, and always available to answer our questions. I would confidently recommend their services.",
  },
  {
    name: "James Anderson",
    role: "Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=85",
    review:
      "Excellent service from start to finish. Their attention to detail and commitment to achieving the best possible outcome made a difficult situation much easier. Truly a dependable legal team.",
  },
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left:
        direction === "left"
          ? -sliderRef.current.clientWidth
          : sliderRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f5f5f5] py-20 lg:py-24">

      {/* Dotted Background Decoration */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(#bd9568 1.8px, transparent 1.8px)",
          backgroundSize: "12px 12px",
          maskImage:
            "radial-gradient(ellipse at 20% 15%, black 0%, transparent 35%), radial-gradient(ellipse at 75% 20%, black 0%, transparent 35%), radial-gradient(ellipse at 50% 100%, black 0%, transparent 30%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1330px] px-5 lg:px-0">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="mb-4 font-serif text-xl text-[#bd915c]">
              Client Testimonials
            </p>

            <h2 className="font-serif text-4xl font-bold text-[#082522] md:text-5xl">
              What Our Clients Say
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll("left")}
              aria-label="Previous testimonials"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#bd9568] text-white transition-all duration-300 hover:bg-[#304f51] hover:shadow-lg"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 12H5m7 7-7-7 7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              onClick={() => handleScroll("right")}
              aria-label="Next testimonials"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#bd9568] text-white transition-all duration-300 hover:bg-[#304f51] hover:shadow-lg"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14m-7-7 7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Testimonials Slider */}
        <div
          ref={sliderRef}
          className="grid auto-cols-[100%] grid-flow-col gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3 scrollbar-hide sm:auto-cols-[85%] lg:auto-cols-[calc(50%-12px)]"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{ y: -7 }}
              className="relative snap-start overflow-hidden rounded-[25px] border-b-[6px] border-[#bd9568] bg-white px-7 py-10 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:px-10"
            >
              {/* Quote Decoration */}
              <div className="absolute right-0 top-0 flex h-[90px] w-28 items-center justify-center rounded-bl-[55px] bg-[#f5f5f5]">
                <span className="mt-5 font-serif text-[75px] font-bold leading-none text-[#304f51]">
                  &rdquo;
                </span>
              </div>

              {/* Client Info */}
              <div className="relative z-10 mb-6 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-20 w-20 shrink-0 rounded-full object-cover"
                />

                <div>
                  <h3 className="mb-1 font-serif text-xl font-bold text-[#092622] sm:text-2xl">
                    {item.name}
                  </h3>

                  <p className="mb-1 text-base text-[#999999]">
                    {item.role}
                  </p>

                  <div
                    className="flex items-center gap-1 text-lg text-[#ffa52d]"
                    aria-label="5 out of 5 stars"
                  >
                    ★ ★ ★ ★ ★
                  </div>
                </div>
              </div>

              {/* Review */}
              <p className="text-base leading-[1.75] text-[#898989]">
                &ldquo;{item.review}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
