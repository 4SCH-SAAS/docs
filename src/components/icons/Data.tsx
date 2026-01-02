import React from 'react';
export default function DataIcon({size=20}:{size?:number}){
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <ellipse cx="12" cy="5" rx="8" ry="3"/>
      <path d="M4 5v7c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/>
      <path d="M4 12v7c0 1.66 3.58 3 8 3s8-1.34 8-3v-7"/>
    </svg>
  );
}
