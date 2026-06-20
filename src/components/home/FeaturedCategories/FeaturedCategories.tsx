import { Container } from "@/components/layouts";
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    id: 1,
    title: "श्रीमद्भगवद्गीता",
    description: "जीवन के हर संघर्ष का समाधान",
    image: "/images/gita.jpg", // placeholder
    link: "/gita",
    color: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/20"
  },
  {
    id: 2,
    title: "रामायण",
    description: "मर्यादा पुरुषोत्तम की जीवन गाथा",
    image: "/images/ramayana.jpg", // placeholder
    link: "/ramayana",
    color: "from-red-500/20 to-red-500/5",
    border: "border-red-500/20"
  },
  {
    id: 3,
    title: "वेद और उपनिषद",
    description: "सनातन धर्म का मूल ज्ञान",
    image: "/images/vedas.jpg", // placeholder
    link: "/vedas",
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/20"
  },
  {
    id: 4,
    title: "दैनिक आरतियाँ",
    description: "भक्ति और शांति के लिए",
    image: "/images/aarti.jpg", // placeholder
    link: "/aartis",
    color: "from-yellow-500/20 to-yellow-500/5",
    border: "border-yellow-500/20"
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-20 relative">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-accent font-gotu text-sm font-bold tracking-wider uppercase mb-2 block">शास्त्र और ग्रंथ</span>
            <h2 className="text-3xl md:text-5xl font-bold font-amita text-secondary drop-shadow-sm">प्रमुख श्रेणियाँ</h2>
          </div>
          <Link href="/categories" className="text-accent hover:text-accent-dark font-gotu font-medium transition-colors flex items-center gap-2">
            सभी देखें
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link href={cat.link} key={cat.id} className={`group relative rounded-3xl overflow-hidden glass-panel border ${cat.border} transition-all duration-500 hover:-translate-y-2 hover:shadow-xl`}>
              <div className={`absolute inset-0 bg-gradient-to-b ${cat.color} opacity-50 z-0`} />
              
              <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[240px]">
                <div>
                  <h3 className="text-2xl font-bold font-amita text-secondary mb-2 group-hover:text-accent-dark transition-colors">{cat.title}</h3>
                  <p className="text-secondary/70 font-gotu text-sm">{cat.description}</p>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <div className="h-12 w-12 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCategories;
