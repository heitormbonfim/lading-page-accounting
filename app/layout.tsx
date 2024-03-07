import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dager & Associados",
  description: "Associados Consultoria Empresarial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="any" />
      </head>
      <body className={inter.className}>
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
