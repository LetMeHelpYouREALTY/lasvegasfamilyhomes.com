import Link from "next/link";
import { Phone, MapPin, Clock, Star } from "lucide-react";
import { nap } from "@/lib/luxury";

export default function NapBlock() {
  return (
    <section className="bg-luxury-cream py-16" aria-label="Office location">
      <div className="lp-container">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="lp-kicker mb-3">Visit the office</p>
            <h2 className="mb-6 text-[32px] md:text-[40px]">Contact Details</h2>
            <p className="font-serif text-xl">{nap.name}</p>
            <ul className="mt-6 space-y-4 text-sm text-luxury-muted">
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0"
                  aria-hidden="true"
                />
                <span>
                  {nap.street}
                  <br />
                  {nap.cityStateZip}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={nap.tel}>{nap.phone}</a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  {nap.hoursWeekday}
                  <br />
                  {nap.hoursWeekend}
                  <br />
                  {nap.hoursSunday}
                </span>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={nap.tel} className="lp-btn lp-btn-dark">
                Call
              </a>
              <a
                href={nap.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="lp-btn lp-btn-outline"
              >
                Directions
              </a>
              <a
                href={nap.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="lp-btn lp-btn-outline inline-flex items-center gap-2"
              >
                <Star className="h-3.5 w-3.5" aria-hidden="true" />
                View Google Reviews
              </a>
            </div>
            <p className="mt-6 text-xs text-luxury-muted">
              License {nap.license} · Berkshire Hathaway HomeServices Nevada
              Properties
            </p>
          </div>
          <div className="min-h-[280px] overflow-hidden bg-neutral-200">
            <iframe
              title="Map to Berkshire Hathaway HomeServices Nevada Properties"
              src={nap.mapsEmbed}
              className="h-full min-h-[280px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function MlsDisclaimer({ className = "" }: { className?: string }) {
  return (
    <p
      className={`text-center text-[11px] leading-relaxed text-neutral-500 ${className}`}
    >
      Listings displayed are courtesy of the Greater Las Vegas Association of
      REALTORS® Multiple Listing Service. Information is deemed reliable but
      not guaranteed. Listing broker and listing agent information is displayed
      with each property. Dr. Jan Duffy, License S.0197614.LLC, Berkshire
      Hathaway HomeServices Nevada Properties. Equal Housing Opportunity.
    </p>
  );
}
