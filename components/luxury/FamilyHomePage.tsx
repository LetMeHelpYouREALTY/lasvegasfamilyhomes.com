import Image from "next/image";
import Link from "next/link";
import LuxuryShell from "@/components/luxury/LuxuryShell";
import PageHero from "@/components/luxury/PageHero";
import ConnectForm from "@/components/luxury/ConnectForm";
import { MlsDisclaimer } from "@/components/luxury/NapBlock";
import { nap } from "@/lib/luxury";
import type { FamilyHomePageContent } from "@/lib/family-home-pages";

export default function FamilyHomePage({
  page,
}: {
  page: FamilyHomePageContent;
}) {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <LuxuryShell jsonLd={[faqLd]} showNap>
      <PageHero
        title={page.h1}
        subtitle={page.subtitle}
        image={page.heroImage}
        compact={page.compact}
      >
        {page.heroCtas && (
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {page.heroCtas.map((cta) =>
              cta.href.startsWith("http") ? (
                <a
                  key={cta.href}
                  href={cta.href}
                  className="lp-btn lp-btn-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cta.label}
                </a>
              ) : (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className="lp-btn lp-btn-light"
                >
                  {cta.label}
                </Link>
              ),
            )}
          </div>
        )}
      </PageHero>

      {page.sections.map((section) => {
        const Heading = section.headingLevel === 3 ? "h3" : "h2";
        return (
          <section
            key={section.heading}
            className={
              section.tone === "cream"
                ? "lp-section bg-luxury-cream"
                : "lp-section bg-white"
            }
          >
            <div
              className={`lp-container grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                section.reverse ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={section.image}
                  alt={section.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div>
                {section.kicker && (
                  <p className="lp-kicker">{section.kicker}</p>
                )}
                <Heading className="mt-3">{section.heading}</Heading>
                <p className="mt-5 text-sm leading-7 text-luxury-muted">
                  {section.body}
                </p>
                {section.cta &&
                  (section.cta.href.startsWith("http") ? (
                    <a
                      href={section.cta.href}
                      className="lp-btn lp-btn-dark mt-8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {section.cta.label}
                    </a>
                  ) : (
                    <Link
                      href={section.cta.href}
                      className="lp-btn lp-btn-dark mt-8"
                    >
                      {section.cta.label}
                    </Link>
                  ))}
              </div>
            </div>
          </section>
        );
      })}

      {page.searchHtml && (
        <section className="lp-section bg-luxury-charcoal text-white">
          <div className="lp-container">
            <h2 className="text-center text-white">Search Live MLS Listings</h2>
            <div
              className="realscout-wrapper mt-10"
              dangerouslySetInnerHTML={{ __html: page.searchHtml }}
            />
            <MlsDisclaimer className="mt-10 text-white/45" />
          </div>
        </section>
      )}

      {page.faqs.length > 0 && (
        <section className="lp-section bg-white">
          <div className="lp-container max-w-3xl">
            <h2 className="text-center">Questions</h2>
            <dl className="mt-10 space-y-8">
              {page.faqs.map((faq) => (
                <div key={faq.q}>
                  <dt className="font-serif text-xl">{faq.q}</dt>
                  <dd className="mt-2 text-sm leading-7 text-luxury-muted">
                    {faq.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <section className="lp-section bg-luxury-cream">
        <div className="lp-container max-w-3xl">
          <ConnectForm
            source={page.source ?? page.slug}
            heading="Talk with Dr. Jan Duffy"
            subheading={`${nap.phone} · ${nap.street}, ${nap.cityStateZip}`}
          />
        </div>
      </section>
    </LuxuryShell>
  );
}
