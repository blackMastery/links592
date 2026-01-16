import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Terms and Conditions
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Welcome to Links 592. These Terms and Conditions (&quot;Terms&quot;) govern your use of the 
                Links 592 Driver and Links 592 Rider mobile applications (the &quot;Apps&quot;) and services 
                provided by Links 592 (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or using 
                our Apps, you agree to be bound by these Terms. If you do not agree to these Terms, please 
                do not use our Apps.
              </p>
            </section>

            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                By downloading, installing, or using the Links 592 Apps, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree 
                to these Terms, you may not use our Apps.
              </p>
            </section>

            {/* Description of Service */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Description of Service
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Links 592 is a ride-hailing platform that connects professional drivers with riders in 
                Georgetown, Guyana. Our platform provides:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>A technology platform for matching drivers and riders</li>
                <li>GPS navigation and trip tracking services</li>
                <li>Payment processing and subscription management</li>
                <li>Safety features and emergency support</li>
                <li>Communication tools for drivers and riders</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Links 592 is a technology platform only. We do not provide transportation services. 
                Transportation services are provided by independent drivers who are not employees, 
                agents, or representatives of Links 592.
              </p>
            </section>

            {/* User Accounts */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. User Accounts and Registration
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Account Creation
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    To use our Apps, you must create an account by providing accurate, current, and 
                    complete information. You are responsible for maintaining the confidentiality of 
                    your account credentials and for all activities that occur under your account.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Verification
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    All users must complete KYC (Know Your Customer) verification. Drivers must provide 
                    valid government identification, driver&apos;s license, vehicle registration, and 
                    insurance documents. We reserve the right to verify any information provided and to 
                    suspend or terminate accounts that fail verification.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Age Requirement
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    You must be at least 17 years old to use our Apps. By using our Apps, you represent 
                    and warrant that you meet this age requirement.
                  </p>
                </div>
              </div>
            </section>

            {/* Driver Requirements */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Driver Requirements and Responsibilities
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Requirements
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">To become a Links 592 driver, you must:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li>Possess a valid Guyana driver&apos;s license</li>
                    <li>Own or have legal authority to operate a registered vehicle with valid insurance</li>
                    <li>Have a smartphone with GPS capability</li>
                    <li>Maintain a professional driving record</li>
                    <li>Complete all required verification and background checks</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Driver Responsibilities
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li>Provide safe, professional transportation services</li>
                    <li>Maintain your vehicle in good working condition</li>
                    <li>Comply with all traffic laws and regulations</li>
                    <li>Treat all riders with respect and professionalism</li>
                    <li>Negotiate trip costs directly with riders</li>
                    <li>Accept or decline trip requests in a timely manner</li>
                    <li>Maintain an active subscription to receive trip requests</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Earnings and Payments
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Drivers receive 100% of payments from riders. Links 592 does not charge commissions 
                    on individual trips. Drivers are responsible for negotiating trip costs directly 
                    with riders and collecting payments. All payments are made directly between drivers 
                    and riders.
                  </p>
                </div>
              </div>
            </section>

            {/* Rider Responsibilities */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Rider Responsibilities
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Rider Conduct
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li>Treat drivers with respect and courtesy</li>
                    <li>Provide accurate pickup and destination information</li>
                    <li>Be ready for pickup at the scheduled time</li>
                    <li>Negotiate trip costs directly with your driver</li>
                    <li>Pay for trips as agreed with the driver</li>
                    <li>Rate drivers fairly after each trip</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Subscription
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Riders must maintain an active subscription to request trips. Subscriptions provide 
                    unlimited trip requests but do not include the cost of individual trips, which are 
                    negotiated directly with drivers.
                  </p>
                </div>
              </div>
            </section>

            {/* Subscriptions */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Subscriptions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Subscription Plans
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Both drivers and riders must maintain active subscriptions to use the platform. 
                    Subscription plans are available in various durations. Subscriptions automatically 
                    renew unless cancelled at least 24 hours before the end of the current period.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Free Trials
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Riders may be eligible for a free trial period. Free trials automatically convert 
                    to paid subscriptions unless cancelled before the trial period ends. You can manage 
                    your subscription and cancel auto-renewal in your account settings.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Cancellation and Refunds
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    You may cancel your subscription at any time. Cancellation takes effect at the end 
                    of your current billing period. Refunds for unused portions of subscriptions are 
                    not provided unless required by law.
                  </p>
                </div>
              </div>
            </section>

            {/* Payments */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. Payments
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Subscription Payments
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Subscription payments are processed through secure third-party payment processors. 
                    By subscribing, you authorize us to charge your payment method for the subscription 
                    fee and any applicable taxes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Trip Payments
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Trip payments are made directly between drivers and riders. Links 592 does not 
                    process or handle individual trip payments. Payment methods may include cash, 
                    mobile money (MMG), or direct bank transfers, as agreed between the driver and rider.
                  </p>
                </div>
              </div>
            </section>

            {/* User Conduct */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                8. User Conduct
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Use the Apps for any illegal or unauthorized purpose</li>
                <li>Violate any laws, regulations, or third-party rights</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with or disrupt the Apps or servers</li>
                <li>Attempt to gain unauthorized access to any part of the Apps</li>
                <li>Use automated systems to access the Apps without permission</li>
                <li>Share false or misleading information</li>
                <li>Engage in fraudulent activity</li>
              </ul>
            </section>

            {/* Safety and Security */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                9. Safety and Security
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Safety is our top priority. We provide various safety features including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>User verification and background checks</li>
                  <li>Real-time GPS tracking during trips</li>
                  <li>Emergency SOS button</li>
                  <li>Trip sharing with emergency contacts</li>
                  <li>24/7 support team</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  However, you acknowledge that transportation services involve inherent risks. You use 
                  our Apps and services at your own risk. Links 592 is not liable for any incidents, 
                  accidents, or damages that occur during transportation services.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                10. Intellectual Property
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                All content, features, and functionality of the Apps, including but not limited to text, 
                graphics, logos, icons, images, and software, are owned by Links 592 or its licensors 
                and are protected by copyright, trademark, and other intellectual property laws. You may 
                not reproduce, distribute, modify, or create derivative works of any content without 
                our express written permission.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                11. Limitation of Liability
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>
                  Links 592 provides the Apps &quot;as is&quot; and &quot;as available&quot; without 
                  warranties of any kind, express or implied
                </li>
                <li>
                  We do not guarantee that the Apps will be uninterrupted, secure, or error-free
                </li>
                <li>
                  We are not liable for any indirect, incidental, special, consequential, or punitive 
                  damages arising from your use of the Apps
                </li>
                <li>
                  Our total liability for any claims related to the Apps shall not exceed the amount 
                  you paid us in the 12 months preceding the claim
                </li>
                <li>
                  We are not responsible for the conduct of drivers or riders, or for any incidents 
                  that occur during transportation services
                </li>
              </ul>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                12. Termination
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Termination by You
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    You may terminate your account at any time by contacting us or using the account 
                    deletion feature in the Apps.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Termination by Us
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We may suspend or terminate your account immediately if you violate these Terms, 
                    engage in fraudulent activity, or for any other reason we deem necessary to protect 
                    the safety and integrity of our platform.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Effect of Termination
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Upon termination, your right to use the Apps will immediately cease. We may delete 
                    your account and data in accordance with our Privacy Policy.
                  </p>
                </div>
              </div>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                13. Changes to Terms
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We reserve the right to modify these Terms at any time. We will notify you of material 
                changes by posting the updated Terms in the Apps or on our website and updating the 
                &quot;Last updated&quot; date. Your continued use of the Apps after such changes constitutes 
                your acceptance of the modified Terms.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                14. Governing Law
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                These Terms shall be governed by and construed in accordance with the laws of Guyana. 
                Any disputes arising from these Terms or your use of the Apps shall be subject to the 
                exclusive jurisdiction of the courts of Guyana.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                15. Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Email:</strong>{" "}
                    <a 
                      href="mailto:support@links592.gy" 
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      support@links592.gy
                    </a>
                  </li>
                  <li>
                    <strong>Website:</strong>{" "}
                    <a 
                      href="https://www.links592.gy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      www.links592.gy
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Links 592. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <Link 
                href="/" 
                className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                Home
              </Link>
              <span>•</span>
              <Link 
                href="/privacy" 
                className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <Link 
                href="/terms" 
                className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                Terms and Conditions
              </Link>
              <span>•</span>
              <Link 
                href="/delete-account" 
                className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                Delete Account
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
