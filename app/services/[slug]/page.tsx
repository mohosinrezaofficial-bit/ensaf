import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = legalServices.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-[#062522] px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 h-[440px] w-[440px] rounded-full border border-white/10 sm:h-[600px] sm:w-[600px]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 h-[310px] w-[310px] rounded-full border border-[#bd925e]/30 sm:h-[460px] sm:w-[460px]"
        />

        <div className="relative mx-auto max-w-[1298px]">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/60"
          >
            <Link href="/" className="transition hover:text-[#bd925e]">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href="/services"
              className="transition hover:text-[#bd925e]"
            >
              Services
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">{service.title}</span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-5 font-serif text-xl text-[#bd925e]">
              {service.eyebrow}
            </p>
            <h1 className="font-serif text-5xl font-bold leading-[1.12] text-white sm:text-6xl lg:text-[76px]">
              {service.title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              {service.lead}
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex h-14 items-center gap-3 rounded-full bg-[#bd925e] px-9 text-sm font-bold text-white transition hover:bg-white hover:text-[#092622]"
            >
              Request a Consultation
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f2] px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1298px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#bd925e]">
              How We Help
            </p>
            <h2 className="font-serif text-4xl leading-tight text-[#082522] sm:text-5xl">
              {service.overviewHeading}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#68716c]">
              {service.overview}
            </p>
          </div>

          <div className="border-l-2 border-[#bd925e] bg-white p-8 shadow-sm sm:p-10">
            <p className="font-serif text-2xl leading-snug text-[#304f51]">
              Every matter deserves careful attention, clear communication, and
              a strategy shaped around the people involved.
            </p>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[2px] text-[#bd925e]">
              The ENSAF approach
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[1298px]">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#bd925e]">
              What We Handle
            </p>
            <h2 className="font-serif text-4xl leading-tight text-[#082522] sm:text-5xl">
              {service.title} Services
            </h2>
          </div>

          <div className="grid border-l border-t border-[#e6e5df] sm:grid-cols-2 lg:grid-cols-3">
            {service.areas.map((area, index) => (
              <article
                key={area.title}
                className="border-b border-r border-[#e6e5df] p-7 transition-colors hover:bg-[#f8f6f1] sm:p-9"
              >
                <span className="font-serif text-sm text-[#bd925e]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 font-serif text-2xl text-[#183d39]">
                  {area.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#737a75]">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#304f51] px-6 py-20 text-white sm:py-24 lg:px-8">
        <div className="mx-auto max-w-[1298px]">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#d2aa78]">
              Our Commitment
            </p>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              Support built around your needs.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {service.approach.map((item, index) => (
              <article key={item.title} className="border-t border-white/25 pt-6">
                <span className="font-serif text-sm text-[#d2aa78]">
                  0{index + 1}
                </span>
                <h3 className="mt-5 font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#092622] px-6 py-20 sm:py-24 lg:px-8">
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
