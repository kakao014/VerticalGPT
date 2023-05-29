import Features from "./Features";
import Hero from "./Hero";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function HomePage() {
  if (process.env.NEXT_PUBLIC_ENV === "local") {
    redirect("/upload");
  }

  return (
    <main className="">
      <h1>test test</h1>
          <Link href="/upload">
                blog
            </Link>
        <br/>
            <br/>
      <Hero />
      <Features />
    </main>
  );
}
