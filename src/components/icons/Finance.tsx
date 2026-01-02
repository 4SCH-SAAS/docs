import React from 'react';
export default function FinanceIcon({size=20}:{size?:number}){
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="7" width="20" height="10" rx="2"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  );
}
