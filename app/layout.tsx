import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Construction Operations, Automation, Real Estate`,
    template: `%s | ${site.name}`,
  },
  description: site.summary,
  metadataBase: new URL("https://jonathanmuratalla.com"),
  openGraph: {
    title: site.name,
    description: site.summary,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
