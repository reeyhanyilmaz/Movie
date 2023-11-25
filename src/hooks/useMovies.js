import { useState, useEffect } from "react";
import axios from "axios";
import moviesData from "../data/movies.json";

export default function useMovies() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios
        .get("https://imdb-top-100-movies.p.rapidapi.com/", {
          headers: {
            "X-RapidAPI-Key": "62df342172msh6f6ae24a5da15afp12fd93jsn6610f9009b43",
            "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
          },
        })
        .then((response) => {
          setMovies(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(true);
          setLoading(false);
        });
    };

    fetchData();

    // setLoading(true);
    // setTimeout(() => {
    //   setMovies(moviesData);
    //   setLoading(false);
    // }, 1000);
  }, []);

  return { error, loading, movies };
}
