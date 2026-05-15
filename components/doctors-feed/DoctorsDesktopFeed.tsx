"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  Bookmark,
  Briefcase,
  ChevronRight,
  Compass,
  Eye,
  Heart,
  Home,
  LogOut,
  MessageCircle,
  MessageSquare,
  Repeat2,
  Search,
  Share2,
  Users,
  type LucideIcon,
} from "lucide-react";
import { PaxillinLogoMark } from "@/components/brand/PaxillinLogoMark";
import { cn } from "@/lib/utils";
import { useState } from "react";

function portrait(gender: "men" | "women", index: number) {
  return `https://randomuser.me/api/portraits/${gender}/${index}.jpg`;
}

const trending = [
  {
    title: "FDA Approves New Alzheimer's Therapy",
    readers: "12.4K readers",
    time: "2h ago",
  },
  {
    title: "Updated Hypertension Guidelines: What Changed",
    readers: "8.1K readers",
    time: "5h ago",
  },
  {
    title: "Telehealth Billing Codes — Q2 Clarifications",
    readers: "4.2K readers",
    time: "1d ago",
  },
] as const;

const suggestions = [
  {
    name: "Boston Children's Hospital",
    subtitle: "Hospital · Boston, MA",
    action: "Follow" as const,
    type: "org" as const,
  },
  {
    name: "Dr. Michael Chen",
    subtitle: "Cardiology · Stanford",
    action: "Connect" as const,
    type: "person" as const,
    portrait: { gender: "men" as const, index: 45 },
  },
  {
    name: "Mass General Brigham",
    subtitle: "Health system",
    action: "Follow" as const,
    type: "org" as const,
  },
] as const;

export function DoctorsDesktopFeed() {
  const [segment, setSegment] = useState<"professions" | "organizations">(
    "professions",
  );

  return (
    <div className="flex min-h-screen bg-[#f4f6f8] pb-[calc(4.5rem+env(safe-area-inset-bottom))] font-sans text-paxillin-ink antialiased lg:pb-0">
      {/* Left rail — desktop only */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[72px] shrink-0 flex-col items-center border-r border-paxillin-mist/40 bg-white py-4 lg:flex">
        <Link
          href="/"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-paxillin-mist/50 bg-paxillin-parchment/40"
          aria-label="Paxillin home"
        >
          <PaxillinLogoMark className="h-8 w-8 object-contain" />
        </Link>
        <nav className="mt-8 flex flex-1 flex-col items-center gap-1" aria-label="Primary">
          <NavIcon icon={Home} label="Home" active />
          <NavIcon icon={Compass} label="Explore" />
          <NavIcon icon={Users} label="Network" />
          <NavIcon icon={MessageCircle} label="Messages" />
          <NavIcon icon={Bell} label="Notifications" />
          <NavIcon icon={Briefcase} label="Opportunities" />
        </nav>
        <button
          type="button"
          className="mt-auto flex h-11 w-11 items-center justify-center rounded-xl text-paxillin-ink/45 transition-colors hover:bg-paxillin-parchment/60 hover:text-paxillin-ink/70"
          aria-label="Sign out"
        >
          <LogOut className="h-5 w-5" strokeWidth={1.75} />
        </button>
      </aside>

      <div className="flex min-h-screen min-w-0 flex-1 flex-col pl-0 lg:pl-[72px]">
        {/* Top bar */}
        <header className="sticky top-0 z-30 border-b border-paxillin-mist/35 bg-white/95 backdrop-blur-md">
          <div className="flex items-center justify-between gap-3 border-b border-paxillin-mist/25 px-4 py-2.5 lg:hidden">
            <Link
              href="/"
              className="flex min-w-0 items-center gap-2"
              aria-label="Paxillin home"
            >
              <PaxillinLogoMark className="h-9 w-9 shrink-0 object-contain" />
              <span className="truncate font-heading text-lg font-semibold text-paxillin-secondary">
                Paxillin
              </span>
            </Link>
            <div className="flex min-w-0 items-center gap-2">
              <Image
                src={portrait("women", 65)}
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-white"
              />
              <div className="hidden min-w-0 text-left sm:block">
                <p className="truncate text-sm font-semibold text-paxillin-secondary">
                  Joanna Rhyne
                </p>
                <p className="truncate text-xs text-paxillin-ink/55">
                  Senior Dr.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-4 py-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:px-6">
            <div className="relative min-w-0 w-full sm:min-w-[200px] sm:flex-1 lg:max-w-xl">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-paxillin-ink/35"
                aria-hidden
              />
              <input
                type="search"
                placeholder="Search physicians, organizations…"
                className="w-full rounded-full border border-paxillin-mist/60 bg-[#f4f6f8] py-2.5 pl-10 pr-4 text-sm text-paxillin-ink placeholder:text-paxillin-ink/45 outline-none ring-primary/30 transition-shadow focus:border-primary/40 focus:bg-white focus:ring-2"
              />
            </div>

            <div className="flex w-full min-w-0 flex-wrap items-center justify-between gap-3 sm:w-auto sm:justify-start">
              <div className="flex items-center gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-sm bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-sm bg-blue-500" />
                <span className="h-2.5 w-2.5 rounded-sm bg-violet-500" />
                <span className="h-2.5 w-2.5 rounded-sm bg-amber-400" />
              </div>
              <div
                className="flex min-w-0 flex-1 rounded-full border border-paxillin-mist/60 bg-[#f4f6f8] p-0.5 text-[11px] font-medium sm:flex-initial sm:text-xs"
                role="tablist"
                aria-label="Directory scope"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={segment === "professions"}
                  className={cn(
                    "min-w-0 flex-1 truncate rounded-full px-2.5 py-1.5 transition-colors sm:flex-initial sm:px-3",
                    segment === "professions"
                      ? "bg-white text-paxillin-primary shadow-sm"
                      : "text-paxillin-ink/55 hover:text-paxillin-ink/75",
                  )}
                  onClick={() => setSegment("professions")}
                >
                  Professions
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={segment === "organizations"}
                  className={cn(
                    "min-w-0 flex-1 truncate rounded-full px-2.5 py-1.5 transition-colors sm:flex-initial sm:px-3",
                    segment === "organizations"
                      ? "bg-white text-paxillin-primary shadow-sm"
                      : "text-paxillin-ink/55 hover:text-paxillin-ink/75",
                  )}
                  onClick={() => setSegment("organizations")}
                >
                  <span className="sm:hidden">Orgs</span>
                  <span className="hidden sm:inline">Organizations</span>
                </button>
              </div>
            </div>

            <div className="hidden items-center gap-3 border-l border-paxillin-mist/40 pl-4 lg:flex">
              <Image
                src={portrait("women", 65)}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-paxillin-secondary">
                  Joanna Rhyne
                </p>
                <p className="text-xs text-paxillin-ink/55">Senior Dr.</p>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-6 px-3 py-4 sm:px-4 sm:py-6 lg:flex-row lg:items-start lg:px-6">
          {/* Main feed */}
          <main className="min-w-0 w-full flex-1 space-y-4 lg:max-w-2xl">
            <article className="overflow-hidden rounded-xl border border-paxillin-mist/45 bg-white shadow-card sm:rounded-2xl">
              <div className="border-b border-paxillin-mist/35 px-4 pb-4 pt-4 sm:px-5 sm:pt-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex gap-3">
                    <Image
                      src={portrait("women", 65)}
                      alt=""
                      width={48}
                      height={48}
                      className="h-12 w-12 shrink-0 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-paxillin-secondary">
                          Joanna Rhyne
                        </span>
                        <span className="text-xs text-paxillin-ink/45">
                          · 3h ago
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs leading-relaxed text-paxillin-ink/60">
                        Internal Medicine · UCSF Health · San Francisco
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-sky-100 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-sky-800">
                    Referral
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-paxillin-ink/85 sm:text-[15px]">
                  Seeking a{" "}
                  <strong className="font-semibold text-paxillin-secondary">
                    dermatology
                  </strong>{" "}
                  colleague for a complex psoriasis case — patient has failed
                  first-line biologics. Happy to share records via secure
                  channel. Who&apos;s available for a brief curbside this week?
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-paxillin-mist/30 px-4 py-3 text-xs text-paxillin-ink/50 sm:px-5 sm:gap-x-6">
                <span className="flex items-center gap-1">
                  <Heart className="h-4 w-4" strokeWidth={1.75} /> 1.3K
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" strokeWidth={1.75} /> 201
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="h-4 w-4" strokeWidth={1.75} aria-hidden />{" "}
                  100K views
                </span>
              </div>
              <div className="flex flex-wrap gap-2 px-4 py-3 sm:px-5">
                <PostAction icon={Share2} label="Share" />
                <PostAction icon={Repeat2} label="Reshare" />
                <PostAction icon={Bookmark} label="Save" />
              </div>
              <div className="border-t border-paxillin-mist/30 bg-paxillin-parchment/25 px-4 py-3 text-xs leading-relaxed text-paxillin-ink/55 sm:px-5">
                <span className="font-medium text-paxillin-sage">
                  6 doctors
                </span>{" "}
                found this clinically useful ·{" "}
                <span className="font-medium text-paxillin-ink/65">
                  12 Connections
                </span>{" "}
                commented
              </div>
            </article>

            <article className="overflow-hidden rounded-xl border border-paxillin-mist/45 bg-white shadow-card sm:rounded-2xl">
              <div className="px-4 pb-4 pt-4 sm:px-5 sm:pt-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-paxillin-secondary text-sm font-bold text-white">
                      MG
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold text-paxillin-secondary">
                          Mass General Hospital
                        </span>
                        <span className="text-xs text-paxillin-ink/45">
                          · 5h ago
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs text-paxillin-ink/55">
                        Organization
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-900">
                    Case Discussion
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-paxillin-ink/85 sm:text-[15px]">
                  Interesting chest imaging from our pulmonary service —{" "}
                  <strong className="font-semibold text-paxillin-secondary">
                    differential includes infectious vs inflammatory etiology
                  </strong>
                  . Peer thoughts welcome on management pathway before IR
                  referral.
                </p>
              </div>
              <div className="relative aspect-[4/3] w-full bg-paxillin-mist/20 sm:aspect-[16/10]">
                <Image
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80"
                  alt="Chest radiograph for case discussion"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 672px"
                  priority
                />
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-paxillin-mist/30 px-4 py-3 text-xs text-paxillin-ink/50 sm:px-5 sm:gap-x-6">
                <span className="flex items-center gap-1">
                  <Heart className="h-4 w-4" strokeWidth={1.75} /> 892
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" strokeWidth={1.75} /> 64
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="h-4 w-4" strokeWidth={1.75} aria-hidden />{" "}
                  24K views
                </span>
              </div>
            </article>
          </main>

          {/* Trending + suggestions — stack below feed & tablet grid; right column on lg+ */}
          <aside className="grid min-w-0 gap-5 pb-2 sm:grid-cols-2 sm:gap-4 lg:block lg:w-[280px] lg:max-w-[280px] lg:shrink-0 lg:space-y-5 lg:pb-0 xl:w-[300px] xl:max-w-[300px]">
            <section className="rounded-xl border border-paxillin-mist/45 bg-white p-4 shadow-card sm:rounded-2xl">
              <h2 className="font-heading text-lg font-semibold text-paxillin-secondary">
                Trending discussions
              </h2>
              <ul className="mt-4 space-y-4">
                {trending.map((item) => (
                  <li key={item.title}>
                    <button
                      type="button"
                      className="group flex w-full text-left"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold leading-snug text-paxillin-secondary transition-colors group-hover:text-primary">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs text-paxillin-ink/45">
                          {item.readers} · {item.time}
                        </p>
                      </div>
                      <ChevronRight className="ml-2 h-4 w-4 shrink-0 text-paxillin-ink/30 transition-colors group-hover:text-primary" />
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-xl border border-paxillin-mist/45 bg-white p-4 shadow-card sm:rounded-2xl sm:max-lg:col-span-2">
              <h2 className="font-heading text-lg font-semibold text-paxillin-secondary">
                Suggested for you
              </h2>
              <ul className="mt-4 space-y-4">
                {suggestions.map((s) => (
                  <li
                    key={s.name}
                    className="flex items-center justify-between gap-2"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      {s.type === "org" ? (
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                          {s.name
                            .split(" ")
                            .map((w) => w[0])
                            .join("")
                            .slice(0, 2)}
                        </div>
                      ) : (
                        <Image
                          src={portrait(s.portrait.gender, s.portrait.index)}
                          alt=""
                          width={40}
                          height={40}
                          className="h-10 w-10 shrink-0 rounded-full object-cover"
                        />
                      )}
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-paxillin-secondary">
                          {s.name}
                        </p>
                        <p className="truncate text-xs text-paxillin-ink/50">
                          {s.subtitle}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="shrink-0 rounded-full border border-primary/35 bg-white px-3 py-1 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                      {s.action}
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </div>

      {/* Mobile bottom navigation */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 flex items-stretch justify-around border-t border-paxillin-mist/45 bg-white/95 px-1 pb-[env(safe-area-inset-bottom)] pt-1.5 backdrop-blur-md lg:hidden"
        aria-label="Primary"
      >
        <BottomNavIcon icon={Home} label="Home" active />
        <BottomNavIcon icon={Compass} label="Explore" />
        <BottomNavIcon icon={Users} label="Network" />
        <BottomNavIcon icon={MessageCircle} label="Messages" />
        <BottomNavIcon icon={Bell} label="Alerts" />
        <BottomNavIcon icon={Briefcase} label="Jobs" />
      </nav>
    </div>
  );
}

function BottomNavIcon({
  icon: Icon,
  label,
  active,
}: {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex min-h-[44px] min-w-[44px] flex-1 flex-col items-center justify-center gap-0.5 rounded-lg px-1 py-1 text-[10px] font-medium transition-colors",
        active
          ? "text-primary"
          : "text-paxillin-ink/45 hover:bg-paxillin-parchment/60 hover:text-paxillin-ink/75",
      )}
    >
      <Icon className="h-5 w-5 shrink-0" strokeWidth={active ? 2.25 : 1.75} />
      <span className="max-w-full truncate">{label}</span>
    </button>
  );
}

function NavIcon({
  icon: Icon,
  label,
  active,
}: {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-xl transition-colors",
        active
          ? "bg-primary/12 text-primary"
          : "text-paxillin-ink/45 hover:bg-paxillin-parchment/70 hover:text-paxillin-ink/75",
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1.75} />
    </button>
  );
}

function PostAction({
  icon: Icon,
  label,
}: {
  icon: LucideIcon;
  label: string;
}) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full border border-paxillin-mist/50 bg-white px-3 py-1.5 text-xs font-medium text-paxillin-ink/65 transition-colors hover:border-primary/30 hover:text-primary"
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={2} />
      {label}
    </button>
  );
}
