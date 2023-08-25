import axios from "axios";
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
 
  return (
    <main className="bg-[rgb(184,209,234)] w-[100%] flex justify-evenly items-center flex-wrap px-10">
      {moiveData.map((e, i) => (
        <div className="w-[22%] h-96 my-5 flex flex-col cursor-pointer rounded-md shadow-lg shadow-blue-600" key={i}>
          <div className="border h-[85%] rounded-md">
            <img
              src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
              alt="movie"
              className="w-full h-full rounded-md"
            />
          </div>
          <p className="h-[10%] flex justify-center items-center">
            {e.original_title}
          </p>
          <p className="h-[5] flex justify-center items-center">
            Ratings: {e.vote_average}
          </p>
        </div>
      ))}

    </main>
  );
};

export default HomePage;
