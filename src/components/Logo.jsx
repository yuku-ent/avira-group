import React from 'react';

/**
 * AVIRA GROUP Official Logo Component
 * - Symbol: Geometric letter "A" created by 2 overlapping triangles (Blue left, Orange right)
 *   with a white cross/plus cutout in the center.
 * - Text: "AVIRA" (Blue #0038A9) + "GROUP" (Orange #FE6102) in Plus Jakarta Sans
 * - Variant: 'default' (full colored), 'white' (monochrome white for dark backgrounds), 'compact' (icon only)
 */
export default function Logo({ variant = 'default', size = 'medium', className = '' }) {
  const isWhite = variant === 'white';
  
  // Color variables according to brand guideline
  const blueColor = isWhite ? '#FFFFFF' : '#0038A9';
  const orangeColor = isWhite ? '#FFFFFF' : '#FE6102';
  const cutoutColor = isWhite ? '#0038A9' : '#FFFFFF';

  const heights = {
    small: 32,
    medium: 44,
    large: 56,
  };

  const currentHeight = heights[size] || heights.medium;

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`} style={{ height: currentHeight }}>
      {/* SVG Icon */}
      <svg
        width={currentHeight * 1.15}
        height={currentHeight}
        viewBox="0 0 115 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105"
        aria-label="AVIRA GROUP Logo Symbol"
      >
        <g filter="drop-shadow(0px 4px 10px rgba(0,0,0,0.1))">
          {/* Left Triangle (Blue) */}
          <polygon
            points="5,95 45,10 75,95"
            fill={blueColor}
          />
          
          {/* Right Triangle (Orange) - Overlapping */}
          <polygon
            points="40,95 70,10 110,95"
            fill={orangeColor}
          />

          {/* Central Intersection Overlay effect & White Cross/Plus Cutout */}
          {/* Intersection shape */}
          <polygon
            points="40,95 45,10 75,95"
            fill={isWhite ? 'rgba(255,255,255,0.2)' : '#002C86'}
            style={{ mixBlendMode: 'multiply' }}
          />

          {/* White Cross/Plus Cutout at the center of overlap */}
          <rect x="52.5" y="55" width="10" height="26" fill={cutoutColor} rx="1.5" />
          <rect x="44.5" y="63" width="26" height="10" fill={cutoutColor} rx="1.5" />
        </g>
      </svg>

      {/* Typography: AVIRA GROUP */}
      {variant !== 'compact' && (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', leading: 1 }}>
          <div
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              letterSpacing: '-0.03em',
              fontSize: currentHeight * 0.48,
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
              gap: '0.22em',
            }}
          >
            <span style={{ color: blueColor }}>AVIRA</span>
            <span style={{ color: orangeColor }}>GROUP</span>
          </div>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: currentHeight * 0.19,
              fontWeight: 600,
              letterSpacing: '0.18em',
              color: isWhite ? 'rgba(255,255,255,0.7)' : '#555555',
              marginTop: '2px',
              textTransform: 'uppercase'
            }}
          >
            Synergie & Excellence
          </span>
        </div>
      )}
    </div>
  );
}
