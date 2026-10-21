import Link from 'next/link';
import { ArrowRight, Sparkles, GraduationCap, CheckCircle2, Compass, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: 'power3.out', force3D: true, overwrite: 'auto' }
            });

            if (textRef.current) {
                const elements = gsap.utils.toArray(Array.from(textRef.current.children));
                gsap.set(elements, { opacity: 0, y: 32 });
                tl.to(elements, { y: 0, opacity: 1, stagger: 0.12, duration: 0.75 }, 0.1);
            }

            if (imageRef.current) {
                tl.fromTo(imageRef.current,
                    { scale: 0.93, opacity: 0, y: 20 },
                    { scale: 1, opacity: 1, y: 0, duration: 1.1, ease: 'power2.out' },
                    0.25
                );
            }

            const floatingCards = [card1Ref.current, card2Ref.current].filter(Boolean);
            if (floatingCards.length > 0) {
                tl.fromTo(floatingCards,
                    { y: 24, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, stagger: 0.18, ease: 'back.out(1.7)' },
                    0.65
                );
                gsap.to(floatingCards, {
                    y: '+=10',
                    duration: 3.2,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    stagger: { each: 0.7, repeat: -1, yoyo: true }
                });
            }
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-[90vh] lg:min-h-[88vh] flex items-center overflow-hidden pt-20 pb-10 px-4 sm:px-6 lg:px-8"
            style={{ background: 'linear-gradient(135deg, #fff7f0 0%, #fdf2f8 45%, #ffffff 100%)' }}
        >
            {/* Background ambient blobs */}
            <div className="absolute top-0 left-0 w-[50%] h-[55%] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at top left, rgba(251,146,60,0.14) 0%, transparent 65%)', filter: 'blur(80px)' }} />
            <div className="absolute bottom-0 right-0 w-[50%] h-[50%] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at bottom right, rgba(236,72,153,0.12) 0%, transparent 65%)', filter: 'blur(80px)' }} />
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 55% 50%, rgba(251,191,36,0.05) 0%, transparent 60%)', filter: 'blur(60px)' }} />

            {/* Decorative pattern dots */}
            <div className="absolute right-0 top-24 w-48 h-48 opacity-[0.04] pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    {[...Array(6)].map((_, row) =>
                        [...Array(6)].map((_, col) => (
                            <circle key={`${row}-${col}`} cx={col * 32 + 16} cy={row * 32 + 16} r="5" fill="#f97316" />
                        ))
                    )}
                </svg>
            </div>
            <div className="absolute left-0 bottom-20 w-36 h-36 opacity-[0.04] pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    {[...Array(5)].map((_, row) =>
                        [...Array(5)].map((_, col) => (
                            <circle key={`${row}-${col}`} cx={col * 36 + 18} cy={row * 36 + 18} r="5" fill="#ec4899" />
                        ))
                    )}
                </svg>
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 xl:gap-20 items-center">

                    {/* ─── LEFT: Copy ─── */}
                    <div ref={textRef} className="space-y-8">

                        {/* Eye-catching badge */}
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-orange-200/80"
                            style={{ boxShadow: '0 4px 20px rgba(251,146,60,0.14)' }}>
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
                            </span>
                            <span className="text-xs sm:text-sm font-semibold text-gray-800 tracking-wide">AI-Powered Mentorship Platform</span>
                        </div>

                        {/* Headline */}
                        <div>
                            <h1 className="text-[2.6rem] sm:text-5xl lg:text-[4rem] xl:text-[4.4rem] font-black text-gray-900 leading-[1.06] tracking-tight">
                                Learn from{' '}
                                <span className="relative inline-block">
                                    <span style={{ background: 'linear-gradient(135deg, #f97316, #ec4899, #e11d48)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                        expert mentors
                                    </span>
                                    {/* Underline accent */}
                                    <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                                        style={{ background: 'linear-gradient(90deg, #f97316, #ec4899)' }} />
                                </span>
                                <br />whenever you need
                            </h1>
                        </div>

                        {/* Subtext */}
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg font-normal">
                            Interact with digital personas of professors, tech leads, and alumni.
                            Get personalized guidance, interview preparation, and advice through
                            natural text or voice conversations.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Link
                                href="/explore"
                                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-white font-bold text-base rounded-2xl transition-all hover:scale-[1.03] hover:shadow-2xl"
                                style={{ background: 'linear-gradient(135deg, #f97316, #ec4899)', boxShadow: '0 8px 30px rgba(249,115,22,0.35)' }}
                            >
                                Explore Mentors
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/signup"
                                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-gray-700 font-bold text-base rounded-2xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all"
                                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}
                            >
                                <Compass className="w-5 h-5 text-orange-500" />
                                Create a Mentor Persona
                            </Link>
                        </div>
                    </div>

                    {/* ─── RIGHT: Image + Floating Cards ─── */}
                    <div className="relative flex items-center justify-center mt-8 lg:mt-0">

                        {/* Glow halo */}
                        <div className="absolute inset-0 rounded-[3rem] pointer-events-none"
                            style={{ background: 'radial-gradient(ellipse at center, rgba(251,146,60,0.2) 0%, rgba(236,72,153,0.1) 55%, transparent 75%)', filter: 'blur(50px)', transform: 'scale(1.1)' }} />

                        {/* Main photo — creative split rounded frame */}
                        <div
                            ref={imageRef}
                            className="relative w-full overflow-hidden"
                            style={{
                                borderRadius: '2.5rem 2.5rem 5rem 2.5rem',
                                boxShadow: '0 32px 72px -14px rgba(249,115,22,0.22), 0 18px 40px -10px rgba(0,0,0,0.07)',
                                border: '3px solid rgba(255,255,255,0.9)'
                            }}
                        >
                            <div className="relative h-[440px] sm:h-[500px] lg:h-[520px] w-full">
                                <Image
                                    src="/hero_indian_mentor.png"
                                    alt="Indian female mentor guiding a student — AskMentor platform"
                                    fill
                                    priority
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Bottom gradient fade */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                                {/* Left side accent stripe */}
                                <div className="absolute left-0 top-0 bottom-0 w-1.5"
                                    style={{ background: 'linear-gradient(to bottom, #f97316, #ec4899)' }} />
                            </div>
                        </div>

                        {/* Floating Card 1 — Dr. Anjali Desai (Mentor persona) */}
                        <div
                            ref={card1Ref}
                            className="absolute -bottom-3 -left-2 md:-left-6 bg-white/95 backdrop-blur-xl p-2.5 sm:p-3 rounded-2xl max-w-[210px] sm:max-w-[230px]"
                            style={{ boxShadow: '0 16px 40px rgba(0,0,0,0.12)', border: '1.5px solid rgba(255,255,255,0.95)' }}
                        >
                            <div className="flex items-center gap-2.5 sm:gap-3">
                                <div className="relative shrink-0">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl rotate-1 flex items-center justify-center shadow-md"
                                        style={{ background: 'linear-gradient(135deg, #fbbf24, #f97316)', boxShadow: '0 6px 16px rgba(251,146,60,0.35)' }}>
                                        <GraduationCap className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white" />
                                    </div>
                                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-2 border-white rounded-full"
                                        style={{ background: 'linear-gradient(135deg, #f97316, #ec4899)' }} />
                                </div>
                                <div className="min-w-0">
                                    <div className="flex items-center gap-1 mb-0.5">
                                        <span className="text-xs sm:text-[13px] font-bold text-gray-900 truncate">Dr. Anjali Desai</span>
                                        <CheckCircle2 className="w-3 h-3 text-blue-500 shrink-0" />
                                    </div>
                                    <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium truncate">CS Professor · IIT Bombay</div>
                                    <span className="mt-1 inline-block text-[9px] sm:text-[10px] font-bold text-orange-700 bg-orange-50 border border-orange-100 px-1.5 py-0.5 rounded-full">
                                        Academic AI Persona
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Card 2 — Pooja Sharma (Chat bubble style) */}
                        <div
                            ref={card2Ref}
                            className="absolute -top-3 -right-2 md:-right-6 bg-white/95 backdrop-blur-xl p-2.5 sm:p-3 rounded-2xl max-w-[210px] sm:max-w-[230px]"
                            style={{ boxShadow: '0 16px 40px rgba(0,0,0,0.12)', border: '1.5px solid rgba(255,255,255,0.95)' }}
                        >
                            <div className="flex items-center gap-2.5 sm:gap-3">
                                <div className="relative shrink-0">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl -rotate-1 flex items-center justify-center shadow-md"
                                        style={{ background: 'linear-gradient(135deg, #ec4899, #e11d48)', boxShadow: '0 6px 16px rgba(236,72,153,0.35)' }}>
                                        <MessageCircle className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white" />
                                    </div>
                                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full animate-pulse" />
                                </div>
                                <div className="min-w-0">
                                    <div className="flex items-center gap-1 mb-0.5">
                                        <span className="text-xs sm:text-[13px] font-bold text-gray-900 truncate">Pooja Sharma</span>
                                        <CheckCircle2 className="w-3 h-3 text-blue-500 shrink-0" />
                                    </div>
                                    <div className="text-[10px] sm:text-[11px] text-gray-500 font-medium truncate">Staff Tech Lead · Mentor</div>
                                    <span className="mt-1 inline-block text-[9px] sm:text-[10px] font-bold text-pink-700 bg-pink-50 border border-pink-100 px-1.5 py-0.5 rounded-full">
                                        Career & Tech Persona
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Corner decorative badge */}
                        <div className="absolute bottom-6 right-5 bg-white/80 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/90"
                            style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-orange-500" />
                                <span className="text-xs font-bold text-gray-800">Powered by AI</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
