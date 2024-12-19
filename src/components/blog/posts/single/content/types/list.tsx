export const ListType = ({ content }: { content: string[] }) => {
  if (!content) return <></>;

  return (
    <ul className="list-disc mx-8 my-2">
      {content.map((item, index) => (
        <li className="text-lg my-1" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};
