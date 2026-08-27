import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LuxuryShell from "@/components/luxury/LuxuryShell";
import PageHero from "@/components/luxury/PageHero";
import { blogPosts } from "@/lib/luxury";

export const metadata: Metadata = {
  title: "Blog | Las Vegas Family Homes | Dr. Jan Duffy",
  description:
    "Guides to Summerlin entertaining, valley cafés, and how luxury listings actually move in Las Vegas. Dr. Jan Duffy, BHHS Nevada Properties.",
};

export default function BlogIndexPage() {
  return (
    <LuxuryShell>
      <PageHero title="Blogs & Articles" compact />
      <section className="lp-section bg-white">
        <div className="lp-container grid gap-10 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="33vw"
                    className="object-cover"
                  />
                </div>
                <h2 className="mt-5 text-2xl">{post.title}</h2>
                <p className="mt-2 text-sm text-luxury-muted">{post.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </LuxuryShell>
  );
}
