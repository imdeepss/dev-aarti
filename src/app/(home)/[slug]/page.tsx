import { getPostBySlug } from "@/sanity/sanity.query";
import { notFound } from "next/navigation";
import { ContentSection } from "./_components";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const post = await getPostBySlug(slug);

  if (post?.seo) {
    return {
      title: post.seo.seoTitle,
      description: post.seo.seoDescription,
      openGraph: {
        images: post.seo.seoImage?.asset?._ref,
      },
    };
  }

  return {
    title: "देव आरती संग्रह | हिन्दू भक्ति गीतों और प्रार्थनाओं का संग्रह",
    description:
      "देव आरती संगरह में हिन्दू भक्ति गीतों और आरतियों का संपूर्ण संग्रह पाएं। आध्यात्मिकता, श्रद्धा और दैनिक पूजा से जुड़ी प्रार्थनाओं को खोजें।",
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return <ContentSection {...post} />;
}
