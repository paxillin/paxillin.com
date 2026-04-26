import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type FeatureHighlight = {
  text: string;
  Icon: LucideIcon;
};

export type FeatureDefinition = {
  icon: string;
  title: string;
  headline: string;
  subtext: string;
  highlights: FeatureHighlight[];
  mockupFeature: string;
  /** Subtle decorative motif (e.g. security lines) — keep low contrast */
  visualAccent?: "security";
};

const cardShellClass =
  "rounded-2xl border border-[#D9D1C6]/90 bg-[#FDFBF7] shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_8px_30px_rgba(44,58,53,0.06)]";

function SecurityMotif({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      className={cn("select-none", className)}
      viewBox="0 0 200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M100 8 L156 32 V68 C156 92 130 108 100 112 C70 108 44 92 44 68 V32 Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
        opacity="0.35"
      />
      <path
        d="M100 28 V56 M88 44 H112"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.25"
      />
      <circle cx="168" cy="24" r="3" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <path
        d="M24 88 H52 M24 100 H40"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.18"
      />
    </svg>
  );
}

export function FeatureDetailCard({
  feature,
}: Readonly<{ feature: FeatureDefinition }>) {
  return (
    <article className={cn("relative overflow-hidden", cardShellClass)}>
      {feature.visualAccent === "security" && (
        <SecurityMotif className="pointer-events-none absolute right-2 top-2 h-20 w-32 text-paxillin-sage/35 sm:right-3 sm:top-3 sm:h-24 sm:w-36" />
      )}

      <div className="relative px-7 py-8 sm:px-10 sm:py-10">
        <div className="mb-6 max-w-xl space-y-3 sm:mb-8 sm:space-y-3.5">
          <h2 className="font-heading text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-paxillin-secondary sm:text-[2rem]">
            {feature.title}
          </h2>
          <p className="text-[0.9375rem] font-medium leading-snug text-paxillin-ink/88 sm:text-base sm:leading-relaxed">
            {feature.headline}
          </p>
          <p className="text-sm leading-relaxed text-paxillin-ink/58 sm:text-[0.9375rem] sm:leading-[1.65]">
            {feature.subtext}
          </p>
        </div>

        <ul className="border-t border-[#E4DDD4]/70">
          {feature.highlights.map(({ text, Icon }) => (
            <li
              key={`${feature.title}-${text}`}
              className="flex items-center gap-3 border-b border-[#E4DDD4]/55 py-3.5 last:border-b-0 sm:gap-3.5 sm:py-4"
            >
              <Icon
                className="h-[18px] w-[18px] shrink-0 select-none text-paxillin-sage"
                strokeWidth={1.5}
                aria-hidden
              />
              <span className="min-w-0 flex-1 text-[0.8125rem] font-medium leading-snug text-paxillin-ink/80 sm:text-sm sm:leading-relaxed">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
