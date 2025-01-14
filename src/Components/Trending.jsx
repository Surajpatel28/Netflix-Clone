import React from 'react'
import TrendingCard from './TrendingCard'
import "./Trending.css"
const Trending = () => {
  return (
    <div className='trending'>
      <TrendingCard imagePath="\img1.webp"/>  
      <TrendingCard imagePath="\img2.webp"/>  
      <TrendingCard imagePath="\img3.webp"/>  
      <TrendingCard imagePath="\img4.webp"/>  
      <TrendingCard imagePath="\img5.webp"/>  
    </div>
  )
}

export default Trending