import React from 'react';
export default function DashboardIcon({size=20}:{size?:number}){
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 12h7V3H3v9zM14 21h7v-9h-7v9zM14 3h7v6h-7V3zM3 21h7v-6H3v6z"/>
    </svg>
  );
}
