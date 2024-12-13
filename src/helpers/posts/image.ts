export function getImage(imageSrc: string) {
  if (!imageSrc) return;

  const urlWithoutDomainAndWpContent = imageSrc.replace(
    /^https?:\/\/[^/]+\/wp-content/,
    "",
  );
  return `${process.env.BLOG_IMAGE_PATH}${urlWithoutDomainAndWpContent}`;
}
