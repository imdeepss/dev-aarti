import Link from "next/link";
import SearchInput from "../SearchInput";
import Container from "../Container";
import { headerData } from "@/app/(common)/data";

export default function Header() {
  return (
    <header className="border-b border-secondary p-5">
      <Container>
        <div className="flex flex-col flex-wrap items-center justify-between md:flex-row gap-2">
          <Link href="/" aria-label="Go to Home">
            <span className="ml-3 text-xl lg:hidden xl:block font-amita font-bold text-secondary ">
              देव आरती संग्रह
            </span>
          </Link>
          <nav className="flex flex-wrap items-center justify-center text-base text-tertiary md:ml-auto">
            {headerData.map((singleHeader) => {
              return (
                <Link
                  href={singleHeader.href}
                  className="group relative mr-5 hover:text-secondary"
                  key={singleHeader.id}
                >
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-secondary transition-all group-hover:w-full"></span>
                  {singleHeader.text}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <SearchInput />
          </div>
        </div>
      </Container>
    </header>
  );
}
