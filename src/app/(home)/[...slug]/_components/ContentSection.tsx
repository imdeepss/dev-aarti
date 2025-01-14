"use client";

import { godBooksType } from "@/type/index";

const ContentSection = ({ title, content }: godBooksType) => {
  return (
    <div className="mx-auto flex w-full flex-col text-center md:w-3/4">
      <h2 className="text-2xl font-bold text-secondary sm:text-3xl font-amita relative">
        {title}
      </h2>
      <div className="bg-secondary my-4 inline-block h-1 w-16 rounded mx-auto" />

      <div className="mx-auto text-base text-tertiary font-gotu">
        {content.map((item, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: item.content }} />
        ))}
      </div>
    </div>
  );
};

export default ContentSection;
