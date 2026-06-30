"use client";

import { Container } from "@/components/layouts";

const DailyPanchang = () => {
  // Mock data for UI presentation
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('hi-IN', options);

  return (
    <section className="py-12 md:py-20 relative bg-gradient-to-b from-[#FFFDF9] to-white dark:from-[#110f0e] dark:to-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.02]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/mandala.png")' }}></div>
      </div>
      
      <Container>
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent/30" />
            <span className="text-accent font-gotu tracking-widest text-sm font-bold uppercase">दैनिक दर्शन</span>
            <div className="h-px w-12 bg-accent/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-amita text-secondary text-center mb-4">आज का पंचांग</h2>
          <p className="text-secondary/70 font-gotu text-center max-w-2xl">{formattedDate}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6 relative z-10">
          
          {/* Panchang Details */}
          <div className="lg:col-span-2 bg-white dark:bg-[#1A1614] rounded-3xl p-8 border border-secondary/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors duration-700" />
            
            <h3 className="text-2xl font-bold text-secondary font-amita mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">🌞</span>
              पंचांग विवरण
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 font-gotu break-words">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-secondary/50">तिथि</span>
                <span className="text-base sm:text-base sm:text-lg font-bold text-secondary">कृष्ण पक्ष, एकादशी</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-secondary/50">नक्षत्र</span>
                <span className="text-base sm:text-lg font-bold text-secondary">रोहिणी</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-secondary/50">योग / करण</span>
                <span className="text-base sm:text-lg font-bold text-secondary">शोभन / बव</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-secondary/50">अभिजीत मुहूर्त</span>
                <span className="text-base sm:text-lg font-bold text-green-600 dark:text-green-400">11:58 AM - 12:50 PM</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-secondary/50 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                  सूर्योदय / सूर्यास्त
                </span>
                <span className="text-base sm:text-lg font-bold text-secondary">05:42 AM / 07:11 PM</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-secondary/50 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                  चंद्रोदय / चंद्रास्त
                </span>
                <span className="text-base sm:text-lg font-bold text-secondary">10:20 PM / 09:15 AM</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-secondary/50">शुभ मुहूर्त (अमृत काल)</span>
                <span className="text-base sm:text-lg font-bold text-green-600 dark:text-green-400">02:15 PM - 03:45 PM</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-secondary/50">राहुकाल</span>
                <span className="text-base sm:text-lg font-bold text-red-500/80">04:30 PM - 06:00 PM</span>
              </div>
            </div>

            {/* Daily Worship Recommendation */}
            <div className="mt-8 pt-6 border-t border-secondary/10">
              <div className="bg-accent/5 rounded-2xl p-4 flex items-start gap-4 border border-accent/10">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-[#1A1614] flex items-center justify-center flex-shrink-0 shadow-sm">
                  🙏
                </div>
                <div>
                  <h4 className="font-bold text-secondary font-amita text-lg mb-1">आज की पूजा अनुशंसा</h4>
                  <p className="text-sm text-secondary/70 font-gotu leading-relaxed">
                    एकादशी के पावन अवसर पर भगवान विष्णु की आराधना करें। <strong>"ॐ नमो भगवते वासुदेवाय"</strong> मंत्र का 108 बार जाप करना अत्यंत शुभ फलदायी होगा।
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-secondary/10 flex items-center justify-between">
              <p className="text-sm text-secondary/60">स्थान: नई दिल्ली, भारत</p>
              <button className="text-accent hover:text-accent-dark font-bold text-sm transition-colors">पूरा पंचांग देखें →</button>
            </div>
          </div>

          {/* Vrat & Tyohar */}
          <div className="bg-gradient-to-br from-accent to-accent-dark text-white rounded-3xl p-8 shadow-lg relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/4 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-2xl -translate-x-1/4 translate-y-1/4" />
            
            <h3 className="text-2xl font-bold font-amita mb-6 relative z-10 flex items-center gap-3">
              <span>🌸</span> आज के व्रत-त्योहार
            </h3>
            
            <div className="flex-1 flex flex-col justify-center relative z-10">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h4 className="text-xl font-bold mb-2">योगिनी एकादशी</h4>
                <p className="text-white/80 text-sm font-gotu leading-relaxed mb-4">आज भगवान विष्णु की पूजा का विशेष दिन है। एकादशी का व्रत रखने से सभी पापों का नाश होता है।</p>
                <button className="bg-white text-accent-dark font-bold py-2 px-4 rounded-xl text-sm hover:bg-white/90 transition-colors w-full">
                  व्रत कथा पढ़ें
                </button>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default DailyPanchang;
