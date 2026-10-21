import Link from 'next/link';
import { Menu, X, ChevronDown, LogOut, User as UserIcon, User, Layout, Sparkles, CreditCard, Info, Mail, Smartphone, Compass } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user, setUser] = useState<any>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [imgError, setImgError] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Check initial session
        supabase.auth.getUser().then(({ data: { user } }) => {
            setUser(user);
        });

        // Listen for changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    useEffect(() => {
        setImgError(false);
    }, [user?.user_metadata?.avatar_url]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setIsDropdownOpen(false);
        router.push('/');
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-[100] border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <div className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <img src="/logo.png" alt="AskMentor" className="w-9 h-9 object-contain" />
                            <span className="font-semibold text-xl text-gray-900">AskMentor</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-7">
                        <Link href="/explore" className="text-sm font-semibold text-gray-600 hover:text-orange-700 hover:underline decoration-orange-500 underline-offset-4 transition-all">
                            Explore Personas
                        </Link>
                        {!user && (
                            <>
                                <Link href="/use-cases" className="text-sm font-semibold text-gray-600 hover:text-orange-700 hover:underline decoration-orange-500 underline-offset-4 transition-all">
                                    Use Cases
                                </Link>
                                <Link href="/about" className="text-sm font-semibold text-gray-600 hover:text-orange-700 hover:underline decoration-orange-500 underline-offset-4 transition-all">
                                    About
                                </Link>
                                <Link href="/billing" className="text-sm font-semibold text-gray-600 hover:text-orange-700 hover:underline decoration-orange-500 underline-offset-4 transition-all">
                                    Billing
                                </Link>
                            </>
                        )}

                        {user ? (
                            <div className="relative">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-100 to-pink-100 p-0.5 border border-orange-200 flex items-center justify-center overflow-hidden bg-white">
                                        {user.user_metadata?.avatar_url && !imgError ? (
                                            <img
                                                src={user.user_metadata.avatar_url}
                                                alt="User"
                                                className="w-full h-full rounded-full object-cover"
                                                onError={() => setImgError(true)}
                                            />
                                        ) : (
                                            <User size={20} className="text-orange-400" />
                                        )}
                                    </div>
                                    <ChevronDown size={14} className={`text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <>
                                            <div
                                                className="fixed inset-0 z-[-1]"
                                                onClick={() => setIsDropdownOpen(false)}
                                            />
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 overflow-hidden"
                                            >

                                                {user?.user_metadata?.role !== 'user' && (
                                                    <Link
                                                        href="/dashboard"
                                                        onClick={() => setIsDropdownOpen(false)}
                                                        className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all"
                                                    >
                                                        <Layout size={18} className="text-gray-400" />
                                                        Dashboard
                                                    </Link>
                                                )}

                                                <Link
                                                    href="/profile"
                                                    onClick={() => setIsDropdownOpen(false)}
                                                    className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all"
                                                >
                                                    <UserIcon size={18} className="text-gray-400" />
                                                    My Profile
                                                </Link>

                                                <Link
                                                    href="/use-cases"
                                                    onClick={() => setIsDropdownOpen(false)}
                                                    className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all"
                                                >
                                                    <Compass size={18} className="text-gray-400" />
                                                    Use Cases
                                                </Link>

                                                <Link
                                                    href="/billing"
                                                    onClick={() => setIsDropdownOpen(false)}
                                                    className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all"
                                                >
                                                    <CreditCard size={18} className="text-gray-400" />
                                                    Billing
                                                </Link>
                                                <Link
                                                    href="/about"
                                                    onClick={() => setIsDropdownOpen(false)}
                                                    className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all"
                                                >
                                                    <Info size={18} className="text-gray-400" />
                                                    About
                                                </Link>
                                                <Link
                                                    href="/contact"
                                                    onClick={() => setIsDropdownOpen(false)}
                                                    className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all"
                                                >
                                                    <Mail size={18} className="text-gray-400" />
                                                    Contact
                                                </Link>

                                                <Link
                                                    href="/pwa"
                                                    onClick={() => setIsDropdownOpen(false)}
                                                    className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all"
                                                >
                                                    <Smartphone size={18} className="text-gray-400" />
                                                    Install App
                                                </Link>

                                                <button
                                                    onClick={handleLogout}
                                                    className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                                >
                                                    <LogOut size={18} />
                                                    Sign Out
                                                </button>
                                            </motion.div>
                                        </>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <div className="flex items-center gap-4">
                                <Link href="/signup" className="px-6 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full hover:shadow-lg transition-all text-sm font-bold">
                                    Get Started
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-gray-600 hover:text-gray-900"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 py-4 max-h-[85vh] overflow-y-auto">
                            {user ? (
                                <div className="space-y-3">
                                    {/* Compact 2-column Small Cards Grid */}
                                    <div className="grid grid-cols-2 gap-2">
                                        <Link
                                            href="/explore"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center gap-2.5 p-3 rounded-2xl bg-orange-50/70 border border-orange-100/90 hover:bg-orange-100/70 active:scale-[0.98] transition-all"
                                        >
                                            <div className="w-8 h-8 rounded-xl bg-orange-500/15 flex items-center justify-center text-orange-600 shrink-0">
                                                <Sparkles size={16} />
                                            </div>
                                            <span className="text-xs sm:text-sm font-bold text-gray-900 truncate">Explore</span>
                                        </Link>

                                        {user?.user_metadata?.role !== 'user' && (
                                            <Link
                                                href="/dashboard"
                                                onClick={() => setIsMenuOpen(false)}
                                                className="flex items-center gap-2.5 p-3 rounded-2xl bg-purple-50/70 border border-purple-100/90 hover:bg-purple-100/70 active:scale-[0.98] transition-all"
                                            >
                                                <div className="w-8 h-8 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-600 shrink-0">
                                                    <Layout size={16} />
                                                </div>
                                                <span className="text-xs sm:text-sm font-bold text-gray-900 truncate">Dashboard</span>
                                            </Link>
                                        )}

                                        <Link
                                            href="/profile"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center gap-2.5 p-3 rounded-2xl bg-blue-50/70 border border-blue-100/90 hover:bg-blue-100/70 active:scale-[0.98] transition-all"
                                        >
                                            <div className="w-8 h-8 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-600 shrink-0">
                                                <UserIcon size={16} />
                                            </div>
                                            <span className="text-xs sm:text-sm font-bold text-gray-900 truncate">My Profile</span>
                                        </Link>

                                        <Link
                                            href="/use-cases"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center gap-2.5 p-3 rounded-2xl bg-amber-50/70 border border-amber-100/90 hover:bg-amber-100/70 active:scale-[0.98] transition-all"
                                        >
                                            <div className="w-8 h-8 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-600 shrink-0">
                                                <Compass size={16} />
                                            </div>
                                            <span className="text-xs sm:text-sm font-bold text-gray-900 truncate">Use Cases</span>
                                        </Link>

                                        <Link
                                            href="/billing"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center gap-2.5 p-3 rounded-2xl bg-pink-50/70 border border-pink-100/90 hover:bg-pink-100/70 active:scale-[0.98] transition-all"
                                        >
                                            <div className="w-8 h-8 rounded-xl bg-pink-500/15 flex items-center justify-center text-pink-600 shrink-0">
                                                <CreditCard size={16} />
                                            </div>
                                            <span className="text-xs sm:text-sm font-bold text-gray-900 truncate">Billing</span>
                                        </Link>

                                        <Link
                                            href="/about"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center gap-2.5 p-3 rounded-2xl bg-teal-50/70 border border-teal-100/90 hover:bg-teal-100/70 active:scale-[0.98] transition-all"
                                        >
                                            <div className="w-8 h-8 rounded-xl bg-teal-500/15 flex items-center justify-center text-teal-600 shrink-0">
                                                <Info size={16} />
                                            </div>
                                            <span className="text-xs sm:text-sm font-bold text-gray-900 truncate">About</span>
                                        </Link>

                                        <Link
                                            href="/contact"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center gap-2.5 p-3 rounded-2xl bg-indigo-50/70 border border-indigo-100/90 hover:bg-indigo-100/70 active:scale-[0.98] transition-all"
                                        >
                                            <div className="w-8 h-8 rounded-xl bg-indigo-500/15 flex items-center justify-center text-indigo-600 shrink-0">
                                                <Mail size={16} />
                                            </div>
                                            <span className="text-xs sm:text-sm font-bold text-gray-900 truncate">Contact</span>
                                        </Link>

                                        <Link
                                            href="/pwa"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center gap-2.5 p-3 rounded-2xl bg-gray-50 border border-gray-200/90 hover:bg-gray-100/70 active:scale-[0.98] transition-all"
                                        >
                                            <div className="w-8 h-8 rounded-xl bg-gray-500/15 flex items-center justify-center text-gray-600 shrink-0">
                                                <Smartphone size={16} />
                                            </div>
                                            <span className="text-xs sm:text-sm font-bold text-gray-900 truncate">Install App</span>
                                        </Link>
                                    </div>

                                    {/* Dedicated Full-Width Logout Card (Always Visible on Mobile) */}
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center justify-center gap-2.5 py-3 px-4 text-sm font-bold text-red-600 bg-red-50 hover:bg-red-100/80 border border-red-200/70 rounded-2xl active:scale-[0.98] transition-all shadow-xs"
                                    >
                                        <LogOut size={17} />
                                        <span>Sign Out</span>
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <Link
                                        href="/explore"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 text-base font-bold text-gray-900 hover:bg-gray-50 rounded-2xl transition-colors"
                                    >
                                        <Sparkles size={20} className="text-orange-600" />
                                        Explore Personas
                                    </Link>
                                    <Link
                                        href="/use-cases"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 text-base font-bold text-gray-900 hover:bg-gray-50 rounded-2xl transition-colors"
                                    >
                                        <Compass size={20} className="text-orange-500" />
                                        Use Cases
                                    </Link>
                                    <Link
                                        href="/about"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 text-base font-bold text-gray-900 hover:bg-gray-50 rounded-2xl transition-colors"
                                    >
                                        <Info size={20} className="text-gray-400" />
                                        About
                                    </Link>
                                    <Link
                                        href="/billing"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 text-base font-bold text-gray-900 hover:bg-gray-50 rounded-2xl transition-colors"
                                    >
                                        <CreditCard size={20} className="text-gray-400" />
                                        Billing
                                    </Link>
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 text-base font-bold text-gray-900 hover:bg-gray-50 rounded-2xl transition-colors"
                                    >
                                        <Mail size={20} className="text-gray-400" />
                                        Contact
                                    </Link>
                                    <Link
                                        href="/pwa"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 text-base font-bold text-gray-900 hover:bg-gray-50 rounded-2xl transition-colors"
                                    >
                                        <Smartphone size={20} className="text-gray-400" />
                                        Install App
                                    </Link>
                                    <div className="pt-2">
                                        <Link
                                            href="/signup"
                                            className="flex items-center justify-center py-3 text-base font-bold text-white bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl shadow-lg"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Get Started
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
