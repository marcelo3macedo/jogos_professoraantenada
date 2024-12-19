import { METADATATYPE_HOME } from "@/constants/metadataType";

import { metadataContent } from "./base";
import { getHomeMetadata } from "./home";

export async function getMetadata(origin: string) {
  const base = metadataContent;
  const complement = await getComplement(origin);
  return { ...base, ...complement };
}

async function getComplement(origin: string) {
  if (origin === METADATATYPE_HOME) {
    return getHomeMetadata();
  }
}
