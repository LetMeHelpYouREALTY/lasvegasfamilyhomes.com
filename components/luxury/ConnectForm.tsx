"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { interestOptions, smsConsentCopy } from "@/lib/luxury";
import { cn } from "@/lib/utils";

type ConnectFormProps = {
  source?: string;
  variant?: "light" | "dark";
  className?: string;
  heading?: string;
  subheading?: string;
  showHeading?: boolean;
};

export default function ConnectForm({
  source = "website-connect",
  variant = "light",
  className,
  heading = "Let's Connect",
  subheading = "We're a top-rated team, with a wealth of knowledge in the area. Fill out your information below and one of our team members will get back to you.",
  showHeading = true,
}: ConnectFormProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dark = variant === "dark";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (String(data.get("middleName") || "").trim()) {
      setSuccess(true);
      return;
    }
    const fullName = String(data.get("name") || "").trim();
    const [firstName, ...rest] = fullName.split(/\s+/);
    const lastName = rest.join(" ") || "Inquiry";

    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/leads/capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName || "Inquiry",
          lastName,
          name: fullName,
          email: data.get("email"),
          phone: data.get("phone"),
          message: `${data.get("interest") ? `Interest: ${data.get("interest")}\n` : ""}${data.get("message") || ""}`,
          source,
          tags: ["laluxuries-clone", source],
        }),
      });
      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error || "Failed to submit");
      }
      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className={cn("py-10 text-center", className)}>
        <h3 className="font-serif text-2xl">
          Thank you for your message. We will be in touch with you shortly.
        </h3>
        <Link
          href="/home-search/listings"
          className={cn(
            "lp-btn mt-8",
            dark ? "lp-btn-light" : "lp-btn-dark",
          )}
        >
          Explore Our Properties
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      {showHeading && (
        <div className="mb-8 text-center">
          <h2 className={dark ? "text-white" : ""}>{heading}</h2>
          {subheading && (
            <p
              className={cn(
                "mx-auto mt-4 max-w-2xl text-sm leading-relaxed",
                dark ? "text-white/75" : "text-luxury-muted",
              )}
            >
              {subheading}
            </p>
          )}
        </div>
      )}
      {error && (
        <p className="text-center text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      <input
        type="text"
        name="middleName"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />
      <div className="grid gap-6 md:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Full Name"
          className={cn("lp-input", dark && "lp-input-on-dark")}
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className={cn("lp-input", dark && "lp-input-on-dark")}
        />
        <input
          name="phone"
          type="tel"
          required
          placeholder="Phone"
          className={cn("lp-input", dark && "lp-input-on-dark")}
        />
        <select
          name="interest"
          required
          defaultValue=""
          className={cn(
            "lp-input appearance-none bg-transparent",
            dark && "lp-input-on-dark",
          )}
        >
          <option value="" disabled>
            What are you interested in?
          </option>
          {interestOptions.map((opt) => (
            <option key={opt} value={opt} className="text-luxury-ink">
              {opt}
            </option>
          ))}
        </select>
      </div>
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Message"
        className={cn("lp-input resize-none", dark && "lp-input-on-dark")}
      />
      <label
        className={cn(
          "flex items-start gap-3 text-left text-xs leading-relaxed",
          dark ? "text-white/70" : "text-luxury-muted",
        )}
      >
        <input
          type="checkbox"
          name="termsAccepted"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-luxury-ink"
        />
        <span>
          {smsConsentCopy}{" "}
          <Link href="/terms-and-conditions" className="underline">
            Privacy Policy
          </Link>
          .
        </span>
      </label>
      <div className="pt-2 text-center">
        <button
          type="submit"
          disabled={loading}
          className={cn("lp-btn", dark ? "lp-btn-light" : "lp-btn-dark")}
        >
          {loading ? "Submitting…" : "Submit"}
        </button>
      </div>
    </form>
  );
}
