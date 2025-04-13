import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-black p-6">
          <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
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
              Welcome to <strong>Petrolage</strong>! These Terms of Service govern your use of our staffing, tour, and e-commerce services.
               By accessing or using our services, you agree to comply with these Terms. 
              If you do not agree, please refrain from using Petrolage.
            </p>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Services Offered</h2>
            <p className="text-gray-600 mb-2">
              Petrolage provides:
            </p>
            <ul className="list-disc ml-6 text-gray-600 space-y-1">
              <li><strong>Staffing Solutions:</strong> Recruitment, temporary staffing, and HR services.</li>
              <li><strong>Tour Services:</strong> Travel bookings, guided tours, and related activities.</li>
              <li><strong>E-Commerce Store:</strong> Online shopping for products related to our services.</li>
            </ul>
          </section>

          {/* User Obligations */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-600">
              When using Petrolage, you agree to:
            </p>
            <ul className="list-disc ml-6 text-gray-600 space-y-1 mt-2">
              <li>Provide accurate and current information.</li>
              <li>Not misuse our services for illegal or fraudulent activities.</li>
              <li>Comply with all applicable laws and regulations.</li>
              <li>Not attempt to disrupt our website or services.</li>
            </ul>
          </section>

          {/* Payments & Refunds */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Payments & Refunds</h2>
            <p className="text-gray-600 mb-2">
              For e-commerce and tour bookings:
            </p>
            <ul className="list-disc ml-6 text-gray-600 space-y-1">
              <li>All payments are processed securely via trusted gateways.</li>
              <li>Refunds are subject to our <strong>Refund Policy</strong> available on request.</li>
              <li>Chargebacks or disputes must be reported within 14 days.</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-600">
              All content, logos, and trademarks on Petrolage&apos;s platforms are owned by us. You may not reproduce, distribute, 
              or modify any materials without written permission.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600">
              Petrolage is not liable for:
            </p>
            <ul className="list-disc ml-6 text-gray-600 space-y-1 mt-2">
              <li>Any indirect, incidental, or consequential damages.</li>
              <li>Issues arising from third-party services e.g., payment processors.</li>
              <li>User misconduct or unauthorized account access.</li>
            </ul>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Termination</h2>
            <p className="text-gray-600">
              We reserve the right to suspend or terminate your access to Petrolage at any time for violations of these Terms, without prior notice.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Governing Law</h2>
            <p className="text-gray-600">
              These Terms are governed by the laws of Federal Republic of Nigeria. Any disputes will be resolved in the courts of Nigeria.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-600">
              We may update these Terms periodically. Continued use of Petrolage after changes constitutes acceptance.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Us</h2>
            <p className="text-gray-600">
              For questions about these Terms, contact us at:
            </p>
            <div className="bg-gray-50 p-4 mt-3 rounded-md">
              <p className="font-medium text-gray-800">support@petrolagegroup.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;