import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width: string;
  height: string;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  className?: string;
}

function Image({
  src,
  alt,
  width,
  height,
  objectFit,
  className,
}: ImageProps) {
  const imageStyle: React.CSSProperties = {
    objectFit: objectFit,
  };

  return (
    <img
      src={src}
      alt={alt}
      style={imageStyle}
      width={width}
      height={height}
      className={className}
    />
  );
}

export default Image;
