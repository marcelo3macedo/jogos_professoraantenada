import { METADATATYPE_HOME } from "@/constants/metadataType";
import { getMetadataData } from "@/services/blog/metadata";
import BaseTheme from "@/themes/base.theme";
import NotFoundPage from "@/components/blog/notfound/main";

export const metadata = getMetadataData(METADATATYPE_HOME);

export default async function NotFound() {
  return (
    <BaseTheme>
      <section className="bg-yellow-50 p-6 rounded-lg">
        <NotFoundPage />
      </section>
    </BaseTheme>
  );
}
