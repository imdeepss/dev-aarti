"use client";

import { useLayoutEffect } from "react";

const useLockBodyScroll = (locked: boolean): void => {
  useLayoutEffect(() => {
    if (locked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [locked]);
};

export default useLockBodyScroll;
