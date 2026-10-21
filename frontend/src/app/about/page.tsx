import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Brain,
  Sparkles,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Mic,
  Database,
  Users,
  Award,
  ArrowRight,
  GraduationCap,
  HeartHandshake,
  TrendingUp,
  FileText,
  Clock,
  Compass
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About AskMentor | AI Digital Mentorship Platform',
  description:
    'AskMentor bridges the mentorship gap by turning knowledge from alumni, professors, and industry leaders into 24/7 interactive AI personas.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-orange-100 selection:text-orange-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-orange-50/50 via-white to-white border-b border-gray-100">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-orange-200/40 via-pink-200/30 to-amber-200/20 blur-3xl rounded-full -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-bold bg-orange-100/70 text-orange-800 border border-orange-200/80 shadow-sm">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>Knowledge Personified • About AskMentor</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15] mb-6">
              Democratizing mentorship through{' '}
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                AI digital personas
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
              AskMentor empowers alumni, professors, researchers, and tech leaders to replicate their wisdom,
              experience, and tone into interactive AI clones—giving students and mentees on-demand guidance anytime, anywhere.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/explore"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-2xl shadow-lg shadow-orange-500/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Explore Personas
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/use-cases"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gray-800 font-bold rounded-2xl border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-all"
              >
                <Compass className="w-4 h-4 text-orange-500" />
                View Use Cases
              </Link>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 max-w-5xl mx-auto">
            {[
              { label: 'Mentorship Availability', value: '24 / 7', sub: 'Instant responses anytime' },
              { label: 'Token Inference', value: '< 600ms', sub: 'Groq-powered streaming' },
              { label: 'Creator Revenue Share', value: '70%', sub: 'Earn on each bot unlock' },
              { label: 'Data Isolation', value: '100% RLS', sub: 'Strict multi-tenant security' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white/80 backdrop-blur-md border border-orange-100/80 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <p className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-gray-900">{stat.label}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem & The Solution */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-red-700 border border-red-100 mb-4">
                The Mentorship Dilemma
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-6">
                Why human mentorship alone cannot scale
              </h2>
              <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                <p>
                  Every year, millions of students struggle with critical decisions: course roadmaps, coding interview strategies, research methodologies, and career transitions.
                </p>
                <p>
                  Meanwhile, the best mentors—successful alumni, college professors, engineering managers, and startup founders—face immense calendar constraints. They can only mentor 2–3 people a week, leaving hundreds of messages unanswered.
                </p>
                <p className="font-medium text-gray-800">
                  Static FAQs, generic textbooks, and canned chat bots lack the authentic voice, specific syllabus knowledge, and personal philosophies that make mentorship truly transformational.
                </p>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-orange-50 via-pink-50/50 to-white border border-orange-100 shadow-sm relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 text-orange-800 border border-orange-200 mb-4">
                The AskMentor Breakthrough
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-4">
                Knowledge Personified: Real Experts, Infinite Scale
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                AskMentor solves this imbalance by providing creators with an end-to-end platform to create their verified AI clones.
              </p>
              <ul className="space-y-3.5 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</div>
                  <span><strong>Grounded Ground-Truth RAG:</strong> AI personas only answer from the expert’s verified documents, papers, resumes, and code samples.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</div>
                  <span><strong>Dual Text & Voice Interaction:</strong> Mentees can chat via fast SSE streaming or practice live voice interviews with sub-second speech synthesis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</div>
                  <span><strong>Decentralized Creator Billing:</strong> Mentors control their access rules. Offer guidance free, or set unlock rates and keep 70% of earnings.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering & Technology Pillars */}
      <section className="py-20 md:py-28 bg-gray-50/60 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-bold bg-white text-gray-800 border border-gray-200 shadow-sm">
              <Cpu className="w-4 h-4 text-orange-500" />
              <span>State-of-the-Art Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              Built on high-speed, modern AI infrastructure
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Behind every persona response is a distributed, multi-modal pipeline engineered for sub-second latency and pinpoint accuracy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-6 h-6 text-orange-500" />,
                title: '3-Pass Hybrid Ingestion',
                desc: 'Upload PDFs, research publications, resumes, and web URLs. Optical Character Recognition (OCR) via Tesseract & PyMuPDF extracts flawless text even from scanned academic papers.',
              },
              {
                icon: <Database className="w-6 h-6 text-pink-500" />,
                title: 'Nomic Embeddings + pgvector',
                desc: 'Text chunks are encoded into 768-dimensional dense vectors using Nomic Embeddings v1.5 / v2 MoE and indexed in Supabase pgvector for microsecond semantic similarity lookups.',
              },
              {
                icon: <Zap className="w-6 h-6 text-amber-500" />,
                title: 'Token-by-Token SSE Streaming',
                desc: 'Chat responses stream via Server-Sent Events (SSE) with Groq-accelerated LLaMA 3.3 70B inference, delivering conversational answers without frustrating loading spinners.',
              },
              {
                icon: <Mic className="w-6 h-6 text-emerald-500" />,
                title: 'Live Voice Talk Mode',
                desc: 'Real-time WebSocket duplex audio powered by Deepgram Speech-to-Text and human-like natural voice synthesis from Sarvam AI and ElevenLabs for mock interview practice.',
              },
              {
                icon: <Layers className="w-6 h-6 text-indigo-500" />,
                title: 'Rolling Context Memory',
                desc: 'A dynamic rolling window preserves dialogue continuity, persona tone, and prior conversational turns so every interaction feels deeply coherent.',
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
                title: 'Enterprise Multi-Tenant RLS',
                desc: 'Every document, vector chunk, and conversation session is strictly isolated using PostgreSQL Row Level Security (RLS) policies, guaranteeing complete privacy.',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-lg hover:border-orange-200 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-50 group-hover:bg-orange-50 flex items-center justify-center border border-gray-100 group-hover:border-orange-100 transition-colors mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Creator Economy & Billing Philosophy */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-50 text-orange-700 border border-orange-100 mb-4">
                Our Billing Philosophy
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                No rigid subscription plans. Fair, creator-set pricing.
              </h2>
              <p className="text-gray-600 mt-4 text-base sm:text-lg">
                Why doesn&apos;t AskMentor have expensive monthly SaaS subscription tiers? Because expertise is not one-size-fits-all.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bot Owners Set The Terms</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every persona creator (alumni, professor, or expert) decides whether their bot is 100% free or requires an unlock pack. Creators select from platform-aligned unlock tiers and receive a <strong>70% direct revenue share</strong> on all unlocks.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200">
                <div className="w-10 h-10 rounded-xl bg-pink-500 text-white flex items-center justify-center font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pay-As-You-Go Student Wallet</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Students aren&apos;t trapped in recurring $29/month subscription fees. You simply top up your prepaid wallet as needed (via Cashfree) and unlock only the mentors you actually need advice from.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-orange-50/60 border border-orange-100 flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-bold text-gray-900">Want to see credit costs and wallet details?</p>
                <p className="text-sm text-gray-600">Check our transparent credit consumption rules.</p>
              </div>
              <Link
                href="/billing"
                className="px-6 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-gray-800 transition-colors"
              >
                View Billing Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50/40 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Our Core Values</h2>
            <p className="text-gray-600 mt-2">The principles guiding the development of AskMentor.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <GraduationCap className="w-6 h-6 text-orange-500" />,
                title: 'Equal Opportunity',
                desc: 'Giving any student, regardless of background or geography, direct access to elite academic and industry mentorship.',
              },
              {
                icon: <Brain className="w-6 h-6 text-pink-500" />,
                title: 'Knowledge Authenticity',
                desc: 'Zero hallucinated credentials. Personas are strictly grounded in verified resumes, syllabus materials, and real expertise.',
              },
              {
                icon: <HeartHandshake className="w-6 h-6 text-amber-500" />,
                title: 'Creator Sovereignty',
                desc: 'Experts own their knowledge and time, earning fair compensation while multiplying their community impact.',
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
                title: 'Privacy & Integrity',
                desc: 'Conversations, queries, and uploaded documents are guarded by strict encryption and multi-tenant isolation.',
              },
            ].map((val, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-4">
                  {val.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{val.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{val.desc}</p>
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
            Ready to learn from the best or share your wisdom?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join hundreds of students finding clarity and mentors scaling their guidance without burning out.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/explore"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-orange-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Explore AI Mentors
            </Link>
            <Link
              href="/signup"
              className="px-8 py-4 bg-gray-800 text-white font-bold rounded-2xl hover:bg-gray-700 border border-gray-700 transition-all"
            >
              Create Your Mentor Persona
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
