import { cacheData } from "@/lib/redis";

import { getMenuItemsById } from "../../lib/wordpress/menu";
import { getThemeConfig } from "../../lib/wordpress/themes";

export async function getFooterData() {
  const cacheKey = "blog:footer_data";

  const fetchFooterData = async () => {
    const copyright = await getThemeConfig("footer_copyright");
    const menuId = await getThemeConfig("footer_menu");
    const menu = await getMenuItemsById(menuId);
    menu.map((m) => {
      m.url = generateBlogPageUrl(m.url);
    });

    return { copyright, menu };
  };

  return cacheData(cacheKey, fetchFooterData);
}

function generateBlogPageUrl(slug: string) {
  return `/blog/${slug}`;
}
