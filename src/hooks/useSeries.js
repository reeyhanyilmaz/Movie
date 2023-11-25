import { useState, useEffect } from "react";
import axios from "axios";
import seriesData from "../data/series.json";

export default function useSeries() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [series, setSeries] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios
        .get("https://imdb-top-100-movies.p.rapidapi.com/series", {
          headers: {
            "X-RapidAPI-Key": "62df342172msh6f6ae24a5da15afp12fd93jsn6610f9009b43",
            "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
          },
        })
        .then((response) => {
          setSeries(response.data);
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
    //   setSeries(seriesData);
    //   setLoading(false);
    // }, 1000);
  }, []);

  return { error, loading, series };
}
