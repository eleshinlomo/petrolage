import React from "react";

const CookiePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-black p-6">
          <h1 className="text-3xl font-bold text-white">Cookie Policy</h1>
          <div className="flex justify-between mt-2 text-blue-100">
          <p><strong>Effective Date:</strong> November 2, 2015</p>
          <p><strong>Last Updated:</strong> January 10, 2025</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-600">
              This Cookie Policy explains how <strong>Petrolage</strong> uses cookies and similar tracking technologies on our website and services (staffing, tours, and e-commerce). By using our site, you consent to our use of cookies as described below.
            </p>
          </section>

          {/* What Are Cookies? */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. What Are Cookies?</h2>
            <p className="text-gray-600">
              Cookies are small text files stored on your device when you visit a website. They help us enhance your experience, analyze site traffic, and personalize content.
            </p>
          </section>

          {/* Types of Cookies We Use */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">A. Essential Cookies</h3>
                <p className="text-gray-600 ml-2">
                  Necessary for website functionality (e.g., login sessions, shopping cart). These cannot be disabled.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">B. Analytics Cookies</h3>
                <p className="text-gray-600 ml-2">
                  Collect anonymous data to improve performance (e.g., Google Analytics).
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">C. Marketing Cookies</h3>
                <p className="text-gray-600 ml-2">
                  Track user behavior for targeted ads (e.g., Facebook Pixel).
                </p>
              </div>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-600">
              Partners (e.g., payment processors, advertisers) may also place cookies. We do not control these cookies—review their policies for details.
            </p>
          </section>

          {/* Cookie Consent */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cookie Consent</h2>
            <p className="text-gray-600">
              When you first visit Petrolage, a banner will prompt you to accept or customize cookie preferences. You can change settings later via your browser.
            </p>
          </section>

          {/* Managing Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Managing Cookies</h2>
            <p className="text-gray-600 mb-2">
              To disable or delete cookies:
            </p>
            <ul className="list-disc ml-6 text-gray-600 space-y-1">
              <li>
                <strong>Browser Settings:</strong> Adjust preferences in Chrome, Firefox, Safari, etc. 
                <span className="text-sm text-gray-500 block mt-1">
                  (Note: Disabling cookies may break some site features.)
                </span>
              </li>
              <li>
                <strong>Opt-Out Tools:</strong> Use platforms like the 
                <a 
                  href="https://optout.aboutads.info/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mx-1"
                >
                  Digital Advertising Alliance
                </a> 
                for ad cookies.
              </li>
            </ul>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Cookie Policy. Continued use of Petrolage after changes implies acceptance.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Us</h2>
            <p className="text-gray-600">
              For questions about cookies, contact us at:
            </p>
            <div className="bg-gray-50 p-4 mt-3 rounded-md">
            <p className="text-gray-600">support@petrolagegroup.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;