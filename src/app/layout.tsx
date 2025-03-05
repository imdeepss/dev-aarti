import { Amita, Gotu } from "next/font/google";
import { ReactNode } from "react";

import { Footer, Header, ThemeToggle } from "@/_components/layouts";
import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next";
import { BhagwanProvider } from "./context/bhagwanContext";

// Google Fonts setup
const amita = Amita({
  variable: "--font-amita",
  subsets: ["latin", "devanagari"],
  display: "swap",
  weight: ["400", "700"],
});
const gotu = Gotu({
  variable: "--font-gotu",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "देव आरती संग्रह | भक्ति गीत और आरतियाँ",
  description:
    "देव आरती संग्रह में हिन्दू भक्ति गीतों और आरतियों का संपूर्ण संग्रह पाएं। विभिन्न देवताओं की आरतियाँ, जैसे शिव, गणेश, कृष्ण, और दुर्गा आरती, खोजें और अपनी पूजा को और समृद्ध बनाएं।",
  keywords:
    "Hindu Aarti, Aarti Songs, Bhakti Aarti, Hindu Songs, Aarti Lyrics, Aarti for Bhagawan, Aarti in hindi, Aarti Prayers, God Aarti Collection, Popular Hindu Aartis, Aarti for Worship, Aarti Collection Hindu, Lord Aarti Songs, Shiva Aarti, Ganesh Aarti, Durga Aarti, Hindu Prayer Songs, Aarti for Spirituality, Aarti Chanting, Morning Aarti Prayers, Lord Krishna Aarti, Lord Vishnu Aarti, Lord Ram Aarti, Dev Aarti, Dev Aarti Sangrah, Hindi Aarti",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="hi" className={`${gotu.className} ${amita.className}`}>
      <body className="relative bg-primary text-secondary">
        <BhagwanProvider>
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </BhagwanProvider>
        <ThemeToggle />
        <Analytics />
        <GoogleAnalytics gaId={process.env.GA_TAG ?? "G-4FHG2030NP"} />
      </body>
    </html>
  );
}
