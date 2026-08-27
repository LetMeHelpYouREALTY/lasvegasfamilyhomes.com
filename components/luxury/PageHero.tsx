import Link from "next/link";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: string;
  children?: React.ReactNode;
  compact?: boolean;
};

export default function PageHero({
  title,
  subtitle,
  image = "/images/hero/family-homes.jpg",
  children,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-luxury-charcoal text-white",
        compact ? "min-h-[48vh] pt-28" : "min-h-[70vh] pt-28",
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 text-center">
        <h1 className="text-white">{title}</h1>
        {subtitle && (
          <p className="mt-6 font-sans text-base leading-relaxed text-white/85 md:text-lg">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export function WorkWithUs({
  className,
  image = "/images/hero/great-room.jpg",
}: {
  className?: string;
  image?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-luxury-charcoal py-24 text-center text-white",
        className,
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <h2 className="text-white">Work With Us</h2>
        <p className="mt-6 font-sans text-sm leading-relaxed text-white/80 md:text-base">
          Bringing together a team with the passion, dedication, and resources
          to help our clients reach their buying and selling goals. With you
          every step of the way.
        </p>
        <Link href="/contact" className="lp-btn lp-btn-light mt-10">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
