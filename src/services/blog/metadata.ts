import { getMetadata } from "@/helpers/metadata/metadataHelper";
import { cacheData } from "@/lib/redis";

export async function getMetadataData(type: string) {
  const cacheKey = `blog:metadata:${type}`;

  const fetchMetadataData = async () => {
    return getMetadata(type);
  };

  return await cacheData(cacheKey, fetchMetadataData);
}
