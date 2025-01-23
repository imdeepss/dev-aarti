import { Container } from "@/_components/layouts";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-primary py-20 text-white">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-secondary mb-4">
            देव आरती संग्रह के बारे में
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-xl text-secondary leading-relaxed">
            आरती की दिव्य दुनिया को जानें, हमारे भक्ति गीतों और आध्यात्मिक
            मंत्रों के संग्रह के साथ। भक्ति के इस आत्मीय अनुभव में खो जाएं और हर
            सुर में शांति पाएं।
          </p>
        </div>

        {/* Mission and Vision Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl font-medium text-secondary mb-6">
              हमारा उद्देश्य
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-4">
              हमारा उद्देश्य आरती की पवित्र प्रथा को दुनिया भर के लोगों तक
              पहुँचाना है। हम प्राचीन परंपराओं को संरक्षित करने और ध्वनि और
              भक्ति के माध्यम से भक्तों को उनके आध्यात्मिक जड़ों से जोड़ने का
              प्रयास करते हैं।
            </p>
            <Image
              width="1000"
              height="1000"
              src="/images/gods/hindu-temple-ponda.jpg"
              alt="A photo of a Hindu temple"
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Vision Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl font-medium text-secondary mb-6">
              हमारा दृष्टिकोण
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-4">
              हमारा दृष्टिकोण यह है कि हम एक प्रमुख मंच बनें, जहाँ व्यक्ति आरती
              के रागों के माध्यम से आध्यात्मिक शांति पा सकें, विभिन्न भक्ति
              परंपराओं का अन्वेषण कर सकें, और समान विचारधारा वाले आत्माओं के
              समुदाय में जुड़ सकें।
            </p>
            <Image
              width="1000"
              height="1000"
              src="/images/gods/building-silhouette.jpg"
              alt="A tranquil image of a peaceful landscape with a sunset"
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-medium text-secondary mb-6">
            टीम से मिलें
          </h2>
          <div className="flex justify-center gap-8 flex-wrap">
            {/* Team Member 1 */}
            <div className="w-40 text-center mb-8">
              <Image
                width="1000"
                height="1000"
                src="/path-to-your-image/team-member1.jpg"
                alt="Team Member"
                className="w-full h-40 object-cover rounded-full shadow-lg mb-4"
              />
              <h3 className="text-lg font-medium text-secondary">
                दीपक विश्वकर्मा
              </h3>
              <p className="text-sm text-secondary">संस्थापक</p>
            </div>
            {/* Team Member 2 */}
            <div className="w-40 text-center mb-8">
              <Image
                width="1000"
                height="1000"
                src="/path-to-your-image/team-member2.jpg"
                alt="Team Member"
                className="w-full h-40 object-cover rounded-full shadow-lg mb-4"
              />
              <h3 className="text-lg font-medium text-secondary">
                अंगद कनौजिया
              </h3>
              <p className="text-sm text-secondary">आध्यात्मिक निदेशक</p>
            </div>
            {/* Team Member 3 */}
            <div className="w-40 text-center mb-8">
              <Image
                width="1000"
                height="1000"
                src="/path-to-your-image/team-member3.jpg"
                alt="Team Member"
                className="w-full h-40 object-cover rounded-full shadow-lg mb-4"
              />
              <h3 className="text-lg font-medium text-secondary">
                सिद्धार्थ सिंह
              </h3>
              <p className="text-sm text-secondary">सामग्री निर्माता</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
