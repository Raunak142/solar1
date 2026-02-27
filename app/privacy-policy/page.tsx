import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Privacy Policy | Kartik Solar Enterprises",
  description:
    "Read the privacy policy of Kartik Solar Enterprises. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-20 bg-white min-h-screen">
      <Header />

      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 font-semibold text-sm rounded-full mb-4">
              Legal
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Privacy Policy
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
                At Kartik Solar Enterprises, we respect your privacy and are
                committed to protecting the personal information you share with
                us. This Privacy Policy explains how we collect, use, store, and
                protect your data when you visit our website or use our
                services. By using our website, you agree to the practices
                described in this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                We may collect the following types of information when you
                interact with our website:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>
                  <strong>Personal Information:</strong> Name, email address,
                  phone number, city, and any message you provide through our
                  contact form.
                </li>
                <li>
                  <strong>Technical Information:</strong> IP address, browser
                  type, device type, operating system, and pages visited on our
                  website.
                </li>
                <li>
                  <strong>Usage Data:</strong> How you interact with our
                  website, including page views, time spent, and navigation
                  patterns.
                </li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                The information we collect is used for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>
                  To respond to your inquiries and provide solar consultation
                </li>
                <li>To process and manage service requests</li>
                <li>
                  To send relevant updates about our solar solutions and offers
                  (only with your consent)
                </li>
                <li>To improve our website experience and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            {/* Contact Form Data */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                3. Contact Form Data Handling
              </h2>
              <p className="text-slate-600 leading-relaxed">
                When you submit a form on our website, your information (name,
                email, phone number, city, and message) is securely transmitted
                to our team via email and stored in our internal records. We use
                this data solely to respond to your inquiry and provide the
                requested solar consultation. Your contact form data is never
                sold or shared with third parties for marketing purposes.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                4. Cookies & Tracking Technologies
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Our website may use cookies and similar technologies to enhance
                your browsing experience. Cookies help us understand how
                visitors use our site, remember your preferences, and improve
                overall performance. You can control or disable cookies through
                your browser settings. Disabling cookies may affect certain
                features of the website.
              </p>
            </div>

            {/* Third-Party Services */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                5. Third-Party Services
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We may use trusted third-party services for analytics, email
                delivery, and website hosting. These services may collect
                limited technical data as part of their operations. We do not
                share your personal information with any third party for
                advertising or marketing purposes. Third-party services we may
                use include Google Analytics, Vercel (hosting), and Nodemailer
                (email delivery).
              </p>
            </div>

            {/* Data Protection */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                6. Data Protection & Security
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We take reasonable technical and organizational measures to
                protect your personal information from unauthorized access,
                loss, misuse, or alteration. Our website uses HTTPS encryption
                to secure data transmission. However, no method of electronic
                storage or transmission over the internet is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                7. Data Retention
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We retain your personal information only for as long as
                necessary to fulfill the purposes described in this policy or as
                required by law. Contact form submissions are retained for up to
                12 months unless you request earlier deletion.
              </p>
            </div>

            {/* User Rights */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                8. Your Rights
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                As a user, you have the following rights regarding your personal
                data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>
                  <strong>Access:</strong> You can request a copy of the
                  personal data we hold about you.
                </li>
                <li>
                  <strong>Correction:</strong> You can ask us to correct any
                  inaccurate or incomplete information.
                </li>
                <li>
                  <strong>Deletion:</strong> You can request the deletion of
                  your personal data from our records.
                </li>
                <li>
                  <strong>Opt-out:</strong> You can unsubscribe from marketing
                  communications at any time.
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-3">
                To exercise any of these rights, please contact us using the
                details provided below.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                9. Children&apos;s Privacy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Our website and services are not directed at individuals under
                the age of 18. We do not knowingly collect personal information
                from children. If you believe we have inadvertently collected
                such data, please contact us and we will promptly delete it.
              </p>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for legal reasons. Any updates will
                be posted on this page with a revised &quot;Last updated&quot;
                date. We encourage you to review this page periodically.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                11. Contact Us
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have any questions or concerns about this Privacy Policy
                or how we handle your data, please reach out to us:
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
