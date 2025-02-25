"use client";

import { getBhagwanList } from "@/sanity/sanity.query";
import React, { createContext, useEffect, useState } from "react";
import { BhagwanType } from "../types";

export const BhagwanContext = createContext<
  | {
      bhagwanList: BhagwanType[] | null;
    }
  | undefined
>(undefined);

export const BhagwanProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [bhagwanList, setBhagwanList] = useState<BhagwanType[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bhagwanListData = await getBhagwanList();
        setBhagwanList(bhagwanListData);
      } catch (err) {
        console.error("Error fetching Bhagwan list:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <BhagwanContext.Provider value={{ bhagwanList }}>
      {children}
    </BhagwanContext.Provider>
  );
};
