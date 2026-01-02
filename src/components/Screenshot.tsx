import React from 'react';

type Props = {
  src: string;
  alt: string;
  caption?: string;
  darkSrc?: string;
  width?: number | string; // max width for image area
};

export default function Screenshot({ src, alt, caption, darkSrc, width = 960 }: Props) {
  const style: React.CSSProperties = {
    maxWidth: typeof width === 'number' ? `${width}px` : width,
    width: '100%',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  };

  return (
    <figure style={{ margin: '1rem 0', textAlign: 'center' }}>
      {darkSrc ? (
        <picture>
          <source srcSet={darkSrc} media="(prefers-color-scheme: dark)" />
          {/* Light/default */}
          <img src={src} alt={alt} style={style} />
        </picture>
      ) : (
        <img src={src} alt={alt} style={style} />
      )}
      {caption && (
        <figcaption style={{ color: 'var(--ifm-color-emphasis-700)', marginTop: '0.5rem' }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
