import { Metadata } from "next";

export const metadataContent: Metadata = {
  applicationName: "Professora Antenada",
  authors: [
    {
      name: "Professora Antenada",
      url: "https://professoraantenada.com.br",
    },
  ],
  icons: {
    icon: [
      { url: "/img/icons/icon-128x128.png", sizes: "128x128" },
      { url: "/img/icons/icon-256x256.png", sizes: "256x256" },
      { url: "/img/icons/icon-512x512.png", sizes: "512x512" },
    ],
    apple: "/img/icons/icon-128x128.png",
    shortcut: "/img/icons/icon-128x128.png",
  },
  generator: "Professora Antenada",
  referrer: "origin",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#2e1065" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  colorScheme: "light",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  creator: "Professora Antenada",
  publisher: "Professora Antenada",
  robots: {
    follow: true,
    index: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "https://professoraantenada.com.br",
    types: {
      "application/rss+xml": [
        { url: "https://professoraantenada.com.br/feed", title: "rss" },
        {
          url: "https://professoraantenada.com.br/comments/feed",
          title: "comments",
        },
      ],
    },
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: "https://professoraantenada.com.br",
    title: "Conteúdos Professora Antenada",
    description:
      "Descubra recursos incríveis para ensino infantil! Encontre atividades para sala de aula, dicas para professores e materiais educativos que tornam o aprendizado divertido e eficaz. Acesse agora para transformar suas aulas!",
    siteName: "Professora Antenada",
    images: [
      {
        url: "https://professoraantenada.com.br/img/icons/icon-128x128.png",
        width: 128,
        height: 128,
      },
      {
        url: "https://professoraantenada.com.br/img/icons/icon-256x256.png",
        width: 256,
        height: 256,
      },
      {
        url: "https://professoraantenada.com.br/img/icons/icon-512x512.png",
        width: 512,
        height: 512,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    images: "https://professoraantenada.com.br/img/icons/icon-128x128.png",
  },
  verification: {
    google: "tFdcpznLCzvIod9E3mKF-ieBu31t6aE8FHHLBWToHAg",
    yandex: "1234567890",
    me: "1234567890",
  },
  appleWebApp: {
    capable: true,
    title: "Professora Antenada",
    statusBarStyle: "black-translucent",
  },
  formatDetection: { telephone: false },
  abstract:
    "Descubra recursos incríveis para ensino infantil! Encontre atividades para sala de aula, dicas para professores e materiais educativos que tornam o aprendizado divertido e eficaz. Acesse agora para transformar suas aulas!",
  archives: "https://professoraantenada.com.br/archives",
  category: "Educação Infantil",
  classification: "Professores Infantil",
  keywords: [
    "educação infantil",
    "atividades escolares",
    "materiais educativos",
    "dicas para professores",
  ],
};
