"use client";

import { getBhagwanList, searchPosts } from "@/sanity/sanity.query";
import React, { createContext, useEffect, useState } from "react";
import { BhagwanType } from "../types";

export const BhagwanContext = createContext<
  | {
      bhagwanList: BhagwanType[] | null;
      searchData: (value: string) => void;
    }
  | undefined
>(undefined);

export const BhagwanProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [bhagwanList, setBhagwanList] = useState<BhagwanType[] | null>(null);

  const fetchBhagwanList = async () => {
    try {
      const bhagwanListData = await getBhagwanList();
      setBhagwanList(bhagwanListData);
    } catch (err) {
      console.error("Error fetching Bhagwan list:", err);
    }
  };

  // Define the search function separately
  const searchData = async (value: string) => {
    try {
      const bhagwanListData = await searchPosts(value);
      setBhagwanList(bhagwanListData);
    } catch (err) {
      console.error("Error searching Bhagwan list:", err);
    }
  };

  useEffect(() => {
    fetchBhagwanList();
  }, []);

  return (
    <BhagwanContext.Provider value={{ bhagwanList, searchData }}>
      {children}
    </BhagwanContext.Provider>
  );
};
