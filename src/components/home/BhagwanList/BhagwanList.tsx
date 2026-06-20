"use client";

import { Button, Container } from "@/components/layouts";
import { featuredData } from "@/data/index";
import BhagwanCard from "../BhagwanCard/BhagwanCard";

import { BhagwanType } from "@/types/index";
import { useContext, useState, useEffect } from "react";
import { BhagwanContext } from "@/context/bhagwanContext";
import SkeletonCard from "../SkeletonCard";

const BhagwanList = () => {
  const { bhagwanList, searchData = () => {} } = useContext(BhagwanContext) || {
    bhagwanList: [],
  };
  const [data, setData] = useState<BhagwanType[] | null>(bhagwanList);

  useEffect(() => {
    if (bhagwanList) {
      setData(bhagwanList);
    }
  }, [bhagwanList]);

  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterAarti = (type: string) => {
    setActiveFilter(type);
    if (type === "All") {
      searchData("");
    } else {
      searchData(type);
    }
  };

  return (
    <section className="py-16 relative bg-secondary/5">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
          <div className="text-center md:text-left">
            <span className="text-accent font-gotu text-sm font-bold tracking-wider uppercase mb-2 block">देवी-देवता</span>
            <h2 className="text-3xl md:text-5xl font-bold font-amita text-secondary drop-shadow-sm">पवित्र निर्देशिका</h2>
          </div>
          <div className="flex justify-center flex-wrap items-center gap-3">
            {featuredData.map((button) => {
              return (
                <Button
                  text={button.text}
                  onClick={() => filterAarti(button.type)}
                  key={button.id}
                  active={activeFilter === button.type}
                />
              );
            })}
          </div>
        </div>

        <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-6">
          {data
            ? data?.map((item: BhagwanType) => {
                return <BhagwanCard {...item} key={item._id} />;
              })
            : Array.from({ length: 12 }, (_, index) => {
                return <SkeletonCard key={index} />;
              })}
        </div>
        
        <div className="mt-12 flex justify-center">
          <button className="px-8 py-3 rounded-full border-2 border-secondary/20 text-secondary font-gotu font-medium hover:bg-secondary hover:text-primary transition-all duration-300">
            सभी देवता देखें
          </button>
        </div>
      </Container>
    </section>
  );
};

export default BhagwanList;
