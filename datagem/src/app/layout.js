// imports

import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/app/ui/Nav";
import Footer from "@/app/ui/Footer";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Logout from "./logout";
// components

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const session = getServerSession();

  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-700`}>
        <nav>
          {!!session && <Logout />}
          {!session && <Link href="/login">Login</Link>}
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
