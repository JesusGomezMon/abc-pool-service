import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ABC Swimming Pool Service",
  description: "Pool maintenance in San Antonio, TX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
