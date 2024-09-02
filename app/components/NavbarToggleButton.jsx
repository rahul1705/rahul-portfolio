'use client'; // Mark as a Client Component

import { useState } from 'react';
import { HiMenuAlt3, HiOutlineX } from 'react-icons/hi'; // Import updated icons from react-icons
import Link from 'next/link';

const NavbarToggleButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      {!isOpen && (
        <button
          className="md:hidden text-violet-500 text-3xl z-50 focus:outline-none transition-transform duration-300 ease-in-out"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation"
        >
          <HiMenuAlt3 className="animate-fadeIn" />
        </button>
      )}

      {/* Mobile Menu Cancel Button */}
      {isOpen && (
        <button
          className="md:hidden text-violet-500 text-3xl z-50 focus:outline-none absolute top-4 right-4 transition-transform duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
          aria-label="Close navigation"
        >
          <HiOutlineX className="animate-fadeIn" />
        </button>
      )}

      {/* Mobile Menu */}
      <ul
        className={`fixed inset-0 bg-gradient-to-r from-[#0f172a] to-[#1a1a2e] text-white flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } z-40`}
      >
        {['about', 'experience', 'skills', 'education', 'projects'].map((item) => (
          <li key={item} className="my-4">
            <Link
              href={`/${item === 'about' ? 'about' : `#${item}`}`}
              className="text-base hover:text-violet-500 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavbarToggleButton;
