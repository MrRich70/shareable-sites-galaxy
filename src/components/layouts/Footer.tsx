
import React from "react";
import FooterCompanyInfo from "./FooterCompanyInfo";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterLegalLinks from "./FooterLegalLinks";
import FooterLocationLinks from "./FooterLocationLinks";
import FooterAddress from "./FooterAddress";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-800 to-blue-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <FooterCompanyInfo />
          <FooterQuickLinks />
          <FooterLegalLinks />
          <FooterLocationLinks />
          <FooterAddress />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
