import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Master Jesus Academy | Nurturing Minds, Building Futures",
    template: "%s | Master Jesus Academy",
  },
  description:
    "Master Jesus Academy is a leading Nursery, Primary and Junior High School in Taifa, Greater Accra, Ghana — committed to academic excellence, moral values and holistic child development.",
  keywords: [
    "Master Jesus Academy",
    "school in Taifa",
    "school in Accra",
    "Ghana school",
    "nursery school Ghana",
    "primary school Ghana",
    "JHS Ghana",
    "best school in Greater Accra",
  ],
  openGraph: {
    title: "Master Jesus Academy | Nurturing Minds, Building Futures",
    description:
      "A premier Nursery, Primary and Junior High School in Taifa, Greater Accra, Ghana.",
    url: "https://masterjesusacademy.edu.gh",
    siteName: "Master Jesus Academy",
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Jesus Academy",
    description:
      "Nurturing Minds, Building Futures — Nursery to JHS in Taifa, Accra.",
  },
  metadataBase: new URL("https://masterjesusacademy.edu.gh"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
