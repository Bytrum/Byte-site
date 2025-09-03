import Link from "next/link";
import { blogs } from "@/lib/data";

export default function BlogsPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-2 py-8 bg-gray-900 animate-fade-in">
      <div className="w-full max-w-2xl">
        <section className="animate-fade-in text-center relative">
          <h2 className="text-2xl font-semibold mb-4 glow-text">{blogs.comingSoonTitle}</h2>
          <p className="text-gray-300 text-lg mb-8">{blogs.comingSoonSubtitle}</p>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-5xl md:text-7xl font-extrabold text-silver opacity-70 blur-sm animate-pulse select-none">COMING SOON</span>
          </div>
        </section>
        <header className="mb-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 glow-text animate-fade-in">{blogs.header.title}</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in">{blogs.header.subtitle}</p>
        </header>
        <section className="mb-12 animate-fade-in">
          <h2 className="text-2xl font-semibold mb-4 glow-text">Featured Blog</h2>
          <div className="bg-dark-gray rounded-2xl shadow-2xl p-8 mb-6 card-base animate-glow border border-silver">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-blue-400 hover:underline transition-all duration-200">
              <Link href={blogs.featured.href}>{blogs.featured.title}</Link>
            </h3>
            <p className="text-gray-300 mb-2 text-base md:text-lg">{blogs.featured.intro}</p>
            <p className="text-gray-300 mb-2 text-base md:text-lg">
              And the best part? It’s easier, cheaper, and more fun than ever before.
            </p>
            <div className="text-sm text-silver mt-4 byte-glow">
              Blog by <span className="font-semibold">{blogs.featured.author}</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
