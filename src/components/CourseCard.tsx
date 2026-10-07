import React, { useState } from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { CourseProgram, CurrencyCode } from '../types/course';
import { formatCoursePrice } from '../data/courses';

interface CourseCardProps {
  course: CourseProgram;
  currency?: CurrencyCode;
  onOpenDetails: (course: CourseProgram) => void;
  onWatchPreview?: (course: CourseProgram) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  currency = CurrencyCode.USD,
  onOpenDetails,
}) => {
  const [imageError, setImageError] = useState(false);

  const formattedPrice = course.customPriceLabel
    ? course.customPriceLabel
    : `${course.pricePrefix ? `${course.pricePrefix} ` : ''}${formatCoursePrice(
        course.priceUSD,
        currency
      )}`;

  return (
    <article className="group h-full bg-[#F9F9FB] hover:bg-[#FFFFFF] border border-[#EFEFEF] hover:border-neutral-200 rounded-2xl overflow-hidden flex flex-col justify-between shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-200">
      <div>
        {/* Top Image Thumbnail with Overlay Badges */}
        <div
          onClick={() => onOpenDetails(course)}
          className="relative aspect-[16/10] bg-neutral-200 overflow-hidden cursor-pointer"
        >
          {!imageError ? (
            <img
              src={course.imageUrl}
              alt={course.imageAlt}
              loading="lazy"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-neutral-100">
              <Compass className="w-7 h-7 text-neutral-500 mb-2 stroke-[1.5]" />
              <span className="font-editorial text-sm text-[#111111]">
                {course.architecturalTopic}
              </span>
            </div>
          )}

          {/* Optional Top-Left Red "HIT" Circle Badge */}
          {course.isHit && (
            <span className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[#E53935] text-[#FFFFFF] text-[10px] font-bold uppercase tracking-wider flex items-center justify-center shadow-sm">
              HIT
            </span>
          )}

          {/* Top-Right Format Overlay Badge */}
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#111111]/75 backdrop-blur-xs text-[#FFFFFF] text-[10px] font-semibold uppercase tracking-[0.08em]">
            {course.formatBadge}
          </span>
        </div>

        {/* Card Content */}
        <div className="p-5 sm:p-6">
          {/* Category Label */}
          <div>
            <span className="inline-block px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-neutral-600 bg-[#FFFFFF] border border-neutral-200/80 rounded-md">
              {course.categoryBadge}
            </span>
          </div>

          {/* Course Title */}
          <h3 className="mt-3 font-editorial text-lg sm:text-[19px] font-medium text-[#111111] leading-snug group-hover:text-neutral-700 transition-colors">
            <button
              type="button"
              onClick={() => onOpenDetails(course)}
              className="text-left cursor-pointer focus:outline-none"
            >
              {course.title}
            </button>
          </h3>

          {/* Short Description Snippet */}
          <p className="mt-2 text-xs sm:text-[13px] text-neutral-500 leading-relaxed line-clamp-3">
            {course.description}
          </p>
        </div>
      </div>

      {/* Bottom Bar: Price on Left + Solid Black CTA Button on Right */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-neutral-200/60 flex items-center justify-between gap-3">
        <div>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.08em] text-neutral-400">
            PRICE
          </span>
          <span className="text-base sm:text-lg font-bold text-[#111111] tabular-nums">
            {formattedPrice}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onOpenDetails(course)}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#FFFFFF] bg-[#111111] hover:bg-neutral-800 rounded-lg transition-colors duration-150 whitespace-nowrap cursor-pointer"
        >
          <span>{course.ctaLabel}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};
