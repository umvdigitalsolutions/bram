import AboutClient from "./AboutClient";

export const metadata = {
  title: "About the Firm",
  description:
    "Learn about BRAM & Co. LLP's Noida-led CA and cost accounting team, partner profiles, office network and legal consultant support.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
