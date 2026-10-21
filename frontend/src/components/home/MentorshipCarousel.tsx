'use client';

import {
  GraduationCap,
  Briefcase,
  Code2,
  Sparkles,
  BookOpen,
  TrendingUp,
  Compass,
  Users,
  Layers,
  LucideIcon
} from 'lucide-react';
import Link from 'next/link';

interface MentorshipItem {
  icon: LucideIcon;
  title: string;
  tag: string;
  gradient: string;
  borderHover: string;
}

const mentorshipAreas: MentorshipItem[] = [
  {
    icon: GraduationCap,
    title: 'Academic Guidance',
    tag: 'Universities & Exams',
    gradient: 'from-orange-500 to-amber-500',
    borderHover: 'hover:border-orange-300',
  },
  {
    icon: Briefcase,
    title: 'Career Acceleration',
    tag: 'Interviews & Placements',
    gradient: 'from-pink-500 to-rose-500',
    borderHover: 'hover:border-pink-300',
  },
  {
    icon: Code2,
    title: 'Software Engineering',
    tag: 'System Design & Code',
    gradient: 'from-teal-500 to-cyan-600',
    borderHover: 'hover:border-teal-300',
  },
  {
    icon: Sparkles,
    title: 'AI & Data Science',
    tag: 'LLMs, RAG & PyTorch',
    gradient: 'from-purple-500 to-indigo-600',
    borderHover: 'hover:border-purple-300',
  },
  {
    icon: BookOpen,
    title: 'Research Support',
    tag: 'Papers, Thesis & Defense',
    gradient: 'from-emerald-500 to-teal-600',
    borderHover: 'hover:border-emerald-300',
  },
  {
    icon: TrendingUp,
    title: 'Startup & Founders',
    tag: 'Pitch Decks & 0-to-1',
    gradient: 'from-amber-500 to-orange-600',
    borderHover: 'hover:border-amber-300',
  },
  {
    icon: Users,
    title: 'Mock Interview Prep',
    tag: 'STAR Behavioral & Tech',
    gradient: 'from-blue-500 to-cyan-600',
    borderHover: 'hover:border-blue-300',
  },
  {
    icon: Compass,
    title: 'Personal Leadership',
    tag: 'Mindset & Growth',
    gradient: 'from-rose-500 to-pink-600',
    borderHover: 'hover:border-rose-300',
  },
  {
    icon: Layers,
    title: 'Alumni Networks',
    tag: 'Department Scaling',
    gradient: 'from-violet-500 to-purple-600',
    borderHover: 'hover:border-violet-300',
  },
];

export function MentorshipCarousel() {
  // Duplicated list to achieve continuous seamless loop
  const marqueeItems = [
    ...mentorshipAreas,
    ...mentorshipAreas,
    ...mentorshipAreas,
    ...mentorshipAreas,
  ];

  return (
    <section className="relative w-full py-5 bg-gradient-to-r from-orange-50/40 via-white to-pink-50/40 border-y border-orange-100/70 overflow-hidden select-none">
      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-marquee-infinite {
          display: flex;
          width: max-content;
          animation: marqueeScroll 40s linear infinite;
          will-change: transform;
        }
        .animate-marquee-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Subtle label header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gray-500">
            Explore Mentorship Specializations
          </span>
        </div>
        <Link
          href="/explore"
          className="text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors flex items-center gap-1 group"
        >
          <span>View all personas</span>
          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </Link>
      </div>

      {/* Marquee Track Container with Left and Right Fade Masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left Edge Gradient Fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 md:w-48 z-20 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(255, 247, 240, 1) 0%, rgba(255, 247, 240, 0.9) 35%, rgba(255, 247, 240, 0) 100%)',
          }}
        />

        {/* Right Edge Gradient Fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 md:w-48 z-20 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 35%, rgba(255, 255, 255, 0) 100%)',
          }}
        />

        {/* Scrolling Strip */}
        <div className="animate-marquee-infinite flex gap-3.5 py-1.5">
          {marqueeItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={`${item.title}-${index}`}
                href="/explore"
                className={`group flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-sm border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 shrink-0 ${item.borderHover}`}
              >
                <div
                  className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-xs shrink-0 group-hover:scale-105 transition-transform duration-300`}
                >
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-[13px] font-bold text-gray-900 group-hover:text-orange-600 transition-colors whitespace-nowrap">
                    {item.title}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium whitespace-nowrap">
                    {item.tag}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
