import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://www.askmentor.online';
const PUBLIC_DIR = path.resolve(__dirname, '../public');

const llmsContent = `# AskMentor

> AskMentor is an AI-powered mentorship platform enabling students, engineers, and researchers to interact 24/7 with digital clones of professors, tech leads, and alumni founders. The platform supports real-time text streaming and vernacular voice interactions grounded in verified documents through RAG.

## Core Capabilities / Main Sections
* **[Explore AI Personas](${BASE_URL}/explore)**: Search and discover verified mentor bots across engineering, academia, career development, and startups.
* **[Platform Use Cases](${BASE_URL}/use-cases)**: In-depth breakdowns of real-world workflows for university exam prep, mock placements, system design reviews, and thesis research.
* **[About AskMentor](${BASE_URL}/about)**: Mission, architecture, RAG vector retrieval standards, and core engineering philosophy.
* **[Billing & Credits](${BASE_URL}/billing)**: Transparent pay-as-you-go credit structure, Cashfree payment gateway integration, and 70% creator revenue sharing.
* **[Creator Studio / Onboarding](${BASE_URL}/signup)**: Upload resumes, syllabi, or research papers to train and deploy a customized mentor persona in minutes.

## Key Information & Crucial Facts
* **Architecture**: Hybrid Next.js 15 App Router frontend paired with a high-throughput Python FastAPI backend.
* **RAG & Search Engine**: Document parsing via PyMuPDF and EasyOCR; vector search using Supabase PostgreSQL pgvector with 768-dimensional Nomic embeddings (nomic-embed-text-v1.5).
* **LLM Reasoning**: Sub-second text streaming using Groq-accelerated Llama 3.3 70B Versatile and DeepSeek R1 Distill for deep technical problem solving.
* **Voice & Vernacular Support**: Real-time voice talk mode with low-latency audio pipelines and Sarvam AI Indian vernacular speech recognition and TTS.
* **Student Access**: Free community access available whenever mentor bot owners enable zero-credit usage; optional low-cost pay-as-you-go credits for premium creator bots.
* **Mentor Monetization**: 70% direct revenue payout to mentor creators via integrated automated payout ledger; zero lock-in subscriptions.
* **Data Security & Privacy**: Strict tenant isolation on Supabase PostgreSQL; student chat transcripts and uploaded creator files are encrypted and never used for foundation model training without consent.

## Navigation & Discovery
* [Full Site Map / Index](${BASE_URL}/sitemap.xml): Machine-readable XML sitemap of all public URLs.
* [Full LLM Knowledge Base](${BASE_URL}/llms-full.txt): Deep technical specification, API endpoint contracts, and comprehensive platform documentation for AI agents.
* [Contact Support](${BASE_URL}/contact): Direct assistance for institutional onboarding, campus partnerships, and mentor verification.
`;

const llmsFullContent = `# AskMentor: Comprehensive System & Knowledge Specification (llms-full.txt)

> AskMentor is a decentralized AI mentorship infrastructure enabling students, junior engineers, and researchers to query digital clones of verified professors, industry leaders, and alumni. This document serves as the canonical technical index for LLM reasoning engines and agentic systems.

## 1. Executive Summary & Purpose
Traditional mentorship suffers from severe scheduling bottlenecks: top faculty and experienced engineers cannot hold 1:1 office hours with thousands of students. AskMentor solves this by transforming a mentor's published research papers, lecture slide decks, syllabus outlines, career milestones, and engineering philosophies into an interactive, grounded AI persona that operates 24/7.

AskMentor prioritizes zero-hallucination factual grounding through dense vector retrieval (RAG) and low-latency inference, ensuring students receive answers true to the mentor's actual knowledge base.

## 2. Technical Architecture & Tech Stack

### Frontend Architecture
* Framework: Next.js 15 (App Router, Server & Client Components)
* State & Logic: React 19, TypeScript
* Styling & Design System: Tailwind CSS v4, custom glassmorphism, responsive micro-animations
* Animation Engine: GSAP with ScrollTrigger
* Real-time Streaming: Server-Sent Events (SSE) for token-by-token text generation
* Audio / Voice: Web Audio API & MediaStream pipelines for voice talk mode

### Backend & AI Infrastructure
* API Gateway & Core Server: Python 3.10+ with FastAPI
* Document Ingestion Engine: PyMuPDF for high-speed PDF parsing; EasyOCR for image-based text and mathematical diagrams
* Chunking Strategy: Recursive character text splitting (800 character chunks, 150 character sliding overlap)
* Vector Embeddings: 768-dimensional dense vectors generated via nomic-embed-text-v1.5
* Vector Database: Supabase PostgreSQL utilizing the pgvector extension with Cosine Distance similarity indices (HNSW / IVFFlat)
* Primary Inference LLMs: Groq cloud accelerator running llama-3.3-70b-versatile and deepseek-r1-distill-llama-70b
* Vernacular Speech: Sarvam AI Indian vernacular TTS and STT (supporting Hindi, Hinglish, and English)

## 3. Public Web Pages & Core Hubs
* ${BASE_URL} - Main landing page with platform overview, interactive persona previews, and real-time domain ticker.
* ${BASE_URL}/explore - Interactive catalog allowing users to filter AI personas by category (Academic, Tech, Placement, Founders, Research, Career).
* ${BASE_URL}/use-cases - Deep-dive guide covering practical application workflows across university education, software engineering mentorship, campus placements, and thesis research.
* ${BASE_URL}/about - Founding principles, architecture breakdown, vector search explanation, and ethical AI commitments.
* ${BASE_URL}/billing - Pricing transparency guide detailing how pay-as-you-go credits work, bot unlock rates, creator wallets, and Cashfree gateway flow.
* ${BASE_URL}/signin - User authentication with Supabase Auth (Magic link, Password, OAuth).
* ${BASE_URL}/signup - Creator and student registration flow.
* ${BASE_URL}/sitemap.xml - Standard machine-readable XML sitemap index.

## 4. Key Capabilities & User Workflows

### For Students & Learners
1. Discover Verified Personas: Browse personas vetted with academic degrees, corporate roles, and verified accomplishments.
2. Free Community Access: Bot owners can designate bots as 100% free community tools, allowing zero-cost chats.
3. Pay-as-you-go Credits: For premium creator bots, simple usage credits (INR) are consumed per query. Zero recurring subscriptions or forced monthly plans.
4. Voice Talk Mode: Interactive hands-free voice interviews to practice behavioral and technical questions.
5. Strict Grounding: Responses cite sources extracted from uploaded course materials and avoid hallucinated facts.

### For Mentors & Knowledge Creators
1. 3-Minute Persona Creation: Drag-and-drop resumes, lecture notes, publications, or thesis papers.
2. Persona Customization: Define system prompts, conversational tone (strict academic, empathetic career coach, direct code reviewer), and voice parameters.
3. Monetization Autonomy: Creators choose between offering free public access or setting an unlock fee in INR.
4. 70% Creator Revenue Share: Mentors retain 70% of gross credit revenue generated by their AI clone, deposited directly into their creator wallet.
5. Calendar Protection: Eliminate repetitive LinkedIn inbox queries by directing students to their digital clone.

## 5. Security, Isolation & Compliance
* Tenant Isolation: Multi-tenant database design using Supabase PostgreSQL Row Level Security (RLS).
* Data Privacy: Creator training documents and student private chats are isolated per tenant and never fed into public foundation model fine-tuning sets.
* Payment Security: Transactions processed through RBI-compliant Cashfree PG with end-to-end webhook verification.
`;

// Ensure public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

fs.writeFileSync(path.join(PUBLIC_DIR, 'llms.txt'), llmsContent, 'utf-8');
fs.writeFileSync(path.join(PUBLIC_DIR, 'llm.txt'), llmsContent, 'utf-8');
fs.writeFileSync(path.join(PUBLIC_DIR, 'llms-full.txt'), llmsFullContent, 'utf-8');

console.log('✓ Successfully generated /llms.txt, /llm.txt, and /llms-full.txt in public directory.');
