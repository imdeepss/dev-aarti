import { Banner, BhagwanList, Testimonial, AboutUs } from "@/components/home";

export default async function HomePage() {
  return (
    <>
      <Banner />
      <BhagwanList />
      <AboutUs />
      <Testimonial />
    </>
  );
}
