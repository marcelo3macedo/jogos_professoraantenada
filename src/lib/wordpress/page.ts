import { pool } from "@/lib/wordpress/db";
import { RowDataPacket } from "mysql2";

export async function getSinglePage(slug: string) {
  const connection = await pool.getConnection();
  if (!slug) return;

  const [[page]] = await connection.query<RowDataPacket[]>(
    `  SELECT 
              p.ID as id,
              p.post_title as title,
              p.post_date as date,
              p.post_excerpt as excerpt,
              p.post_content as content,
              p.post_name as slug
          FROM 
              wordpress_posts p
          WHERE 
              p.post_type = 'page' 
              AND p.post_status = 'publish'
              AND p.post_name = ? `,
    [slug],
  );

  return page;
}
