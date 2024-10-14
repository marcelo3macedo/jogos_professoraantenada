import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import messages from "../../messages/pt.json";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

import { metadataContent } from "@/data/metadata";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = metadataContent;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextIntlClientProvider messages={messages}>
      <html lang="pt-BR">
        <body className={lato.className}>{children}</body>
      </html>
    </NextIntlClientProvider>
  );
}
