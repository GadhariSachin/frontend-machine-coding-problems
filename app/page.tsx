import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-xl">Interview Preparation - Machine Coding round</h1>

      <div className="flex flex-col gap-5 text-lg mt-5">
        <Link href="/accordion">1. Accordion</Link>
        <Link href="/infinite-scroll">2. Infinite Scroll</Link>
        <Link href="/file-explorer">3. File Explorer</Link>
        <Link href="/nested-comments">
          4. Nested comments layout like Reddit
        </Link>
        <Link href="/autocomplete-search-input">
          5. Autocomplete Seach Input
        </Link>
        <Link href="/slider">6. Image Slider/Carousel</Link>
      </div>
    </main>
  );
}
