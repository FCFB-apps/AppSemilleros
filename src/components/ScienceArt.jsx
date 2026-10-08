import { useId } from 'react';
// Ilustración vectorial propia: no representa un modelo molecular específico.
export function ScienceArt({ variant = 'molecule', hero = false }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg
      className={`science-art ${hero ? 'science-art-hero' : ''}`}
      viewBox="0 0 520 400"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={id}>
          <stop stopColor="var(--art-highlight)" />
          <stop offset=".42" stopColor="var(--art-mid)" />
          <stop offset="1" stopColor="var(--art-depth)" />
        </radialGradient>
      </defs>
      <g className="art-orbits" stroke="currentColor" opacity=".2">
        <circle cx="260" cy="200" r="158" />
        <circle cx="260" cy="200" r="118" strokeDasharray="3 7" />
        <path d="M25 200h470M260 15v370" strokeDasharray="2 8" />
        <ellipse cx="260" cy="200" rx="210" ry="72" transform="rotate(-35 260 200)" />
      </g>
      {variant === 'molecule' && (
        <>
          <g stroke="var(--art-stroke)" strokeWidth="3">
            <path d="m140 252 68-105 100-35 84 84-46 111-120 20-86-75Zm68-105 18 180m82-215 38 195M140 252l252-56M208 147l138 160" />
          </g>
          {[
            [140, 252, 25],
            [208, 147, 39],
            [308, 112, 24],
            [392, 196, 32],
            [346, 307, 26],
            [226, 327, 19],
          ].map(([x, y, r]) => (
            <circle
              key={x}
              cx={x}
              cy={y}
              r={r}
              fill={`url(#${id})`}
              stroke="var(--art-stroke)"
              strokeOpacity=".6"
            />
          ))}
        </>
      )}
      {variant === 'cells' && (
        <g>
          {[
            [177, 137, 56],
            [298, 212, 77],
            [382, 118, 32],
            [155, 285, 37],
          ].map(([x, y, r]) => (
            <g key={x}>
              <circle
                cx={x}
                cy={y}
                r={r}
                fill={`url(#${id})`}
                fillOpacity=".7"
                stroke="var(--art-stroke)"
              />
              <circle
                cx={x - 8}
                cy={y + 5}
                r={r * 0.38}
                stroke="var(--art-detail)"
                strokeWidth="2"
              />
              <circle cx={x + 13} cy={y - 12} r="6" fill="var(--art-highlight)" />
            </g>
          ))}
        </g>
      )}
      {variant === 'botanical' && (
        <g stroke="var(--art-stroke)" strokeWidth="2">
          <path d="M250 350c-20-95 25-170 8-282" />
          <path d="M250 250c-100-2-126-64-121-107 74 10 120 32 121 107Z" fill={`url(#${id})`} />
          <path d="M255 191c94-6 133-73 124-107-91 18-123 52-124 107Z" fill={`url(#${id})`} />
          <path d="M250 309c66-9 102-53 107-88-70 0-105 35-107 88Z" fill={`url(#${id})`} />
          <path d="m144 158 106 92m5-59 109-93m-112 205 92-70" />
        </g>
      )}
      <g fill="currentColor" opacity=".6">
        <circle cx="87" cy="100" r="3" />
        <circle cx="436" cy="289" r="3" />
        <path d="M421 65v12m-6-6h12M89 328v12m-6-6h12" stroke="currentColor" />
      </g>
    </svg>
  );
}
