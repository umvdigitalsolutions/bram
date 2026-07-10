import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://bramcollp.com"),
  title: {
    default: "BRAM & Co. LLP | CA, Cost Accountants, GST & Audit Firm in Noida",
    template: "%s | BRAM & Co. LLP",
  },
  description:
    "Noida CA and cost accountants firm for audit, cost audit, GST, income tax, MCA compliance, bookkeeping and business advisory.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BRAM & Co. LLP",
    description:
      "Chartered accountants and cost accountants in Noida for audit, GST, tax, MCA compliance and finance advisory.",
    url: "https://bramcollp.com",
    siteName: "BRAM & Co. LLP",
    images: [{ url: "/bram-logo-transparent.png", width: 1254, height: 1254, alt: "BRAM & Co. LLP logo" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "BRAM & Co. LLP",
    description:
      "Noida CA and cost accountants firm for audit, GST, tax, MCA compliance and advisory.",
    images: ["/bram-logo-transparent.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
