import React from 'react';
import { ProgramCategory } from '../types/course';

interface CategoryTabsProps {
  selectedCategory: ProgramCategory;
  onSelectCategory: (category: ProgramCategory) => void;
  totalCount: number;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  selectedCategory,
  onSelectCategory,
  totalCount,
}) => {
  const categories = Object.values(ProgramCategory);

  return (
    <div className="mb-10">
      {/* Section Header on Left + Secondary Sub-Label on Right */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-400">
            PRACTICAL ARCHITECTURAL EDUCATION
          </p>
          <h2 className="mt-1 font-editorial text-3xl sm:text-4xl font-normal text-[#111111] tracking-tight">
            Author Programs Catalog
          </h2>
        </div>

        <p className="text-xs text-neutral-500 max-w-xs md:text-right leading-relaxed">
          Showing {totalCount} systematic programs for architects, interior designers, and
          private homeowners.
        </p>
      </div>

      {/* Horizontal Filter Pill Tabs */}
      <div
        role="tablist"
        aria-label="Program category filters"
        className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar"
      >
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              role="tab"
              aria-selected={isActive}
              type="button"
              onClick={() => onSelectCategory(category)}
              className={`px-4 py-2 text-xs font-medium rounded-full transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-[#111111] text-[#FFFFFF] shadow-xs'
                  : 'bg-[#F5F5F7] text-neutral-600 hover:bg-neutral-200/75 hover:text-[#111111]'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};
