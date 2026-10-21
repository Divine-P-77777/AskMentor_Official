import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  GraduationCap,

  Users,

  ArrowRight,
  MessageSquare,

  CheckCircle2,

  Compass
} from 'lucide-react';

import { useCaseList } from './useCases';

export const metadata: Metadata = {
  title: 'Use Cases | AskMentor AI Mentorship',
  description:
    'Explore how students, job seekers, researchers, developers, and institutions leverage AskMentor for personalized, 24/7 AI-powered mentorship.',
};


export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-orange-100 selection:text-orange-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-orange-50/40 via-pink-50/20 to-white border-b border-gray-100">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] h-[320px] bg-gradient-to-tr from-orange-200/40 via-pink-200/30 to-amber-200/20 blur-3xl rounded-full -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-bold bg-white text-gray-900 border border-orange-200/80 shadow-sm">
            <Compass className="w-4 h-4 text-orange-600" />
            <span>Platform Use Cases • Tailored for Every Ambition</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto">
            Guidance for every journey,{' '}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              powered by AI personas
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto">
            From late-night exam prep to high-stakes interview simulations, explore how students, developers, researchers, and institutions achieve clarity with AskMentor.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-2xl shadow-lg shadow-orange-500/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Explore AI Personas
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/billing"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gray-800 font-bold rounded-2xl border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-all"
            >
              How Billing Works
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases Deep Dive List */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 lg:space-y-28">
            {useCaseList.map((useCase, index) => {
              const Icon = useCase.icon;
              const isEven = index % 2 === 1;

              return (
                <div
                  key={useCase.id}
                  id={useCase.id}
                  className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-center ${isEven ? 'lg:grid-flow-dense' : ''
                    }`}
                >
                  {/* Media Column */}
                  <div
                    className={`lg:col-span-5 ${isEven ? 'lg:col-start-8' : ''
                      }`}
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                      <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                        <Image
                          src={useCase.image}
                          alt={useCase.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      </div>

                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="p-2 rounded-xl bg-white/20 backdrop-blur-md">
                            <Icon className="w-5 h-5 text-white" />
                          </span>
                          <span className="text-xs uppercase font-bold tracking-wider text-orange-200">
                            {useCase.badge}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold leading-snug">{useCase.subtitle}</h4>
                      </div>
                    </div>

                    {/* Features Pill tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {useCase.features.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-gray-50 text-gray-700 border border-gray-200/80"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 ${isEven ? 'lg:col-start-1' : ''
                      }`}
                  >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border shadow-2xs">
                      <span className={`px-2 py-0.5 rounded-md ${useCase.badgeColor}`}>
                        {useCase.badge}
                      </span>
                      <span className="text-gray-500">Target: {useCase.targetAudience}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-4">
                      {useCase.title}
                    </h2>

                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                      {useCase.description}
                    </p>

                    {/* Key Benefits */}
                    <div className="mb-6 space-y-2.5">
                      <p className="text-xs font-black uppercase tracking-wider text-gray-400">
                        Why AskMentor Excels Here
                      </p>
                      {useCase.keyBenefits.map((ben, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{ben}</span>
                        </div>
                      ))}
                    </div>

                    {/* Sample Prompts Box */}
                    <div className="p-5 rounded-2xl bg-orange-50/50 border border-orange-100 mb-6">
                      <p className="text-xs font-black uppercase tracking-wider text-orange-800 mb-3 flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-orange-600" />
                        Sample Prompts Mentees Ask:
                      </p>
                      <ul className="space-y-2">
                        {useCase.samplePrompts.map((prompt, pIdx) => (
                          <li
                            key={pIdx}
                            className="text-xs sm:text-sm text-gray-800 font-medium italic bg-white/80 p-2.5 rounded-xl border border-orange-100/70"
                          >
                            {prompt}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/explore"
                      className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 hover:underline decoration-orange-500 underline-offset-4 transition-all"
                    >
                      <span>Find {useCase.badge} Mentors</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dual Value Proposition: Learners vs Mentors */}
      <section className="py-20 md:py-28 bg-gray-50/70 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              Designed for both sides of the mentorship equation
            </h2>
            <p className="text-gray-600 mt-4 text-base sm:text-lg">
              Whether you are an ambitious student accelerating your learning or a seasoned professional scaling your legacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* For Learners */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">For Learners & Students</h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                Break free from generic LLM hallucinations and expensive $100/hr consultant bookings.
              </p>
              <ul className="space-y-3.5 text-sm sm:text-base text-gray-700 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</div>
                  <span><strong>Zero Schedule Conflicts:</strong> Ask questions at 2 AM the night before an exam or interview.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</div>
                  <span><strong>No Rigid Subscriptions:</strong> Pay-as-you-go wallet. Unlock only the mentors you need.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</div>
                  <span><strong>Speech & Text Dual Modes:</strong> Switch from fast text chat to live voice talk seamlessly.</span>
                </li>
              </ul>
              <Link
                href="/explore"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-orange-500 text-white font-bold rounded-2xl hover:bg-orange-600 transition-colors shadow-md"
              >
                Start Exploring Mentors
              </Link>
            </div>

            {/* For Mentors */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">For Mentors & Alumni</h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                Scale your presence, protect your calendar from burnout, and earn from your hard-won expertise.
              </p>
              <ul className="space-y-3.5 text-sm sm:text-base text-gray-700 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</div>
                  <span><strong>1-Click Document Ingestion:</strong> Upload your papers, resume, syllabus, and let RAG do the rest.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</div>
                  <span><strong>70% Direct Revenue Share:</strong> Keep 70% of every unlock fee directly in your mentor wallet.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</div>
                  <span><strong>Full Pricing Autonomy:</strong> Set your own unlock rate or offer open-access free mentorship.</span>
                </li>
              </ul>
              <Link
                href="/signup"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-colors shadow-md"
              >
                Create Your Mentor Persona
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow: 3 Steps to Success */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 text-orange-800 border border-orange-200 mb-4">
              Simple Workflow
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              How to get started in 3 steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Browse or Create',
                desc: 'Explore verified personas across academics, coding, startups, and career prep—or upload your documents to build your own.',
              },
              {
                step: '02',
                title: 'Interact via Chat or Voice',
                desc: 'Ask deep technical questions or turn on Live Talk mode for real-time duplex voice conversations.',
              },
              {
                step: '03',
                title: 'Pay As You Go',
                desc: 'Top up your wallet with flexible amounts. Unlock bots with creator-defined credit packs—no forced monthly plans.',
              },
            ].map((st, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-gray-50 border border-gray-200 relative">
                <span className="text-5xl font-black text-orange-400/40 absolute top-6 right-6">
                  {st.step}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 mt-4">{st.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fb923c_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6">
            Experience the future of personalized guidance
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Find the exact mentor persona for your ambition, or clone your wisdom today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/explore"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-orange-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Explore Mentors Now
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-gray-800 text-white font-bold rounded-2xl hover:bg-gray-700 border border-gray-700 transition-all"
            >
              Learn About AskMentor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
