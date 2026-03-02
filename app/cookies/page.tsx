import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Cookies Policy | Kartik Solar Enterprises",
  description:
    "Read the cookies policy of Kartik Solar Enterprises. Learn about how we use cookies to improve your experience on our website.",
};

export default function CookiesPolicyPage() {
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
              Cookies Policy
            </h1>
            <p className="text-slate-500 text-sm">
              Effective Date: 1st February 2026 | Last updated: 28th February
              2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-slate prose-lg max-w-none space-y-10">
            {/* What Are Cookies */}
            {/* What Are Cookies */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                1. What do we mean by &apos;Cookies&apos;?
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Cookies are small files saved on the device used to access a
                webpage for the first time. Depending on the device they are
                used to help improve the webpage, remember the user’s
                preferences, or help the website owner understand user behavior
                to improve the site.
              </p>
            </div>

            {/* How Kartik Solar Enterprises Uses Cookies */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                2. What are the Cookies used by Kartik Solar Enterprises
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                When you visit solar1-cyan.vercel.app, we collect Cookies to
                understand how we can improve our interaction with you. We use
                several types of Cookies, These are meant to help improve user
                experience.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    2.1. Cookies That Are Strictly Necessary
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-3">
                    These Cookies are essential for the proper functioning of
                    the site. Therefore, they are strict, and cannot be changed.
                    These are activated by you when you ask a question, place a
                    service request, or adjust a setting. If these Cookies are
                    not there, some website functionalities will be lost.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600">
                    <li>
                      These include security and fraud protection, session
                      management, and form submission.
                    </li>
                    <li>
                      Load balancing and server management (via Vercel, the site
                      hosting service)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    2.2 Performance and Analytics Cookies
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-3">
                    These cookies track site user activity and suggest what
                    improvements can be made. The information collected from
                    these cookies is in aggregate and completely impartial.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600">
                    <li>How often and how long users spend on pages</li>
                    <li>Errors and broken links</li>
                    <li>Pages and content that receive the most traffic</li>
                    <li>
                      One of the analytics tools we use is Google Analytics. If
                      you would like to not be tracked by Google Analytics, you
                      can opt out by using the Google Analytics Opt-out Browser
                      Add-on available at{" "}
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
                    Cookies in this category allow the Website to provide
                    enhanced and more personalized features by remembering your
                    preferences, including your choice of language and your
                    location. These cookies may be set by us or by the
                    third-party providers whose features we have incorporated
                    into our pages.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600">
                    <li>
                      Recording your preferences for future communications
                    </li>
                    <li>Features of the WhatsApp chat widget</li>
                    <li>Configuration of the embedded video/media player</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    2.4 Marketing and Targeting Cookies (if applicable)
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Marketing cookies may be used to promote our solar services
                    to you on other websites. Marketing cookies track your
                    activity on our Website and other sites to build your
                    interest profile. While we do not currently run paid
                    advertising campaigns, we may do so in the future. In that
                    case, we will revise this policy and collect your consent,
                    if applicable.
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
                Some of the cookies that have been set on our Website come from
                other websites. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
                <li>
                  <strong>Vercel</strong> (website hosting and performance) —
                  infrastructure and CDN delivery
                </li>
                <li>
                  <strong>Google Analytics</strong> — anonymous visitor
                  statistics
                </li>
                <li>
                  <strong>WhatsApp Business Widget</strong> — live chat button
                </li>
                <li>
                  <strong>Sanity CMS</strong> — delivery of blog content (images
                  and articles)
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                These websites have their own privacy policies, and we recommend
                reviewing them. Third-party cookies are not the responsibility
                of Kartik Solar Enterprises.
              </p>
            </div>

            {/* Cookie Duration */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                4. Cookie Duration
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                We use cookies of the following duration types:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>
                  <strong>Session Cookies:</strong> These cookies are used for
                  the website&apos;s basic operational needs and are created and
                  active until the current browser session (i.e. store and
                  active until the current browser session (i.e. store these in
                  your browser).
                </li>
                <li>
                  <strong>Persistent Cookies:</strong> These cookies are used to
                  store preferences and facilitate tracking. They stay on your
                  device for a predetermined duration (i.e. range of 30 days to
                  a max of 2 years) or until you delete them manually.
                </li>
              </ul>
            </div>

            {/* Managing and Disabling Cookies */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                5. Cookies Management and Disablement
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                You can enable or disable cookies, but keep in mind, some
                integrations are necessary for our Website to function and
                perform. Management of cookies can be accessed via most web
                browser settings. The following are examples from some web
                browsers:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
                <li>
                  <strong>Google Chrome:</strong> Settings {">"} Privacy and
                  Security {">"} Cookies and Other site data
                </li>
                <li>
                  <strong>Mozilla Firefox:</strong> Settings {">"} Privacy &
                  Security {">"} Cookies and Site Data
                </li>
                <li>
                  <strong>Microsoft Edge:</strong> Settings {">"} Cookies and
                  Site Permissions
                </li>
                <li>
                  <strong>Safari:</strong> Preferences {">"} Privacy {">"}{" "}
                  Manage Website Data
                </li>
              </ul>
              <p className="text-slate-600 leading-relaxed">
                You may also utilize industry opt-out tools; for example,
                opt-out tools from Network Advertising Initiative and Digital
                Advertising Alliance. You may find them by searching{" "}
                <a
                  href="https://optout.networkadvertising.org"
                  className="text-green-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  optout.networkadvertising.org
                </a>{" "}
                and{" "}
                <a
                  href="https://youradchoices.com"
                  className="text-green-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  youradchoices.com
                </a>
                , respectively.
              </p>
            </div>

            {/* Do Not Track */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                6. Tracking Do Not
              </h2>
              <p className="text-slate-600 leading-relaxed mb-3">
                Some web browsers have Do Not Track features, where there is a
                feature that requests that tracking does not happen when they
                are visiting a particular site. At this time, there is not a
                global standard for DNT signals.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our website does not currently acknowledge these forms of DNT
                signals, however, the cookie policy does illustrate the methods
                we employ to honor users’ privacy.
              </p>
            </div>

            {/* Consent */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                7. Consent
              </h2>
              <p className="text-slate-600 leading-relaxed">
                When users visit websites, they see notice asking them to give
                consent regarding cookies. Users can also deny these cookies. If
                users do not change their cookie settings, they consent to the
                policy. If users want to revoke their consent, they can change
                their settings. We respect your privacy.
              </p>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                8. Changes to This Cookies Policy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                This policy may change due to new laws, technologies, or new
                ways of working that arise. All of these changes will be
                reflected on this site. We encourage users to check this policy
                frequently to see changes.
              </p>
            </div>

            {/* Contact Us */}
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
                  <strong>Address:</strong> 25/4, Rajpur Road, Dehradun,
                  Uttarakhand, India – 248001
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
