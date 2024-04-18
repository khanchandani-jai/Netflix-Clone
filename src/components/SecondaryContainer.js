import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (movies === null) return;
  return (
    movies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-52 px-4 md:pl-12 relative z-20">
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Up Coming" movies={movies.upcomingMovies} />
          <MovieList title="Top Rated" movies={movies.topRatedMovies} />
          <MovieList title="Popular" movies={movies.popularMovies} />

          {/* 
    movie list
    - popular
    - now playing
    - Trending
    
    - movieCards * n
  */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
