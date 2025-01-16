import { Container } from "@/_components/layouts";
import godBooks from "@/data/godBooks";
import { ContentSection, NotFound } from "./_components";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const [title, id] = [slug[0], slug[1]];

  const books = godBooks.find((book) => book.type === title && book.id === id);

  return (
    <Container className="py-20">
      {books ? <ContentSection {...books} /> : <NotFound />}
    </Container>
  );
}
