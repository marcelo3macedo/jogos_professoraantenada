import { RowDataPacket } from "mysql2";
import { db } from "@/lib/wordpress/db";

export async function getMenuItemsById(id: string) {
  const [items] = await db.query<RowDataPacket[]>(
    `  SELECT 
              wp.ID AS id, 
              wp.post_title AS title, 
              wp.post_name AS url
          FROM wordpress_posts p
          INNER JOIN wordpress_term_relationships tr 
              ON p.ID = tr.object_id
          INNER JOIN wordpress_postmeta pm_object 
              ON p.ID = pm_object.post_id AND pm_object.meta_key = '_menu_item_object_id'
          LEFT JOIN wordpress_posts wp ON wp.ID = pm_object.meta_value
          WHERE tr.term_taxonomy_id = ?
            AND p.post_type = 'nav_menu_item';
    `,
    id,
  );

  return items;
}
