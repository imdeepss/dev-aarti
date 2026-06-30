"use client";

import { Container } from "@/components/layouts";
import Link from "next/link";
import { BookOpen, Flame, Sparkles, Music, Calendar, Moon, Sun, MapPin, Compass, Star, Heart, ScrollText, Users, Library, Map, Crown } from "lucide-react";

const categories = [
  { name: "आरती संग्रह", icon: Flame, href: "/aarti", color: "text-orange-500", bg: "bg-orange-500/10" },
  { name: "चालीसा", icon: BookOpen, href: "/chalisa", color: "text-red-500", bg: "bg-red-500/10" },
  { name: "स्तोत्र", icon: ScrollText, href: "/stotra", color: "text-amber-500", bg: "bg-amber-500/10" },
  { name: "मंत्र", icon: Sparkles, href: "/mantra", color: "text-indigo-500", bg: "bg-indigo-500/10" },
  { name: "भजन", icon: Music, href: "/bhajans", color: "text-pink-500", bg: "bg-pink-500/10" },
  { name: "व्रत", icon: Moon, href: "/vrat", color: "text-purple-500", bg: "bg-purple-500/10" },
  { name: "पंचांग", icon: Calendar, href: "/panchang", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { name: "त्योहार", icon: Star, href: "/festivals", color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { name: "राशिफल", icon: Sun, href: "/rashifal", color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "मंदिर", icon: Compass, href: "/temples", color: "text-rose-500", bg: "bg-rose-500/10" },
  { name: "ज्योतिर्लिंग", icon: MapPin, href: "/jyotirlinga", color: "text-cyan-500", bg: "bg-cyan-500/10" },
  { name: "शक्ति पीठ", icon: Heart, href: "/shakti-peeth", color: "text-fuchsia-500", bg: "bg-fuchsia-500/10" },
  { name: "108 नाम", icon: Crown, href: "/108-names", color: "text-violet-500", bg: "bg-violet-500/10" },
  { name: "देवी-देवता", icon: Users, href: "/gods", color: "text-teal-500", bg: "bg-teal-500/10" },
  { name: "धर्म ग्रंथ", icon: Library, href: "/scriptures", color: "text-amber-700", bg: "bg-amber-700/10" },
  { name: "तीर्थ यात्रा", icon: Map, href: "/pilgrimage", color: "text-lime-600", bg: "bg-lime-600/10" },
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 md:py-24 relative bg-[#FDFBF7] dark:bg-[#110f0e]">
      <Container>
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent/30" />
            <span className="text-accent font-gotu tracking-widest text-sm font-bold uppercase">अन्वेषण करें</span>
            <div className="h-px w-12 bg-accent/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-amita text-secondary text-center mb-6">आध्यात्मिक श्रेणियाँ</h2>
          <p className="text-secondary/70 font-gotu text-center max-w-2xl text-lg">
            सनातन धर्म के असीमित ज्ञान और भक्ति रस को अपनी पसंदीदा श्रेणी में खोजें।
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {categories.map((cat, idx) => (
            <Link 
              href={cat.href} 
              key={idx}
              className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-[#1A1614] rounded-3xl border border-secondary/5 hover:border-accent/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${cat.bg} ${cat.color}`}>
                <cat.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <span className="font-gotu font-bold text-secondary group-hover:text-accent transition-colors text-center text-sm md:text-base">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCategories;
