import { MessageSquare, Users, Clock, Shield, Sparkles } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export function Features() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const bannerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (headerRef.current) {
                gsap.fromTo(headerRef.current,
                    { y: 20, opacity: 0 },
                    {
                        scrollTrigger: { trigger: headerRef.current, start: 'top 92%', once: true },
                        y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', force3D: true
                    }
                );
            }
            const cards = cardsRef.current.filter(Boolean);
            if (cards.length > 0) {
                gsap.fromTo(cards,
                    { y: 30, opacity: 0 },
                    {
                        scrollTrigger: { trigger: containerRef.current, start: 'top 85%', once: true },
                        y: 0, opacity: 1, duration: 0.5, stagger: 0.1,
                        ease: 'power2.out', force3D: true, overwrite: 'auto'
                    }
                );
            }
            if (bannerRef.current) {
                gsap.fromTo(bannerRef.current,
                    { y: 30, opacity: 0 },
                    {
                        scrollTrigger: { trigger: bannerRef.current, start: 'top 88%', once: true },
                        y: 0, opacity: 1, duration: 0.8,
                        ease: 'power2.out', force3D: true, overwrite: 'auto'
                    }
                );
            }
            ScrollTrigger.refresh();
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const features = [
        {
            icon: MessageSquare,
            title: 'Natural Conversations',
            description: 'Chat naturally with AI mentors through text or voice. Ask questions, get advice, and learn at your own pace.',
            color: 'from-orange-400 to-amber-500',
            bg: 'rgba(255,247,237,0.8)',
            shadow: 'rgba(251,146,60,0.15)',
        },
        {
            icon: Users,
            title: 'Personalized Knowledge',
            description: 'Each bot represents real experiences and expertise from alumni and professionals in various fields.',
            color: 'from-pink-400 to-rose-500',
            bg: 'rgba(255,241,242,0.8)',
            shadow: 'rgba(236,72,153,0.15)',
        },
        {
            icon: Clock,
            title: 'Available 24/7',
            description: 'No more waiting for office hours. Get instant answers and guidance whenever inspiration strikes.',
            color: 'from-amber-400 to-orange-500',
            bg: 'rgba(255,251,235,0.8)',
            shadow: 'rgba(245,158,11,0.15)',
        },
        {
            icon: Shield,
            title: 'Safe & Private',
            description: 'Your conversations are secure and private. Learn freely without judgment or limitations.',
            color: 'from-rose-400 to-pink-500',
            bg: 'rgba(255,228,230,0.5)',
            shadow: 'rgba(244,63,94,0.15)',
        }
    ];

    return (
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
            {/* Subtle BG decoration */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-100 to-transparent" />

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold" style={{ background: 'linear-gradient(135deg, rgba(251,146,60,0.12), rgba(236,72,153,0.12))', color: '#c2410c' }}>
                        <Sparkles className="w-4 h-4 text-orange-500" />
                        <span>Why AskMentor</span>
                    </div>
                    <h2 className="text-4xl lg:text-[3.5rem] font-black text-gray-900 mb-5 tracking-tight leading-tight">
                        Everything you need to{' '}
                        <span style={{ background: 'linear-gradient(135deg, #f97316, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            grow
                        </span>
                    </h2>
                    <p className="text-xl text-gray-500 leading-relaxed">
                        Connect with mentors, gain insights, and accelerate your learning journey
                    </p>
                </div>

                {/* Feature Cards Grid */}
                <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                ref={(el) => { if (el) cardsRef.current[index] = el; }}
                                className="group p-8 rounded-[2rem] border border-transparent hover:border-orange-100 transition-all duration-500 cursor-default"
                                style={{ background: feature.bg, boxShadow: `0 4px 24px ${feature.shadow}` }}
                                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 48px ${feature.shadow}`; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 24px ${feature.shadow}`; }}
                            >
                                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-500 shadow-lg text-white`}>
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-[15px]">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>

                <div
                    ref={bannerRef}
                    className="max-w-3xl mx-auto rounded-[2rem] overflow-hidden relative flex items-center justify-center p-4 sm:p-8"

                >
                    <Image
                        src="/features_illustration.jpg"
                        alt="AskMentor features — natural AI conversation, personalized knowledge, 24/7 availability, and privacy"
                        width={1200}
                        height={600}
                        className="w-full max-h-[500px] object-contain"
                        sizes="(max-width: 768px) 100vw, 80vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
