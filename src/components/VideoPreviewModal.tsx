import React, { useState } from 'react';
import { CheckCircle2, Pause, Play, Sparkles, Volume2, X } from 'lucide-react';
import { CourseProgram } from '../types/course';

interface VideoPreviewModalProps {
  course: CourseProgram | null;
  onClose: () => void;
  onOpenFullDetails: (course: CourseProgram) => void;
}

export const VideoPreviewModal: React.FC<VideoPreviewModalProps> = ({
  course,
  onClose,
  onOpenFullDetails,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'final' | 'clay'>('final');

  if (!course) return null;

  const activeChapter = course.previewVideo.chapters[activeChapterIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#1A1A1A] text-[#FAF9F7] border border-[#444748] rounded-lg overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="px-6 py-4 border-b border-[#2F3130] flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#D4A373]">
            <span className="tabular-nums">{course.code}</span>
            <span aria-hidden="true">·</span>
            <span>Studio Lecture Preview</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{course.previewVideo.duration}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close lecture preview"
            className="p-1.5 text-[#C8C6C5] hover:text-[#FFFFFF] rounded transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Interactive Architectural Viewport Player */}
        <div className="relative aspect-16/9 bg-[#0F1010] overflow-hidden">
          <img
            src={course.imageUrl}
            alt={course.imageAlt}
            loading="lazy"
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover transition-all duration-200 ${
              viewMode === 'clay' ? 'grayscale contrast-125 brightness-95' : ''
            } ${isPlaying ? 'scale-[1.01]' : 'scale-100'}`}
          />

          {/* Top-Right Viewport Mode Switcher (Final Render vs Clay/Wireframe Pass) */}
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/75 border border-white/15 rounded p-1">
            <button
              type="button"
              onClick={() => setViewMode('final')}
              className={`px-2.5 py-1 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                viewMode === 'final'
                  ? 'bg-[#D4A373] text-[#1A1A1A]'
                  : 'text-[#FAF9F7] hover:bg-white/10'
              }`}
            >
              Final Beauty Pass
            </button>
            <button
              type="button"
              onClick={() => setViewMode('clay')}
              className={`px-2.5 py-1 text-xs font-medium rounded-xs transition-colors cursor-pointer ${
                viewMode === 'clay'
                  ? 'bg-[#D4A373] text-[#1A1A1A]'
                  : 'text-[#FAF9F7] hover:bg-white/10'
              }`}
            >
              Monochrome Clay Study
            </button>
          </div>

          {/* Bottom Player Controls Scrim */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-xs text-[#D4A373] font-medium">
                  Active Chapter ({activeChapter.timestamp})
                </p>
                <h2
                  id="video-modal-title"
                  className="font-editorial text-xl sm:text-2xl text-[#FFFFFF] mt-0.5"
                >
                  {activeChapter.title}
                </h2>
                <p className="text-xs text-[#C8C6C5] mt-1">
                  Key Takeaway: {activeChapter.keyTakeaway}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium bg-[#FFFFFF] text-[#1A1A1A] hover:bg-[#E5E2E1] rounded transition-colors cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 fill-current" />
                      <span>Pause Lecture</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Resume Lecture</span>
                    </>
                  )}
                </button>
                <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#C8C6C5]">
                  <Volume2 className="w-4 h-4" />
                  <span>Studio Audio 48kHz</span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 h-1 w-full bg-white/20 rounded-full overflow-hidden">
              <div
                className={`h-full bg-[#D4A373] transition-all duration-200 ${
                  activeChapterIndex === 0
                    ? 'w-1/3'
                    : activeChapterIndex === 1
                    ? 'w-2/3'
                    : 'w-full'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Chapters & Technical Parameters */}
        <div className="p-6 bg-[#1A1A1A] space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {course.previewVideo.chapters.map((chapter, index) => {
              const isSelected = index === activeChapterIndex;
              return (
                <button
                  key={chapter.timestamp}
                  type="button"
                  onClick={() => {
                    setActiveChapterIndex(index);
                    setIsPlaying(true);
                  }}
                  className={`text-left p-4 rounded border transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#2F3130] border-[#D4A373] text-[#FFFFFF]'
                      : 'bg-[#141515] border-[#2F3130] text-[#C8C6C5] hover:border-[#747878]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-[#D4A373] mb-1 tabular-nums">
                    <span>Chapter 0{index + 1}</span>
                    <span>{chapter.timestamp}</span>
                  </div>
                  <p className="text-xs font-medium text-[#FFFFFF] line-clamp-1">
                    {chapter.title}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#2F3130] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-[#C8C6C5] flex flex-wrap items-center gap-2">
              <span>Lighting: {course.previewVideo.lightingSetup}</span>
              <span aria-hidden="true">·</span>
              <span>Engine: {course.previewVideo.renderEngine}</span>
            </div>

            <button
              type="button"
              onClick={() => onOpenFullDetails(course)}
              className="px-5 py-2.5 text-xs font-medium bg-[#D4A373] text-[#1A1A1A] hover:bg-[#E5B88B] rounded transition-colors whitespace-nowrap cursor-pointer"
            >
              Inspect Full Syllabus & Enroll →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
