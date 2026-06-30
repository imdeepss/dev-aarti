"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { ChevronDown, BookOpen, MapPin, Calendar, Flame } from "lucide-react";

export const navigationData = [
  {
    id: "devotion",
    title: "प्रार्थना",
    icon: Flame,
    items: [
      { name: "आरती", href: "/aarti", description: "सभी प्रमुख देवी-देवताओं की आरती" },
      { name: "चालीसा", href: "/chalisa", description: "हनुमान, शिव, दुर्गा चालीसा" },
      { name: "स्तोत्र", href: "/stotra", description: "पावन स्तोत्र संग्रह" },
      { name: "मंत्र", href: "/mantra", description: "वैदिक और पौराणिक मंत्र" },
      { name: "भजन", href: "/bhajan", description: "मधुर भजन और कीर्तन" },
      { name: "पूजा विधि", href: "/puja-vidhi", description: "संपूर्ण पूजन विधि" },
    ]
  },
  {
    id: "panchang",
    title: "पंचांग",
    icon: Calendar,
    items: [
      { name: "आज का पंचांग", href: "/panchang/today", description: "दैनिक पंचांग विवरण" },
      { name: "राशिफल", href: "/rashifal", description: "दैनिक और साप्ताहिक राशिफल" },
      { name: "व्रत-त्योहार", href: "/festivals", description: "प्रमुख भारतीय त्योहार" },
      { name: "शुभ मुहूर्त", href: "/muhurat", description: "विवाह और गृह प्रवेश मुहूर्त" },
    ]
  },
  {
    id: "pilgrimage",
    title: "तीर्थ",
    icon: MapPin,
    items: [
      { name: "12 ज्योतिर्लिंग", href: "/jyotirlinga", description: "भगवान शिव के पावन धाम" },
      { name: "51 शक्ति पीठ", href: "/shakti-peeth", description: "माता सती के सिद्ध पीठ" },
      { name: "चार धाम", href: "/char-dham", description: "भारत के चार प्रमुख धाम" },
      { name: "प्रसिद्ध मंदिर", href: "/temples", description: "भारत के प्रमुख मंदिर" },
    ]
  },
  {
    id: "wisdom",
    title: "ज्ञान",
    icon: BookOpen,
    items: [
      { name: "वेद", href: "/vedas", description: "ऋग्वेद, यजुर्वेद, सामवेद, अथर्ववेद" },
      { name: "उपनिषद", href: "/upanishads", description: "प्राचीन दार्शनिक ज्ञान" },
      { name: "पुराण", href: "/puranas", description: "18 महापुराणों का संग्रह" },
      { name: "भगवद गीता", href: "/gita", description: "जीवन का परम सत्य" },
      { name: "रामायण", href: "/ramayana", description: "मर्यादा पुरुषोत्तम की गाथा" },
      { name: "महाभारत", href: "/mahabharata", description: "विश्व का सबसे बड़ा महाकाव्य" },
    ]
  }
];

export function DesktopNav() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (
    <nav className="hidden lg:flex items-center gap-2 relative z-50">
      {navigationData.map((nav) => (
        <div
          key={nav.id}
          className="relative"
          onMouseEnter={() => handleMouseEnter(nav.id)}
          onMouseLeave={handleMouseLeave}
        >
          <button className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full font-gotu text-[15px] font-bold transition-all duration-300 ${activeMenu === nav.id ? "bg-accent/10 text-accent-dark" : "text-secondary hover:text-accent-dark hover:bg-secondary/5"}`}>
            <nav.icon className="w-4 h-4" />
            {nav.title}
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === nav.id ? "rotate-180" : ""}`} />
          </button>

          {/* Mega Dropdown */}
          <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 origin-top ${activeMenu === nav.id ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}`}>
            <div className="w-[600px] bg-white/95 dark:bg-[#1A1614]/95 backdrop-blur-2xl rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-secondary/10 overflow-hidden">
              <div className="p-8 grid grid-cols-2 gap-x-8 gap-y-6">
                {nav.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="group flex flex-col gap-1 p-3 rounded-2xl hover:bg-accent/5 transition-colors"
                  >
                    <span className="font-amita font-bold text-lg text-secondary group-hover:text-accent-dark transition-colors">{item.name}</span>
                    <span className="font-gotu text-sm text-secondary/60 line-clamp-1">{item.description}</span>
                  </Link>
                ))}
              </div>
              <div className="bg-secondary/5 p-4 text-center">
                <Link href={`/${nav.id}`} className="text-sm font-bold font-gotu text-accent hover:text-accent-dark flex items-center justify-center gap-1">
                  सभी {nav.title} देखें <ChevronDown className="w-4 h-4 -rotate-90" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </nav>
  );
}
