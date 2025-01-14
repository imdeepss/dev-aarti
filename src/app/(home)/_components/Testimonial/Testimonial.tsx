"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Key } from "react";
import { Container } from "@/_components/layouts";

const testimonials = [
  {
    quote: `"न हि देहभृता शक्यं त्यक्तुं कर्माण्यशेषतः। यस्तु कर्मफलत्यागी स त्यागीतः सदा सुखी।"`,
    source: "(Mahabharata, Shanti Parva 264.27)",
    author: "भगवान श्री कृष्ण",
  },
  {
    quote: `"कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।"`,
    source: "(Bhagavad Gita 2.47)",
    author: "भगवान श्री कृष्ण",
  },
  {
    quote: `"यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्।"`,
    source: "(Bhagavad Gita 4.7)",
    author: "भगवान श्री कृष्ण",
  },
];

const Testimonial = () => {
  return (
    <Container className="py-20 px-6">
      <h2 className="text-center text-3xl font-bold text-orange-700 mb-8">
        भगवान श्री कृष्ण के उपदेश
      </h2>
      <div className="max-w-3xl mx-auto">
        <Swiper
          modules={[EffectFade, Pagination, Autoplay]}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {testimonials.map(
            (
              testimonial: {
                quote: string;
                source: string;
                author: string;
              },
              index: Key | null | undefined
            ) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 rounded-lg text-center">
                  <p className="text-lg leading-relaxed">{testimonial.quote}</p>
                  <div className="bg-secondary my-4 inline-block h-1 w-16 rounded mx-auto" />
                  <h2 className="title-font text-sm font-medium tracking-wider text-secondary">
                    {testimonial.source}
                  </h2>
                  <p className="text-tertiary"> {testimonial.author}</p>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </Container>
  );
};

export default Testimonial;
