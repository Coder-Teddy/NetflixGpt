/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();
  
    const getMovieVideo = async ()=>{
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS)
  
      const json = await data.json();
      
      const filterData = json.results.filter((video)=>video.type === 'Trailer')
      const trailer = filterData.length ? filterData[0]:json.result[0]
      dispatch(addTrailerVideo(trailer))
    }
  
    useEffect(()=>{
      getMovieVideo ();
    }, [])
}

export default useMovieTrailer;