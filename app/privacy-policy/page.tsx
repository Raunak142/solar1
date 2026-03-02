import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Privacy Policy | Kartik Solar Enterprises",
  description:
    "Read the privacy policy of Kartik Solar Enterprises. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-slate-500 text-sm">
              Effective Date: 1st February 2026 | Last updated: 28th February 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate prose-lg max-w-none space-y-10">
            {/* Introduction */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-slate-600 leading-relaxed">
                The purpose of this privacy policy is to explain the ways in which we at Kartik Solar Enterprises &quot;we,&quot; &quot;us,&quot; or &quot;our&quot; and/or other companies or clients operating under the &quot;Kartic Solar Enterprises&quot; umbrella or brand name or direct competitors or clients of ours who provide solar energy services to clients having &quot;data protection practices&quot; or &quot;data protection services&quot; and/or through the use of our Website at <a href="https://solar1-cyan.vercel.app" className="text-green-600 hover:underline">solar1-cyan.vercel.app</a> and/or provide other privacy and/or personal data protection services to users and/or services to us from users who service or consult clients. You are invited to review the policy.
              </p>
            </div>

            {/* Collection of Your Data */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                2. Collection of Your Data
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                We are processing and collecting the following personal data from you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>Identification Information:</strong> If you communicate with us through the WhatsApp application or the contact form or you do an enquiry and communicate with us, we collect your name, phone number, email, and address.</li>
                <li><strong>Technical and Property Data:</strong> While you are in an online consultation, you might provide us the measurements of your roof, your electricity bills, your location for site assessment(s). You might also share the photos of your house.</li>
                <li><strong>Usage data:</strong> Data is collected and recorded automatically through the utilization of cookies and analytics. This data includes the following information: your IP address, the type of the browser you are using, the data regarding the pages you have visited, the duration you have spent on the Website, the URLs which have directed you to our Website.</li>
                <li><strong>Communication Record:</strong> You may have communications via email, WhatsApp, or phone with our staff, and the law provides the extent of records of such communications.</li>
              </ul>
            </div>

            {/* Your Data: What We Do with Your Data */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                3. Your Data: What We Do with Your Data
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                Your personal data is used to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Answer questions and perform solar consultations</li>
                <li>Draft and send quotes and descriptions for solar projects</li>
                <li>Schedule site visits and installations, as well as maintenance</li>
                <li>File government subsidies on your behalf</li>
                <li>Provide updates, and offers on services and programs (with your consent)</li>
                <li>Help improve our website, services, and customer experience</li>
                <li>Fulfill our obligations under the laws of India</li>
              </ul>
            </div>

            {/* Processing Justification */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                4. Processing Justification (Invoking the IT Act, 2000, &amp; DPDP Act, 2023)
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                Your data is processed for the following justified reasons:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>Consent:</strong> Where consent is provided for particular communications</li>
                <li><strong>Contractual duty:</strong> Related to services for solar installation</li>
                <li><strong>Legal duty:</strong> Following the laws of India</li>
                <li><strong>Interest:</strong> For the improvement of services and website</li>
              </ul>
            </div>

            {/* Data Sharing and Disclosure */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                5. Data Sharing and Disclosure
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                Your personal data is never sold, traded, or rented to other entities. We may share your information only under the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>For project execution with installation partners or subcontractors</li>
                <li>Data may be shared with government entities, such as DISCOM (distribution companies) or MNRE, for net metering and subsidy applications.</li>
                <li>The sharing of data with technology service providers (such as website hosting and analytics) is a result of data processing agreements.</li>
                <li>Data may be disclosed when provided for under a law, a court order, or in instances of an appropriate lawful regulatory scope in India.</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                6. Data Retention
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Personal data will be kept as long as it is necessary to achieve the purpose outlined in this Policy or as required by law. Data related to inquiries will be kept for 3 years. Data related to Projects and Warranty will be kept for 10 years as per the service warranty obligations. You may request for deletion of your data in the absence of any legal retention obligations.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                7. Your Rights
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                In respect of the current legislation in India, including the Digital Personal Data Protection Act, 2023, you are entitled to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
                <li>Be informed of, and have access to, the personal data we hold about you.</li>
                <li>Have any data you claim is inaccurate or incomplete corrected.</li>
                <li>Have your personal data deleted, (unless otherwise provided for by law).</li>
                <li>Revoke your consent to receive direct marketing communications.</li>
                <li>Submit a complaint to our Data Grievance Officer.</li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                To exercise your rights, please write to us at <a href="mailto:kartiksolar.in@gmail.com" className="text-green-600 hover:underline">kartiksolar.in@gmail.com</a>, with the subject line “Data Privacy Request”.
              </p>
            </div>

            {/* Data Protection */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                8. Data Protection
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Data protection from unauthorized access, loss, destruction, or disclosure is a priority for us. We help protect your data by utilizing HTTPS for our website. Unfortunately, total data protection threats cannot be compromised.
              </p>
            </div>

            {/* Other Websites */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                9. Other Websites
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Our website may contain links to third parties, including government and brand partner websites. We recommend reviewing the third-party site’s privacy policies, as we do not govern or control them.
              </p>
            </div>

            {/* Children’s Data */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                10. Children’s Data
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Our website’s and services’ intended audience is not individuals below 18 years old. We do not collect personal data from children. Please contact us if you believe we have obtained personal data from children.
              </p>
            </div>

            {/* Privacy Policy Updates */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                11. Privacy Policy Updates
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Our Privacy Policy is subject to change. Updates are made available on this page, and a date will be published to indicate the most recent change. We recommend you periodically check for updates.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                12. Data Grievance Officer
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  <strong>Name:</strong> Kartik Solar Enterprises — Grievance Officer
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:kartiksolar.in@gmail.com"
                    className="text-green-600 hover:underline break-all"
                  >
                    kartiksolar.in@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> 25 / 4, Rajpur Road, Dehradun, Uttarakhand, India – 248001
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed mt-4 pt-4 border-t border-slate-200">
                We will respond to all data privacy complaints within 30 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
