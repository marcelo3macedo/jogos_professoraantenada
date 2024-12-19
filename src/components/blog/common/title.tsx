export default function Title({ title }: { title: string }) {
  return (
    <div className="my-8 text-center px-2 md:px-0">
      <h2 className="text-2xl md:text-3xl font-bold text-violet-950 border-b-4 pb-4 border-violet-950">
        {title}
      </h2>
    </div>
  );
}
