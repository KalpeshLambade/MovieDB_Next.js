"use client";
import React, { useEffect, useState } from "react";

const getmovie = async () => {
  try {
    const response = await axios.post("http://localhost:3000/api/movies", {
      page: 3,
    });

    if (response.status === 200) {
      return response.data;
    } else if (response.status === 400) {
      return response.data.message;
    }
  } catch (error) {
    return error;
  }
};

const HomeComponent = () => {
  const [moiveData, setMovieData] = useState();

  useEffect(() => {
    setMovieData(getmovie())
  }, []);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const contentHeight = document.documentElement.scrollHeight;

      if (scrollPosition + windowHeight >= contentHeight - 10) {
        loadMore();
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <main className="bg-[rgb(184,209,234)] w-full min-h-screen pt-14 pb-10 flex justify-evenly items-center flex-wrap px-10">
        <div className="flex flex-wrap justify-around w-full h-full">
          {moiveData &&
            moiveData.map((e, i) => (
              <Link
                href={`/home/singelPage/${e.id}`}
                className="w-[250px] my-5 flex flex-col cursor-pointer rounded-md border shadow-lg text-blue-950 font-bold"
                key={i}
              >
                <div className="border h-96 rounded-md">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                    alt="movie"
                    className="w-full h-full rounded-md"
                  />
                </div>
                <p className="h-10 flex justify-center items-center">
                  {e.original_title}
                </p>
                <p className="h-8 flex justify-center items-center">
                  Ratings:{" "}
                  <span className="text-red-700"> {e.vote_average}</span>
                </p>
              </Link>
            ))}
        </div>
      </main>
    </>
  );
};

export default HomeComponent;
