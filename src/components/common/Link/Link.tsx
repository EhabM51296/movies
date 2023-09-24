import React from 'react';

interface LinkProps {
  text: string;
  to: string;
  openInNewTab?: boolean;
  Underline?: boolean;
  transition?: boolean;
  colorBeforeHover?: string;
  className?: string;
}

function Link({
  text,
  to,
  openInNewTab = false,
  Underline = false,
  transition = false,
  colorBeforeHover,
  className,
}: LinkProps) {
  const linkStyle: React.CSSProperties = {
    color: colorBeforeHover,
    textDecoration: Underline ? 'underline' : 'none',
    transition: transition ? 'color 0.3s ease' : 'none',
  };

  return (
    <a
      href={to}
      target={openInNewTab ? '_blank' : '_self'}
      style={linkStyle}
      className={`${className}`}
    >
      {text}
    </a>
  );
}

export default Link;
