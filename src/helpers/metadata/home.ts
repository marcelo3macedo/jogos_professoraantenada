import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function getHomeMetadata() {
  const t = await getTranslations({
    locale: "pt",
    namespace: "seo",
  });

  return {
    title: t("title"),
    description: "",
    keywords: "",
  };
}
