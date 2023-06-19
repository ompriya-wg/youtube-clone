import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <form action="" className="flex items-center">
        <FaSearch
          className="bg-white text-gray-600 rounded-l-xl p-2"
          size={32}
        />
        <label htmlFor="searchit">
          <input
            type="search"
            name="searchit"
            id="searchit"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-r-xl p-1 text-black focus:outline-none"
          />
        </label>
      </form>
    </div>
  );
};

export default SearchForm;
