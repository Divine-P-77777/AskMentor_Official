import { Search, MessageCircle, Sparkles, Upload, Settings, Rocket, Workflow } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export function HowItWorks() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const studentStepsRef = useRef<HTMLDivElement[]>([]);
    const mentorStepsRef = useRef<HTMLDivElement[]>([]);
    const illustrationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (illustrationRef.current) {
                gsap.fromTo(illustrationRef.current,
                    { y: 30, opacity: 0 },
                    {
                        scrollTrigger: { trigger: illustrationRef.current, start: 'top 88%', once: true },
                        y: 0, opacity: 1, duration: 0.9, ease: 'power2.out', force3D: true
                    }
                );
            }

            const studentSteps = studentStepsRef.current.filter(Boolean);
            if (studentSteps.length > 0) {
                gsap.fromTo(studentSteps,
                    { y: 20, opacity: 0 },
                    {
                        scrollTrigger: { trigger: studentSteps[0], start: 'top 90%', once: true },
                        y: 0, opacity: 1, duration: 0.6, stagger: 0.12,
                        ease: 'power2.out', force3D: true, overwrite: 'auto'
                    }
                );
            }

            const mentorSteps = mentorStepsRef.current.filter(Boolean);
            if (mentorSteps.length > 0) {
                gsap.fromTo(mentorSteps,
                    { y: 20, opacity: 0 },
                    {
                        scrollTrigger: { trigger: mentorSteps[0], start: 'top 92%', once: true },
                        y: 0, opacity: 1, duration: 0.6, stagger: 0.12,
                        ease: 'power2.out', force3D: true, overwrite: 'auto'
                    }
                );
            }
            ScrollTrigger.refresh();
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const studentSteps = [
        { icon: Search, title: 'Browse Mentors', description: 'Explore AI bots created by alumni, professors, and professionals across different fields.', color: 'from-orange-400 to-amber-500', num: '#f97316' },
        { icon: MessageCircle, title: 'Start Chatting', description: 'Choose text or voice mode and begin your conversation. Ask anything!', color: 'from-pink-400 to-rose-500', num: '#ec4899' },
        { icon: Sparkles, title: 'Get Personalized Advice', description: 'Receive guidance based on real experiences and expertise. Learn and grow!', color: 'from-rose-400 to-pink-500', num: '#e11d48' }
    ];

    const creatorSteps = [
        { icon: Upload, title: 'Share Your Story', description: 'Upload your resume, research papers, or documents that represent your journey.', color: 'from-orange-400 to-amber-500', num: '#f97316' },
        { icon: Settings, title: 'Define Your Persona', description: 'Set your personality, expertise areas, and the way you want to help others.', color: 'from-pink-400 to-rose-500', num: '#ec4899' },
        { icon: Rocket, title: 'Make an Impact', description: 'Your AI mentor goes live! Help countless students while you focus on your work.', color: 'from-amber-400 to-orange-500', num: '#f59e0b' }
    ];

    return (
        <section id="how-it-works" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)' }}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold" style={{ background: 'linear-gradient(135deg, rgba(251,146,60,0.12), rgba(236,72,153,0.12))', color: '#9f1239' }}>
                        <Workflow className="w-4 h-4 text-orange-500" />
                        <span>Simple Steps</span>
                    </div>
                    <h2 className="text-4xl lg:text-[3.5rem] font-black text-gray-900 mb-5 tracking-tight leading-tight">
                        How AskMentor{' '}
                        <span style={{ background: 'linear-gradient(135deg, #f97316, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            works
                        </span>
                    </h2>
                    <p className="text-xl text-gray-500 leading-relaxed">
                        Whether you&apos;re seeking guidance or sharing knowledge, we make it simple
                    </p>
                </div>

                {/* Illustrated Process Banner */}
                <div ref={illustrationRef} className="mb-20 rounded-[2rem] overflow-hidden relative" style={{ boxShadow: '0 24px 60px rgba(249,115,22,0.1)' }}>
                    <Image
                        src="/howitworks_illustration.jpg"
                        alt="3-step illustration: Browse mentor profiles, Chat with AI mentor, Receive personalized guidance"
                        width={1400}
                        height={560}
                        className="w-full object-cover"
                        sizes="(max-width: 768px) 100vw, 90vw"
                    />
                </div>

                <div className="space-y-24">
                    {/* For Students */}
                    <div>
                        <div className="text-center mb-12">
                            <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold border" style={{ background: 'rgba(255,247,237,0.9)', color: '#c2410c', borderColor: '#fed7aa' }}>
                                <Search className="w-4 h-4" />
                                For Students
                            </span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 relative">
                            {studentSteps.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <div
                                        key={index}
                                        ref={(el) => { if (el) studentStepsRef.current[index] = el; }}
                                        className="relative group pt-6"
                                    >
                                        <div className="flex flex-col items-center text-center">
                                            <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 text-white`}>
                                                <Icon className="w-9 h-9" />
                                            </div>
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-2xl border-2 flex items-center justify-center shadow-lg font-black text-sm z-10 transition-all duration-300" style={{ borderColor: step.num, color: step.num }}>
                                                {index + 1}
                                            </div>
                                            <h3 className="text-xl font-black text-gray-900 mb-3">{step.title}</h3>
                                            <p className="text-gray-500 leading-relaxed text-[15px] max-w-xs">{step.description}</p>
                                        </div>
                                        {index < studentSteps.length - 1 && (
                                             <div className="hidden lg:block absolute top-14 left-[62%] w-[76%] h-[2px]" style={{ background: 'linear-gradient(to right, rgba(251,146,60,0.3), transparent)' }} />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center justify-center gap-6">
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent flex-1 max-w-xs" />
                        <span className="px-6 py-2.5 bg-white rounded-2xl border border-gray-100 text-gray-400 font-bold italic shadow-sm text-sm">vs</span>
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent flex-1 max-w-xs" />
                    </div>

                    {/* For Mentors */}
                    <div>
                        <div className="text-center mb-12">
                            <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold border" style={{ background: 'rgba(255,241,242,0.9)', color: '#9f1239', borderColor: '#fecdd3' }}>
                                <Rocket className="w-4 h-4" />
                                For Mentors
                            </span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 relative">
                            {creatorSteps.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <div
                                        key={index}
                                        ref={(el) => { if (el) mentorStepsRef.current[index] = el; }}
                                        className="relative group pt-6"
                                    >
                                        <div className="flex flex-col items-center text-center">
                                            <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 text-white`}>
                                                <Icon className="w-9 h-9" />
                                            </div>
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-2xl border-2 flex items-center justify-center shadow-lg font-black text-sm z-10" style={{ borderColor: '#ec4899', color: '#ec4899' }}>
                                                {index + 1}
                                            </div>
                                            <h3 className="text-xl font-black text-gray-900 mb-3">{step.title}</h3>
                                            <p className="text-gray-500 leading-relaxed text-[15px] max-w-xs">{step.description}</p>
                                        </div>
                                        {index < creatorSteps.length - 1 && (
                                            <div className="hidden lg:block absolute top-14 left-[62%] w-[76%] h-[2px]" style={{ background: 'linear-gradient(to right, rgba(236,72,153,0.3), transparent)' }} />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
