import { Container } from "@/components/layouts";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "@/components/layouts"; // Assuming we can use or adapt this

const Banner = () => {
  return (
    <div className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
      {/* Immersive Background */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-[#fdfbf7] dark:bg-[#1a120c]">
        {/* Subtle mandala or texture pattern could go here */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-accent/10 to-transparent dark:from-accent-dark/20" />
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] translate-x-1/3 rounded-full bg-secondary/10 blur-[150px]" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent-dark font-gotu text-sm font-semibold tracking-wide mb-6 animate-fade-in-up">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              डिजिटल आध्यात्मिक अभयारण्य
            </span>

            <h1 className="animate-fade-in-up [animation-delay:100ms] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-secondary font-amita drop-shadow-sm mb-6">
              परम ज्ञान और <br className="hidden sm:block" />
              <span className="text-accent-dark leading-normal">आंतरिक शांति</span> का मार्ग
            </h1>

            <p className="animate-fade-in-up [animation-delay:200ms] text-lg sm:text-xl text-secondary/70 font-gotu leading-relaxed max-w-2xl mb-10">
              वेद, उपनिषद, भगवद गीता, रामायण और हजारों आरतियों के सबसे बड़े और सबसे प्रामाणिक संग्रह में गोता लगाएँ। अपनी आध्यात्मिक यात्रा आज ही शुरू करें।
            </p>

            {/* Quick Actions / Global Search */}
            <div className="animate-fade-in-up [animation-delay:300ms] w-full max-w-xl flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="शास्त्र, आरती या श्लोक खोजें..."
                  className="w-full h-14 pl-6 pr-12 rounded-full bg-white dark:bg-[#2A2118] border border-secondary/20 shadow-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent font-gotu text-secondary transition-all"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center bg-accent text-white rounded-full hover:bg-accent-dark transition-colors shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
              </div>
              <Link href="/explore" className="h-14 px-8 flex items-center justify-center rounded-full bg-secondary text-primary font-gotu font-bold hover:bg-secondary/90 hover:scale-105 transition-all duration-300 shadow-xl shadow-secondary/20 whitespace-nowrap">
                अन्वेषण करें
              </Link>
            </div>

            {/* Trust Badges / Stats */}
            <div className="animate-fade-in-up [animation-delay:400ms] mt-10 flex items-center gap-6 text-sm font-gotu text-secondary/60">
              <div className="flex -space-x-3">
                <div className="h-10 w-10 rounded-full bg-accent/20 border-2 border-[#fdfbf7] flex items-center justify-center text-accent-dark font-bold">ॐ</div>
                <div className="h-10 w-10 rounded-full bg-secondary/10 border-2 border-[#fdfbf7] flex items-center justify-center">📿</div>
                <div className="h-10 w-10 rounded-full bg-accent/40 border-2 border-[#fdfbf7] flex items-center justify-center text-white">🕉️</div>
              </div>
              <div>
                <span className="font-bold text-secondary">10,000+</span> शास्त्रों और श्लोकों का संग्रह
              </div>
            </div>
          </div>

          {/* Right Column: Daily Wisdom Card */}
          <div className="lg:col-span-5 relative animate-in fade-in zoom-in duration-1000 [animation-delay:300ms]">
            <div className="relative glass-panel bg-white/70 dark:bg-[#1A1614]/80 p-8 sm:p-10 rounded-3xl shadow-2xl border border-white/50 dark:border-white/10 backdrop-blur-2xl">

              <div className="absolute -top-6 -right-6 h-24 w-24 bg-gradient-to-br from-accent to-accent-dark rounded-full blur-[30px] opacity-50 z-0" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-secondary/10">
                  <h3 className="text-xl font-bold font-amita text-accent-dark flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                    आज का श्लोक
                  </h3>
                  <span className="text-sm font-gotu text-secondary/50 bg-secondary/5 px-3 py-1 rounded-full">श्रीमद्भगवद्गीता (2.47)</span>
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <p className="text-2xl sm:text-3xl font-amita text-secondary text-center leading-relaxed mb-6 font-semibold">
                    कर्मण्येवाधिकारस्ते <br /> मा फलेषु कदाचन।
                  </p>
                  <p className="text-base text-secondary/70 font-gotu text-center italic px-4">
                    "कर्म करने में ही तुम्हारा अधिकार है, उसके फलों में कभी नहीं।"
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-secondary/10 flex justify-end items-center">
                  <Link href="/gita/chapter-2/verse-47" className="text-sm font-gotu font-bold text-accent hover:text-accent-dark transition-colors flex items-center gap-1">
                    विस्तार से पढ़ें
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Banner;
