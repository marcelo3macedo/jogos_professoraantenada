import { RowDataPacket } from "mysql2";
import { db } from "@/lib/wordpress/db";
import { unserialize } from "php-serialize";

export async function getThemeConfig(prop: string) {
  const theme = await getActiveTheme();
  const option_name = `theme_mods_${theme}`;

  const [[themeOption]] = await db.query<RowDataPacket[]>(
    `  SELECT option_name, option_value 
         FROM wordpress_options
        WHERE option_name = ?
        LIMIT 1`,
    option_name,
  );

  if (!themeOption) return;

  const value = themeOption["option_value"];
  const data = unserialize(value);

  return data[prop];
}

export async function getActiveTheme() {
  const [[option]] = await db.query<RowDataPacket[]>(
    `  SELECT option_name, option_value 
         FROM wordpress_options
        WHERE option_name = 'template'
        LIMIT 1`,
  );

  if (!option) return;

  return option.option_value;
}
