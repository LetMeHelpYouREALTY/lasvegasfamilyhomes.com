import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import ConnectForm from "@/components/luxury/ConnectForm";
import NapBlock, { MlsDisclaimer } from "@/components/luxury/NapBlock";
import { WorkWithUs } from "@/components/luxury/PageHero";
import FAQSection from "@/components/sections/FAQSection";
import {
  aboutCopy,
  blogPosts,
  collectionCategories,
  localBusinessJsonLd,
  marketPresence,
} from "@/lib/luxury";
import { DEFAULT_CONFIG } from "@/lib/domain-config";
import { buildMetadata } from "@/lib/seo";
import { REALSCOUT_AGENT_ID } from "@/lib/home-search";

export const metadata: Metadata = buildMetadata(
  {
    ...DEFAULT_CONFIG,
    heroHeadline: "Las Vegas Family Homes",
    description:
      "Search 3–5 bedroom Las Vegas family homes with yards in Summerlin, Henderson, and Clark County. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Call (702) 222-1964.",
  },
  { path: "/" },
);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which Las Vegas areas does Dr. Jan Duffy cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Jan Duffy represents buyers and sellers across Las Vegas, Henderson, Summerlin, The Ridges, Skye Canyon, Centennial Hills, Inspirada, Green Valley, and Mountain's Edge.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle both sales and estate rentals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The practice covers residential sales, luxury leases, vacation rentals, and off-market opportunities throughout the Las Vegas Valley.",
      },
    },
    {
      "@type": "Question",
      name: "How do I search live MLS listings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the Home Search portal on this site. Listings are powered by RealScout and the Greater Las Vegas Association of REALTORS® MLS.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main>
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-luxury-charcoal text-white">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero/family-homes.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 mx-auto max-w-4xl px-6 pt-20 text-center">
            <h1 className="text-white">Las Vegas Family Homes</h1>
            <h2 className="hero-lede mt-6 text-white/85">
              3–5 Bedroom Houses with Yards Across the Valley
            </h2>
            <h3 className="hero-lede mt-3 !text-sm text-white/75 md:!text-base">
              Search Summerlin, Henderson, and Master-Planned Streets
            </h3>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
              <Link
                href="/family-homes"
                className="border-b border-white/70 pb-1 font-sans text-xs uppercase tracking-luxury"
              >
                Family Homes
              </Link>
              <Link
                href="/homes-with-yards"
                className="border-b border-white/70 pb-1 font-sans text-xs uppercase tracking-luxury"
              >
                Homes with Yards
              </Link>
              <Link
                href="/home-search/listings"
                className="border-b border-white/70 pb-1 font-sans text-xs uppercase tracking-luxury"
              >
                Search MLS
              </Link>
            </div>
            <div className="realscout-wrapper mt-12">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<realscout-simple-search agent-encoded-id="${REALSCOUT_AGENT_ID}"></realscout-simple-search>`,
                }}
              />
            </div>
          </div>
        </section>

        <section className="lp-section bg-white">
          <div className="lp-container grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/hero/family-homes.jpg"
                alt="Las Vegas family home at golden hour with Spring Mountains"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2>About Las Vegas Family Homes</h2>
              <div className="mt-4 flex flex-col items-center justify-center gap-1 font-sans text-[11px] uppercase tracking-luxury text-luxury-muted md:items-start md:flex-row md:gap-6">
                <span>{aboutCopy.subtitleLeft}</span>
                <span>{aboutCopy.subtitleRight}</span>
              </div>
              <div className="mt-10 space-y-5 text-left text-sm leading-7 text-luxury-muted md:text-[15px]">
                {aboutCopy.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
                <Link href="/about" className="lp-btn lp-btn-outline">
                  About Dr. Jan Duffy
                </Link>
                <Link href="/family-homes" className="lp-btn lp-btn-dark">
                  Family Homes Hub
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="lp-section bg-luxury-cream">
          <div className="lp-container max-w-3xl">
            <ConnectForm source="homepage-connect" />
          </div>
        </section>

        <section className="lp-section bg-white">
          <div className="lp-container">
            <h2 className="mb-12 text-center">Market Presence</h2>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {marketPresence.map((n) => (
                <Link
                  key={n.slug}
                  href={`/neighborhoods/${n.slug}`}
                  className="group relative block aspect-[4/5] overflow-hidden"
                >
                  <Image
                    src={n.image}
                    alt={`${n.name} homes in Las Vegas`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-black/25" />
                  <span className="absolute inset-x-0 bottom-6 text-center font-serif text-lg text-white md:text-xl">
                    {n.name}
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/neighborhoods" className="lp-btn lp-btn-outline">
                Show All Neighborhoods
              </Link>
            </div>
          </div>
        </section>

        <section className="lp-section bg-luxury-charcoal text-white">
          <div className="lp-container">
            <h2 className="text-center text-white">Collection of Fine Homes</h2>
            <p className="mt-3 text-center font-sans text-[11px] uppercase tracking-luxury text-white/60">
              Search Summerlin, Henderson, and Master-Planned Streets
            </p>
            <div className="mt-12">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<realscout-office-listings agent-encoded-id="${REALSCOUT_AGENT_ID}" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR,MF,TC" price-min="500000"></realscout-office-listings>`,
                }}
              />
            </div>
            <MlsDisclaimer className="mt-10 text-white/45" />
          </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4">
          {collectionCategories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative block aspect-square overflow-hidden"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-black/35" />
              <span className="absolute inset-0 flex items-center justify-center px-3 text-center font-serif text-lg text-white md:text-2xl">
                {cat.title}
              </span>
            </Link>
          ))}
        </section>

        <section className="lp-section bg-white text-center">
          <div className="lp-container">
            <div className="relative mx-auto mb-10 aspect-[21/9] max-w-4xl overflow-hidden">
              <Image
                src="/images/hero/reviews.jpg"
                alt="Patio overlooking a Las Vegas backyard pool"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <h2>Our Clients</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-luxury-muted">
              Families, executives, and investors who chose Dr. Jan Duffy for
              Las Vegas, Henderson, and Summerlin — 4.9★ from 200+ reviews.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-[11px] uppercase tracking-luxury text-luxury-muted">
              <span>Berkshire Hathaway HomeServices</span>
              <span>Greater Las Vegas Association of REALTORS®</span>
              <span>GLVAR MLS</span>
              <span>Equal Housing Opportunity</span>
            </div>
          </div>
        </section>

        <section className="lp-section bg-luxury-cream">
          <div className="lp-container">
            <h2 className="mb-12 text-center">Blogs &amp; Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {blogPosts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={i === 0 ? "md:col-span-3" : ""}
                >
                  <article className="group">
                    <div
                      className={
                        i === 0
                          ? "relative aspect-[21/9] overflow-hidden"
                          : "relative aspect-[4/3] overflow-hidden"
                      }
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes={i === 0 ? "100vw" : "33vw"}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-5 text-xl md:text-2xl">{post.title}</h3>
                    <p className="mt-2 text-sm text-luxury-muted">
                      {post.excerpt}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <NapBlock />

        <section className="lp-section bg-white">
          <div className="lp-container max-w-3xl">
            <ConnectForm
              source="homepage-contact-details"
              heading="Submit a Message"
              subheading={`Get in Touch · ${aboutCopy.subtitleLeft}`}
            />
          </div>
        </section>

        <WorkWithUs />
        <FAQSection
          title="Questions"
          subtitle="Typical questions from buyers, sellers, and renters in the Las Vegas Valley."
        />
      </main>
      <Footer />
    </>
  );
}
