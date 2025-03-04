import { getPostBySlug } from "@/sanity/sanity.query";
import { notFound } from "next/navigation";
import { ContentSection } from "./_components";
import type { Metadata, ResolvingMetadata } from "next";
import { WhatsAppShareButton } from "@/_components/layouts";

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
      metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`),
      keywords:
        "Hindu Aarti, Aarti Songs, Bhakti Aarti, Hindu Songs, Aarti Lyrics, Aarti for Bhagawan, Aarti in hindi, Aarti Prayers, God Aarti Collection, Popular Hindu Aartis, Aarti for Worship, Aarti Collection Hindu, Lord Aarti Songs, Shiva Aarti, Ganesh Aarti, Durga Aarti, Hindu Prayer Songs, Aarti for Spirituality, Aarti Chanting, Morning Aarti Prayers, Lord Krishna Aarti, Lord Vishnu Aarti, Lord Ram Aarti, Dev Aarti, Dev Aarti Sangrah, Hindi Aarti",
      openGraph: {
        images: post.seo.seoImage?.asset?._ref,
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`,
      },
    };
  }

  return {
    title: "देव आरती संग्रह | हिन्दू भक्ति गीतों और प्रार्थनाओं का संग्रह",
    description:
      "देव आरती संग्रह में हिन्दू भक्ति गीतों और आरतियों का संपूर्ण संग्रह पाएं। विभिन्न देवताओं की आरतियाँ, जैसे शिव, गणेश, कृष्ण, और दुर्गा आरती, खोजें और अपनी पूजा को और समृद्ध बनाएं।",
    keywords:
      "Hindu Aarti, Aarti Songs, Bhakti Aarti, Hindu Songs, Aarti Lyrics, Aarti for Bhagawan, Aarti in hindi, Aarti Prayers, God Aarti Collection, Popular Hindu Aartis, Aarti for Worship, Aarti Collection Hindu, Lord Aarti Songs, Shiva Aarti, Ganesh Aarti, Durga Aarti, Hindu Prayer Songs, Aarti for Spirituality, Aarti Chanting, Morning Aarti Prayers, Lord Krishna Aarti, Lord Vishnu Aarti, Lord Ram Aarti, Dev Aarti, Dev Aarti Sangrah, Hindi Aarti",
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug; // Correctly access the slug here
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <ContentSection {...post} />
      {/* Correctly pass slug in the URL */}
      <WhatsAppShareButton
        message={post.seo.seoTitle}
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`}
      />
    </>
  );
}
