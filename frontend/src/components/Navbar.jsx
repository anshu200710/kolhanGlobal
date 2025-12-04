import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
      {/* Logo */}
      <a href="/" className="font-bold text-xl text-indigo-600 tracking-wide">
        KOLHAN GLOBAL
      </a>

      {/* Desktop Links */}
      <ul className="md:flex hidden items-center gap-10">
        <li><a className="hover:text-gray-500/80 transition" href="/">Home</a></li>
        <li><a className="hover:text-gray-500/80 transition" href="/services">Services</a></li>
        <li><a className="hover:text-gray-500/80 transition" href="/about">About</a></li>
        <li><a className="hover:text-gray-500/80 transition" href="/contact">Contact</a></li>
      </ul>

      {/* Desktop CTA */}
      <button
        type="button"
        className="bg-white text-gray-600 border border-gray-300 md:inline hidden text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
      >
        Get started
      </button>

      {/* Mobile Button */}
      <button
        aria-label="menu-btn"
        type="button"
        onClick={toggleMenu}
        className="menu-btn inline-block md:hidden active:scale-90 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#000">
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 md:hidden">
          <ul className="flex flex-col space-y-4 text-lg">
            <li><a href="/" onClick={handleLinkClick} className="text-sm">Home</a></li>
            <li><a href="/services" onClick={handleLinkClick} className="text-sm">Services</a></li>
            <li><a href="/about" onClick={handleLinkClick} className="text-sm">About</a></li>
            <li><a href="/contact" onClick={handleLinkClick} className="text-sm">Contact</a></li>
          </ul>

          <button
            type="button"
            className="bg-white text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
          >
            Get started
          </button>
        </div>
      )}
    </nav>
  );
}
