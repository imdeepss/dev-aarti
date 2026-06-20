"use client";

import { BreadcrumbIcon, CloseIcon } from "@/components/icon";
import { headerData } from "@/data";
import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Container from "../Container";
import SearchInput from "../SearchInput";
import Image from "next/image";

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

  const handleMenuToggle = () => {
    setCollapseMenu((prevState) => !prevState);
  };

  const handleLinkClick = () => {
    setCollapseMenu(false);
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-500">
      {/* Decorative top border glow */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-70" />
      
      {/* Main glass panel */}
      <div className="w-full glass-panel border-b border-secondary/10 bg-primary/80 backdrop-blur-xl">
        {/* Overlay to close the menu */}
        {collapseMenu && (
          <div
            className="fixed w-full h-[100svh] bg-secondary/40 backdrop-blur-sm z-40 top-0 left-0 transition-opacity duration-300"
            role="button"
            aria-label="Close menu"
            onClick={handleMenuToggle}
          />
        )}

        <Container className="!px-4 lg:!px-8 py-3">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo */}
            <Link
              href="/"
              aria-label="Go to Home"
              className="flex items-center gap-3 group"
            >
              <div className="relative p-1 rounded-full bg-secondary/5 border border-secondary/10 shadow-sm transition-transform duration-500 group-hover:rotate-[360deg] group-hover:shadow-accent/20">
                <Image
                  src="/images/logo.png"
                  alt="देव आरती संग्रह"
                  width={40}
                  height={40}
                  className="rounded-full drop-shadow-md"
                />
              </div>
              <span className="text-2xl font-amita font-bold hidden md:block text-secondary group-hover:text-accent-dark transition-all duration-300 leading-normal py-1">
                देव आरती संग्रह
              </span>
            </Link>

            {/* Navigation Menu */}
            <nav
              ref={menuRef}
              className={`lg:flex items-center gap-2 lg:gap-6
                ${
                  collapseMenu
                    ? "fixed w-[80%] max-w-sm z-50 top-0 left-0 duration-500 ease-out transform translate-x-0 flex flex-col h-[100svh] p-8 shadow-2xl glass-panel bg-primary/95 border-r border-secondary/10"
                    : "hidden transform -translate-x-full lg:translate-x-0 lg:static lg:bg-transparent lg:shadow-none lg:h-auto lg:p-0 lg:border-none lg:w-auto lg:z-auto"
                }
                `}
              aria-label="Main navigation"
            >
              {/* Mobile Sidebar Header */}
              {collapseMenu && (
                <div className="flex items-center gap-3 mb-10 pb-6 border-b border-secondary/10 w-full">
                  <Image src="/images/logo.png" alt="Logo" width={32} height={32} className="rounded-full" />
                  <span className="text-xl font-amita font-bold text-secondary">देव आरती संग्रह</span>
                </div>
              )}

              {headerData.map((singleHeader) => (
                <Link
                  key={singleHeader.id}
                  href={singleHeader.href}
                  className={`relative font-gotu text-lg font-medium px-4 py-2 rounded-full transition-all duration-300
                    ${collapseMenu ? 'w-full hover:bg-secondary/10 hover:translate-x-2' : 'hover:text-accent-dark group'}
                  `}
                  aria-label={singleHeader.text}
                  onClick={handleLinkClick}
                >
                  <span className="relative z-10">{singleHeader.text}</span>
                  {/* Desktop hover pill effect */}
                  {!collapseMenu && (
                    <span className="absolute inset-0 bg-secondary/5 rounded-full scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 -z-10" />
                  )}
                </Link>
              ))}
              
              <div className={`mt-auto lg:mt-0 ${collapseMenu ? 'w-full pt-6' : ''}`}>
                <SearchInput />
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3 z-50">
              <div className="hidden sm:block">
                <SearchInput />
              </div>
              <button
                type="button"
                onClick={handleMenuToggle}
                className="p-2 rounded-full bg-secondary/5 border border-secondary/10 text-secondary hover:bg-secondary/10 transition-colors focus:outline-none"
                aria-label={collapseMenu ? "Close menu" : "Open menu"}
                aria-expanded={collapseMenu}
              >
                {collapseMenu ? <CloseIcon /> : <BreadcrumbIcon />}
              </button>
            </div>
            
          </div>
        </Container>
      </div>
    </header>
  );
}
