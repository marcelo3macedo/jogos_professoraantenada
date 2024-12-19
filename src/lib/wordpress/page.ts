import { queryDatabase } from "@/lib/wordpress/db";

import { QUERY_SINGLE_PAGE } from "./queries/page";

export async function getSinglePage(slug: string) {
  if (!slug) return;

  const [page] = (await queryDatabase(QUERY_SINGLE_PAGE, [slug])) as any;

  return page;
}
