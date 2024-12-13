import { cacheData } from "@/lib/redis";
import { getThemeConfig } from "../../lib/wordpress/themes";
import { getCategoriesChildren } from "@/lib/wordpress/categories";

export async function getMenuData() {
  const cacheKey = "blog:menu_data";

  const fetchMenuData = async () => {
    const menuId = await getThemeConfig("header_categories");
    const menu = await getCategoriesChildren(menuId);

    return { menu, menuId };
  };

  return await cacheData(cacheKey, fetchMenuData);
}
