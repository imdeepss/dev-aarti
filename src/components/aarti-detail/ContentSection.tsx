"use client";

import { Container } from "@/components/layouts";
import { PostType } from "@/types/index";
import { PortableText, PortableTextComponents } from "next-sanity";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

const customComponents: PortableTextComponents = {
  marks: {
    bold: ({ children }) => <strong className="font-bold text-accent-dark">{children}</strong>,
    underline: ({ children }) => <span className="underline decoration-accent/50 underline-offset-4">{children}</span>,
  },
  block: {
    normal: ({ children }) => <p className="my-5 leading-loose tracking-wide">{children}</p>,
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-accent-dark sm:text-4xl font-amita relative my-6 text-center drop-shadow-sm">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-accent-dark sm:text-3xl font-amita relative my-6 text-center drop-shadow-sm">
        {children}
      </h2>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent pl-6 italic my-6 bg-accent/5 p-4 rounded-r-lg shadow-sm">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-8 my-4 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-8 my-4 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-2">{children}</li>,
    number: ({ children }) => <li className="pl-2">{children}</li>,
  },
};

import { useContext } from "react";
import { BhagwanContext } from "@/context/bhagwanContext";
import BhagwanCard from "@/components/home/BhagwanCard/BhagwanCard";

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
    <Container className="py-12 md:py-20 relative">
      <div className="mx-auto flex w-full flex-col max-w-4xl relative">
        
        {/* The Reading Card */}
        <div className="glass-panel p-6 md:p-12 rounded-3xl relative overflow-hidden bg-primary/80">
          
          {/* Subtle background decoration inside the card */}
          <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 -z-10 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />

          {/* Action Bar (Text Size & Copy) - Clean layout without overlap */}
          <div className="flex flex-wrap justify-between items-center w-full mb-10 pb-4 border-b border-secondary/10">
            <div className="text-secondary/60 text-sm font-gotu flex-1 hidden sm:block">पढ़ने के लिए अपनी पसंद सेट करें</div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <div className="flex items-center bg-secondary/10 rounded-full p-1 backdrop-blur-md border border-secondary/10 shadow-sm">
                <button 
                  onClick={() => setTextSize(s => Math.max(0.8, s - 0.1))}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary/20 transition-colors font-gotu text-secondary font-bold"
                  aria-label="Decrease text size"
                >
                  A-
                </button>
                <div className="w-px h-5 bg-secondary/20 mx-1" />
                <button 
                  onClick={() => setTextSize(s => Math.min(1.6, s + 0.1))}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary/20 transition-colors font-gotu text-secondary font-bold"
                  aria-label="Increase text size"
                >
                  A+
                </button>
              </div>
              
              <button 
                onClick={handleCopy}
                className="bg-accent/10 text-accent-dark border border-accent/20 hover:bg-accent hover:text-white px-5 h-12 rounded-full transition-all duration-300 font-medium flex items-center shadow-sm whitespace-nowrap"
              >
                कॉपी करें
              </button>
            </div>
          </div>

          {/* Header Section */}
          <div className="flex flex-col items-center mb-12">
            <h1 className="text-3xl font-bold text-secondary sm:text-5xl font-amita relative text-center leading-tight drop-shadow-sm mb-4">
              {title}
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full opacity-80" />
            
            <div className="mt-8 relative p-2 rounded-2xl bg-secondary/5 border border-secondary/10 shadow-inner inline-block">
              <Image
                src={image.image}
                alt={image.alt || title}
                width={250}
                height={250}
                className="object-cover rounded-xl shadow-md transform transition-transform hover:scale-105 duration-500"
              />
            </div>
          </div>

          {/* Portable Text Content */}
          <div 
            className="mx-auto text-secondary font-gotu md:text-center transition-all duration-300"
            style={{ fontSize: `${textSize}rem` }}
          >
            <PortableText value={content} components={customComponents} />
          </div>

          {/* Decorative Footer */}
          <div className="mt-16 mb-8 flex justify-center">
            <div className="h-0.5 w-48 bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
          </div>
          
          {/* Related Cards */}
          {relatedCards.length > 0 && (
            <div className="mt-12 w-full pt-8 border-t border-secondary/10">
              <h3 className="text-2xl font-bold text-secondary font-amita mb-8 text-center drop-shadow-sm">अन्य आरतियाँ</h3>
              <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-4">
                {relatedCards.map((item) => (
                  <BhagwanCard {...item} key={item._id} />
                ))}
              </div>
            </div>
          )}
          
        </div>
      </div>
    </Container>
  );
};

export default ContentSection;
