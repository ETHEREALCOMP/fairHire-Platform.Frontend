import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <Link href="/company"> link company</Link>
      <Link href="/candidate">link candidate</Link>
      <Hero />
      <HowItWorks />
    </div>
  );
}
