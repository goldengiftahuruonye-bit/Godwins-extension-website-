import React from 'react';
import { BookOpen, Compass, ShieldCheck } from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../data/courses';

export const ValueProps: React.FC = () => {
  const renderIcon = (iconName: 'methodology' | 'practice' | 'verified') => {
    switch (iconName) {
      case 'methodology':
        return <BookOpen className="w-4 h-4 text-[#111111] stroke-[1.75]" />;
      case 'practice':
        return <Compass className="w-4 h-4 text-[#111111] stroke-[1.75]" />;
      case 'verified':
        return <ShieldCheck className="w-4 h-4 text-[#111111] stroke-[1.75]" />;
    }
  };

  return (
    <section
      id="training-advantages"
      className="py-16 md:py-24 bg-[#F9F9FB] border-y border-[#EFEFEF]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Main Section Title with Supporting Text */}
        <div className="max-w-xl mx-auto text-center mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-400">
            ADVANTAGES OF THE ACADEMY
          </p>
          <h2 className="mt-1.5 font-editorial text-3xl sm:text-4xl font-normal text-[#111111] tracking-tight">
            Why Choose Our Training
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-500 leading-relaxed">
            Systematic architectural knowledge distilled from 15+ years of designing
            and supervising private residences and modern interiors.
          </p>
        </div>

        {/* 3-Column Row of White Feature Cards with Equal Height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUE_PROPOSITIONS.map((item) => (
            <div
              key={item.id}
              className="h-full bg-[#FFFFFF] border border-[#EFEFEF] rounded-2xl p-6 sm:p-8 flex flex-col justify-start shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F5F5F7] border border-neutral-200/60 flex items-center justify-center mb-5 shrink-0">
                {renderIcon(item.iconName)}
              </div>

              <h3 className="font-editorial text-xl font-medium text-[#111111]">
                {item.title}
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-neutral-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
