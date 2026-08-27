"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, X } from "lucide-react";
import { luxuryNav, sidemenu, type SidemenuItem } from "@/lib/luxury";
import ContactModal, { openContactModal } from "@/components/luxury/ContactModal";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const isHome = pathname === "/";
  const overlay = isHome && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          overlay ? "bg-transparent text-white" : "bg-white text-luxury-ink shadow-sm",
        )}
      >
        <nav
          className="relative mx-auto flex h-[88px] max-w-[1400px] items-center justify-between px-4 md:px-8"
          aria-label="Main navigation"
        >
          <ul className="hidden items-center gap-8 lg:flex">
            {luxuryNav.left.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-[11px] uppercase tracking-luxury"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/"
            className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
          >
            <span className="font-serif text-lg leading-none tracking-[0.28em] md:text-xl">
              DR. JAN DUFFY
            </span>
            <span className="mt-1 font-sans text-[9px] uppercase tracking-[0.32em] opacity-80">
              Las Vegas Family Homes
            </span>
          </Link>

          <div className="ml-auto flex items-center gap-6">
            <button
              type="button"
              onClick={openContactModal}
              className="hidden font-sans text-[11px] uppercase tracking-luxury lg:inline"
            >
              Contact Us
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <span className="flex flex-col gap-[5px]" aria-hidden="true">
                  <span className="block h-px w-6 bg-current" />
                  <span className="block h-px w-6 bg-current" />
                  <span className="block h-px w-6 bg-current" />
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-[88px] text-luxury-ink">
          <div className="mx-auto h-full max-w-lg overflow-y-auto px-8 py-10">
            <ul className="space-y-1">
              {sidemenu.map((item) => (
                <SidemenuRow
                  key={item.type === "group" ? item.label : item.href + item.label}
                  item={item}
                  openGroup={openGroup}
                  setOpenGroup={setOpenGroup}
                />
              ))}
            </ul>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={openContactModal}
        className="fixed bottom-6 right-6 z-40 hidden rounded-full bg-white px-5 py-3 font-sans text-[11px] uppercase tracking-luxury text-luxury-ink shadow-lg md:flex"
      >
        Contact Us
      </button>

      <ContactModal />
    </>
  );
}

function SidemenuRow({
  item,
  openGroup,
  setOpenGroup,
}: {
  item: SidemenuItem;
  openGroup: string | null;
  setOpenGroup: (v: string | null) => void;
}) {
  if (item.type === "link") {
    return (
      <li>
        <Link
          href={item.href}
          className="block py-3 font-serif text-2xl"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  const open = openGroup === item.label;
  return (
    <li>
      <button
        type="button"
        className="flex w-full items-center justify-between py-3 font-serif text-2xl"
        aria-expanded={open}
        onClick={() => setOpenGroup(open ? null : item.label)}
      >
        {item.label}
        <ChevronDown
          className={cn("h-5 w-5 transition-transform", open && "rotate-180")}
        />
      </button>
      {open && (
        <ul className="mb-4 space-y-2 border-l border-neutral-200 pl-4">
          {item.children.map((child) => (
            <li key={child.href + child.label}>
              <Link
                href={child.href}
                className="block py-1 font-sans text-sm uppercase tracking-luxury text-luxury-muted"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
