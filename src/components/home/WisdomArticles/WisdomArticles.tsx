import { Container } from "@/components/layouts";
import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "ध्यान का अर्थ और महत्व",
    category: "ज्ञान",
    date: "१५ जून, २०२६",
    excerpt: "आधुनिक जीवन में ध्यान कैसे हमें आंतरिक शांति और एकाग्रता प्राप्त करने में मदद कर सकता है।",
    image: "/images/meditation.jpg", // placeholder
  },
  {
    id: 2,
    title: "सनातन धर्म के प्रमुख सिद्धांत",
    category: "अध्यात्म",
    date: "१२ जून, २०२६",
    excerpt: "कर्म, धर्म, और मोक्ष की अवधारणाओं को सरल शब्दों में समझें।",
    image: "/images/dharma.jpg", // placeholder
  },
  {
    id: 3,
    title: "दैनिक पूजा की सरल विधि",
    category: "संस्कृति",
    date: "१० जून, २०२६",
    excerpt: "अपने व्यस्त दिनचर्या में भी भगवान की पूजा और स्मरण करने के सरल तरीके।",
    image: "/images/pooja.jpg", // placeholder
  }
];

const WisdomArticles = () => {
  return (
    <section className="py-20 relative">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-accent font-gotu text-sm font-bold tracking-wider uppercase mb-2 block">अध्यात्म और जीवन</span>
            <h2 className="text-3xl md:text-5xl font-bold font-amita text-secondary drop-shadow-sm">ज्ञान एवं लेख</h2>
          </div>
          <Link href="/articles" className="text-accent hover:text-accent-dark font-gotu font-medium transition-colors flex items-center gap-2">
            सभी पढ़ें
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link href={`/articles/${article.id}`} key={article.id} className="group flex flex-col bg-white dark:bg-[#1A1614] rounded-3xl overflow-hidden border border-secondary/10 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-48 w-full bg-secondary/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <span className="absolute bottom-4 left-4 z-20 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">{article.category}</span>
                {/* Fallback pattern since we don't have images */}
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==')] group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-sm text-secondary/50 font-gotu mb-3">{article.date}</div>
                <h3 className="text-xl font-bold font-amita text-secondary mb-3 group-hover:text-accent-dark transition-colors">{article.title}</h3>
                <p className="text-secondary/70 font-gotu text-sm line-clamp-2">{article.excerpt}</p>
                
                <div className="mt-auto pt-6 flex items-center text-accent text-sm font-bold group-hover:gap-2 transition-all">
                  पूरा पढ़ें
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WisdomArticles;
