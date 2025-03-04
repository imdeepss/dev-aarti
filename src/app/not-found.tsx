import { Container } from "@/_components/layouts";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container className="text-secondary text-center py-20">
      <h2 className="text-3xl underline underline-offset-1 text-secondary font-bold">
        Coming Soon
      </h2>
      <p>We are working hard to bring you this feature. Stay tuned!</p>
      <Link href="/">Return Home</Link>
    </Container>
  );
}
