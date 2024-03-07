import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description: "Contabilidade Fictícia & Associados",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
