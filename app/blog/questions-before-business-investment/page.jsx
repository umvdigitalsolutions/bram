import BlogArticle from "../BlogArticle";
import article from "./article.json";

export const metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: article.href },
  openGraph: {
    title: `${article.title} | BRAM & Co. LLP`,
    description: article.description,
    url: article.href,
    type: "article",
    publishedTime: article.publishedAt,
  },
};

export default function ArticlePage() {
  return <BlogArticle article={article} />;
}
