import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Link href={"/"} className="text-white font-semibold flex items-center">
  <div className="flex items-end">
    <span className="text-2xl md:text-5xl leading-none">N</span>
    <span className="text-lg md:text-xl ml-0.0005">ikhitha</span>
  </div>
  <span className="mx-2"></span> {/* Space between names */}
  <div className="flex items-end">
    <span className="text-2xl md:text-5xl leading-none">M</span>
    <span className="text-lg md:text-xl ml-0.0005">anne</span>
  </div>
</Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
