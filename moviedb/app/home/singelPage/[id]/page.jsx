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
            
        </div>

        {/* Cast Details */}
        <div></div>
    </main>
  )
}

export default SinglePage
