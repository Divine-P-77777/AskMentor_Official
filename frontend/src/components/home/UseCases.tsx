import { GraduationCap, Briefcase, Code, Heart, BookOpen, TrendingUp, ArrowRight, Compass, LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface UseCase {
    icon: LucideIcon;
    title: string;
    description: string;
    image: string;
    color: string;
    gradientFrom: string;
    gradientTo: string;
}

export function UseCases() {
    const useCases: UseCase[] = [
        {
            icon: GraduationCap,
            title: 'Academic Guidance',
            description: 'Get help with course selection, study tips, and academic planning from experienced alumni.',
            image: '/mentor_academic.jpg',
            color: 'from-orange-500 to-amber-500',
            gradientFrom: 'rgba(251,146,60,0.08)',
            gradientTo: 'rgba(245,158,11,0.04)',
        },
        {
            icon: Briefcase,
            title: 'Career Development',
            description: 'Learn about different career paths, interview prep, and industry insights from professionals.',
            image: '/mentor_career.jpg',
            color: 'from-pink-500 to-rose-500',
            gradientFrom: 'rgba(236,72,153,0.08)',
            gradientTo: 'rgba(225,29,72,0.04)',
        },
        {
            icon: Code,
            title: 'Technical Skills',
            description: 'Master new programming languages, frameworks, and tools with guidance from tech experts.',
            image: '/mentor_technical.jpg',
            color: 'from-teal-500 to-cyan-600',
            gradientFrom: 'rgba(20,184,166,0.08)',
            gradientTo: 'rgba(6,182,212,0.04)',
        },
        {
            icon: Heart,
            title: 'Personal Growth',
            description: 'Find mentors who can guide you on work-life balance, confidence, and personal development.',
            image: '/mentor_growth.jpg',
            color: 'from-purple-500 to-indigo-600',
            gradientFrom: 'rgba(168,85,247,0.08)',
            gradientTo: 'rgba(99,102,241,0.04)',
        },
        {
            icon: BookOpen,
            title: 'Research Support',
            description: 'Connect with researchers and academics for guidance on projects, papers, and methodologies.',
            image: '/mentor_research.jpg',
            color: 'from-emerald-500 to-teal-600',
            gradientFrom: 'rgba(16,185,129,0.08)',
            gradientTo: 'rgba(20,184,166,0.04)',
        },
        {
            icon: TrendingUp,
            title: 'Entrepreneurship',
            description: 'Get startup advice, business strategy insights, and entrepreneurial wisdom from founders.',
            image: '/mentor_startup.jpg',
            color: 'from-amber-500 to-orange-600',
            gradientFrom: 'rgba(245,158,11,0.08)',
            gradientTo: 'rgba(234,88,12,0.04)',
        }
    ];

    return (
        <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-100 to-transparent" />

            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold" style={{ background: 'linear-gradient(135deg, rgba(236,72,153,0.12), rgba(251,146,60,0.12))', color: '#9f1239' }}>
                        <Compass className="w-4 h-4 text-orange-500" />
                        <span>Use Cases</span>
                    </div>
                    <h2 className="text-4xl lg:text-[3.5rem] font-black text-gray-900 mb-5 tracking-tight leading-tight">
                        Guidance for{' '}
                        <span style={{ background: 'linear-gradient(135deg, #f97316, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            every journey
                        </span>
                    </h2>
                    <p className="text-xl text-gray-500 leading-relaxed">
                        Whatever your goals, there&apos;s a mentor ready to help you succeed
                    </p>
                </div>

                {/* Featured row: first 2 cards large */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {useCases.slice(0, 2).map((useCase, index) => {
                        const Icon = useCase.icon;
                        return (
                            <div
                                key={index}
                                className="group relative rounded-[2rem] overflow-hidden border border-gray-100 hover:border-transparent transition-all duration-500 cursor-pointer"
                                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}
                                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 24px 60px rgba(0,0,0,0.1)'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(0,0,0,0.05)'; }}
                            >
                                {/* Photo */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={useCase.image}
                                        alt={`Mentorship photo for ${useCase.title} on AskMentor`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(255,255,255,0.2) 60%, white 100%)` }} />
                                </div>
                                {/* Content */}
                                <div className="p-8 bg-white relative z-10" style={{ background: `linear-gradient(135deg, ${useCase.gradientFrom}, ${useCase.gradientTo}, white)` }}>
                                    <div className={`w-12 h-12 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 text-white`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-2">{useCase.title}</h3>
                                    <p className="text-gray-500 leading-relaxed text-base">{useCase.description}</p>
                                    <div className="mt-5 flex items-center gap-2 font-bold text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400" style={{ color: '#f97316' }}>
                                        <span>Explore Path</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom 4 cards: smaller grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {useCases.slice(2).map((useCase, index) => {
                        const Icon = useCase.icon;
                        return (
                            <div
                                key={index + 2}
                                className="group relative rounded-[1.8rem] overflow-hidden border border-gray-100 hover:border-transparent transition-all duration-500 cursor-pointer"
                                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}
                                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.05)'; }}
                            >
                                <div className="relative h-44 overflow-hidden">
                                    <Image
                                        src={useCase.image}
                                        alt={`Mentorship photo for ${useCase.title} on AskMentor`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 640px) 100vw, 25vw"
                                    />
                                    <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(255,255,255,0.15) 50%, white 100%)` }} />
                                </div>
                                <div className="p-6 bg-white" style={{ background: `linear-gradient(135deg, ${useCase.gradientFrom}, white)` }}>
                                    <div className={`w-10 h-10 bg-gradient-to-br ${useCase.color} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 text-white`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-base font-black text-gray-900 mb-1.5">{useCase.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{useCase.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
