
import React from "react";

const FooterCopyright = () => {
  return (
    <div className="border-t border-blue-700 mt-8 pt-6 text-center text-blue-300">
      <p>&copy; {new Date().getFullYear()} NJoy Communications Internet Services. All rights reserved.</p>
    </div>
  );
};

export default FooterCopyright;
