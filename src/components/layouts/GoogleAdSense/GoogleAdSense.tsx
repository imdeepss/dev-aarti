"use client";

import Script from "next/script";
import { useEffect } from "react";
import { logger } from "@/lib/logger";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function GoogleAdSense({ adClient }: { adClient: string }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      logger.error("Error pushing AdSense", undefined, err as Error);
    }
  }, []);

  return (
    <>
      <Script
        id="adsbygoogle-init"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClient}`}
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adClient}
        data-ad-slot="7081820574"
        data-ad-format="auto"
        data-full-width-responsive="true"
        data-adtest="on"
      />
    </>
  );
}
