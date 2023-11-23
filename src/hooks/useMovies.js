import { useState, useEffect } from "react";
import moviesData from "../data/movies.json";
export default function useMovies() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState(false);

  useEffect(() => {
    // const fetchData = async () => {
    //   setLoading(true);
    //   await axios
    //     .get("https://imdb-top-100-movies.p.rapidapi.com/", {
    //       headers: {
    //         "X-RapidAPI-Key": "52468f2f54msh985f69293a2eb70p120022jsnac3aaff0b50f",
    //         "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    //       },
    //     })
    //     .then((response) => {
    //       setMovies(response.data);
    //       setLoading(false);
    //       console.log("top of rated", response.data);
    //     })
    //     .catch((error) => {
    //       setError(true);
    //       setLoading(false);
    //     });
    // };

    // fetchData();

    setLoading(true);
    setTimeout(() => {
      setMovies(moviesData);
      setLoading(false);
    }, 1000);
  }, []);

  return { error, loading, movies };
}
