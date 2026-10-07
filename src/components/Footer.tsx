import React from 'react';

interface FooterProps {
  onOpenLegalModal?: (docTitle: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalModal }) => {
  return (
    <footer className="border-t border-[#EFEFEF] bg-[#FFFFFF] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-neutral-400">
          <div className="space-y-1">
            <p className="font-semibold text-[#111111]">
              Godwin Richard · Architectural Bureau & Educational Platform
            </p>
            <p>
              © {new Date().getFullYear()} Godwin Richard. All rights reserved. Copying materials without
              written permission is prohibited.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <button
              type="button"
              onClick={() => onOpenLegalModal?.('Privacy Policy')}
              className="hover:text-[#111111] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenLegalModal?.('Public Offer Agreement')}
              className="hover:text-[#111111] transition-colors cursor-pointer"
            >
              Public Offer Agreement
            </button>
            <a
              href="#admissions-support"
              className="hover:text-[#111111] transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
