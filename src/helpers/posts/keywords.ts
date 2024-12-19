export function getKeywordsFromExcerpt(excerpt: string): string {
  if (!excerpt || !excerpt.includes("|")) {
    return "";
  }

  const parts = excerpt.split("|");
  if (parts.length > 1) {
    return parts[1].trim();
  }

  return "";
}
