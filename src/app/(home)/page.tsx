import { Banner, BhagwanList, Testimonial, AboutUs, FeaturedCategories, WisdomArticles } from "@/components/home";

export default async function HomePage() {
  return (
    <>
      <Banner />
      <FeaturedCategories />
      <BhagwanList />
      <WisdomArticles />
      <AboutUs />
      <Testimonial />
    </>
  );
}
