import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Navbar aur Footer ko yahan import karo
import Navbar from "../src/components/Navbar"; 
import Footer from "../src/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EstateSync - Find Your Dream Home",
  description: "Premium real estate platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar hamesha upar rahega */}
        <Navbar />
        
        {/* Main pages ka content (Home, Profile, Property etc.) */}
        <div className="min-h-screen">
          {children}
        </div>

        {/* Footer hamesha neeche rahega */}
        <Footer />
      </body>
    </html>
  );
}