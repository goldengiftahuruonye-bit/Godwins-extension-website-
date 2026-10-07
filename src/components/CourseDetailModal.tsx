import React from 'react';
import { Check, MessageCircle, Play, Send, X } from 'lucide-react';
import { CourseProgram, CurrencyCode } from '../types/course';
import {
  formatCoursePrice,
  TELEGRAM_CONTACT_URL,
  WHATSAPP_CONTACT_URL,
} from '../data/courses';

interface CourseDetailModalProps {
  course: CourseProgram | null;
  currency: CurrencyCode;
  onClose: () => void;
  onSwitchToVideo: (course: CourseProgram) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  currency,
  onClose,
  onSwitchToVideo,
}) => {
  if (!course) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#F9F8F6] border border-[#E8E5DF] rounded-lg p-6 sm:p-8 md:p-10 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar inside Modal */}
        <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-[#E8E5DF]">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#B88350]">
            <span className="tabular-nums">{course.code}</span>
            <span aria-hidden="true">·</span>
            <span>{course.category}</span>
            <span aria-hidden="true">·</span>
            <span>{course.tierLabel}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close course details"
            className="p-2 text-[#66625D] hover:text-[#1A1A1A] bg-[#FFFFFF] border border-[#E8E5DF] rounded transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Hero Overview inside Modal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8 items-center">
          <div className="md:col-span-5 aspect-4/3 rounded overflow-hidden bg-[#EFEEEC] border border-[#E8E5DF]">
            <img
              src={course.imageUrl}
              alt={course.imageAlt}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-7 space-y-3">
            <h2
              id="course-modal-title"
              className="font-editorial text-2xl sm:text-3xl font-normal text-[#1A1A1A] leading-tight"
            >
              {course.title}
            </h2>
            <p className="text-sm text-[#66625D] leading-relaxed">{course.description}</p>

            <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#1A1A1A] font-medium">
              <span className="tabular-nums">{course.durationWeeks} Weeks</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{course.lessonsCount} Studio Lessons</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{course.studioHours} Practical Hours</span>
              <span aria-hidden="true">·</span>
              <span>Lead: {course.leadArchitect.name}</span>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onSwitchToVideo(course)}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#1A1A1A] bg-[#FFFFFF] hover:bg-[#F4F3F1] border border-[#E8E5DF] rounded transition-colors cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-[#1A1A1A]" />
                <span>Watch Free Lecture Sample ({course.previewVideo.duration})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Curriculum Syllabus Breakdown */}
        <div className="space-y-4 mb-8">
          <h3 className="font-editorial text-xl font-medium text-[#1A1A1A]">
            Architectural Curriculum & Studio Deliverables
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {course.syllabus.map((mod, idx) => (
              <div
                key={mod.week}
                className="bg-[#FFFFFF] border border-[#E8E5DF] rounded p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#B88350]">
                    <span className="tabular-nums">0{idx + 1}.</span>
                    <span>{mod.week}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{mod.durationMinutes} mins lecture</span>
                  </div>
                  <h4 className="font-editorial text-lg font-medium text-[#1A1A1A]">
                    {mod.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#66625D]">{mod.summary}</p>
                </div>

                <div className="sm:text-right shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#E8E5DF]">
                  <span className="block text-[11px] text-[#66625D]">Studio Deliverable</span>
                  <span className="text-xs font-medium text-[#1A1A1A]">{mod.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Included Commercial Studio Assets */}
        <div className="bg-[#FFFFFF] border border-[#E8E5DF] rounded p-6 mb-8">
          <h4 className="font-editorial text-lg font-medium text-[#1A1A1A] mb-3">
            Included 3D Scenes, Blueprints & Commercial Assets
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {course.includedAssets.map((asset) => (
              <div key={asset} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#66625D]">
                <Check className="w-4 h-4 text-[#B88350] shrink-0 mt-0.5" />
                <span>{asset}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enrollment & Messenger Footer */}
        <div className="bg-[#FFFFFF] border border-[#E8E5DF] rounded p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <span className="text-xs text-[#66625D] block">
              Program Tuition (Includes Lifetime Access & Critiques)
            </span>
            <div className="flex items-baseline gap-2.5 mt-1">
              <span className="font-editorial text-3xl font-medium text-[#1A1A1A] tabular-nums">
                {formatCoursePrice(course.priceUSD, currency)}
              </span>
              {course.originalPriceUSD && (
                <span className="text-sm text-[#66625D] line-through tabular-nums">
                  {formatCoursePrice(course.originalPriceUSD, currency)}
                </span>
              )}
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2.5">
              <a
                href={`${WHATSAPP_CONTACT_URL}%20Course%3A%20${encodeURIComponent(course.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#FFFFFF] bg-[#25D366] hover:bg-[#20BD5A] rounded transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Ask on WhatsApp</span>
              </a>
              <a
                href={TELEGRAM_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#FFFFFF] bg-[#0088CC] hover:bg-[#0077B5] rounded transition-colors whitespace-nowrap"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Ask on Telegram</span>
              </a>
            </div>
          </div>

          <div className="lg:w-80 flex flex-col sm:flex-row lg:flex-col gap-2.5">
            <button
              type="button"
              onClick={() => onSwitchToVideo(course)}
              className="w-full py-3 px-5 text-xs sm:text-sm font-semibold text-[#FFFFFF] bg-[#111111] hover:bg-neutral-800 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
            >
              Start Course Lecture Now →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
