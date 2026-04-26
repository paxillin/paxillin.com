"use client";

import type { ReactNode } from "react";
import { CheckCircle } from "lucide-react";
import { PaxillinLogoMark } from "@/components/brand/PaxillinLogoMark";

export type FeaturePhoneScreenProps = {
  icon: string;
  title: string;
  mockupFeature: string;
};

export function FeaturePhoneScreenContent({
  icon,
  title,
  mockupFeature,
}: FeaturePhoneScreenProps) {
  return (
    <>
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-paxillin-mist/60 bg-white">
        <img src={icon} alt="" className="h-8 w-8 object-contain opacity-90" />
      </div>

      <h3 className="mb-2 text-center font-heading text-xl font-semibold text-paxillin-secondary">
        {title}
      </h3>

      <p className="mb-4 text-center text-sm leading-relaxed text-paxillin-ink/60">
        {mockupFeature}
      </p>

      <div className="min-h-0 flex-1 space-y-3">
        <div className="rounded-xl border border-paxillin-mist/40 bg-white/90 p-3 shadow-card">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-paxillin-mist/50 bg-white">
              <img src={icon} alt="" className="h-5 w-5 object-contain" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-2 h-3 rounded bg-paxillin-mist/45" />
              <div className="h-2 w-2/3 rounded bg-paxillin-mist/30" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-paxillin-mist/40 bg-white/90 p-3 shadow-card">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-paxillin-mist/50 bg-white">
              <CheckCircle className="h-5 w-5 text-paxillin-sage" strokeWidth={1.5} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-2 h-3 rounded bg-paxillin-mist/45" />
              <div className="h-2 w-3/4 rounded bg-paxillin-mist/30" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function FeaturePhoneShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex justify-center select-none">
      <div className="h-[640px] w-80 rounded-[3rem] bg-gradient-to-br from-gray-800 to-gray-900 p-2 shadow-2xl">
        <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-white">
          <div className="absolute inset-0 flex flex-col bg-paxillin-parchment/80 p-6">
            <div className="mb-6 flex items-center gap-3">
              <PaxillinLogoMark className="h-8 w-8" alt="" />
              <span className="font-heading text-lg font-semibold text-paxillin-secondary">
                Paxillin
              </span>
            </div>

            <div className="flex min-h-0 flex-1 flex-col">{children}</div>

            <div className="flex justify-around border-t border-paxillin-mist/40 pt-4">
              <div className="h-6 w-6 rounded-full bg-paxillin-sage/25" />
              <div className="h-6 w-6 rounded-full bg-paxillin-mist/50" />
              <div className="h-6 w-6 rounded-full bg-paxillin-mist/50" />
              <div className="h-6 w-6 rounded-full bg-paxillin-mist/50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturePhoneMockup(props: FeaturePhoneScreenProps) {
  return (
    <FeaturePhoneShell>
      <FeaturePhoneScreenContent {...props} />
    </FeaturePhoneShell>
  );
}
