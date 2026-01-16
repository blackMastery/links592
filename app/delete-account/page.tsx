import Link from "next/link";

export default function DeleteAccount() {
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
            Request Account Deletion
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You have the right to request deletion of your Links 592 account and associated personal data. 
                This page explains how to submit a deletion request and what to expect during the process.
              </p>
            </section>

            {/* What Gets Deleted */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                What Will Be Deleted
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                When you request account deletion, we will permanently delete the following information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Your account profile and personal information (name, email, phone number)</li>
                <li>Profile photos and uploaded documents</li>
                <li>Account settings and preferences</li>
                <li>In-app messages and communications</li>
                <li>Saved locations and favorites</li>
                <li>Payment method information stored on our platform</li>
              </ul>
            </section>

            {/* What May Be Retained */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Information That May Be Retained
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                For legal, safety, and record-keeping purposes, some information may be retained for a limited period:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>
                  <strong>Trip History:</strong> Trip records may be retained for up to 2 years for safety 
                  and legal compliance purposes
                </li>
                <li>
                  <strong>Location Data:</strong> Location data may be retained for up to 90 days, except for 
                  safety records which may be retained longer
                </li>
                <li>
                  <strong>Financial Records:</strong> Payment and transaction records may be retained as required 
                  by law for tax and accounting purposes
                </li>
                <li>
                  <strong>Safety Incidents:</strong> Records related to safety incidents, complaints, or violations 
                  may be retained for safety and legal purposes
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                For more details about our data retention practices, please see our{" "}
                <Link 
                  href="/privacy" 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            {/* Important Warnings */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Important Information
              </h2>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-500 p-4 mb-4">
                <p className="text-gray-800 dark:text-gray-200 font-semibold mb-2">
                  ⚠️ Account deletion is permanent and cannot be undone.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>You will lose access to all your account data and trip history</li>
                  <li>You will need to create a new account if you want to use Links 592 again in the future</li>
                  <li>Any active subscriptions will be cancelled</li>
                  <li>You will not be able to recover deleted information</li>
                </ul>
              </div>
            </section>

            {/* How to Request */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                How to Request Account Deletion
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                To request deletion of your account and associated data, please contact us using one of the following methods:
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Option 1: Email Us
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Send an email to our support team with the subject line "Account Deletion Request" and include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-4">
                  <li>Your full name</li>
                  <li>The email address associated with your account</li>
                  <li>The phone number associated with your account</li>
                  <li>A clear statement that you want to delete your account</li>
                </ul>
                <a 
                  href="mailto:support@links592.gy?subject=Account%20Deletion%20Request" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-semibold"
                >
                  Send Deletion Request Email
                </a>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Option 2: Contact Information
                </h3>
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

            {/* Processing Time */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Processing Time
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Once we receive your deletion request, we will:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mt-4">
                <li>Verify your identity to ensure the request is legitimate</li>
                <li>Process your deletion request within 30 days</li>
                <li>Send you a confirmation email once your account has been deleted</li>
              </ol>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                If we need additional information to verify your identity, we will contact you using the 
                email address associated with your account.
              </p>
            </section>

            {/* Alternative Options */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Alternative Options
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Before requesting complete account deletion, you may want to consider:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>
                  <strong>Deactivating your account:</strong> Temporarily disable your account without 
                  permanent deletion. Contact support to learn more about this option.
                </li>
                <li>
                  <strong>Updating your information:</strong> If you only want to change or remove specific 
                  information, you can update your profile in the app settings.
                </li>
                <li>
                  <strong>Unsubscribing:</strong> Cancel your subscription to stop receiving trip requests 
                  or being matched with drivers/riders, while keeping your account active.
                </li>
              </ul>
            </section>

            {/* Questions */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Questions?
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions about account deletion or your data rights, please review our{" "}
                <Link 
                  href="/privacy" 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Privacy Policy
                </Link>
                {" "}or contact us at{" "}
                <a 
                  href="mailto:support@links592.gy" 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  support@links592.gy
                </a>
                .
              </p>
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
