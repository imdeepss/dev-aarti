import { Container } from "@/_components/layouts";
import { PostType } from "@/app/type";
import { PortableText } from "next-sanity";
import Image from "next/image";

const ContentSection = ({ title, content, image }: PostType) => {
  return (
    <Container className="py-20">
      <div className="mx-auto flex w-full flex-col text-center md:w-3/4">
        <h2 className="text-2xl font-bold text-secondary sm:text-3xl font-amita relative">
          {title}
        </h2>
        <div className="bg-secondary my-4 inline-block h-1 w-16 rounded mx-auto" />
        <Image
          src={image.image}
          alt={image.alt || title}
          width={200}
          height={200}
          className="object-cover mb-10 mx-auto"
        />
        <div className="mx-auto text-base text-tertiary font-gotu">
          <PortableText value={content} />
        </div>
      </div>
    </Container>
  );
};

export default ContentSection;
