import { Link } from "react-router-dom";
import { useState } from "react";

import Login from "./Login";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="relative flex justify-between items-center  text-sm px-5 py-5 bg-slate-50 md:px-10 md:py-10 md:text-md">
      <Link to="/" className="text-lg font-bold">
        GuruSys
      </Link>
      <nav className="">
        <ul className="flex">
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/blog">Blogs</Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={handleMenu}
        className="border-2 px-4 py-2 rounded-lg md:px-5 md:py-2"
      >
        Login
      </button>
      {isMenuOpen && (
        <Login isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
    </header>
  );
}

export default Header;
