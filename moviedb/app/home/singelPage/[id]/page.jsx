import axios from 'axios'
import React from 'react'

const getMovieDetails =async(id)=>{

  const response = await axios.get(`http://localhost:3000/api/movies/${id}`)

  if(response.status === 400 || response.status === 500){
    return response.data.message;
  }

  return response.data;
}

const SinglePage = async({params}) => {
  const {id} = params;
  const Details = await getMovieDetails(id);
  const {movieDetails} = Details;
  // console.log(Details.movieDetails)
  

  return (
    <main className='bg-[rgb(184,209,234)] '>
        {/* Movie Details */}
       
        <div className='border border-red-700 w-full h-[400px] flex justify-center items-center '>
            <div className='border border-red-800 w-[95%] h-[90%] rounded-md flex'>

              <div className='w-[50%] h-[100%] flex justify-center items-center'>
                <div>
                    
                </div>
                <div className='text-blue-950 h-[50%]'>
                  <p className='font-medium text-3xl'>Overview</p>
                  <p className=''></p>
                </div>
              </div>

              <div className='w-[50%]'>
                <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`} alt="background img" className='w-[100%] h-[100%] rounded-lg'/>
              </div>
            </div>
        </div>

        {/* Cast Details */}
        <div></div>
    </main>
  )
}

export default SinglePage
