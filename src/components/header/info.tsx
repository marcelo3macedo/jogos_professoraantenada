
export default function HeaderInfo({ title, subtitle }: HeaderInfo) {
    return (
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">
            {title}
          </h1>

          <p className="max-w-lg mx-auto text-lg mt-2 text-gray-500">
            {subtitle}
          </p>
        </div>
    )
}