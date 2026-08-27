import Link from "next/link";
import { Clock, MapPin, Navigation, Phone, Star } from "lucide-react";
import { WORK_WITH_US_STATS } from "@/lib/lp-clone";
import { agentInfo, officeInfo } from "@/lib/site-config";

type WorkWithUsProps = {
  showStats?: boolean;
};

export default function WorkWithUs({ showStats = true }: WorkWithUsProps) {
  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-300">
              {agentInfo.brokerage}
            </p>
            <h2 className="mb-4 text-3xl font-bold">Work With Us</h2>
            <p className="mb-6 max-w-xl text-slate-300">
              Bringing together a team with the passion, dedication, and
              resources to help our clients reach their buying and selling
              goals. With you every step of the way.
            </p>
            {showStats ? (
              <div className="mb-8 grid grid-cols-3 gap-4">
                {WORK_WITH_US_STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-blue-300">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            ) : null}
            <div className="flex flex-wrap gap-3">
              <a
                href={agentInfo.phoneTel}
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-medium text-white no-underline hover:bg-blue-700"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {agentInfo.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md border border-slate-600 px-4 py-2 font-medium text-white no-underline hover:bg-slate-800"
              >
                Contact Us
              </Link>
              <a
                href={officeInfo.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-600 px-4 py-2 font-medium text-white no-underline hover:bg-slate-800"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Directions
              </a>
              <a
                href={officeInfo.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-600 px-4 py-2 font-medium text-white no-underline hover:bg-slate-800"
              >
                <Star className="h-4 w-4" aria-hidden="true" />
                View Google Reviews
              </a>
            </div>
            <p className="mt-6 flex items-start gap-2 text-sm text-slate-400">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {officeInfo.address.full}
            </p>
            <p className="mt-2 flex items-start gap-2 text-sm text-slate-400">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {officeInfo.hours.weekday}; {officeInfo.hours.weekend};{" "}
              {officeInfo.hours.sunday}
            </p>
            <p className="mt-3 text-sm text-slate-400">
              {agentInfo.name}, License {agentInfo.license}. Email{" "}
              <a
                href={`mailto:${agentInfo.email}`}
                className="text-blue-300 no-underline hover:underline"
              >
                {agentInfo.email}
              </a>
              .
            </p>
          </div>
          <iframe
            title={`${officeInfo.name} office map`}
            src={officeInfo.mapsEmbed}
            className="h-80 w-full rounded-lg border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
