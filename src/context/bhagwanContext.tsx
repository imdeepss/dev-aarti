"use client";

import { getBhagwanList, searchPosts } from "@/sanity/sanity.query";
import React, { createContext, useEffect, useState, useCallback } from "react";
import { BhagwanType } from "@/types";
import { logger } from "@/lib/logger";

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

  const fetchBhagwanList = useCallback(async () => {
    try {
      const bhagwanListData = await getBhagwanList();
      setBhagwanList(bhagwanListData);
    } catch (err) {
      logger.error("Error fetching Bhagwan list", undefined, err as Error);
    }
  }, []);

  // Define the search function separately
  const searchData = useCallback(async (value: string) => {
    try {
      const bhagwanListData = await searchPosts(value);
      setBhagwanList(bhagwanListData);
    } catch (err) {
      logger.error("Error searching Bhagwan list", { value }, err as Error);
    }
  }, []);

  useEffect(() => {
    fetchBhagwanList();
  }, [fetchBhagwanList]);

  return (
    <BhagwanContext.Provider value={{ bhagwanList, searchData }}>
      {children}
    </BhagwanContext.Provider>
  );
};
