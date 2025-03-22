
import React from "react";
import { Link } from "react-router-dom";

const FooterCopyright = () => {
  return (
    <div className="border-t border-blue-700 mt-8 pt-6 text-center text-blue-300">
      <p>&copy; {new Date().getFullYear()} NJoy Communications Internet Services. All rights reserved.</p>
      <div className="mt-3 space-x-4 text-sm">
        <Link to="/privacy" className="text-blue-200 hover:text-white">Privacy</Link>
        <span className="text-blue-700">|</span>
        <Link to="/terms" className="text-blue-200 hover:text-white">Terms</Link>
        <span className="text-blue-700">|</span>
        <Link to="/sitemap.xml" className="text-blue-200 hover:text-white">Sitemap</Link>
      </div>
      <p className="mt-3 text-xs text-blue-400">
        Serving Central Illinois: Argenta, Bement, Cerro Gordo, Dalton City, Elwin, 
        La Place, Lake City, Macon, Milmine, Mt. Zion, Oakley, Oreana and surrounding areas.
      </p>
    </div>
  );
};

export default FooterCopyright;
