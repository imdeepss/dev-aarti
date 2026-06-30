"use client";

import { Container } from "@/components/layouts";
import { PostType } from "@/types/index";
import { PortableText, PortableTextComponents } from "next-sanity";
import Image from "next/image";
import { useState, useContext } from "react";
import { BhagwanContext } from "@/context/bhagwanContext";
import BhagwanCard from "@/components/home/BhagwanCard/BhagwanCard";

const customComponents: PortableTextComponents = {
  marks: {
    bold: ({ children }) => <strong className="font-bold text-accent-dark">{children}</strong>,
    underline: ({ children }) => <span className="underline decoration-accent/50 underline-offset-4">{children}</span>,
  },
  block: {
    normal: ({ children }) => (
      <p className="my-6 leading-[2.2] tracking-wide text-[1.125em] sm:text-[1.25em]">
        {children}
      </p>
    ),
    h1: ({ children }) => (
      <h1 className="text-[1.875em] font-bold text-accent-dark sm:text-[2.25em] font-amita relative my-8 text-center">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-[1.5em] font-bold text-accent-dark sm:text-[1.875em] font-amita relative my-8 text-center flex items-center justify-center gap-4">
        <span className="h-px w-12 bg-accent/30 hidden sm:block"></span>
        {children}
        <span className="h-px w-12 bg-accent/30 hidden sm:block"></span>
      </h2>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent pl-6 italic my-8 text-secondary/80 font-medium text-[1em]">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-8 my-6 space-y-3 text-[1em]">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-8 my-6 space-y-3 text-[1em]">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-2 leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="pl-2 leading-relaxed">{children}</li>,
  },
};


const ContentSection = ({ title, content, image }: PostType) => {
  const [textSize, setTextSize] = useState<number>(1); // 1 is normal, 1.25 is large, etc.

  const { bhagwanList } = useContext(BhagwanContext) || { bhagwanList: [] };
  const relatedCards = bhagwanList ? bhagwanList.filter(item => item.title !== title).slice(0, 4) : [];

  return (
    <Container className="py-12 md:py-16 relative">
      <div className="mx-auto flex w-full flex-col max-w-4xl relative">

        {/* The Reading Book Page */}
        <div className="relative overflow-hidden bg-[#FDFBF7] dark:bg-[#1A1614] rounded-r-2xl rounded-l-md shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-secondary/5 dark:border-white/5 transition-colors duration-500">

          {/* Book Spine Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/5 to-transparent dark:from-white/5 border-l-8 border-accent opacity-80" />

          <div className="p-8 md:p-16 lg:p-20 relative">

            {/* Premium Floating Action Bar - Text Size Controls */}
            <div className="fixed top-[260px] right-0 z-[100] flex flex-col items-center gap-1 md:gap-2 py-2 px-1.5 md:py-3 md:px-2 bg-white/80 dark:bg-[#1A1614]/80 shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-secondary/20 dark:border-white/10 border-r-0 rounded-l-xl md:rounded-l-2xl backdrop-blur-xl transition-all duration-300">
              
              {/* Increase Size */}
              <button
                onClick={() => setTextSize(s => Math.min(1.6, s + 0.1))}
                className="group w-7 h-7 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-[#FDFBF7] dark:bg-white/5 hover:bg-accent hover:border-accent dark:hover:bg-accent transition-all duration-300 shadow-sm border border-secondary/10 dark:border-white/5 hover:scale-110 active:scale-95"
                aria-label="Increase text size"
                title="Increase Text Size"
              >
                <span className="font-gotu text-[12px] md:text-[15px] font-bold text-secondary group-hover:text-white transition-colors duration-300">A+</span>
              </button>

              {/* Reset Size or Separator */}
              <div className="flex items-center justify-center min-h-[24px] md:min-h-[28px] w-full transition-all duration-500">
                {textSize !== 1 ? (
                  <button
                    onClick={() => setTextSize(1)}
                    className="group w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full bg-secondary/5 dark:bg-white/5 hover:bg-accent/10 hover:text-accent-dark transition-all duration-500 hover:scale-110 hover:-rotate-180 active:scale-95"
                    aria-label="Reset text size"
                    title="Reset Text Size"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 md:w-3.5 md:h-3.5 text-secondary/60 group-hover:text-accent-dark transition-colors duration-300">
                      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                      <path d="M3 3v5h5"/>
                    </svg>
                  </button>
                ) : (
                  <div className="w-4 md:w-5 h-px bg-secondary/20 dark:bg-white/10 rounded-full transition-all duration-300" />
                )}
              </div>

              {/* Decrease Size */}
              <button
                onClick={() => setTextSize(s => Math.max(0.8, s - 0.1))}
                className="group w-7 h-7 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-[#FDFBF7] dark:bg-white/5 hover:bg-accent hover:border-accent dark:hover:bg-accent transition-all duration-300 shadow-sm border border-secondary/10 dark:border-white/5 hover:scale-110 active:scale-95"
                aria-label="Decrease text size"
                title="Decrease Text Size"
              >
                <span className="font-gotu text-[10px] md:text-[13px] font-bold text-secondary group-hover:text-white transition-colors duration-300">A-</span>
              </button>
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
