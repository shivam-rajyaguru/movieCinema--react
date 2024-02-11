import React, { useState, useEffect } from "react";
export const API_URL = `https://www.omdbapi.com/?apikey=78bf57e4`;

const useFetch = (apiparams) => {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const getMovie = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovies(data.Search || data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(`${API_URL}${apiparams}`);
    getMovie(`${API_URL}${apiparams}`);
  }, [apiparams]);
  return { movies, isloading };
};

export default useFetch;
