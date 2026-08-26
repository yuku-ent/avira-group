import React from 'react';

/**
 * AVIRA GROUP Official Logo Component
 * Exactly matching the official brand logo:
 * - Symbol: Geometric letter "A" created by 2 overlapping diagonal legs (Blue left, Orange right)
 *   with a horizontal rounded pill cutout at mid-height.
 * - Text: "AVIRA" (Blue #0038A9)
 * - Subtext: "— GROUP —" (Orange #FE6102 with side dashes)
 * - Variant: 'default' (full colored), 'white' (monochrome white for dark backgrounds), 'compact' (icon only)
 */
export default function Logo({ variant = 'default', size = 'medium', className = '' }) {
  const isWhite = variant === 'white';
  
  // Official Hex colors
  const blueColor = isWhite ? '#FFFFFF' : '#0038A9';
  const orangeColor = isWhite ? '#FFFFFF' : '#FE6102';
  const cutoutColor = isWhite ? '#002570' : '#FFFFFF';

  const heights = {
    small: 38,
    medium: 52,
    large: 72,
  };

  const currentHeight = heights[size] || heights.medium;

  return (
    <div
      className={`inline-flex flex-col items-center select-none ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: variant === 'horizontal' ? 'row' : 'column',
        alignItems: 'center',
        gap: variant === 'horizontal' ? '0.85rem' : '0.4rem',
        cursor: 'pointer',
      }}
    >
      {/* SVG Icon Symbol */}
      <svg
        width={currentHeight * 0.95}
        height={currentHeight * 0.9}
        viewBox="0 0 240 210"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transition: 'transform 0.3s ease' }}
        aria-label="AVIRA GROUP Logo"
      >
        <g>
          {/* Left Leg - Blue stroke */}
          <path
            d="M 30,200 L 112,18 L 148,18 L 88,200 Z"
            fill={blueColor}
          />
          
          {/* Right Leg - Orange stroke (Overlapping at apex) */}
          <path
            d="M 98,18 L 128,18 L 210,200 L 152,200 Z"
            fill={orangeColor}
          />

          {/* Overlap fold shadow effect at apex */}
          <path
            d="M 112,18 L 128,18 L 118,65 Z"
            fill="rgba(0, 0, 0, 0.18)"
          />

          {/* Central Horizontal Pill Cutout (Capsule slot with rounded ends) */}
          <rect
            x="54"
            y="108"
            width="132"
            height="28"
            rx="14"
            fill={cutoutColor}
          />

          {/* Lower Inner Triangle Cutout (White background between legs) */}
          <path
            d="M 72,200 L 168,200 L 120,128 Z"
            fill={cutoutColor}
          />
        </g>
      </svg>

      {/* Typography: AVIRA / — GROUP — */}
      {variant !== 'compact' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          {/* AVIRA Header */}
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
              fontWeight: 900,
              letterSpacing: '0.04em',
              fontSize: currentHeight * 0.42,
              lineHeight: 1,
              color: blueColor,
              textTransform: 'uppercase',
            }}
          >
            AVIRA
          </span>

          {/* — GROUP — Subtitle with dashes */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4em',
              marginTop: '0.22em',
            }}
          >
            <div
              style={{
                width: currentHeight * 0.28,
                height: '3px',
                backgroundColor: orangeColor,
                borderRadius: '2px',
              }}
            />
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
                fontWeight: 800,
                letterSpacing: '0.22em',
                fontSize: currentHeight * 0.22,
                lineHeight: 1,
                color: orangeColor,
                textTransform: 'uppercase',
              }}
            >
              GROUP
            </span>
            <div
              style={{
                width: currentHeight * 0.28,
                height: '3px',
                backgroundColor: orangeColor,
                borderRadius: '2px',
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
