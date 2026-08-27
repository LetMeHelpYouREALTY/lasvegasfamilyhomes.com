import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageSplitProps = {
  image: string;
  alt: string;
  reverse?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function ImageSplit({
  image,
  alt,
  reverse = false,
  className,
  children,
}: ImageSplitProps) {
  return (
    <section className={cn("lp-section bg-white", className)}>
      <div
        className={`lp-container grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
          reverse ? "md:[&>div:first-child]:order-2" : ""
        }`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
