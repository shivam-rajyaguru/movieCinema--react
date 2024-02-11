import React from "react";
import { useGlobalContext } from "../context/movieContext";

const Navbar = () => {
  const { query, setQuery } = useGlobalContext();
  return (
    <nav className="bg-black text-white h-12">
      <div className="flex justify-between pt-3">
        <h3 className="text-lg pl-5">MovieCinema</h3>
        <form
          action="#"
          className="flex pr-16"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="pr-3">Search Movie </h3>
          <input
            className="rounded-md text-black"
            type="text"
            name="search"
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder=" search"
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
