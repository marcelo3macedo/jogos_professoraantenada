import { unserialize } from "php-serialize";

import { queryDatabase } from "@/lib/wordpress/db";

export async function getThemeConfig(prop: string) {
  const theme = await getActiveTheme();
  const option_name = `theme_mods_${theme}`;

  const [themeOption] = (await queryDatabase(
    `  SELECT option_name, option_value 
         FROM wordpress_options
        WHERE option_name = ?
        LIMIT 1`,
    option_name,
  )) as any;

  if (!themeOption) return;

  const value = themeOption["option_value"];
  const data = unserialize(value);

  return data[prop];
}

export async function getActiveTheme() {
  const [option] = (await queryDatabase(
    `  SELECT option_name, option_value 
         FROM wordpress_options
        WHERE option_name = 'template'
        LIMIT 1`,
  )) as any;

  if (!option) return;

  return option.option_value;
}
