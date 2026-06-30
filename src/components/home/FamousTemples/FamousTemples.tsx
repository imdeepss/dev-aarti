"use client";

import { Container } from "@/components/layouts";
import Image from "next/image";

const temples = [
  {
    id: 1,
    name: "काशी विश्वनाथ मंदिर",
    location: "वाराणसी, उत्तर प्रदेश",
    image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "तिरुपति बालाजी",
    location: "तिरुमाला, आंध्र प्रदेश",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "वैष्णो देवी",
    location: "कटरा, जम्मू और कश्मीर",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "स्वर्ण मंदिर (हरिमंदिर साहिब)",
    location: "अमृतसर, पंजाब",
    image: "https://images.unsplash.com/photo-1514222026256-427f71b9be1f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    name: "मीनाक्षी अम्मन मंदिर",
    location: "मदुरै, तमिलनाडु",
    image: "https://images.unsplash.com/photo-1600085448666-4e0e561bfaf6?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    name: "सोमनाथ मंदिर",
    location: "वेरावल, गुजरात",
    image: "https://images.unsplash.com/photo-1596422846543-74c6fc0e28f1?auto=format&fit=crop&q=80&w=800",
  }
];

const FamousTemples = () => {
  return (
    <section className="py-16 md:py-24 relative bg-white dark:bg-background overflow-hidden">
      {/* Abstract divine background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-dark/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-accent/30" />
              <span className="text-accent font-gotu tracking-widest text-sm font-bold uppercase">प्रसिद्ध मंदिर</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-amita text-secondary mb-4">भारत के भव्य मंदिर</h2>
            <p className="text-secondary/70 font-gotu text-lg">
              अद्भुत वास्तुकला और गहरी आस्था के प्रतीक इन भव्य मंदिरों के दर्शन करें।
            </p>
          </div>
          <button className="flex-shrink-0 bg-[#FDFBF7] dark:bg-[#1A1614] border border-secondary/10 hover:border-accent text-secondary hover:text-accent font-bold py-3 px-6 rounded-full transition-all duration-300 w-fit">
            सभी मंदिर देखें →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {temples.map((temple) => (
            <div key={temple.id} className="group cursor-pointer">
              <div className="relative h-[250px] md:h-[300px] rounded-3xl overflow-hidden mb-4 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <Image
                  src={temple.image}
                  alt={temple.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-accent-dark w-10 h-10 rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
              <h3 className="text-xl font-bold font-amita text-secondary mb-1 group-hover:text-accent transition-colors">{temple.name}</h3>
              <p className="text-secondary/60 font-gotu text-sm flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                {temple.location}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FamousTemples;
