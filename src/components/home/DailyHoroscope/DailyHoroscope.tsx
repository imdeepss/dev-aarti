"use client";

import { Container } from "@/components/layouts";

const rashis = [
  { name: "मेष", icon: "♈", luck: "85%" },
  { name: "वृषभ", icon: "♉", luck: "70%" },
  { name: "मिथुन", icon: "♊", luck: "90%" },
  { name: "कर्क", icon: "♋", luck: "60%" },
  { name: "सिंह", icon: "♌", luck: "95%" },
  { name: "कन्या", icon: "♍", luck: "80%" },
  { name: "तुला", icon: "♎", luck: "75%" },
  { name: "वृश्चिक", icon: "♏", luck: "88%" },
  { name: "धनु", icon: "♐", luck: "82%" },
  { name: "मकर", icon: "♑", luck: "65%" },
  { name: "कुंभ", icon: "♒", luck: "78%" },
  { name: "मीन", icon: "♓", luck: "92%" },
];

export default function DailyHoroscope() {
  return (
    <section className="py-16 md:py-24 relative bg-white dark:bg-background">
      <Container>
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-accent/30" />
              <span className="text-accent font-gotu tracking-widest text-sm font-bold uppercase">ज्योतिष</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-amita text-secondary mb-4">आज का राशिफल</h2>
            <p className="text-secondary/70 font-gotu text-lg">
              जानें आज का दिन आपके लिए कैसा रहेगा। करियर, प्रेम, स्वास्थ्य और आर्थिक स्थिति।
            </p>
          </div>
          <button className="flex-shrink-0 bg-[#FDFBF7] dark:bg-[#1A1614] border border-secondary/10 hover:border-accent text-secondary hover:text-accent font-bold py-3 px-6 rounded-full transition-all duration-300">
            विस्तृत राशिफल पढ़ें →
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {rashis.map((rashi, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer bg-secondary/5 hover:bg-white dark:bg-[#1A1614] dark:hover:bg-[#221C19] border border-transparent hover:border-accent/30 p-6 rounded-3xl flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded-full bg-white dark:bg-black/20 shadow-sm flex items-center justify-center text-3xl text-accent border border-secondary/5 relative z-10 group-hover:scale-110 transition-transform duration-500">
                {rashi.icon}
              </div>
              
              <div className="text-center relative z-10">
                <h3 className="font-amita font-bold text-xl text-secondary group-hover:text-accent transition-colors mb-1">{rashi.name}</h3>
                <span className="text-xs font-gotu text-secondary/50 bg-secondary/10 px-2 py-0.5 rounded-full">शुभ: {rashi.luck}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
