import Link from "next/link";
import { Instagram } from "lucide-react";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-luxury-charcoal text-white">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-16 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-serif text-xl tracking-[0.2em]">DR. JAN DUFFY</p>
          <p className="mt-2 text-[11px] uppercase tracking-luxury text-white/60">
            {siteConfig.name}
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/70">
            Estate sales, leases, and advisory across Las Vegas, Henderson, and
            Summerlin. Berkshire Hathaway HomeServices Nevada Properties.
          </p>
        </div>
        <div>
          <p className="lp-kicker mb-4 text-white/50">Explore</p>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="/family-homes">Family Homes</Link>
            </li>
            <li>
              <Link href="/homes-with-yards">Homes with Yards</Link>
            </li>
            <li>
              <Link href="/3-5-bedroom-homes">3–5 Bedroom Homes</Link>
            </li>
            <li>
              <Link href="/pool-homes">Pool Homes</Link>
            </li>
            <li>
              <Link href="/open-houses">Open Houses</Link>
            </li>
            <li>
              <Link href="/reviews">Reviews</Link>
            </li>
            <li>
              <Link href="/home-search/listings">Home Search</Link>
            </li>
            <li>
              <Link href="/neighborhoods">Neighborhoods</Link>
            </li>
            <li>
              <Link href="/listing-agency">Listing Agency</Link>
            </li>
            <li>
              <Link href="/buyer-tenant-representation">
                Buyer / Tenant Representation
              </Link>
            </li>
            <li>
              <Link href="/vacation-rental-portfolio">Vacation Rentals</Link>
            </li>
            <li>
              <Link href="/off-market-listings">Off-Market Listings</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="lp-kicker mb-4 text-white/50">Contact Details</p>
          <address className="not-italic text-sm leading-relaxed text-white/80">
            {agentInfo.name}
            <br />
            {officeInfo.address.street}
            <br />
            {officeInfo.address.city}, {officeInfo.address.state}{" "}
            {officeInfo.address.zip}
            <br />
            <a href={agentInfo.phoneTel} className="mt-3 inline-block">
              {agentInfo.phone}
            </a>
            <br />
            <a href={`mailto:${agentInfo.email}`}>{agentInfo.email}</a>
          </address>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-luxury text-white/70"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Follow Me on Instagram
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-[11px] leading-relaxed text-white/45">
        © {year} {agentInfo.name}. License {agentInfo.license}.{" "}
        {agentInfo.brokerage}. All rights reserved.{" "}
        <Link href="/terms-and-conditions" className="underline">
          Terms & Privacy
        </Link>
        {" · "}
        <Link href="/opt-in" className="underline">
          SMS Opt-In
        </Link>
        <span className="mt-2 block">
          Equal Housing Opportunity. Information is deemed reliable but not
          guaranteed.
        </span>
      </div>
    </footer>
  );
}
