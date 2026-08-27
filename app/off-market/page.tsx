import type { Metadata } from "next";
import { Phone, Lock, EyeOff, Handshake, BellRing } from "lucide-react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";
import { getOgImage } from "@/lib/seo";

const PAGE_PATH = "/off-market";
const CTA_PHONE = "(702) 222-1964";
const CTA_PHONE_TEL = "tel:+17022221964";

const pageUrl = `${siteConfig.url}${PAGE_PATH}`;
const ogImage = getOgImage(siteConfig.url);

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Off-Market Las Vegas Listings | Private & Pocket Listings",
  description:
    "Get early access to off-market and pocket Las Vegas listings before they hit the MLS. Register with Dr. Jan Duffy, BHHS Nevada Properties, for private and pre-market opportunities. Call (702) 222-1964.",
  keywords: [
    "off market listings Las Vegas",
    "pocket listings Las Vegas",
    "private listings Las Vegas",
    "pre-market homes Las Vegas",
    "exclusive Las Vegas real estate",
    "Dr. Jan Duffy",
    "Berkshire Hathaway HomeServices Nevada Properties",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: pageUrl,
    siteName: siteConfig.name,
    title: "Off-Market Las Vegas Listings | Private & Pocket Listings",
    description:
      "Early access to off-market and pocket Las Vegas listings before they hit the MLS. Dr. Jan Duffy, BHHS Nevada Properties.",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Off-Market Las Vegas Listings | Private & Pocket Listings",
    description:
      "Early access to off-market and pocket Las Vegas listings before they hit the MLS.",
    images: [ogImage.url],
  },
  robots: { index: true, follow: true },
};

const benefits = [
  {
    icon: EyeOff,
    title: "Pre-Market Access",
    desc: "See qualifying homes before they list publicly, with less competition and more room to negotiate.",
  },
  {
    icon: Handshake,
    title: "Pocket Listings",
    desc: "Sellers who value discretion list quietly through our network — you get the introduction.",
  },
  {
    icon: BellRing,
    title: "Priority Alerts",
    desc: "Matches sent to you first based on your price range, area, and must-haves.",
  },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Off-Market Las Vegas Listings",
  description:
    "Register for early access to off-market and pocket Las Vegas listings before they hit the MLS.",
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

export default function OffMarketPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
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
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold">
              <Lock className="h-3.5 w-3.5" aria-hidden="true" />
              Private & Pocket Listings
            </span>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Off-Market Las Vegas Listings
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-white/80 md:text-2xl">
              Some of the best homes never hit the MLS. Register to see qualifying
              off-market and pre-market opportunities first.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
              {benefits.map(({ icon: Icon, title, desc }) => (
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

        {/* Registration */}
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-slate-900">
                Register for Off-Market Deals
              </h2>
              <p className="mb-6 text-lg text-slate-600">
                Tell Dr. Jan what you are looking for. As qualifying off-market
                and pocket listings come in, you get them first — before they
                reach the public MLS.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <EyeOff className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" aria-hidden="true" />
                  Early access to pre-market inventory across the valley.
                </li>
                <li className="flex items-start gap-3">
                  <Handshake className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" aria-hidden="true" />
                  Discreet introductions to sellers who list quietly.
                </li>
                <li className="flex items-start gap-3">
                  <BellRing className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600" aria-hidden="true" />
                  Priority alerts matched to your price range and area.
                </li>
              </ul>
              <p className="mt-8 text-slate-700">
                Prefer to talk first?{" "}
                <a
                  href={CTA_PHONE_TEL}
                  className="inline-flex items-center gap-1 font-semibold text-blue-700 hover:underline"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {CTA_PHONE}
                </a>
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <LeadCaptureForm
                source="off-market-registration"
                stage="New Lead"
                formType="property-search"
                defaultTags={["Off-Market", "Exclusive Listings"]}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
