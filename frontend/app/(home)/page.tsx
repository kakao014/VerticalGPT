
import { redirect } from "next/navigation";
import Link from "next/link";
import Features from "./Features";
import Hero from "./Hero";

export default function HomePage() {
  if (process.env.NEXT_PUBLIC_ENV === "local") {
    redirect("/upload");
  }

  return (
    <main className="">
      <Hero />
      <Features />
    </main>
  );
}
