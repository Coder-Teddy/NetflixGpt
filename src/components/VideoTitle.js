import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 w-1/4'>{overview}</p>

        <div>
            <button className='bg-white font-bold text-black p-4 px-12 rounded-lg hover:bg-opacity-70'>Play</button>
            <button className='bg-gray-500 text-white p-4 px-12 mx-2 bg-opacity-50 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle