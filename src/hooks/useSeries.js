import { useState, useEffect } from "react";
import seriesData from "../data/series.json";

export default function useSeries() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [series, setSeries] = useState(false);

  useEffect(() => {
    // const fetchData = async () => {
    //   setLoading(true);
    //   await axios
    //     .get("https://imdb-top-100-movies.p.rapidapi.com/series", {
    //       headers: {
    //         "X-RapidAPI-Key": "52468f2f54msh985f69293a2eb70p120022jsnac3aaff0b50f",
    //         "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    //       },
    //     })
    //     .then((response) => {
    //       setSeries(response.data);
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
      setSeries(seriesData);
      setLoading(false);
    }, 1000);
  }, []);

  return { error, loading, series };
}
