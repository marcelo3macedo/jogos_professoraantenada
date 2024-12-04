import { db } from "@/lib/wordpress/db";

export async function getMenuItems(menuLocation: string) {
  const [menu] = await db.query(
    `SELECT t.term_id
     FROM wordpress_terms t
     INNER JOIN wordpress_term_taxonomy tt ON t.term_id = tt.term_id
     WHERE tt.taxonomy = 'nav_menu' AND t.name = ?`,
    [menuLocation],
  );

  if (!menu.length) {
    return [];
  }

  const menuId = menu[0].term_id;

  const [menuItems] = await db.query(
    `SELECT p.ID, p.post_title, pm.meta_value AS url
     FROM wordpress_posts p
     INNER JOIN wordpress_postmeta pm ON p.ID = pm.post_id
     INNER JOIN wordpress_term_relationships tr ON p.ID = tr.object_id
     WHERE tr.term_taxonomy_id = ? AND p.post_type = 'nav_menu_item' AND pm.meta_key = '_menu_item_url'
     ORDER BY p.menu_order ASC`,
    [menuId],
  );

  return menuItems.map((item) => ({
    id: item.ID,
    title: item.post_title,
    url: item.url,
  }));
}
