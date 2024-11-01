export default function Search() {
  return (
    <form role="search" method="get" className="search-form pb-2" action="/">
      <div className="relative">
        <input
          type="search"
          className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Buscar..."
          name="s"
        />
        <button type="submit" className="absolute top-0 right-0 mt-2 mr-4">
          <svg
            className="w-6 h-6 text-gray-600 hover:text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            ></path>
          </svg>
        </button>
      </div>
    </form>
  );
}
