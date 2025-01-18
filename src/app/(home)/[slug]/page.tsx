import { getPostBySlug } from "@/sanity/sanity.query";
import { notFound } from "next/navigation";
import { ContentSection } from "./_components";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <ContentSection {...post} />;
}
