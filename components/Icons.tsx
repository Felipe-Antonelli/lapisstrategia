type P = { className?: string };
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const Arrow = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Compass = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5z" /></svg>
);
export const Gears = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}>
    <circle cx="9" cy="10" r="3" />
    <path d="M9 3v2M9 15v2M3.9 6.5l1.7 1M12.4 12.5l1.7 1M3.9 13.5l1.7-1M12.4 7.5l1.7-1M2 10h2M14 10h2" />
    <circle cx="17.5" cy="17" r="2" />
    <path d="M17.5 13v1.2M17.5 19.8V21M14 17h-1.2M21 17h-1.2" />
  </svg>
);
export const Chart = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}><path d="M3 20h18M6 16v-4M11 16V8M16 16v-6" /><path d="m5 8 5-4 4 3 6-5" /></svg>
);
export const Target = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.2" /></svg>
);
export const Users = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M16 14.2c3 .3 5.5 2.4 5.5 5.8" />
  </svg>
);
export const Shield = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}><path d="M12 3 4.5 6v5.5c0 4.6 3.2 8 7.5 9.5 4.3-1.5 7.5-4.9 7.5-9.5V6z" /><path d="m9 12 2 2 4-4" /></svg>
);
export const Bulb = ({ className = "h-7 w-7" }: P) => (
  <svg {...base} className={className}><path d="M9 18h6M10 21h4" /><path d="M8 13.5a5.5 5.5 0 1 1 8 0c-.9.9-1.5 1.7-1.5 3H9.5c0-1.3-.6-2.1-1.5-3z" /></svg>
);
export const Check = ({ className = "h-4 w-4" }: P) => (
  <svg {...base} className={className} strokeWidth={2.2}><path d="m5 12 4.5 4.5L19 7" /></svg>
);
