import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { legalServices } from "../../components/services/serviceData";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return legalServices.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = legalServices.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return {
    title: `${service.title} | ENSAF`,
    description: service.description,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-[70vh] items-center justify-center bg-[#092622] text-white">
          <p className="font-serif text-xl">Loading service information...</p>
        </main>
      }
    >
      <ServiceContent params={params} />
    </Suspense>
  );
}

async function ServiceContent({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = legalServices.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#062522] px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-[1400px]">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/60"
          >
            <Link href="/" className="transition hover:text-[#bd925e]">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/services" className="transition hover:text-[#bd925e]">
              Services
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">{service.title}</span>
          </nav>

          <div className="grid items-center gap-14 pb-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:pb-10">
            <div className="relative z-10 py-4 lg:py-12">
              <p className="mb-5 flex items-center gap-3 font-serif text-xl text-[#bd925e]">
                <span className="h-px w-10 bg-[#bd925e]" />
                {service.eyebrow}
              </p>
              <h1 className="max-w-2xl font-serif text-5xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-[72px]">
                {service.title}
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
                {service.lead}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center gap-3 rounded-full bg-[#bd925e] px-8 text-sm font-bold text-white transition hover:bg-white hover:text-[#092622]"
                >
                  Book a Consultation
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="#practice-areas"
                  className="text-sm font-semibold text-white/75 transition hover:text-[#bd925e]"
                >
                  Explore this practice
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[650px] lg:ml-auto">
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-3 h-full w-full rounded-tr-[105px] border-[3px] border-[#bd925e] sm:-right-5 sm:-top-5"
              />
              <div className="relative z-10 h-[390px] overflow-hidden rounded-tr-[95px] rounded-bl-[95px] border border-white/40 sm:h-[490px] lg:h-[545px]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  preload
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062522]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 max-w-[390px] p-7 sm:p-9">
                  <p className="text-xs font-bold uppercase tracking-[3px] text-[#e2bd8c]">
                    ENSAF · Legal Counsel
                  </p>
                  <p className="mt-3 font-serif text-2xl leading-snug text-white sm:text-3xl">
                    Guidance shaped around your next step.
                  </p>
                </div>
              </div>
              <div className="absolute -left-5 top-1/2 z-20 hidden h-24 w-24 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-[#304f50] text-[#bd925e] shadow-xl sm:flex">
                <svg
                  aria-hidden="true"
                  className="h-12 w-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M24 4 41 12v11c0 10-7 17-17 21C14 40 7 33 7 23V12l17-8Z"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M24 13v20M14 19h20M16 21l-5 9h10l-5-9Zm16 0-5 9h10l-5-9Z"
                    strokeWidth="1.4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f5] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1298px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#bd925e]">
              A considered approach
            </p>
            <h2 className="max-w-2xl font-serif text-4xl leading-tight text-[#082522] sm:text-5xl">
              {service.overviewHeading}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#68716c]">
              {service.overview}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[1.5px] text-[#304f51] transition hover:text-[#bd925e]"
            >
              Speak with our team
              <span aria-hidden="true" className="text-lg">
                →
              </span>
            </Link>
          </div>

          <blockquote className="relative border-l-2 border-[#bd925e] bg-white px-8 py-9 shadow-[0_20px_60px_rgba(8,37,34,0.07)] sm:px-11 sm:py-12">
            <span
              aria-hidden="true"
              className="absolute right-7 top-2 font-serif text-7xl leading-none text-[#bd925e]/20"
            >
              ”
            </span>
            <p className="relative font-serif text-2xl leading-snug text-[#304f51] sm:text-3xl">
              {service.callout}
            </p>
            <footer className="mt-7 text-xs font-bold uppercase tracking-[2px] text-[#bd925e]">
              The ENSAF perspective
            </footer>
          </blockquote>
        </div>
      </section>

      <section
        id="practice-areas"
        className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-[1298px]">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#bd925e]">
                What we handle
              </p>
              <h2 className="font-serif text-4xl leading-tight text-[#082522] sm:text-5xl">
                {service.title} services
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[#737a75]">
              Every matter is different. We take time to understand the details
              and provide guidance suited to your circumstances.
            </p>
          </div>

          <div className="grid border-l border-t border-[#e6e5df] sm:grid-cols-2 lg:grid-cols-3">
            {service.areas.map((area, index) => (
              <article
                key={area.title}
                className="group border-b border-r border-[#e6e5df] p-7 transition-colors duration-300 hover:bg-[#304f51] sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-sm text-[#bd925e]">
                    0{index + 1}
                  </span>
                  <span className="h-px w-10 bg-[#bd925e]/50 transition-all group-hover:w-16 group-hover:bg-[#bd925e]" />
                </div>
                <h3 className="mt-10 font-serif text-2xl text-[#183d39] transition-colors group-hover:text-white">
                  {area.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#737a75] transition-colors group-hover:text-white/75">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#304f51] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1298px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#d2aa78]">
              Working together
            </p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              Good counsel starts with listening.
            </h2>
            <p className="mt-6 max-w-lg leading-8 text-white/70">
              We explain the process, answer your questions, and help you
              consider your options before deciding on a path forward.
            </p>
          </div>

          <div className="divide-y divide-white/20 border-y border-white/20">
            {service.approach.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-3 py-6 sm:grid-cols-[70px_1fr] sm:gap-6"
              >
                <span className="font-serif text-2xl text-[#d2aa78]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-serif text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/70">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#092622] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto flex max-w-[1298px] flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#bd925e]">
              Take the next step
            </p>
            <h2 className="font-serif text-4xl leading-tight text-white sm:text-5xl">
              Talk with our legal team.
            </h2>
            <p className="mt-4 leading-7 text-white/70">
              Contact ENSAF to discuss your situation and learn how we may be
              able to help.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-[#bd925e] px-9 text-sm font-bold text-white transition hover:bg-white hover:text-[#092622]"
          >
            Contact Us
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
