"use client";

import {
  BadgeCheck,
  Bookmark,
  MessageSquare,
  Repeat2,
  Share2,
  ThumbsUp,
  UserPlus,
} from "lucide-react";

/**
 * A faithful HTML recreation of Paxillin app feed cards,
 * built from the app's design language (navy/cyan, white cards, pills).
 */
const AppPreview = () => {
  return (
    <div className="relative w-full max-w-md mx-auto text-left select-none">
      {/* soft glow behind */}
      <div className="absolute -inset-6 bg-gradient-to-br from-pax-sky via-white to-pax-mist rounded-[2.5rem] blur-0" />

      {/* Referral post card */}
      <div className="relative pax-card p-5 shadow-[0_16px_40px_rgba(25,63,99,0.12)]">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-pax-navy text-white flex items-center justify-center font-semibold text-sm">
              JR
            </div>
            <div>
              <p className="text-sm font-semibold text-pax-ink flex items-center gap-1">
                Dr. Joanna Rhyne
                <BadgeCheck className="w-4 h-4 text-pax-cyan" />
              </p>
              <p className="text-xs text-pax-slate">
                Director &amp; HoD Urology · Renal Transplant · 2h
              </p>
            </div>
          </div>
          <span className="pax-chip">Referral</span>
        </div>

        <p className="text-sm text-pax-ink leading-relaxed mb-4">
          Seeking a <span className="font-semibold">pediatric cardiologist</span>{" "}
          for a 6yo patient presenting with asymptomatic murmur. ECHO shows
          minor VSD. Looking for consultation to rule out further intervention.
        </p>

        <div className="flex items-center justify-between border-t border-pax-line pt-3 text-pax-slate">
          <span className="flex items-center gap-1.5 text-xs font-medium text-pax-cyan">
            <ThumbsUp className="w-4 h-4" /> 13K
          </span>
          <span className="flex items-center gap-1.5 text-xs">
            <MessageSquare className="w-4 h-4" /> 201
          </span>
          <span className="flex items-center gap-1.5 text-xs">
            <Repeat2 className="w-4 h-4" /> Reshare
          </span>
          <span className="flex items-center gap-1.5 text-xs">
            <Share2 className="w-4 h-4" /> Share
          </span>
          <span className="flex items-center gap-1.5 text-xs">
            <Bookmark className="w-4 h-4" /> Save
          </span>
        </div>
      </div>

      {/* Poll card */}
      <div className="relative pax-card p-5 mt-4 ml-6 -mr-2 shadow-[0_16px_40px_rgba(25,63,99,0.10)]">
        <p className="text-sm font-semibold text-pax-ink mb-3">
          Which area will have the biggest impact on patient outcomes in the
          next 5 years?
        </p>
        <div className="space-y-2">
          {[
            { label: "Genomics & Precision Medicine", pct: 42 },
            { label: "AI-Assisted Diagnostics", pct: 31 },
            { label: "Remote Patient Monitoring", pct: 18 },
          ].map((opt, i) => (
            <div
              key={opt.label}
              className={`relative overflow-hidden rounded-full border px-4 py-2 text-xs font-medium flex justify-between items-center ${
                i === 0
                  ? "border-pax-cyan text-pax-ink"
                  : "border-pax-line text-pax-slate"
              }`}
            >
              <div
                className="absolute inset-y-0 left-0 bg-pax-sky"
                style={{ width: `${opt.pct}%` }}
              />
              <span className="relative">{opt.label}</span>
              <span className="relative font-semibold text-pax-cyan">
                {opt.pct}%
              </span>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-pax-slate mt-3">
          1,284 votes · 2 days left
        </p>
      </div>

      {/* Connect suggestion */}
      <div className="relative pax-card px-4 py-3 mt-4 mr-10 flex items-center justify-between shadow-[0_16px_40px_rgba(25,63,99,0.10)]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-pax-sky text-pax-cyan flex items-center justify-center font-semibold text-xs">
            AC
          </div>
          <div>
            <p className="text-xs font-semibold text-pax-ink flex items-center gap-1">
              Dr. Alexander Chen <BadgeCheck className="w-3.5 h-3.5 text-pax-cyan" />
            </p>
            <p className="text-[11px] text-pax-slate">Surgeon · Jaipur</p>
          </div>
        </div>
        <button className="pax-btn-outline !px-4 !py-1.5 !text-xs pointer-events-none">
          <UserPlus className="w-3.5 h-3.5" /> Connect
        </button>
      </div>
    </div>
  );
};

export default AppPreview;
