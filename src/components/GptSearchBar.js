import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchTextRef = useRef();
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

  // Search Movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const searchText = searchTextRef.current.value;
    // Commenting this GPT API call since Payment Method is required to use GPT APIs anf it's throwing error while trying to add Payment option
    // MAke an API call to GPT API and get movie Results
    // const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query ${searchText}, only give me names of 5 movies, comma separated like the example result given ahead. Example Result is: Gadar, Sholay, Don, GolMaal, Koi Mil gaya`;
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // if (!gptResults.choices) {
    //   // handle Error
    // }
    // console.log(gptResults.choices[0]?.message?.content);
    // const gptMovies = gptResults.choices[0]?.message?.content.split(",");

    // remove this once GPT API call completes successfully
    const gptMovies = searchText.split(",");
    // for each movie we'll search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // it will return an array of 5 promises [promise1, promis2, promis3, promise4, promise5]
    const tmdbResults = await Promise.all(promiseArray);
    console.log({ tmdbResults });
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
    // koi mil gaya, mard, humgama, ajnabi se the, andaz apna apna
  };

  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black w-full md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchTextRef}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          onChange={(e) => e.target.value}
        />
        <button
          className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
