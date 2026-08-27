import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import LuxuryShell from "@/components/luxury/LuxuryShell";
import OfficeListingsUnderHero from "@/components/realscout/OfficeListingsUnderHero";
import { blogPosts } from "@/lib/luxury";
import { agentInfo, officeInfo } from "@/lib/site-config";

const bodies: Record<string, string[]> = {
  "summer-entertaining-ideas-for-your-summerlin-home": [
    "Summerlin evenings drop 20 degrees off the afternoon high. That is the window. Set the table on the covered patio, not the west-facing slab, and run the misters only after 6 p.m. so the stone is not a steam bath.",
    "Keep the menu to three things that hold: a grill protein, a cold grain, and fruit. The 150-plus parks and trailheads nearby mean guests often arrive from a walk, not a car — have water on the counter before they ask.",
    "If you are hosting a showing the next morning, skip heavy florals in the great room. Citrus and clean countertops photograph better than a tablescape that still smells like last night.",
  ],
  "the-best-cafes-and-coffee-spots-in-summerlin": [
    "Downtown Summerlin and the village retail pockets are where most buyers kill time between showings. A 20-minute espresso stop is part of the tour, not a detour.",
    "Look for shops with outdoor seating and shade — July pavement is not a lifestyle amenity. Palm-lined plazas along the inner loop beat strip-center parking lots every time.",
    "When you are relocating, use café density as a proxy for how a village actually lives on a Tuesday. If the patio is empty at 8 a.m., keep looking.",
  ],
  "why-the-ridges-most-expensive-listings-rarely-linger": [
    "At The Ridges, the buyer pool is small and already watching. Homes that are priced to the last three closings — not the seller’s memory of 2022 — do not sit.",
    "What looks like a ‘quick sale’ is usually 90 days of quiet work: photography, a private-client text list, and a showing window that does not waste a qualified traveler’s one afternoon in town.",
    "If a listing lingers, it is almost never the architecture. It is the ask, the condition, or the fact that the home never reached the 12 people who could actually write the check.",
  ],
};

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  const paragraphs = bodies[post.slug] ?? [post.excerpt];

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Person", name: agentInfo.name },
    publisher: {
      "@type": "Organization",
      name: agentInfo.brokerage,
      address: {
        "@type": "PostalAddress",
        streetAddress: officeInfo.address.street,
        addressLocality: officeInfo.address.city,
        addressRegion: officeInfo.address.state,
        postalCode: officeInfo.address.zip,
      },
    },
    image: post.image,
    description: post.excerpt,
  };

  return (
    <LuxuryShell jsonLd={articleLd}>
      <article>
        <div className="relative h-[48vh] min-h-[320px] w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-end">
            <div className="lp-container pb-12 pt-28">
              <h1 className="max-w-3xl text-white">{post.title}</h1>
              <p className="mt-4 text-sm text-white/80">{post.excerpt}</p>
            </div>
          </div>
        </div>
        <OfficeListingsUnderHero />
        <div className="lp-section bg-white">
          <div className="lp-container max-w-2xl space-y-5 text-sm leading-7 text-luxury-muted">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p className="pt-6 text-xs uppercase tracking-luxury">
              {agentInfo.name} · License {agentInfo.license} · {agentInfo.phone}
            </p>
          </div>
        </div>
      </article>
    </LuxuryShell>
  );
}
