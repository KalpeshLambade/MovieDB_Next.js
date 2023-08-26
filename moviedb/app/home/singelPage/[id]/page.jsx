import axios from "axios";
import React from "react";

const getMovieDetails = async (id) => {
  const response = await axios.get(`http://localhost:3000/api/movies/${id}`);

  if (response.status === 400 || response.status === 500) {
    return response.data.message;
  }

  return response.data;
};

const SinglePage = async ({ params }) => {
  const { id } = params;
  const Details = await getMovieDetails(id);
  const { movieDetails } = Details;
  console.log(movieDetails);

  return (
    <main className="bg-[rgb(184,209,234)] ">
      {/* Movie Details */}


      <div className="border-2 border-blue-700 w-full relative ">

        <div className="absolute top-0 -z-0 w-full h-full opacity-80 sm:h-[500px]">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails?.backdrop_path}`}
            alt="image"
            className="h-full w-full"
          />
        </div>

        <div className="relative top-0 z-20 w-full h-full flex flex-col justify-center items-center sm:flex-row sm:justify-around sm:h-[500px]">
          <div className="h-[400px] w-[80%] mt-10 mb-2 sm:w-[30%]">
            <img src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`} alt="poster" className="w-full h-full rounded-2xl shadow-lg shadow-slate-800"/>
          </div>

          <div className="border border-red-800 mt-2 mb-5 h-[200px] w-[80%] sm:w-[60%] sm:h-[400px]"></div>
        </div>
      </div>

      {/* Cast Details */}
      <div></div>
    </main>
  );
};

export default SinglePage;
