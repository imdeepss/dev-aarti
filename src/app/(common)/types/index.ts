import React from "react";

export type IconProps = {
  height?: string;
  width?: string;
  color?: string;
};

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};
