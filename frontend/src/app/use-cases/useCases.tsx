import {
    GraduationCap,
    Briefcase,
    Code,
    TrendingUp,
    BookOpen,
    Users,

} from 'lucide-react';

interface UseCaseItem {
    id: string;
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    color: string;
    badgeColor: string;
    icon: any;
    targetAudience: string;
    samplePrompts: string[];
    keyBenefits: string[];
    features: string[];
}

export const useCaseList: UseCaseItem[] = [
    {
        id: 'academic',
        badge: 'Academic & College',
        title: 'University Academics & Exam Guidance',
        subtitle: 'Overcome syllabus bottlenecks with professor & alumni clones',
        description:
            'Students often face roadblocks outside of scheduled office hours. AskMentor allows professors and departmental top alumni to ingest course syllabi, lecture notes, and reference books so students can clarify difficult theorems, prepare for midterms, and seek academic advice 24/7.',
        image: '/mentor_academic_in.jpg',
        color: 'from-orange-500 to-amber-500',
        badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
        icon: GraduationCap,
        targetAudience: 'College Students, University Applicants, Teaching Assistants',
        samplePrompts: [
            '"Can you explain dynamic programming state transitions from Lecture 8?"',
            '"What courses should I choose in semester 5 to specialize in Distributed Systems?"',
            '"How do I format my university grant proposal according to department guidelines?"',
        ],
        keyBenefits: [
            '24/7 availability for late-night pre-exam study sessions',
            'Exact syllabus ground-truth with zero hallucinated course rules',
            'Personalized study plans matched to individual pace',
        ],
        features: ['PDF Syllabus Ingestion', 'Mathematical OCR Extraction', 'Token-by-Token SSE Answers'],
    },
    {
        id: 'career',
        badge: 'Career & Placement',
        title: 'Career Acceleration & Mock Interviews',
        subtitle: 'Practice high-stakes interviews with realistic alumni personas',
        description:
            'Landing top internships and full-time roles requires structured preparation. Connect with AI personas of alumni working at Google, Microsoft, Goldman Sachs, and top tech startups to review your resume, practice the STAR interview method, and gain insider industry insights.',
        image: '/mentor_career_in.jpg',
        color: 'from-pink-500 to-rose-500',
        badgeColor: 'bg-pink-100 text-pink-800 border-pink-200',
        icon: Briefcase,
        targetAudience: 'Final-Year Students, Job Seekers, Early-Career Switchers',
        samplePrompts: [
            '"Critique my resume bullet points for a Product Management internship."',
            '"Run a 15-minute behavioral mock interview using the STAR technique."',
            '"What are the unwritten rules of negotiating your first entry-level offer?"',
        ],
        keyBenefits: [
            'Real-time voice talk mode for natural, anxiety-free interview practice',
            'Actionable resume critiques grounded in verified industry standards',
            'Company-specific interview patterns and insider cultural tips',
        ],
        features: ['Live Voice Talk Mode', 'Resume PDF Ingestion', 'Persistent Rolling Memory'],
    },
    {
        id: 'technical',
        badge: 'Engineering & Code',
        title: 'Software Engineering & Architecture Mentorship',
        subtitle: 'Elevate system design, clean code, and engineering wisdom',
        description:
            'Junior developers and CS students often get stuck on architectural decisions that standard tutorials fail to address. Learn from Senior Software Engineers and Tech Leads who have embedded their coding philosophies, design doc templates, and system architecture blueprints.',
        image: '/mentor_technical_in.jpg',
        color: 'from-teal-500 to-cyan-600',
        badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
        icon: Code,
        targetAudience: 'CS Undergrads, Junior Developers, Bootcamp Graduates',
        samplePrompts: [
            '"How would you design a distributed rate limiter in Redis vs Token Bucket in Go?"',
            '"Review this database schema for a multi-tenant SaaS application."',
            '"Explain how to handle eventual consistency in event-driven microservices."',
        ],
        keyBenefits: [
            'Deep architectural reasoning rather than generic code completions',
            'Engineering mentorship based on real production battle scars',
            'System design interview preparation with instant iterative feedback',
        ],
        features: ['Nomic 768d Vector Search', 'Deep Reasoning Credit Queries', 'Code Document Ingestion'],
    },
    {
        id: 'startup',
        badge: 'Founders & Startups',
        title: 'Entrepreneurship & Early-Stage Strategy',
        subtitle: 'Battle-tested founder advice without endless networking wait times',
        description:
            'Building a startup is lonely and fraught with pitfalls. Aspiring student entrepreneurs can query AI personas of proven alumni founders to test value propositions, evaluate pitch decks, navigate zero-to-one go-to-market strategies, and structure early seed fundraising rounds.',
        image: '/mentor_startup_in.jpg',
        color: 'from-amber-500 to-orange-600',
        badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
        icon: TrendingUp,
        targetAudience: 'Student Founders, Indie Hackers, Incubator Applicants',
        samplePrompts: [
            '"Roast my 10-slide seed pitch deck and identify weak traction metrics."',
            '"What is an effective zero-budget go-to-market strategy for B2B campus EdTech?"',
            '"How do we calculate founder equity split between technical and business co-founders?"',
        ],
        keyBenefits: [
            'Rapid feedback on business models before pitching angel investors',
            'Unfiltered, authentic founder wisdom preserved for the next generation',
            'Frameworks for customer validation and product-market fit metrics',
        ],
        features: ['Pitch Deck Ingestion', 'Market Analysis RAG', 'Creator-Defined Unlock Tiers'],
    },
    {
        id: 'research',
        badge: 'Research & Academia',
        title: 'PhD, Masters & Scientific Research Support',
        subtitle: 'Synthesize literature reviews and refine methodologies',
        description:
            'Graduate students and researchers navigate dense academic papers, complex literature reviews, and grant proposals. Interacting with specialized research personas allows scholars to unpack novel methodologies, cross-reference citations, and prepare defense presentations.',
        image: '/mentor_research_in.jpg',
        color: 'from-emerald-500 to-teal-600',
        badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        icon: BookOpen,
        targetAudience: 'Masters Scholars, PhD Candidates, Academic Researchers',
        samplePrompts: [
            '"Summarize the methodology nuances between these two embedded papers."',
            '"How should I structure my thesis defense presentation for a skeptical committee?"',
            '"Identify potential edge cases in this experimental methodology design."',
        ],
        keyBenefits: [
            'High-precision OCR extraction for complex scientific formulas & tables',
            'Strict grounding to uploaded academic papers avoiding hallucinations',
            'Rapid synthesis of large multi-page research documents',
        ],
        features: ['EasyOCR + PyMuPDF Engine', 'Multi-source pgvector Search', 'Supabase Data Isolation'],
    },
    {
        id: 'alumni',
        badge: 'Institutions & Communities',
        title: 'Alumni Networks & University Scaling',
        subtitle: 'Connect thousands of students with alumni without burning out volunteers',
        description:
            'Universities and alumni associations struggle to connect massive student cohorts with busy alumni. With AskMentor, universities can deploy verified alumni personas, enabling every student to receive authentic career and departmental wisdom while alumni protect their calendar.',
        image: '/mentor_growth_in.jpg',
        color: 'from-purple-500 to-indigo-600',
        badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
        icon: Users,
        targetAudience: 'Universities, Colleges, Alumni Associations, Bootcamps',
        samplePrompts: [
            '"What did past graduates from our department do in their first 3 years?"',
            '"Which alumni transitioned from Mechanical Engineering into Data Science?"',
            '"How can our batch connect with verified alumni mentors for capstone projects?"',
        ],
        keyBenefits: [
            'Scale 1:1 mentorship from 10 students to 10,000 students effortlessly',
            'Protect alumni from repetitive LinkedIn direct messaging fatigue',
            'Transparent creator wallet earnings and institutional impact analytics',
        ],
        features: ['70% Creator Revenue Share', 'Custom Avatar & Voice Customization', 'Multi-Tenant Security'],
    },
];
