import MainTheme from "@/themes/main.theme";
import HeaderInfo from "@/components/header/info";
import { useTranslations } from "next-intl";
import List from "@/components/games/list";
import UserInfo from "@/components/header/user";

export default function Home() {
  const t = useTranslations("challenges");

  return (
    <MainTheme>
      <div className="container px-6 py-5 mx-auto md:mt-4">
        <div className="md:flex items-center">
          <div className="w-full md:w-4/5">
            <HeaderInfo title={t("title")} subtitle={t("subtitle")} />
          </div>
          <div className="w-full my-8 md:my-0 md:w-1/5">
            <UserInfo />
          </div>
        </div>
        <List />
      </div>
    </MainTheme>
  );
}
