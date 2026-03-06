import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import FooterServer from "@/components/sections/FooterServer";
import { getTermsMetadata } from "@/lib/seo";
import { getLegalPage } from "@/lib/data";
import { PortableText } from "@portabletext/react";

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  const cmsData = await getLegalPage("terms");
  if (cmsData?.seo?.metaTitle) {
    return {
      title: cmsData.seo.metaTitle,
      description: cmsData.seo.metaDescription || undefined,
    };
  }
  return getTermsMetadata();
}

// Fallback content (original hardcoded version)
function FallbackTermsContent() {
  return (
    <>
      {/* Introduction */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          1. Acceptance of Terms
        </h2>
        <p className="text-slate-600 leading-relaxed">
          By visiting the site{" "}
          <a
            href="https://solar1-cyan.vercel.app"
            className="text-green-600 hover:underline"
          >
            solar1-cyan.vercel.app
          </a>{" "}
          (the &ldquo;Site&rdquo;) owned by Kartik Solar Enterprises, or by
          using any solar energy product, installation, or consulting service
          with us, you agree to these Terms and Conditions. If you do not agree,
          do not use our Website or services.
        </p>
      </div>

      {/* Company Information */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          2. Company Information
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>
            <strong>Business Name:</strong> Kartik Solar Enterprises
          </li>
          <li>
            <strong>Address:</strong> 25/4, Rajpur Road, Dehradun, Uttarakhand,
            India - 248001
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:kartiksolar.in@gmail.com"
              className="text-green-600 hover:underline"
            >
              kartiksolar.in@gmail.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+919897012345"
              className="text-green-600 hover:underline"
            >
              +91 98970 12345
            </a>
          </li>
          <li>
            <strong>Serviceable Areas:</strong> Dehradun, Haridwar, Rishikesh,
            and surrounding areas of Uttarakhand
          </li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">3. Services</h2>
        <p className="text-slate-600 leading-relaxed mb-3">
          Kartik Solar Enterprises provides:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>
            Design, supply and installation of solar panel systems for
            residential purposes
          </li>
          <li>Solar energy solutions for commercial and industrial sectors</li>
          <li>Consultation, site evaluation, and feasibility study</li>
          <li>Configuration of battery backup and energy storage</li>
          <li>
            Support in government subsidy application (MNRE/PM Surya Ghar
            Yojana)
          </li>
          <li>Post installation maintenance, service, and warranty support</li>
        </ul>
        <p className="text-slate-600 leading-relaxed mt-3">
          All services depend on project contracts, site circumstances, and
          government regulations.
        </p>
      </div>

      {/* Pricing */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          4. Pricing and Quotations
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Quotes are valid for 30 days. Subject to change due to government
          grants, material costs, taxes (GST), and site conditions.
        </p>
      </div>

      {/* Payment */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          5. Terms of Payment
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>Advance payment (typically 30-50%)</li>
          <li>Progress payment during installation</li>
          <li>Retention payment at completion</li>
        </ul>
        <p className="text-slate-600 leading-relaxed mt-3">
          Payment by bank transfer (NEFT/RTGS/IMPS), UPI, or cheque. All prices
          include applicable GST.
        </p>
      </div>

      {/* Warranty */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          6. Warranty Conditions
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>
            <strong>Solar panels:</strong> 25-year performance warranty
          </li>
          <li>
            <strong>Inverter:</strong> 5–10 years (per manufacturer)
          </li>
          <li>
            <strong>Battery:</strong> 2–5 years (per manufacturer)
          </li>
          <li>
            <strong>Workmanship:</strong> 1-year from commissioning
          </li>
        </ul>
      </div>

      {/* Customer Obligations */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          7. Customer Obligations
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>Submit complete site information</li>
          <li>Grant unobstructed entry on scheduled days</li>
          <li>Obtain necessary permissions before installation</li>
          <li>Not alter installed systems without written approval</li>
          <li>Report damages or concerns promptly</li>
        </ul>
      </div>

      {/* IP, Liability, Law */}
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          8. Intellectual Property
        </h2>
        <p className="text-slate-600 leading-relaxed">
          All website content belongs to Kartik Solar Enterprises and may not be
          reproduced without permission.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          9. Limitations on Liability
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Kartik Solar shall not be liable for indirect damages, estimated
          savings variations, or delays caused by third parties.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          10. Applicable Law &amp; Jurisdiction
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Governed by the laws of India. Disputes subject to the Courts of
          Dehradun, Uttarakhand.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          11. Amendments to Terms
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Kartik Solar reserves the right to modify these Terms. Updated Terms
          will be posted on the Website.
        </p>
      </div>

      {/* Contact */}
      <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          12. Contact for Queries
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          For questions regarding these Terms:
        </p>
        <div className="space-y-2 text-slate-600">
          <p>
            <strong>Kartik Solar Enterprises</strong>
          </p>
          <p>25/4, Rajpur Road, Dehradun, Uttarakhand 248001</p>
          <p>
            Email:{" "}
            <a
              href="mailto:kartiksolar.in@gmail.com"
              className="text-green-600 hover:underline"
            >
              kartiksolar.in@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+919897012345"
              className="text-green-600 hover:underline"
            >
              +91 98970 12345
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default async function TermsAndConditionsPage() {
  const cmsData = await getLegalPage("terms");

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
              {cmsData?.title || "Terms & Conditions"}
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
              <FallbackTermsContent />
            )}
          </div>
        </div>
      </section>

      <FooterServer />
    </main>
  );
}
