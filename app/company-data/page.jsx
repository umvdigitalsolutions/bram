import CompanyDataClient from "./CompanyDataClient";

export const metadata = {
  title: "Company Master Data Search",
  description:
    "Search Indian company master data by company name, CIN or LLPIN through BRAM & Co. LLP's MCA data search page.",
  alternates: {
    canonical: "/company-data",
  },
};

export default function CompanyDataPage() {
  return <CompanyDataClient />;
}
