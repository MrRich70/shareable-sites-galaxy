
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";

const Terms = () => {
  return (
    <MainLayout
      title="Terms of Service | NJoy Communications"
      description="Terms of service and legal information for NJoy Communications internet service."
    >
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-blue-700 mb-8">Terms of Service</h1>
        
        <div className="prose prose-blue max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to NJoy Communications. By using our services, you agree to these Terms of Service. 
            Please read them carefully. Our services are diverse, so sometimes additional terms or 
            requirements may apply.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Using Our Services</h2>
          <p>
            You must follow any policies made available to you within the Services. You may use our 
            Services only as permitted by law. We may suspend or stop providing our Services to you 
            if you do not comply with our terms or policies or if we are investigating suspected misconduct.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Service Availability</h2>
          <p>
            NJoy Communications strives to maintain 99.9% uptime for all services. However, we do not 
            guarantee uninterrupted service. Occasional outages may occur due to maintenance, upgrades, 
            or factors beyond our control.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Customer Responsibilities</h2>
          <p>
            Customers are responsible for maintaining the security of their account credentials and for 
            all activities that occur under their account. Customers must notify NJoy Communications 
            immediately of any unauthorized use of their account.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Acceptable Use Policy</h2>
          <p>
            Customers agree to use NJoy Communications services only for lawful purposes and in accordance 
            with these Terms. Prohibited activities include, but are not limited to, sending spam, 
            distributing malware, attempting to breach network security, and engaging in any activity 
            that interferes with others' use of the service.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Privacy Policy</h2>
          <p>
            NJoy Communications' privacy practices are explained in our Privacy Policy. By using our 
            services, you agree that we can use such data in accordance with our privacy policies.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Modifications to the Service</h2>
          <p>
            NJoy Communications reserves the right to modify, suspend, or discontinue any part of the 
            Service at any time, with or without notice to you.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to the Terms</h2>
          <p>
            NJoy Communications may modify these Terms from time to time. We will post any modified 
            terms on our website and, if the changes are significant, we will provide a more prominent 
            notice.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
            <br />
            NJoy Communications
            <br />
            Phone: (217) 677-1419
            <br />
            Email: info@njoycom.com
          </p>
          
          <p className="mt-8 text-sm text-gray-600">
            Last updated: August 1, 2023
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Terms;
