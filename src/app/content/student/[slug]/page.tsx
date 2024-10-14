"use client";
import MainTheme from "@/themes/main.theme";
import { IndexPage } from "@/interfaces/page";
import SingleDetails from "@/components/games/single/details";
import useSession from "@/hooks/useSession";

export default function StudentPage({ params }: IndexPage) {
  const { slug } = params || {};
  const { handleActivityStart } = useSession();

  return (
    <MainTheme>
      <SingleDetails
        slug={slug}
        action={() => {
          handleActivityStart(slug);
        }}
      />
    </MainTheme>
  );
}
