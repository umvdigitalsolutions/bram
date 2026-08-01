import Image from "next/image";
import Link from "next/link";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { blogPosts } from "./posts";

export const metadata = {
  title: "Blog",
  description:
    "Read practical tax, GST, audit and compliance guides from BRAM & Co. LLP.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#17201d]">
      <Header />

      <section className="relative overflow-hidden bg-[#17201d] px-5 py-24 text-white sm:px-8">
        <Image
          src="/bram-hero.png"
          alt="Accounting documents and office desk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-28"
        />
        <div className="absolute inset-0 bg-[#17201d]/78" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#f1d79d]">
            Blog
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-normal sm:text-6xl">
            Practical compliance guides for Indian businesses.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#d8d2c5]">
            Clear explainers on GST, tax, audit, accounting and corporate compliance from the BRAM & Co. LLP team.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.slug} className="border border-[#ddd3c0] bg-white p-7 shadow-sm">
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8a6b2f]">
                <span>{post.category}</span>
                <span aria-hidden="true">/</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-normal text-[#17201d]">
                {post.title}
              </h2>
              <p className="mt-4 leading-7 text-[#5b665f]">{post.description}</p>
              <Link
                href={post.href}
                className="mt-7 inline-flex border border-[#17201d] px-5 py-3 text-sm font-bold text-[#17201d] transition hover:bg-[#17201d] hover:text-white"
              >
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
