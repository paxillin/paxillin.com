"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { PAXILLIN_LOGO_SRC } from "@/lib/brand";

type SpinMode = "idle" | "ramp" | "steady";

type PaxillinLogoMarkProps = Readonly<{
  className?: string;
  alt?: string;
}>;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const mq = globalThis.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/**
 * Branded mark; on pointer hover, eases in then holds 1 full rotation / 2s.
 */
export function PaxillinLogoMark({ className, alt = "Paxillin" }: PaxillinLogoMarkProps) {
  const reduceMotion = usePrefersReducedMotion();
  const hoveringRef = useRef(false);
  const [mode, setMode] = useState<SpinMode>("idle");

  const onPointerEnter = useCallback(() => {
    if (reduceMotion) return;
    hoveringRef.current = true;
    setMode("ramp");
  }, [reduceMotion]);

  const onPointerLeave = useCallback(() => {
    hoveringRef.current = false;
    setMode("idle");
  }, []);

  const onAnimationEnd = useCallback((e: React.AnimationEvent<HTMLImageElement>) => {
    if (!e.animationName?.toLowerCase().includes("paxillin-logo-ramp")) return;
    if (hoveringRef.current) setMode("steady");
  }, []);

  return (
    <img
      src={PAXILLIN_LOGO_SRC}
      alt={alt}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onAnimationEnd={onAnimationEnd}
      className={cn(
        "inline-block shrink-0 will-change-transform",
        !reduceMotion && mode === "ramp" && "animate-paxillin-logo-ramp",
        !reduceMotion && mode === "steady" && "animate-paxillin-logo-steady",
        className
      )}
    />
  );
}
