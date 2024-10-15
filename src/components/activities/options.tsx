import DragItem from "./dragItem";

export default function OptionsPage({
  options,
  action,
}: {
  readonly options: string[];
  readonly action: any;
}) {
  if (!options) return [];

  if (options.length > 4) {
    return (
      <div className="grid grid-cols-3 py-4 gap-2 content-center items-center justify-center">
        {options.map((o: string) => {
          return (
            <DragItem
              key={o}
              value={o}
              action={() => {
                action(o);
              }}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 py-4 gap-4 content-center items-center justify-center">
      {options.map((o: string) => {
        return (
          <DragItem
            key={o}
            value={o}
            action={() => {
              action(o);
            }}
          />
        );
      })}
    </div>
  );
}
