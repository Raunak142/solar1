import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import FooterServer from "@/components/sections/FooterServer";
import { getCookiesMetadata } from "@/lib/seo";
import { getLegalPage } from "@/lib/data";
import { PortableText } from "@portabletext/react";

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const cmsData = await getLegalPage("cookies");
  if (cmsData?.seo?.metaTitle) {
    return {
      title: cmsData.seo.metaTitle,
      description: cmsData.seo.metaDescription || undefined,
    };
  }
  return getCookiesMetadata();
}

// Fallback content (original hardcoded version)
function FallbackCookiesContent() {
  return (
    <>
      {/* What Are Cookies */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          1. What do we mean by &apos;Cookies&apos;?
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Cookies are small files saved on the device used to access a webpage
          for the first time. Depending on the device they are used to help
          improve the webpage, remember the user&apos;s preferences, or help the
          website owner understand user behavior to improve the site.
        </p>
      </div>

      {/* How Kartik Solar Enterprises Uses Cookies */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          2. What are the Cookies used by Kartik Solar Enterprises
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          When you visit solar1-cyan.vercel.app, we collect Cookies to
          understand how we can improve our interaction with you. We use several
          types of Cookies, These are meant to help improve user experience.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              2.1. Cookies That Are Strictly Necessary
            </h3>
            <p className="text-slate-600 leading-relaxed mb-3">
              These Cookies are essential for the proper functioning of the
              site. Therefore, they are strict, and cannot be changed.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>
                Security and fraud protection, session management, and form
                submission.
              </li>
              <li>Load balancing and server management (via Vercel)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              2.2 Performance and Analytics Cookies
            </h3>
            <p className="text-slate-600 leading-relaxed mb-3">
              These cookies track site user activity and suggest what
              improvements can be made.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>How often and how long users spend on pages</li>
              <li>Errors and broken links</li>
              <li>Pages and content that receive the most traffic</li>
              <li>
                We use Google Analytics. You can opt out at{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  className="text-green-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  tools.google.com/dlpage/gaoptout
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              2.3 Functional Cookies
            </h3>
            <p className="text-slate-600 leading-relaxed mb-3">
              These allow enhanced and more personalized features.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Recording your preferences for future communications</li>
              <li>Features of the WhatsApp chat widget</li>
              <li>Configuration of the embedded video/media player</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">
              2.4 Marketing and Targeting Cookies (if applicable)
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Marketing cookies may be used to promote our solar services to you
              on other websites. While we do not currently run paid advertising
              campaigns, we may do so in the future.
            </p>
          </div>
        </div>
      </div>

      {/* Third-Party Cookies */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          3. Cookies from Other Websites
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          Some cookies come from other websites. This includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
          <li>
            <strong>Vercel</strong> — infrastructure and CDN delivery
          </li>
          <li>
            <strong>Google Analytics</strong> — anonymous visitor statistics
          </li>
          <li>
            <strong>WhatsApp Business Widget</strong> — live chat button
          </li>
          <li>
            <strong>Sanity CMS</strong> — delivery of blog content
          </li>
        </ul>
        <p className="text-slate-600 leading-relaxed">
          These websites have their own privacy policies. Third-party cookies
          are not our responsibility.
        </p>
      </div>

      {/* Cookie Duration */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          4. Cookie Duration
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>
            <strong>Session Cookies:</strong> Active until the browser session
            ends.
          </li>
          <li>
            <strong>Persistent Cookies:</strong> Stay for a predetermined
            duration (30 days to 2 years) or until deleted manually.
          </li>
        </ul>
      </div>

      {/* Managing Cookies */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          5. Cookies Management and Disablement
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          Management of cookies can be accessed via most web browser settings:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
          <li>
            <strong>Google Chrome:</strong> Settings {">"} Privacy and Security{" "}
            {">"} Cookies
          </li>
          <li>
            <strong>Mozilla Firefox:</strong> Settings {">"} Privacy & Security{" "}
            {">"} Cookies
          </li>
          <li>
            <strong>Microsoft Edge:</strong> Settings {">"} Cookies and Site
            Permissions
          </li>
          <li>
            <strong>Safari:</strong> Preferences {">"} Privacy {">"} Manage
            Website Data
          </li>
        </ul>
      </div>

      {/* Sections 6-8 */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          6. Do Not Track
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Our website does not currently acknowledge DNT signals, however, the
          cookie policy does illustrate the methods we employ to honor
          users&apos; privacy.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">7. Consent</h2>
        <p className="text-slate-600 leading-relaxed">
          When users visit websites, they see a notice asking them to give
          consent regarding cookies. Users can deny these cookies. We respect
          your privacy.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          8. Changes to This Cookies Policy
        </h2>
        <p className="text-slate-600 leading-relaxed">
          This policy may change. All changes will be reflected on this site. We
          encourage users to check frequently.
        </p>
      </div>

      {/* Contact */}
      <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          9. Questions Regarding Cookies
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          You can contact us regarding our Cookies Policy:
        </p>
        <div className="space-y-4 text-slate-600">
          <p>
            <strong>Kartik Solar Enterprises</strong>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:kartiksolar.in@gmail.com"
              className="text-green-600 hover:underline"
            >
              kartiksolar.in@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+919897012345"
              className="text-green-600 hover:underline"
            >
              +91 98970 12345
            </a>
          </p>
          <p>
            <strong>Address:</strong> 25/4, Rajpur Road, Dehradun, Uttarakhand,
            India – 248001
          </p>
        </div>
      </div>
    </>
  );
}

export default async function CookiesPolicyPage() {
  const cmsData = await getLegalPage("cookies");

  return (
    <main className="pt-20 page-bg min-h-screen">
      <Header />

      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 font-semibold text-sm rounded-full mb-4">
              {cmsData?.badge || "Legal"}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              {cmsData?.title || "Cookies Policy"}
            </h1>
            <p className="text-slate-500 text-sm">
              {cmsData?.effectiveDate && cmsData?.lastUpdated
                ? `Effective Date: ${cmsData.effectiveDate} | Last updated: ${cmsData.lastUpdated}`
                : "Effective Date: 1st February 2026 | Last updated: 28th February 2026"}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate prose-lg max-w-none space-y-10">
            {cmsData?.content && cmsData.content.length > 0 ? (
              <PortableText value={cmsData.content} />
            ) : (
              <FallbackCookiesContent />
            )}
          </div>
        </div>
      </section>
      <FooterServer />
    </main>
  );
}
