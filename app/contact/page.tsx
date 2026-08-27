import type { Metadata } from "next";
import LuxuryShell from "@/components/luxury/LuxuryShell";
import PageHero from "@/components/luxury/PageHero";
import ConnectForm from "@/components/luxury/ConnectForm";
import NapBlock from "@/components/luxury/NapBlock";
import { localBusinessJsonLd } from "@/lib/luxury";
import CalendlyWidget from "@/components/calendly/CalendlyWidget";

export const metadata: Metadata = {
  title: "Contact Us | Dr. Jan Duffy | Las Vegas Family Homes",
  description:
    "Contact Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Call (702) 222-1964.",
};

export default function ContactPage() {
  return (
    <LuxuryShell jsonLd={localBusinessJsonLd} showNap={false}>
      <PageHero
        title="Contact Us"
        subtitle="Submit a Message · Get in Touch · NV License S.0197614.LLC"
        image="/images/hero/contact.jpg"
        compact
      />
      <section className="lp-section bg-white">
        <div className="lp-container max-w-3xl">
          <ConnectForm
            source="contact-page"
            heading="Submit a Message"
            subheading="Dr. Jan Duffy · Berkshire Hathaway HomeServices Nevada Properties"
          />
        </div>
      </section>
      <NapBlock />
      <section className="lp-section bg-luxury-cream">
        <div className="lp-container">
          <h2 className="mb-8 text-center">Schedule a Conversation</h2>
          <CalendlyWidget />
        </div>
      </section>
    </LuxuryShell>
  );
}
