import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-yellow-400 dark:bg-yellow-500 text-yellow-900 dark:text-yellow-950 font-semibold text-sm sm:text-base shadow-lg animate-pulse">
            <span className="mr-2">🚀</span>
            Coming Soon
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Links 592
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-4 font-semibold">
            Georgetown&apos;s Trusted Transportation Platform
          </p>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Connect professional drivers with riders. Zero commissions. Unlimited trips. 
            Professional service you can trust.
          </p>
        </div>
      </section>

      {/* Driver App Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Links 592 Driver
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Your Path to Professional Driving
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Why Drivers Choose */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Why Drivers Choose Links 592
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Zero Commissions</strong> - Keep 100% of what riders pay you
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Flexible Schedule</strong> - Work when you want, where you want
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Professional Tools</strong> - GPS navigation, trip tracking, digital records
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Verified Riders</strong> - All riders are verified for your safety
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Direct Communication</strong> - Chat and call riders securely
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Earnings Transparency</strong> - Track all your trips and income
                  </span>
                </li>
              </ul>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Key Features
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Trip Management</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                    <li>• Accept or decline trip requests with one tap</li>
                    <li>• View rider location and destination before accepting</li>
                    <li>• Real-time GPS navigation to pickup and destination</li>
                    <li>• Automatic trip history and digital receipts</li>
                    <li>• Rate riders after each trip</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Earnings & Payments</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                    <li>• Riders pay you directly - no platform commissions</li>
                    <li>• Track daily, weekly, and monthly earnings</li>
                    <li>• Digital payment options supported</li>
                    <li>• Export trip reports for your records</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Professional Profile</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                    <li>• Complete KYC verification for rider trust</li>
                    <li>• Display your ratings and completed trips</li>
                    <li>• Upload vehicle photos and documents</li>
                    <li>• Build your professional reputation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Safety Features</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                    <li>• Emergency assistance button</li>
                    <li>• Trip recording and location tracking</li>
                    <li>• Verified rider profiles</li>
                    <li>• 24/7 support team</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
              Requirements
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300">
                Valid Guyana driver&apos;s license
              </span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300">
                Registered vehicle with insurance
              </span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300">
                Smartphone with GPS
              </span>
              <span className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300">
                Professional driving record
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-800"></div>

      {/* Rider App Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Links 592 Rider
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Your Georgetown Transportation Solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Why Riders Choose */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Why Riders Choose Links 592
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Unlimited Trips</strong> - Fixed monthly price, no per-trip charges
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Verified Drivers</strong> - All drivers are KYC verified and rated
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>3-Day Free Trial</strong> - Test the service risk-free
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Real-Time Tracking</strong> - Know exactly where your driver is
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Safety First</strong> - Emergency features and trip sharing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Professional Service</strong> - Quality drivers and vehicles
                  </span>
                </li>
              </ul>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Key Features
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Easy Booking</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                    <li>• Request rides with just a few taps</li>
                    <li>• See nearby available drivers instantly</li>
                    <li>• Choose your pickup and destination on the map</li>
                    <li>• Save favorite locations (Home, Work, etc.)</li>
                    <li>• Schedule trips in advance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Safety & Security</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                    <li>• View driver profiles, ratings, and vehicle details</li>
                    <li>• Real-time GPS tracking during trips</li>
                    <li>• Share trip details with emergency contacts</li>
                    <li>• In-app SOS button for emergencies</li>
                    <li>• Rate drivers after each trip</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Transparent & Affordable</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                    <li>• No surge pricing or hidden fees</li>
                    <li>• Negotiate trip cost directly with your driver</li>
                    <li>• Multiple payment methods accepted</li>
                    <li>• Digital receipts for all trips</li>
                    <li>• Trip history always available</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Night Mode</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                    <li>• Special features for late-night trips (6 PM - 6 AM)</li>
                    <li>• Extra safety measures for night travel</li>
                    <li>• Automatic night mode detection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Trip Types & Payment Options */}
          <div className="mt-8 grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Trip Types
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm">
                  Airport Transfers
                </span>
                <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm">
                  Short Trips (City)
                </span>
                <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm">
                  Market Runs
                </span>
                <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm">
                  Custom Destinations
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Payment Options
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm">
                  MMG Mobile Money
                </span>
                <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm">
                  Cash (with driver)
                </span>
                <span className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm">
                  Direct bank payment
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Trust Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Safety & Trust
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Your safety and security are our top priorities. We&apos;ve built comprehensive safety features 
              into every aspect of the Links 592 platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Verified Users
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                All drivers and riders undergo KYC verification for your peace of mind.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Real-Time Tracking
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                GPS tracking and trip sharing keep you connected and safe throughout your journey.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Emergency Support
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                In-app SOS button and 24/7 support team ready to assist when you need help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Links 592</h3>
              <p className="text-gray-400 text-sm">
                Georgetown&apos;s trusted transportation platform connecting professional 
                drivers with riders.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:support@links592.gy" className="hover:text-white transition-colors">
                    support@links592.gy
                  </a>
                </li>
                <li>
                  <a href="https://www.links592.gy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    www.links592.gy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/delete-account" className="hover:text-white transition-colors">
                    Delete Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Links 592. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
