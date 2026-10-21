"use client"

import { Hero } from '@/components/home/Hero';
import { MentorshipCarousel } from '@/components/home/MentorshipCarousel';
import { Features } from '@/components/home/Features';
import { HowItWorks } from '@/components/home/HowItWorks';
import { UseCases } from '@/components/home/UseCases';
import { FAQ } from '@/components/home/FAQ';
import { CTA } from '@/components/home/CTA';
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <MentorshipCarousel />
      <Features />
      <HowItWorks />
      <UseCases />
      <FAQ />
      <CTA />
    </div>
  );
}
