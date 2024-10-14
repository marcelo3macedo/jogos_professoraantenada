import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  basePath: "/jogos",
  assetPrefix: "/jogos",
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
    ];
  },
};

export default withNextIntl(nextConfig);
