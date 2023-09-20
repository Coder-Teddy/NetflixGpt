/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'

const Browse = () => {
  const dispatch = useDispatch()
  const getNowPlayingMovies = async() =>{
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing", API_OPTIONS
    )
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(()=>{
    getNowPlayingMovies();
  },[])

  return (
    <Header />
  )
}

export default Browse