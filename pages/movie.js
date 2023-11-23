import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

function MovieList() {
  const [topRatedData, setTopRatedData] = useState([]);
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
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchData();
  }, []);

  return (
    <main>
      <div>
        <h2>Top Rated</h2>
        <div>
          {topRatedData &&
            topRatedData.map((item) => (
              <div key={item.id} className="flex flex-row">
                <h1>{item.rank}</h1>
                {/* <Image src={item.image} width={100} height={100}/> */}
                <div>
                  <p>{item.title}</p>
                  <p>{item.genre}</p>
                  <p>{item.rating}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}

export default MovieList;
