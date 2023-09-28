import Sidebar from "@/components/side-bar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LetfSidebar from "@/components/left-side-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Annonces Web app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen justify-between bg-gray-200">
          <Sidebar />
          {children}
          <LetfSidebar />
        </main>
      </body>
    </html>
  );
}
