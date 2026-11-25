import React from 'react';

export function BrandLogo({ light = false, showFullName = true }) {
  return (
    <a
      href="#home"
      className="inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D6A4F] rounded-lg"
      aria-label="Ethio Family Natural Treatment Medical & Health - Home"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        <rect
          width="64"
          height="64"
          rx="16"
          fill={light ? '#FAF7F2' : '#1B4332'}
        />
        <path
          d="M32 14C22 14 16 22 16 32C16 42 23 50 32 50C41 50 48 42 48 32C48 22 42 14 32 14Z"
          fill={light ? '#E8F0EB' : '#2D6A4F'}
          opacity="0.55"
        />
        <path
          d="M32 18V46M22 32H42"
          stroke={light ? '#1B4332' : '#FAF7F2'}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M32 18C32 18 41 21 43 30C35 30 32 24 32 18Z"
          fill={light ? '#2D6A4F' : '#A3C9A8'}
        />
      </svg>

      <div className="flex flex-col leading-tight">
        <span
          className={`font-serif font-semibold tracking-tight text-base sm:text-lg ${
            light ? 'text-[#FAF7F2]' : 'text-[#1B4332]'
          }`}
        >
          {showFullName ? 'Ethio Family Natural Treatment' : 'Ethio Family Health'}
        </span>
        <span
          className={`text-xs font-medium tracking-wide uppercase ${
            light ? 'text-[#A3C9A8]' : 'text-[#2D6A4F]'
          }`}
        >
          Medical &amp; Health
        </span>
      </div>
    </a>
  );
}
