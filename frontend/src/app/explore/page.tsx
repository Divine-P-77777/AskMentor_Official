"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Sparkles,
  MessageSquare,
  User,
  ArrowRight,
  Filter,
  ShieldCheck,
  TrendingUp,
  Gem,
  LayoutGrid,
  Zap,
  Share2,
  Lock,
  ChevronUp,
  ChevronDown
} from "lucide-react";
import { api } from "../../services/api";
import { Bot } from "../../types";
import Link from 'next/link';
import { BotAvatar } from "./components/BotAvatar";
import { UnlockModal } from "@/components/ui/UnlockModal";
import { ProfileModal } from "@/components/ui/ProfileModal";
import { toast } from "react-toastify";

import { useRouter } from "next/navigation"

export default function ExplorePage() {
  const [bots, setBots] = useState<Bot[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedUnlockBot, setSelectedUnlockBot] = useState<Bot | null>(null);
  const [selectedProfileBot, setSelectedProfileBot] = useState<Bot | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const router = useRouter()


  const handleBotUnlocked = (unlockedBotId: string) => {
    setBots(prev =>
      prev.map(bot =>
        bot.id === unlockedBotId
          ? {
            ...bot,
            is_unlocked: true,

            free_explorations_used: (bot.free_explorations_used ?? 0) + 1,
          }
          :
          {
            ...bot,
            free_explorations_used: (bot.free_explorations_used ?? 0) + 1,
          }
      )
    );
    setSelectedUnlockBot(null);
  };

  useEffect(() => {
    const fetchBots = async () => {
      try {
        const data = await api.getExploreBots();
        setBots(data);
      } catch (err) {
        console.error("Failed to fetch personas:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBots();
  }, []);

  const handleShare = (e: React.MouseEvent, bot: Bot) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/chat/${bot.id}`;
    if (navigator.share) {
      navigator.share({
        title: `Chat with ${bot.name}`,
        text: `Check out this AI persona of ${bot.name} on AskMentor!`,
        url: url
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(url)
        .then(() => toast.success("Link copied to clipboard!"))
        .catch((err: any) => {
          console.error("Clipboard write failed:", err);
          toast.error("Failed to copy link.");
        });
    }
  };

  const categories = ["All", "Technology", "Business", "Design", "Marketing", "Education", "Healthcare"];

  const filteredBots = bots.filter((bot) => {
    const matchesSearch =
      bot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bot.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ||
      bot.persona_config.expertise?.some((exp) =>
        exp.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#fafafa] selection:bg-orange-100 selection:text-orange-900">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-orange-100/30 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-pink-100/30 blur-[150px] rounded-full" />
      </div>

      {/* Navigation Space Holder */}
      <div className="h-16 lg:h-24" />

      {/* Hero Section */}
      <section className="relative pt-2 pb-10 px-6 lg:px-12 z-30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 tracking-tighter leading-[0.9]">
              Elite Mentors <br className="md:hidden" />
              <span className="bg-gradient-to-r from-gray-900 via-orange-600 to-pink-600 bg-clip-text text-transparent">
                One Click Away.
              </span>
            </h1>

            <p className="text-sm md:text-base text-gray-500 max-w-2xl lg:max-w-none mx-auto leading-relaxed font-medium mb-6 px-4 md:px-0">
              Connect with hyper-realistic AI twins of industry leaders. Personalized mentorship, available 24/7.
            </p>

            {/* Premium Search & Filter Bar */}
            <div className="max-w-3xl mx-auto relative z-50">
              <div className="relative p-1.5 bg-white/80 backdrop-blur-2xl rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-white flex flex-col md:flex-row gap-2">
                <div className="relative flex-1 group">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center transition-colors group-focus-within:text-orange-500 text-gray-400">
                    <Search className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by name, expertise, or industry..."
                    className="w-full pl-12 pr-4 py-3 bg-transparent outline-none text-gray-900 text-sm font-medium placeholder:text-gray-300"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="flex gap-2 p-1 bg-gray-50/50 rounded-full w-full md:w-auto relative">
                  <button 
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-gray-900 rounded-full font-bold shadow-sm hover:bg-gray-50 transition-all text-xs uppercase tracking-wider"
                  >
                    <Filter className="w-3 h-3" />
                    <span>Filter</span>
                    {isFilterOpen ? <ChevronUp className="w-3 h-3 ml-1" /> : <ChevronDown className="w-3 h-3 ml-1" />}
                  </button>
                  <button className="flex-1 md:flex-none px-8 py-2.5 bg-gray-900 text-white rounded-full font-bold hover:bg-orange-600 hover:shadow-orange-500/20 hover:shadow-lg transition-all text-xs uppercase tracking-wider">
                    Search
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isFilterOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.1 }}
                        className="absolute right-0 md:right-auto md:left-0 top-full mt-3 w-full md:w-56 bg-white border border-gray-100 shadow-2xl rounded-3xl overflow-hidden py-3 z-50"
                      >
                        <div className="px-5 pb-2 mb-2 border-b border-gray-50 flex items-center justify-between">
                          <span className="text-[10px] font-black text-gray-400 tracking-widest uppercase">Categories</span>
                        </div>
                        <div className="flex flex-col max-h-64 overflow-y-auto px-2">
                          {categories.map((cat) => (
                            <label
                              key={cat}
                              className="flex items-center gap-3 px-3 py-2.5 hover:bg-orange-50 rounded-xl cursor-pointer group transition-colors text-left"
                            >
                              <div className="relative flex items-center justify-center w-4 h-4 rounded-md border-2 border-gray-200 group-hover:border-orange-500 overflow-hidden bg-white shrink-0">
                                <input
                                  type="radio"
                                  name="category"
                                  className="absolute opacity-0 w-full h-full cursor-pointer"
                                  checked={selectedCategory === cat}
                                  onChange={() => {
                                    setSelectedCategory(cat);
                                    if (window.innerWidth < 768) setIsFilterOpen(false); // Auto close on mobile
                                  }}
                                />
                                {selectedCategory === cat && (
                                  <motion.div 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.1 }}
                                    className="w-full h-full bg-orange-500 flex items-center justify-center"
                                  >
                                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round">
                                      <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                  </motion.div>
                                )}
                              </div>
                              <span className={`text-xs font-bold tracking-wider uppercase transition-colors ${selectedCategory === cat ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-900'}`}>
                                {cat}
                              </span>
                            </label>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bot Grid Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-32 z-10 relative mt-4">

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-full max-w-sm h-[480px] bg-white rounded-[3rem] p-8 space-y-4 animate-pulse">
                <div className="h-40 bg-gray-200 rounded-3xl" />
                <div className="h-6 w-1/2 bg-gray-200 rounded-full" />
                <div className="h-4 w-full bg-gray-200 rounded-full" />
                <div className="h-4 w-2/3 bg-gray-200 rounded-full" />
              </div>
            ))}
          </div>
        ) : filteredBots.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            <AnimatePresence>
              {filteredBots.map((bot, index) => (
                <motion.div
                  key={bot.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group relative w-full max-w-sm"
                >
                  <div className="h-[520px] bg-white rounded-[3rem] border border-gray-100/50 shadow-sm hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] hover:-translate-y-3 transition-all duration-700 overflow-hidden flex flex-col p-8 cursor-pointer relative z-10">

                    {/* Premium Status / Live Status Badge */}
                    <div className="absolute top-8 right-8 z-20 flex flex-col gap-2 items-end">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 rounded-full text-[10px] font-black tracking-widest text-green-600 uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Live Now
                      </div>

                      <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-sm ${bot.is_free
                          ? "bg-blue-50 text-blue-600 border border-blue-100"
                          : "bg-purple-50 text-purple-600 border border-purple-100"
                        }`}>
                        {bot.is_free ? "Free" : `Paid: ₹${bot.unlock_price || 99}`}
                      </div>
                    </div>

                    {/* Bot Visual Section */}
                    <div className="relative mb-6 pt-2">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-50 to-white p-0.5 shadow-2xl transition-transform duration-500 group-hover:scale-110">
                        <div className="w-full h-full rounded-full bg-white overflow-hidden">
                          <BotAvatar bot={bot} className="w-full h-full" />
                        </div>
                      </div>

                      <div className="mt-6">
                        <div className="flex items-center gap-2 mb-1.5">
                          <h3 className="text-2xl font-black text-gray-900 tracking-tight group-hover:text-orange-600 transition-colors truncate">
                            {bot.name}
                          </h3>
                          <ShieldCheck size={18} className="text-blue-500 fill-blue-500/10" />
                        </div>
                        {bot.owner?.display_name && (
                          <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none mt-2">
                            <User size={10} className="text-gray-300" />
                            Created by {bot.owner.display_name}
                          </div>
                        )}
                        <button
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedProfileBot(bot); }}
                          className="mt-3 text-xs font-bold text-orange-500 hover:text-orange-600 flex items-center gap-1 bg-orange-50/50 hover:bg-orange-50 px-3 py-1.5 rounded-lg w-fit transition-colors"
                        >
                          <User size={14} /> View Profile
                        </button>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {bot.persona_config.expertise?.slice(0, 3).map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-zinc-50 text-zinc-500 text-[9px] font-black rounded-xl uppercase tracking-widest flex items-center gap-1 max-w-full">
                          <Zap size={9} className="text-orange-400 shrink-0" />
                          <span className="truncate">
                            {skill.length > 25 ? skill.slice(0, 25) + '...' : skill}
                          </span>
                        </span>
                      ))}
                    </div>

                    {/* Bio Snippet */}
                    <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed font-medium mb-auto">
                      {bot.description || `Specialized AI mentor focused on ${bot.persona_config.expertise?.join(', ')}. Ask anything about industry frameworks or leadership.`}
                    </p>

                    {/* Performance Stats Overlay Header */}
                    <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-6">
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                          <span className="text-[9px] text-gray-400 font-black uppercase tracking-widest leading-none mb-1">Success</span>
                          <span className="text-lg font-black text-gray-900 tracking-tight">98%</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] text-gray-400 font-black uppercase tracking-widest leading-none mb-1">Sessions</span>
                          <span className="text-lg font-black text-gray-900 tracking-tight">
                            {bot.session_count !== undefined
                              ? bot.session_count > 1000
                                ? (bot.session_count / 1000).toFixed(1) + "k"
                                : bot.session_count
                              : "12.4k"}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => handleShare(e, bot)}
                          className="w-12 h-12 rounded-[1.5rem] bg-orange-50 text-orange-600 flex items-center justify-center hover:bg-orange-100 transition-all shadow-sm"
                        >
                          <Share2 className="w-5 h-5" />
                        </button>
                        {bot.is_unlocked ? (
                          <Link
                            href={`/chat/${bot.id}`}
                            className="w-14 h-14 rounded-[1.8rem] bg-gray-900 text-white flex items-center justify-center hover:bg-orange-600 hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl"
                          >
                            <MessageSquare className="w-6 h-6" />
                          </Link>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setSelectedUnlockBot(bot);
                            }}
                            className="w-14 h-14 rounded-[1.8rem] bg-gray-900 text-white flex items-center justify-center hover:bg-orange-600 hover:scale-110 active:scale-95 transition-all duration-300 shadow-xl relative"
                          >
                            <Lock className="w-5 h-5 absolute" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Decorative Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-orange-400/0 to-pink-500/0 rounded-[4rem] blur-2xl group-hover:from-orange-500/5 group-hover:to-pink-500/5 transition-all duration-700 pointer-events-none -z-10" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-60 bg-white rounded-[4rem] border border-dashed border-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-80 h-80 bg-gray-50 blur-[80px] rounded-full" />
            <div className="relative z-10">
              <div className="w-24 h-24 bg-gray-50 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 animate-bounce">
                <Search className="w-10 h-10 text-gray-200" />
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">No match found</h3>
              <p className="text-gray-400 max-w-sm mx-auto font-medium">Try searching for broader skills or categories.</p>
            </div>
          </div>
        )}
      </section>

      {/* Explore Footer CTA */}
      <section className="bg-white pt-24 pb-32 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-orange-100/50 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Gem className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tighter">Ready to digitize your <span className="text-orange-600">Intellect?</span></h2>
          <p className="text-lg text-gray-500 mb-10 font-medium leading-relaxed">Join the world's first network of professional AI personas today.</p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 text-white rounded-[1.8rem] font-bold hover:bg-orange-600 hover:-translate-y-1 transition-all shadow-xl shadow-gray-200"
          >
            Build Your Persona <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <UnlockModal
        isOpen={!!selectedUnlockBot}
        onClose={() => setSelectedUnlockBot(null)}
        bot={selectedUnlockBot}
        onUnlocked={handleBotUnlocked}
      />
      <ProfileModal
        bot={selectedProfileBot}
        onClose={() => setSelectedProfileBot(null)}
      />
    </div>
  );
}
