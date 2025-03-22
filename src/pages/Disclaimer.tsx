
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";

const Disclaimer = () => {
  return (
    <MainLayout
      title="Disclaimer | NJoy Communications"
      description="Legal disclaimers and information for NJoy Communications internet services."
    >
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-blue-700 mb-8">Disclaimer</h1>
        
        <div className="prose prose-blue max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Website Disclaimer</h2>
          <p>
            The information provided by NJoy Communications on our website is for general informational 
            purposes only. All information on the site is provided in good faith, however we make no 
            representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, 
            validity, reliability, availability or completeness of any information on the site.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Service Availability</h2>
          <p>
            Service availability and speeds may vary by location and are subject to network conditions. 
            Stated speeds represent maximum possible speeds and are not guaranteed. Actual speeds may 
            vary based on factors including, but not limited to, customer location, device capabilities, 
            and network congestion.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">External Links Disclaimer</h2>
          <p>
            The Site may contain links to external websites that are not provided or maintained by or in 
            any way affiliated with NJoy Communications. Please note that NJoy Communications does not 
            guarantee the accuracy, relevance, timeliness, or completeness of any information on these 
            external websites.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Errors and Omissions Disclaimer</h2>
          <p>
            The information given by NJoy Communications is for general guidance on matters of interest. 
            Even though we have taken every precaution to ensure that the content is both current and 
            accurate, errors can occur. In addition, given the changing nature of laws, rules and 
            regulations, there may be delays, omissions or inaccuracies in the information contained.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Fair Use Disclaimer</h2>
          <p>
            NJoy Communications may use copyrighted material which has not always been specifically 
            authorized by the copyright owner. We are making such material available for criticism, 
            comment, news reporting, teaching, scholarship, or research. We believe this constitutes 
            a "fair use" of any such copyrighted material as provided for in section 107 of the United 
            States Copyright law.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Views Expressed Disclaimer</h2>
          <p>
            Any views and opinions that may be expressed in the Site are the views and opinions of the 
            author and do not necessarily reflect those of NJoy Communications.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Affiliate Links Disclaimer</h2>
          <p>
            The Site may contain affiliate links. If you purchase something through these links, we may 
            earn a commission. Thank you for supporting our business.
          </p>
          
          <p className="mt-8 text-sm text-gray-600">
            Last updated: August 1, 2023
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Disclaimer;
