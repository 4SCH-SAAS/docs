import React from 'react';
export default function AttendanceIcon({size=20}:{size?:number}){
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 7v6l4 2"/>
    </svg>
  );
}
