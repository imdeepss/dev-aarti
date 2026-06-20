import React from "react";
import { Container } from "@/components/layouts";
import Link from "next/link";

const AboutUs = () => {
  return (
    <Container className="py-20 text-center">
      <div className="mx-auto flex w-full flex-col md:w-3/4">
        <h2 className="text-3xl font-bold text-secondary sm:text-4xl font-amita">
          देव आरती संग्रह के बारे में
        </h2>
        <div className="bg-[#ff9933] my-6 inline-block h-1.5 w-24 rounded-full mx-auto shadow-sm" />
        <p className="mx-auto text-xl text-secondary font-gotu mb-10 leading-relaxed">
          हमारा उद्देश्य आरती की पवित्र प्रथा को दुनिया भर के लोगों तक पहुँचाना
          है। आध्यात्मिक शांति और भक्ति के इस आत्मीय अनुभव में हमारे साथ जुड़ें।
        </p>
        <Link
          href="/about"
          className="group relative inline-block px-8 py-3 font-medium mx-auto"
        >
          <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-secondary transition duration-400 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 h-full w-full border border-secondary bg-primary"></span>
          <span className="relative text-secondary text-lg font-gotu">
            अधिक जानें
          </span>
        </Link>
      </div>
    </Container>
  );
};

export default AboutUs;
