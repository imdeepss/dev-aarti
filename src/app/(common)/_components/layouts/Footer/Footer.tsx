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
          <p className="mt-4 text-sm text-secondary sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-secondary-200 sm:py-2 sm:pl-4 underline underline-offset-2">
            © 2025 —
            <a
              href="https://x.com/_imdeepss_"
              className="ml-1 text-secondary"
              rel="noopener noreferrer"
              target="_blank"
            >
              @ Deepak K Vishwakarma
            </a>
          </p>
          <span className="mt-4 inline-flex justify-center text-secondary sm:ml-auto sm:mt-0 sm:justify-start font-amita font-bold text-xl">
            ||धर्मो रक्षति रक्षितः||
          </span>
        </div>
      </Container>
    </footer>
  );
}
