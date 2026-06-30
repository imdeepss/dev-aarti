"use client";

import { Container } from "@/components/layouts";
import Image from "next/image";

const texts = [
  {
    id: 1,
    title: "चार वेद",
    description: "ऋग्वेद, यजुर्वेद, सामवेद और अथर्ववेद - ज्ञान का असीम भंडार।",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "18 पुराण",
    description: "भारतीय संस्कृति, इतिहास और धर्म का विस्तृत वर्णन।",
    image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "भगवद गीता",
    description: "भगवान श्रीकृष्ण द्वारा अर्जुन को दिया गया दिव्य उपदेश।",
    image: "https://images.unsplash.com/photo-1588691563604-897db6727289?auto=format&fit=crop&q=80&w=800",
  }
];

const VedasPuranas = () => {
  return (
    <section className="py-16 md:py-24 relative bg-[#FDFBF7] dark:bg-[#151210]">
      <Container>
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent/30" />
            <span className="text-accent font-gotu tracking-widest text-sm font-bold uppercase">प्राचीन ज्ञान</span>
            <div className="h-px w-12 bg-accent/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-amita text-secondary text-center mb-6">वेद, पुराण और ग्रंथ</h2>
          <p className="text-secondary/70 font-gotu text-center max-w-2xl text-lg">सनातन धर्म के मूलभूत ग्रंथों का अध्ययन करें और जीवन के गूढ़ रहस्यों को समझें।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {texts.map((text) => (
            <div key={text.id} className="bg-white dark:bg-[#1A1614] rounded-[2rem] p-6 border border-secondary/10 hover:border-accent shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group flex flex-col items-center text-center">
              <div className="relative w-48 h-64 mb-8 transform group-hover:-translate-y-4 transition-transform duration-500">
                {/* Book Shadow */}
                <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/20 blur-xl rounded-full" />
                
                <Image
                  src={text.image}
                  alt={text.title}
                  fill
                  className="object-cover rounded-r-2xl rounded-l-md shadow-2xl border-l-4 border-accent/80"
                />
              </div>
              
              <h3 className="text-2xl font-bold font-amita text-secondary mb-3 group-hover:text-accent transition-colors">{text.title}</h3>
              <p className="text-secondary/70 font-gotu text-sm leading-relaxed mb-6">
                {text.description}
              </p>
              
              <button className="mt-auto px-6 py-2.5 bg-accent/10 hover:bg-accent text-accent-dark hover:text-white font-bold font-gotu rounded-full transition-colors duration-300">
                अध्ययन करें
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default VedasPuranas;
