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

export type featuredButtonType = {
  id: number;
  text: string;
  type: string;
};

export type HeaderDataType = {
  id: number;
  text: string;
  href: string;
};

export type AartiDataType = {
  id: string;
  title: string;
  image: string;
  type: Array<string>;
};

type contentType = {
  type: string;
  content: string;
};

export type godBooksType = {
  id: string;
  title: string;
  type: string;
  content: contentType[];
};
