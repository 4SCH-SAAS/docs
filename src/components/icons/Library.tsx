import React from 'react';

export default function LibraryIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* Simple bookshelf */}
      <path d="M5 4h4v16H5z" />
      <path d="M10 4h4v16h-4z" />
      <path d="M15 4h4v16h-4z" />
      <path d="M4 20h16" />
      <path d="M6.5 8h1" />
      <path d="M11.5 10h1" />
      <path d="M16.5 7h1" />
    </svg>
  );
}
