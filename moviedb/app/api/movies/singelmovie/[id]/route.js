import axios from "axios";
import { API_KEY } from "../../route";
import { NextResponse } from "next/server";

export async function POST({ params }) {
  try {
    const { id } = params;

    if (!id)
      return NextResponse.json({ messsage: `Id not found` }, { status: 400 });

    const movieDetails = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    const castDetails = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );

    if (movieDetails && castDetails) {
      return NextResponse.json(
        { movieDetails },
        { castDetails },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ messsage: "Data not Found" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
