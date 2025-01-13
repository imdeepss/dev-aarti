import { Container } from '@/_components/layouts';

const Banner = () => {
  return (
    <Container className="py-20">
      <div className="mx-auto flex w-full flex-col text-center md:w-3/4">
        <h1 className="text-2xl font-bold text-secondary sm:text-3xl font-amita relative">
          आध्यात्मिक आरती का संग्रह
        </h1>
        <div className="bg-secondary my-4 inline-block h-1 w-16 rounded mx-auto" />
        <p className="mx-auto text-base text-tertiary font-gotu">
          यहां विभिन्न देवी-देवताओं की आर्टियाँ हैं, जो आपके जीवन में शांति और
          आशीर्वाद लाने के लिए समर्पित हैं। इन भजनों के माध्यम से आप अपनी आत्मा
          को शुद्ध कर सकते हैं और दिव्यता का अनुभव कर सकते हैं।
        </p>
      </div>
    </Container>
  );
};

export default Banner;
