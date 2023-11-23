"use client";
import React  from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useMovies from "@/hooks/useMovies";
import useSeries from "@/hooks/useSeries";

function MovieList() {
  const router = useRouter();
  const { error, loading, movies } = useMovies();
  const { error: seriesError, loading: seriesLoading, series } = useSeries();
  const handlePaymentClick = () => {
    router.push("/payment");
    console.log("test :>> ");
  };

  return (
    <main>
      <nav className="flex justify-evenly">
        <p>CineMax</p>
        <div className="flex justify-evenly">
          <p>Movies</p>
          <p>Series</p>
          <p>Animation</p>
          <p>Genres</p>
        </div>

        <div className="flex justify-evenly">
          <p>Search</p>
          <button onClick={handlePaymentClick}>Payment</button>
          <p>Nofitication</p>
          <p>Profile</p>
        </div>
      </nav>

      <section className="flex-1">
        {/* movies */}
        <div>
          <h2 className="text-fuchsia-600">Top Rated</h2>
          <div className="flex flex-row">
            {loading ? <p>loading...</p> : null}
            {error ? <p>error...</p> : null}
            {movies &&
              movies.map((item) => (
                <div key={item.id} className="flex flex-row">
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
        {/* series */}
        <div>
          <h2>Best of Series</h2>
          <div className="flex flex-row">
            {seriesLoading ? <p>loading...</p> : null}
            {seriesError ? <p>error...</p> : null}
            {series &&
              series.map((item) => (
                <div key={item.id} className="flex flex-row">
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
      </section>
    </main>
  );
}

export default MovieList;
