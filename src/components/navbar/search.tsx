import { BsFillSearchHeartFill } from "react-icons/bs";

export default function Search() {
  return (
    <form role="search" method="get" className="search-form" action="/pesquisa">
      <div className="relative">
        <input
          type="search"
          className=" w-full md:w-40 block px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
          placeholder="Buscar..."
          name="s"
        />
        <button type="submit" className="absolute top-0 right-0 mt-2 mr-2">
          <BsFillSearchHeartFill className="w-6 h-6 text-gray-600 hover:text-blue-500" />
        </button>
      </div>
    </form>
  );
}
