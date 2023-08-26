import axios from "axios";
import Link from "next/link";
import React from "react";

const getmovie = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/movies");

    if (response.status === 200) {
      return response.data;
    } else if (response.status === 400) {
      return response.data.message;
    }
  } catch (error) {
    return error;
  }
};

const HomePage = async () => {
  const { moiveData } = await getmovie();
  // console.log(moiveData)

  return (
    <main className="bg-[rgb(184,209,234)] w-[100%] flex justify-evenly items-center flex-wrap px-10">
      {moiveData.map((e, i) => (
        <Link
          href={`./home/singelPage/${e.id}`}
          className="w-[22%] my-5 flex flex-col cursor-pointer rounded-md shadow-lg shadow-blue-600"
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
            Ratings: {e.vote_average}
          </p>
        </Link>
      ))}
    </main>
  );
};

export default HomePage;
