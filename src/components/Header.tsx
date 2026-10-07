import React from 'react';
import { ArrowDown, Award } from 'lucide-react';
import { INSTRUCTOR_PROFILE } from '../data/courses';

interface HeaderProps {
  onExploreCatalog: () => void;
  onOpenAboutAuthor: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onExploreCatalog,
  onOpenAboutAuthor,
}) => {
  return (
    <section id="author-bio" className="pt-6 pb-10 md:pt-10 md:pb-14 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Hero Container inside Soft Off-White Card */}
        <div className="bg-[#F9F9FB] border border-[#EFEFEF] rounded-3xl p-5 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Portrait Image Framed in Rounded Card with Overlay Badge */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/4.3] w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden bg-neutral-200 shadow-sm">
                <img
                  src={INSTRUCTOR_PROFILE.portraitUrl}
                  alt={INSTRUCTOR_PROFILE.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />

                {/* Subtle Floating Pill Badge Overlaid at Bottom Corner */}
                <div className="absolute bottom-4 right-4 left-4 sm:left-auto bg-[#FFFFFF]/95 backdrop-blur-xs px-3.5 py-2 rounded-full shadow-sm border border-neutral-100 inline-flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#111111] whitespace-nowrap">
                    {INSTRUCTOR_PROFILE.badgeText}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Eyebrow, Serif Heading, Bio Card, Credential Pills & 2 CTAs */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-400">
                  {INSTRUCTOR_PROFILE.eyebrow}
                </p>
                <h1 className="mt-1.5 font-editorial text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#111111] leading-tight">
                  {INSTRUCTOR_PROFILE.name}
                </h1>
                <div className="mt-3 w-8 h-0.5 bg-[#C5A070] rounded-full" />
              </div>

              {/* Clean White Inner Bio Card */}
              <div className="bg-[#FFFFFF] border border-[#EFEFEF] rounded-2xl p-5 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                <p className="text-sm sm:text-[15px] text-neutral-600 leading-relaxed">
                  {INSTRUCTOR_PROFILE.bio}
                </p>
              </div>

              {/* Social Proof / Credentials Tags */}
              <div className="flex flex-wrap items-center gap-2.5">
                {INSTRUCTOR_PROFILE.credentials.map((cred) => (
                  <span
                    key={cred.label}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors whitespace-nowrap ${
                      cred.highlighted
                        ? 'bg-[#111111] text-[#FFFFFF]'
                        : 'bg-[#FFFFFF] text-neutral-700 border border-neutral-200/80'
                    }`}
                  >
                    {cred.label}
                  </span>
                ))}
              </div>

              {/* Two CTA Buttons: One Solid Black Primary, One Outline Secondary */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={onExploreCatalog}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#FFFFFF] bg-[#111111] hover:bg-neutral-800 rounded-xl transition-colors duration-150 whitespace-nowrap cursor-pointer"
                >
                  <span>Choose Program</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={onOpenAboutAuthor}
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#111111] bg-[#FFFFFF] hover:bg-neutral-50 border border-neutral-200 rounded-xl transition-colors duration-150 whitespace-nowrap cursor-pointer"
                >
                  <Award className="w-3.5 h-3.5 text-[#C5A070]" />
                  <span>About Instructor</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
