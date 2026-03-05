"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Shield,
  X,
  Cookie,
  Mail,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────
const CONSENT_KEY = "kartik_cookie_consent";
const CONSENT_EXPIRY_DAYS = 365; // 12 months

interface ConsentRecord {
  status: "accepted" | "rejected";
  email: string;
  timestamp: string;
  categories?: {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
    preferences: boolean;
  };
}

// ─── Component ────────────────────────────────────────────────
export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState({
    necessary: true, // Always on
    analytics: true,
    marketing: false,
    preferences: true,
  });

  // ── Check if consent already stored ─────────────────
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored) {
        const parsed: ConsentRecord = JSON.parse(stored);
        const storedDate = new Date(parsed.timestamp);
        const expiryDate = new Date(storedDate);
        expiryDate.setDate(expiryDate.getDate() + CONSENT_EXPIRY_DAYS);

        // If expired, show popup again
        if (new Date() > expiryDate) {
          localStorage.removeItem(CONSENT_KEY);
          setIsVisible(true);
        }
        // Otherwise, consent is valid — don't show
      } else {
        // Small delay so popup appears after initial paint
        const timer = setTimeout(() => setIsVisible(true), 1500);
        return () => clearTimeout(timer);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  // ── Save consent ────────────────────────────────────
  const saveConsent = useCallback(
    async (status: "accepted" | "rejected") => {
      setIsSubmitting(true);

      const record: ConsentRecord = {
        status,
        email: email.trim(),
        timestamp: new Date().toISOString(),
        categories:
          status === "accepted"
            ? categories
            : {
                necessary: true,
                analytics: false,
                marketing: false,
                preferences: false,
              },
      };

      // Save locally first (instant)
      try {
        localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
      } catch {
        // localStorage unavailable — continue anyway
      }

      // Hide popup immediately for good UX
      setIsVisible(false);

      // Fire-and-forget API call
      try {
        await fetch("/api/cookie-consent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email.trim(),
            status,
            timestamp: record.timestamp,
            page: window.location.href,
          }),
        });
      } catch (err) {
        console.warn("Cookie consent API call failed:", err);
        // Non-blocking — consent is already saved locally
      }

      setIsSubmitting(false);
    },
    [email, categories],
  );

  // ── Don't render if not visible ─────────────────────
  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-9998 transition-opacity duration-500 animate-fadeIn"
        aria-hidden="true"
      />

      {/* Popup */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Cookie consent"
        aria-describedby="cookie-consent-description"
        className="fixed bottom-0 left-0 right-0 z-9999 p-4 sm:p-6 animate-slideUp"
      >
        <div className="max-w-2xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/60 overflow-hidden">
          {/* Header */}
          <div className="bg-linear-to-r from-green-600 to-emerald-600 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Cookie className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-white font-bold text-lg tracking-tight">
                  Cookie Preferences
                </h2>
                <p className="text-green-100 text-xs font-medium">
                  Your privacy matters to us
                </p>
              </div>
            </div>
            <button
              onClick={() => saveConsent("rejected")}
              className="text-white/70 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
              aria-label="Dismiss cookie popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-5 space-y-4">
            <p
              id="cookie-consent-description"
              className="text-slate-600 text-sm leading-relaxed"
            >
              We use cookies to improve your experience, analyze site traffic,
              and personalize content. You can accept all cookies or customize
              your preferences below.{" "}
              <Link
                href="/cookies"
                className="text-green-600 font-semibold hover:underline"
              >
                Read our Cookie Policy
              </Link>
            </p>

            {/* Email input */}
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="email"
                placeholder="Your email (optional — stay updated)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-400 transition-all text-slate-800 placeholder:text-slate-400"
                aria-label="Email address for updates"
              />
            </div>

            {/* Cookie categories toggle */}
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-700 transition-colors"
              aria-expanded={showCategories}
              aria-controls="cookie-categories"
            >
              <Shield className="w-3.5 h-3.5" />
              Customize cookie preferences
              {showCategories ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>

            {/* Cookie categories detail */}
            {showCategories && (
              <div
                id="cookie-categories"
                className="bg-slate-50 rounded-xl p-4 space-y-3 border border-slate-100 animate-fadeIn"
              >
                {/* Necessary — always on */}
                <label className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-semibold text-slate-800">
                      Necessary
                    </span>
                    <p className="text-xs text-slate-500">
                      Required for core site functionality
                    </p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked
                      disabled
                      className="sr-only peer"
                    />
                    <div className="w-10 h-5 bg-green-500 rounded-full opacity-60 cursor-not-allowed" />
                    <div className="absolute top-0.5 left-5 w-4 h-4 bg-white rounded-full shadow" />
                  </div>
                </label>

                {/* Analytics */}
                <div
                  className="flex items-center justify-between cursor-pointer group"
                  onClick={() =>
                    setCategories((c) => ({
                      ...c,
                      analytics: !c.analytics,
                    }))
                  }
                >
                  <div>
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-green-700 transition-colors">
                      Analytics
                    </span>
                    <p className="text-xs text-slate-500">
                      Help us understand traffic and usage
                    </p>
                  </div>
                  <div className="relative w-10 h-5">
                    <div
                      className={`w-full h-full rounded-full transition-colors duration-200 ${
                        categories.analytics ? "bg-green-500" : "bg-slate-300"
                      }`}
                    />
                    <div
                      className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${
                        categories.analytics ? "left-5" : "left-0.5"
                      }`}
                    />
                  </div>
                </div>

                {/* Marketing */}
                <div
                  className="flex items-center justify-between cursor-pointer group"
                  onClick={() =>
                    setCategories((c) => ({
                      ...c,
                      marketing: !c.marketing,
                    }))
                  }
                >
                  <div>
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-green-700 transition-colors">
                      Marketing
                    </span>
                    <p className="text-xs text-slate-500">
                      Personalized ads and promotions
                    </p>
                  </div>
                  <div className="relative w-10 h-5">
                    <div
                      className={`w-full h-full rounded-full transition-colors duration-200 ${
                        categories.marketing ? "bg-green-500" : "bg-slate-300"
                      }`}
                    />
                    <div
                      className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${
                        categories.marketing ? "left-5" : "left-0.5"
                      }`}
                    />
                  </div>
                </div>

                {/* Preferences */}
                <div
                  className="flex items-center justify-between cursor-pointer group"
                  onClick={() =>
                    setCategories((c) => ({
                      ...c,
                      preferences: !c.preferences,
                    }))
                  }
                >
                  <div>
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-green-700 transition-colors">
                      Preferences
                    </span>
                    <p className="text-xs text-slate-500">
                      Remember your settings and choices
                    </p>
                  </div>
                  <div className="relative w-10 h-5">
                    <div
                      className={`w-full h-full rounded-full transition-colors duration-200 ${
                        categories.preferences ? "bg-green-500" : "bg-slate-300"
                      }`}
                    />
                    <div
                      className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${
                        categories.preferences ? "left-5" : "left-0.5"
                      }`}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="px-6 pb-5 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => saveConsent("accepted")}
              disabled={isSubmitting}
              className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-green-500/20 hover:shadow-green-500/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              <Check className="w-4 h-4" />
              Accept Cookies
            </button>
            <button
              onClick={() => saveConsent("rejected")}
              disabled={isSubmitting}
              className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-6 rounded-xl transition-all duration-200 border border-slate-200 hover:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              <X className="w-4 h-4" />
              Reject Optional
            </button>
          </div>

          {/* Footer links */}
          <div className="px-6 pb-4 flex items-center justify-center gap-4 text-xs text-slate-400">
            <Link
              href="/privacy-policy"
              className="hover:text-green-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              href="/cookies"
              className="hover:text-green-600 transition-colors"
            >
              Cookie Policy
            </Link>
            <span>•</span>
            <Link
              href="/terms-and-conditions"
              className="hover:text-green-600 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-slideUp {
          animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
