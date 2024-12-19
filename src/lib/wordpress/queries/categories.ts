export const QUERY_CATEGORIES_LIST = `
    SELECT t.term_id as termId,
           t.name,
           t.slug
      FROM wordpress_terms t INNER JOIN
           wordpress_term_taxonomy tt ON tt.term_id = t.term_id
     WHERE tt.taxonomy = 'category'
       ORDER BY t.name
       LIMIT 30`;

export const QUERY_CATEGORIES_CHILDREN = `
    SELECT t.term_id as termId,
           t.name,
           t.slug
      FROM wordpress_terms t INNER JOIN
           wordpress_term_taxonomy tt ON tt.term_id = t.term_id
     WHERE tt.parent = ?
       AND tt.taxonomy = 'category'`;

export const QUERY_CATEGORIES_SINGLE = `
    SELECT t.term_id as termId,
           t.slug,
           t.name,
           tt.description
      FROM wordpress_terms t INNER JOIN 
           wordpress_term_taxonomy tt ON tt.term_id = t.term_id
     WHERE tt.taxonomy = 'category' 
       AND t.slug = ?
     LIMIT 1;`;

export const QUERY_CATEGORIES_POSTS = `
    SELECT  p.ID              AS id,
            p.post_title      AS title,
            p.post_date       AS date,
            p.post_excerpt    AS excerpt,
            p.post_name       AS slug,
            pm2.guid          AS featured_image_url
       FROM wordpress_terms t INNER JOIN 
            wordpress_term_taxonomy tt ON tt.term_id = t.term_id INNER JOIN 
            wordpress_term_relationships tr ON tr.term_taxonomy_id = tt.term_taxonomy_id INNER JOIN 
            wordpress_posts p ON p.ID = tr.object_id LEFT JOIN 
            wordpress_postmeta pm ON p.ID = pm.post_id AND pm.meta_key = '_thumbnail_id' LEFT JOIN 
            wordpress_posts pm2 ON pm.meta_value = pm2.ID
      WHERE tt.taxonomy = 'category' 
        AND t.slug = ?
        AND p.post_status = 'publish'
        AND p.post_type = 'post'
      LIMIT ?
     OFFSET ?`;

export const QUERY_CATEGORIES_POSTS_COUNTER = `
    SELECT COUNT(*) AS total
      FROM wordpress_terms t INNER JOIN
           wordpress_term_taxonomy tt ON tt.term_id = t.term_id INNER JOIN
           wordpress_term_relationships tr ON tr.term_taxonomy_id = tt.term_taxonomy_id INNER JOIN
           wordpress_posts p ON p.ID = tr.object_id
     WHERE tt.taxonomy = 'category' 
       AND t.slug = ? 
       AND p.post_status = 'publish' 
       AND p.post_type = 'post';`;
