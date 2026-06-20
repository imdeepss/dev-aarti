"use client";

import { Container } from "@/components/layouts";
import { PostType } from "@/types/index";
import { PortableText, PortableTextComponents } from "next-sanity";
import Image from "next/image";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { BhagwanContext } from "@/context/bhagwanContext";
import BhagwanCard from "@/components/home/BhagwanCard/BhagwanCard";

const customComponents: PortableTextComponents = {
  marks: {
    bold: ({ children }) => <strong className="font-bold text-accent-dark">{children}</strong>,
    underline: ({ children }) => <span className="underline decoration-accent/50 underline-offset-4">{children}</span>,
  },
  block: {
    normal: ({ children }) => (
      <p className="my-6 leading-[2.2] tracking-wide text-lg sm:text-xl">
        {children}
      </p>
    ),
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-accent-dark sm:text-4xl font-amita relative my-8 text-center">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-accent-dark sm:text-3xl font-amita relative my-8 text-center flex items-center justify-center gap-4">
        <span className="h-px w-12 bg-accent/30 hidden sm:block"></span>
        {children}
        <span className="h-px w-12 bg-accent/30 hidden sm:block"></span>
      </h2>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent pl-6 italic my-8 text-secondary/80 font-medium">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-8 my-6 space-y-3">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-8 my-6 space-y-3">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-2 leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="pl-2 leading-relaxed">{children}</li>,
  },
};

// Helper to extract text for copying
const extractTextFromBlocks = (blocks: any[]) => {
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) {
        return "";
      }
      return block.children.map((child: any) => child.text).join("");
    })
    .join("\n\n");
};

const ContentSection = ({ title, content, image }: PostType) => {
  const [textSize, setTextSize] = useState<number>(1); // 1 is normal, 1.25 is large, etc.
  
  const { bhagwanList } = useContext(BhagwanContext) || { bhagwanList: [] };
  const relatedCards = bhagwanList ? bhagwanList.filter(item => item.title !== title).slice(0, 4) : [];

  const handleCopy = async () => {
    try {
      const text = extractTextFromBlocks(content as any[]);
      await navigator.clipboard.writeText(`${title}\n\n${text}`);
      toast.success("आरती कॉपी हो गई!");
    } catch (err) {
      toast.error("कॉपी करने में विफल");
    }
  };

  return (
    <Container className="py-12 md:py-16 relative">
      <div className="mx-auto flex w-full flex-col max-w-4xl relative">
        
        {/* The Reading Book Page */}
        <div className="relative overflow-hidden bg-[#FDFBF7] dark:bg-[#1A1614] rounded-r-2xl rounded-l-md shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-secondary/5 dark:border-white/5 transition-colors duration-500">
          
          {/* Book Spine Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/5 to-transparent dark:from-white/5 border-l-8 border-accent opacity-80" />
          
          <div className="p-8 md:p-16 lg:p-20 relative">
            
            {/* Action Bar (Text Size & Copy) - E-reader style, subtle and clean */}
            <div className="flex flex-wrap justify-between items-center w-full mb-12 pb-4 border-b border-secondary/10">
              <div className="text-secondary/50 text-sm font-gotu flex-1 hidden sm:block uppercase tracking-widest">
                अध्याय पठन
              </div>
              <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
                <div className="flex items-center bg-transparent border border-secondary/20 rounded-full p-1">
                  <button 
                    onClick={() => setTextSize(s => Math.max(0.8, s - 0.1))}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-secondary/10 transition-colors font-gotu text-secondary text-sm"
                    aria-label="Decrease text size"
                  >
                    A-
                  </button>
                  <div className="w-px h-4 bg-secondary/20 mx-1" />
                  <button 
                    onClick={() => setTextSize(s => Math.min(1.6, s + 0.1))}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-secondary/10 transition-colors font-gotu text-secondary text-sm"
                    aria-label="Increase text size"
                  >
                    A+
                  </button>
                </div>
                
                <button 
                  onClick={handleCopy}
                  className="text-secondary/70 hover:text-accent-dark border border-secondary/20 hover:border-accent-dark px-4 h-10 rounded-full transition-all duration-300 font-medium flex items-center text-sm"
                >
                  कॉपी करें
                </button>
              </div>
            </div>

            {/* Header Section */}
            <div className="flex flex-col items-center mb-16">
              <div className="relative p-2 mb-10 inline-block border-y border-secondary/10">
                <Image
                  src={image.image}
                  alt={image.alt || title}
                  width={200}
                  height={200}
                  className="object-cover shadow-sm transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              <h1 className="text-4xl font-bold text-secondary sm:text-5xl lg:text-6xl font-amita relative text-center leading-tight">
                {title}
              </h1>
              
              {/* Classic Book Divider */}
              <div className="mt-8 flex items-center justify-center gap-2">
                <div className="h-px w-16 bg-secondary/30" />
                <div className="w-2 h-2 rotate-45 bg-accent" />
                <div className="h-px w-16 bg-secondary/30" />
              </div>
            </div>

            {/* Portable Text Content */}
            <div 
              className="mx-auto text-secondary/90 font-gotu text-center max-w-3xl transition-all duration-300"
              style={{ fontSize: `${textSize}rem` }}
            >
              <PortableText value={content} components={customComponents} />
            </div>

            {/* Book End Mark */}
            <div className="mt-20 flex justify-center">
               <span className="text-accent text-3xl font-amita">॥ ॐ ॥</span>
            </div>
          </div>
        </div>



        {/* Related Cards (Outside the book page) */}
        {relatedCards.length > 0 && (
          <div className="mt-16 w-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-secondary/10" />
              <h3 className="text-2xl font-bold text-secondary font-amita text-center">अन्य आरतियाँ</h3>
              <div className="h-px flex-1 bg-secondary/10" />
            </div>
            <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-4">
              {relatedCards.map((item) => (
                <BhagwanCard {...item} key={item._id} />
              ))}
            </div>
          </div>
        )}
        
        {/* Community & Reviews Placeholder */}
        <div className="mt-16 bg-[#fdfbf7] dark:bg-[#1A1614] rounded-3xl p-8 border border-secondary/10">
          <div className="flex items-center justify-between mb-8 border-b border-secondary/10 pb-4">
            <h3 className="text-2xl font-bold text-secondary font-amita">भक्तों के विचार</h3>
            <button className="px-4 py-2 bg-accent/10 text-accent-dark font-bold font-gotu rounded-lg hover:bg-accent hover:text-white transition-all">
              विचार साझा करें
            </button>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-secondary/20 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold font-gotu text-secondary">राहुल शर्मा</h4>
                  <span className="text-yellow-500 text-sm">★★★★★</span>
                </div>
                <p className="text-secondary/70 font-gotu text-sm">अद्भुत प्रस्तुति। प्रतिदिन पढ़ने से मन को बहुत शांति मिलती है।</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-secondary/20 flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold font-gotu text-secondary">प्रिया वर्मा</h4>
                  <span className="text-yellow-500 text-sm">★★★★★</span>
                </div>
                <p className="text-secondary/70 font-gotu text-sm">ऑडियो फीचर बहुत अच्छा है। मैं इसे ध्यान के समय सुनती हूँ।</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Container>
  );
};

export default ContentSection;
