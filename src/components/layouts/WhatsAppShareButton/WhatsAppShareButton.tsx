import { WhatsAppIcon } from "@/components/icon";
import Link from "next/link";
import React from "react";

interface WhatsAppShareButtonProps {
  message: string;
  url?: string;
}

const WhatsAppShareButton: React.FC<WhatsAppShareButtonProps> = ({
  message,
  url,
}) => {
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    `${message} ${url || ""}`
  )}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 fixed top-[200px] right-0 bg-[#25D366]/90 hover:bg-[#25D366] text-white rounded-l-2xl shadow-lg hover:shadow-xl hover:-translate-x-1 transition-all duration-300 cursor-pointer z-50 backdrop-blur-md"
      aria-label="Share on WhatsApp"
    >
      <WhatsAppIcon height="32" width="32" />
    </Link>
  );
};

export default WhatsAppShareButton;
