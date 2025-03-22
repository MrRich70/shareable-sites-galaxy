
import React from "react";

const ArgentaBannerSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Serving the Community of Argenta, Illinois
          </h2>
          <div className="max-w-3xl w-full rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <img
              src="/lovable-uploads/0f692be6-2332-4582-ac1e-0526b20a350a.png"
              alt="Argenta, Illinois Banner"
              className="w-full h-auto"
            />
          </div>
          <p className="mt-6 text-lg text-gray-700 text-center max-w-2xl">
            Bringing fast, reliable internet service to Argenta and surrounding communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArgentaBannerSection;
