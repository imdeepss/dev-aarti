import { Amita, Gotu } from "next/font/google";
import { ReactNode } from "react";

import "@/styles/globals.css";
import { Metadata } from "next";
import { Footer, Header } from "@/_components/layouts";

// Google Fonts setup
const amita = Amita({
  variable: "--font-amita",
  subsets: ["latin"],
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
  title: "देव आरती संग्रह | हिन्दू भक्ति गीतों और प्रार्थनाओं का संग्रह",
  description:
    "देव आरती संगरह में हिन्दू भक्ति गीतों और आरतियों का संपूर्ण संग्रह पाएं। आध्यात्मिकता, श्रद्धा और दैनिक पूजा से जुड़ी प्रार्थनाओं को खोजें।",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${gotu.className} ${amita.className}`}>
      <body>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
