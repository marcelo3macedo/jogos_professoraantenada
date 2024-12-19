import { cacheData } from "@/lib/redis";
import { getCategoriesChildren } from "@/lib/wordpress/categories";

import { getThemeConfig } from "../../lib/wordpress/themes";

export async function getMenuData() {
  const cacheKey = "blog:menu_data";

  const fetchMenuData = async () => {
    const menuId = await getThemeConfig("header_categories");
    const menu = await getCategoriesChildren(menuId);
    menu.map((m) => {
      if (m.slug) {
        m.slug = generateBlogPageUrl(m.slug);
      }
    });

    return { menu, menuId };
  };

  return cacheData(cacheKey, fetchMenuData);
}

function generateBlogPageUrl(slug: string) {
  return `/blog/categoria/${slug}`;
}
