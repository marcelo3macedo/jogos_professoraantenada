import { queryDatabase } from "@/lib/wordpress/db";

import { QUERY_CATEGORIES_LIST } from "./queries/categories";
import { QUERY_MENU_BY_ID } from "./queries/menu";

export async function getMenuItems() {
  const menu = (await queryDatabase(QUERY_CATEGORIES_LIST)) as any;

  if (!menu) {
    return [];
  }

  return menu.map((item: any) => ({
    id: item.termId,
    name: item.name,
    slug: item.slug,
  }));
}

export async function getMenuItemsById(id: string) {
  return queryDatabase(QUERY_MENU_BY_ID, id) as any;
}
