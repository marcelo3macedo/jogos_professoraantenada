export function getExcerpt(excerpt: string, content: string) {
  if (!excerpt) {
    return getExcerptFromContent(content);
  }

  return excerpt.includes("|") ? excerpt.split("|")[0].trim() : excerpt.trim();
}

export function getExcerptFromContent(
  content: string,
  wordsCounter: number = 25,
) {
  if (!content) return;

  const plainText = content
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/\n/g, " ")
    .trim();

  const words = plainText.split(/\s+/);
  return words.slice(0, wordsCounter).join(" ");
}
