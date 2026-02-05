import React from 'react';

export default function StaffIcon({ size = 20 }: { size?: number }) {
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
      {/* ID badge */}
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <path d="M9 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0" />
      <path d="M9 17c0-2 6-2 6 0" />
      <path d="M10 3V2h4v1" />
    </svg>
  );
}
