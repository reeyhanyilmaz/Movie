import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

function MovieList() {
  const [topRatedData, setTopRatedData] = useState([]);
  const [bestofSeriesData, setBestofSeriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://imdb-top-100-movies.p.rapidapi.com/", {
          headers: {
            "X-RapidAPI-Key": "52468f2f54msh985f69293a2eb70p120022jsnac3aaff0b50f",
            "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
          },
        })
        .then((response) => {
          setTopRatedData(response.data);
          console.log("top of rated", response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://imdb-top-100-movies.p.rapidapi.com/series/", {
          headers: {
            "X-RapidAPI-Key": "52468f2f54msh985f69293a2eb70p120022jsnac3aaff0b50f",
            "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
          },
        })
        .then((response) => {
          setBestofSeriesData(response.data);
          console.log("movies series", response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchData();
  }, []);

  return (
    <main className="bg-red">
      <div>
        <h2 className="text-fuchsia-600">Top Rated</h2>
        {/* top rated */}
        <div className="flex flex-row">
          {bestofSeriesData &&
            bestofSeriesData.map((item) => (
              <div key={item.id} className="flex flex-row bg-black">
                <h1>{item.rank}</h1>
                {/* <Image src={item.image} width={100} height={100}/> */}
                <div>
                  <p>{item.year}</p>
                  <p>{item.title}</p>
                  <p>{item.genre}</p>
                  <p>{item.rating}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* movie series */}
      <div>
        <h2>Best of Series</h2>

        <div className="flex flex-row">
          {topRatedData &&
            topRatedData.map((item) => (
              <div key={item.id} className="flex flex-row bg-black">
                {/* <Image src={item.image} width={100} height={100}/> */}
                  <p>{item.title}</p>
                <div className="flex flex-row">
                  <p>{item.rating}</p>
                  <p>{item.genre}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}

export default MovieList;
