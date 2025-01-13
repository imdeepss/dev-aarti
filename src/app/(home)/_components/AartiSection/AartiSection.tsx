"use client";

import { Button, Container } from "@/_components/layouts";
import React, { useState } from "react";
import { AartiCard, aartiCard, buttonData } from "../../data";
import Image from "next/image";
import Link from "next/link";

const AartiSection = () => {
  const [aarti, setAarti] = useState<AartiCard[]>(aartiCard);

  const filterAarti = (type: string) => {
    if (type === "All") {
      setAarti(aartiCard);
    } else {
      const filteredAarti = aartiCard.filter((item) => item.type === type);
      setAarti(filteredAarti);
    }
  };

  return (
    <Container className="z-20">
      <div className="mb-8 flex justify-center flex-wrap items-center gap-4">
        {buttonData.map((button) => (
          <Button
            text={button.text}
            onClick={() => filterAarti(button.type)}
            key={button.id}
          />
        ))}
      </div>

      <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
        {aarti.map((item) => (
          <Link href={`aarti/${item.type.toLowerCase()}`} key={item.id}>
            <div className="cursor-pointer rounded-lg border border-secondary p-4 text-center duration-500 ease-in-out hover:scale-110 flex flex-col gap-1 justify-center items-center">
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={200}
                className="flex-1"
              />
              <h2 className="text-lg font-bold text-secondary">{item.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default AartiSection;
