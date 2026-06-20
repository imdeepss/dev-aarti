import { Container } from "@/components/layouts";

const Banner = () => {
  return (
    <Container className="py-24">
      <div className="mx-auto flex w-full flex-col text-center md:w-3/4 animate-in fade-in slide-in-from-bottom-5 duration-1000">
        <h1 className="text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl font-amita relative drop-shadow-sm">
          आध्यात्मिक आरती का संग्रह
        </h1>
        <div className="bg-[#ff9933] my-6 inline-block h-1.5 w-24 rounded-full mx-auto shadow-sm" />
        <p className="mx-auto text-xl text-secondary font-gotu font-medium leading-relaxed opacity-90">
          यहां विभिन्न देवी-देवताओं की आरती हैं, जो आपके जीवन में शांति और
          आशीर्वाद लाने के लिए समर्पित हैं। इन भजनों के माध्यम से आप अपनी आत्मा
          को शुद्ध कर सकते हैं और दिव्यता का अनुभव कर सकते हैं।
        </p>
      </div>
    </Container>
  );
};

export default Banner;
