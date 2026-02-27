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
              Last updated: February 18, 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate prose-lg max-w-none space-y-10">
            {/* Introduction */}
            <div>
              <p className="text-slate-600 leading-relaxed">
                Welcome to Kartik Solar Enterprises. These Terms &amp;
                Conditions govern your use of our website and the solar energy
                services we provide. By accessing our website or engaging our
                services, you agree to these terms. Please read them carefully
                before proceeding.
              </p>
            </div>

            {/* Service Scope */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                1. Scope of Services
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                Kartik Solar Enterprises provides the following services for
                residential and commercial customers:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Solar panel system design and consultation</li>
                <li>Rooftop solar installation for homes and businesses</li>
                <li>Battery backup and energy storage solutions</li>
                <li>
                  Government subsidy documentation and net metering assistance
                </li>
                <li>Post-installation maintenance and service support</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-3">
                All services are subject to site feasibility, local regulations,
                and availability in your area. Our team will conduct a site
                survey before confirming the scope of work.
              </p>
            </div>

            {/* Quotations & Payments */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                2. Quotations &amp; Payments
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>
                  All quotations provided by Kartik Solar Enterprises are valid
                  for 15 days from the date of issue unless stated otherwise.
                </li>
                <li>
                  Prices may vary based on system size, component selection,
                  site conditions, and applicable government subsidies.
                </li>
                <li>
                  A booking advance is required to confirm the order. The
                  remaining balance is payable as per the agreed payment
                  schedule.
                </li>
                <li>
                  Payments can be made via bank transfer, UPI, cheque, or any
                  other mode agreed upon at the time of booking.
                </li>
                <li>
                  GST and other applicable taxes will be charged as per
                  government regulations.
                </li>
              </ul>
            </div>

            {/* Installation Terms */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                3. Installation Terms
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>
                  Installation timelines are estimated and may vary depending on
                  weather conditions, approvals, and material availability.
                </li>
                <li>
                  The customer must provide safe and clear access to the rooftop
                  and electrical panel during installation.
                </li>
                <li>
                  Any structural modifications required for installation (such
                  as rooftop reinforcement) are the responsibility of the
                  customer unless agreed otherwise.
                </li>
                <li>
                  Kartik Solar Enterprises will ensure all installations comply
                  with local electrical safety standards and regulations.
                </li>
                <li>
                  Net metering application and approval timelines depend on the
                  local electricity distribution company (DISCOM) and are
                  outside our direct control.
                </li>
              </ul>
            </div>

            {/* Warranty & Maintenance */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                4. Warranty &amp; Maintenance
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>
                  Solar panels come with a manufacturer&apos;s performance
                  warranty of up to 25 years (as per the panel brand).
                </li>
                <li>
                  Inverters and batteries carry separate manufacturer
                  warranties, typically ranging from 5 to 10 years.
                </li>
                <li>
                  Kartik Solar Enterprises provides workmanship warranty on
                  installation for a period communicated at the time of
                  purchase.
                </li>
                <li>
                  Warranty does not cover damage caused by natural disasters,
                  unauthorized modifications, negligence, or misuse.
                </li>
                <li>
                  Maintenance services, including panel cleaning and system
                  health checks, are available as per the service plan chosen by
                  the customer.
                </li>
              </ul>
            </div>

            {/* Customer Responsibilities */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                5. Customer Responsibilities
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                As a customer, you agree to the following:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>
                  Provide accurate information regarding your electricity usage,
                  rooftop area, and property ownership.
                </li>
                <li>
                  Ensure the installation site is accessible and safe for our
                  team during the scheduled installation period.
                </li>
                <li>
                  Obtain any required permissions or approvals from your housing
                  society, landlord, or local authority before installation
                  begins.
                </li>
                <li>
                  Do not attempt to modify, repair, or tamper with the solar
                  system without consulting Kartik Solar Enterprises.
                </li>
                <li>Make timely payments as per the agreed schedule.</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                6. Limitation of Liability
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>
                  Kartik Solar Enterprises shall not be held liable for any
                  indirect, incidental, or consequential damages arising from
                  the use of our services or website.
                </li>
                <li>
                  Energy generation estimates provided are approximate and may
                  vary based on weather conditions, shading, panel orientation,
                  and other environmental factors.
                </li>
                <li>
                  We are not responsible for delays or disruptions caused by
                  government bodies, electricity boards, or force majeure events
                  (natural disasters, pandemics, etc.).
                </li>
                <li>
                  Our total liability in any claim shall not exceed the total
                  amount paid by the customer for the specific service in
                  question.
                </li>
              </ul>
            </div>

            {/* Cancellations & Refunds */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                7. Cancellations &amp; Refunds
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>
                  Cancellation requests must be made in writing before the
                  commencement of installation work.
                </li>
                <li>
                  If materials have already been procured or customized for your
                  project, cancellation charges may apply.
                </li>
                <li>
                  Refund amounts and timelines will be communicated on a
                  case-by-case basis after reviewing the cancellation request.
                </li>
                <li>
                  No refund will be issued after installation has been completed
                  and the system has been commissioned.
                </li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                8. Website &amp; Intellectual Property
              </h2>
              <p className="text-slate-600 leading-relaxed">
                All content on this website — including text, images, logos,
                designs, and graphics — is the property of Kartik Solar
                Enterprises and is protected by applicable intellectual property
                laws. You may not reproduce, distribute, or use any content from
                this website without our prior written consent.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                9. Governing Law
              </h2>
              <p className="text-slate-600 leading-relaxed">
                These Terms &amp; Conditions are governed by and construed in
                accordance with the laws of India. Any disputes arising out of
                or related to these terms shall be subject to the exclusive
                jurisdiction of the courts in Dehradun, Uttarakhand.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                10. Changes to These Terms
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Kartik Solar Enterprises reserves the right to update or modify
                these Terms &amp; Conditions at any time. Changes will be
                reflected on this page with an updated &quot;Last updated&quot;
                date. Continued use of our website or services after changes are
                posted constitutes your acceptance of the revised terms.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                11. Contact Us
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have any questions about these Terms &amp; Conditions,
                please contact us:
              </p>
              <div className="space-y-2 text-slate-600">
                <p>
                  <strong>Kartik Solar Enterprises</strong>
                </p>
                <p>25/4, Rajpur Road, Dehradun, Uttarakhand 248001</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:connect@kartiksolar.in"
                    className="text-green-600 hover:underline"
                  >
                    connect@kartiksolar.in
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
