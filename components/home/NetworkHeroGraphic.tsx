/**
 * Abstract network placeholder — nodes + flow lines. No photography.
 */
export function NetworkHeroGraphic() {
  return (
    <div
      className="relative flex w-full min-h-[280px] items-center justify-center md:min-h-[420px]"
      aria-hidden
    >
      <svg
        viewBox="0 0 400 360"
        className="h-full w-full max-w-lg text-paxillin-sage/90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="hero-grad"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
            gradientTransform="rotate(120)"
          >
            <stop offset="0%" stopColor="#3a7bd5" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#6fcf97" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <rect
          x="24"
          y="32"
          width="352"
          height="296"
          rx="16"
          className="fill-white stroke-paxillin-mist/50"
          strokeWidth="1"
        />
        <path
          d="M 80 120 L 200 100 L 320 130 M 200 100 L 200 200 M 120 220 L 200 200 L 280 220 M 200 200 L 200 280"
          stroke="url(#hero-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 80 120 L 120 220 M 320 130 L 280 220"
          stroke="currentColor"
          strokeOpacity="0.2"
          strokeWidth="1"
        />
        <circle cx="80" cy="120" r="8" className="fill-paxillin-sage" />
        <circle cx="200" cy="100" r="9" className="fill-paxillin-sand/90" />
        <circle cx="320" cy="130" r="7" className="fill-paxillin-sage/80" />
        <circle
          cx="200"
          cy="200"
          r="10"
          fill="hsl(var(--primary) / 0.92)"
        />
        <circle cx="120" cy="220" r="6" className="fill-paxillin-mist" />
        <circle cx="280" cy="220" r="6" className="fill-paxillin-mist" />
        <circle cx="200" cy="280" r="7" className="fill-paxillin-sage/60" />
      </svg>
    </div>
  );
}
