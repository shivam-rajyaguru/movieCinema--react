import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/movieContext.jsx";

import React from "react";

const Movie = () => {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) {
    return <img src="../components/loading.gif" alt="" />;
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 m-20">
      {movies.map((movie) => {
        console.log(movie);
        const { Title, Year, imdbID, Type, Poster } = movie;

        return (
          <div
            key={imdbID}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5  transition duration-300 ease-in-out hover:scale-90 hover:bg-slate-700 "
          >
            <>
              <a href="#">
                <img className="rounded-t-lg p-10" src={Poster} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {Title} - {Type}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {Year}
                </p>
                <NavLink to={`movie/${imdbID}`}>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </NavLink>
              </div>
            </>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
