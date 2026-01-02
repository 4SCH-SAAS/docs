import React from 'react';
export default function AcademicIcon({size=20}:{size?:number}){
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 10L12 4 2 10l10 6 10-6z"/>
      <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"/>
    </svg>
  );
}
