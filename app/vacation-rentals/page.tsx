import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CalendarDays, KeyRound, ShieldCheck, MapPin } from "lucide-react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutOfficeListings from "@/components/realscout/RealScoutOfficeListings";
import RealScoutAdvancedSearch from "@/components/realscout/RealScoutAdvancedSearch";
import { REALSCOUT_AGENT_ID, REALSCOUT_SEARCH_URL } from "@/lib/home-search";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";
import { getOgImage } from "@/lib/seo";

const PAGE_PATH = "/vacation-rentals";
const CTA_PHONE = "(702) 222-1964";
const CTA_PHONE_TEL = "tel:+17022221964";

const pageUrl = `${siteConfig.url}${PAGE_PATH}`;
const ogImage = getOgImage(siteConfig.url);

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Las Vegas Vacation Rentals | Seasonal & Furnished Leases",
  description:
    "Browse Las Vegas Valley vacation and seasonal rentals with live MLS availability through RealScout. Furnished homes, luxury estates, and month-to-month leases with Dr. Jan Duffy, BHHS Nevada Properties. Call (702) 222-1964.",
  keywords: [
    "Las Vegas vacation rentals",
    "Las Vegas seasonal rentals",
    "furnished homes Las Vegas",
    "Summerlin luxury rentals",
    "Henderson home rentals",
    "Dr. Jan Duffy",
    "Berkshire Hathaway HomeServices Nevada Properties",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: pageUrl,
    siteName: siteConfig.name,
    title: "Las Vegas Vacation Rentals | Seasonal & Furnished Leases",
    description:
      "Furnished, seasonal, and long-term Las Vegas Valley rentals with live MLS availability through RealScout. Dr. Jan Duffy, BHHS Nevada Properties.",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Las Vegas Vacation Rentals | Seasonal & Furnished Leases",
    description:
      "Furnished, seasonal, and long-term Las Vegas Valley rentals with live MLS availability through RealScout.",
    images: [ogImage.url],
  },
  robots: { index: true, follow: true },
};

const highlights = [
  {
    icon: CalendarDays,
    title: "Seasonal & Monthly Stays",
    desc: "Furnished homes for snowbirds, relocations, and extended stays — from 30 days to a full season.",
  },
  {
    icon: KeyRound,
    title: "Turnkey & Furnished",
    desc: "Move-in-ready estates with utilities, furniture, and HOA access handled before you arrive.",
  },
  {
    icon: ShieldCheck,
    title: "Vetted Leases",
    desc: "Every lease is reviewed for terms, deposits, and pet and HOA rules before you sign.",
  },
];

const faqs = [
  {
    question: "What counts as a Las Vegas vacation rental?",
    answer:
      "These are furnished or seasonal leases — typically 30 days or longer — for snowbirds, relocating families, and extended business stays. Availability comes from the RealScout GLVAR feed and updates throughout the day.",
  },
  {
    question: "Are the rentals shown here live MLS listings?",
    answer:
      "Yes. Availability and pricing come from RealScout's GLVAR feed, not a static list. Information is deemed reliable but not guaranteed — confirm lease terms before you sign.",
  },
  {
    question: "Can Dr. Jan Duffy help me lease a specific home?",
    answer: `Yes. ${agentInfo.name} with ${agentInfo.brokerage} represents tenants across the valley. Call ${CTA_PHONE} to set up private showings and review lease terms.`,
  },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Las Vegas Vacation Rentals",
  description:
    "Furnished, seasonal, and long-term Las Vegas Valley rentals with live MLS availability through RealScout.",
  url: pageUrl,
  provider: {
    "@type": "RealEstateAgent",
    name: `${agentInfo.name} - ${agentInfo.brokerage}`,
    telephone: "+17022221964",
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: officeInfo.address.street,
      addressLocality: officeInfo.address.city,
      addressRegion: officeInfo.address.state,
      postalCode: officeInfo.address.zip,
      addressCountry: "US",
    },
    areaServed: ["Las Vegas", "Henderson", "Summerlin", "North Las Vegas"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function VacationRentalsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-900 py-24 text-white md:py-28">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/Image/hero_bg_1.jpg')" }}
          />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <span className="mb-6 inline-block rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold">
              Seasonal & Furnished Leases
            </span>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Las Vegas Vacation Rentals
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-xl text-white/80 md:text-2xl">
              Furnished estates and seasonal leases across Summerlin, Henderson,
              and the Las Vegas Valley — for a season or a year.
            </p>
            <div className="mb-8 flex justify-center">
              <RealScoutAdvancedSearch agentId={REALSCOUT_AGENT_ID} />
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <Icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
                  </div>
                  <h2 className="mb-2 text-lg font-bold text-slate-900">
                    {title}
                  </h2>
                  <p className="text-sm text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Listings */}
        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 max-w-3xl">
              <h2 className="mb-3 text-3xl font-bold text-slate-900">
                Available Rentals
              </h2>
              <p className="text-slate-600">
                Live lease availability from the RealScout GLVAR feed. Use the
                search above to filter by price, beds, and area, then call{" "}
                {CTA_PHONE} to tour.
              </p>
            </div>
            <RealScoutOfficeListings
              agentId={REALSCOUT_AGENT_ID}
              listingStatus="For Rent"
              propertyTypes=",SFR,MF,TC"
              sortOrder="NEWEST"
            />
            <p className="mt-6">
              <a
                href={REALSCOUT_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-blue-700 hover:underline"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Open the full map search on RealScout
              </a>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="mb-8 text-3xl font-bold text-slate-900">
              Vacation Rental FAQ
            </h2>
            <div className="space-y-6">
              {faqs.map((item) => (
                <div
                  key={item.question}
                  className="rounded-xl border border-slate-200 p-6"
                >
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    {item.question}
                  </h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 py-16 text-white md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Looking for a Seasonal Home in Las Vegas?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
              Tell Dr. Jan your dates and must-haves and get a curated shortlist
              of available furnished leases.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={CTA_PHONE_TEL}
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-blue-600 transition-colors hover:bg-blue-50"
              >
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                Call {CTA_PHONE}
              </a>
              <Link
                href="/contact"
                className="inline-block rounded-md bg-blue-700 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-blue-800"
              >
                Request Rental Matches
              </Link>
            </div>
            <p className="mt-6 text-sm text-blue-200">
              {agentInfo.name} | License {agentInfo.license} | {agentInfo.brokerage}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
