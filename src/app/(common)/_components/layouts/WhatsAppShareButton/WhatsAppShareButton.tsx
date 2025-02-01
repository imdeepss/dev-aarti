import { WhatsAppIcon } from "@/_components/icon";
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
      className="p-2 fixed top-[200px] right-0 bg-tertiary rounded-l-lg shadow-inner cursor-pointer"
    >
      <WhatsAppIcon height="32" width="32" />
    </Link>
  );
};

export default WhatsAppShareButton;
