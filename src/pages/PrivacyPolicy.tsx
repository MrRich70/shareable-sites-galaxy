import React from "react";
import MainLayout from "@/components/layouts/MainLayout";

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-900">Privacy Policy</h1>
        
        <div className="prose prose-lg mx-auto">
          <p className="text-gray-700 mb-6">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-900">Introduction</h2>
          <p className="mb-4">
            NJoy Communications Internet Services ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our internet services, website, or mobile applications.
          </p>
          <p className="mb-4">
            Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access our services.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-900">Information We Collect</h2>
          <p className="mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Personal Information: Name, email address, phone number, billing address, payment information, and other similar contact data.</li>
            <li>Account Information: Username, password, account preferences, and similar security information used for authentication and account access.</li>
            <li>Technical Information: IP address, device identifiers, browser type, operating system, and information about your use of our services.</li>
            <li>Usage Data: Information about your internet usage, including websites visited, bandwidth consumption, time and duration of internet sessions.</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-900">How We Use Your Information</h2>
          <p className="mb-4">We may use the information we collect for various purposes, including to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide, maintain, and improve our services.</li>
            <li>Process payments and billing.</li>
            <li>Communicate with you, including for customer service, updates, and marketing.</li>
            <li>Monitor and analyze usage patterns and trends.</li>
            <li>Enhance the security of our services and prevent fraud.</li>
            <li>Comply with legal and regulatory requirements.</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-900">Disclosure of Your Information</h2>
          <p className="mb-4">We may share your information in the following circumstances:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>With service providers who perform services on our behalf.</li>
            <li>With business partners with whom we jointly offer products or services.</li>
            <li>When required by law or to protect our rights or the rights of others.</li>
            <li>In connection with a business transaction, such as a merger, sale of assets, or acquisition.</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-900">Your Choices</h2>
          <p className="mb-4">
            You can review, update, or delete your account information by logging into your account. You may also opt-out of receiving marketing communications from us by following the unsubscribe instructions included in our emails.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-900">Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-900">Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-blue-900">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at (217) 330-6157.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;
