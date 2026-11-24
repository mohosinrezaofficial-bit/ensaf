import type { Metadata } from "next";
import Link from "next/link";
import { legalServices } from "../components/services/serviceData";

export const metadata: Metadata = {
  title: "Legal Services | ENSAF",
  description:
    "Explore ENSAF's legal services, including criminal, corporate, family, real estate, personal injury, and health care policy.",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#f5f5f2]">
      <section className="bg-[#062522] px-6 py-20 text-center sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 font-serif text-xl text-[#bd925e]">
            How We Can Help
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight text-white sm:text-6xl">
            Our Legal Services
          </h1>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
            Explore our areas of practice and find the legal support that fits
            your needs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1298px] px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {legalServices.map((service, index) => (
            <article
              key={service.slug}
              className={`group rounded-2xl border-b-[5px] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                index === 1
                  ? "border-[#bd925e] bg-[#304f51] text-white"
                  : "border-transparent bg-white text-[#082522] hover:border-[#bd925e]"
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-[3px] text-[#bd925e]">
                {service.eyebrow}
              </p>
              <h2 className="mt-5 font-serif text-2xl font-bold">
                {service.title}
              </h2>
              <p
                className={`mt-4 min-h-20 text-sm leading-7 ${
                  index === 1 ? "text-white/75" : "text-[#737a75]"
                }`}
              >
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#bd925e] transition-all hover:gap-4"
              >
                Explore service
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
