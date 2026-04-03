import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../src/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EstateSync | Find Your Dream Property",
  description: "Browse premium properties with advanced filtering and smart wishlists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 antialiased`}>
        <Navbar />
        {/* The min-h-screen ensures the page takes up the full height below the navbar */}
        <div className="min-h-screen"> 
          {children}
        </div>
      </body>
    </html>
  );
}