import Trophies from "@/components/gamification/list";
import Trophy from "@/components/gamification/trophy";
import HeaderInfo from "@/components/header/info";
import MainTheme from "@/themes/main.theme";
import { useTranslations } from "next-intl";

export default function TrophiesPage() {
  const t = useTranslations("trophies");

  return (
    <MainTheme>
      <HeaderInfo title={t("title")} subtitle={t("subtitle")} />

      <Trophies />
    </MainTheme>
  );
}
