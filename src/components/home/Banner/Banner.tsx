import { Container } from "@/components/layouts";

const Banner = () => {
  return (
    <div className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
      
      <Container className="relative">
        <div className="mx-auto flex w-full flex-col text-center md:w-3/4">
          <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight text-accent-dark sm:text-5xl lg:text-6xl font-amita drop-shadow-sm leading-relaxed py-2">
            आध्यात्मिक आरती का संग्रह
          </h1>
          
          <div className="animate-fade-in-up [animation-delay:200ms] bg-gradient-to-r from-transparent via-accent to-transparent my-8 mx-auto h-1 w-32 rounded-full opacity-80" />
          
          <p className="animate-fade-in-up [animation-delay:400ms] mx-auto text-xl text-secondary/80 font-gotu font-medium leading-relaxed max-w-2xl">
            यहां विभिन्न देवी-देवताओं की आरती हैं, जो आपके जीवन में शांति और
            आशीर्वाद लाने के लिए समर्पित हैं। इन भजनों के माध्यम से आप अपनी आत्मा
            को शुद्ध कर सकते हैं और दिव्यता का अनुभव कर सकते हैं।
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
