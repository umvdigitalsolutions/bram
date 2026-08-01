import Image from "next/image";
import Link from "next/link";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import { gstRegistrationArticle as article } from "../posts";

export const metadata = {
  title: article.title,
  description: article.description,
  alternates: {
    canonical: article.href,
  },
  openGraph: {
    title: `${article.title} | BRAM & Co. LLP`,
    description: article.description,
    url: article.href,
    type: "article",
    publishedTime: article.publishedAt,
  },
};

function RichText({ text }) {
  return <span dangerouslySetInnerHTML={{ __html: text }} />;
}

function DataTable({ table }) {
  return (
    <div className="my-8 overflow-x-auto border border-[#ddd3c0] bg-white">
      <table className="w-full min-w-[560px] border-collapse text-left text-sm">
        <caption className="bg-[#17201d] px-5 py-3 text-left text-xs font-bold uppercase tracking-[0.18em] text-[#f1d79d]">
          {table.caption}
        </caption>
        <thead className="bg-[#efe7d7] text-[#17201d]">
          <tr>
            {table.headers.map((header) => (
              <th key={header} scope="col" className="border-b border-[#d7c9b0] px-5 py-4 font-bold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.join("-")} className="border-b border-[#eee5d8] last:border-b-0">
              {row.map((cell) => (
                <td key={cell} className="px-5 py-4 leading-6 text-[#4f5c55]">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function GstRegistrationGuidePage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#17201d]">
      <Header />

      <article>
        <section className="relative overflow-hidden bg-[#17201d] px-5 py-20 text-white sm:px-8">
          <Image
            src="/bram-hero.png"
            alt="Accounting documents and compliance notes"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-26"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#17201d_0%,rgba(23,32,29,0.94)_48%,rgba(23,32,29,0.64)_100%)]" />
          <div className="relative mx-auto max-w-5xl">
            <Link href="/blog" className="text-sm font-bold text-[#f1d79d] transition hover:text-white">
              Blog
            </Link>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#f1d79d]">
              <span>{article.category}</span>
              <span aria-hidden="true">/</span>
              <time dateTime={article.publishedAt}>{article.updatedLabel}</time>
              <span aria-hidden="true">/</span>
              <span>{article.readTime}</span>
            </div>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-normal sm:text-6xl">
              {article.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#d8d2c5]">
              {article.description}
            </p>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_300px]">
          <div className="max-w-3xl">
            <div className="border-l-4 border-[#c7a15a] bg-white px-5 py-5 text-sm leading-7 text-[#4f5c55] shadow-sm">
              This article is for general information. GST applicability can vary based on state, supply type, notifications, and business model, so a professional review is recommended before taking action.
            </div>

            <div className="mt-10 space-y-6 text-base leading-8 text-[#4f5c55]">
              {article.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 space-y-12">
              {article.sections.map((section) => (
                <section key={section.heading} id={section.heading.toLowerCase().replaceAll(" ", "-").replaceAll("?", "")}>
                  <h2 className="text-3xl font-semibold tracking-normal text-[#17201d]">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-5 text-base leading-8 text-[#4f5c55]">
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph}>
                        <RichText text={paragraph} />
                      </p>
                    ))}
                  </div>
                  {section.list ? (
                    <ul className="mt-6 grid gap-3">
                      {section.list.map((item) => (
                        <li key={item} className="border-l-4 border-[#c7a15a] bg-white px-5 py-3 text-sm font-semibold leading-6 text-[#344039] shadow-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.table ? <DataTable table={section.table} /> : null}
                  {section.closing ? (
                    <p className="mt-5 text-base leading-8 text-[#4f5c55]">
                      {section.closing}
                    </p>
                  ) : null}
                </section>
              ))}
            </div>

            <section className="mt-14 border-t border-[#d9cfbd] pt-10">
              <h2 className="text-3xl font-semibold tracking-normal text-[#17201d]">
                Frequently Asked Questions
              </h2>
              <div className="mt-6 grid gap-4">
                {article.faqs.map((faq) => (
                  <div key={faq.question} className="border border-[#ddd3c0] bg-white p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-[#17201d]">{faq.question}</h3>
                    <p className="mt-3 leading-7 text-[#4f5c55]">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="h-fit border border-[#ddd3c0] bg-white p-6 shadow-sm lg:sticky lg:top-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8a6b2f]">
              Need GST help?
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-normal text-[#17201d]">
              Talk to BRAM & Co. LLP
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#5b665f]">
              Get partner-reviewed support for GST registration, returns, reconciliations, notices and input credit review.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex w-full justify-center bg-[#17201d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#c7a15a] hover:text-[#17201d]"
            >
              Send enquiry
            </Link>
            <a
              href="tel:+919718324334"
              className="mt-3 inline-flex w-full justify-center border border-[#17201d] px-5 py-3 text-sm font-bold text-[#17201d] transition hover:bg-[#17201d] hover:text-white"
            >
              Call office
            </a>
          </aside>
        </div>
      </article>

      <Footer />
    </main>
  );
}
