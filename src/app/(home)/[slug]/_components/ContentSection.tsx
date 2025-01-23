import { Container } from "@/_components/layouts";
import { PostType } from "@/app/type";
import { PortableText, PortableTextComponents } from "next-sanity";
import Image from "next/image";

const customComponents: PortableTextComponents = {
  marks: {
    bold: ({ children }) => <strong className="font-bold">{children}</strong>,
    underline: ({ children }) => <span className="underline">{children}</span>,
  },
  block: {
    normal: ({ children }) => <p className="my-4 text-lg">{children}</p>,
    h1: ({ children }) => (
      <h1 className="text-2xl font-bold text-secondary sm:text-3xl font-amita relative my-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-bold text-secondary sm:text-2xl font-amita relative my-4">
        {children}
      </h2>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-secondary pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
};

const ContentSection = ({ title, content, image }: PostType) => {
  return (
    <Container className="py-20 relative">
      <div className="mx-auto flex w-full flex-col md:w-3/4">
        <h2 className="text-2xl font-bold text-secondary sm:text-3xl font-amita relative text-center">
          {title}
        </h2>
        <div className="bg-secondary my-4 inline-block h-1 w-16 rounded mx-auto text-center" />
        <Image
          src={image.image}
          alt={image.alt || title}
          width={200}
          height={200}
          className="object-cover mb-5 mx-auto"
        />
        <div className="mx-auto text-secondary font-gotu md:text-center">
          <PortableText value={content} components={customComponents} />
        </div>
      </div>
    </Container>
  );
};

export default ContentSection;
