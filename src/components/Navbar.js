import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import SearchForm from "./SearchForm";
const Navbar = () => {
  return (
    <nav className="h-11 min-w-full flex items-center justify-between">
      {/* icons */}
      <Link to="/">
        <div className="pl-[8vw] flex items-center gap-2">
          <FaYoutube size={40} color="red" />
          <p className="font-semibold hidden sm:inline-block">YOUTUBE</p>
        </div>
      </Link>
      {/* search form */}
      <div className="pr-[8vw]">
        <SearchForm />
      </div>
    </nav>
  );
};

export default Navbar;
