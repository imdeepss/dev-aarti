"use client";

import Link from "next/link";
import SearchInput from "../SearchInput";
import Container from "../Container";
import { headerData } from "@/app/(common)/data";
import { useState, useEffect, useRef } from "react";
import { BreadcrumbIcon, CloseIcon } from "@/_components/icon";
import useLockBodyScroll from "@/hook/useLockBodyScroll";

export default function Header() {
  const [collapseMenu, setCollapseMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setCollapseMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useLockBodyScroll(collapseMenu);

  const handleClick = () => {
    setCollapseMenu(!collapseMenu);
  };

  return (
    <header className="border-b border-secondary p-5">
      {collapseMenu && (
        <div
          className="fixed w-full h-[100svh] bg-secondary opacity-30 z-10 top-0 left-0"
          role="button"
          aria-label="Close menu"
          onClick={handleClick}
        />
      )}

      <Container>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Link href="/" aria-label="Go to Home">
            <span className="text-xl font-amita font-bold">
              देव आरती संग्रह
            </span>
          </Link>

          <nav
            ref={menuRef}
            className={`lg:flex flex-wrap items-center justify-center text-lg font-medium text-secondary gap-5 
              ${collapseMenu ? "fixed w-3/4 z-20 top-0 left-0 duration-500 ease-in-out flex flex-col bg-primary h-[100svh] p-10 !items-start !justify-start shadow-2xl !overflow-hidden" : "hidden"}`}
            aria-label="Main navigation"
          >
            {headerData.map((singleHeader) => (
              <Link
                href={singleHeader.href}
                className="group relative hover:text-secondary"
                key={singleHeader.id}
                aria-label={singleHeader.text}
              >
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-secondary transition-all group-hover:w-full"></span>
                {singleHeader.text}
              </Link>
            ))}
            <SearchInput />
          </nav>

          <div className="lg:hidden block z-30">
            <button
              type="button"
              onClick={handleClick}
              aria-label={collapseMenu ? "Close menu" : "Open menu"}
              aria-expanded={collapseMenu}
            >
              {collapseMenu ? <CloseIcon /> : <BreadcrumbIcon />}
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
