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
  // console.log(movieDetails);

  return (
    <main className="bg-[rgb(184,209,234)] ">
      {/* Movie Details */}

      <div className="w-full relative ">
        {/* background image */}
        <div className="absolute top-0 -z-0 w-full h-full opacity-50 sm:h-[500px]">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails?.backdrop_path}`}
            alt="image"
            className="h-full w-full"
          />
        </div>
        {/* title image */}
        <div className="relative top-0 z-20 w-full h-full flex flex-col justify-center items-center sm:flex-row sm:justify-around sm:h-[500px]">
          <div className="h-[400px] w-[80%] mt-10 mb-2 sm:w-[30%]">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`}
              alt="poster"
              className="w-full h-full rounded-2xl shadow-lg shadow-slate-800"
            />
          </div>

          {/* Details */}
          <div className="border border-blue-800 mt-2 mb-5  w-[80%] sm:w-[60%] sm:h-[400px] flex flex-col justify-evenly items-stretch">
            
            <div className="text-[#13005A] h-auto">

              <p className="text-[4vh] font-bold py-1">
                {movieDetails.original_title}&nbsp;(
                {movieDetails.release_date.slice(0, 4)})
              </p>

              <div className="flex px-2 flex-wrap py-1">
                {movieDetails.adult && (
                  <p className="text-[2.5vh] border-2 border-blue-950 flex items-center justify-center text-red-500 font-extrabold p-0.3">
                    18+
                  </p>
                )}

                {movieDetails?.genres?.map((e, i) => (
                  <p
                    key={i}
                    className="px-2 text-[2.5vh] text-[#790252] font-semibold"
                  >
                    {e.name}&nbsp;
                  </p>
                ))}
              </div>
            </div>

            <div className="border-[3px] border-red-600 w-14 h-14 p-2 m-1 rounded-full font-bold text-[2.5vh] flex justify-center items-center">{movieDetails.vote_average}</div>

            <div className="">
              <h1 className="text-[3vh] font-bold p-1">Overview :</h1>
              <p className="p-1">{movieDetails.overview}</p>
              
              </div>
          </div>
        </div>
      </div>

      {/* Cast Details */}
      <div></div>
    </main>
  );
};

export default SinglePage;
