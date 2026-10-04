import Link from 'next/link';
import { ArrowRight, Sparkles, MessageSquare, Shield, Clock, Brain, Mic } from 'lucide-react';
import Image from 'next/image';

export function CTA() {
    const highlights = [
        {
            title: 'Custom AI Personas',
            desc: 'Created from real resumes, papers & domain expertise',
            icon: Brain
        },
        {
            title: 'Text & Voice Modes',
            desc: 'Engage in natural text chat or real-time voice discussions',
            icon: Mic
        },
        {
            title: 'Private & Secure',
            desc: 'Encrypted document processing and confidential conversations',
            icon: Shield
        },
        {
            title: 'Available On Demand',
            desc: 'Get answers and practice interviews whenever you need',
            icon: Clock
        }
    ];

    return (
        <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative rounded-[3rem] px-8 py-20 shadow-2xl overflow-hidden md:px-20 md:py-24" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1030 50%, #0f172a 100%)' }}>

                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/cta_illustration.jpg"
                            alt="Mentors and learners collaborating on AskMentor platform"
                            fill
                            className="object-cover object-center opacity-25"
                            sizes="100vw"
                        />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(30,16,48,0.75) 50%, rgba(15,23,42,0.88) 100%)' }} />
                    </div>

                    {/* Glows */}
                    <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.25) 0%, transparent 65%)', filter: 'blur(40px)' }} />
                    <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 65%)', filter: 'blur(40px)' }} />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border mb-8" style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', borderColor: 'rgba(255,255,255,0.15)' }}>
                                <Sparkles className="w-4 h-4 text-orange-400" />
                                <span className="text-sm text-white font-semibold uppercase tracking-wider">Ready to get started?</span>
                            </div>

                            <h2 className="text-4xl md:text-[3.5rem] font-black text-white mb-8 leading-tight tracking-tight">
                                Transform your{' '}
                                <span style={{ background: 'linear-gradient(135deg, #fb923c, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                    learning journey
                                </span>{' '}
                                today.
                            </h2>

                            <p className="text-lg text-gray-300 leading-relaxed mb-12 max-w-lg">
                                Connect with AI-powered personas crafted from real-world expertise. Practice interviews, ask complex questions, and gain personalized insights at your own pace.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5">
                                <Link
                                    href="/explore"
                                    className="group px-10 py-5 text-white rounded-2xl hover:scale-[1.03] transition-all flex items-center justify-center gap-2.5 font-bold text-base"
                                    style={{ background: 'linear-gradient(135deg, #f97316, #ec4899)', boxShadow: '0 8px 32px rgba(249,115,22,0.4)' }}
                                >
                                    Explore Mentors
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/signup"
                                    className="px-10 py-5 text-white rounded-2xl border transition-all flex items-center justify-center gap-2.5 font-bold text-base hover:scale-[1.02]"
                                    style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', borderColor: 'rgba(255,255,255,0.2)' }}
                                >
                                    <MessageSquare className="w-5 h-5 text-orange-400" />
                                    Build Your Persona
                                </Link>
                            </div>
                        </div>

                        {/* Right: Actual Platform Capabilities */}
                        <div className="hidden lg:block">
                            <div className="grid grid-cols-2 gap-5">
                                {highlights.map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={i}
                                            className="p-7 rounded-3xl border transition-all duration-300 group cursor-default"
                                            style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', borderColor: 'rgba(255,255,255,0.1)' }}
                                            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.25)'; }}
                                            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
                                        >
                                            <div className="w-11 h-11 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-4 text-orange-400 group-hover:scale-110 transition-transform">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
