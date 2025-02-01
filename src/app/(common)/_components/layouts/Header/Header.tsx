"use client";

import { BreadcrumbIcon, CloseIcon } from "@/_components/icon";
import { headerData } from "@/app/(common)/data";
import useLockBodyScroll from "@/hook/useLockBodyScroll";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Container from "../Container";
import SearchInput from "../SearchInput";

export default function Header() {
  const [collapseMenu, setCollapseMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLElement | null>(null);

  // Close menu when clicking outside of it
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

  // Lock body scroll when menu is open
  useLockBodyScroll(collapseMenu);

  // Toggle menu open/close
  const handleMenuToggle = () => {
    setCollapseMenu((prevState) => !prevState);
  };

  return (
    <header className="border-b border-secondary p-5">
      {/* Overlay to close the menu */}
      {collapseMenu && (
        <div
          className="fixed w-full h-[100svh] bg-secondary opacity-30 z-10 top-0 left-0"
          role="button"
          aria-label="Close menu"
          onClick={handleMenuToggle}
        />
      )}

      <Container>
        <div className="flex flex-wrap items-center justify-between gap-2">
          {/* Logo */}
          <Link href="/" aria-label="Go to Home">
            <span className="text-xl font-amita font-bold">
              देव आरती संग्रह
            </span>
          </Link>

          {/* Navigation Menu */}
          <nav
            ref={menuRef}
            className={`lg:flex flex-wrap items-center justify-center text-lg font-medium text-secondary gap-5
              ${collapseMenu ? "fixed w-3/4 z-20 top-0 left-0 duration-500 ease-in-out flex flex-col bg-primary h-[100svh] p-10 !items-start !justify-start shadow-2xl !overflow-hidden transition-transform transform" : "hidden"}`}
            aria-label="Main navigation"
          >
            {headerData.map((singleHeader) => (
              <Link
                key={singleHeader.id}
                href={singleHeader.href}
                className="group relative hover:text-secondary"
                aria-label={singleHeader.text}
                onClick={handleMenuToggle}
              >
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-secondary transition-all group-hover:w-full"></span>
                {singleHeader.text}
              </Link>
            ))}
            <SearchInput />
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden block z-30">
            <button
              type="button"
              onClick={handleMenuToggle}
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
