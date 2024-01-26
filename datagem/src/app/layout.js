// imports

import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/app/ui/Nav";
import Footer from "@/app/ui/Footer";
// components

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DataGem",
  description: "Data to enrich your online business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-700`}>
        {/* <Nav /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
