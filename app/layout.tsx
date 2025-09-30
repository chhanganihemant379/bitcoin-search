import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import LayoutClient from "@/components/LayoutClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bitcoin Search",
  description: "Advanced Search Engine for Bitcoin Data",
  keywords: ["Bitcoin", "BSV", "Search", "Blockchain", "Data"],
  authors: [{ name: "Bitcoin Search Team" }],
  creator: "Bitcoin Search",
  publisher: "Bitcoin Search",
  openGraph: {
    title: "Bitcoin Search",
    description: "Advanced Search Engine for Bitcoin Data",
    type: "website",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} style={{ margin: 0, padding: 0, minHeight: "100vh" }}>
        <Providers>
          <LayoutClient>
            {children}
          </LayoutClient>
        </Providers>
      </body>
    </html>
  );
}
