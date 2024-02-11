import { createContext, useContext, useState } from "react";
import useFetch from "../components/useFetch";

const MovieContext = createContext("");

const MovieProvider = ({ children }) => {
  const [query, setQuery] = useState("Harry");
  const { movies, isloading } = useFetch(`&s=${query}`);

  return (
    <MovieContext.Provider value={{ movies, query, setQuery, isloading }}>
      {children}
    </MovieContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(MovieContext);
};

export { MovieContext, MovieProvider, useGlobalContext };
