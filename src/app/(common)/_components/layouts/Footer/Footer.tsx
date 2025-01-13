import Container from "../Container";

export default function Footer() {
  return (
    <footer className="border-t border-secondary p-5">
      <Container>
        <div className="flex flex-col items-center sm:flex-row">
          <a className="title-font flex items-center justify-center font-medium text-secondary-900 md:justify-start">
            <span className="ml-3 text-xl font-amita font-bold">
              देव आरती संग्रह
            </span>
          </a>
          <p className="mt-4 text-sm text-[#656565] sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-secondary-200 sm:py-2 sm:pl-4">
            © 2025 —
            <a
              href="https://twitter.com/imdeepss"
              className="ml-1 text-[#656565]"
              rel="noopener noreferrer"
              target="_blank"
            >
              @imdeepss,@imsidd02
            </a>
          </p>
          <span className="mt-4 inline-flex justify-center text-[#656565] sm:ml-auto sm:mt-0 sm:justify-start font-amita font-bold">
            ||हर हर महादेव||
          </span>
        </div>
      </Container>
    </footer>
  );
}
