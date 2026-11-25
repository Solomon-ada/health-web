import React, { useState, useEffect } from 'react';
import { BookOpen, Clock, ArrowRight, X, AlertCircle } from 'lucide-react';
import { articles } from '../data/articles';
import { siteConfig } from '../data/siteConfig';

export function HealthEducationSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedArticle(null);
    };
    if (selectedArticle) {
      window.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedArticle]);

  return (
    <section id="education" className="py-16 sm:py-24 bg-[#F2ECE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#2D6A4F] mb-2">
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              <span>Health Education &amp; Articles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1B4332] leading-tight">
              Educational Resources for Informed Family Wellness
            </h2>
          </div>

          <span className="inline-flex items-center self-start md:self-auto px-3.5 py-1.5 rounded-full bg-white border border-[#1B4332]/15 text-xs font-medium text-[#4A5750]">
            Sample Placeholder Articles • Educational Only
          </span>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#1B4332]/10 flex flex-col justify-between hover:border-[#2D6A4F]/40 transition-colors"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-[#E8F0EB] relative">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {article.isSample && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#FAF7F2]/95 text-[#1B4332] text-[11px] font-semibold shadow-xs">
                      Sample Article
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 text-xs text-[#4A5750] mb-3">
                    <span className="font-semibold text-[#2D6A4F]">
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#1B4332] leading-snug mb-2.5">
                    {article.title}
                  </h3>

                  <p className="text-sm text-[#4A5750] leading-relaxed">
                    {article.shortDescription}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B4332] hover:text-[#2D6A4F] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4332] rounded"
                >
                  <span>Read More</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Accessible Article Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F2923]/65 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-[#FAF7F2] rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-xl border border-[#1B4332]/15"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 bg-[#FAF7F2]/95 backdrop-blur-xs px-6 py-4 border-b border-[#1B4332]/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#2D6A4F]">
                <span>{selectedArticle.category}</span>
                <span aria-hidden="true">•</span>
                <span className="text-[#4A5750] font-normal">
                  {selectedArticle.readTime}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="p-2 rounded-lg text-[#4A5750] hover:bg-[#E8F0EB] hover:text-[#1B4332] transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="aspect-[16/9] rounded-xl overflow-hidden bg-[#E8F0EB]">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                {selectedArticle.isSample && (
                  <span className="inline-block mb-2 px-2.5 py-0.5 rounded bg-[#E8F0EB] text-[#1B4332] text-xs font-semibold">
                    Sample Educational Content (Placeholder)
                  </span>
                )}
                <h3
                  id="article-modal-title"
                  className="font-serif text-2xl sm:text-3xl font-bold text-[#1B4332] leading-tight"
                >
                  {selectedArticle.title}
                </h3>
              </div>

              <div className="space-y-5">
                {selectedArticle.sections.map((sec) => (
                  <div key={sec.heading}>
                    <h4 className="font-serif text-lg font-semibold text-[#1B4332] mb-1.5">
                      {sec.heading}
                    </h4>
                    <p className="text-sm sm:text-base text-[#4A5750] leading-relaxed">
                      {sec.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Inline Educational Disclaimer */}
              <div className="p-4 rounded-xl bg-[#E8F0EB]/80 border border-[#2D6A4F]/20 flex items-start gap-3">
                <AlertCircle
                  className="w-5 h-5 text-[#1B4332] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="text-xs text-[#1F2923] leading-relaxed">
                  {siteConfig.medicalDisclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
