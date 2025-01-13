"use client";

import { Button, Container } from "@/_components/layouts";
import { useState } from "react";
import { aartiData, featuredData } from "@/data/index";
import AartiCard from "../AartiCard/AartiCard";
import { AartiDataType } from "@/type/index";

const AartiCardList = () => {
  const [aarti, setAarti] = useState<AartiDataType[]>(aartiData);

  const filterAarti = (type: string) => {
    if (type === "All") {
      setAarti(aartiData);
    } else {
      const filteredAarti = aartiData.filter((item) => item.type === type);
      setAarti(filteredAarti);
    }
  };

  return (
    <Container className="z-20">
      <div className="mb-8 flex justify-center flex-wrap items-center gap-4">
        {featuredData.map((button) => (
          <Button
            text={button.text}
            onClick={() => filterAarti(button.type)}
            key={button.id}
          />
        ))}
      </div>

      <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
        {aarti.map((item, i) => (
          <AartiCard {...item} key={i} />
        ))}
      </div>
    </Container>
  );
};

export default AartiCardList;
