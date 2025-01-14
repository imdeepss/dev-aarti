"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Key } from "react";
import { Container } from "@/_components/layouts";
import { testimonials } from "@/data/index";

const Testimonial = () => {
  return (
    <Container className="py-20 px-6">
      <h2 className="text-2xl font-bold text-secondary sm:text-3xl font-amita text-center">
        ईश्वर और महापुरुषों के अनमोल उपदेश
      </h2>
      <div className="max-w-3xl mx-auto">
        <Swiper
          modules={[EffectFade, Pagination, Autoplay]}
          effect="fade"
          pagination={{ clickable: true, type: "fraction" }}
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
