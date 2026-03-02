import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Terms & Conditions | Kartik Solar Enterprises",
  description:
    "Read the terms and conditions of Kartik Solar Enterprises. Understand our service terms, installation policies, warranty, and customer responsibilities.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="pt-20 page-bg min-h-screen">
      <Header />

      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 font-semibold text-sm rounded-full mb-4">
              Legal
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Terms &amp; Conditions
            </h1>
            <p className="text-slate-500 text-sm">
              Effective Date: 1st February 2026 | Last updated: 28th February
              2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate prose-lg max-w-none space-y-10">
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
                (the “Site”) owned by Kartik Solar Enterprises (“we,” “us,” or
                “our”), or by using any solar energy product, installation, or
                consulting service with us, you (“Customer,” “you,” or “your”)
                agree to these Terms and Conditions (“Terms”). If you do not
                agree to these Terms, do not use our Website or our services.
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
                  <strong>Company Address:</strong> 25/4, Rajpur Road, Dehradun,
                  Uttarakhand, India - 248001
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
                  <strong>Contact Number:</strong>{" "}
                  <a
                    href="tel:+919897012345"
                    className="text-green-600 hover:underline"
                  >
                    +91 98970 12345
                  </a>
                </li>
                <li>
                  <strong>Serviceable Areas:</strong> Dehradun, Haridwar,
                  Rishikesh, and surrounding areas of Uttarakhand, India
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                3. Services
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                Kartik Solar Enterprises provides the following services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>
                  Design, supply and installation of solar panel systems for
                  residential purposes
                </li>
                <li>
                  Solar energy solutions for the commercial and industrial
                  sectors
                </li>
                <li>
                  Consultation, site evaluation, and feasibility study of solar
                  systems
                </li>
                <li>Configuration of battery backup and energy storage</li>
                <li>
                  Support in the application of government subsidy (MNRE/PM
                  Surya Ghar Yojana)
                </li>
                <li>
                  Post installation maintenance, service, and warranty support
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-3">
                All services depend on project contracts, site circumstances,
                and government regulations that are in effect at the time of
                installation.
              </p>
            </div>

            {/* Pricing and Quotations */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                4. Pricing and Quotations
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Quotes/estimates provided via our Website, WhatsApp, email, or
                during an in-person meeting are valid for 30 days from the date
                provided, unless otherwise specified on the estimate.
                Quotes/estimates are subject to change due to government grants,
                changing costs of materials and/or components, taxes (GST), and
                site-specific conditions. We will not begin any work before
                providing you with a formal agreement or work order.
              </p>
            </div>

            {/* Terms of Payment */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                5. Terms of Payment
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                The terms of payment are outlined in the individual project
                contracts and can include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>
                  An advance payment due at the time of signing (typically
                  30-50% of the total).
                </li>
                <li>
                  A progress payment due during the execution and/or
                  commencement of the installation.
                </li>
                <li>
                  A retention payment due at the completion of the work and
                  prior to handover.
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-3">
                Payment can be made by bank transfer (NEFT/RTGS/IMPS), UPI, and
                cheque. All prices, unless stated otherwise, include the
                applicable GST. The contract stipulates the payment of interest
                in the event of a payment made after the time specified.
              </p>
            </div>

            {/* Warranty Conditions */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                6. Warranty Conditions
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                The warranty for installations done encompasses the following:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>
                  <strong>Solar panels:</strong> 25-year performance warranty
                  (according to the manufacturer)
                </li>
                <li>
                  <strong>Inverter:</strong> According to the manufacturer
                  warranty (generally 5–10 years)
                </li>
                <li>
                  <strong>Battery (if applicable):</strong> According to the
                  manufacturer warranty (generally 2–5 years)
                </li>
                <li>
                  <strong>Workmanship & Installation:</strong> 1-year
                  Workmanship warranty from the date of commissioning
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-3">
                Warranty claims not due to the misuse, modification or
                unauthorized actions of the owner, boarding, god actions,
                tampering and over electrical surges beyond warranted
                specifications. Warranty inquiries must only be conducted by
                email to{" "}
                <a
                  href="mailto:kartiksolar.in@gmail.com"
                  className="text-green-600 hover:underline"
                >
                  kartiksolar.in@gmail.com
                </a>
                .
              </p>
            </div>

            {/* Terms of the Agreement */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                7. Terms of the Agreement
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                The Customer agrees to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>
                  Submit complete site information including the roof
                  dimensions, roof orientation, roof shading, and current
                  electrical setup.
                </li>
                <li>
                  Grant unobstructed entry to the installation site on the
                  scheduled days.
                </li>
                <li>
                  Obtain and provide any necessary legal, installation and
                  housing society permission documents from the authorities
                  before installation.
                </li>
                <li>
                  Not alter any installed systems without prior written approval
                  from Kartik Solar Enterprises.
                </li>
                <li>
                  Any damages, malfunctions, and possible safety concerns should
                  be reported to Kartik Solar Enterprises.
                </li>
              </ul>
            </div>

            {/* Copy Ownership */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                8. Copy Ownership
              </h2>
              <p className="text-slate-600 leading-relaxed">
                All content on the website, such as text, images, graphics,
                logos, pictures of finished work, project blogs, and other
                graphics, belongs to Kartik Solar Enterprises and/or its
                licensors. All copies of such content are the exclusive property
                of Kartik Solar and may not be reproduced without express
                written permission.
              </p>
            </div>

            {/* Limitations on Liability */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                9. Limitations on Liability
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Except as provided by the laws of India, Kartik Solar
                Enterprises shall not be held liable for (a) any indirect,
                incidental, or consequential damages caused by the use of our
                services, (b) estimates of electric bills or savings, which are
                subject to actual usage, temperature, and changes in grid
                tariffs, (c) delays caused by third-party vendors, government
                distribution companies, approvals, or net metering.
              </p>
            </div>

            {/* Applicable Law & Jurisdictions */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                10. Applicable Law & Jurisdictions
              </h2>
              <p className="text-slate-600 leading-relaxed">
                The laws of India shall govern these Terms. Any disputes arising
                from these Terms will be subject to settlement by direct
                negotiations. If the dispute remains unsettled, it shall be
                within the exclusive jurisdiction of the Courts of Dehradun,
                Uttarakhand.
              </p>
            </div>

            {/* Amendments to Terms */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                11. Amendments to Terms
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Kartik Solar Enterprises has the right to modify these Terms at
                its discretion. New Terms will be updated on the Website along
                with a new effective date. By using the Website or our services,
                you will be accepting the new Terms.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                12. Contact for Queries Related to Terms
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                For further questions regarding these Terms and Conditions,
                please reach us at:
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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
