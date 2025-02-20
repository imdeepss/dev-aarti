"use client";

import { Button, Container } from "@/_components/layouts";
import { featuredData } from "@/data/index";
import BhagwanCard from "../BhagwanCard/BhagwanCard";

import { BhagwanType } from "@/type/index";
import { useState } from "react";

type BhagwanListProps = {
  bhagwanList: BhagwanType[];
};

const BhagwanList: React.FC<BhagwanListProps> = ({ bhagwanList }) => {
  const [data, setData] = useState<BhagwanType[]>(bhagwanList);

  const filterAarti = (type: string) => {
    if (type === "All") {
      setData(bhagwanList);
    } else {
      const filteredAarti = bhagwanList.filter(
        (item) => item.slug?.current === type
      );
      setData(filteredAarti);
    }
  };

  return (
    <Container className="">
      <div className="mb-8 flex justify-center flex-wrap items-center gap-4">
        {featuredData.map((button) => {
          return (
            <Button
              text={button.text}
              onClick={() => filterAarti(button.type)}
              key={button.id}
            />
          );
        })}
      </div>

      <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
        {data.map((item: BhagwanType) => (
          <BhagwanCard {...item} key={item._id} />
        ))}
      </div>
    </Container>
  );
};

export default BhagwanList;
