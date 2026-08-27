import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { agentInfo } from "@/lib/site-config";

type LetsConnectProps = {
  source: string;
  tags?: string[];
  heading?: string;
  subheading?: string;
};

export default function LetsConnect({
  source,
  tags = ["lp-clone"],
  heading = "Let's Connect",
  subheading = `We're a top-rated Las Vegas team. Fill out your information and ${agentInfo.name} will get back to you.`,
}: LetsConnectProps) {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="mb-2 text-center text-3xl font-bold text-slate-900">
          {heading}
        </h2>
        <p className="mb-2 text-center text-sm font-semibold uppercase tracking-wide text-blue-700">
          Get in Touch
        </p>
        <p className="mb-8 text-center text-slate-600">{subheading}</p>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <LeadCaptureForm
            source={source}
            defaultTags={tags}
            formType="contact"
          />
          <p className="mt-4 text-xs text-slate-500">
            Opt-in: I agree to be contacted by {agentInfo.name} via call, email,
            and text for real estate services. Reply STOP to opt out or HELP for
            assistance. Message and data rates may apply. Message frequency may
            vary.{" "}
            <a href="/security-policy" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
