import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import "./globals.css";
import messages from "../../messages/pt.json";

const ballo = Baloo_2({ subsets: ["latin"], weight: ["400", "700"] });

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
        <body className={ballo.className}>{children}</body>
      </html>
    </NextIntlClientProvider>
  );
}
