"use client";

import { Container } from "@/components/layouts";
import Link from "next/link";
import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const quickLinks = [
  { text: "आरती संग्रह", icon: "🪔", href: "/aarti" },
  { text: "चालीसा", icon: "📿", href: "/chalisa" },
  { text: "स्तोत्र", icon: "📜", href: "/stotra" },
  { text: "पंचांग", icon: "📅", href: "/panchang" },
  { text: "राशिफल", icon: "⭐", href: "/rashifal" },
  { text: "ज्योतिर्लिंग", icon: "🔱", href: "/jyotirlinga" },
  { text: "मंदिर", icon: "🛕", href: "/temples" },
  { text: "त्योहार", icon: "🎉", href: "/festivals" },
];

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-36 min-h-[90vh] flex items-center justify-center bg-[#FDFBF7] dark:bg-[#110f0e]">
      
      {/* Immersive Premium Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.02]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/mandala.png")' }}></div>
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[70%] bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-gradient-to-tl from-orange-500/10 to-transparent rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
          
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent-dark font-gotu text-sm font-bold tracking-widest uppercase mb-8 animate-in slide-in-from-bottom-4 duration-700 fade-in">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            सनातन धर्म का सम्पूर्ण भक्ति पोर्टल
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-amita text-secondary tracking-tight mb-8 drop-shadow-sm animate-in slide-in-from-bottom-8 duration-700 fade-in delay-100 leading-[1.2]">
            परम ज्ञान और <br />
            <span className="bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">आंतरिक शांति</span> का मार्ग
          </h1>

          <p className="text-lg md:text-xl text-secondary/70 font-gotu max-w-3xl mb-12 leading-relaxed animate-in slide-in-from-bottom-8 duration-700 fade-in delay-200">
            आरती, चालीसा, स्तोत्र, मंत्र, राशिफल, पंचांग, व्रत-त्योहार, 12 ज्योतिर्लिंग, 51 शक्ति पीठ, प्रसिद्ध मंदिर, पूजा विधि और सनातन धर्म की प्रामाणिक जानकारी — एक ही स्थान पर।
          </p>

          {/* Premium Search Bar */}
          <div className="w-full max-w-2xl relative mb-16 animate-in slide-in-from-bottom-8 duration-700 fade-in delay-300">
            <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-50" />
            <form onSubmit={handleSearch} className="relative flex items-center w-full h-16 md:h-20 bg-white/80 dark:bg-[#1A1614]/80 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-2">
              <div className="pl-6 text-secondary/50">
                <Search className="w-6 h-6" />
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="आरती, मंत्र, या मंदिर खोजें..." 
                className="flex-1 h-full bg-transparent border-none outline-none px-4 font-gotu text-lg text-secondary placeholder:text-secondary/40"
              />
              <button type="submit" className="h-full px-8 bg-accent hover:bg-accent-dark text-white rounded-full font-bold font-gotu text-lg shadow-md transition-all duration-300 hover:scale-105 active:scale-95">
                खोजें
              </button>
            </form>
          </div>

          {/* Quick Navigation Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 animate-in slide-in-from-bottom-8 duration-700 fade-in delay-500">
            {quickLinks.map((link, idx) => (
              <Link 
                key={idx} 
                href={link.href}
                className="flex items-center gap-2 px-5 py-3 bg-white/60 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 border border-secondary/10 hover:border-accent/50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group backdrop-blur-md"
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
                <span className="font-gotu font-bold text-secondary">{link.text}</span>
              </Link>
            ))}
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Banner;
