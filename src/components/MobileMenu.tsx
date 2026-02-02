import { useState } from 'react';
import { Link } from 'react-router-dom';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-5 right-4 z-[100] p-2.5 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`block h-0.5 w-full bg-[#0b1c38] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
          />
          <span
            className={`block h-0.5 w-full bg-[#0b1c38] transition-all duration-300 ${isOpen ? 'opacity-0' : ''
              }`}
          />
          <span
            className={`block h-0.5 w-full bg-[#0b1c38] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-[90] animate-fadeIn"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-[95] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <nav className="flex flex-col gap-6 p-8 pt-24">
          <a
            href="#programs"
            className="text-[#0b1c38] font-['Poppins',sans-serif] font-medium text-[16px] hover:text-[#5865f2] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Our Programs
          </a>
          <a
            href="#how-it-works"
            className="text-[#0b1c38] font-['Poppins',sans-serif] font-medium text-[16px] hover:text-[#5865f2] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </a>
          <a
            href="#results"
            className="text-[#0b1c38] font-['Poppins',sans-serif] font-medium text-[16px] hover:text-[#5865f2] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Results
          </a>
          <Link
            to="/about"
            className="text-[#0b1c38] font-['Poppins',sans-serif] font-medium text-[16px] hover:text-[#5865f2] transition-colors no-underline"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <div className="border-t border-gray-200 pt-6 mt-2">
            <a
              href="#login"
              className="block text-[#0b1c38] font-['Poppins',sans-serif] font-medium text-[16px] hover:text-[#5865f2] transition-colors mb-4"
              onClick={() => setIsOpen(false)}
            >
              Client Login
            </a>
            <button
              className="w-full bg-gradient-to-r from-[#ee5f43] to-[#f28259] text-white font-['Poppins',sans-serif] font-semibold text-[16px] px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
