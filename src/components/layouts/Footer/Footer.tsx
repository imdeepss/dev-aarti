import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#110f0e] text-white pt-20 pb-10 overflow-hidden">
      {/* Decorative Mandala Background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/mandala.png")' }} />
      <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] bg-accent rounded-full blur-[150px] opacity-20 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 border-b border-white/10 pb-16">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="p-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm group-hover:bg-accent/20 transition-colors">
                <Image src="/images/logo.png" alt="देव आरती संग्रह" width={48} height={48} className="rounded-full" />
              </div>
              <span className="text-3xl font-amita font-bold text-white tracking-wide">देव आरती संग्रह</span>
            </Link>
            <p className="text-white/60 font-gotu text-sm leading-relaxed max-w-sm">
              सनातन धर्म का सबसे व्यापक डिजिटल मंच। हमारा उद्देश्य भारतीय संस्कृति, प्राचीन ज्ञान, और भक्ति साहित्य को प्रामाणिक रूप से हर घर तक पहुंचाना है।
            </p>
            <div className="flex items-center gap-4 mt-2">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-amita font-bold text-xl text-accent-light">प्रार्थना</h3>
            <ul className="flex flex-col gap-3 font-gotu text-sm text-white/70">
              <li><Link href="/aarti" className="hover:text-accent transition-colors">संपूर्ण आरती संग्रह</Link></li>
              <li><Link href="/chalisa" className="hover:text-accent transition-colors">चालीसा संग्रह</Link></li>
              <li><Link href="/mantra" className="hover:text-accent transition-colors">वैदिक मंत्र</Link></li>
              <li><Link href="/stotra" className="hover:text-accent transition-colors">स्तोत्र</Link></li>
              <li><Link href="/puja-vidhi" className="hover:text-accent transition-colors">पूजा विधि</Link></li>
            </ul>
          </div>

          {/* Knowledge & Calendar */}
          <div className="flex flex-col gap-6">
            <h3 className="font-amita font-bold text-xl text-accent-light">ज्ञान एवं पंचांग</h3>
            <ul className="flex flex-col gap-3 font-gotu text-sm text-white/70">
              <li><Link href="/panchang" className="hover:text-accent transition-colors">दैनिक पंचांग</Link></li>
              <li><Link href="/rashifal" className="hover:text-accent transition-colors">आज का राशिफल</Link></li>
              <li><Link href="/festivals" className="hover:text-accent transition-colors">व्रत और त्योहार</Link></li>
              <li><Link href="/vedas" className="hover:text-accent transition-colors">वेद और पुराण</Link></li>
              <li><Link href="/gita" className="hover:text-accent transition-colors">श्रीमद्भगवद्गीता</Link></li>
            </ul>
          </div>

          {/* Legal & About */}
          <div className="flex flex-col gap-6">
            <h3 className="font-amita font-bold text-xl text-accent-light">अन्य लिंक्स</h3>
            <ul className="flex flex-col gap-3 font-gotu text-sm text-white/70">
              <li><Link href="/about" className="hover:text-accent transition-colors">हमारे बारे में</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">संपर्क करें</Link></li>
              <li><Link href="/privacy" className="hover:text-accent transition-colors">गोपनीयता नीति</Link></li>
              <li><Link href="/terms" className="hover:text-accent transition-colors">नियम और शर्तें</Link></li>
              <li><Link href="/sitemap" className="hover:text-accent transition-colors">साइट मैप</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white/50 text-xs font-gotu">
          <p>© {currentYear} देव आरती संग्रह। सर्वाधिकार सुरक्षित।</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> विश्वसनीय स्रोत
            </span>
            <span className="font-amita font-bold text-base text-accent-light/80">
              ॥ धर्मो रक्षति रक्षितः ॥
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
