"use client";
import React from "react";
import Image from "next/image";

import useMovies from "@/hooks/useMovies";
import useSeries from "@/hooks/useSeries";
import MoviesNavbar from "@/components/Movies/MoviesNavbar";
import SideBar from "@/components/Movies/SideBar";

function MovieList() {
  const { error, loading, movies } = useMovies();
  const { error: seriesError, loading: seriesLoading, series } = useSeries();

  return (
    <main>
      <MoviesNavbar />
      <section className="flex-1 flex">
        <SideBar />
        <div className="w-5/6 pl-8">
          {/* movies */}
          <div>
            <h2 className="text-2xl font-bold text-blackTextColor">Top Rated</h2>
            <div className="flex flex-row">
              {loading ? <p>loading...</p> : null}
              {error ? <p>error...</p> : null}
              {movies &&
                movies.map((item) => (
                  <div key={item.id} className="flex flex-row">
                    <p className="text-blackTextColor text-[56px] font-semibold">{item.rank}</p>
                    <Image src={item.image} width={100} height={100} />
                    <div>
                      <p>{item.year}</p>
                      <p>{item.title}</p>
                      {item.genre.map((genre, index) => (
                        <p key={index} className="text-grayTextColor">
                          {genre}
                        </p>
                      ))}
                      <p>
                        <Image src="/movies/star.svg" width={20} height={20} /> {item.rating}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* series */}
          <div className="mt-10">
            <p className="mb-6 text-2xl font-bold text-blackTextColor">Best of Series</p>
            <div className="grid grid-cols-4">
              {seriesLoading ? <p>loading...</p> : null}
              {seriesError ? <p>error...</p> : null}
              {series &&
                series.map((item) => (
                  <div key={item.id} className="flex flex-col w-[264] h-[251] mb-4">
                    <Image className="rounded-2xl mb-3" src={item.image} width={264} height={183} />
                    <p className="text-base font-bold mb-3">{item.title}</p>
                    <div className="flex flex-row items-center">
                      <span className="flex pr-1">
                        <Image className="pr-px" src="/movies/star.svg" width={18} height={18} />
                        <p className="font-xs font-semibold">{item.rating}</p>
                      </span>
                      <div className="flex justify-center items-center h-3.5 w-0.5 bg-grayTextColor mr-2"></div>
                      {item.genre.map((genre, index) => (
                        <p key={index} className="text-grayTextColor text-sm">
                          {genre}
                          {index < item.genre.length - 1 && <span className="ml-1 mr-1">•</span>}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MovieList;
