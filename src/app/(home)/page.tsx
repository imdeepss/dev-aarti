import { BhagwanList, Banner, Testimonial } from "./_components";
import { getBhagwanList } from "@/sanity/sanity.query";

export default async function HomePage() {
  const bhagwanList = await getBhagwanList();

  return (
    <>
      <Banner />
      <BhagwanList bhagwanList={bhagwanList} />
      <Testimonial />
    </>
  );
}
