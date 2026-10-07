import React, { useState } from 'react';
import { ArrowDownRight, Menu, X } from 'lucide-react';
import { INSTRUCTOR_PROFILE } from '../data/courses';

interface NavbarProps {
  onExploreCatalog?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onExploreCatalog }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Courses', href: '#catalog' },
    { label: 'About', href: '#author-bio' },
    { label: 'Advantages', href: '#training-advantages' },
    { label: 'Contact', href: '#admissions-support' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFFFFF] border-b border-[#EFEFEF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Left: GW Monogram Logo + Brand Name */}
        <a
          href="#"
          className="inline-flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111111] shrink-0"
        >
          <span className="w-9 h-9 rounded-lg bg-[#111111] text-[#FFFFFF] font-editorial text-xs font-semibold tracking-wider flex items-center justify-center shadow-xs group-hover:bg-neutral-800 transition-colors">
            GW
          </span>
          <div className="leading-tight">
            <span className="block text-sm font-semibold text-[#111111] tracking-tight">
              Godwin Richard
            </span>
            <span className="block text-[10px] uppercase tracking-[0.12em] text-neutral-400">
              Architecture & Design
            </span>
          </div>
        </a>

        {/* Center: Primary Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-[0.08em] text-neutral-600"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#111111] transition-colors duration-150 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Direct Catalog Access Button + Instructor Avatar */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="#catalog"
            onClick={(e) => {
              if (onExploreCatalog) {
                e.preventDefault();
                onExploreCatalog();
              }
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#FFFFFF] bg-[#111111] hover:bg-neutral-800 rounded-lg shadow-xs transition-colors duration-150 whitespace-nowrap cursor-pointer"
          >
            <span>Browse Courses</span>
            <ArrowDownRight className="w-3.5 h-3.5 text-neutral-300" />
          </a>

          <a
            href="#author-bio"
            aria-label="About Godwin Richard"
            className="w-9 h-9 rounded-full overflow-hidden border border-neutral-200 hover:border-[#111111] transition-colors shrink-0"
          >
            <img
              src={INSTRUCTOR_PROFILE.portraitUrl}
              alt="Godwin Richard"
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile navigation"
            className="md:hidden w-9 h-9 rounded-lg border border-neutral-200 flex items-center justify-center text-[#111111] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-100 bg-[#FFFFFF] px-4 py-3">
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-wider text-neutral-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#111111]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
