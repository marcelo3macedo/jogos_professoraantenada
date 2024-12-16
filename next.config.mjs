import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/para-alunos",
        destination: "/content/student",
      },
      {
        source: "/para-alunos/:page",
        destination: "/content/student/:page",
      },
      {
        source: "/atividades/atividade",
        destination: "/activities/activity",
      },
      {
        source: "/atividades/atividade",
        destination: "/activities/activity",
      },
      {
        source: "/trofeus",
        destination: "/trophies",
      },
      {
        source: "/pesquisa",
        destination: "/search",
      },
      {
        source: "/blog/categoria/:slug",
        destination: "/blog/category/:slug",
      },
    ];
  },
  images: {
    domains: ["localhost", "professoraantenada.com.br"],
  },
};

export default withNextIntl(nextConfig);
