import { Metadata } from "next";

export const metadataContent: Metadata = {
  title: "Jogos - Professora Antenada",
  description:
    "Seleção de jogos interativos para o público infantil envolvendo alfabetização, matemática e outros temas.",
  applicationName: "Professora Antenada",
  authors: [
    {
      name: "Professora Antenada",
      url: "https://professoraantenada.com.br",
    },
  ],
  generator: "Professora Antenada",
  keywords: "ensino infantil, professor, atividades",
  referrer: "origin",
  themeColor: "#f9a8d4",
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
        url: "https://professoraantenada.com.br/logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    images: "https://professoraantenada.com.br/logo.png",
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
};
