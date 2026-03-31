import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FIFO Ready | Australia's Premier FIFO Training Centre",
  description:
    "Get the knowledge and documentation you need to start your FIFO mining career in Australia. Learn from industry experts and access essential resources.",
  keywords: ["FIFO", "mining", "Australia", "training", "fly-in fly-out", "mining jobs"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
