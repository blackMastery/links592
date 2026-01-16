import Link from "next/link";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Links 592 (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, share, and protect your information when you use 
                our Links 592 Driver and Links 592 Rider mobile applications (the &quot;Apps&quot;).
              </p>
            </section>

            {/* What's Collected */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Information We Collect
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Personal Information
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li>Name, phone number, email address</li>
                    <li>Profile photo (optional)</li>
                    <li>Government ID (drivers only - for verification purposes)</li>
                    <li>Vehicle documents (drivers only)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Location Data
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li>Real-time GPS location (only during active trips)</li>
                    <li>Pickup and destination addresses</li>
                    <li>Trip route history</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Usage Data
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li>Trip history and frequency</li>
                    <li>App interactions and preferences</li>
                    <li>Device information (model, OS version)</li>
                    <li>Crash reports and performance data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Payment Data
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li>Subscription payment records</li>
                    <li>Transaction history</li>
                    <li>Payment method information (processed securely through third-party payment processors)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Communications
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                    <li>In-app messages with drivers/riders</li>
                    <li>Support conversations</li>
                    <li>Push notification preferences</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How Data is Used */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Match riders with nearby drivers</li>
                <li>Provide navigation and routing services</li>
                <li>Process subscription payments</li>
                <li>Monitor safety and security</li>
                <li>Provide customer support</li>
                <li>Improve our platform and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                How We Share Your Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>
                  <strong>For Trip Coordination:</strong> Driver and rider details are shared with each other 
                  to facilitate trip coordination and communication
                </li>
                <li>
                  <strong>Emergency Situations:</strong> When the SOS button is activated, we may notify 
                  emergency contacts and share location data with emergency services
                </li>
                <li>
                  <strong>Payment Processors:</strong> We share payment information with secure third-party 
                  payment processors to handle subscription transactions
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose information when required by law, 
                  court order, or government regulation
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4 font-semibold">
                We never sell your personal information to third parties.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Data Retention
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Active account data is retained while your account is active</li>
                <li>Trip history is kept for 2 years for record-keeping and safety purposes</li>
                <li>Location data is deleted after 90 days, except for safety records which may be retained longer</li>
                <li>You can request deletion of your data at any time by contacting us at support@links592.gy</li>
              </ul>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Your Rights
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>
                  Request deletion of your data -{" "}
                  <Link 
                    href="/delete-account" 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    learn more about account deletion
                  </Link>
                </li>
                <li>Opt-out of certain data collection practices</li>
                <li>Export your data</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                To exercise these rights, please contact us at{" "}
                <a 
                  href="mailto:support@links592.gy" 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  support@links592.gy
                </a>
                {" "}or visit our{" "}
                <Link 
                  href="/delete-account" 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  account deletion page
                </Link>
                {" "}to request account deletion.
              </p>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Security
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mt-4">
                <li>Encryption of data in transit using HTTPS/TLS</li>
                <li>Secure storage of sensitive information</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication</li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Children&apos;s Privacy
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Our Apps are not intended for users under the age of 17. We do not knowingly collect 
                personal information from children. If you believe we have collected information from 
                a child, please contact us immediately.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any material 
                changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. 
                We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
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
