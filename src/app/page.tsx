import MainTheme from "@/themes/main.theme";
import HeaderInfo from "@/components/header/info";
import { useTranslations } from "next-intl";
import List from "@/components/games/list";

export default function Home() {
  const t = useTranslations("challenges");

  return (
    <MainTheme>
      <div className="container px-6 py-5 mx-auto md:mt-4">
        <HeaderInfo title={t("title")} subtitle={t("subtitle")} />
        <List />
      </div>
    </MainTheme>
  );
}
