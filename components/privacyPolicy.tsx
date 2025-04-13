import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-black p-6">
          <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
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
              Welcome to Petrolage! At Petrolage, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you interact with our services, including staffing solutions, tour services, and our e-commerce store.
            </p>
            <p className="text-gray-600 mt-2">
              By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with our practices, please refrain from using our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We may collect the following types of information:
            </p>

            <div className="ml-4 space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">A. Personal Information</h3>
                <ul className="list-disc ml-6 text-gray-600 space-y-1 mt-2">
                  <li>Name, email, phone number, and address (for staffing, tours, and e-commerce orders)</li>
                  <li>Payment details (for e-commerce transactions)</li>
                  <li>Resume, employment history, and qualifications (for staffing services)</li>
                  <li>Passport/ID details (for tour bookings, if required)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700">B. Non-Personal Information</h3>
                <ul className="list-disc ml-6 text-gray-600 space-y-1 mt-2">
                  <li>Browser type, IP address, and device information</li>
                  <li>Cookies and tracking data (to enhance user experience)</li>
                  <li>Website usage analytics</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700">C. Information from Third Parties</h3>
                <p className="text-gray-600 ml-2">
                  We may receive data from partners, payment processors, or background check providers (for staffing services).
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600">
              We use your information for the following purposes:
            </p>
            <ul className="list-disc ml-6 text-gray-600 space-y-1 mt-2">
              <li>To provide and improve our services (staffing, tours, e-commerce)</li>
              <li>To process transactions and fulfill orders</li>
              <li>To communicate with you (customer support, updates, promotions)</li>
              <li>To verify identity and conduct background checks (for staffing)</li>
              <li>To comply with legal and regulatory requirements</li>
            </ul>
          </section>

          {/* How We Share Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. How We Share Your Information</h2>
            <p className="text-gray-600">
              We may share your data with:
            </p>
            <ul className="list-disc ml-6 text-gray-600 space-y-1 mt-2">
              <li><strong>Service providers</strong> (payment processors, HR partners, tour operators)</li>
              <li><strong>Legal authorities</strong> (if required by law)</li>
              <li><strong>Business partners</strong> (only with your consent)</li>
            </ul>
            <p className="text-gray-600 mt-2">
              We do not sell your personal information to third parties.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Security</h2>
            <p className="text-gray-600">
              We implement industry-standard security measures, including encryption and secure servers, to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Your Rights & Choices */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights & Choices</h2>
            <p className="text-gray-600">
              You have the right to:
            </p>
            <ul className="list-disc ml-6 text-gray-600 space-y-1 mt-2">
              <li>Access, update, or delete your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Disable cookies in your browser settings</li>
            </ul>
            <p className="text-gray-600 mt-2">
              To exercise these rights, contact us at support@petrolagegroup.com.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Third-Party Links</h2>
            <p className="text-gray-600">
              Our website may contain links to third-party sites. We are not responsible for their privacy practices, so we encourage you to review their policies.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy periodically. The revised version will be posted on our website with the updated effective date.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 mt-3 rounded-md">
              <p className="text-gray-600">support@petrolagegroup.com</p>
            </div>
            <p className="text-gray-600 mt-4">
              Thank you for trusting Petrolage with your personal information.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;