import ToolsClient from "./ToolsClient";

export const metadata = {
  title: "Client Tools and Financial Calculators",
  description:
    "Use BRAM & Co. LLP client tools for document organizers, financial calculators, tax links, accounting updates and service selection.",
  alternates: {
    canonical: "/tools",
  },
};

export default function ToolsPage() {
  return <ToolsClient />;
}
