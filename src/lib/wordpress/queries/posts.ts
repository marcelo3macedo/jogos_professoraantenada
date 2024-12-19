export const QUERY_LATESTS_POSTS = `
     SELECT p.ID              AS id,
            p.post_title      AS title,
            p.post_date       AS date,
            p.post_excerpt    AS excerpt,
            p.post_content    AS content,
            p.post_name       AS slug,
            pm2.guid          AS featured_image_url
        FROM 
            wordpress_posts p
        LEFT JOIN 
            wordpress_postmeta pm ON p.ID = pm.post_id AND pm.meta_key = '_thumbnail_id'
        LEFT JOIN 
            wordpress_posts pm2 ON pm.meta_value = pm2.ID
        WHERE 
            p.post_type = 'post' 
            AND p.post_status = 'publish'
        ORDER BY 
            p.post_date DESC
    LIMIT ? OFFSET ?`;

export const QUERY_LATESTS_POSTS_TOTAL = `
    SELECT COUNT(*) AS totalPosts
       FROM wordpress_posts
      WHERE post_type = 'post' AND post_status = 'publish'`;

export const QUERY_SINGLE_POST = `
    SELECT 
        p.ID,
        p.post_title,
        p.post_date,
        p.post_excerpt,
        p.post_content,
        p.post_name AS post_slug,
        MAX(pm2.guid) AS featured_image_url,
        GROUP_CONCAT(t.name) AS categories
    FROM 
        wordpress_posts p
    LEFT JOIN 
        wordpress_postmeta pm ON p.ID = pm.post_id AND pm.meta_key = '_thumbnail_id'
    LEFT JOIN 
        wordpress_posts pm2 ON pm.meta_value = pm2.ID
    LEFT JOIN 
        wordpress_term_relationships tr ON p.ID = tr.object_id
    LEFT JOIN 
        wordpress_term_taxonomy tt ON tr.term_taxonomy_id = tt.term_taxonomy_id AND tt.taxonomy = 'category'
    LEFT JOIN 
        wordpress_terms t ON tt.term_id = t.term_id
    WHERE 
        p.post_type = 'post' 
        AND p.post_status = 'publish'
        AND p.post_name = ?  
    GROUP BY 
        p.ID`;
