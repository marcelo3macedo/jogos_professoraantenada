export const QUERY_MENU_ITEMS = `
    SELECT t.term_id
      FROM wordpress_terms t INNER JOIN
           wordpress_term_taxonomy tt ON t.term_id = tt.term_id
     WHERE tt.taxonomy = 'nav_menu'
       AND t.name = ?
`;

export const QUERY_MENU_BY_ID = `
 SELECT 
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
`;
