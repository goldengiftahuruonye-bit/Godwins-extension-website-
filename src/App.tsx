/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { AUTHOR_PROGRAMS, INSTRUCTOR_PROFILE } from './data/courses';
import { CourseProgram, CurrencyCode, ProgramCategory } from './types/course';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { CategoryTabs } from './components/CategoryTabs';
import { CourseCard } from './components/CourseCard';
import { ValueProps } from './components/ValueProps';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { CourseDetailModal } from './components/CourseDetailModal';
import { VideoPreviewModal } from './components/VideoPreviewModal';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<ProgramCategory>(
    ProgramCategory.ALL
  );
  const [detailModalCourse, setDetailModalCourse] = useState<CourseProgram | null>(
    null
  );
  const [videoModalCourse, setVideoModalCourse] = useState<CourseProgram | null>(
    null
  );
  const [aboutAuthorModalOpen, setAboutAuthorModalOpen] = useState(false);
  const [legalDocTitle, setLegalDocTitle] = useState<string | null>(null);

  // Close active modals on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDetailModalCourse(null);
        setVideoModalCourse(null);
        setAboutAuthorModalOpen(false);
        setLegalDocTitle(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Grouped courses for the full catalog layout
  const featuredArchitectureCourses = AUTHOR_PROGRAMS.filter(
    (c) => c.groupKey === 'featured-architecture'
  );
  const webinarsAndMasterclasses = AUTHOR_PROGRAMS.filter(
    (c) => c.groupKey === 'webinars-masterclasses'
  );
  const mentorshipCourses = AUTHOR_PROGRAMS.filter(
    (c) => c.groupKey === 'mentorship'
  );
  const interiorMiniCourses = AUTHOR_PROGRAMS.filter(
    (c) => c.groupKey === 'interior-mini-courses'
  );

  const filteredCount =
    selectedCategory === ProgramCategory.ALL
      ? AUTHOR_PROGRAMS.length
      : AUTHOR_PROGRAMS.filter((c) => c.category === selectedCategory).length;

  const showArchitectureGroup =
    selectedCategory === ProgramCategory.ALL ||
    selectedCategory === ProgramCategory.ARCHITECTURE;
  const showWebinarsGroup =
    selectedCategory === ProgramCategory.ALL ||
    selectedCategory === ProgramCategory.WEBINARS;
  const showMentorshipGroup =
    selectedCategory === ProgramCategory.ALL ||
    selectedCategory === ProgramCategory.MENTORSHIP;
  const showMiniCoursesGroup =
    selectedCategory === ProgramCategory.ALL ||
    selectedCategory === ProgramCategory.MINI_COURSES;

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#111111]">
      {/* Top Navigation Bar */}
      <Navbar onExploreCatalog={() => scrollToSection('catalog')} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section (Personal Bio Block) */}
        <Header
          onExploreCatalog={() => scrollToSection('catalog')}
          onOpenAboutAuthor={() => setAboutAuthorModalOpen(true)}
        />

        {/* Author Programs Catalog Section */}
        <section id="catalog" className="py-10 md:py-16 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter & Section Header */}
            <CategoryTabs
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              totalCount={filteredCount}
            />

            <div className="space-y-14">
              {/* Group 1: Featured 2-Card Architecture Block */}
              {showArchitectureGroup && (
                <div>
                  <div className="flex justify-center mb-7">
                    <span className="px-4 py-1.5 rounded-full bg-[#F5F5F7] border border-neutral-200/70 text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-600">
                      Architecture & Private Houses
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {featuredArchitectureCourses.map((course) => (
                      <div key={course.id} className="h-full">
                        <CourseCard
                          course={course}
                          currency={CurrencyCode.USD}
                          onOpenDetails={(c) => setDetailModalCourse(c)}
                          onWatchPreview={(c) => setVideoModalCourse(c)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Group 2: Webinars & Masterclasses (3-Column Responsive Grid) */}
              {showWebinarsGroup && (
                <div>
                  <div className="flex justify-center mb-7">
                    <span className="px-4 py-1.5 rounded-full bg-[#F5F5F7] border border-neutral-200/70 text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-600">
                      Webinars & Masterclasses
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {webinarsAndMasterclasses.map((course) => (
                      <div key={course.id} className="h-full">
                        <CourseCard
                          course={course}
                          currency={CurrencyCode.USD}
                          onOpenDetails={(c) => setDetailModalCourse(c)}
                          onWatchPreview={(c) => setVideoModalCourse(c)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Group 3: Individual Mentorship */}
              {showMentorshipGroup && (
                <div>
                  <div className="flex justify-center mb-7">
                    <span className="px-4 py-1.5 rounded-full bg-[#F5F5F7] border border-neutral-200/70 text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-600">
                      Individual Mentorship & Consulting
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {mentorshipCourses.map((course) => (
                      <div key={course.id} className="h-full">
                        <CourseCard
                          course={course}
                          currency={CurrencyCode.USD}
                          onOpenDetails={(c) => setDetailModalCourse(c)}
                          onWatchPreview={(c) => setVideoModalCourse(c)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Group 4: Interior Design Mini-Courses (3-Column Responsive Grid) */}
              {showMiniCoursesGroup && (
                <div>
                  <div className="flex justify-center mb-7">
                    <span className="px-4 py-1.5 rounded-full bg-[#F5F5F7] border border-neutral-200/70 text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-600">
                      Interior Design & 3D Mini-Courses
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {interiorMiniCourses.map((course) => (
                      <div key={course.id} className="h-full">
                        <CourseCard
                          course={course}
                          currency={CurrencyCode.USD}
                          onOpenDetails={(c) => setDetailModalCourse(c)}
                          onWatchPreview={(c) => setVideoModalCourse(c)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Benefits / "Why Choose Our Training" Section */}
        <ValueProps />

        {/* Contact / Messenger Banner ("Questions Before Buying?") */}
        <CTASection />
      </main>

      {/* Minimalist Footer */}
      <Footer onOpenLegalModal={(title) => setLegalDocTitle(title)} />

      {/* Course Details & Syllabus Modal */}
      <CourseDetailModal
        course={detailModalCourse}
        currency={CurrencyCode.USD}
        onClose={() => setDetailModalCourse(null)}
        onSwitchToVideo={(course) => {
          setDetailModalCourse(null);
          setVideoModalCourse(course);
        }}
      />

      {/* Video Lecture Preview Modal */}
      <VideoPreviewModal
        course={videoModalCourse}
        onClose={() => setVideoModalCourse(null)}
        onOpenFullDetails={(course) => {
          setVideoModalCourse(null);
          setDetailModalCourse(course);
        }}
      />

      {/* About Instructor Modal */}
      {aboutAuthorModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setAboutAuthorModalOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-[#FFFFFF] border border-[#EFEFEF] rounded-2xl p-6 sm:p-8 shadow-xl space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Instructor Biography & Practice
              </span>
              <button
                type="button"
                onClick={() => setAboutAuthorModalOpen(false)}
                className="p-1 text-neutral-400 hover:text-[#111111] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <img
                src={INSTRUCTOR_PROFILE.portraitUrl}
                alt={INSTRUCTOR_PROFILE.name}
                className="w-16 h-16 rounded-full object-cover border border-neutral-200"
              />
              <div>
                <h3 className="font-editorial text-2xl text-[#111111]">
                  {INSTRUCTOR_PROFILE.name}
                </h3>
                <p className="text-xs text-neutral-500">
                  Principal Architect · 15+ Years Residential & Interior Practice
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed">
              {INSTRUCTOR_PROFILE.bio}
            </p>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-[#F9F9FB] p-3.5 rounded-xl border border-neutral-100">
                <span className="font-editorial text-xl text-[#111111] block">
                  100+
                </span>
                <span className="text-[11px] text-neutral-500">
                  Built Houses & Interiors
                </span>
              </div>
              <div className="bg-[#F9F9FB] p-3.5 rounded-xl border border-neutral-100">
                <span className="font-editorial text-xl text-[#111111] block">
                  3,500+
                </span>
                <span className="text-[11px] text-neutral-500">
                  Graduated Students
                </span>
              </div>
              <div className="bg-[#F9F9FB] p-3.5 rounded-xl border border-neutral-100">
                <span className="font-editorial text-xl text-[#111111] block">
                  12
                </span>
                <span className="text-[11px] text-neutral-500">
                  Author Programs
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setAboutAuthorModalOpen(false);
                scrollToSection('catalog');
              }}
              className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#111111] hover:bg-neutral-800 rounded-xl transition-colors cursor-pointer"
            >
              Explore Author Programs
            </button>
          </div>
        </div>
      )}

      {/* Legal Policy Modal */}
      {legalDocTitle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setLegalDocTitle(null)}
        >
          <div
            className="w-full max-w-lg bg-[#FFFFFF] border border-[#EFEFEF] rounded-2xl p-6 sm:p-8 shadow-xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <h3 className="font-editorial text-xl text-[#111111]">
                {legalDocTitle}
              </h3>
              <button
                type="button"
                onClick={() => setLegalDocTitle(null)}
                className="p-1 text-neutral-400 hover:text-[#111111] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
              This document governs enrollment, access to video lectures, architectural
              checklists, and personal data protection on the Godwin Richard Educational
              Platform. All course materials are protected by copyright and provided for
              individual professional use.
            </p>
            <button
              type="button"
              onClick={() => setLegalDocTitle(null)}
              className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#111111] rounded-xl cursor-pointer"
            >
              Close Document
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
