import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Navbar from "./components/navbar";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "KBTU Science(edit)",
  description: "KBTU science descriptio(edit)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{

  
  return (
    <>
      <Navbar />
      <main className={cn("min-h-screen bg-background font-sans antialiased")}>
        {children}
      </main>
    </>
  );
}