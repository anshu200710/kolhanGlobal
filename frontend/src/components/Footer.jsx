import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Branding */}
        <div className="flex flex-col space-y-4">
          <a href="#">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/prebuiltuiDummyLogo.svg"
              alt="Company Logo"
              className="h-10"
            />
          </a>
          <p className="text-sm text-slate-400">
            Leading logistics solutions that connect businesses worldwide.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-white transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-white font-semibold">Quick Links</h3>
          <a href="#" className="text-sm hover:text-white transition">
            Services
          </a>
          <a href="#" className="text-sm hover:text-white transition">
            Industries
          </a>
          <a href="#" className="text-sm hover:text-white transition">
            Tracking
          </a>
          <a href="#" className="text-sm hover:text-white transition">
            Contact
          </a>
        </div>

        {/* Contact */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-white font-semibold">Contact Us</h3>
          <p className="text-sm text-slate-400">
            123 Logistics Ave, Suite 100<br />
            New York, NY 10001
          </p>
          <p className="text-sm text-slate-400">Email: info@logistics.com</p>
          <p className="text-sm text-slate-400">Phone: +1 (123) 456-7890</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Your Logistics Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
