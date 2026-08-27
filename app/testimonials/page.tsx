import type { Metadata } from "next";
import LetsConnect from "@/components/lp/LetsConnect";
import LpPageChrome from "@/components/lp/LpPageChrome";
import WorkWithUs from "@/components/lp/WorkWithUs";
import ReviewsSection, {
  aggregateRating,
  defaultReviews,
} from "@/components/sections/ReviewsSection";
import { getLpClonePage } from "@/lib/lp-clone";
import { generateReviewSchema } from "@/lib/schema";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";

const page = getLpClonePage("/testimonials")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  keywords: [
    "Berkshire Hathaway HomeServices",
    "Las Vegas realtor reviews",
    "BHHS Nevada Properties",
  ],
  alternates: { canonical: `${siteConfig.url}${page.path}` },
};

export default function TestimonialsPage() {
  const reviewSchema = generateReviewSchema(
    defaultReviews.map((review) => ({
      author: review.name,
      rating: review.rating,
      reviewBody: review.text,
      datePublished: review.date,
    })),
  );

  return (
    <LpPageChrome>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div className="mx-auto max-w-6xl px-4 pb-4">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
          {agentInfo.brokerage}
        </p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
          {page.h1}
        </h1>
        <p className="max-w-3xl text-lg text-slate-600">
          Published reviews from clients who closed with {agentInfo.name}. We do
          not invent quotes. {aggregateRating.ratingValue} average from{" "}
          {aggregateRating.reviewCount}+ reviews.
        </p>
      </div>
      <ReviewsSection
        title="Client reviews"
        subtitle="Las Vegas and Henderson closings — Google reviews linked below."
        googleReviewsUrl={officeInfo.googleReviews}
      />
      <LetsConnect
        source="testimonials-page"
        tags={["lp-clone", "testimonials"]}
      />
      <WorkWithUs />
    </LpPageChrome>
  );
}
