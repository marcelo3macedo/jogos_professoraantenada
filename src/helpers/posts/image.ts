export function getImage(imageSrc: string) {
  const urlWithoutDomainAndWpContent = imageSrc.replace(
    /^https?:\/\/[^/]+\/wp-content/,
    "",
  );
  return `${process.env.BLOG_IMAGE_PATH}${urlWithoutDomainAndWpContent}`;
}
