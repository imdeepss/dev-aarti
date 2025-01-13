import { Container } from "@/_components/layouts";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <Container className="py-20">
      <div className="mb-8 flex justify-center flex-wrap items-center gap-4">
        {slug}
      </div>
    </Container>
  );
}
