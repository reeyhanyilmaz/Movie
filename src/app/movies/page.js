"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import useMovies from "@/hooks/useMovies";
import useSeries from "@/hooks/useSeries";
import MoviesNavbar from "@/components/Movies/MoviesNavbar";
import SideBar from "@/components/Movies/SideBar";

function MovieList() {
  const { error, loading, movies } = useMovies();
  const { error: seriesError, loading: seriesLoading, series } = useSeries();

  //scroll
  const containerRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setStartX(e.pageX - containerRef.current.offsetLeft);
  };

  const handleMouseUp = () => {
    setStartX(null);
  };

  const handleMouseMove = (e) => {
    if (!startX) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 0.5; // kaydırma hızı
    containerRef.current.scrollLeft = scrollLeft - walk;
    setScrollLeft(containerRef.current.scrollLeft);
  };

  return (
    <main>
      <MoviesNavbar />
      <section className="flex-1 flex">
        <SideBar />
        <div className="w-5/6 pl-8 dark:bg-darkModaFirstColor">
          {/* movies */}
          <div>
            <h2 className="text-2xl font-bold text-blackTextColor mb-6 dark:text-white">Top Rated</h2>
            <div
              className="flex flex-row overflow-hidden"
              ref={containerRef}
              onMouseDown={handleMouseDown} //sürükleme
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove} //icerik kaydırma
              onMouseLeave={handleMouseUp} //sürükleme bitiyor
            >
              {loading ? <p>loading...</p> : null}
              {error ? <p>error...</p> : null}
              {movies &&
                movies.map((item) => (
                  <div key={item.id} className="flex flex-row">
                    <p className="flex items-center text-blackTextColor text-[56px] font-semibold mr-4 dark:text-white">
                      {item.rank}
                    </p>
                    <div className="w-[274px] h-[137px] flex mr-[25px]">
                      <Image className="rounded-2xl mr-4" src={item.image} width={112} height={137} alt="movie"/>
                      <div className="flex flex-col justify-between">
                        <p className="flex justify-center rounded-lg py-1 px-2 border border-ligthModeBorderColor w-[47px] text-lightGrayTextColor dark:border-[#29282F]">
                          {item.year}
                        </p>
                        <p className="text-base font-bold overflow-hidden overflow-ellipsis whitespace-nowrap w-[150px] dark:text-white">{item.title}</p>
                        <div className="flex">
                          <Image src="/movies/film.svg" width={16} height={16} alt="icon"/>
                          {item.genre.map((genre, index) => (
                            <p key={index} className="overflow-hidden overflow-ellipsis whitespace-nowrap text-grayTextColor text-sm flex">
                              {genre}
                              {index < item.genre.length - 1 && <span className="ml-1 mr-1">•</span>}
                            </p>
                          ))}
                        </div>

                        <p className="flex gap-1 dark:text-white">
                          <Image src="/movies/star.svg" width={20} height={20} alt="icon"/> {item.rating}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* series */}
          <div className="mt-10">
            <p className="mb-6 text-2xl font-bold text-blackTextColor dark:text-white">Best of Series</p>
            <div className="grid grid-cols-4">
              {seriesLoading ? <p>loading...</p> : null}
              {seriesError ? <p>error...</p> : null}
              {series &&
                series.map((item) => (
                  <div key={item.id} className="flex flex-col mb-4">
                    <Image className="object-cover rounded-2xl mb-3 max-h-[250px]" src={item.image} width={264} height={183} alt="movie_image" />
                    <p className="text-base font-bold mb-3 dark:text-white">{item.title}</p>
                    <div className="flex flex-row items-center">
                      <span className="flex pr-1">
                        <Image className="pr-px" src="/movies/star.svg" width={18} height={18} alt="icon"/>
                        <p className="font-xs font-semibold dark:text-white">{item.rating}</p>
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
