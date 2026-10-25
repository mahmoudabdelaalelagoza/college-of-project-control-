import { useId } from 'react';

export default function AssistantRobotIcon() {
  const id = useId().replace(/:/g, '');
  const paint = (name: string) => `url(#${id}-${name})`;

  return (
    <svg className="assistant-robot" viewBox="0 0 80 80" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-shell`} x1="19" y1="18" x2="64" y2="65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset=".42" stopColor="#e4f0f2" />
          <stop offset=".76" stopColor="#a5c2cb" />
          <stop offset="1" stopColor="#557e8f" />
        </linearGradient>
        <linearGradient id={`${id}-edge`} x1="13" y1="29" x2="70" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e5f2f4" />
          <stop offset=".5" stopColor="#6e9caa" />
          <stop offset="1" stopColor="#183e4e" />
        </linearGradient>
        <linearGradient id={`${id}-face`} x1="28" y1="30" x2="54" y2="59" gradientUnits="userSpaceOnUse">
          <stop stopColor="#326274" />
          <stop offset=".48" stopColor="#123b4a" />
          <stop offset="1" stopColor="#041921" />
        </linearGradient>
        <linearGradient id={`${id}-gold`} x1="32" y1="8" x2="47" y2="23" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff0c6" />
          <stop offset=".5" stopColor="#ffb35f" />
          <stop offset="1" stopColor="#bc722b" />
        </linearGradient>
        <linearGradient id={`${id}-eyes`} x1="30" y1="38" x2="30" y2="49" gradientUnits="userSpaceOnUse">
          <stop stopColor="#edffff" />
          <stop offset="1" stopColor="#68d9df" />
        </linearGradient>
        <filter id={`${id}-shadow`} x="-30%" y="-20%" width="160%" height="160%" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="5" stdDeviation="3" floodColor="#06212d" floodOpacity=".26" />
        </filter>
      </defs>
      <g filter={paint('shadow')}>
        <path d="M29 65h22l7 7H22l7-7Z" fill={paint('edge')} />
        <rect x="32" y="59" width="16" height="10" rx="4" fill={paint('gold')} />
        <rect x="37" y="13" width="6" height="13" rx="3" fill={paint('edge')} />
        <circle cx="40" cy="12" r="6" fill={paint('gold')} />
        <ellipse cx="38.5" cy="10" rx="2.5" ry="1.5" fill="#fff5df" fillOpacity=".9" />
        <rect x="7" y="34" width="12" height="22" rx="6" fill={paint('edge')} />
        <rect x="61" y="34" width="12" height="22" rx="6" fill={paint('edge')} />
        <rect x="9" y="38" width="4" height="12" rx="2" fill="#ffb35f" />
        <rect x="67" y="38" width="4" height="12" rx="2" fill="#d89548" />
        <rect x="14" y="22" width="52" height="43" rx="17" fill={paint('edge')} />
        <rect x="14" y="19" width="52" height="43" rx="17" fill={paint('shell')} />
        <path d="M21 30c2-5 6-7 12-7h15" stroke="#fff" strokeOpacity=".85" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="21" y="29" width="38" height="28" rx="11" fill="#7398a6" />
        <rect x="22" y="30" width="36" height="26" rx="10" fill={paint('face')} />
        <path d="M27 35c5-3 13-3 22-2" stroke="#9bc9d3" strokeOpacity=".25" strokeWidth="2" strokeLinecap="round" />
        <rect x="28" y="38" width="6" height="9" rx="3" fill={paint('eyes')} />
        <rect x="46" y="38" width="6" height="9" rx="3" fill={paint('eyes')} />
        <path d="M35 49c3 3 7 3 10 0" stroke="#ffbc75" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M28 59h24" stroke="#fff" strokeOpacity=".5" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}
