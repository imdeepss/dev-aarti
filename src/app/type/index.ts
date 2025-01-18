import { PortableTextBlock } from "sanity";

export type SeoType = {
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  seoImage: {
    alt: string;
    image: string;
  };
};

export type BookType = {
  _id: string;
  bookTypeName: string;
  description: string;
};

export type SlugType = {
  current: string;
};

export type BhagwanType = {
  _id: string;
  id: string;
  title: string;
  slug: SlugType;
  image: {
    alt: string;
    image: string;
  };
  type: BookType[];
};

export type PostType = {
  _id: string;
  id: string;
  title: string;
  slug: string;
  type: BookType[];
  image: {
    alt: string;
    image: string;
  };
  content: PortableTextBlock[];
  seo: SeoType;
};
