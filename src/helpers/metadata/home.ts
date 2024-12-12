import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function getHomeMetadata() {
  const t = await getTranslations({
    locale: "pt",
    namespace: "blog.seo",
  });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}
