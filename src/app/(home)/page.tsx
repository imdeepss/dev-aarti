import { 
  Banner, 
  BhagwanList, 
  Testimonial, 
  AboutUs, 
  FeaturedCategories, 
  WisdomArticles,
  DailyPanchang,
  SacredPlaces,
  FamousTemples,
  VedasPuranas,
  DailyHoroscope
} from "@/components/home";

export default async function HomePage() {
  return (
    <>
      <Banner />
      <DailyPanchang />
      <DailyHoroscope />
      <FeaturedCategories />
      <BhagwanList />
      <SacredPlaces />
      <FamousTemples />
      <VedasPuranas />
      <WisdomArticles />
      <AboutUs />
      <Testimonial />
    </>
  );
}
