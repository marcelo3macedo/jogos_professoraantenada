"use client";
export default function Syllables({
  syllables,
  missSyllable,
}: {
  readonly syllables: any;
  readonly missSyllable: any;
}) {
  return (
    <div className="flex">
      {syllables.map((s: any) =>
        s === missSyllable ? (
          <div key={s} className="w-12 border-b-4 border-black"></div>
        ) : (
          <span className="px-1 text-4xl" key={s}>
            {s}
          </span>
        ),
      )}
    </div>
  );
}
