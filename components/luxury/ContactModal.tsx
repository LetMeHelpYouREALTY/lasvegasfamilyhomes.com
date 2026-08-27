"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import ConnectForm from "@/components/luxury/ConnectForm";

export const CONTACT_EVENT = "open-contact-modal";

export function openContactModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(CONTACT_EVENT));
  }
}

export default function ContactModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(CONTACT_EVENT, onOpen);
    return () => window.removeEventListener(CONTACT_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-black/50 p-0 md:items-center md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto bg-white px-6 py-10 md:px-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 p-2 text-luxury-ink"
          aria-label="Close contact form"
        >
          <X className="h-5 w-5" />
        </button>
        <h3 id="contact-modal-title" className="sr-only">
          Leave a Message
        </h3>
        <ConnectForm
          source="contact-modal"
          heading="Leave a Message"
          subheading=""
        />
      </div>
    </div>
  );
}
