import { cn } from "@/lib/utils";

/**
 * Marketing / editorial forms: soft rectangle inputs (search-bar style),
 * neutral gray border, ink focus — no brand blue, not full pill.
 */
export const marketingInputClasses =
  "flex h-11 w-full rounded-button border border-neutral-300 bg-white px-5 font-montserrat text-sm text-paxillin-ink shadow-none transition-[border-color,box-shadow] duration-200 placeholder:text-paxillin-ink/40 outline-none focus-visible:border-paxillin-ink/35 focus-visible:ring-2 focus-visible:ring-paxillin-ink/10 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50";

export const marketingInputErrorClasses =
  "border-red-400 focus-visible:border-red-500 focus-visible:ring-red-500/20";

export const marketingTextareaClasses =
  "flex min-h-[120px] w-full resize-y rounded-button border border-neutral-300 bg-white px-5 py-3 font-montserrat text-sm text-paxillin-ink shadow-none transition-[border-color,box-shadow] duration-200 placeholder:text-paxillin-ink/40 outline-none focus-visible:border-paxillin-ink/35 focus-visible:ring-2 focus-visible:ring-paxillin-ink/10 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50";

export const marketingTextareaErrorClasses = marketingInputErrorClasses;

export const marketingLabelClasses =
  "mb-2 block text-left text-sm font-medium text-paxillin-ink";

export function marketingInputClassName(error?: boolean) {
  return cn(marketingInputClasses, error && marketingInputErrorClasses);
}

export function marketingTextareaClassName(error?: boolean) {
  return cn(marketingTextareaClasses, error && marketingTextareaErrorClasses);
}
