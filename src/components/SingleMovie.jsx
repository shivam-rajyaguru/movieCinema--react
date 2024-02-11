import { NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  console.log(id);

  const { isLoading, movies } = useFetch(`&i=${id}`);
  console.log(movies);

  if (isLoading) {
    return (
      <section className="movies-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (
    <div
      className="relative flex justify-center items-center w-auto flex-col  bg-clip-border rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-md max-w-[20rem] ml-96"
      style={{ marginLeft: "618px", marginTop: "20px" }}
    >
      <div className="relative overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10">
        <img className="w-72 p-8" src={movies.Poster} alt={movies.Title} />
      </div>
      <div className="p-2">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span>Movie:</span>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              {movies.Title} ({movies.Year})
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span>
              <p>Actors:</p>
            </span>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              {movies.Actors}
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span>Genre:</span>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              {movies.Genre}
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span>Language:</span>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              {movies.Language}
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span>Collection:</span>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              {movies.BoxOffice ? movies.BoxOffice : "N/A"}
            </p>
          </li>
        </ul>
      </div>
      <NavLink to="/">
        <div className="p-0 mt-4">
          <button className="bg-blue-500 m-2 p-1 rounded-md " type="button">
            Go Back
          </button>
        </div>
      </NavLink>
    </div>
  );
};

export default SingleMovie;
