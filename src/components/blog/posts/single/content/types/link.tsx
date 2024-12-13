export const LinkType = ({
  href,
  content,
}: {
  href: string;
  content: string;
}) => {
  return (
    <a href={href}>
      <p className="text-lg py-1 text-justify">{content}</p>
    </a>
  );
};
