import React from 'react';
import { MessageCircle, MessageSquare, Send } from 'lucide-react';
import { TELEGRAM_CONTACT_URL, WHATSAPP_CONTACT_URL } from '../data/courses';

export const CTASection: React.FC = () => {
  return (
    <section id="admissions-support" className="py-16 md:py-24 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Light, Centered Card Section for Quick Support */}
        <div className="max-w-2xl mx-auto bg-[#F5F5F7] border border-[#EAEAEA] rounded-3xl p-8 sm:p-12 text-center shadow-[0_2px_16px_rgba(0,0,0,0.02)]">
          {/* Minimalist Icon Badge */}
          <div className="w-10 h-10 mx-auto rounded-full bg-[#FFFFFF] border border-neutral-200/80 flex items-center justify-center text-[#111111] mb-5 shadow-2xs">
            <MessageSquare className="w-4 h-4 stroke-[1.75]" />
          </div>

          <h2 className="font-editorial text-2xl sm:text-3xl md:text-[34px] font-normal text-[#111111] leading-tight">
            Questions Before Buying?
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-neutral-500 max-w-md mx-auto leading-relaxed">
            Write to our academic support team in your preferred messenger—we will help
            you choose the right program and answer any questions about the curriculum.
          </p>

          {/* Two Distinct Messenger Action Buttons Side-by-Side */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={WHATSAPP_CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.06em] text-[#FFFFFF] bg-[#25D366] hover:bg-[#20BD5A] rounded-xl shadow-xs transition-colors duration-150 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Write on WhatsApp</span>
            </a>

            <a
              href={TELEGRAM_CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.06em] text-[#FFFFFF] bg-[#0088CC] hover:bg-[#0077B5] rounded-xl shadow-xs transition-colors duration-150 whitespace-nowrap"
            >
              <Send className="w-4 h-4" />
              <span>Write on Telegram</span>
            </a>
          </div>

          <p className="mt-5 text-[11px] text-neutral-400">
            Support hours: Daily from 10:00 to 20:00 · Average response time: 15 minutes
          </p>
        </div>
      </div>
    </section>
  );
};
