export default function HeaderInfo({ title, subtitle }: Readonly<HeaderInfo>) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">
        {title}
      </h1>

      <p className="max-w-lg mx-auto text-xl mt-2 text-gray-500">{subtitle}</p>
    </div>
  );
}
