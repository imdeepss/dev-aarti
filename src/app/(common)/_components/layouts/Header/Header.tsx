import Link from "next/link";
import SearchInput from "../SearchInput";
import Container from "../Container";

export type HeaderData = {
  id: number;
  text: string;
  href: string;
};

const headerData: HeaderData[] = [
  {
    id: 1,
    text: "Home",
    href: "/",
  },
  {
    id: 2,
    text: "About Us",
    href: "/about",
  },
  {
    id: 3,
    text: "Contact",
    href: "/contact",
  },
  {
    id: 4,
    text: "Policies",
    href: "/policies",
  },
];

export default function Header() {
  return (
    <header className="border-b border-secondary p-5">
      <Container>
        <div className="flex flex-col flex-wrap items-center justify-between md:flex-row gap-2">
          <Link href="/" aria-label="Go to Home">
            <span className="ml-3 text-xl lg:hidden xl:block font-amita font-bold">
              देव आरती संग्रह
            </span>
          </Link>
          <nav className="flex flex-wrap items-center justify-center text-base text-tertiary md:ml-auto">
            {headerData.map((singleHeader) => {
              return (
                <Link
                  href="/"
                  className="group relative mr-5 hover:text-tertiary"
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
